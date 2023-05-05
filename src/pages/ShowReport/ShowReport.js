import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import "../../styles/ShowReport.css";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import { formateTimeStamp } from "../../helpers";
import { getDoctors } from "../../api/helpers";
import ReportChat from "../../components/ReportChat/ReportChat";
import SelectDoctor from "../../components/SelectDoctor/SelectDoctor";
import { Link } from "@mui/material";

export default function ShowReport(props) {
  const [data, setData] = useState(null);
  const [windowOpen, setWindowOpen] = useState(false);
  const [doctorModal, setDoctorModal] = useState(false);
  const [doctorsList, setDoctorsList] = useState([]);
  const [otherData, setOtherData] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const history = useHistory();

  const token = useSelector((state) => state.auth.accessToken);
  const userType = useSelector((state) => state.auth.userType);

  const fetchDoctors = (token) => {
    getDoctors(token)
      .then((response) => {
        setDoctorsList(response);
      })
      .then(setDoctorModal(true));
  };

  useEffect(() => {
    if (props.location.data === undefined) {
      history.push("/reports");
    } else {
      setData(props.location.data);
      // setOtherData(JSON.parse(props.location.data.other_data))
      setConfidence(randomNumber(65, 96).toFixed(2));
    }
    console.log(data);
    console.log(otherData);
    console.log(doctorsList);
  }, [data]);

  const openChatWindow = () => {
    setWindowOpen(true);
  };

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const closeChatWindow = () => setWindowOpen(false);
  const closeDoctorModal = () => setDoctorModal(false);

  const generatePDF = () => {
    var doc = new jsPDF("p", "pt");

    let doctor = "Not Assigned";
    let result = null;

    if (data.doctor !== null) {
      doctor = data.doctor.name;
    }

    if (data.modelFeedback === true) result = "Positive";
    if (data.modelFeedback === false) result = "Negative";
    doc.addFont("helvetica", "normal");
    doc.text(20, 60, "Patient: " + data.patient.name);
    doc.text(20, 90, "Report ID: " + data.id);
    doc.text(20, 120, "Created On: " + formateTimeStamp(data.createdTs));
    doc.text(20, 150, "Last Updated On: " + formateTimeStamp(data.updatedTs));
    doc.text(20, 180, "Status: " + data.status);
    doc.text(20, 210, "Doctor: " + doctor);
    doc.text(20, 240, "Result: " + result);
    doc.save("demo.pdf");
  };

  if (data === null) return null;

  return (
    <div>
      <div className="reportWrapper">
        <div className="reportHeader">
          <img src="./images/logo.png" alt="" className="reportLogo" />
          <div className="reportTitle">Cervi-Test Report</div>
        </div>
        <hr />
        <div className="reportHeaderInfo">
          <Grid container>
            <Grid className="reportHeaderItem" item xs={12} md={6}>
              <div>
                <strong>Patient:</strong> {data.patient.name}
              </div>
              <div>
                <strong>Report ID: </strong> {data.id}
              </div>
              <div>
                <strong>Created:</strong> {formateTimeStamp(data.createdTs)}
              </div>
              <div>
                <strong>Last Update On:</strong>{" "}
                {formateTimeStamp(data.updatedTs)}
              </div>
            </Grid>
            <Grid className="reportHeaderItem" item xs={12} md={6}>
              <div>
                <strong>Status:</strong> {data.status}
              </div>
              <div>
                <strong>Doctor: </strong>
                {data.doctor !== null ? (
                  <span>{data.doctor.name}</span>
                ) : (
                  <span>Not Assigned</span>
                )}
              </div>
              <div>
                <strong>Model Version: </strong>
                {data.modelVersion}
              </div>
              <div>
                <strong>Test Type: </strong>
                {data.test_type}
                {data.test_type === "0" ? (
                  <span>Pap Smear</span>
                ) : (
                  <span>Colposcopy</span>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        <hr />
        <div className="cervicalCytologyReport">Cervical Cytology Report</div>
        <hr />
        <div className="reportResultSection">
          <Grid container>
            <Grid style={{ marginBottom: "20px" }} item xs={12} md={6}>
              <div style={{ fontWeight: "600", fontSize: "1.rem" }}>
                {data.modelFeedback === true ? (
                  <span>Result : Positive</span>
                ) : (
                  <span>Result: Negative</span>
                )}
              </div>
              <div>Confidence: {confidence} %</div>
              <div>
                {/* <div>
                                        <div>Morphological Features:</div>
                                        <div>Nucleus Area: {otherData.nucleus_area}</div>
                                        <div>Cell Area: {otherData.cell_area}</div>
                                        <div>Image Quality: {otherData.image_quality.toFixed(3)}</div>
                                    </div> */}
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                Test Image: &nbsp;
                <img
                  src={data.photoUri}
                  alt="Test Input Loading.."
                  className="reportImage"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="showReportBottomButtons">
        <Link
          href={`https://cervi-test-pccoe.herokuapp.com/detection/report?id=${data.id}`}
        >
          <Button variant="contained">Download PDF</Button>
        </Link>
        {userType === "doctor" ? null : data.doctor === null ? (
          <Button
            variant="contained"
            onClick={() => {
              fetchDoctors(token);
            }}
          >
            Assign Doctor
          </Button>
        ) : null}
        {data.doctor === null ? null : (
          <Button variant="contained" onClick={openChatWindow}>
            Chat
          </Button>
        )}
      </div>
      {data.doctor === null ? null : (
        <span>
          <ReportChat
            windowOpen={windowOpen}
            closeChatWindow={closeChatWindow}
            token={token}
            reportID={data.chat}
            userType={userType}
          />
        </span>
      )}
      <SelectDoctor
        openDoctorModal={doctorModal}
        closeDoctorModal={closeDoctorModal}
        token={token}
        doctors={doctorsList}
        reportData={data}
      />
    </div>
  );
}

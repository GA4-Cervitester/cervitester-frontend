import React from "react";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
export default function LearnMore() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
          <h5>
            <a href="#" class="nav-link">
              <span class="text-light"> Cervi Tester </span>
            </a>
          </h5>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <h6>
                  <a href="#about" class="nav-link">
                    <span class="text-warning"> About Us </span>
                  </a>
                </h6>
              </li>

              <li class="nav-item">
                <h6>
                  <a href="#questions" class="nav-link">
                    <span class="text-warning"> Question</span>
                  </a>
                </h6>
              </li>
              <li class="nav-item">
                <h6>
                  <a href="#contact" class="nav-link">
                    <span class="text-warning"> Contact </span>
                  </a>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-dark navbar-dark">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CerviTester
            </Typography>
            <NavLink to={"/profile"}>
              <Button color="inherit">About Us</Button>
            </NavLink>

            <NavLink to={"/reports"}>
              <Button color="inherit">Our Services</Button>
            </NavLink>

            <NavLink to={"/test"}>
              <Button color="inherit">Community</Button>
            </NavLink>

            <Button color="inherit">Question</Button>

            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <section className="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div className="container pb-3">
          <div className="d-sm-flex align-items-center justify-content-between ">
            <div className="p-3 m-3 py-3">
              <h1>
                {" "}
                <span className="text-dark">Get your</span>{" "}
                <span className="text-warning"> Cervical Cancer Test</span>
              </h1>
              <p className="lead my-5">
                <span className="text-dark">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  aut perferendis temporibus nostrum amet voluptatibus.
                </span>
              </p>
              <button
                className="btn btn-success btn-lg  mt-3 "
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                <NavLink to={{ pathname: "/login" }}>Login Now</NavLink>
              </button>
            </div>
            <img
              className="img-fluid w-50 h-25 d-none d-sm-block my-5 pt-4 "
              src="/images/img19.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/*About US section*/}
      <section id="about" className=" bg-success text-light m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md m-3 mt-5 pt-5 pb-5 py-5">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2"
                src="/images/img19.png"
                alt=""
              />
            </div>
            <div className="col-md p-5 mb-2 mt-2 pt-2">
              <h2>About Us </h2>
              <p className="lead pb-2 pt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="" className="btn btn-light mt-5">
                <i className="bi bi-chevron-right" style={{ color: "black" }} />{" "}
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
            <div className="input-group news-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
              <button className="btn btn-dark btn-lg" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Boxes */}
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop" />
                  </div>
                  <h3 className="card-title mb-3">Virtual</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square" />
                  </div>
                  <h3 className="card-title mb-3">Hybrid</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people" />
                  </div>
                  <h3 className="card-title mb-3">In Person</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Learn Sections */}
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="img/fundamentals.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right" /> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right" /> Read More
              </a>
            </div>
            <div className="col-md">
              <img src="img/react.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Question Accordion */}
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/* Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Where exactly are you located?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  How much does it cost to attend?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  What do I need to Know?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  How Do I sign up?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id="question-five"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="instructors" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Jane Doe</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Steve Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Sara Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact & Map */}
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> 50 Main st
                  Boston MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (555)
                  555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (333) 333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div id="map" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright © 2021 Frontend Bootcamp</p>
          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1" />
          </a>
        </div>
      </footer> */}
      {/* Modal */}

      {/* Right */}
      <div>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      {/* Right */}
    </div>
  );
}

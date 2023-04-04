import { getTokenURL } from "../constants";
import { registerPatientURL, registerDoctorURL } from "../constants";

export const getToken = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": email,
    "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    return fetch(getTokenURL, requestOptions)
    .then(response => response.json())
    .then(result => {
        return result
    })
    .catch(error => console.log('error', error));        
}

export const register = (userType, phone, dob, email, name, password) => {
    let url;
    if(userType==="doctor") url=registerDoctorURL
    if(userType==="patient") url=registerPatientURL

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "phoneNumber": phone,
        "dob": dob,
        "email": email,
        "name": name,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
        return result
    })
    .catch(error => {
        console.log('error', error)
    }); 
}
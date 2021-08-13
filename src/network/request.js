import axios from "axios";

export function patientlist(){

    return axios({
      url:'http://127.0.0.1:8899/patient_list',

    })
}

export function patientdata(params){

    return axios({
        url:'http://127.0.0.1:8899/patient_data',
        params

    })
}





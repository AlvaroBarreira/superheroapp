import Axios from 'axios';

const sendData = async (email, password) => {

    try {
        
       const response = await Axios.post("http://challenge-react.alkemy.org/", {email, password})

       sessionStorage.setItem("token", JSON.stringify(response.data.token));

    } catch (error) {
        return error;
    }
} 


export default sendData;

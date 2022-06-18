import axios from "axios";

export async function defaultPostRequest(endpoint, body) {
    const result = await axios
        .post(endpoint, body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log('error ', error)
            return false;
        });
    return result;
}


export async function protectedEnpointPostRequest(endpoint, body, token) {
    const result = await axios
        .post(endpoint, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
    return result;
}

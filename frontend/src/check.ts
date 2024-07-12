import axios from "axios";
export const check = async () => {
    let result = await axios.get(`http://localhost:3000/api/v1/user/me`, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    });
    return result.data;
}

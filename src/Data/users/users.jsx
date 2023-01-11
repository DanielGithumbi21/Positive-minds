import { api } from "../Auth/Data";
import authHeader from "../Auth/AuthHelper";
import axios from "axios";

const getProfile = async (setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await fetch(`${api}/profile`, {
            headers: authHeader(),
        });
        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const beTherapist = (post, setOpen) => {
    axios.post(`${api}/counselor_profiles`, post, {
        headers: authHeader()
    })
        .then((data) => {
            setOpen(true)

        })
}

export {
    getProfile, beTherapist
}
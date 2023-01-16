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

const getCounselorProfile = async (setIsLoading) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${api}/counselor_profiles`, {
            headers: authHeader(),
        });
        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error(error)
    }
}

const beTherapist = (post, setOpen) => {
    axios.post(`${api}/counselor_profiles`, post, {
        headers: authHeader()
    })
        .then((data) => {
            setOpen(true)

        })
}

const bookAppointment = async (post, setIsLoading) => {
    try {
        setIsLoading(true)
        axios.post(`${api}/appointments`, post, {
            headers: authHeader()
        })
            .then((data) => {
                setIsLoading(false)
                console.log(data)
            })

    } catch (error) {
        console.error(error)
    }
}

export {
    getProfile, beTherapist, getCounselorProfile, bookAppointment
}
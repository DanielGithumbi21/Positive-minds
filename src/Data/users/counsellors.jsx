import { api } from "../Auth/Data";
import authHeader from "../Auth/AuthHelper";
import axios from "axios";

const createSession = async (post, setIsLoading, navigate) => {
    try {
        setIsLoading(true)
        axios.post(`${api}/sessions`, post, {
            headers: authHeader()
        })
            .then(() => {
                navigate("/view-sessions")
            })
        setIsLoading(false)
    } catch (error) {
        console.error(error)
    }
};

const bookFromSession = async (setIsLoading, id, navigate) => {
    try {
        setIsLoading(true)
        axios.post(`${api}/new_from_session`, {}, {
            headers: authHeader()
        })
            .then((data) => {
                console.log(data)
            })
        setIsLoading(false)
    } catch (error) {
        console.error(error)
    }
};

const getSessions = async (setIsLoading) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${api}/sessions`, {
            headers: authHeader()
        })
        const data = await response.json()
        setIsLoading(false)
        return data
    } catch (error) {
        console.error(error)
    }
}
const getSessionDetails = async (setIsLoading, id) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${api}/sessions/${id}`, {
            headers: authHeader()
        })
        const data = await response.json()
        setIsLoading(false)
        return data
    } catch (error) {
        console.error(error)
    }
}
const getAppointments = async (setIsLoading) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${api}/appointments`, {
            headers: authHeader()
        })
        const data = await response.json()
        setIsLoading(false)
        return data
    } catch (error) {
        console.error(error)
    }
}

export {
    createSession,
    getSessions,
    getSessionDetails,
    bookFromSession,
    getAppointments
}
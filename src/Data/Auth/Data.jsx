import axios from "axios"
const api = "https://positive-minds-production.up.railway.app"


const registerUser = (formData, setLoggedUser, setUser, navigate, setIsLoading, setError) => {
    setIsLoading(true)
    axios.post(`${api}/users`, formData)
        .then((data) => {
            setIsLoading(false)
            setLoggedUser(true)
            setUser(data.data)
            data.data.user.is_counselor ? navigate("/counsellor") : navigate("/client")

        })
}

const loginUser = (formData, setLoggedUser, setUser, navigate, setIsLoading, setError) => {
    setIsLoading(true)
    axios.post(`${api}/login`, formData)
        .then((data) => {
            setIsLoading(false)
            setLoggedUser(true)
            setUser(data.data)
            data.data.user.is_counselor ? navigate("/counsellor") : navigate("/client")
        })
        .catch((error) => {
            setIsLoading(false)
            setError("You are unauthorized, check your details")
        })
}

export {
    registerUser, loginUser, api
}
const api = "http://localhost:3000"
import axios from "axios"


const registerUser = (formData, setLoggedUser, setUser, navigate, setIsLoading, setError) => {
    setIsLoading(true)
    axios.post(`${api}/users`, formData)
        .then((data) => {
            setIsLoading(false)
            setLoggedUser(true)
            setUser(data.data)
            navigate("/client")
        })
}

const loginUser = (formData, setLoggedUser, setUser, navigate, setIsLoading, setError) => {
    setIsLoading(true)
    axios.post(`${api}/login`, formData)
        .then((data) => {
            setIsLoading(false)
            setLoggedUser(true)
            setUser(data.data)
            navigate("/client")
        })
        .catch((error) => {
            setIsLoading(false)
            setError("You are unauthorized, check your details")
        })
}

export {
    registerUser, loginUser, api
}
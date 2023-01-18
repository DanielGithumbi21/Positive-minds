import { api } from "../Auth/Data";
import authHeader from "../Auth/AuthHelper";

export const getSessions = async (setSessions, setIsLoading) => {
    // console.log("fetching data")
    try {
        setIsLoading(true);
        const response = await fetch(`${api}/sessions`, {
            headers: authHeader(),
        });
        // console.log(response)
        const data = await response.json();
        setSessions(data);
        setIsLoading(false);
    } catch (error) {
        console.error(error);
    }
};

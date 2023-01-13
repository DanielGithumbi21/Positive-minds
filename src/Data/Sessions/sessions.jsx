import { api } from "../Auth/Data";
import authHeader from "../Auth/AuthHelper";

export const getSessions = async (setSessions, setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await fetch(`${api}/sessions`, {
            headers: authHeader(),
        });
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
    } catch (error) {
        console.error(error);
    }
};

import { api } from "../Auth/Data";
import authHeader from "../Auth/AuthHelper";

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

export {
    getProfile
}
import { BASE_URL } from "../constants";

const fetchify = async (url, expectedStatus, config = {}) => {
    const response = await fetch(`${BASE_URL}/${url}`, config);
    if (response.status !== expectedStatus) {
        const error = await response.json();
        if (Object.keys(error).length) {
            throw new Error(error[Object.keys(error)[0]]);
        }
        throw new Error('Something went wrong!');
    }
    else if (expectedStatus === 204) {
        return null;
    }
    return await response.json();
};

export default fetchify;
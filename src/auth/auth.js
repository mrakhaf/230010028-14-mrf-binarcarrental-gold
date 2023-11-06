import axios from "axios";

const getToken = async () => {
	const response = await axios.post(import.meta.env.VITE_URLAUTH, 
        {
            email: import.meta.env.VITE_EMAILAUTH,
            password: import.meta.env.VITE_PASSWORDAUTH
        }
    )
    return response.data.access_token
};

export default getToken
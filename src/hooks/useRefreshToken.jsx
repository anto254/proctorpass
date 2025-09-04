import axios from '../api/axios';
import useAuth from './useAuth';


const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const userId = JSON.parse(localStorage.getItem('userId'));

    const refresh = async () => {
        const response = await axios.get(`auth/refresh/${userId}`, {
            withCredentials: true
        });
        setAuth(prev => {
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken,
                userName: response.data.userName,
                userId: response.data.user_Id,
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
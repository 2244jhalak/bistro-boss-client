import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const axiosSecure=axios.create({
       baseURL:'http://localhost:5000',
       
})

const useAxiosSecure = () => {
        const navigate = useNavigate();
        const {logOut} = useContext(AuthContext);
        axiosSecure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token');
            
            config.headers.authorization=`Bearer ${token}`;
            return config;
        },function (error){
            return Promise.reject(error);
        
        })

        // intercepts 401 and 403 status
        axiosSecure.interceptors.response.use(function (response){
            return response;
        },async (error)=>{
            const status = error.response.status;
           
            // for 401 or 403 logout the user and move the user to the login
            if(status === 401 || status === 403){
               await logOut();
               navigate('/login');
            }
            return Promise.reject(error);
        })

    
    return axiosSecure;
};

export default useAxiosSecure;
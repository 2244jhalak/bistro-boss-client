import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo= {
                email : result.user?.email,
                name : result.user?.displayName

            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })

        })
        .catch(error=>{
            console.log(error);      
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle></FaGoogle>
            Google
            </button>
            
        </div>
    );
};

export default SocialLogin;
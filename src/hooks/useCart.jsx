import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useCart = () => {
    // tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} =useContext(AuthContext);
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/cart?email=${user?.email}`);
            return res.data;
        }
    })
    return [cart,refetch]
};

export default useCart;

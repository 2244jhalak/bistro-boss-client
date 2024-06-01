/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
  const {name,recipe,image,price,_id} =item;
  const {user} = useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const axiosSecure=useAxiosSecure();
  const [,refetch] = useCart();
  
  const handleAddToCart=()=>{
    
      if(user && user.email){
          const carts={
            menuId:_id,
            email:user.email,
            name,
            image,
            price

          }
          axiosSecure.post('/cart',carts)
          .then(res=>{
            console.log(res.data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          })

      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}});
          }
        });
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={handleAddToCart} className="btn btn-outline uppercase border-0 border-black text-black font-semibold border-b-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const item = useLoaderData();
    const {name,category,price,recipe,_id} = item;
    const onSubmit =async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image:data.image[0]};
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-Type':'multipart/form-data'
            }
        });
        if(res.data.success){
          // now send the menu item data to the server with the image url
          const menuItem={
            name :data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
          }
          //
          const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
          console.log(menuRes.data);
          if(menuRes.data.modifiedCount>0){
            // show success popup
            reset();
            Swal.fire({
              position: "bottom-end",
              icon: "success",
              title: `${data.name} is updated to the menu`,
              showConfirmButton: false,
              timer: 1500
            });
          } 
        }
        console.log(res.data);
    }

    return (
        <div>
            <SectionTitle subHeading={"What's Wrong?"} heading={"upDATE An itEm"}></SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      
      <label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Recipe Name*</span>
    
  </div>
  <input 
  type="text" 
  placeholder="Recipe Name" 
  defaultValue={name}
  {...register("name",{required:true})}
  className="input input-bordered w-full" />
 
</label>
<div className="flex gap-6">
    {/* category */}
    <label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Category*</span>
    
  </div>
  <select defaultValue={category} {...register("category",{required:true})}
        className="select select-bordered w-full"
      >
        <option disabled value="default">Select a category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="dessert">Dessert</option>
        <option value="drinks">Drinks</option>
        
      </select>
 
</label>

    {/* price */}
    <label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Price*</span>
    
  </div>
  <input 
  type="number" 
  placeholder="Price"
  defaultValue={price} 
  {...register("price",{required:true})}
  className="input input-bordered w-full" />
 
</label>

</div>
{/* recipe-details*/}
<label className="form-control">
  <div className="label">
    <span className="label-text">Recipe Details</span>
    
  </div>
  <textarea {...register("recipe",{required:true})} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  
</label>
<label className="form-control w-full my-6">
    <input {...register("image",{required:true})} type="file" className="file-input w-full max-w-xs" />

</label>

<button className="btn">
    Update an Item <FaUtensils className="ml-4"></FaUtensils>
</button>
      
      
    </form>

            </div>
            
        </div>
    );
};

export default UpdateItems;
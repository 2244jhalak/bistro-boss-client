import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";




const ManageItems = () => {
    const [menu, ,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    console.log(menu);
    const handleDeleteItems = item =>{
        console.log(item._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        // refetch to update the ui
                        
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${item.name} has been deleted.`,
                            icon: "success"
                          });
    
                    }

                })
                
              
            }
          });
    }
    return (
        <div>
            <SectionTitle subHeading={'Hurry Up!'} heading={'manage ALl iTeMS'}></SectionTitle>

<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index)=>
            <tr key={item._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td>{item.price}</td>
        <th>
          <Link to={`/dashboard/updateItem/${item._id}`}>
              <button className="btn btn-ghost btn-xl text-red-600">
                <FaEdit></FaEdit>
              </button>
          </Link>
        </th>
        <th>
          <button onClick={()=>handleDeleteItems(item)} className="btn btn-ghost btn-xl text-red-600">
            <FaTrashAlt></FaTrashAlt>
          </button>
        </th>
      </tr>
        )
      }
      
      
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default ManageItems;
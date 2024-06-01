/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="my-10">
            {title && <Cover img={img} title={title}></Cover>}
            
            <div className="grid grid-cols-2 gap-8 my-10">
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline uppercase border-0 border-black text-black font-semibold border-b-4'>Order Now</button>
            
            </Link>
            
        </div>
            
        
    );
};

export default MenuCategory;
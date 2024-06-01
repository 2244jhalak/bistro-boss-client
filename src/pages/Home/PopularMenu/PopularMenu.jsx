
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
   

const PopularMenu = () => {
   
    const [menu]=useMenu();
    
    const popular=menu.filter(d=>d.category==='popular');
    console.log(popular);


    return (
        <div className="mb-20">
            <SectionTitle heading={'from ouR MenU'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-2 gap-8">
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;
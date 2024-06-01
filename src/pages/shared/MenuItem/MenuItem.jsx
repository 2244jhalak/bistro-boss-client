/* eslint-disable react/prop-types */


const MenuItem = ({item}) => {
    const {name,recipe,image,price} =item;
    console.log(item);
    return (
        <div className="flex space-x-2">
            <div><img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" /></div>
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <div><p className="text-yellow-600">${price}</p></div>
            
        </div>
    );
};

export default MenuItem;
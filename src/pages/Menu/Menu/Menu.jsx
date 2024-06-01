import {  Helmet } from 'react-helmet-async';

import MenuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Dessert from '../../../assets/menu/dessert-bg.jpeg';
import Pizza from '../../../assets/menu/pizza-bg.jpg'
import Salad from '../../../assets/menu/salad-bg.jpg'
import Soup from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu]=useMenu();
    
    const offered=menu.filter(d=>d.category==='offered');
    const desserts=menu.filter(d=>d.category==='dessert');
    const pizza=menu.filter(d=>d.category==='pizza');
    const salads=menu.filter(d=>d.category==='salad');
    const soups=menu.filter(d=>d.category==='soup');
    return (
        <div>
            <div>
            <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>

      <Cover img={MenuImg} title={'Our Menu'}></Cover>
      <SectionTitle subHeading={"Don't miss"} heading={"today's oFfEr"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} img={Dessert} title={'Desserts'}></MenuCategory>
      <MenuCategory items={pizza} img={Pizza} title={'Pizza'}></MenuCategory>
      <MenuCategory items={salads} img={Salad} title={'Salads'}></MenuCategory>
      <MenuCategory items={soups} img={Soup} title={'Soups'}></MenuCategory>
            
        </div>
            
        </div>
    );
};

export default Menu;



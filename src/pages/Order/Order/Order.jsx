import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../shared/Cover/Cover"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories=['Salads','Pizza','Soups','Desserts','Drinks'];
    const {category}=useParams();
    console.log(category);
    const initialIndex=categories.indexOf(category);
    
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu]=useMenu();
    
    
    
    const desserts=menu.filter(d=>d.category==='dessert');
    const pizza=menu.filter(d=>d.category==='pizza');
    const salads=menu.filter(d=>d.category==='salad');
    const soups=menu.filter(d=>d.category==='soup');
    const drinks=menu.filter(d=>d.category==='drinks');
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Order</title>
        
      </Helmet>
            <Cover img={orderCoverImg} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    
  </TabList>
  <TabPanel>
    <OrderTab items={salads}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={soups}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  
</Tabs>
        </div>
    );
};

export default Order;
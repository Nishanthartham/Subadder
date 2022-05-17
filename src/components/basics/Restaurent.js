import React,{useState} from 'react'
import './style.css';
import Menucard from './Menucard';
import Menu from './menuAPI';
import Navbar from './Navbar';

function Restaurent() {
  const [menuData,setMenudata] = useState(Menu);
  // console.log("hello",typeof(menuData)); menuData is object not an array
  
  // console.log(Menu);
  const filterMenu = (Categ)=>{
    const UpdatedList = Menu.filter((Curr)=>{
        return (Curr.category === Categ);
    })
     setMenudata(UpdatedList);
};
  return (
    <>
{/* <Navbar filtermenu = {filterMenu} Menu = {Menu} setMenudata = {setMenudata} /> */}
  <Menucard Menu = {menuData}/>
    </>
  );
};



export default Restaurent
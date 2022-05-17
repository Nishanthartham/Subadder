import React from "react";
import './style.css';
import Menu  from "./menuAPI";

const uniqueList = [...new Set( Menu.map((curr)=>{
  return (curr.category);
}))];//to convert it to list/array we added square brackets
const navbar = ({filtermenu,Menu,setMenudata}) => {

    return (
    <>
    {console.log(uniqueList)}
      <nav className="navbar">
        <div className="btn-group">
          {/* {menuList.map((curElem) => {
            return (
0                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })} */}
          {/* <button className="btn-group__item" onClick={()=>filtermenu('breakfast')}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filtermenu('lunch')}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filtermenu('dinner')}>Dinner</button> */}
          {
            uniqueList.map((Curr)=>{
              return (
                <button className="btn-group__item" onClick={()=>filtermenu(Curr)}>{Curr}</button>
                
                )
                
              })
            }
            <button className="btn-group__item" onClick={()=>setMenudata(Menu)}>All</button>
        </div>
      </nav>
    </>
  );
};

export default navbar;
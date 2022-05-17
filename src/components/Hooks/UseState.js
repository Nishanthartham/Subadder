import React,{useState} from "react";
import "./styles.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(10);
  const [disp,setdisp] = useState('invisible');
  const evaluate = (args)=>{
    if (args === '+'){
  
      setMyNum(myNum+1);
      if (disp === 'visible')
      setdisp('invisible');
    }
    else{
      if (myNum>0)
      setMyNum(myNum-1);
      else
      setdisp('visible');
    }
  }
  // const store = document.querySelector('.button2').addEventListener("mouseenter",function(e){
  //   leave = 0;
  //   console.log(leave);
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (leave === 0)
  //   setMyNum(myNum+=1);
  // })


  const leave = 0;
  return (
    <>
    <h1>SubAdder</h1>
      <div className="center_div">
        <div className="divi">
        <p>{myNum}</p>
        <span className={disp}>Value must be greater than zero, cannot decrement</span>
        </div>
        <div className="button2" onMouseEnter={()=>{evaluate('+')}} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onMouseEnter = {() => evaluate('-')}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
import { useEffect } from "react";
import "./Cursor.css";

export default function Cursor() {

useEffect(()=>{

const cursor=document.querySelector(".cursor");

const move=(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

};

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[]);

return(

<div className="cursor"></div>

)

}

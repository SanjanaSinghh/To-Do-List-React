import Item from "./todolist"
import './App.css';

 var data=[
    { id: 1, title: "Wake Up", status: true },
    { id: 2, title: "Drink Tea", status: false },
    { id: 3, title: "Eat Maggi", status: true },
    { id: 4, title: "Sleep", status: false }
 ]  


 export default function Deen(){
     return(
         <>
         <div className="deen">
         {
             data.map((x)=>(
                 <Item  item={x.title}/>
             ))
         }
         </div>
         
         </>
     )
 }
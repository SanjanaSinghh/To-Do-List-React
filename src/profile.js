 import Age from './age'
import './profile.css'
 export default function Profile(){
     const imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKUaRWOzWDjiuKvLWYjxfs91mJB929UL6gA&usqp=CAU'
 
 return (
     <>
     <div id="pro">
<img src={imageurl}></img> 
<h3>Name : Sanjana Kumari Singh </h3>
<Age />
</div>    

     </>
 )
 
 
 
    }
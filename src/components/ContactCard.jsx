import React from 'react'
import { Link } from 'react-router-dom';
import avatar from './avatar.png'

const ContactCard = (props) => {
const {id,Name,email,Mobile}=props.contact;
  return (
    <div>
         <div className='item' style={{backgroundColor:"darkgray",borderRadius:"20px"}}>
            
                 <Link to={`/detail`}  state={{contact:props.contact}}> <div className='content' style={{display:"flex",marginLeft:"0",fontSize:"20px"}}>
                    <img className='ui avatar image' src={avatar} alt="avatar" />
                    <div className='header' >{Name}</div> </div></Link>
                    <div className='Mobile' style={{display:"flex",alignItems:"center" ,height:"0px",marginLeft:"4vh"}}>Mobile No. :{Mobile} </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div>Email: {email}
                     </div> 
                    <i className='trash alternate outline icon' style={{color:"red",alignContent:"end"}} id={Name} onClick={()=>{props.onClickHandler(id)}}
                    ></i>
                </div>
           
               
                    
            </div>
    </div>
  )
}

export default ContactCard
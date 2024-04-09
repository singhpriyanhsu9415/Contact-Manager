import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './avatar.png'
import { useLocation } from 'react-router-dom'
import call from './call.png';
import mail from'./mail.png';

const ContactDetail = (props) => {
    const location = useLocation()
    const {id,Name,email,Mobile} = location.state.contact;
 
  
  return (
    <div className='main'>
         <div className='ui card center' style={{marginLeft:"35%", marginTop:"20vh", boxShadow:"20px 10px 10px"}}>
            <div className='image' >
                <img src={avatar} alt="im" />
            </div>
            <div className='content'>
                <div className='header'>{Name}</div>
                <div className='detail'  style={{display:"flex",alignItems:"center" ,height:"40px"}}>{email}
                <a href="mailto:singhpriyanshu@gmail.com"><img src={mail} alt="mail" style={{height:"20px",width:"20px",margin:"0" }} /></a>
                </div>
                <div className='Mobile' style={{display:"flex",alignItems:"center" ,height:"0px",marginLeft:"4vh"}}>{Mobile}
                <a href="Tel:7667543413"><img src={call} alt="call" style={{height:"20px",width:"20px",margin:"0" }} /></a>
                </div>
            </div>
         </div>
    </div>
  )
}

export default ContactDetail;
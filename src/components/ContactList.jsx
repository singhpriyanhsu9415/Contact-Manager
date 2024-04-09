import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
const ContactList = (props) => {
    
  const deleteContactHandler=(id)=>{
props.getContactList(id);
  }

    const renderContactList=props.contacts.map((contact)=>{
      console.log(contact.id)
        return (
          <div>
            < ContactCard  contact={contact} onClickHandler={deleteContactHandler} > 
            </ContactCard>
          </div>
          

        );
    })
  return (
    <div className='ui celled list' >
      <h2 style={{marginTop:"5vh", marginLeft:"8vh"}}>Contact List</h2>
      {renderContactList}
      <Link to='/'>
      <button className='ui button blue ' style={{marginLeft:'45%'}} >Add Contact</button></Link>
    </div>
  )
}

export default ContactList;
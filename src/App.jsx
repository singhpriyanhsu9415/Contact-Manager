import React, { useEffect, useState } from 'react';
 import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContacts from './components/AddContacts';
import ContactDetail from './components/ContactDetail';

function App() {
  
  const [contacts,setContacts]=useState([]);
  
  const AddContactsHandler=(Contact)=>{
    
    const updatedContacts = [...contacts,{id:Contact.Name,...Contact}]
    setContacts(updatedContacts);
    localStorage.setItem('contacts',JSON.stringify(updatedContacts));}

  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    });
   setContacts(newContactList);
   localStorage.setItem('contacts',JSON.stringify(newContactList));
  }
  


    // useEffect(()=>{
    //   localStorage.setItem('contacts',JSON.stringify(contacts));
    // },[contacts]);
    
    useEffect(()=>{
      const retriveContacts=JSON.parse(localStorage.getItem('contacts'));
       if(retriveContacts){ setContacts(retriveContacts);}
      },[]);
  
  return (
    <div className='ui container'>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/'  element={<AddContacts AddContactsHandler={AddContactsHandler}/>}></Route>
      <Route path='/contact'  element={<ContactList contacts={contacts} getContactList={removeContactHandler}/>}></Route> 
      <Route path='/detail' element={<ContactDetail/>}></Route>
     </Routes>
     
      </BrowserRouter>
    </div>
  )
}

export default App
 
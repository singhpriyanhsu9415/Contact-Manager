import React from 'react'
import { Link } from 'react-router-dom';
class AddContacts extends React.Component{
    state={
Name:"",
email:"",
Mobile:"",
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.Name==="" || this.state.email==="" || this.state.Mobile==""){
        alert("ALL THE FIELDS ARE MANDATORY");
        return
        }
        this.props.AddContactsHandler(this.state)
        this.setState({Name:"",email:"",Mobile:""});
        alert("Contact has been saved in the ContactList");
    }
    render(){
        return(
            <div className='ui main' style={{marginTop:"10vh"}}>
               <h2>Add Contact</h2>
               <form className='ui form'onSubmit={this.add} >
                <div className='field'>
                    <label >Name</label>
                    <input type="text" name='Name' placeholder='Name'
                     value={this.state.Name}
                     onChange={(e)=> this.setState({Name:e.target.value})}/>
                </div>
                <div className='field'>
                    <label >Email</label>
                    <input type="text" name='Email' placeholder='Email'
                     value={this.state.email}
                     onChange={(e)=> this.setState({email:e.target.value})}/>
                </div>
                <div className='field'>
                    <label >Mobile No.</label>
                    <input type="number" name='Mobile' placeholder='Mobile No.'
                     value={this.state.Mobile}
                     onChange={(e)=> this.setState({Mobile:e.target.value})}/>
                </div>
                <button className='ui button blue' >Add</button>
               <div> <Link to="/contact"><button className='ui button green' style={{margin:"30px", marginLeft:"40%", fontSize:"20px"}}>See ContactList</button></Link></div>
               </form>
            </div>
        );
    }
}
  


export default AddContacts
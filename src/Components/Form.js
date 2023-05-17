import React, { useState } from "react";
import "../App.css"

const Form = () => {
 const [fullname, setFullName] = useState(''); 
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [sex, setSex] = useState("");
    
  return (
    <div className="container" style={{marginLeft:"500px"}}>
      <label htmlFor="fullnames">Fullnames</label>
      <input type="text" name="name" id="fullnames" />
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" id="phone" />
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" />
      <label htmlFor="sex">Sex</label>
      <select>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    <label htmlFor="position">Position</label>
    <select>
     <option value="member">Member</option>
     <option value="worker">Worker</option>
    </select>
    <label htmlFor="name">State</label>
    <select>
     <option value="abuja">Abuja</option>
     <option value="lagos">Lagos</option>
     <option value="ondo">Ondo</option>
     
    </select>
    <button name="submit" value="submit">SUBMIT</button>
      
    </div>
  );
};

export default Form;

import { useState } from "react";
import "../App.css";
import axios from "axios";

const Form = () => {
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [position, setPosition] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {
    if (fullname.length === 0) {
      alert("Name has left blank");
    } else if (phone.length === 0) {
      alert("phone has left blank");
    } else if (email.length === 0) {
      alert("email has left blank");
    } else if (sex.length === 0) {
      alert("sex has left blank");
    } else if (phone.length === 0) {
      alert("phone has left blank");
    } else if (position.length === 0) {
      alert("position has left blank");
    } else if (state.length === 0) {
      alert("state has left blank");
    } else {
      const url = "http://localhost/enquiry.php";
      let fData = new FormData();
      fData.append("fullname", fullname);
      fData.append("phone", phone);
      fData.append("email", email);
      fData.append("sex", sex);
      fData.append("position", position);
      fData.append("state", state);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="container" style={{ marginLeft: "500px" }}>
      <label htmlFor="fullnames">Fullnames</label>
      <input
        type="text"
        name="name"
        id="fullnames"
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="sex">Sex</label>
      <select>
        <option value="sex" onChange={(e) => setSex(e.target.value)}>
          Sex
        </option>
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
      <button name="submit" value="submit" onClick={handleSubmit()}>
        SUBMIT
      </button>
    </div>
  );
};

export default Form;

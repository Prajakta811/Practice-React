import React, { useState } from "react";

const Form = () => {
  const [userData, setUSerData] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUSerData({ ...userData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (userData.email=="" || userData.password == "") {
      alert("Enter valid Information");
      return;
    }
    setUSerData({ email: "", password: "" });
    console.log(userData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

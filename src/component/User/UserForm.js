import React, { useState } from "react";
import Input from "../UI/Input";
import styed from "./userform.module.css";
function UserForm({ Mode, Edit, onAddData }) {
  const [name, setName] = useState(Mode === "Edit" ? Edit.name : "");
  const [gender, setGender] = useState(Mode === "Edit" ? Edit.gender : "");
  const [phone, setPhone] = useState(Mode === "Edit" ? Edit.phone : "");
  const [city, setCity] = useState(Mode === "Edit" ? Edit.city : "");

  // const nameref = useRef();
  // const genderref = useRef();
  // const phoneref = useRef();
  // const cityref = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (Mode === "Create") {
      if (!name || !gender || !phone || !city) return;
      // const name = nameref.current.value;
      // const gender = genderref.current.value;
      // const phone = phoneref.current.value;
      // const city = cityref.current.value;
      const data = {
        id: Date.now(),
        name,
        gender,
        phone,
        city,
      };
      onAddData(data);

      // nameref.current.value =
      //   genderref.current.value =
      //   phoneref.current.value =
      //   cityref.current.value =
      //     "";
    }
    if (Mode === "Edit") {
      const edited = {
        id: Edit.id,
        name,
        gender,
        phone,
        city,
      };
      onAddData(edited);
    }
    setCity("");
    setName("");
    setGender("");
    setPhone("");
  };

  return (
    <form className={styed.form} onSubmit={submitHandler}>
      <Input
        value={name}
        label="name"
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        value={gender}
        label="gender"
        type="text"
        name="gender"
        placeholder="Gender"
        onChange={(e) => setGender(e.target.value)}
      />
      <Input
        value={phone}
        label="phone"
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        value={city}
        label="city"
        type="text"
        name="city"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />

      {/* <label htmlFor="name">Name:</label>
      <input type="text" name="name" placeholder="Name" ref={nameref} />
      <label htmlFor="gender">Gender:</label>
      <input type="text" name="gender" placeholder="Gender" ref={genderref} />
      <label htmlFor="phone">Phone:</label>
      <input type="text" name="phone" placeholder="Phone" ref={phoneref} />
      <label htmlFor="city">City:</label>
      <input type="text" name="city" placeholder="City" ref={cityref} /> */}
      <input type="submit" className={styed.submit} />
    </form>
  );
}

export default UserForm;

import { useEffect, useState } from "react";
import Button from "./component/UI/Button";
import Container from "./component/UI/Container";
import Input from "./component/UI/Input";
import Modal from "./component/UI/Modal";
import UserForm from "./component/User/UserForm";
import UserList from "./component/User/UserList";

function App() {
  const [mode, setMode] = useState("");
  const [edit, setEdit] = useState({});
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [Users, setUsers] = useState(
    !localStorage.getItem("users")
      ? [
          {
            id: "p1",
            name: "Joe",
            gender: "male",
            phone: "123456",
            city: "giza",
          },
          {
            id: "p2",
            name: "Ace",
            gender: "male",
            phone: "456123",
            city: "nasr-city",
          },
          {
            id: "p3",
            name: "Sally",
            gender: "female",
            phone: "341256",
            city: "alexanderia",
          },
        ]
      : JSON.parse(localStorage.getItem("users"))
  );

  const onAddDataHandler = (data) => {
    //check if the data has already been by Id
    const checkData = Users.findIndex((obj) => obj.id === data.id);
    // if it alredy there so we in edit mode
    if (checkData >= 0) {
      let Edited = [...Users];
      Edited[checkData] = data;
      setUsers([...Edited]);
      setMode("Create");
    }
    //if it not so we are in Create mode
    else {
      setUsers((prev) => [...prev, data]);
    }
  };
  const onDeleteDataHandler = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const onEditHandler = (id) => {
    //finding the Edited user by Id
    const user = Users.find((user) => user.id === id);
    //open Form
    setShowForm(true);
    //set editdata as the user i find by id
    setEdit(user);
    //change the mode of the form to edit
    setMode("Edit");
  };
  const FormHandler = () => {
    setShowForm((prev) => !prev);
    setMode("Create");
  };
  const searchHandler = () => {
    if (search.length === 0) return Users;
    else {
      return Users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(Users), [Users]);
  });
  return (
    <>
      <Container>
        <Button onClick={FormHandler}>Show Form</Button>
        <Input
          type="Search"
          name="search"
          placeholder="search"
          style={{ width: "50%" }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <UserList
          Users={searchHandler()}
          onEdit={onEditHandler}
          onDelete={onDeleteDataHandler}
        />
      </Container>
      {showForm && (
        <Modal closeForm={FormHandler}>
          <UserForm onAddData={onAddDataHandler} Edit={edit} Mode={mode} />
        </Modal>
      )}
    </>
  );
}

export default App;

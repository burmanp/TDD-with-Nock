import { useState } from "react";
import "./App.css";

function App() {
  const [petName, setPetName] = useState([]);
  const [petPic, setPetPic] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("event recieved", event.target.elements.petName.value);

    const newPet = event.target.elements.petName.value;

    event.target.reset();

    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    // console.log(data);

    setPetName((prevList) => {
      const newArray = [newPet, ...prevList];

      console.log("updating to new array", newArray);

      return newArray;
    });
    setPetPic((prevPic) => [data.message, ...prevPic]);

    console.log("resetting the form");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="petName">Pet Name</label>
        <input id="petName" placeholder="Enter a Pet Name" />
        <button type="submit">Add</button>
      </form>
      {petName && (
        <ul>
          {petName.map((pet, i) => (
            <li key={i}>
              {pet}
              <img style={{ width: 200 }} src={petPic[i]} alt={pet} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

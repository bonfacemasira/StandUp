import React from "react";

function Person({ person, onDeletePerson, onUpdatePerson }) {
  //DELETE
  function handleDeleteClick() {
    fetch(`http://localhost:3000/persons/${person.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeletePerson(person));
  }

  function handleUpdatePerson(e) {
    fetch(`http://localhost:3000/persons/${person.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gender: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then((updatedPerson) => onUpdatePerson(updatedPerson));
  }

  return (
    <li>
      <div>Name: {person.name}</div>
      <div>
        Gender: {person.gender}
        <select onChange={handleUpdatePerson}>
          <option value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      {/* DELETE*/}
      <button className="remove" onClick={handleDeleteClick}>
        DELETE
      </button>
    </li>
  );
}
export default Person;

import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://65a6321d74cf4207b4ef6fbf.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter((person) => person.name.includes(filter));
    setFilteredPeople(filtered);
  };
  return (
    <div>
      <div className="fixed border mb-4 bg-white w-full h-28">
      <h1>People</h1>
        <input
          className="border mb-4"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32">
        {filteredPeople.map((person) => {
          return (
            <Card
              name={person.name}
              imageUri={person.avatar}
              title={person.jobtitle}
            />
          );
        })}
      </div>
    </div>
  );
}
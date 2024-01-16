import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://65a6321d74cf4207b4ef6fbf.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        console.log(data);
        //people = data;
      })
    );
  }, []);
  return (
    <div>
      <h1>People</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {people.map((person) => {
          return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle}/>
        })}
      </div>
    </div>
  );
}
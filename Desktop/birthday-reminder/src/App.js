import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  // const removePerson = (id) => {
  //   setPeople((prevperson) => {
  //     let newPeople = prevperson.filter((person) => person.id !== id);
  //     return newPeople;
  //   });
  // };
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;

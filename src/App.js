import * as React from 'react';

// const welcome = {
//   greeting: 'Hey',
//   title: 'React',
// };

function getTitle(title) {
  return title;
}
const myArray = ['My', 'name', 'is', 'Marek'];
const getName = myArray.map((el) => {
  return el;
});

function App() {
  return (
    <div>
      {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
      <h1>{getName} and this is {getTitle('React')} </h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' placeholder='write something' />
      <h2>
        I want to learn React so i can get a good job, and my parents can be
        proud of me and i will no longer be a loser and a burden for them!
      </h2>
    </div>
  );
}

export default App;

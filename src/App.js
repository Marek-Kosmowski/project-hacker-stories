import * as React from 'react';

// const welcome = {
//   greeting: 'Hey',
//   title: 'React',
// };

const getTitle = (title) => title;
const myArray = ['My', 'name', 'is', 'Marek'];
const getName = myArray.map((el) => el);

const list = [
  {
    title: 'React',
    url: 'https://react.js.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
//creating new component List
// declaration of List component
const List = () => (
  <ul>
    {list.map((item) => {
      return (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title} </a>
          </span>
          <span>{item.author} </span>
          <span>{item.num_comments} </span>
          <span>{item.points}</span>
        </li>
      );
    })}
  </ul>
);

//creating new component Search
const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of the target(here:element)
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input
        id='search'
        type='text'
        onChange={handleChange}
        onBlur={handleChange}
        placeholder='write something'
      />
    </div>
  );
};

const App = () => (
  <div>
    {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
    <h1>
      {getName} and this is {getTitle('React')}{' '}
    </h1>
    <Search />
    <hr />
    {/* creating instance of List component */}
    <List />
    <hr />
    <List />
    <hr />
    <List />
    <hr />
    <List />
    <hr />
    <List />
    <hr />
  </div>
);

export default App;

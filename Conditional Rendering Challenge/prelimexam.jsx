import React from 'react';

const ListItem = ({ item, status }) => {
  const backgroundColor = status === 'true' ? 'green' : status === 'on-hand' ? 'pink' : '';

  return (
    <li style={{ backgroundColor, listStyleType: 'none', padding: '8px', margin: '4px' }}>
      {item}
    </li>
  );
};

const ListComponent = ({ list, listStatus }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <ListItem key={index} item={item} status={listStatus[index]} />
      ))}
    </ul>
  );
};

const Result = () => {
  const myList = ['My Strawhat', 'Gum gum Fruit', 'The Red Vest'];
  const myStatusList = ['true', 'true', 'on-hand'];

  return (
    <div>
      <h1>Things to Bring</h1>
      <ListComponent list={myList} listStatus={myStatusList} />
    </div>
  );
};

export default Result;

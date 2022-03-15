import React, { useEffect, Fragment } from 'react';
import { render } from 'react-dom';
import { useQuery } from 'react-query';

import Hello from './Hello';
import './style.css';
//https://kwoodallsapp.herokuapp.com/
//https://kwoodallsapp.herokuapp.com/getitems
//fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")

const App = () => {
  const { data=[], status } = useQuery({
    queryKey: 'id',
    queryFn: () =>
      fetch('https://kwoodallsapp.herokuapp.com/getitems').then((res) =>
        res.json()
      ),
    config: {
      onSuccess: (data) => [...data].reverse(),
    },
  });

  // const { data, error, status } = useQuery("users", fetchAllUsers);

  return (
    <div>
      <Hello name={'world'} />
      <p>Start editing again to see some magic happen :)</p>
      <p>testing</p>
      {data.map(({ name, phone }, index) => (
        <div key={index}>
          <h3>{phone}</h3>
          <p> {name}</p>
        </div>
      ))}
    </div>
  );
};

render(<App />, document.getElementById('root'));

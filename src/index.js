import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './testData.json';

console.log(data);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
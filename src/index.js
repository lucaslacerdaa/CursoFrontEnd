import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './features/Welcome';
import users_data from './assets/json/users_data';


const title = "Hello word";
const footerDesc = "Exercício do curso DFE";

ReactDOM.render(
  <Welcome title ={title} sectionData ={users_data} footerDesc={footerDesc}/>,
  document.getElementById('root')
);
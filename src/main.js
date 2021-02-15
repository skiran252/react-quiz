import React from 'react';
import { render } from 'react-dom';
import QuizApp from './components/QuizApp';
import {BrowserRouter,Route} from 'react-router-dom';
import './style.css';
import SelectSearch from 'react-select-search';
const options = [
  {name: 'Swedish', value: 'sv'},
  {name: 'English', value: 'en'},
  {
      type: 'group',
      name: 'Group name',
      items: [
          {name: 'Spanish', value: 'es'},
      ]
  },
];
render(
  
    <div><QuizApp totalQuestions={10} /> </div>,document.getElementById('app')
    // <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
);

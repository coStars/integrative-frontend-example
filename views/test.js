import {render} from 'react-dom'
import React from 'react'
import  * as utils from '../utils.js';
import axios from 'axios';

utils.country(function(err, data) {
  const countries = JSON.parse(data.body).countries;

  render(
    <select id ="myList" onClick={this.contr}>
      {
        countries.map(
          name =>
            <option value={ name }>{ name }</option>
        )
      }
    </select>,
    document.getElementById('select-container')
  )
});

function contr (value){
    axios.post('/',{value:value}).then(function(res){
console.log(res);

    })
}

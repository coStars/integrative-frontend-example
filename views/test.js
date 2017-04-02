import {render} from 'react-dom'
import React ,{Component} from 'react'
import  * as utils from '../utils.js';
import axios from 'axios';

utils.country(function(err, data) {
  const countries = JSON.parse(data.body).countries;

  render(
    <select id ="myList" onChange="contr();">
      {
        countries.map(
          name =>
            <option onClick={this.onChange} value={ name }>{ name }</option>
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

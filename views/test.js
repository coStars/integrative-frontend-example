import {render} from 'react-dom'
import React from 'react'
import  * as utils from '../utils.js';
import Select from 'react-select';

function getoption(cb){

  utils.country(function(err,data){
    const body =JSON.parse(data.body);
    const con =body.countries;
    var options = con.map(function(obj) {
       var rObj = {value: "",
       label:""

       };
       rObj.value = con[obj-1];
       rObj.label = con[obj-1];
       return rObj;
    });
    


cb(options)
  })

}
getoption(function(options){
  function logChange(val) {
    console.log("Selected: " + val);
  }
render (<Select
  name="selectcontry"
  value="one"
  options={options}
  onChange={logChange}

/>

,document.getElementById('select-container'))
})

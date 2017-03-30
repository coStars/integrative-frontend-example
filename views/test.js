import {render} from 'react-dom'
import React from 'react'
import  * as utils from '../utils.js';
import Select from 'react-select';

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


render (<Select
  name="form-field-name"
  value="one"
  options={options}
/>

,document.getElementById('select-container'))

})

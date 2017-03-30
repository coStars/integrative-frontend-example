import {render} from 'react-dom'
import React from 'react'
import  * as utils from '../utils.js';
function co (cb){
  utils.country(function(err,data){
    const body =JSON.parse(data.body);
    const con =body.countries;
    // var options = con.map(function(obj) {
    //    var rObj = {value: "",
    //    label:""   };
    //    rObj.value = con[con.indexOf(obj)];
    //    rObj.label = con[con.indexOf(obj)];
    //    return rObj;
    // });
cb(con)
  })
}
co(function(options){
  console.log(options);
  render (
    <select>
      options.map(name => console.log("name"+name);
      <option value={name}>{name}</option>)
    </select>
,document.getElementById('select-container'))})

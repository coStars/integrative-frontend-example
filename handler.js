const utils = require('./utils.js');
const vision = require('vision');
const React = require ('react');
const ReactDOM = require('react-dom')
// const test = require('./views/test.js');
function index (request,reply){

  utils.getlocation((error, data)=>  {
    var body=JSON.parse(data.body);
  var places=body.YourFuckingLocation;
  if(body.YourFuckingLocation.indexOf(",")>-1){
      var p = body.YourFuckingLocation.split(",");
      var places = p[2]
          places = places.trim();
      }
      if (places == "Occupied Palestine") {
          places = "West Bank and Gaza"
      }
      //console.log("places", places);
      utils.sts(places, function(error, data) {
        reply.view("index");
      });
  });
}

function indexPOST (request,reply){
console.log(request.paylod.value);
  utils.sts(request.payload.value,(error, data)=>
  {

    console.log(data);
    utils.gchart(data, request.paylod.value)

   });
}


module.exports={
  index:index
}

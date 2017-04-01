window.onload= function(){
  function request(value) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
          }
      };
      xhr.open("POST",'/', true);
      xhr.send(value);
  }
  console.log("select")
  var select = document.getElementById("myList");
  console.log(select);
  select.addEventListener('change',  function(){

        var value =select.value;
        request(value)

  });


}

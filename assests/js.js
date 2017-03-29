function request(value) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        }
    };
    xhr.open("POST",'/', true);
    xhr.send(value);
}

var select = document.getElementById("myList");

select.addEventListener('change',  function(){
      var value =select.value;
      request(value)
});

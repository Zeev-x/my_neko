const x = new XMLHttpRequest();
const method = "GET";
const url = "data.json";

function neko(){
x.open(method,url,true);
x.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(x.responseText);
    var y = Math.floor(Math.random()*data.length);
    var res = data[y].neko;
    var web = `<img src="${res}" height="400px">`;
    document.getElementById("neko").innerHTML = web;
    document.getElementById("btn").innerHTML = "Next";
  }
};
x.send();
}
function kucing(){
  var p = prompt("Password : ");
  if(p == "NekoZ12"){
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(hasil){
        var web = `<img src="${hasil.neko}" height="400px"><br><br>`;
        document.getElementById("all").innerHTML += web;
      })
    }
  }
  x.send();
  } else {
    alert("Password kamu salah");
  }
}
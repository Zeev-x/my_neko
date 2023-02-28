function neko(){
const x = new XMLHttpRequest();
const method = "GET";
const url = "data.json";

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
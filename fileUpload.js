function fileUpload() {
    var x = document.getElementById("myFile");
    
function result(){
    var obj = JSON.stringify(x);
    var ref = JSON.parse(obj);
    document.getElementById("demo").innerHTML =
    obj.Results[0].title + "<br>" + obj.Results[0].url + "<br>" + obj.Results[0].description;
    }
  }
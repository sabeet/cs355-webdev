var object;

var apiPath = 'https://www.googleapis.com/customsearch/v1?';
var apiKey = 'key=AIzaSyD06Z51s9ztRexJT5NIffyjapUON3Jj4hs';
var cx = '&cx=005197151154116588693:rovpjytqdjf';

//example url
//https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

 var input;

function setup(){
    var button = select('#submit');
    button.mousePressed(askTheAPI);
    input = select('#search');
    }

function gotData(data){
    println(data);
}

function askTheAPI(){
    var apiUrlLink = apiPath+apiKey+cx+'&q='+input.value();
    loadJSON(apiUrlLink, gotData);
    }

//document.body.innerHTML = apiUrlLink;
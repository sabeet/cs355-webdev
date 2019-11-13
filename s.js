var searchButton = document.getElementById("searchbar");
//search button element grabber
searchButton.addEventListener("submit", function(e) {
    search(searchButton.children[0].value);});
//api and cx key
var apiPathUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyD06Z51s9ztRexJT5NIffyjapUON3Jj4hs&cx=005197151154116588693:rovpjytqdjf&q=";


function search(searchTerm) {
    //search term
  var res = document.getElementsByClassName("results")[0].innerHTML = "";
    var url = apiPathUrl + searchTerm;
    //ajax stuff
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    console.log("Currently searching for stuff...");
    request.onload = function () {
	console.log("Stuff has now been loaded");
	var data = JSON.parse(this.response);
	if (request.status == 200) {
	    var results = document.getElementsByClassName("results")[0];
	    for (var i = 0; i < data["items"].length; i++) {
		var container = document.createElement("div");
                container.className = "result";
                var checkb = document.createElement("input");
                checkb.type = "checkbox";
                var link = document.createElement("a");
                link.href = data["items"][i].formattedUrl;
                link.innerHTML = data["items"][i].title;
                var url = document.createElement("p");
                url.className = "url";
                url.innerHTML = data["items"][i].formattedUrl;
                var desc = document.createElement("p");
                desc.className = "desc";
                desc.innerHTML = data["items"][i].snippet;
                var br = document.createElement("br");
		container.appendChild(checkb);
		container.appendChild(link);
		container.appendChild(url);
		container.appendChild(desc);
		container.appendChild(br);
		results.appendChild(container);
	    }
	}
    }
    request.send();
}


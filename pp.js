window.onload = function() {
    var fileInput = document.getElementById('upfile');
    var fileDisplayArea = document.getElementsByClassName('results')[0];
    fileInput.addEventListener('change', function(e) {
	var file = fileInput.files[0];
	var reader = new FileReader();

	reader.onload = function(e) {
	    var extension = fileInput.value.split(".")[1];
	    var fileText = reader.result;
	    if (extension === "xml"){
		var parser = new DOMParser();
		var doc = parser.parseFromString(fileText, "text/xml");
		var results = doc.getElementsByTagName("result");
		for (var i = 0; i < results.length; i++) {
		    var container = document.createElement("div");
		    container.className = "result";
		    var checkb = document.createElement("input");
		    checkb.type = "checkbox";
		    var link = document.createElement("a");
		    link.href = doc.getElementsByTagName("url")[i].textContent;
		    link.innerHTML = doc.getElementsByTagName("title")[i].textContent;
		    var url = document.createElement("p");
		    url.className = "url";
		    url.innerHTML = doc.getElementsByTagName("url")[i].textContent;
		    var desc = document.createElement("p");
		    desc.className = "desc";
		    desc.innerHTML = doc.getElementsByTagName("description")[i].textContent;
		    var br = document.createElement("br");
		    container.appendChild(checkb);
		    container.appendChild(link);
		    container.appendChild(url);
		    container.appendChild(desc);
		    container.appendChild(br);
		    fileDisplayArea.appendChild(container);
		}
	    }
	    else if (extension === "json") {
		let obj = JSON.parse(fileText);
		let results = obj.Result;
		for (var i = 0; i < results.length; i++) {
		    var container = document.createElement("div");
		    container.className = "result";
		    var checkb = document.createElement("input");
		    checkb.type = "checkbox";
		    var link = document.createElement("a");
		    link.href = results[i].url;
		    link.innerHTML = results[i].title;
		    var url = document.createElement("p");
		    url.className = "url";
		    url.innerHTML = results[i].url;
		    var desc = document.createElement("p");
		    desc.className = "desc";
		    desc.innerHTML = results[i].description;
		    var br = document.createElement("br");
		    container.appendChild(checkb);
		    container.appendChild(link);
		    container.appendChild(url);
		    container.appendChild(desc);
		    container.appendChild(br);
		    fileDisplayArea.appendChild(container);
		}
	    }
	    else if (extension === "csv") {
		var content = fileText.split('\n');
		for (var i = 0; i < content.length; i++) {
		    var elements = content[i].split(',');
		    var container = document.createElement("div");
                    container.className = "result";
                    var checkb = document.createElement("input");
                    checkb.type = "checkbox";
                    var link = document.createElement("a");
                    link.href = elements[1];
                    link.innerHTML = elements[0];
                    var url = document.createElement("p");
                    url.className = "url";
                    url.innerHTML = elements[1];
                    var desc = document.createElement("p");
                    desc.className = "desc";
                    desc.innerHTML = elements[2];
                    var br = document.createElement("br");
                    container.appendChild(checkb);
                    container.appendChild(link);
                    container.appendChild(url);
                    container.appendChild(desc);
                    container.appendChild(br);
                    fileDisplayArea.appendChild(container);
		}
	    }
	}

	reader.readAsText(file);
    });
}

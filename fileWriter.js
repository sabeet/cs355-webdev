function writeJSON() {
    var resultsObject = {"Result" : []};
    var name = prompt("Please name your file (without extension): ");
    name = name + ".json";
    var results = document.getElementsByClassName("results")[0];
    var indRes = results.children;
    for (var i = 0; i < indRes.length; i++) {
	if (indRes[i].children[0].checked) {
	    var title = indRes[i].children[1].innerHTML;
	    var url =   indRes[i].children[2].innerHTML;
	    var description = indRes[i].children[3].innerHTML;
	    var result = {"title": title, "url":url, "description":description};
	    resultsObject["Result"].push(result);
	}
    }
    download(JSON.stringify(resultsObject), name, 'text/plain');
}

function writeCSV() {
    var name = prompt("Please name your file (without extension): ");
    name = name + ".csv";
    var results = document.getElementsByClassName("results")[0];
    var indRes = results.children;
    var result = "";
    for (var i = 0; i < indRes.length; i++) {
        if (indRes[i].children[0].checked) {
            var title = indRes[i].children[1].innerHTML;
	    title = title.replace(',','');
            var url =   indRes[i].children[2].innerHTML;
	    url = url.replace(',','');
            var description = indRes[i].children[3].innerHTML;
	    description = description.replace(',','');
	    var result = result + title + "," + url + "," + description+"\n";
        }
    }
    result = result.trim();
    download(result, name, 'text/plain');
}

function writeXML() {
    var name = prompt("Please name your file (without extension): ");
    name = name + ".xml";
    var results = document.getElementsByClassName("results")[0];
    var indRes = results.children;
    var result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<results>\n";
    for (var i = 0; i < indRes.length; i++) {
        if (indRes[i].children[0].checked) {
            var title = indRes[i].children[1].innerHTML;
            title = title.replace(',','');
            var url =   indRes[i].children[2].innerHTML;
            url = url.replace(',','');
            var description = indRes[i].children[3].innerHTML;
            description = description.replace(',','');
            var result = result + "<result>\n<title>" + title + "</title>\n"
            + "<url>" + url + "</url>\n" + "<description>"
            + description + "</description>\n</result>\n";
        }
    }
    result += "</results>";
    download(result, name, 'text/plain');
}

function download(text, name, type) {
    var a = document.getElementById("a");
    a.style.display = "block";
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
}

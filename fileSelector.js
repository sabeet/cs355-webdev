function selectAll() {
    var results = document.getElementsByClassName("results")[0];
    var indivResults = results.children;
    for (var i = 0; i < indivResults.length; i++) {
	indivResults[i].children[0].checked = true;
    }
}

function deselectAll() {
    var results = document.getElementsByClassName("results")[0];
    var indivResults = results.children;
    for (var i = 0; i < indivResults.length; i++) {
        indivResults[i].children[0].checked = false;
    }
}


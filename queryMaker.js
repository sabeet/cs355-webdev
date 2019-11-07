function myFunction(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText)
            var items = response.items;
            //      
           var output = '';
            for(var i=0; i< items.length; i++){
            output += '<input type="checkbox" value="items[i]"></input>' + items[i].title + "<br>" + " " + items[i].link + "<br>" + items[i].snippet + "<br>" + "<br>";
        }
        document.getElementById('smth').innerHTML = output;
    //
        }
    };  
        var x = document.getElementById("search").value;
        xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=AIzaSyD06Z51s9ztRexJT5NIffyjapUON3Jj4hs&cx=005197151154116588693:rovpjytqdjf&q="+x, true);
        xhttp.send();
    }
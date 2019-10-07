var searchTerm="glocations:('NEW YORK CITY')";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key=Hig5M7FblcRTt7RMpTao9B4NGYPoxXyV";
var jsonFile = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=Hig5M7FblcRTt7RMpTao9B4NGYPoxXyV"
var searchTerm;
console.log("Javascript works");


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
console.log(response)
})

<<<<<<< HEAD
var empty = $("<div>").text("lasdfj;sadlasl");
empty.attr("data", "klajsdflkjdsal");
$("#form").prepend(empty);
=======
searchTerm = ("<div>")
searchTerm.attr("")

$("#search-term").



>>>>>>> 0d0ac09454f906ec02a15ff4e4d6b9f77a2b9cc9

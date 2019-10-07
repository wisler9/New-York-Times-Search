var searchTerm="keywords=";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=Hig5M7FblcRTt7RMpTao9B4NGYPoxXyV";
// var jsonFile = "https://api.nytimes.com/svc/search/v2/articlesearch.json"




$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(res){
console.log(res);

// This testSnippet allows you to get into the keywords section that is assigned to the variable searchTerm.
var testSnippet = res.response.docs[0];
console.log(testSnippet);


})

<<<<<<< HEAD
=======
<<<<<<< HEAD
var empty = $("<div>").text("lasdfj;sadlasl");
empty.attr("data", "klajsdflkjdsal");
$("#form").prepend(empty);
=======
searchTerm = ("<div>")
searchTerm.attr("")
>>>>>>> 88a5fa882cb7101cad2f719cce331b737399b0cd






>>>>>>> 0d0ac09454f906ec02a15ff4e4d6b9f77a2b9cc9

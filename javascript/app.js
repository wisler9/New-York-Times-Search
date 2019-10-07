var searchTerm;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key=Hig5M7FblcRTt7RMpTao9B4NGYPoxXyV";
var jsonFile = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=Hig5M7FblcRTt7RMpTao9B4NGYPoxXyV"
console.log("Javascript works");


$.ajax({
    url: jsonFile,
    method: "GET"
}).then(function(response){
console.log(response)
})

var empty = $("<div>").text("lasdfj;sadlasl");
empty.attr("data", "klajsdflkjdsal");
$("#form").prepend(empty);
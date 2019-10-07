var searchTerm;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key=Hig5M7FblcRTt7RMpTao9B4NGYPoxXyV"

$.ajax({
    url: queryURL,
    method: "GET"
})


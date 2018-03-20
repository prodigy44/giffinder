// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){

$("button").click(function(){
    var input = $("input").val();
    callGiphyAPIWithSearchTerm(input);
});

function giphyURLWithSearchTerm(searchTerm) {
    var newUrl =  "https://api.giphy.com/v1/stickers/search?q=" + searchTerm +
	"&api_key=dc6zaTOxFJmzC";
    return newUrl;
}

function appendImageToBody(srcURL) {
    $('body').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      success: function(response) {
           var random= Math.floor(Math.random() * 20);
           var url = response.data[random].images.original.url;
           appendImageToBody(url);
      },
    }); 
}

  
         
         
    
  
  
  
});

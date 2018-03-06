// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
 $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
                     console.log(response);
                console.log(response.data);
                console.log(response.data[0]);
               console.log(response.data[0].type);
             console.log(response.data[0].title);
             console.log(response.data[0].images.original.url);
             $('body').html("<img src=" + response.data[4].images.original.url +"/>");
      },    
    });
         
         
    
  
  
  
});

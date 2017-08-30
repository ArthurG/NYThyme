chrome.runtime.onMessage.addListener(function(msg){
  $.post("https://secret-sands-12024.herokuapp.com/articles/", msg, function(data){
    console.log("sucess");
  }, "json")
});

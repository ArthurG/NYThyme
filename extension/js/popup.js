function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    console.log("Hello World!");
    renderStatus('I am currently on ' + url);
  });
});

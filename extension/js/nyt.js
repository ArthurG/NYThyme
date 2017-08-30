$(document).ready(function(){

  let headline = ($("#headline").text());
  let author = ($("span.byline-author").text());
  let time = ($("time.dateline").text());
  let body = ($(".story-body-1").text());
  console.log(headline);
  console.log(author);
  chrome.runtime.sendMessage({
    title: headline,
    author: author,
    publishtime: time,
    content: body
  });
});

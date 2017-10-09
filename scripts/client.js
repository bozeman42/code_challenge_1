console.log('js sourcded');
$(document).ready(main);

var count = 0;

function main(){
  console.log('jquery document loaded');
  addClickHandlers();
}

function addClickHandlers(){
  $('#generateBtn').on('click',addDiv);
}

function addDiv(){
  count++;
  var $div = $('<div></div>');
  var $counter = $('<p>'+ count +'</p>');
  $div.append($counter);
  $('#output').append($div);
}
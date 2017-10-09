console.log('js sourcded');
$(document).ready(main);

function main(){
  console.log('jquery document loaded');
  addClickHandlers();
}

function addClickHandlers(){
  $('#generateBtn').on('click',addDiv);
}

function addDiv(){
  var $div = $('<div>Heeeey</div>');
  $('#output').append($div);
}
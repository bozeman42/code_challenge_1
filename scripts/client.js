console.log('js sourcded');
$(document).ready(main);

var count = 0;

function main(){
  console.log('jquery document loaded');
  addClickHandlers();
}

function addClickHandlers(){
  $('#generateBtn').on('click',addDiv);
  $('#output').on('click','.swapBtn',swapColors);
  $('#output').on('click','.deleteBtn',deleteDiv);
}

function addDiv(){
  count++;
  var $div = $('<div class="generatedDiv"></div>');
  var $counter = $('<p>'+ count +'</p>');
  var $swapBtn = $('<button class="swapBtn">Swap</button>');
  var $deleteBtn = $('<button class="deleteBtn">Delete</button>');
  $div.append($counter,$swapBtn,$deleteBtn);
  $('#output').append($div);
}

function swapColors() {
  console.log(this);
}

function deleteDiv() {
  console.log(this);
}
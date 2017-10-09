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
  var $thisDiv = $(this).parent();
  console.log($thisDiv.css('background-color'))
  if ($thisDiv.css('background-color') === 'rgb(255, 0, 0)'){
    $thisDiv.css('background-color','yellow');
  } else {
    $thisDiv.css('background-color','red');
  }
  console.log($thisDiv.css('background-color') === 'rgb(255, 255, 0)');
}

function deleteDiv() {
 $(this).parent().remove();
}
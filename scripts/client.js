console.log('js sourcded');
$(document).ready(main);

var count = 0;

function main(){
  console.log('jquery document loaded');
  addClickHandlers();
}

// adds click handlers
function addClickHandlers(){
  $('#generateBtn').on('click',addDiv);
  $('#output').on('click','.swapBtn',swapColors);
  $('#output').on('click','.deleteBtn',deleteDiv);
}

// appends divs to the DOM
function addDiv(){
  count++;
  var $div = $('<div class="generatedDiv"></div>');
  var $counter = $('<p>'+ count +'</p>');
  var $swapBtn = $('<button class="swapBtn">Swap</button>');
  var $deleteBtn = $('<button class="deleteBtn">Delete</button>');
  $div.append($counter,$swapBtn,$deleteBtn);
  $('#output').append($div);
}

// swaps colors of div containing clicked swap button
function swapColors() {
  var $thisDiv = $(this).parent();
  if ($thisDiv.css('background-color') === 'rgb(255, 0, 0)'){
    $thisDiv.css('background-color','yellow');
  } else {
    $thisDiv.css('background-color','red');
  }
}

// deletes div containing clicked delete button
function deleteDiv() {
 $(this).parent().remove();
}
$('#buttonA').click(function () {
  /* show one figure, hide the others */
  $('#itemA').removeClass('hidden');
  $('#itemB').addClass('hidden');
  $('#itemC').addClass('hidden');
  $('#itemD').addClass('hidden');
})

$('#buttonB').click(function () {
  /* show one figure, hide the others */
  $('#itemA').addClass('hidden');
  $('#itemB').removeClass('hidden');
  $('#itemC').addClass('hidden');
  $('#itemD').addClass('hidden');
})

$('#buttonC').click(function () {
  /* show one figure, hide the others */
  $('#itemA').addClass('hidden');
  $('#itemB').addClass('hidden');
  $('#itemC').removeClass('hidden');
  $('#itemD').addClass('hidden');
})

$('#buttonD').click(function () {
  /* show one figure, hide the others */
  $('#itemA').addClass('hidden');
  $('#itemB').addClass('hidden');
  $('#itemC').addClass('hidden');
  $('#itemD').removeClass('hidden');
})

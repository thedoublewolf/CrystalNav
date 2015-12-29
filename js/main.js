// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

$('.shards').click( function () {
  $('#shard-group').fadeToggle(200, function () {
    $('#shard-group').addClass('hidden').removeClass('active');
    $('#shard-seperate').addClass('active').removeClass('hidden');
  });
});

$('.shard-1').mouseover( function () {
  $('#desc-1').toggleClass('active').toggleClass('hidden');
});
$('.shard-1').mouseleave( function () {
  $('#desc-1').toggleClass('active').toggleClass('hidden');
});
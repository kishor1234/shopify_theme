// Exit intent
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}
// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {
  if (evt.toElement == null && evt.relatedTarget == null) {
    $('.lightboxpuma').slideDown();
  };
});
  
// Closing the Popup Box
$('a.close').click(function() {
  $('.lightboxpuma').slideUp();
});
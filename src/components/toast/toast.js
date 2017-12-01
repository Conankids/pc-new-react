
import './_toast.less';
import jQuery from './../UEditor/third-party/jquery-1.10.2.min';

var toastit_id = String('id'+Math.random()).replace('.','');
var toastit = function (text, timeout ) {
  var timeout = timeout || 3000;
  var html = jQuery(`<div id="${toastit_id}" class="dialog__toast-box">${text}</div>`);

  jQuery('body').append(html);

  html.css({
    left:jQuery(window).width() / 2 - html.width() / 2,
    top: html.height(),
    opacity:0
  }).animate({
	top:20,
	opacity:1
  },160);

  setTimeout(function () {
	html.fadeOut(function () {
	  html.remove();
	});
  }, timeout);

}

export default toastit;
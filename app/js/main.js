$(document).ready(function () {
   $(".icon-burger").on('click', function () {
      $('.burger').addClass('open');
      $('.burger__bg').fadeIn();
   });
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".burger__content, .icon-burger").length) {
         $('.burger').removeClass('open');
         $('.burger__bg').fadeOut();
      }
      e.stopPropagation();
   });
});
$('#select').on("change", function(e) {
  var value = $(this).val();
  
  $('.mode').css({
      'mix-blend-mode': value
  });
});
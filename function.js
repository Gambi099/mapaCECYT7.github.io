$(document).ready(function(){
  $(document).mousemove(function(event){
    $("span").text(event.pageX + ", " + event.pageY);
    $(".description").css({
    left:  event.pageX,
    top:   event.pageY - 70
  });
  });
});

 $description = $(".description");

 $(function(){$('.enabled').hover(function() {
    
    //$(this).attr("class", "enabled heyo");
    $(this).addClass('heyo');
    $(".description").addClass('active');
    $(".description").html($(this).attr('id'));
  }, 
  
  function() {
    $(".description").removeClass('active');
  });
})

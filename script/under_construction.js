function toggleDisplayOfPendingElements() {
  if($(".pending").hasClass("not_visible")) {
    showPendingElements();
  }
  else {
    hidePendingElements();
  }
}

function toggleOverlayOfPendingElements() {
  if($(".overlay_for_pending").length > 0) {
    hideOverlayOfPendingElements();
  }
  else {
    overlayPendingElements();
  }

}

function hidePendingElements(){
  $(".pending").each(function(i){
    $(this).addClass("not_visible");
  });
}

function showPendingElements() {
  $(".pending").removeClass("not_visible");
}

function hideOverlayOfPendingElements() {
  $(".overlay_for_pending").remove();
}

function overlayPendingElements(){
  $(".pending").each(function(i){
    
    //clone the element so that we can overlay it
    var replacement = $(this).clone();
    

    //set the height
    var height = $(this).height();
    var width = $(this).width();
    
    $(replacement).height(height);
    $(replacement).width(width);
    
    //set the position
    var pos = $(this).position();

    $(replacement).css("top", pos.top);
    $(replacement).css("left", pos.left);
    
    //add the class that sets opacity and background color
    $(replacement).addClass("overlay_for_pending");

    //todo: replace this with a delimited class to indicate what milestone it is
    $(replacement).html("");
    
    //insert after the element in question
    $(this).after(replacement);
  });
}

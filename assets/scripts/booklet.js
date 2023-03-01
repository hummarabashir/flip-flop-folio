function defaultfoldSignature(foldDuration) {
  $("#p_4, #p_5, #p_12, #p_13").css({
      "-webkit-animation-name": "fold1",
      "animation-name": "fold1",
    });
  $("#p_16, #p_1").css({
      "-webkit-transform-origin": "top",
      "transform-origin": "top",
      "-webkit-animation-name": "fold2",
      "animation-name": "fold2",
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
    });
  $("#p_8").css({
      "-webkit-animation-name": "fold3",
      "animation-name": "fold3",
    });
}
function foldSignature(foldDuration) {
  $("#p_4, #p_5, #p_12, #p_13").css({
      "-webkit-animation-name": "fold1",
      "animation-name": "fold1",
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
      "-webkit-animation-delay": "",
      "animation-delay": "",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",
    });
  $("#p_16, #p_1").css({
      "-webkit-transform-origin": "top",
      "transform-origin": "top",
      "-webkit-animation-name": "fold2",
      "animation-name": "fold2",
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
      "-webkit-animation-delay": foldDuration / 3 + "s",
      "animation-delay": foldDuration / 3 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",
    });
  $("#p_8").css({
      "-webkit-transform-origin": "left",
      "transform-origin": "left",
      "-webkit-animation-name": "fold3",
      "animation-name": "fold3",
      "-webkit-animation-delay": (foldDuration / 3) * 2 + "s",
      "animation-delay": (foldDuration / 3) * 2 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",
    });
}
function unfoldSignature(foldDuration) {
  $("#p_8").css({
    "-webkit-transform-origin": "left",
    "transform-origin": "left",
    "-webkit-animation-name": "unfold1",
    "animation-name": "unfold1",
    "-webkit-animation-delay": "",
    "animation-delay": "",
    "-webkit-animation-duration": foldDuration / 3 + "s",
    "animation-duration": foldDuration / 3 + "s",});
  $("#p_16, #p_1").css({
      "-webkit-transform-origin": "top",
      "transform-origin": "top",
      "-webkit-animation-name": "unfold3",
      "animation-name": "unfold3",
      "-webkit-animation-fill-mode": "backwards",
      "animation-fill-mode": "backwards",
      "-webkit-animation-delay": foldDuration / 3 + "s",
      "animation-delay": foldDuration / 3 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
  $("#p_4, #p_5, #p_12, #p_13").css({
      "-webkit-animation-name": "unfold1",
      "animation-name": "unfold1",
      "-webkit-animation-fill-mode": "backwards",
      "animation-fill-mode": "backwards",
      "-webkit-animation-delay": (foldDuration / 3) * 2 + "s",
      "animation-delay": (foldDuration / 3) * 2 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
}

function flipSignature(flipDuration) {
  $(".page-wrapper.front").css({
    "-webkit-animation-name": "flipB",
    "animation-name": "flipB",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
  $(".page-wrapper.back").css({
    "-webkit-animation-name": "flipA",
    "animation-name": "flipA",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
}

function flipSignatureBack(flipDuration) {
  $(".page-wrapper.front").css({
    "-webkit-animation-name": "flipA",
    "animation-name": "flipA",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
  $(".page-wrapper.back").css({
    "-webkit-animation-name": "flipB",
    "animation-name": "flipB",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
}

$("#turn").click(function() {
  if ( $(".page-wrapper").hasClass("folded") ) {
    unfoldSignature(1);
    foldAction = 1;
    $(".page-wrapper").removeClass("folded");
    turnTurn(1);
  } else {
    turnTurn(1);
  }
});

var foldAction = 1;
$(".page-wrapper").addClass("folded");
defaultfoldSignature(2);

function foldUnfold() {
  $(".page-wrapper").removeAttr("style");
  if ( foldAction == 1 ) {
    unfoldSignature(2);
    foldAction = 2;
    $(".page-wrapper").removeClass("folded");
  } else {
    foldSignature(2);
    foldAction = 1;
    $(".page-wrapper").addClass("folded");
  }
}

$("#fold").click(function() {
  if ( ($(".page-wrapper").hasClass("front flipped")) || ( $(".signature-wrapper").hasClass("turned")) ) {
    setTimeout(function(){ foldUnfold(); }, 1200);
  } else {
    foldUnfold();
  }
  if ( $(".page-wrapper").hasClass("front flipped") ) {
    flipSignatureBack(1);
    $(".page-wrapper.back").addClass("flipped");
    $(".page-wrapper.front").removeClass("flipped");
    flipAction = 1;
  }

});

var flipAction = 1;

function flipFlip(flipDuration) {
  $(".page-wrapper").removeAttr("style");
  if ( flipAction == 1 ) {
    flipSignature(flipDuration);
    $(".page-wrapper.front").addClass("flipped");
    $(".page-wrapper.back").removeClass("flipped");
    flipAction = 2;
  } else {
    flipSignatureBack(flipDuration);
    $(".page-wrapper.back").addClass("flipped");
    $(".page-wrapper.front").removeClass("flipped");
    flipAction = 1;
  }
}

$("#flip").click(function() {
  if ( $(".page-wrapper").hasClass("folded") ) {
    // $("#flip").addClass("disabled");
    unfoldSignature(1);
    foldAction = 1;
    $(".page-wrapper").removeClass("folded");
    setTimeout(function(){ flipFlip(1); }, 1000);
  } else {
    flipFlip(1);
  }
});

$("#print").click(function(){
  window.print();
});

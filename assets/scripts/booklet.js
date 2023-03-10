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

// function foldSignature(foldDuration) {
//   $("#p_4, #p_5, #p_12, #p_13").css({
//       "-webkit-animation-name": "fold1",
//       "animation-name": "fold1",
//       "-webkit-animation-fill-mode": "forwards",
//       "animation-fill-mode": "forwards",
//       "-webkit-animation-delay": "",
//       "animation-delay": "",
//       "-webkit-animation-duration": foldDuration / 3 + "s",
//       "animation-duration": foldDuration / 3 + "s",});
//   $("#p_8, #p_9").css({
//       "-webkit-transform-origin": "bottom",
//       "transform-origin": "bottom",
//       "-webkit-animation-name": "fold2",
//       "animation-name": "fold2",
//       "-webkit-animation-fill-mode": "forwards",
//       "animation-fill-mode": "forwards",
//       "-webkit-animation-delay": foldDuration / 3 + "s",
//       "animation-delay": foldDuration / 3 + "s",
//       "-webkit-animation-duration": foldDuration / 3 + "s",
//       "animation-duration": foldDuration / 3 + "s",});
//   $("#p_16").css({
//       "-webkit-transform-origin": "right",
//       "transform-origin": "right",
//       "-webkit-animation-name": "fold3",
//       "animation-name": "fold3",
//       "-webkit-animation-delay": (foldDuration / 3) * 2 + "s",
//       "animation-delay": (foldDuration / 3) * 2 + "s",
//       "-webkit-animation-duration": foldDuration / 3 + "s",
//       "animation-duration": foldDuration / 3 + "s",});
// }

// function unfoldSignature(foldDuration) {
//   $("#p_16").css({
//       "-webkit-transform-origin": "right",
//       "transform-origin": "right",
//       "-webkit-animation-name": "unfold3",
//       "animation-name": "unfold3",
//       "-webkit-animation-delay": "",
//       "animation-delay": "",
//       "-webkit-animation-duration": foldDuration / 3 + "s",
//       "animation-duration": foldDuration / 3 + "s",});
//   $("#p_8, #p_9").css({
//       "-webkit-transform-origin": "bottom",
//       "transform-origin": "bottom",
//       "-webkit-animation-name": "unfold2",
//       "animation-name": "unfold2",
//       "-webkit-animation-fill-mode": "backwards",
//       "animation-fill-mode": "backwards",
//       "-webkit-animation-delay": foldDuration / 3 + "s",
//       "animation-delay": foldDuration / 3 + "s",
//       "-webkit-animation-duration": foldDuration / 3 + "s",
//       "animation-duration": foldDuration / 3 + "s",});
//   $("#p_4, #p_5, #p_12, #p_13").css({
//       "-webkit-animation-name": "unfold1",
//       "animation-name": "unfold1",
//       "-webkit-animation-fill-mode": "backwards",
//       "animation-fill-mode": "backwards",
//       "-webkit-animation-delay": (foldDuration / 3) * 2 + "s",
//       "animation-delay": (foldDuration / 3) * 2 + "s",
//       "-webkit-animation-duration": foldDuration / 3 + "s",
//       "animation-duration": foldDuration / 3 + "s",});
// }

// function flipSignature(flipDuration) {
//   $(".page-wrapper.front").css({
//     "-webkit-animation-name": "flipB",
//     "animation-name": "flipB",
//     "-webkit-animation-duration": flipDuration + "s",
//     "animation-duration": flipDuration + "s",});
//   $(".page-wrapper.back").css({
//     "-webkit-animation-name": "flipA",
//     "animation-name": "flipA",
//     "-webkit-animation-duration": flipDuration + "s",
//     "animation-duration": flipDuration + "s",});
// }

// function flipSignatureBack(flipDuration) {
//   $(".page-wrapper.front").css({
//     "-webkit-animation-name": "flipA",
//     "animation-name": "flipA",
//     "-webkit-animation-duration": flipDuration + "s",
//     "animation-duration": flipDuration + "s",});
//   $(".page-wrapper.back").css({
//     "-webkit-animation-name": "flipB",
//     "animation-name": "flipB",
//     "-webkit-animation-duration": flipDuration + "s",
//     "animation-duration": flipDuration + "s",});
// }

// function turnSignature(turnDuration) {
//   $(".signature-wrapper").css({
//     "-webkit-animation-name": "turn",
//     "animation-name": "turn",
//     "-webkit-animation-duration": turnDuration + "s",
//     "animation-duration": turnDuration + "s",});
// }

// function turnSignatureBack(turnDuration) {
//   $(".signature-wrapper").css({
//     "-webkit-animation-name": "turn-back",
//     "animation-name": "turn-back",
//     "-webkit-animation-duration": turnDuration + "s",
//     "animation-duration": turnDuration + "s",});
// }

// var turnAction = 1;

// function turnTurn(turnDuration) {
//   if ( turnAction == 1 ) {
//     turnSignature(turnDuration);
//     turnAction = 2;
//     $(".signature-wrapper").addClass("turned");
//   } else {
//     turnSignatureBack(1);
//     turnAction = 1;
//     $(".signature-wrapper").removeClass("turned");
//   }
// }

// $("#turn").click(function() {
//   if ( $(".page-wrapper").hasClass("folded") ) {
//     unfoldSignature(1);
//     foldAction = 1;
//     $(".page-wrapper").removeClass("folded");
//     turnTurn(1);
//   } else {
//     turnTurn(1);
//   }
// });

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
  $("#flip").addClass("disabled");
  if ( ($(".page-wrapper").hasClass("front flipped")) || ( $(".signature-wrapper").hasClass("turned")) ) {
    setTimeout(function(){ foldUnfold(); }, 1200);
  } else {
    foldUnfold();
    $("#flip").removeClass("disabled");
  }
  if ( $(".page-wrapper").hasClass("front flipped") ) {
    flipSignatureBack(1);
    $(".page-wrapper.back").addClass("flipped");
    $(".page-wrapper.front").removeClass("flipped");
    flipAction = 1;
  }
  if ( ($(".page-wrapper.back").hasClass("flipped folded")) || ($(".page-wrapper.front").hasClass("folded")) ) {
    $("#flip").addClass("disabled");
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
    // $("#flip").removeClass("disabled");
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

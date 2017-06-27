$('#arrowLeft, #arrowRight').on(
  'click',
  function() 
  {
    $('#lista1, #lista2').toggle()
  }
);

$("h3").each(function () {
    var $numWords = $(this).text().length;
    if (($numWords >= 1) && ($numWords < 3)) {
        $(this).css("font-size", "36px");
    }
    else if (($numWords >= 3) && ($numWords < 4)) {
        $(this).css("font-size", "22px");
        $(this).css("margin-top", "15px");
    }
	else if (($numWords >= 4) && ($numWords < 6)) {
        $(this).css("font-size", "16px");
        $(this).css("margin-top", "20px");
    }
    else {
        $(this).css("color", "#ff0000");
    }
});

$("h4").each(function () {
    var $numWords = $(this).text().length;
    if (($numWords >= 1) && ($numWords < 5)) {
        $(this).css("font-size", "55px");
        $(this).css("margin-top", "-10px");
    }
    else if (($numWords >= 5) && ($numWords < 9)) {
        $(this).css("font-size", "40px");
    }
	else if (($numWords >= 9) && ($numWords < 13)) {
        $(this).css("font-size", "23px");
		$(this).css("margin-top", "10px");
    }
	else if (($numWords >= 13) && ($numWords < 16)) {
        $(this).css("font-size", "14px");
		$(this).css("margin-top", "15px");
    }
    else {
        $(this).css("color", "#ff0000");
    }
});
$( document ).ready(function() {
    $('.s').css('display', "");
    $('.e').css('display', "none");
    $('.print').css('display', "none");
});

function printCV() {
    $('.printn').css('display', "none");
    $('.print').css('display', "");
    window.print()
    $('.printn').css('display', "");
    $('.print').css('display', "none");
}

function ChangeLanguage(language) {
    $('.s').css('display', "none");
    $('.e').css('display', "none");
    if(language == 's'){
        $('.s').css('display', "");
    }
    else if(language == 'e'){
        $('.e').css('display', "");
    }
}
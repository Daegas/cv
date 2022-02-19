$( document ).ready(function() {
    $('.e').css('display', "");
    $('.s').css('display', "none");
});

function printCV() {
    window.print()
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
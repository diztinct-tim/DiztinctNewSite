$(function(){


	    $("header").on("click", ".login-logout > span", function(e){
            $(".login-logout > ul").slideToggle();
            $(this).toggleClass("open");
        })


})
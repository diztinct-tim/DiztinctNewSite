$(document).ready(function(){

    $(".mobile-menu-btn").on("click", function(){
        $(".mobile-menu-drawer").toggleClass("on-screen");
        $("html, body").toggleClass("menu-open");
    });
    $(".close-menu").on("click", function(){
        $(".mobile-menu-drawer").removeClass("on-screen");
        $("html, body").removeClass("menu-open");
    });
    $("div.toggle > h4").on("click", function(){
        var width = $(window).width();
        if( width < 768 ){
            $(".screenshots.mob-active").removeClass("mob-active");
            $(this).next(".screenshots").slideToggle();
        }
    })


    $(".project-type > li").on("click", function(){
    	$(this).addClass('selected').siblings().removeClass('selected');
    	var projectType = $(".project-type > li.selected").text();
    	setProjectType(projectType);
    })
    function setProjectType(projectType){
    	$("#project").val(projectType);
    }

    $(".project-cost > li").on("click", function(){
    	$(this).addClass('selected').siblings().removeClass('selected');
    	var projectCost = $(".project-cost > li.selected").text();
    	setProjectCost(projectCost);
    })
    function setProjectCost(projectCost){
    	$("#cost").val(projectCost);
    }

    $(".project-timeline > li").on("click", function(){
    	$(this).addClass('selected').siblings().removeClass('selected');
    	var projectTimeline = $(".project-timeline > li.selected").text();
    	setProjectTimeline(projectTimeline);
    })
    function setProjectTimeline(projectTimeline){
    	$("#time").val(projectTimeline);
    }

    $("#contactForm").submit(function(event){
    	event.preventDefault();
    	submitForm();
	});

	function submitForm(){    
    
        var name = $("#name").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var project = $("#project").val();
        var message = $("#message").val();
        var cost = $("#cost").val();
        var time = $("#time").val();

	    $.ajax({
	        type: "POST",
	        url: "../php/form-process.php",
	        data: "name=" + name + "&email=" + email + "&number=" + number + "&project=" + project + "&message=" + message + "&cost=" + cost + "&time=" + time,
	        success : function(text){
	            if (text == "success"){
	                formSuccess();
	            }
	        }
	    });
	}
	function formSuccess(){
	    $("#msgSubmit").removeClass("hidden");
        $(".quote-form-div").addClass("hidden");
        $("#form-submit").addClass("hidden");
	}





    function get_browser_info(){
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            $(".mb-pro").addClass("ie");
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            return {name:'IE',version:(tem[1]||'')};
            }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }   
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
          name: M[0],
          version: M[1]
        };
     }







});

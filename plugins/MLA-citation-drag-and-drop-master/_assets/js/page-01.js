 
// Code here covers the initial light box with activity directions that opens on page load. 
 
 $(document).ready(function() {	

		var id = '#dialog';
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(2000); 	
	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});		
	
}); 




// Controls the draggable functionality of the citation pieces. 


$("#draggable_author").draggable({
    
});


$("#draggable_article_title").draggable({
    
});


$("#draggable_year").draggable({
    
});


$("#draggable_volume").draggable({
    
});

$("#draggable_publication_title").draggable({
    
});


$("#draggable_pages").draggable({
    
});


$("#draggable_database").draggable({
    
});





 

// Controls the droppable functionality of the citation pieces, i.e. the citation pieces final resting place.

  
$("#droppable_author").droppable({
});

$("#droppable_article_title").droppable({
});


$("#droppable_year").droppable({
});

$("#droppable_volume").droppable({
});


$("#droppable_publication_title").droppable({
});


$("#droppable_pages").droppable({
});


$("#droppable_database").droppable({
});


// The code below moves the citation pieces to the appropriate place. The value you put in delayVariable (default is 5000) sets the speed at which the pieces move. #citation controls the display of the citation and the quiz.

delayVariable = 5000;

$("#btnReset").click(function() {
   
        
        $("#draggable_author").animate({ "top": -100 , "left": 810 }, delayVariable); 
        
        $("#draggable_article_title").animate({ "top": -20 , "left": 810 }, delayVariable);
        
        $("#draggable_year").animate({ "top": -10 , "left": 445 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 35 , "left": 530 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 75 , "left": 680 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 115 , "left": 395 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 255 , "left": 810 }, delayVariable);
        
        $('#citation').delay(delayVariable).show("slow");
        

        
        
   

});


 

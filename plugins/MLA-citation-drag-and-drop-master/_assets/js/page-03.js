

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

delayVariable = 2000;


$("#btnReset").click(function() {
   
        
        $("#draggable_author").animate({ "top": -90 , "left": 810 }, delayVariable);
        
        $("#draggable_article_title").animate({ "top": -10 , "left": 810 }, delayVariable);
        
        $("#draggable_year").animate({ "top": -30 , "left": 600 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 15 , "left": 750 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 55 , "left": 815 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 100 , "left": 550 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 255 , "left": 810 }, delayVariable);
        
        $('#citation').delay(delayVariable).show("slow");
   

});
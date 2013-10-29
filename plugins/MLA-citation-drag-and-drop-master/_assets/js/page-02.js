


// Controls the draggable functionality of the citation pieces.



$("#draggable_book_editors").draggable({
    
});


$("#draggable_book_title").draggable({
    
});


$("#draggable_chapter_title").draggable({
    
});


$("#draggable_chapter_author").draggable({
    
});

$("#draggable_publisher").draggable({
   
});


$("#draggable_pages").draggable({
    
});


$("#draggable_year").draggable({
    
});

$("#draggable_database").draggable({
    
});





 

// Controls the droppable functionality of the citation pieces, i.e. the citation pieces final resting place.

  
$("#droppable_book_editors").droppable({
});

$("#droppable_book_title").droppable({
});


$("#droppable_chapter_title").droppable({
});

$("#droppable_chapter_author").droppable({
});


$("#droppable_publisher").droppable({
});


$("#droppable_pages").droppable({
});

$("#droppable_year").droppable({
});


$("#droppable_database").droppable({
});







// The code below moves the citation pieces to the appropriate place. The value you put in delayVariable (default is 5000) sets the speed at which the pieces move. #citation controls the display of the citation and the quiz.

delayVariable = 5000;

$("#btnReset").click(function() {
   
        
        $("#draggable_chapter_title").animate({ "top": -120 , "left": 660 }, delayVariable);
        
        
        
        $("#draggable_chapter_author").animate({ "top": -125 , "left": 660 }, delayVariable);



        $("#draggable_book_editors").animate({ "top": -165 , "left": 405 }, delayVariable); 
        
        
        
        $("#draggable_book_title").animate({ "top": -87 , "left": 405 }, delayVariable);
        
        
        $("#draggable_publisher").animate({ "top": -115 , "left": 405 }, delayVariable);
        
        
        
        $("#draggable_pages").animate({ "top": 205 , "left": 460 }, delayVariable);
        
        
        
        $("#draggable_year").animate({ "top": -55 , "left": 405 }, delayVariable);
        
             
        $("#draggable_database").animate({ "top": 285 , "left": 800 }, delayVariable);
        
        $('#citation').delay(delayVariable).show("slow");
   

});
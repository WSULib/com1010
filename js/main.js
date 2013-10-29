var timer;

$(document).ready(function() {
  blinking($(".path01"));
});

$(".path01").click(function() {
    clearInterval(timer);
});

function blinking(elm) {
    timer = setInterval(blink, 10);
    function blink() {
        elm.fadeOut(700, function() {
           elm.fadeIn(700);
        });
    }
}

$('[data-toggle=popover]').popover({
  trigger:"click"
});

$('[data-toggle=popover]').on('click', function (e) {
   $('[data-toggle=popover]').not(this).popover('hide');
});

$( "#markers img" ).click(function() {
      $( this ).attr("src", "img/pin8_grey.png");
      });

    $( "#markers .entrance" ).click(function() {
      $( "#progressbar .entrance" ).addClass( "active" );
    });

    $( "#markers .circulation" ).click(function() {
      $( "#progressbar .circulation" ).addClass( "active" );
    });

    $( "#markers .hallway" ).click(function() {
      $( "#progressbar .hallway" ).addClass( "active" );
    });

    $( "#markers .study" ).click(function() {
      $( "#progressbar .study" ).addClass( "active" );
    });

    $( "#markers .lab" ).click(function() {
      $( "#progressbar .lab" ).addClass( "active" );
    });

    $( "#markers .general" ).click(function() {
      $( "#progressbar .general" ).addClass( "active" );
    });

    $( "#markers .auditorium" ).click(function() {
      $( "#progressbar .auditorium" ).addClass( "active" );
    });

$(function() {
 $('.tab-rw').click(function(){
   $("#homepage").attr('src',"img/research-warrior.jpg");
   return false;
 });

 $('.tab-catalog').click(function(){
   $("#homepage").attr('src',"img/catalog.jpg");
   return false;
 });

 $('.tab-database').click(function(){
   $("#homepage").attr('src',"img/databases.jpg");
   return false;
 });
});

$( "#message-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".message" ).text( value );
  })
  .keyup();

$( "#attention-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".attention" ).text( value );
  })
  .keyup();

$( "#guidelines-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".guidelines" ).text( value );
  })
  .keyup();

$( "#citation-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".citation" ).text( value );
  })
  .keyup();

$( "#organization-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".organization" ).text( value );
  })
  .keyup();

$( "#topic-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".topic" ).text( value );
  })
  .keyup();

$( "#information-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".information" ).text( value );
  })
  .keyup();

$( "#source-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".source" ).text( value );
  })
  .keyup();

$( "#points-answer" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".points" ).text( value );
  })
  .keyup();

function printElement(elem) {
   var domClone = elem.cloneNode(true);
    
    var $printSection = document.getElementById("printSection");
    
    if (!$printSection) {
        $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = "";
    $printSection.appendChild(domClone);
    window.print();
}

document.getElementById("btnPrint3").onclick = function () {
    printElement(document.getElementById("test"));
};

document.getElementById("btnPrint2").onclick = function () {
    printElement(document.getElementById("hallway"));
};

document.getElementById("btnPrint").onclick = function () {
    printElement(document.getElementById("printThis"));
};

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });

    $('.carousel').carousel('cycle');
});

// Controls the draggable functionality of the citation pieces.



$("#draggable_author").draggable({
});

$("#draggable_article_title").draggable({
});


$("#draggable_year").draggable({
});


$("#draggable_source").draggable({
});

$("#draggable_publication_title").draggable({
});


$("#draggable_pages").draggable({
});

$("#draggable_retrieved").draggable({
});

$("#draggable_database").draggable({
});

$("#draggable_author_apa").draggable({
});

$("#draggable_article_title_apa").draggable({
});


$("#draggable_year_apa").draggable({
});


$("#draggable_source_apa").draggable({
});

$("#draggable_publication_title_apa").draggable({
});


$("#draggable_pages_apa").draggable({
});

$("#draggable_retrieved_apa").draggable({
});

$("#draggable_database_apa").draggable({
});


// Controls the droppable functionality of the citation pieces, i.e. the citation pieces final resting place.

  
$("#droppable_author").droppable({
});

$("#droppable_article_title").droppable({
});

$("#droppable_year").droppable({
});

$("#droppable_source").droppable({
});


$("#droppable_publication_title").droppable({
});


$("#droppable_pages").droppable({
});

$("#droppable_retrieved").droppable({
});

$("#droppable_database").droppable({
});

$("#show-answer-mla").click(function() {
  $("#answer-mla").show();
});

$("#droppable_author_apa").droppable({
});

$("#droppable_article_title_apa").droppable({
});

$("#droppable_year_apa").droppable({
});

$("#droppable_source_apa").droppable({
});


$("#droppable_publication_title_apa").droppable({
});


$("#droppable_pages_apa").droppable({
});

$("#droppable_retrieved_apa").droppable({
});

$("#droppable_database_apa").droppable({
});

$("#show-answer-apa").click(function() {
  $("#answer-apa").show();
});

// The code below moves the citation pieces to the appropriate place. The value you put in delayVariable (default is 5000) sets the speed at which the pieces move. #citation controls the display of the citation and the quiz.

delayVariable = 2000;

$(document).ready(function() {
    function doneResizing() {
        if(Modernizr.mq('(min-width:1600px)')) {
            // action for screen widths including and above 768 pixels 

            $("#show-answer-mla").click(function() {
        $("button#show-answer-mla").hide();

        $("#mla").css("height", "190px");
   
        
        $("#draggable_author").animate({ "top": 350 , "left": -175 }, delayVariable);
        
        $("#draggable_article_title").animate({ "top": 314 , "left": -60 }, delayVariable);
        
        $("#draggable_year").animate({ "top": 310 , "left": -175 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 170 , "left": 122 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 166 , "left": -105 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 130 , "left": -75 }, delayVariable);

        $("#draggable_source").animate({ "top": 238 , "left": -2 }, delayVariable);

        $("#draggable_retrieved").animate({ "top": 274 , "left": 40 }, delayVariable);
});

$("#show-answer-apa").click(function() {
        $("button#show-answer-apa").hide();

        $("#apa").css("height", "190px");
   
        
        $("#draggable_author_apa").animate({ "top": 275 , "left": -180 }, delayVariable);
        
        $("#draggable_article_title_apa").animate({ "top": 238 , "left": 12 }, delayVariable);
        
        $("#draggable_year_apa").animate({ "top": 203 , "left": -90 }, delayVariable);
        
        $("#draggable_volume_apa").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title_apa").animate({ "top": 165 , "left": -180 }, delayVariable);
        
        $("#draggable_pages_apa").animate({ "top": 129 , "left": -83 }, delayVariable);
        
        $("#draggable_database_apa").animate({ "top": 130 , "left": -75 }, delayVariable);

        $("#draggable_source_apa").animate({ "top": 201 , "left": -17 }, delayVariable);

});
        }
        else if(Modernizr.mq('(min-width: 1200px) and (max-width: 1599px)')) {
            // action for screen widths below 768 pixels 

            $("#show-answer-mla").click(function() {
        $("button#show-answer-mla").hide();

        $("#mla").css("height", "190px");
   
        
        $("#draggable_author").animate({ "top": 350 , "left": -175 }, delayVariable);
        
        $("#draggable_article_title").animate({ "top": 314 , "left": -60 }, delayVariable);
        
        $("#draggable_year").animate({ "top": 310 , "left": -175 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 170 , "left": 122 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 166 , "left": -105 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 130 , "left": -75 }, delayVariable);

        $("#draggable_source").animate({ "top": 238 , "left": -2 }, delayVariable);

        $("#draggable_retrieved").animate({ "top": 274 , "left": 40 }, delayVariable);
});

$("#show-answer-apa").click(function() {
        $("button#show-answer-apa").hide();

        $("#apa").css("height", "190px");
   
        
        $("#draggable_author_apa").animate({ "top": 275 , "left": -180 }, delayVariable);
        
        $("#draggable_article_title_apa").animate({ "top": 238 , "left": 12 }, delayVariable);
        
        $("#draggable_year_apa").animate({ "top": 203 , "left": -90 }, delayVariable);
        
        $("#draggable_volume_apa").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title_apa").animate({ "top": 165 , "left": -180 }, delayVariable);
        
        $("#draggable_pages_apa").animate({ "top": 129 , "left": -83 }, delayVariable);
        
        $("#draggable_database_apa").animate({ "top": 130 , "left": -75 }, delayVariable);

        $("#draggable_source_apa").animate({ "top": 201 , "left": -17 }, delayVariable);

});
        }
        else if(Modernizr.mq('(min-width: 992px) and (max-width: 1199px)')) {
            // action for screen widths below 768 pixels 

            $("#show-answer-mla").click(function() {
        $("button#show-answer-mla").hide();

        $("#mla").css("height", "230px");
   
        
        $("#draggable_author").animate({ "top": 345 , "left": -130 }, delayVariable);
        
        $("#draggable_article_title").animate({ "top": 312 , "left": -30 }, delayVariable);
        
        $("#draggable_year").animate({ "top": 309 , "left": -12 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 210 , "left": -130 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 177 , "left": 52 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 173 , "left": -130 }, delayVariable);

        $("#draggable_source").animate({ "top": 272 , "left": -65 }, delayVariable);

        $("#draggable_retrieved").animate({ "top": 304 , "left": -25 }, delayVariable);
});

$("#show-answer-apa").click(function() {
        $("button#show-answer-apa").hide();

        $("#apa").css("height", "190px");
   
        
        $("#draggable_author_apa").animate({ "top": 279 , "left": -130 }, delayVariable);
        
        $("#draggable_article_title_apa").animate({ "top": 246 , "left": 42 }, delayVariable);
        
        $("#draggable_year_apa").animate({ "top": 213 , "left": -50 }, delayVariable);
        
        $("#draggable_volume_apa").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title_apa").animate({ "top": 180 , "left": -130 }, delayVariable);
        
        $("#draggable_pages_apa").animate({ "top": 147 , "left": -43 }, delayVariable);
        
        $("#draggable_source_apa").animate({ "top": 213 , "left": 17 }, delayVariable);

});
        }
        else if(Modernizr.mq('(min-width: 768px) and (max-width: 991px)')) {
            // action for screen widths below 768 pixels 

            $("#show-answer-mla").click(function() {
        $("button#show-answer-mla").hide();

        $("#mla").css("height", "240px");
   
        
        $("#draggable_author").animate({ "top": 395 , "left": -98 }, delayVariable);
        
        $("#draggable_article_title").animate({ "top": 361 , "left": 5 }, delayVariable);
        
        $("#draggable_year").animate({ "top": 352 , "left": 20 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 360 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 235 , "left": -98 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 186 , "left": 85 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 180 , "left": -98 }, delayVariable);

        $("#draggable_source").animate({ "top": 295 , "left": -32 }, delayVariable);

        $("#draggable_retrieved").animate({ "top": 328 , "left": 7 }, delayVariable);
});

$("#show-answer-apa").click(function() {
        $("button#show-answer-apa").hide();

        $("#apa").css("height", "240px");
   
        
        $("#draggable_author_apa").animate({ "top": 325 , "left": -98 }, delayVariable);
        
        $("#draggable_article_title_apa").animate({ "top": 320 , "left": -98 }, delayVariable);
        
        $("#draggable_year_apa").animate({ "top": 241 , "left": -20 }, delayVariable);
        
        $("#draggable_volume_apa").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title_apa").animate({ "top": 187 , "left": 28 }, delayVariable);
        
        $("#draggable_pages_apa").animate({ "top": 182 , "left": -98 }, delayVariable);
        
        $("#draggable_source_apa").animate({ "top": 265 , "left": -38 }, delayVariable);

});
        }
        else if(Modernizr.mq('(min-width: 600px) and (max-width:767px)')) {
            // action for screen widths below 768 pixels 

            $("#show-answer-mla").click(function() {
        $("button#show-answer-mla").hide();

        $("#mla").css("height", "190px");
   
        
        $("#draggable_author").animate({ "top": 365 , "left": -173 }, delayVariable);
        
        $("#draggable_article_title").animate({ "top": 329 , "left": -72 }, delayVariable);
        
        $("#draggable_year").animate({ "top": 323 , "left": -173 }, delayVariable);
        
        $("#draggable_volume").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title").animate({ "top": 185 , "left": 86 }, delayVariable);
        
        $("#draggable_pages").animate({ "top": 179 , "left": -109 }, delayVariable);
        
        $("#draggable_database").animate({ "top": 142 , "left": -81 }, delayVariable);

        $("#draggable_source").animate({ "top": 250 , "left": -17 }, delayVariable);

        $("#draggable_retrieved").animate({ "top": 286 , "left": 22 }, delayVariable);
});

$("#show-answer-apa").click(function() {
        $("button#show-answer-apa").hide();

        $("#apa").css("height", "190px");
   
        
        $("#draggable_author_apa").animate({ "top": 295 , "left": -173 }, delayVariable);
        
        $("#draggable_article_title_apa").animate({ "top": 258 , "left": -4 }, delayVariable);
        
        $("#draggable_year_apa").animate({ "top": 223 , "left": -94 }, delayVariable);
        
        $("#draggable_volume_apa").animate({ "top": 350 , "left": 50 }, delayVariable);
        
        $("#draggable_publication_title_apa").animate({ "top": 185 , "left": -173 }, delayVariable);
        
        $("#draggable_pages_apa").animate({ "top": 149 , "left": -87 }, delayVariable);
        
        $("#draggable_source_apa").animate({ "top": 220 , "left": -27 }, delayVariable);

});
        }
    }

    var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 0);
    });

    doneResizing();
});



var counter = 0;

function toggle(theElement){
    var theElement = document.getElementById(theElement);
    
    //Show the element or hide it
    // if ( theElement.style.display != 'block' ) {
    //     theElement.style.display = 'block';
    // }else{
    //     theElement.style.display = 'none';
    // }

    //Hide all elements, then show the one we clicked on
    var elementsToHide = document.getElementsByClassName('mg_tile-inside');
    for(i=0; i<elementsToHide.length; i++){
        elementsToHide[i].style.display = 'none';
    }

    //Show the element or hide it
        theElement.style.display = 'block';


}

$(document).ready(function(){
    var cardArray = [];
    $('.mg_tile').click(function(){
        if($('.mg_tile-inside:visible').length == 2){
            $('.mg_tile-inside').hide();
        }
        $(this).find('.mg_tile-inside').show();
        // $('.mg_tile-inside:visible').each(function(){
        //     card1 = $(this).attr('card');
        // });

      

        //Check again
        if($('.mg_tile-inside:visible').length == 2){
            cardArray = [];
            $('.mg_tile-inside:visible').each(function(){
                card2 = $(this).html();
                cardArray.push(card2);
                if(cardArray[0]===cardArray[1]){
                    alert("you got a match!");
                    counter++;
                    $('.mg_tile-inside:visible').addClass('mg_tile-inside-matched');
                    $('.mg_tile-inside:visible').removeClass('mg_tile-inside');
                    if(counter==4){
                      youWin();
                    }
                }
                
            });
         }

      function youWin(){
        alert("You win!");
        counter = 0;
        $('.mg_tile-inside-matched').hide();
        $('.mg_tile-inside-matched').addClass('mg_tile-inside');
        $('.mg_tile-inside').removeClass('mg_tile-inside-matched');

      }   
    });




    //!!!!!!!!!!!!!!!!!!!!for this to work the css needed to be changed!!!!!!!!!!!!!!
    // $(function shuffleBoard(){
    //     var parent = $("#mg_contents");
    //     var divs = parent.children();
    //     var tempArray = [];



    //     for(i=1; i<500; i++){
    //         var randomNumber1 = (Math.floor(Math.random() * divs.length));
    //         var randomNumber2 = (Math.floor(Math.random() * divs.length));
    //         while(randomNumber2 == randomNumber1){
    //             randomNumber2 = (Math.floor(Math.random() * divs.length));
    //         }
    //         var tempArray = divs[randomNumber2];
    //         divs[randomNumber2] = divs[randomNumber1];
    //         divs[randomNumber1] = tempArray;

    //     }

    //     for(i=0; i<divs.length; i++){
    //         console.log(divs[i]);
    //     }

    //     $("#mg_contents").append(divs);

    //     var temp = $(divs).find('img').attr('src');
    //     console.log("temp is " + temp);
    // });


// $(document).ready(function(){
   var board=[];
       for(i=1; i<9;i++){
           image= $('.mg_tile-'+i).find('.mg_tile-inside').html();
           board.push(image);
       }    
       var newArray = shuffleTiles(board);
       for(i=0;i<8;i++){
           $('#mg-tile-'+(i+1)).html(newArray[i]);
       };  

   
   function shuffleTiles(someArray){
   // var numberOfTimesToShuffle = Math.floor(Math.random() * 500 + 500);
   for(i=0; i<500; i++){
       //pick 2 random cards from the deck and switch them.
       var card1 = Math.floor(Math.random()*8);
       var card2 = Math.floor(Math.random()*8);
       
       var temp = someArray[card2];
       someArray[card2] = someArray[card1];
       someArray[card1] = temp;
   } 

   return(someArray);
    }

//dyanmic grid size
// var gridSize = 16;
// var gridArray = [];
// for (i = 1; i<gridSize; i ++){
//   gridArray.push(i);
// }

// random number funciton to swap values
// then append the html to ('.mg_contents');



});

//Create 10 questions the user can answer in 60 seconds.
//4 answers per question, multiple choice.
//Timer counts down when game starts (not on page load) Game start button = timer begins and game loads
//At the end of the game right and wrong answers are added up. Player can see how well they did.

$(document).ready(function () {
  
$('h1').css('background', 'red');
$('p').css('background', 'red');    
$('#countdown').append('<button id=startGame>Start Game</button>').css('text-align', 'center')
$('#showresult').hide()


 

$('#startGame').on('click', function(){ 
    var count = 60
    
    getQuest()
   
    var interVal = setInterval (function() {
         $('#countdown').text('00:' + --count)
            
        console.log('countdown works')
        if(count === 0) {
            $('#mainquestions').hide()
            $('#showresult').text(checkAnswer()).show().css('border', '1px solid black')
            clearInterval(interVal);
            console.log("if statement works")
        }   
    }, 1000)
        
    
})

    
//Storing each question and answer object inside of an array for easier access later on.
    
    var qA = [ 
        
    
    { 
        q: 'Who directed Mandy?',
        opt: ['Panos Cosmatos', 'Wes Anderson','Martin Scorsese','Tod Solonze'],
        
    },
       
    {

        q:'What is the name of Nicholas Cage\'s Character?',
        opt: ['Arnold Miller', 'Red Miller','John Miller','Fred Miller'],
        
    },  
       
         
        
    {
     
        q:'What is the name of the horn the cultists use to summon the bikers?',
        opt: ['Horn of the Dawn','Horn of the Abyss','Horn of Abraxas','Horn of Darkness'],
        
        
    },
    
        
    {
        q: 'What is the name of the cult?',
        opt: ['Children of the Night','Children of the New Dawn','Children of the Sun','Children of the Corn'],
        
    },   
       
      {      
        
        q:'What is used to restrain the main character when he is taken by the bikers?',
        opt: ['Rope', 'Duct Tape','Barbed Wire','Extension Cord'],
        
      }, 
        
     {
        q: 'What planet does Mandy mention is her favorite?',
        opt: ['Saturn', 'Uranus','Pluto','Jupiter'],
        
     } 
    ]    
           
        
    


console.log(qA[0].opt)
console.log(qA[0].answer)


console.log(qA[0].opt0)


//Displaying questions and answer options onto the page

function getQuest() {
       
        for(var i  = 0; i < qA.length; i++) {
            var question = qA[i].q
            $('#mainquestions').append('<div id=question' + i + '>' + question + '</div>');
            console.log('loop is working');
        }
        for(var a = 0; a < qA[0].opt.length; a++) {
            var answer = qA[0].opt[a];
            $('#question0').append('<input class=style type=radio name=answer0 value =' + a +'>' + answer);
           
        }
        for(var b = 0; b < qA[1].opt.length; b++) {
            var answer1 = qA[1].opt[b];
            $('#question1').append('<input class=style type=radio name=answer1 value =' + b +'>' + answer1);
        }
        for(var c = 0; c < qA[2].opt.length; c++) {
            var answer2 = qA[2].opt[c];
            $('#question2').append('<input class=style type=radio name=answer2 value =' + c +'>' + answer2);
        }
        for(var d = 0; d < qA[3].opt.length; d++) {
            var answer3 = qA[3].opt[d];
            $('#question3').append('<input class=style type=radio name=answer3 value ='+ d +'>' + answer3);
        }
        for(var e = 0; e < qA[4].opt.length;e++) {
            var answer4 = qA[4].opt[e];
            $('#question4').append('<input class=style type=radio name=answer4 value =' + e + '>' + answer4);
        }
        for(var f = 0; f < qA[5].opt.length; f++) {    
            var answer5 = qA[5].opt[f];
            $('#question5').append('<input class=style type=radio name=answer5 value =' + f +'>' + answer5);
        } 
       showRes()
      
}
        
//Checking if user selected the right answer/no answer at all/ or the wrong answer  

function checkAnswer() {
 // grab the input elements in each question console.log($(#question0 input)); 


    correct = 0
  // console.log($('#question0 input'));
    let grabbedAnswers = [...$('#question0 input')];
// loop thru the grabbed inputs and see which one is checked
    console.log(grabbedAnswers)
    const correctAnswers = [0,1,2,3]
// if the the chosenAnswer  is the same as the right answer 
       
    let chosenAnswer = grabbedAnswers.find(function(x) {
        return x.checked === true;
    })

    let chosenValue = $(chosenAnswer).val()

    if (chosenValue === correctAnswers[0]) {
        correct++;
    }
    

     // increment right answers

    
   
   // debugger;
    
  

    
       

    
    
    
    
}

function showRes() {
    $('#mainquestions').append('<button id=showbutton>Submit</button>')
    $('#showbutton').on('click', function() {
         $('#mainquestions').hide()
         $('#showresult').text(checkAnswer()).css('border', '1px solid black')
    })
}












})
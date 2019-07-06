//Create 8 questions the user can answer in a given amount of seconds.
//4 answers per question, multiple choice.
//Timer counts down when game starts (not on page load) Game start button = timer begins and game loads
//At the end of the game right and wrong answers are added up. Player can see how well they did.

$(document).ready(function () {
  
$('h1').css('background', 'red');
$('p').css('background', 'red');    
$('#countdown').append('<button id=startGame>Start Quiz</button>').css('text-align', 'center')




$('#startGame').on('click', function(){ 
    var count = 45;
   
    getQuest();
    $('#showresult').hide();
    

    var interVal = setInterval (function() {
         $('#countdown').text('00:' + --count)
         
        console.log('countdown works')
        if(count === 0) {
        $('#mainquestions').hide()
        
        showRes();
        
          
           
            clearInterval(interVal);
            console.log("if statement works")
        }   
    }, 1000)
        
    $('#mainquestions').append('<br><input id=showresultsnow type=submit>')
         $('#showresultsnow').on('click', function() {
             $('#mainquestions').hide()
             showRes()
             interVal;
             clearInterval(interVal);
            
         })
            
});

    
//Storing each question and answer object inside of an array for easier access later on.
    
    var qA = [ 
        
    
    { 
        q: 'Who directed Mandy?',
        opt: ['Panos Cosmatos', 'Wes Anderson','Martin Scorsese','Tod Solonze'],
        //Correct 0
    },
       
    {

        q:'What is the name of Nicholas Cage\'s Character?',
        opt: ['Arnold Miller', 'Red Miller','John Miller','Fred Miller'],
        //Correct 1
    },  
       
         
        
    {
     
        q:'What is the name of the horn the cultists use to summon the bikers?',
        opt: ['Horn of the Dawn','Horn of the Abyss','Horn of Abraxas','Horn of Darkness'],
        //Correct 2
        
    },
    
        
    {
        q: 'What is the name of the cult?',
        opt: ['Children of the Night','Children of the New Dawn','Children of the Sun','Children of the Corn'],
        //Correct 1
    },   
       
      {      
        
        q:'What is used to restrain the main character when he is taken by the bikers?',
        opt: ['Rope', 'Duct Tape','Barbed Wire','Extension Cord'],
        //Correct 2
      }, 
        
     {
        q: 'What planet does Mandy mention is her favorite?',
        opt: ['Saturn', 'Uranus','Pluto','Jupiter'],
        //Correct 3
     },
     {
         q:'What is the name of the leader of the cult?',
         opt: ['Jeremiah', 'Benjamin','Ezekiel','Malachai']
         //Correct 0
     },
    {
        q: 'What commercial does the main character see after he escapes his restraints?',
        opt: ['Coca-cola','Emergency Broadcast','Cheddar Goblin','Kraft Mac & Cheese']
        //Correct 2
    }

    ]    
           
        
    


console.log(qA[0].opt)






//Displaying questions and answer options onto the page

function getQuest() {
      
        for(var i  = 0; i < qA.length; i++) {
            var question = qA[i].q
            $('#mainquestions').append('<div id=question' + i + '>' + question + '</div><br>');
            console.log('loop is working');
        }
        for(var a = 0; a < qA[0].opt.length; a++) {
            var answer = qA[0].opt[a];
            $('#question0').append('<br><input class=style type=radio name=answer0 value =' + a +'>' + answer)
           
        }
        for(var b = 0; b < qA[1].opt.length; b++) {
            var answer1 = qA[1].opt[b];
            $('#question1').append('<br><input class=style type=radio name=answer1 value =' + b +'>' + answer1);
        }
        for(var c = 0; c < qA[2].opt.length; c++) {
            var answer2 = qA[2].opt[c];
            $('#question2').append('<br><input class=style type=radio name=answer2 value =' + c +'>' + answer2);
        }
        for(var d = 0; d < qA[3].opt.length; d++) {
            var answer3 = qA[3].opt[d];
            $('#question3').append('<br><input class=style type=radio name=answer3 value ='+ d +'>' + answer3);
        }
        for(var e = 0; e < qA[4].opt.length;e++) {
            var answer4 = qA[4].opt[e];
            $('#question4').append('<br><input class=style type=radio name=answer4 value =' + e + '>' + answer4);
        }
        for(var f = 0; f < qA[5].opt.length; f++) {    
            var answer5 = qA[5].opt[f];
            $('#question5').append('<br><input class=style type=radio name=answer5 value =' + f +'>' + answer5);
        } 
        for(var g = 0; g < qA[6].opt.length; g++) {
            var answer6 = qA[6].opt[g];
            $('#question6').append('<br><input class=style type=radio name answer6 value=' + g + '>' + answer6)
        }
        for(var h = 0; h < qA[7].opt.length; h++) {
            var answer7 = qA[7].opt[h];
            $('#question7').append('<br><input class=style type=radio name answer7 value=' + h + '>' + answer7)
        }
       
      
}
        
//Checking if user selected the right answer/no answer at all/ or the wrong answer  

function showRes() {
 // grab the input elements in each question console.log($(#question0 input)); 
    unanswered = 0;
    incorrect = 0;
    correct = 0;
    
    
    const answers = [0,1,2,3];
  // Spread operator to convert input values into an array
    let getAnswer = [...$('#question0 input')];
    let getAnswer1 = [...$('#question1 input')];
    let getAnswer2 = [...$('#question2 input')];
    let getAnswer3 = [...$('#question3 input')];
    let getAnswer4 = [...$('#question4 input')];
    let getAnswer5 = [...$('#question5 input')];
    let getAnswer6 = [...$('#question6 input')];
    let getAnswer7 = [...$('#question7 input')];

   
    
        
    let userAnswer = getAnswer.find(function(x) {
        return x.checked === true;
    })
    
    let userAnswer1 = getAnswer1.find(function(x) {
        return x.checked === true;
    })
    let userAnswer2 = getAnswer2.find(function(x) {
        return x.checked === true;
    })  
    let userAnswer3 = getAnswer3.find(function(x) {
        return x.checked === true;
    })
    let userAnswer4 = getAnswer4.find(function(x) {
        return x.checked === true;
    })
    let userAnswer5 = getAnswer5.find(function(x) {
        return x.checked === true;
    })

    let userAnswer6 = getAnswer6.find(function(x){
        return x.checked === true;
    })
    let userAnswer7 = getAnswer7.find(function(x) {
        return x.checked === true;
    })

    let chosenValue = $(userAnswer).val()
    let chosenValue1 = $(userAnswer1).val()
    let chosenValue2 = $(userAnswer2).val()
    let chosenValue3 = $(userAnswer3).val()
    let chosenValue4 = $(userAnswer4).val()
    let chosenValue5 = $(userAnswer5).val()
    let chosenValue6 = $(userAnswer6).val()
    let chosenValue7 = $(userAnswer7).val()
    //------q1
    if (chosenValue == answers[0] || userAnswer === true) {
        correct++;
        $('#showresult').text('You got: ' + correct + ' right').show()
        
        console.log('check answer if statement works')
    } else {
            incorrect++
            $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    
        console.log(chosenValue)
    //-------q2
    if(chosenValue1 == answers[1]) {
        correct++
        
        $('#showresult').text('You got ' + correct + incorrect + unanswered + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    //-------q3
    if(chosenValue2 == answers[2]) {
        correct++
        $('#showresult').text('You got ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    //--------q4
    if(chosenValue3 == answers[1]) {
        correct++
        $('#showresult').text('You got ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    //--------q5
    if(chosenValue4 == answers[2]) {
        correct++
        $('#showresult').text('You got ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    //----------q6
    if(chosenValue5 == answers[3]) {
        correct++
        $('#showresult').text('You got ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    //----------q7
    if(chosenValue6 == answers[0]){
        correct++
        $('#showresult').text('You got ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    //-----------q8
    if(chosenValue7 == answers[2]) {
        correct++
        $('#showresult').text('You got ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
    
}       



    
       

    
    
    
    













})
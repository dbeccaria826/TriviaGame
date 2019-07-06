//Create 8 questions the user can answer in a given amount of seconds.
//4 answers per question, multiple choice.
//Timer counts down when game starts (not on page load) Game start button = timer begins and game loads
//At the end of the game right and wrong answers are added up. Player can see how well they did.

$(document).ready(function () {
  
$('h1').css('background', 'red');
$('p').css('background', 'red');    
$('#countdown').append('<button id=startGame>Start Quiz</button>').css('text-align', 'center')




$('#startGame').on('click', function(){ 
    let count = 45;
   
    getQuest();
    $('#showresult').hide();
    

    let interVal = setInterval (function() {
         $('#countdown').text('00:' + --count)
         
      
        if(count === 0) {
        $('#mainquestions').hide()
        
        showRes();
        
          
           
            clearInterval(interVal);
            
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
    
    const qA = [ 
        
    
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
           
        
    









//Displaying questions and answer options onto the page
//Need to add separate names for input tags so user can only pick one answer for each question **** resolved.
function getQuest() {
      
    for(let i  = 0; i < qA.length; i++) {
            let question = qA[i].q
            $('#mainquestions').append('<div id=question' + i + '>' + question + '</div><br>');
            
        for(let a = 0; a < qA[i].opt.length; a++) {
                getAnswer = qA[i].opt[a];
                
                $('#question' + i).append('<br> <input class=user type=radio name=answer' + i + ' value=' + a +'>' + getAnswer)
        }
    }
    
}
        
//Checking if user selected the right answer/no answer at all/ or the wrong answer  
//Currently only displays number correct if user chose right answer and number of inncorrect if user didn't choose at all or 
//chose wrong respectively
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

   console.log(getAnswer)
    
        
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
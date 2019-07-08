//Create 8 questions the user can answer in a given amount of seconds.
//4 answers per question, multiple choice.
//Timer counts down when game starts (not on page load) Game start button = timer begins and game loads
//At the end of the game right and wrong answers are added up. Player can see how well they did.

$(document).ready(function () {
  
$('h1').css('background', 'red');
$('p').css('background', 'red');    
$('#countdown').append('<button id=startGame>Start Quiz</button>').css('text-align', 'center')
$('#showresult').append('<button id=restart>Restart</button>')
$('#restart').hide()
$('#restart').on('click', function() {
    location.reload();
})



$('#startGame').on('click', function(){ 
    let count = 45;
    getQuest();
    $('#showresult').hide();
    let countDown = setInterval (function() {
         $('#countdown').text('00:' + --count)
        if(count === 0) {
        $('#mainquestions').hide()
        $('#restart').show()
        $('#showresult').show()
        showRes();
        clearInterval(countDown);
        }   
    }, 1000)
    $('#mainquestions').append('<br><input id=showresultsnow type=submit>')
         $('#showresultsnow').on('click', function() {
             $('#mainquestions').hide()
             showRes()
            $('#restart').show()
            $('#showresult').show()
             countDown;
             clearInterval(countDown);
            
         })
});
//Storing each question and answer object inside of an array for easier access later on.
    const qA = [ 
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
        
     },
     {
         q:'What is the name of the leader of the cult?',
         opt: ['Jeremiah', 'Benjamin','Ezekiel','Malachai'],
         
     },
    {
        q: 'What commercial does the main character see after he escapes his restraints?',
        opt: ['Coca-cola','Emergency Broadcast','Cheddar Goblin','Kraft Mac & Cheese'],
       
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
                
                $('#question' + i).append('<br> <input class=user' + i +  ' type=radio name=answer' + i + ' value=' + a +'>' + getAnswer)
        }
    }

    showRes()
}
        
//Checking if user selected the right answer/no answer at all/ or the wrong answer  
//Currently only displays number correct if user chose right answer and number of inncorrect if user didn't choose at all or 
//chose wrong respectively
//Checking user guesses with a series of on click event listeners, still need to figure out a way to log no answer
//tried userClick === undefined and null but noanswer would not print to the document.
//Refactor at some point.
function showRes() {
    
 
    noanswer = 0;
    incorrect = 0;
    correct = 0;
    //Correct answer array, not readily available to people who decide to inspect the source code
    let answers = [0,1,2,1,2,3,0,2];
    
    $('.user0').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[0]) {
            
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[0]) {
            
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    })   
    $('.user1').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[1]) {
            
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[1]) {
            
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
    $('.user2').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[2]) {
            
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[2]) {
            
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
    $('.user3').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[3]) {
           
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[3]) {
            
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
    $('.user4').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[4]) {
            
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[4]) {
           
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
    $('.user5').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[5]) {
            
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[5]) {
          
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
    $('.user6').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[6]) {
           
            correct++
            $('#correct').text(correct)
        } else if(userClick !== answers[6]) {
            
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
    $('.user7').on('click', function() { 
        answers;
        let userClick = parseInt($(this).attr('value'))
        if(userClick === answers[7]) {
           
            correct++
            $('#correct').text('You got: ' + correct + ' right, buster')
        } else if(userClick !== answers[7]) {
            
            incorrect++
            $('#incorrect').text('You got: ' + incorrect + ' wrong, buster')
        } 
    }) 
           
       
       
        
       
       
       
         
    
   
};  

 
}); 
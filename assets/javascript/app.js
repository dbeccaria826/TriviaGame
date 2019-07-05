//Create 10 questions the user can answer in 60 seconds.
//4 answers per question, multiple choice.
//Timer counts down when game starts (not on page load) Game start button = timer begins and game loads
//At the end of the game right and wrong answers are tallied. Player can see how well they did.

$(document).ready(function () {
    //Question objects. Properties are questions/answers/ and correct answer
 
$('#countdown').append('<button id=startGame>Start Game</button>').css('text-align', 'center')
 $('#showresult').hide()

$('#startGame').on('click', function(){ 
    var count = 45
    
    getQuest()
   
    var interVal = setInterval (function() {
         $('#countdown').text('00:' + --count)
            
        console.log('countdown works')
        if(count === 0) {
            $('#mainquestions').hide()
            $('#showresult').text('How Did You Do?').show().css('border', '1px solid black')
            clearInterval(interVal);
            console.log("if statement works")
        }   
    }, 1000)
        
    
})

    
//Storing each question and answer object inside of an array for easier access later on.
    
    var qA = [ 
        
    
    { 
        q: 'Who directed Mandy?',
        opt0: ['Panos Cosmatos', 'Wes Anderson','Martin Scorsese','Tod Solonze']
    },
       
    {

        q:'What is the name of Nicholas Cage\'s Character?',
        opt1: ['Arnold Miller', 'Red Miller','John Miller','Fred Miller']
    },  
       
         
        
    {
     
        q:'What is the name of the horn the cultists use to summon the bikers?',
        opt2: ['Horn of the Dawn','Horn of the Abyss','Horn of Abraxas','Horn of Darkness']
        
    },
    
        
    {
        q: 'What is the name of the cult?',
        opt3: ['Children of the Night','Children of the New Dawn','Children of the Sun','Children of the Corn']
    },   
       
      {      
        
        q:'What is used to restrain the main character when he is taken by the bikers?',
        opt4: ['Rope', 'Duct Tape','Barbed Wire','Extension Cord']
      }, 
        
     {
        q: 'What planet does Mandy mention is her favorite?',
        opt5: ['Saturn', 'Uranus','Pluto','Jupiter']
     } 
    ]    
           
        
    


console.log(qA)
console.log(typeof(qA))
console.log('q' in qA)

console.log(qA[0].opt)




function getQuest() {
        for(var i  = 0; i < qA.length; i++) {
            var question = qA[i].q
            $('#mainquestions').append('<div id=question' + i + '>' + question + '</div>');
            console.log('loop is working');
        }
        for(var a = 0; a < qA[0].opt0.length; a++) {
            var answer = qA[0].opt0[a];
            $('#question0').append('<input class=styleinput type=radio name=answer>' + answer + '</input>');
        }
        for(var b = 0; b < qA[1].opt1.length; b++) {
            var answer1 = qA[1].opt1[b];
            $('#question1').append('<input class=styleinput type=radio name=answer>' + answer1 + '</input>');
        }
        for(var c = 0; c < qA[2].opt2.length; c++) {
            var answer2 = qA[2].opt2[c];
            $('#question2').append('<input class=styleinput type=radio name=answer>' + answer2 + '</input>');
        }
        for(var d = 0; d < qA[3].opt3.length; d++) {
            var answer3 = qA[3].opt3[d];
            $('#question3').append('<input class=styleinput type=radio name=answer>' + answer3 + '</input>');
        }
        for(var e = 0; e < qA[4].opt4.length;e++) {
            var answer4 = qA[4].opt4[e];
            $('#question4').append('<input class=styleinput type=radio name=answer>' + answer4 + '</input>');
        }
        for(var f = 0; f < qA[5].opt5.length; f++) {
            var answer5 = qA[5].opt5[f];
            $('#question5').append('<input class=styleinput type=radio name=answer>' + answer5 + '</input>');
        }
}
        
      
      
    
    












})
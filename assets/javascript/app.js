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
    startGame() 
   
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
    
    var qA = [{
       q: 'Who directed Mandy?',
       a: 'Panos Cosmatos',
       b: 'Wes Anderson',
       c: 'Martin Scorsese',
       d: 'Francis Ford Coppola',
       right: 'Panos Cosmatos'
    },
    {
        q:'What is the name of Nicholas Cage\'s Character?',
        a: 'Arnold Miller',
        b: 'Red Miller',
        c: 'John Miller',
        d: 'Fred Miller',
        right: 'Red Miller'
    },     
        
    
    { 
        q:'What is the name of the horn the cultists use to summon the bikers?',
        a: 'Horn of the Dawn',
        b: 'Horn of the Abyss',
        c: 'Horn of Abraxas',
        d: 'Horn of Twilight',
        right: 'Horn of Abraxas'

    },
        
    {
        q: 'What drug does the Chemist in Mandy manufacture?',
        a: 'Meth-amphetamine',
        b: 'LSD',
        c: 'Cocaine',
        d: 'Heroin',
        right: 'LSD'
            
    },    
    {
        q:'What is used to restrain the main character when he is taken by the bikers?',
        a: 'Rope',
        b: 'Duct tape',
        c: 'Barded wire',
        d: 'Extension cord',
        right: 'Barbed wire'
    }, 
    {
        q: 'What planet does Mandy mention is her favorite?',
        a: 'Saturn',
        b: 'Uranus',
        c: 'Mars',
        d: 'Jupiter',
        right: 'Jupiter'
    }       
        
    
]

console.log(qA[0].q.length)
console.log(typeof(qA))
function startGame() {
    for(var i = 0; i < qA.length; i++) {
        quest = qA[i].q
        $('#mainquestions').append('<div>' + quest + '</div>')
    }
}



/*

    //Getting questions and answers to display on the page.
    var qDiv= (qA.quest1.q);
    var qDiv_2= (qA.quest2.q);
    var qDiv_3= (qA.quest3.q);
    var qDiv_4= (qA.quest4.q);
    var qDiv_5= (qA.quest5.q);
    var qDiv_6= (qA.quest6.q);
    var qDiv_7= (qA.quest7.q);
    var qDiv_8= (qA.quest8.q);
    var qDiv_9= (qA.quest9.q);
    var qDiv_10= (qA.quest10.q);


   
    
$('#mainquestions').append('<div id=question1>' + qDiv  + '</div>')
$('#mainquestions').append('<div id=question2>' + qDiv_2 + '</div>')
$('#mainquestions').append('<div id=question3>' + qDiv_3 + '</div>')
$('#mainquestions').append('<div id=question4>' + qDiv_4 + '</div>')
$('#mainquestions').append('<div id=question5>' + qDiv_5 + '</div>')
$('#mainquestions').append('<div id=question6>' + qDiv_6 + '</div>')
$('#mainquestions').append('<div id=question7>' + qDiv_7 + '</div>')
$('#mainquestions').append('<div id=question8>' + qDiv_8 + '</div>')
$('#mainquestions').append('<div id=question9>' + qDiv_9 + '</div>')
$('#mainquestions').append('<div id=question10>' + qDiv_10 + '</div>')

function genAnswers() {
for(var a = 0; a < qA.quest1.a.length; a++){
    var aDiv = (qA.quest1.a[a])
    $('#question1').append('<input type=radio name=answer required>' + aDiv + '</radio>');
    console.log("loop is working")
    console.log(qA.quest1.a[a])
}
for(var b = 0; b < qA.quest2.a.length; b++) {
    var aDiv2 = (qA.quest2.a[b]);
    $('#question2').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var c = 0; c < qA.quest3.a.length; c++) {
    var aDiv2 = (qA.quest3.a[c]);
    $('#question3').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var d = 0; d < qA.quest4.a.length; d++) {
    var aDiv2 = (qA.quest4.a[d]);
    $('#question4').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var e = 0; e < qA.quest5.a.length; e++) {
    var aDiv2 = (qA.quest5.a[e]);
    $('#question5').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var f = 0; f < qA.quest6.a.length; f++) {
    var aDiv2 = (qA.quest6.a[f]);
    $('#question6').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var g = 0; g < qA.quest7.a.length; g++) {
    var aDiv2 = (qA.quest7.a[g]);
    $('#question7').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var h = 0; h < qA.quest2.a.length; h++) {
    var aDiv2 = (qA.quest8.a[h]);
    $('#question8').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
for(var i = 0; i < qA.quest9.a.length; i++) {
    var aDiv2 = (qA.quest9.a[i]);
    $('#question9').append('<input type=radio name=answer required>' + aDiv2 + '</radio>');
    console.log("loop question 2 is working")
}
}

genAnswers()

*/






})
//Create 10 questions the user can answer in 60 seconds.
//4 answers per question, multiple choice.
//Timer counts down when game starts (not on page load) Game start button = timer begins and game loads
//At the end of the game right and wrong answers are tallied. Player can see how well they did.

$(document).ready(function () {
    //Question objects. Properties are questions/answers/ and correct answer
    var qA = {
        quest1:{
            q: 'What is the flight speed of an african swallow?',
            a: ['3km', '5km','25km','10km'],
            right: [2]
        },
        quest2: { 
            q:'Where is my mind is a song from what album?',
            a: ['Surfer Rosa', 'Doolittle','Bossanova','Come On Pilgrim'],
            right: [0]
        },
        quest3: {
            q:'If a tree falls in the woods does it make a sound?',
            a: ['Yes','No', 'Maybe','Only to Humans'],
            right: [3]
        },
        quest4: {
            q: 'How old is Alex Trebec?',
            a: ['76', '75', '74', '67'],
            right: [0]
        },
        quest5: {
            q:'What is the internal temperature of a human being?',
            a: ['98degrees','97degrees','95degrees', '104degrees'],
            right: [0]
        },
        quest6: {
            q: 'Which is more exciting?',
            a: ['Watching paint dry','Being stuffed in an oil drum','Waiting in line','Calling the police'],
            right: [3]
        },
        quest7: {
            q: 'What does the acronym API stand for?',
            a: ['Application Programming Interface','Application Procedure Interval','Application Professional Interest','Application Proper Interface'],
            right: [0]
        },
        quest8: {
            q: 'How long has the kivu conflict in the congo been going on for?',
            a: ['15 years','6 years', '10 years','20 years'],
            right: [0]
        },
        quest9: {
            q: 'Who is the current king of Saudi Arabia?',
            a: ['Salman','Fahd','Mohammad bin Salman','Abdullah'],
            right: [2]
        },
        quest10: {
            q: 'Who was the last president of France?',
            a: ['Macron','Sarkozy','Le Pen','Holland'],
            right: [3]
        },

    }



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

for(var i = 0; i < qA.quest1.a.length; i++){
    var aDiv = (qA.quest1.a[i])
    $('#question1').append('<input type=radio>' + aDiv + '</input>')
    console.log("loop is working")
    console.log(qA.quest1.a[i])
}
   








})
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
    //Checking if radio is checked
        
    let userAnswer = getAnswer.find(function(x) {
        return x.checked === true;
    })
    console.log(userAnswer)
   
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
   
    //Assigning the checked radio value to a variable for use in conditional statement
    let chosenValue = $(userAnswer).val()
    let chosenValue1 = $(userAnswer1).val()
    let chosenValue2 = $(userAnswer2).val()
    let chosenValue3 = $(userAnswer3).val()
    let chosenValue4 = $(userAnswer4).val()
    let chosenValue5 = $(userAnswer5).val()
    let chosenValue6 = $(userAnswer6).val()
    let chosenValue7 = $(userAnswer7).val()

    //Conditional statements to compare the value of the checked radio to the values in the answer array
    //------q1
    if (chosenValue == answers[0]) {
        correct++;
        $('#showresult').text('You got: ' + correct + ' right').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
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
        $('#restart').show()
    } else {
        incorrect++
        $('#showresult').text('You got ' + incorrect + ' wrong').show()
    }
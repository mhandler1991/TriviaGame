//****************************************************************
//
//                        ---                                     
//                     -        --                             
//                 --( /     \ )XXXXXXXXXXXXX                   
//             --XXX(   O   O  )XXXXXXXXXXXXXXX-              
//            /XXX(       U     )        XXXXXXX\               
//          /XXXXX(              )--   XXXXXXXXXXX\             
//         /XXXXX/ (      O     )   XXXXXX   \XXXXX\
//         XXXXX/   /            XXXXXX   \   \XXXXX----        
//         XXXXXX  /          XXXXXX         \  ----  -         
// ---     XXX  /          XXXXXX      \           ---        
//   --  --  /      /\  XXXXXX            /     ---=         
//     -        /    XXXXXX              '--- XXXXXX         
//       --\/XXX\ XXXXXX                      /XXXXX         
//         \XXXXXXXXX                        /XXXXX/
//          \XXXXXX                         /XXXXX/         
//            \XXXXX--  /                -- XXXX/       
//             --XXXXXXX---------------  XXXXX--         
//                \XXXXXXXXXXXXXXXXXXXXXXXX-            
//                  --XXXXXXXXXXXXXXXXXX-
//
//
//****************************************************************






$(document).ready(function () {

    //**************************
    // Game 
    //**************************

    // Variables

    // Variable Answers
    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;

    // Variable Console Logging - Answers
    console.log("a1 " + answer1);
    console.log("a2 " + answer2);
    console.log("a3 " + answer3);
    console.log("a4 " + answer4);

    // Variable Results
    var result1 = false;
    var result2 = false;
    var result3 = false;
    var result4 = false;

    // Variable Console loggging - Results
    console.log("r1 " + result1);
    console.log("r2 " + result2);
    console.log("r3 " + result3);
    console.log("r4 " + result4);

    // Variable Correct Answer
    var correct = 0;
    console.log("#C " + correct);

    // Variable Wrong Answer
    var wrong = 0;
    console.log("#w " + wrong);


    //**************************
    // On-Click Actions
    //**************************

    // When an answer button is clicked run Question Function
    $(".a").on("click", question);

    // Question Function
    function question() {
        // Log "This" to Console
        console.log("Button Clicked: " + this);

        // Determine if Answer is Correct
        if ($(this).attr("value") == "q1") {
            answer1 = $(this).attr("correct");
            console.log(answer1);
        }
        if ($(this).attr("value") == "q2") {
            answer2 = $(this).attr("correct");
            console.log(answer2);
        }
        if ($(this).attr("value") == "q3") {
            answer3 = $(this).attr("correct");
            console.log(answer3);
        }
        if ($(this).attr("value") == "q4") {
            answer4 = $(this).attr("correct");
            console.log(answer4);
        }
    }

    //**************************
    // Game Results
    //**************************

    // End Game Function
    function endGame() {

        // Log submitted Answers
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);
        // Log Var Type of submitted Answers
        console.log(typeof (answer1));
        console.log(typeof (answer2));
        console.log(typeof (answer3));
        console.log(typeof (answer4));


        // Determine if question 1 is correct
        if (answer1 == 1) {
            // Define Question as correct
            result1 = true;
            // Increase # of Correct
            correct++;
            // Display the answer was correct
            $('#q1r').text("Correct!");
        } else {
            // If answer was wrong
            // Increase # of Wrong
            wrong--;
            // Display the Correct Answer
            $('#q1r').text("Incorrect, 6 Championships is the correct answer");
        }
        // Determine if question 2 is correct
        if (answer2 == 1) {
            // Define Question as correct
            result2 = true
            // Increase # of Correct
            correct++;
            // Display the answer was correct
            $('#q2r').text("Correct!");
        } else {
            // If answer was wrong
            // Increase # of Wrong
            wrong--;
            // Display the Correct Answer
            $('#q2r').text("Incorrect, ALL OF THEM is the correct answer");
        }
        // Determine if question 3 is correct
        if (answer3 == 1) {
            // Define Question as Correct
            result3 = true
            // Increase # of Correct
            correct++
            // Display the answer was correct
            $('#q3r').text("Correct!");
        } else {
            // If answer was wrong
            // Increase # of wrong
            wrong++;
            // Display the Correct Answer
            $('#q3r').text("Incorrect, 23 is the correct answer");
        }
        // Determine if question 4 is correct
        if (answer4 == 1) {
            // Define Question as Correct
            result4 = true
            // Increase # of Correct
            correct++
            // Display the answer was Correct
            $('#q4r').text("Correct!");
        } else {
            // If answer was wrong
            // Increase # of wrong
            $('#q4r').text("Incorrect, MJ is the correct answer");
            // Display the correct Answer
            wrong++;
        }
    }

    //**************************
    // Timer 
    //**************************

    // Variables

    // Var Time = 100 seconds
    var time = 100;
    var intervalId;

    // Start Timer Funciton
    function startTimer() {

        // Increment by/every 1 second
        intervalId = setInterval(decrement, 1000);
    }

    // Decrement Function
    function decrement() {
        // Minus time by 1
        time--;
        // Display Timer
        $('#timer1').html(time);

        // If Timer == 0
        if (time === 0) {
            // Clear Interval Id
            clearInterval(intervalId);
            // Alert User that time is up
            alert("Times Up!")
            // Run End Game Function
            endGame();
        }
    }


    // Start Timer on Game
    startTimer();

    // End Game when the user submits answers
    $("#submit").on("click", endGame);


    // Reset Game



})











// //Decide what the last button was clicked for Q3
// $("#q4b1").on("click", question4);
// $("#q4b2").on("click", question4);
// $("#q4b3").on("click", question4);
// $("#q4b4").on("click", question4);

// function question4(x) {
//     answer4 = $(this).attr("correct");
//     console.log(answer4);
// }
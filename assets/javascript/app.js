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
    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;

    console.log("a1 " + answer1 + " ");
    console.log("a2 " + answer2 + " ");
    console.log("a3 " + answer3 + " ");
    console.log("a4 " + answer4 + " ");

    var result1 = false;
    var result2 = false;
    var result3 = false;
    var result4 = false;

    console.log("r1 " + result1);
    console.log("r2 " + result2);
    console.log("r3 " + result3);
    console.log("r4 " + result4);

    var correct = 0;

    console.log("#C " + correct);

    var wrong = 0;

    console.log("#w " + wrong);

    //**************************
    // On-Click Actions
    //**************************

    $(".a").on("click", question);

    function question() {
        console.log("Button Clicked: " + this);

        if($(this).attr("value") == "q1"){
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
        if($(this).attr("value") == "q4") {
            answer4 = $(this).attr("correct");
            console.log(answer4); 
        }
    }

    //**************************
    // Game Results
    //**************************

    function endGame() {

        // Log submitted Answers
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);
        console.log(typeof(answer1));
        console.log(typeof(answer2));
        console.log(typeof(answer3));
        console.log(typeof(answer4));

        
        // Determine if question 1 is correct
        if (answer1 == 1) {
            result1 = true;
            correct++;
            $('#q1r').text("Correct!");
        } else {
            wrong--;
            $('#q1r').text("Incorrect, 6 Championships is the correct answer");
        }
        // Determine if question 2 is correct
        if (answer2 == 1) {
            result2 = true
            correct++;
            $('#q2r').text("Correct!");
        } else {
            wrong--;
            $('#q2r').text("Incorrect, ALL OF THEM is the correct answer");
        }
        // Determine if question 3 is correct
        if (answer3 == 1) {
            result3 = true
            correct++
            $('#q3r').text("Correct!");
        } else {
            $('#q3r').text("Incorrect, 23 is the correct answer");
            wrong++;
        }
        // Determine if question 4 is correct
        if (answer4 == 1) {
            result4 = true
            correct++
            $('#q4r').text("Correct!");
        } else {
            $('#q4r').text("Incorrect, 23 is the correct answer");
            wrong++;
        }
    }

    //**************************
    // Timer 
    //**************************

    // Variables
    var time = 100;
    var intervalId;

    function startTimer() {
        intervalId = setInterval(decrement, 1000);
    }


    function decrement() {
        time--;
        $('#timer1').html(time);

        if (time === 0) {
            clearInterval(intervalId);
            alert("Times Up!")
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
//test
console.log('Game Start');

//questions variables
let question1 = {
    question: "The NBA team that has the most championships?",
    choices: ['a: Los Angeles Lakers',
        'b: Chicago Bulls',
        'c: Boston Celtics',
        'd: Golden State Warriors'],
    answer: 'Boston Celtics with 17',
    condition: [false, false, true, false]
};

let question2 = {
    question: "'His Airness'",
    choices: ['a: Wilt Chamberlain',
        'b: Kareem Abdul-Jabbar',
        'c: Lebron James',
        'd: Michael Jordan'],
    answer: 'Michael Jordan in reference to his super-human like hangtime',
    condition: [false, false, false, true]
};


let question3 = {
    question: "'The Diesel'",
    choices: ['a: Kobe Bryant',
        "b: Shaquel O'Neal",
        'c: Lebron James',
        'd: Dwight Howard'],
    answer: "Shaquel O'Neal earned the nickname after his 'Shaq Diesel' album release",
    condition: [false, true, false, false]
};

let question4 = {
    question: "The only Player in NBA history to have 2 Numbers retired by a single team.",
    choices: ["a: Shaquel O'Neal",
        'b: Lebron James',
        'c: Kobe Bryant',
        'd: Larry Bird'],
    answer: "Kobe Bryant's #8 and #24 jersey was retired in 2017",
    condition: [false, false, true, false]
};

let question5 = {
    question: "This player holds the record for most 3-points made in an NBA regular season?",
    choices: ['a: Kobe Bryant',
        'b: Ray Allen',
        'c: Stephen Curry',
        'd: Peja Stojakovic'],
    answer: "Stephen Curry holds the record with 402 3-pointers made in a season",
    condition: [false, false, true, false]
};

let question6 = {
    question: "NBA player with the most MVP Awards?",
    choices: ['a: Kareem Abdul-Jabbar',
        'b: Bill Russell',
        'c: Larry Bird',
        'd: Lebron James'],
    answer: 'Kareem Abdul-Jabbar won the MVP award 6 times in his 20 year pro career',
    condition: [true, false, false, false]
};

let question7 = {
    question: "NBA player with the most championship rings?",
    choices: ['a: Kareem Abdul-Jabbar',
        'b: Kobe Bryant',
        'c: Wilt Chamberlain',
        'd: Bill Russell'],
    answer: "Bill Russel with 11 of the 17 Boston Celtics championships",
    condition: [false, false, false, true]
};

let question8 = {
    question: "The 2014 NBA champion?",
    choices: ['a: Los Angeles Lakers',
        'b: Golden State Warriors',
        'c: San Antonio Spurs',
        'd: Miami heat'],
    answer: "San Antonio Spurs beat the Miami Heat 4-1",
    condition: [false, false, true, false]
};

let question9 = {
    question: "'The Admiral'",
    choices: ['a: Moses Malone',
        'b: David Robinson',
        'c: Bill Russell',
        'd: Magic Johnson'],
    answer: "David Robinson served 2years in the Navy before getting drafted #1",
    condition: [false, true, false, false]
};

let question10 = {
    question: "The only player in NBA history to average a triple-Double in multiple seasons.",
    choices: ['a: Bill Russell',
        'b: Kobe Bryant',
        'c: Michael Jordan',
        'd: Russel Westbrook'],
    answer: "Russel Westbrook averaged a triple-double in 2016 and 2017 season",
    condition: [false, false, false, true]
};

let question11 = {
    question: "The Greatest NBA player of all time?",
    choices: ['a: Tim Duncan',
        'b: Lebron James',
        'c: Kobe Bryant',
        'd: Michael Jordan'],
    answer: "TIM DUNCAN IS THE G.O.A.T DEAL WITH IT!",
    condition: [true, false, false, false]
};


//convert the questions into an array
let nbaTrivia = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11];
//right answers counter
let rightAnswers = 0;
//wrong answers counter
let wrongAnswers = 0;
let questionIndex = 0;
//answer variable to be used on answer conditions
let userAnswer;
let gameEnd = false;
let click = false;




$(document).ready(function () {
    $('#audio1').hide();

    //display the questions
    function giveQuestions(item) {
        //resets time whenever a new question is prompted
        timer.reset();
        $('.title').hide();
        $('.titlecontainer').append('<h3 class="title m-2 p-2 text-center text-light">NBA TRIVIA</h3>');
        //show question
        $('.question').html(nbaTrivia[item].question).show('slow');
        //show choices
        $('#a').text(nbaTrivia[item].choices[0]).show('slow');
        $('#b').text(nbaTrivia[item].choices[1]).show('slow');
        $('#c').text(nbaTrivia[item].choices[2]).show('slow');
        $('#d').text(nbaTrivia[item].choices[3]).show('slow');
        $('.timer').show('slow');
        $('.answer').hide('slow');
        //console.log('giveQuestions');
        click = false;
    }
    //start game button
    function startGame() {

        $('.startcontainer').append('<button class ="rounded text-muted start"></button>'); // spurs gif container
        $('.titlecontainer').append('<h3 class="title m-2 p-2 text-center text-light">welcome to NBA trivia! click the SPURS photo to start!</h3>'); //first page title
        //hide choices on opening
        $('#a').hide(); 
        $('#b').hide();
        $('#c').hide();
        $('#d').hide();
        //hides timer and answer column on start screen
        $('.timer').hide();
        $('.answer').hide();
        //load questions on click function
        //loads the questions when spurs gif is clicked
        $('.start').on('click', function () {
            $(this).hide();
            timer.start();
            giveQuestions(questionIndex);
            //console.log('startGame')
        })

    }

    //hide content
    function hideContent() {
        if(gameEnd === false){
            setTimeout(function () {
                //$('.question').text('');
                $('#a').text('');
                $('#b').text('');
                $('#c').text('');
                $('#d').text('');
                $('.answer').text('');
               // console.log('hideContent');
            }, 4000); questionIndex++;
           // console.log('hideContent2')
        }
            
    };
    //load next question
    function loadNextContent() {
        if (questionIndex < nbaTrivia.length) {
            setTimeout(function () {
                giveQuestions(questionIndex);
                //console.log('loadNextContent');
            }, 4000)
        } else {
            $('.choice').hide();
            score();
            //console.log('loadNextContentelse')
        }
    };

    // prevents hideContent and loadNextContent function from executing
    function end (){
        //console.log('end');
        if(questionIndex === nbaTrivia.length){
            gameEnd = true;
        }
    }

    //conditions when answer is right
    function right() {
        rightAnswers++; //adds point to the right answer variable
        //console.log('right');
        aRight();
    };

    //condition when answer is wrong
    function wrong() {
        wrongAnswers++; //adds a point on the wrong answer variable
        //console.log('wrong');
        $('.answer').append(nbaTrivia[questionIndex].answer);
        $('.answer').show('slow');
        aWrong();
    };

    //show scores after game
    function score() {
    $('.question').empty();
        $('.titlecontainer').html('<h3 class="title m-2 p-2 text-center text-light">'+ nbaTrivia[10].answer +'</h3>')
        $('.question').append("<p>" + rightAnswers + " correct</p>");
        $('.question').append("<p>" + wrongAnswers + " incorrect</p>");
        $('.question').append("CLICK THE GAME LOGO TO RESTART");
        timer.stop(); //stop timer when game ends
        $('.timer').empty().hide();
        winOrlose();
        //console.log('score')
    };


    let timer = {
        time: 15, //sets 15sec as time
        //time reset function
        reset: function () {
            this.time = 15;
            $('.timer').html(this.time + ' sec remaining'); //show time
           // console.log('reset');
        },
        //counter
        start: function () {
            counter = setInterval(timer.count, 1000); //sets interval
           // console.log('start');
        },
        //clear the interval of the timer
        stop: function () {
            clearInterval(counter);
           // console.log('stop');
        },

        count: function () {
            timer.time--;
            //console.log(timer.time);

            if (timer.time >= 0) {
                $('.timer').html(timer.time + ' sec remaining');
            } else if (timer.time <= 0) {
                //if time runs out
                questionIndex++;
                wrong();
                timer.reset();
                if (questionIndex < nbaTrivia.length) {
                    setTimeout(function () {
                        giveQuestions(questionIndex);
                    }, 4000)
                } else {
                    $('.choice').hide();
                    score();
                   // console.log('else')
                }
            }
        }
    }

    //function that determines which gif will be loaded
    function winOrlose() {
        if (rightAnswers === 11){ //if you score a perfect score, spurs big 3 gif will be loaded
            $('.question').append("<embed src='https://media.giphy.com/media/F03RM3pk6YtnW/giphy.gif'>");
        } else if(rightAnswers >= wrongAnswers && rightAnswers !== 11 ){ //if you win, Kobe gif will be loaded
            $('.question').append("<embed src='https://media.giphy.com/media/NfiEWXSA1fVoQ/giphy.gif'>");
        } else { //if you lose, lebron gif will be loaded
            $('.question').append("<embed src='https://media.giphy.com/media/xTiTnDAP0RiCo9k85W/giphy.gif'>")
        }
        $('.answer').text(''); //empty answer column
        //console.log('winOrLose');
    };

    startGame();

    //lets you know which choice is clicked
    $('.choice').on('click', function () {
        //console.log($(this.id));
       // console.log('check');
        if(click === false){
            if (this.id === 'a') { //if this is clicked, then that is the user's answer
            userAnswer = 'a';
            click = true;
        } else if (this.id === 'b') {
            userAnswer = 'b';
            click = true;
        } else if (this.id === 'c') {
            userAnswer = 'c';
            click = true;
        } else if (this.id === 'd') {
            userAnswer = 'd';
            click = true;
        }


        

        //logic for if the answer is right or wrong
        //the position of true in the index determines whether your choice is right or wrong
        //if both your choice and true is positioned in the index of where the answer is, then your answer is right
        //if only one condition is met, then it is wrong
        if ((userAnswer === 'a') && nbaTrivia[questionIndex].condition[0] === true) { //if both of this condition is met the answer is correct
            right(); //run the right function which adds a point to the score and alerts if right
        } else if (userAnswer === 'a') { //if only the first condition is met which is the user's answer, then 
            wrong();                       //run the wrong function, add a point on the wrong counter, and alert wrong
        } if ((userAnswer === 'b') && nbaTrivia[questionIndex].condition[1] === true) {
            right();
        } else if (userAnswer === 'b') {
            wrong();
        } if ((userAnswer === 'c') && nbaTrivia[questionIndex].condition[2] === true) {
            right();
        } else if (userAnswer === 'c') {
            wrong();
        } if ((userAnswer === 'd') && nbaTrivia[questionIndex].condition[3] === true) {
            right();
        } else if (userAnswer === 'd') {
            wrong();
        }
    
        hideContent();
        loadNextContent();
        end();
    }
    })
})
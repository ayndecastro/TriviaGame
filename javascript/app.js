
//test
//console.log('hello');

//questions variables
let question1 = {
    question: "Which NBA team has the most championship?",
    choices :  ['a: Los Angeles Lakers',
                'b: Chicago Bulls',
                'c: Boston Celtics',
                'd: Golden State Warriors'],
    answer: "c: Boston Celtics",
    condition: [false, false, true, false]
};

let question2 = {
    question: "Which NBA player won the most Most Valuable Player Awards?",
    choices : [ 'a: Kareem Abdul-Jabbar',
                'b: Bill Russell',
                'c: Larry Bird',
                'd: Lebron James'],
    answer: 'a: Kareem Abdul-Jabbar', 
    condition: [true,false,false,false]    
};

let question3 = {
    question: "who is the most winningest trio in NBA Play-offs history?",
    choices : [ 'a: Abdul-Jabbar, Johnson, and Cooper',
                'b: Duncan, Ginobili, and Parker',
                'c: Johnson, Scott, Worthy',
                'd: Curry, Thompson, Green'],
    answer: "b: Duncan, Ginobili, and Parker",
    condition: [false,true,false,false]
};

let question4 = {
    question: "The only Player in NBA history to have 2 jersey's retire by one team.",
    choices : [ "a: Shaquel O'Neal",
                'b: Lebron James',
                'c: Kobe Bryant',
                'd: Larry Bird'],
    answer: "c: Kobe Bryant",
    condition: [false,false,true,false]
};

let question5 = {
    question: "Who holds the record for most 3-points made in an NBA regular season?",
    choices : [ 'a: Kobe Bryant',
                'b: Ray Allen',
                'c: Stephen Curry',
                'd: Peja Stojakovic'],
    answer: "c: Stephen Curry",
    condition: [false,false,true,false]
};

let question6 = {
    question: "Who is the 2014 NBA champion of the year?",
    choices : [ 'a: Los Angeles Lakers',
                'b: Golden State Warriors',
                'c: San Antonio Spurs',
                'd: Miami heat'],
    answer: "c: San Antonio Spurs",
    condition: [false,false,true,false]
};

let question7 = {
    question: "Who is the NBA player with the most championship rings?",
    choices : [ 'a: Kareem Abdul-Jabbar',
                'b: Kobe Bryant',
                'c: Wilt Chamberlain',
                'd: Bill Russell'],
    answer: "d: Bill Russell",
    condition: [false,false,false,true]
};

let question8 = {
    question: "The only player to score 15 or more points in his intire career.",
    choices : [ 'a: Wilt Chamberlain',
                'b: Kareem Abdul-Jabbar',
                'c: Lebron James',
                'd: Michael Jordan'],
    answer: 'd: Michael Jordan',
    condition: [false,false,false,true]
};

let question9 = {
    question: "player and coach duo with the most wins.",
    choices : [ 'a: Michael Jordan & Phil Jackson',
                'b: Tim Duncan & Greg Popovich',
                'c: Bill Russell & Red Auerbach',
                'd: Magic Johnson & Pat Riley'],
    answer: "b: Tim Duncan & Greg Popovich",
    condition: [false,true,false,false]
};

let question10 = {
    question: "The only player in NBA history to average triple-Double in multiple seasons.",
    choices : [ 'a: Bill Russell',
                'b: Kobe Bryant',
                'c: Michael Jordan',
                'd: Russel Westbrook'],
    answer: "d: Russel Westbrook",
    condition: [false,false,false,true]
};

let question11 = {
    question: "Who is the Greatest player of all time?",
    choices : [ 'a: Tim Duncan',
                'b: Lebron James',
                'c: Kobe Bryant',
                'd: Michael Jordan'],
    answer: 'Tim Duncan',
    condition: [true,false,false,false]
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


$(document).ready(function () {

        
    //display the questions
    function giveQuestions (item) {
        //resets time whenever a new question is prompted
        timer.reset();
        $('.title').hide();
        $('.titlecontainer').append('<h3 class="title m-2 p-2 text-center text-light">NBA TRIVIA</h3>');
        //show question
        $('.question').html(nbaTrivia[item].question);
        //show choices
        $('#a').text(nbaTrivia[item].choices[0]).show();
        $('#b').text(nbaTrivia[item].choices[1]).show();
        $('#c').text(nbaTrivia[item].choices[2]).show();
        $('#d').text(nbaTrivia[item].choices[3]).show();
    }
    //start game button
    function startGame () {
        $('.startcontainer').append('<button class ="rounded text-muted start"></button>');
        $('.titlecontainer').append('<h3 class="title m-2 p-2 text-center text-light">welcome to NBA trivia! Press the SPURS family to start!</h3>');
        $('#a').hide();
        $('#b').hide();
        $('#c').hide();
        $('#d').hide();
        $('.start').on('click', function (){
            $(this).hide();
            timer.start();
            giveQuestions(questionIndex);
        })
    }

    //load next
    function answerShow() {
        $('.question').text('');
        $('#a').text('');
        $('#b').text('');
        $('#c').text('');
        $('#d').text('');
        questionIndex++;
        if(questionIndex < nbaTrivia.length) {
            giveQuestions(questionIndex);
        } else {
            $('.choice').hide();
            score();
        }
    }

    //conditions when answer is right
    function right(){
        rightAnswers++; //adds point to the right answer variable
    };

    //condition when answer is wrong
    function wrong() {
        wrongAnswers++; //adds a point on the wrong answer variable
    };

    //show scores after game
    function score () {
        $('.question').empty();
        $('.question').append("<h2><p>" + rightAnswers + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrongAnswers + " incorrect</p></h2>");
        timer.stop(); //stop timer when game ends
        $('.timer').empty();
    };

    let timer = {
        time: 15, //sets 15sec as time
        //time reset function
        reset: function () {
            this.time = 15;
            $('.timer').html('<div>' + this.time + 'sec. remaining</div>'); //show time
        },
        //counter
        start: function () {
            counter = setInterval(timer.count, 1000); //sets interval
        },
        //clear the interval of the timer
        stop: function () {
            clearInterval(counter);
        },

        count: function () {
            timer.time--;
            //console.log(timer.time);

            if (timer.time >= 0) {
                $('.timer').html('<div>' + timer.time + 'sec. remaining</div>');
            }else{
                //if time runs out
                questionIndex++;
                wrong();
                timer.reset();
                if (questionIndex < nbaTrivia) {
                    giveQuestion(questionIndex);
                } else {
                    $('.choice').hide();
                    score();
                }
            }
        }
    }

    startGame();

    //lets you know which choice is clicked
    $('.choice').on('click', function (){
        console.log($(this.id));
        console.log('check');
        if(this.id === 'a'){ //if this is clicked, then that is the user's answer
            userAnswer = 'a';
        } else if (this.id === 'b'){
            userAnswer = 'b';
        } else if (this.id === 'c'){
            userAnswer = 'c';
        } else if (this.id === 'd'){
            userAnswer = 'd';
        }


        //logic for if the answer is right or wrong
        //the position of true in the index determines whether your choice is right or wrong
        //if both your choice and true is positioned in the index of where the answer is, then your answer is right
        //if only one condition is met, then it is wrong
        if((userAnswer === 'a') && nbaTrivia[questionIndex].condition[0] === true) { //if both of this condition is met the answer is correct
            right(); //run the right function which adds a point to the score and alerts if right
        } else if(userAnswer === 'a') { //if only the first condition is met which is the user's answer, then 
            wrong();                       //run the wrong function, add a point on the wrong counter, and alert wrong
        }if((userAnswer === 'b') && nbaTrivia[questionIndex].condition[1] === true) {
            right();
        } else if(userAnswer === 'b') {
            wrong();
        }if((userAnswer === 'c') && nbaTrivia[questionIndex].condition[2] === true) {
            right();
        } else if(userAnswer === 'c') {
            wrong();
        }if((userAnswer === 'd') && nbaTrivia[questionIndex].condition[3] === true) {
            right();
        } else if(userAnswer === 'd') {
            wrong();
        }
        answerShow();
       
    })
})
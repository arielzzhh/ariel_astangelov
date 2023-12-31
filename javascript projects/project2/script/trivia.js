export class Question {
    constructor(question, answer1, answer2, answer3, answer4, rightAnswer) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.rightAnswer = rightAnswer;
        this.solved = false;
    }



    showThisQuestion() {
        document.getElementById('question').textContent = this.question;
        document.getElementById('answer1').textContent = this.answer1;
        document.getElementById('answer2').textContent = this.answer2;
        document.getElementById('answer3').textContent = this.answer3;
        document.getElementById('answer4').textContent = this.answer4;
    }





}


let currentRightAnswer;
let points = 0;
let lifes = 5;
let Highscore = 0;

let olderHighScore = localStorage.getItem('highScore');




document.getElementById('amountsOfLifes').textContent = 'lifes :' + lifes;
document.getElementById('amountsOfPoints').textContent = 'points' + points;
document.getElementById('Highscore').textContent = 'High-score :' + Highscore;



function upLoadsPoint() {
    points++;
    document.getElementById('amountsOfPoints').textContent = 'points :' + points;
    document.getElementById('amountsOfLifes').textContent = 'lifes :' + lifes;
    document.getElementById('Highscore').textContent = 'High-score :' + Highscore;
}






const kitchenQuestion1 = new Question("What is the main ingredient in guacamole?", "Avocado", "Tomato", "Onion", "Garlic", 1);  // Right answer is "Avocado"
const kitchenQuestion2 = new Question("How do you make an omelette?", "Whisk eggs and cook in a pan", "Bake in the oven", "Microwave it", "Boil the eggs", 1);  //
const kitchenQuestion3 = new Question("What is the primary ingredient in sushi rolls?", "Rice", "Seaweed", "Fish", "Avocado", 4);  // Right answer is "Avocado"
const kitchenQuestion4 = new Question("Which spice is known as the 'queen of spices'?", "Cinnamon", "Turmeric", "Cardamom", "Cloves", 3);  // Right answer is 
const kitchenQuestion5 = new Question("What is the traditional base for pesto sauce?", "Basil", "Spinach", "Parsley", "Coriander", 1);  // Right answer is "Basil"
// History Questions
const historyQuestion1 = new Question("Who was the first president of the United States?", "George Washington", "John Adams", "Thomas Jefferson", "James Madison", 1);  // Right answer is "George Washington"
const historyQuestion2 = new Question("When did World War II end?", "1945", "1939", "1941", "1942", 1);  // Right answer is "1945"
const historyQuestion3 = new Question("What ancient civilization built the pyramids?", "Maya", "Inca", "Aztec", "Egyptian", 4);  // Right answer is "Egyptian"
const historyQuestion4 = new Question("Who wrote 'The Communist Manifesto'?", "Karl Marx", "Friedrich Engels", "Vladimir Lenin", "Joseph Stalin", 1);  // Right answer is "Karl Marx"
const historyQuestion5 = new Question("In which year did Christopher Columbus first reach the Americas?", "1492", "1500", "1600", "1700", 1);  // Right answer is "1492"
// Sports Questions
const sportsQuestion1 = new Question("Which sport uses a shuttlecock?", "Badminton", "Tennis", "Table Tennis", "Squash", 1);  // Right answer is "Badminton"
const sportsQuestion2 = new Question("What is the highest score possible in a perfect game of bowling?", "300", "200", "100", "400", 1);  // Right answer is "300"
const sportsQuestion3 = new Question("Who won the FIFA World Cup in 2018?", "France", "Croatia", "Brazil", "Germany", 1);  // Right answer is "France"
const sportsQuestion4 = new Question("What is the national sport of Japan?", "Sumo Wrestling", "Karate", "Judo", "Kendo", 1);  // Right answer is "Sumo Wrestling"
const sportsQuestion5 = new Question("Which country is famous for playing cricket?", "India", "Brazil", "Russia", "China", 1);  // Right answer is "India"

// Politics in Israel Questions
const politicsIsraelQuestion1 = new Question("Who is the current Prime Minister of Israel?", "Benjamin Netanyahu", "Naftali Bennett", "Yair Lapid", "Avigdor Lieberman", 2);  // Right answer is "Naftali Bennett"
const politicsIsraelQuestion2 = new Question("When was the State of Israel established?", "1948", "1917", "1967", "2000", 1);  // Right answer is "1948"
const politicsIsraelQuestion3 = new Question("What is the Knesset?", "Parliament of Israel", "Prime Minister's residence", "Military headquarters", "Presidential palace", 1);  // Right answer is "Parliament of Israel"
const politicsIsraelQuestion4 = new Question("Who was the first Prime Minister of Israel?", "David Ben-Gurion", "Golda Meir", "Menachem Begin", "Yitzhak Rabin", 1);  // Right answer is "David Ben-Gurion"
const politicsIsraelQuestion5 = new Question("What is the capital city of Israel?", "Jerusalem", "Tel Aviv", "Haifa", "Eilat", 1);  // Right answer is "Jerusalem"

// Music Questions
const musicQuestion1 = new Question("Who is known as the 'King of Pop'?", "Michael Jackson", "Elvis Presley", "Prince", "David Bowie", 1);  // Right answer is "Michael Jackson"
const musicQuestion2 = new Question("Which instrument does Yo-Yo Ma play?", "Cello", "Violin", "Piano", "Flute", 1);  // Right answer is "Cello"
const musicQuestion3 = new Question("Who wrote the song 'Imagine'?", "John Lennon", "Paul McCartney", "Bob Dylan", "Elton John", 1);  // Right answer is "John Lennon"
const musicQuestion4 = new Question("Which rock band released the album 'The Dark Side of the Moon'?", "Pink Floyd", "Led Zeppelin", "The Beatles", "The Rolling Stones", 1);  // Right answer is "Pink Floyd"
const musicQuestion5 = new Question("In which year did Elvis Presley pass away?", "1977", "1960", "1985", "1990", 1);  // Right answer is "1977"


export let questions = [kitchenQuestion1, kitchenQuestion2, kitchenQuestion3, kitchenQuestion4, kitchenQuestion5, historyQuestion1, historyQuestion2, historyQuestion3, historyQuestion4, historyQuestion5, sportsQuestion1, sportsQuestion2, sportsQuestion3, sportsQuestion4, sportsQuestion5, politicsIsraelQuestion1, politicsIsraelQuestion2, politicsIsraelQuestion3, politicsIsraelQuestion4, politicsIsraelQuestion5, musicQuestion1, musicQuestion2, musicQuestion3, musicQuestion4, musicQuestion5]






function returnRandomNumber() {
    return Math.floor(Math.random() * (questions.length))
}






function showNewQuestion() {
    let thisQuestion = questions[returnRandomNumber()];
    currentRightAnswer = thisQuestion.rightAnswer
    thisQuestion.showThisQuestion();
    console.log(currentRightAnswer)
}








document.getElementById('start').addEventListener('click', function () {
    document.getElementById('tutrial').style.display = 'none'
    document.getElementById('trivia').style.display = 'block'
    showNewQuestion();

})




function evaluateAnswer(answerdPress) {
    if (answerdPress == currentRightAnswer) {
        document.getElementById('answer' + answerdPress).style.backgroundColor = 'green'
        upLoadsPoint();
        document.getElementById('question').textContent = 'correct you get 1 point '
        document.getElementById('question').backgroundColor = 'green';
    }
    if (answerdPress != currentRightAnswer) {
        document.getElementById('answer' + answerdPress).style.backgroundColor = 'red'
        lifes--;
        document.getElementById('amountsOfLifes').textContent = 'lifes :' + lifes;
        document.getElementById('question').textContent = 'wrong '
        document.getElementById('question').backgroundColor = 'red';
        if (lifes == 0) {

            //funtion thats make you back to bettweeb
            document.getElementById('components').style.display = 'none'
            document.getElementById('trivia').style.display = 'none'
            document.getElementById('endScreen').style.display = 'block'





            document.getElementById('yourEndScore').textContent = 'your End Score this run is : :' + points;
            document.getElementById('yourHighScore').textContent = 'highScore :' + Highscore;
            console.log(points)
            if (Highscore <= points) { }
            Highscore = points;

            localStorage.setItem('highScore', Highscore);

        }

    }






    document.getElementById('answer1').style.visibility = 'hidden';
    document.getElementById('answer2').style.visibility = 'hidden';
    document.getElementById('answer3').style.visibility = 'hidden';
    document.getElementById('answer4').style.visibility = 'hidden';


    console.log(answerdPress);
    console.log(currentRightAnswer);












    document.getElementById('countinueButton').style.visibility = 'visible'

}















document.getElementById('answer1').addEventListener('click', () => {
    evaluateAnswer(1);
});

document.getElementById('answer2').addEventListener('click', () => {
    evaluateAnswer(2);
});

document.getElementById('answer3').addEventListener('click', () => {
    evaluateAnswer(3);
});

document.getElementById('answer4').addEventListener('click', () => {
    evaluateAnswer(4);
});




document.getElementById('countinueButton').addEventListener('click', function () {
    //next Questions

    document.getElementById('countinueButton').style.visibility = 'hidden'

    document.getElementById('answer1').style.backgroundColor = 'beige'
    document.getElementById('answer2').style.backgroundColor = 'beige'
    document.getElementById('answer3').style.backgroundColor = 'beige'
    document.getElementById('answer4').style.backgroundColor = 'beige'
    document.getElementById('answer1').style.visibility = 'visible';
    document.getElementById('answer2').style.visibility = 'visible';
    document.getElementById('answer3').style.visibility = 'visible';
    document.getElementById('answer4').style.visibility = 'visible';







    showNewQuestion();




})




document.getElementById('retakeTheExam').addEventListener('click', () => {
    points = 0;
    lifes = 5;

    document.getElementById('amountsOfLifes').textContent = 'lifes :' + lifes;
    document.getElementById('amountsOfPoints').textContent = 'points' + points;
    document.getElementById('Highscore').textContent = 'High-score :' + Highscore;

    document.getElementById('trivia').style.display = 'block';
    document.getElementById('components').style.display = 'block';
    document.getElementById('betweenScreen').style.display = 'none';

    document.getElementById('tutrial').style.display = 'none'
    showNewQuestion();


    document.getElementById('answer1').style.backgroundColor = 'beige'
    document.getElementById('answer2').style.backgroundColor = 'beige'
    document.getElementById('answer3').style.backgroundColor = 'beige'
    document.getElementById('answer4').style.backgroundColor = 'beige'
    document.getElementById('answer1').style.visibility = 'visible';
    document.getElementById('answer2').style.visibility = 'visible';
    document.getElementById('answer3').style.visibility = 'visible';
    document.getElementById('answer4').style.visibility = 'visible';











})
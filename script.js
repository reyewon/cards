// List of questions
const questions = [
    "Have you ever wanted to explore a kink or fetish with me but haven't yet?",
    "When was the last time you felt jealous in our ENM dynamic, and how did you handle it?",
    "What’s one thing you wish I understood better about your sexual or ENM needs?",
    "How do you balance your emotional connections with me and other partners?",
    "What’s the most vulnerable you’ve felt during a scene with me, and why?",
    "What’s a boundary we've set in ENM that you've found challenging to maintain?",
    "If you could rewrite one rule in our relationship, what would it be and why?",
    "Have you ever had a kink experience go wrong?",
    "What does aftercare usually look like for you?",
    "How has exploring ENM changed the way you view love and commitment between us?",
    "What’s something you've learned about yourself through sexual play with me?",
    "How do you manage the emotional highs and lows of engaging with me and multiple partners?",
    "When was the last time you felt deeply connected to me during a scene? What made it special?",
    "How do you feel when I get closer to someone else in our ENM dynamic?",
    "What’s one thing you wish people outside of our relationship understood about us?",
    "How do you establish trust when getting to know new partners?",
    "Have I ever pushed an emotional boundary in our relationship? How did we handle it?",
    "How do you navigate jealousy in our ENM relationship?",
    "How has our sexual dynamic helped you grow as a person?",
    "What’s one fear you have in exploring new kinks, or meeting new partners?",
    "What’s your favourite type of roleplay?",
    "Have you ever had a threesome or group play that didn’t go as planned? What happened?",
    "What’s the naughtiest location you’ve had sex, and would you do it again?",
    "If you could direct a scene for us to play out together for an audience, what would it involve?",
    "Have you ever fantasised about me with one of my other partners?",
    "What’s your favorite way to tease me until I beg?",
    "Would you like to explore power dynamics outside of a sexual environment with me?",
    "What’s the most intense impact play moment we’ve tried, and did you enjoy it?",
    "What would be the perfect safeword for us to use that also turns you on?",
    "Have you ever kept something from me in ENM to keep the peace?",
    "What’s something you've done in a kink scene that surprised even you?",
    "If you could play with anyone outside of our relationship, who would it be and why?",
    "What’s the longest you’ve gone without sex, and why?",
    "Do you prefer being watched by me during play or watching me? Explain why.",
    "What’s one kink you’d never try with me, even if I asked?",
    "If you could only have me as your partner for the next year, how would you feel?",
    "When was the last time you felt possessive of me, and how did you handle it?",
    "Have you ever experienced compersion when watching me with someone else? What was it like?",
    "What’s a scene or experience that left a lasting impact on your sexuality?",
    "What’s your favorite part of a power exchange dynamic with me?",
    "What’s the most daring position or restraint we’ve tried? Shall we do it again?",
    "How do you feel about using toys with me? Which one is your favourite?",
    "What’s the most extreme form of sensation play we’ve tried, and how did it feel?",
    "If we could take a kink vacation together, where would you want to go and what would we do?",
    "What’s the dirtiest thing you've whispered in my ear during a scene?",
    "Has there been a partner I've had, that you would have liked to have shared with me?",
    "Do you prefer when I am rough with you or when I’m gentle?",
    "Have you ever been involved in a taboo scenario? What was it, and did it turn you on?",
    "If we could bring a trans celebrity into our dynamic for one night, who would it be and why?",
    "What’s the one kink that you think best defines our sexual relationship?",
    "Have you ever tried double penetration (or want to), and how was it?",
    "What’s your biggest turn-on if you watch me with someone else?",
    "Would you prefer for me to punish you for bad behavior or reward you for being good?",
    "What’s one fantasy we’ve fulfilled that you wish we could experience for the first time again?",
    "How do you feel about breath play with me, and have we tried it?",
    "What non-sexual act turns you on the most when we’re in a kink scene?",
    "If you had to wear a collar in public for me, how would it make you feel?",
    "What’s a limit you thought you had, but discovered you enjoy when I pushed it?",
    "What’s your favourite spot for me to kiss, lick, or tease?",
    "Have we ever been caught in the act by someone? How did you react?",
    "What’s the most dominant thing you’ve done to me during a scene?",
    "What’s your favourite form of foreplay with me?",
    "If we could roleplay as any fictional characters from movies, books or TV, who would we be and why?",
    "Would you ever use food in a scene with me?",
    "What’s your favourite part of my body to tease, and why?",
    "Do you prefer when I restrain you with ropes, cuffs, or something else?",
    "Have you ever gotten off to anything I've created with someone else?",
    "What’s the naughtiest fantasy we’ve yet to act out?",
    "What’s a kink you thought you’d never try with me but ended up loving?",
    "Do you prefer solo play or group play with me, and why?",
    "How often do you experience sub-drop or dom-drop after a scene with me?",
    "What was the moment you realised we'd be good in this type of dynamic together?",
    "If you could change one thing about our current dynamic, what would it be?",
    "When was the last time you pushed a boundary with me, and how did it feel afterward?",
    "What’s your biggest fear when it comes to exploring kink or ENM dynamics with me?",
    "What’s a desire you've kept from everyone that you’re nervous to share?",
    "Have we ever experimented with temperature play? How did it feel for you?",
    "What’s your favourite kind of outfit to wear when we play?",
    "Have we ever experimented with extreme pain play? What’s your favorite type?",
    "Do you prefer silent obedience or verbal interaction with me during a scene?",
    "What’s one piece of equipment you’ve never used with me but would love to try?",
    "Is there a phrase I could say that would instantly turn you on?",
    "What’s your favourite type of edging play with me, and how long do you think you could last?",
    "Have we ever tried sensory deprivation (e.g., blindfolds)? How did it feel for you?",
    "Do you prefer leather or latex, and why?",
    "Which would be your choice of roleplay for us: teacher/student, patient/nurse, or jailer/inmate?",
    "Which sexual activity are any future partners totally not ready for from me?",
    "What’s the kinkiest request you’ve ever received?",
    "Would you rather be made to orgasm on command or be denied by me completely for a night?",
    "What’s the most challenging position I’ve ever restrained you in?",
    "How did you feel when you first saw me naked?",
    "If you could only indulge in oral, vaginal or anal sex for the rest of your life, which would it be?",
    "What’s your favourite name to call me during a scene?",
    "If we could star in a BDSM-themed movie or show, what would it be called?",
    "What’s the most intense form of humiliation you've experienced and enjoyed?",
    "How do you feel about sharing my body with someone else during a group play session?",
    "What’s your favourite way for us to explore anal play, and why?",
    "How do you feel when you see me playing with someone else at an event?",
    "Would you want us to explore group play more often? Why or why not?",
    "How would you feel about us participating in a public kink scene with an audience at an event?",
    "What would be your biggest turn-on about seeing me with multiple people?",
    "What boundaries would you want to set for us at a public kink or sex event?",
    "Have you ever been nervous to engage in public play with me? What made you feel that way?",
    "What role do you see yourself taking in a group scene? Dominant, submissive, or switch?",
    "Would it excite you to watch me being dominated by someone in a public or group setting?",
    "How do you feel about the idea of us playing completely separately with others at events or parties?",
    "Is there anyone we’ve engaged with in the past that you’d like to invite for a group session?",
    "How would you feel if I organised a private session with someone else and invited you to watch?",
    "How would you feel about us performing a kink demonstration together at a public event?",
    "Pick two celebrities, one male and one female, to join us for a hot and steamy evening together",
    "Would you describe me as a good kisser? Just good, or great?",
    "If we played separately at an event, how would you want us to reconnect afterward?",
    "Do you want me to send you pics and videos from scenes with other people?"

];


let currentPlayer = 1;  // To track whose turn it is
let player1Name = "Player 1";
let player2Name = "Player 2";
let currentIndex = 0;  // To keep track of the current question index
let currentForfeitIndex = 0;  // To keep track of the current forfeit index

// List of forfeits
const forfeits = [
    "You must head to the bathroom, take a naughty photo and send it to the other player",
    "You must remove one item of clothing",
    "You must kiss the other player's neck for 10 seconds",
    "You must take 5 spanks",
    "You must let the other player restrain you in some way for 5 minutes",
    "You must refer to the other player as Daddy for the rest of the game",
    "You must choose someone else to message, telling them you just masturbated thinking of them",
    "You must remove two items of clothing",
    "You must be in a doggy receiving position for the next 4 questions",
    "You must down your drink. If you don't have one, the other player can make you one.",
    "You must slide a hand into the other person's pants, and have a good feel for 10 seconds",
    "You must allow the other player to call you 'slut' for the remainder of the game",
    "You must perform your best slut drop",
    "You must enthusiastically mime what you most enjoy doing with/to your partner's private parts",
    "You must let your partner go and choose a sex toy to use on you for at least 20 seconds",
    "You must post to a social media of your choice, saying how needy you feel tonight, with a devil emoji"
    // Add more forfeits here...
];

// Function to shuffle an array (used for both questions and forfeits)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get the next question without repeating until all are used
function getNextQuestion() {
    if (currentIndex >= questions.length) {
        shuffle(questions);  // Reshuffle questions when all are used
        currentIndex = 0;
    }
    return questions[currentIndex++];
}

// Function to get the next forfeit without repeating until all are used
function getNextForfeit() {
    if (currentForfeitIndex >= forfeits.length) {
        shuffle(forfeits);  // Reshuffle forfeits when all are used
        currentForfeitIndex = 0;
    }
    return forfeits[currentForfeitIndex++];
}

// Function to update the turn indicator
function updateTurnIndicator() {
    const turnIndicator = document.getElementById('turnIndicator');
    if (currentPlayer === 1) {
        turnIndicator.textContent = `${player1Name} asks ${player2Name}`;
        currentPlayer = 2;  // Switch to player 2
    } else {
        turnIndicator.textContent = `${player2Name} asks ${player1Name}`;
        currentPlayer = 1;  // Switch back to player 1
    }
}

// Start the game after players enter their names
document.getElementById('startGameButton').addEventListener('click', function() {
    // Get player names from input fields
    player1Name = document.getElementById('player1').value || "Player 1";
    player2Name = document.getElementById('player2').value || "Player 2";

    // Hide the name input form and show the game container
    document.getElementById('nameFormContainer').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';

    // Set the initial turn indicator
    updateTurnIndicator();

    // Shuffle the questions and forfeits, and display the first question
    shuffle(questions);
    shuffle(forfeits);
    const questionCard = document.getElementById('questionCard');
    questionCard.textContent = getNextQuestion();
});

// Handle the "Next" button click to show the next question
document.getElementById('nextButton').addEventListener('click', function() {
    const questionCard = document.getElementById('questionCard');
    const forfeitCard = document.getElementById('forfeitCard');
    questionCard.textContent = getNextQuestion();
    updateTurnIndicator();
    forfeitCard.style.display = 'none';  // Hide the forfeit area when moving to the next question
});

// Handle the "Forfeit" button click to show a forfeit
document.getElementById('forfeitButton').addEventListener('click', function() {
    const forfeitCard = document.getElementById('forfeitCard');
    forfeitCard.textContent = getNextForfeit();
    forfeitCard.style.display = 'block';  // Show the forfeit area
});

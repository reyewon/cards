// List of questions
const questions = [
    "Have you ever wanted to explore a kink or fetish with me but haven't yet?",
    "When was the last time you felt jealous in our ENM dynamic, and how did you handle it?",
    "What’s one thing you wish I understood better about your kink or ENM needs?",
    "How do you balance your emotional connections with me and other partners?",
    "What’s the most vulnerable you’ve felt during a scene with me, and why?",
    "What’s a boundary you've set in ENM that you've found challenging to maintain with me?",
    "If you could rewrite one rule in our relationship, what would it be and why?",
    "Have you ever had a kink experience with me go wrong? How did we recover from it?",
    "What does aftercare look like for you, and why do you think it's important for us?",
    "How has exploring ENM changed the way you view love and commitment between us?",
    "What’s something you've learned about yourself through practicing kink with me?",
    "How do you manage the emotional highs and lows of engaging with me and multiple partners?",
    "When was the last time you felt deeply connected to me during a scene? What made it special?",
    "How do you feel when I get closer to someone else in our ENM dynamic?",
    "What’s one thing you wish people outside of our relationship understood about us?",
    "How do you establish trust when exploring new dynamics or scenes with me?",
    "Have you ever pushed an emotional boundary in our relationship? How did we handle it?",
    "How do you navigate jealousy in our ENM relationship?",
    "How has kink helped you grow as a person, both inside and outside of our relationship?",
    "What’s one fear you have in exploring new kinks or partners with me?",
    "What’s your favorite type of roleplay with me, and why?",
    "Have you ever had a threesome or group play with me that didn’t go as planned? What happened?",
    "What’s the naughtiest location we’ve had sex, and would you do it again?",
    "If you could direct a scene for us to play out together, what would it involve?",
    "Would you rather tie me up or be tied up by me? Why?",
    "Have you ever fantasized about me with one of my other partners?",
    "What’s your favorite way to tease me until I beg?",
    "Have you ever roleplayed as my submissive or dominant outside of a scene? How did it feel?",
    "What’s the most intense impact play we’ve tried, and did you enjoy it?",
    "What would be the perfect safeword for us to use that turns you on?",
    "Have you ever kept something from me in ENM to keep the peace?",
    "What’s something you've done in a kink scene with me that surprised even you?",
    "If you could play with anyone outside of our relationship, who would it be and why?",
    "What’s the longest you’ve gone without sex with me, and why?",
    "Do you prefer being watched by me during play or watching me? Explain why.",
    "What’s one kink you’d never try with me, even if I asked?",
    "If you could only have me as your primary partner for the next year, how would you feel?",
    "When was the last time you felt possessive of me, and how did you handle it?",
    "Have you ever experienced compersion when watching me with someone else? What was it like?",
    "What’s a scene or experience with me that left a lasting impact on your sexuality?",
    "What’s your favorite part of a power exchange dynamic with me?",
    "How do you feel when you’re in a submissive headspace versus a dominant one with me?",
    "What’s the most daring position or restraint we’ve tried?",
    "How do you feel about using toys with me? Which one is your favorite?",
    "What’s the most extreme form of sensation play we’ve tried, and how did it feel?",
    "If we could take a kink vacation together, where would you want to go and what would we do?",
    "What’s the dirtiest thing you've whispered in my ear during a scene?",
    "How did it feel when we shared one of our partners together?",
    "Do you prefer when I am rough with you or when I’m gentle?",
    "Have you ever roleplayed a taboo scenario with me? What was it, and did it turn you on?",
    "If we could bring a celebrity into our dynamic for one night, who would it be and why?",
    "What’s the one kink that you think best defines our sexual relationship?",
    "Have you ever tried double penetration with me (or want to), and how was it?",
    "What’s your biggest turn-on when you watch me with someone else?",
    "Would you prefer for me to punish you for bad behavior or reward you for being good?",
    "What’s one fantasy we’ve fulfilled that you wish we could experience for the first time again?",
    "How do you feel about breath play with me, and have we tried it?",
    "What non-sexual act turns you on the most when we’re in a kink scene?",
    "If you had to wear a collar in front of me, how would it make you feel?",
    "What’s a limit you thought you had but discovered you enjoy when I pushed it?",
    "What’s your favorite spot for me to kiss, lick, or tease?",
    "Would you rather receive or give a spanking from/to me?",
    "Have we ever been caught in the act by someone? How did you react?",
    "What’s the most dominant thing you’ve done to me during a scene?",
    "What’s your favorite form of foreplay with me during kink sessions?",
    "If we could roleplay as any fictional characters, who would we be and why?",
    "Have you ever used food in a scene with me? What was it like?",
    "What’s your favorite part of my body to tease, and why?",
    "Do you prefer when I restrain you with ropes, cuffs, or something else?",
    "Have you ever gotten off to anything I've created with someone else?",
    "What’s the naughtiest fantasy we’ve yet to act out?",
    "When was the last time you kept your jealousy of me with another person to yourself, and why?",
    "What’s one rule or boundary in our ENM dynamic that you struggle to follow?",
    "What’s a kink you thought you’d never try with me but ended up loving?",
    "Do you prefer solo play or group play with me, and why?",
    "How often do you experience sub-drop or dom-drop after a scene with me?",
    "What’s the most intimate conversation we’ve had while in a scene?",
    "If you could change one thing about our current dynamic, what would it be?",
    "When was the last time you pushed a boundary with me, and how did it feel afterward?",
    "What’s your biggest fear when it comes to exploring kink or ENM dynamics with me?",
    "What’s a desire you've kept from me that you’re nervous to share?",
    "Have we ever experimented with temperature play? How did it feel for you?",
    "What’s your favorite kind of lingerie or outfit to wear when we play?",
    "Have we ever experimented with pain play? What’s your favorite type of pain with me?",
    "Do you prefer silent obedience or verbal interaction with me during a scene?",
    "What’s one piece of kink equipment you’ve never used with me but would love to try?",
    "How does it feel when I give you a command versus when you give me one?",
    "What’s your favorite type of edging play with me, and how long do you think you could last?",
    "Have we ever tried sensory deprivation (e.g., blindfolds)? How did it feel for you?",
    "Do you prefer leather or latex, and why?",
    "What’s your favorite scene dynamic for us: teacher/student, master/pet, or something else?",
    "What’s your favorite thing about watching me dominate someone else?",
    "What’s the kinkiest request you’ve ever received from me?",
    "Would you rather be made to orgasm on command or be denied by me completely for a night?",
    "What’s the most challenging position I’ve ever restrained you in?",
    "How did you feel when you roleplayed as my slave or owner? (If ever)",
    "If you could only indulge in oral, vaginal or anal sex for the rest of your life, which would it be?",
    "What’s your favorite type of dirty talk to give or receive from me during a scene?",
    "If we could be part of a BDSM-themed movie or show, which roles would we play?",
    "What’s the most intense form of humiliation play we’ve tried, or would you want to try it?",
    "How do you feel about sharing me with someone else during a group play session?",
    "What’s your favorite way for us to explore anal play, and why?",
    "How do you feel when you see me playing with someone else at a kink event?",
    "Would you want us to explore group play more often? Why or why not?",
    "What’s something you’d like to try with me in a group setting that we haven’t done yet?",
    "Have you ever fantasized about us attending a sex party together? What would that look like?",
    "How would you feel about us participating in a public kink scene at an event?",
    "What would be your biggest turn-on about seeing me with multiple people?",
    "Do you enjoy watching me play with others at parties or events? Why or why not?",
    "What boundaries would you want to set for us at a public kink or sex event?",
    "Have you ever been nervous to engage in public play with me? What made you feel that way?",
    "What role do you see yourself taking in a group scene? Dominant, submissive, or switch?",
    "Would it excite you to watch me being dominated by someone else in a public or group setting?",
    "How do you feel about the idea of us playing separately with others at events or parties?",
    "Is there anyone we’ve played with in the past that you’d like to invite for another group session?",
    "How would you feel if I organized a private session with someone else and invited you to watch?",
    "How would you feel about us performing a kink demo together at a public event?",
    "Pick two celebrities, one male and one female, to join us for a hot and steamy evening together",

    "If we played separately at an event, how would you want us to reconnect afterward?"
];


let currentPlayer = 1;  // To track whose turn it is
let player1Name = "Player 1";
let player2Name = "Player 2";
let currentIndex = 0;  // To keep track of the current question index
let currentForfeitIndex = 0;  // To keep track of the current forfeit index

// List of forfeits
const forfeits = [
    "Player 1 must take a drink.",
    "Player 2 must remove an item of clothing.",
    "Player 1 must kiss Player 2's neck.",
    "Player 2 must do 10 push-ups."
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

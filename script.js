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
    "Name a sexual activity that someone else does notably better than I do",
    "Do you have an ex partner that you fantastise about playing with again?",
    "In what ways do I need to work on my foreplay game?",
    "How would you rate the most recent play we had out of 10?",
    "How would you rate the most recent play you had with someone else, out of 10?",
    "In your opinion, which is more important? Length or girth? (Can be for a toy or penis)",
    "Which every day outfit do you find me most attractive in?",
    "Do you want me to send you pics and videos from scenes with other people?",
    "What household item would you least want to be tied up with, and why?",
    "If our sex life was a cocktail, what ingredients would it have?",
    "What ridiculous safe word would you actually use in an emergency?",
    "What's the worst possible music to have sex to?",
    "If you had to explain our dynamic using only emojis, which would you choose?",
    "What cartoon character would be the worst third wheel?",
    "What's the most unsexy thing you've done immediately after sex?",
    "If we made a sex tape, what ridiculous blooper would definitely be in it?",
    "What completely non-sexual skill do you have that's weirdly attractive?",
    "What's your spirit animal during aftercare?",
    "What terrible pickup line actually worked on you?",
    "What's the worst possible tattoo placement for an ex's name?",
    "If our bed had a Yelp review from previous partners, what would it say?",
    "What mundane task would you make a sub do as punishment?",
    "What's the worst food to eat right before a makeout session?",
    "If our relationship had a theme song for playtime, what would it be?",
    "What ridiculous alias would you use at a sex club?",
    "What's the worst possible gift from a new play partner?",
    "If you had to use a children's toy in a scene, which would you choose?",
    "What completely innocent phrase makes you blush now?",
    "What's the most embarrassing thing that's happened during aftercare?",
    "If we opened a kink B&B, what would our specialty service be?",
    "What terrible movie deserves a BDSM-themed remake?",
    "What normal body part feels weirdly taboo to you?",
    "What's the worst possible time to get a booty call text?",
    "If you had to explain polyamory to a Victorian ghost, how would you start?",
    "What completely non-sexual item have you fantasized about using in bed?",
    "What childhood game would make the kinkiest drinking game?",
    "If our relationship was a Tinder bio, what emojis would we need?",
    "What's the worst possible pet name for a Dom?",
    "If you had to wear one outfit to every play party, what would it be?",
    "What normal household sound turns you on unexpectedly?",
    "What ridiculous rule would you add to our dynamic for April Fools?",
    "If we made a kinky board game, what's the most chaotic rule?",
    "What's the worst possible food to incorporate into sensation play?",
    "If our sex tape got mixed up with a family vacation video, who would be most shocked?",
    "What completely innocent habit drives you wild when I do it?",
    "If you had to use a shampoo bottle as a toy, which brand would you trust?",
    "What's the worst possible song to strip tease to?",
    "If we hosted a kink workshop, what ridiculous skill would we teach?",
    "What normal phrase takes on a dirty meaning in our relationship?",
    "If you had to explain aftercare using only office supplies?",
    "What's the worst possible celebrity to walk in on us?",
    "If our dynamic was a pizza topping combination, what would it be?",
    "What completely non-sexual app deserves a XXX version?",
    "If we opened a kinky food truck, what would our special be called?",
    "Describe in detail how you'd want me to watch you service another partner",
    "What's your ultimate free-use fantasy scenario involving me and someone else?",
    "How would you want me to mark you before sending you to play with someone else?",
    "Describe your ideal scenario of being shared at a kink event - who watches? Who participates?",
    "What's the most intense CNC (consensual non-consent) scenario you've fantasized about?",
    "How would you feel about us livestreaming our play session?",
    "How should I punish you if you cum without permission while with someone else?",
    "What's the most explicit photo/video you'd let me take to share with others?",
    "How would you want me to reclaim you after watching you play with another",
    "What's the most extreme public play you'd consent to if guaranteed privacy?",
    "How would you feel about me negotiating your limits with a new play partner?",
    "Describe in detail how you'd want me to pimp you out or big you up to others for an evening",
    "What's your ultimate orgasm torture scenario? Edging duration? Overstim methods?",
    "How should we memorialize your best kink moments? Tattoos? Photo wall? Trophy case?",
    "Which previous partner had the most memorable oral technique and what made it special?",
    "What's something you learned from a past lover that you now use in our play?",
    "Describe the most skilled handjob/fingering technique you've ever received from someone else",
    "Which ex had the best stamina and how did that impact your sessions?",
    "What's the most impressive physical attribute a past partner had that you still think about?",
    "Which former flame had the dirtiest mouth during sex? Describe their best line",
    "What's one move from a previous partner's repertoire you wish I'd adopt?",
    "Who gave you your most intense orgasm before me, and what were they doing?",
    "Describe the most creative use of furniture you've experienced with someone else",
    "Which past partner had the best aftercare routine and what made it exceptional?",
    "If you could choose one real person (not a celebrity) to watch me have sex with, who would it be?"

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
    "You must do a mating ritual dance for your partner",
    "You must seductively eat something phallic shaped. Bonus points if you put on Marvin Gaye's 'Let's Get It On' in the background",
    "You must show your partner the latest porn video you watched",
    "You must discuss 'why ducks are better than us' for 30 seconds",
    "You must message game creator Rysta (linked below) to let him know you're playing this game",
    "You must lick your partner's elbow or knee (your choice) until they answer their next question",
    "Your partner has 10 seconds to choose any forfeit for you",
    "You must act out your favourite porn genre in a charades style for your partner to guess",
    "Choose someone to message that has a partner, and tell them you think their partner is attractive",
    "Tease your own bare nipples and say 'These make milk like moo moo cows'",
    "You must post to a social media of your choice, saying how needy you feel tonight, with a devil emoji",
    "Send a flirty voice note to the 4th person in your Insta DMs",
    "Wear a vibrating toy for the next 3 questions",
    "Let your partner choose your underwear for tomorrow",
    "Write your partner's name on your body in marker",
    "Do 5 minutes of service-oriented tasks (their choice)",
    "Let your partner decide a new dating profile headline for you",
    "Practice your best 'good boy/girl' voice for 1 minute",
    "Demonstrate your favourite restraint technique",
    "Let your partner attach clothespins or similar to 5 body parts",
    "Find something food-based and turn it sexual"

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

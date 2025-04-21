// --- Game State Variables ---
let currentPlayer = 1; // 1 or 2
let player1Name = "Player 1";
let player2Name = "Player 2";
let player1Role = "switch"; // Default role
let player2Role = "switch"; // Default role

// --- DOM Elements ---
const nameFormContainer = document.getElementById('nameFormContainer');
const gameContainer = document.getElementById('gameContainer');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const player1RoleSelect = document.getElementById('player1Role');
const player2RoleSelect = document.getElementById('player2Role');
const startGameButton = document.getElementById('startGameButton');
const turnIndicator = document.getElementById('turnIndicator');
const questionCard = document.getElementById('questionCard');
const forfeitCard = document.getElementById('forfeitCard');
const nextButton = document.getElementById('nextButton');
const forfeitButton = document.getElementById('forfeitButton');
const homeLogoLink = document.getElementById('homeLogoLink'); // Added Home Logo Link

// --- localStorage Keys ---
const USED_QUESTIONS_KEY = 'kinkAndTellUsedQuestions_v2';
const USED_FORFEITS_KEY = 'kinkAndTellUsedForfeits';

// --- Content Arrays ---

// Questions now as objects with 'text' and 'type'
const questions = [
    // --- Neutral Questions (Suitable for most dynamics) ---
    { text: "Have you ever wanted to explore a kink or fetish with me but haven't yet?", type: "neutral" }, //
    { text: "When was the last time you felt jealous in our ENM dynamic, and how did you handle it?", type: "neutral" }, //
    { text: "What’s one thing you wish I understood better about your sexual or ENM needs?", type: "neutral" }, //
    { text: "How do you balance your emotional connections with me and other partners?", type: "neutral" }, //
    { text: "Have you ever had a kink experience go wrong?", type: "neutral" }, //
    { text: "How has exploring ENM changed the way you view love and commitment between us?", type: "neutral" }, //
    { text: "What’s something you've learned about yourself through sexual play with me?", type: "neutral" }, //
    { text: "How do you manage the emotional highs and lows of engaging with me and multiple partners?", type: "neutral" }, //
    { text: "How do you feel when I get closer to someone else in our ENM dynamic?", type: "neutral" }, //
    { text: "What’s one thing you wish people outside of our relationship understood about us?", type: "neutral" }, //
    { text: "How do you establish trust when getting to know new partners?", type: "neutral" }, //
    { text: "Have I ever pushed an emotional boundary in our relationship? How did we handle it?", type: "neutral" }, //
    { text: "How do you navigate jealousy in our ENM relationship?", type: "neutral" }, //
    { text: "How has our sexual dynamic helped you grow as a person?", type: "neutral" }, //
    { text: "What’s one fear you have in exploring new kinks, or meeting new partners?", type: "neutral" }, //
    { text: "What’s your favourite type of roleplay?", type: "neutral" }, //
    { text: "Have you ever had a threesome or group play that didn’t go as planned? What happened?", type: "neutral" }, //
    { text: "What’s the naughtiest location you’ve had sex, and would you do it again?", type: "neutral" }, //
    { text: "Have you ever fantasised about me with one of my other partners?", type: "neutral" }, //
    { text: "Have you ever kept something from me in ENM to keep the peace?", type: "neutral" }, //
    { text: "What’s something you've done in a kink scene that surprised even you?", type: "neutral" }, //
    { text: "If you could play with anyone outside of our relationship, who would it be and why?", type: "neutral" }, //
    { text: "What’s the longest you’ve gone without sex, and why?", type: "neutral" }, //
    { text: "What’s one kink you’d never try with me, even if I asked?", type: "neutral" }, //
    { text: "If you could only have me as your partner for the next year, how would you feel?", type: "neutral" }, //
    { text: "Have you ever experienced compersion when watching me with someone else? What was it like?", type: "neutral" }, //
    { text: "What’s a scene or experience that left a lasting impact on your sexuality?", type: "neutral" }, //
    { text: "How do you feel about using toys with me? Which one is your favourite?", type: "neutral" }, //
    { text: "What’s the most extreme form of sensation play we’ve tried, and how did it feel?", type: "neutral" }, //
    { text: "If we could take a kink vacation together, where would you want to go and what would we do?", type: "neutral" }, //
    { text: "Has there been a partner I've had, that you would have liked to have shared with me?", type: "neutral" }, //
    { text: "Have you ever been involved in a taboo scenario? What was it, and did it turn you on?", type: "neutral" }, //
    { text: "If we could bring a trans celebrity into our dynamic for one night, who would it be and why?", type: "neutral" }, //
    { text: "What’s the one kink that you think best defines our sexual relationship?", type: "neutral" }, //
    { text: "Have you ever tried double penetration (or want to), and how was it?", type: "neutral" }, //
    { text: "What’s your biggest turn-on if you watch me with someone else?", type: "neutral" }, //
    { text: "What’s one fantasy we’ve fulfilled that you wish we could experience for the first time again?", type: "neutral" }, //
    { text: "How do you feel about breath play with me, and have we tried it?", type: "neutral" }, //
    { text: "What’s your favourite spot for me to kiss, lick, or tease?", type: "neutral" }, //
    { text: "Have we ever been caught in the act by someone? How did you react?", type: "neutral" }, //
    { text: "What’s your favourite form of foreplay with me?", type: "neutral" }, //
    { text: "If we could roleplay as any fictional characters from movies, books or TV, who would we be and why?", type: "neutral" }, //
    { text: "Would you ever use food in a scene with me?", type: "neutral" }, //
    { text: "What’s your favourite part of my body to tease, and why?", type: "neutral" }, //
    { text: "Have you ever gotten off to anything I've created with someone else?", type: "neutral" }, //
    { text: "What’s the naughtiest fantasy we’ve yet to act out?", type: "neutral" }, //
    { text: "What’s a kink you thought you’d never try with me but ended up loving?", type: "neutral" }, //
    { text: "Do you prefer solo play or group play with me, and why?", type: "neutral" }, //
    { text: "What was the moment you realised we'd be good in this type of dynamic together?", type: "neutral" }, //
    { text: "If you could change one thing about our current dynamic, what would it be?", type: "neutral" }, //
    { text: "What’s your biggest fear when it comes to exploring kink or ENM dynamics with me?", type: "neutral" }, //
    { text: "What’s a desire you've kept from everyone that you’re nervous to share?", type: "neutral" }, //
    { text: "Have we ever experimented with temperature play? How did it feel for you?", type: "neutral" }, //
    { text: "What’s your favourite kind of outfit to wear when we play?", type: "neutral" }, //
    { text: "Have we ever experimented with extreme pain play? What’s your favorite type?", type: "neutral" }, //
    { text: "What’s one piece of equipment you’ve never used with me but would love to try?", type: "neutral" }, //
    { text: "Have we ever tried sensory deprivation (e.g., blindfolds)? How did it feel for you?", type: "neutral" }, //
    { text: "Do you prefer leather or latex, and why?", type: "neutral" }, //
    { text: "Which would be your choice of roleplay for us: teacher/student, patient/nurse, or jailer/inmate?", type: "neutral" }, //
    { text: "Which sexual activity are any future partners totally not ready for from me?", type: "neutral" }, //
    { text: "What’s the kinkiest request you’ve ever received?", type: "neutral" }, //
    { text: "How did you feel when you first saw me naked?", type: "neutral" }, //
    { text: "If you could only indulge in oral, vaginal or anal sex for the rest of your life, which would it be?", type: "neutral" }, //
    { text: "If we could star in a BDSM-themed movie or show, what would it be called?", type: "neutral" }, //
    { text: "How do you feel about sharing my body with someone else during a group play session?", type: "neutral" }, //
    { text: "What’s your favourite way for us to explore anal play, and why?", type: "neutral" }, //
    { text: "How do you feel when you see me playing with someone else at an event?", type: "neutral" }, //
    { text: "Would you want us to explore group play more often? Why or why not?", type: "neutral" }, //
    { text: "How would you feel about us participating in a public kink scene with an audience at an event?", type: "neutral" }, //
    { text: "What would be your biggest turn-on about seeing me with multiple people?", type: "neutral" }, //
    { text: "What boundaries would you want to set for us at a public kink or sex event?", type: "neutral" }, //
    { text: "Have you ever been nervous to engage in public play with me? What made you feel that way?", type: "neutral" }, //
    { text: "How do you feel about the idea of us playing completely separately with others at events or parties?", type: "neutral" }, //
    { text: "Is there anyone we’ve engaged with in the past that you’d like to invite for a group session?", type: "neutral" }, //
    { text: "How would you feel if I organised a private session with someone else and invited you to watch?", type: "neutral" }, //
    { text: "How would you feel about us performing a kink demonstration together at a public event?", type: "neutral" }, //
    { text: "Pick two celebrities, one male and one female, to join us for a hot and steamy evening together", type: "neutral" }, //
    { text: "Would you describe me as a good kisser? Just good, or great?", type: "neutral" }, //
    { text: "If we played separately at an event, how would you want us to reconnect afterward?", type: "neutral" }, //
    { text: "Name a sexual activity that someone else does notably better than I do", type: "neutral" }, //
    { text: "Do you have an ex partner that you fantastise about playing with again?", type: "neutral" }, //
    { text: "In what ways do I need to work on my foreplay game?", type: "neutral" }, //
    { text: "How would you rate the most recent play we had out of 10?", type: "neutral" }, //
    { text: "How would you rate the most recent play you had with someone else, out of 10?", type: "neutral" }, //
    { text: "In your opinion, which is more important? Length or girth? (Can be for a toy or penis)", type: "neutral" }, //
    { text: "Which every day outfit do you find me most attractive in?", type: "neutral" }, //
    { text: "Do you want me to send you pics and videos from scenes with other people?", type: "neutral" }, //
    { text: "What household item would you least want to be tied up with, and why?", type: "neutral" }, //
    { text: "If our sex life was a cocktail, what ingredients would it have?", type: "neutral" }, //
    { text: "What ridiculous safe word would you actually use in an emergency?", type: "neutral" }, //
    { text: "What's the worst possible music to have sex to?", type: "neutral" }, //
    { text: "If you had to explain our dynamic using only emojis, which would you choose?", type: "neutral" }, //
    { text: "What cartoon character would be the worst third wheel?", type: "neutral" }, //
    { text: "What's the most unsexy thing you've done immediately after sex?", type: "neutral" }, //
    { text: "If we made a sex tape, what ridiculous blooper would definitely be in it?", type: "neutral" }, //
    { text: "What completely non-sexual skill do you have that's weirdly attractive?", type: "neutral" }, //
    { text: "What's your spirit animal during aftercare?", type: "neutral" }, //
    { text: "What terrible pickup line actually worked on you?", type: "neutral" }, //
    { text: "What's the worst possible tattoo placement for an ex's name?", type: "neutral" }, //
    { text: "If our bed had a Yelp review from previous partners, what would it say?", type: "neutral" }, //
    { text: "What's the worst food to eat right before a makeout session?", type: "neutral" }, //
    { text: "If our relationship had a theme song for playtime, what would it be?", type: "neutral" }, //
    { text: "What ridiculous alias would you use at a sex club?", type: "neutral" }, //
    { text: "What's the worst possible gift from a new play partner?", type: "neutral" }, //
    { text: "If you had to use a children's toy in a scene, which would you choose?", type: "neutral" }, //
    { text: "What completely innocent phrase makes you blush now?", type: "neutral" }, //
    { text: "What's the most embarrassing thing that's happened during aftercare?", type: "neutral" }, //
    { text: "If we opened a kink B&B, what would our specialty service be?", type: "neutral" }, //
    { text: "What terrible movie deserves a BDSM-themed remake?", type: "neutral" }, //
    { text: "What normal body part feels weirdly taboo to you?", type: "neutral" }, //
    { text: "What's the worst possible time to get a booty call text?", type: "neutral" }, //
    { text: "If you had to explain polyamory to a Victorian ghost, how would you start?", type: "neutral" }, //
    { text: "What completely non-sexual item have you fantasised about using in bed?", type: "neutral" }, //
    { text: "What childhood game would make the kinkiest drinking game?", type: "neutral" }, //
    { text: "If our relationship was a Tinder bio, what emojis would we need?", type: "neutral" }, //
    { text: "If you had to wear one outfit to every play party, what would it be?", type: "neutral" }, //
    { text: "What normal household sound turns you on unexpectedly?", type: "neutral" }, //
    { text: "What ridiculous rule would you add to our dynamic for April Fools?", type: "neutral" }, //
    { text: "If we made a kinky board game, what's the most chaotic rule?", type: "neutral" }, //
    { text: "What's the worst possible food to incorporate into sensation play?", type: "neutral" }, //
    { text: "If our sex tape got mixed up with a family vacation video, who would be most shocked?", type: "neutral" }, //
    { text: "What completely innocent habit drives you wild when I do it?", type: "neutral" }, //
    { text: "If you had to use a shampoo bottle as a toy, which brand would you trust?", type: "neutral" }, //
    { text: "What's the worst possible song to strip tease to?", type: "neutral" }, //
    { text: "If we hosted a kink workshop, what ridiculous skill would we teach?", type: "neutral" }, //
    { text: "What normal phrase takes on a dirty meaning in our relationship?", type: "neutral" }, //
    { text: "If you had to explain aftercare using only office supplies?", type: "neutral" }, //
    { text: "What's the worst possible celebrity to walk in on us?", type: "neutral" }, //
    { text: "If our dynamic was a pizza topping combination, what would it be?", type: "neutral" }, //
    { text: "What completely non-sexual app deserves a XXX version?", type: "neutral" }, //
    { text: "If we opened a kinky food truck, what would our special be called?", type: "neutral" }, //
    { text: "What's your ultimate free-use fantasy scenario involving me and someone else?", type: "neutral" }, //
    { text: "Describe your ideal scenario of being shared at a kink event - who watches? Who participates?", type: "neutral" }, //
    { text: "What's the most intense CNC (consensual non-consent) scenario you've fantasised about?", type: "neutral" }, //
    { text: "How would you feel about us livestreaming our play session?", type: "neutral" }, //
    { text: "What's the most explicit photo/video you'd let me take to share with others?", type: "neutral" }, //
    { text: "What's the most extreme public play you'd consent to if guaranteed privacy?", type: "neutral" }, //
    { text: "How would you feel about me negotiating your limits with a new play partner?", type: "neutral" }, //
    { text: "What's your ultimate orgasm torture scenario? Edging duration? Overstim methods?", type: "neutral" }, //
    { text: "How should we memorialise your best kink moments? Tattoos? Photo wall? Trophy case?", type: "neutral" }, //
    { text: "Which previous partner had the most memorable oral technique and what made it special?", type: "neutral" }, //
    { text: "What's something you learned from a past lover that you now use in our play?", type: "neutral" }, //
    { text: "Describe the most skilled handjob/fingering technique you've ever received from someone else", type: "neutral" }, //
    { text: "Which ex had the best stamina and how did that impact your sessions?", type: "neutral" }, //
    { text: "What's the most impressive physical attribute a past partner had that you still think about?", type: "neutral" }, //
    { text: "Which former flame had the dirtiest mouth during sex? Describe their best line", type: "neutral" }, //
    { text: "What's one move from a previous partner's repertoire you wish I'd adopt?", type: "neutral" }, //
    { text: "Who gave you your most intense orgasm before me, and what were they doing?", type: "neutral" }, //
    { text: "Describe the most creative use of furniture you've experienced with someone else", type: "neutral" }, //
    { text: "Which past partner had the best aftercare routine and what made it exceptional?", type: "neutral" }, //
    { text: "If you could choose one real person (not a celebrity) to watch me have sex with, who would it be?", type: "neutral" }, //
    { text: "What's a specific way you feel compersion for me when I'm with another partner?", type: "neutral" }, //
    { text: "Describe a time you felt 'new relationship energy' (NRE) with someone else. How did you navigate it with me?", type: "neutral" }, //
    { text: "What's one aspect of our ENM agreement you'd like to renegotiate or clarify?", type: "neutral" }, //
    { text: "How do you handle scheduling conflicts or time management between me and other partners?", type: "neutral" }, //
    { text: "What's your ideal level of communication about my other relationships? Too much detail? Not enough?", type: "neutral" }, //
    { text: "Describe a fantasy involving me, you, and one (or more) of your other partners.", type: "neutral" }, //
    { text: "What's the most challenging aspect of being my primary partner (if applicable) in an ENM structure?", type: "neutral" }, //
    { text: "How do you feel about fluid bonding or safer sex practices within our network?", type: "neutral" }, //
    { text: "What's a kink you're curious about but hesitant to bring up?", type: "neutral" }, //
    { text: "How do you differentiate between jealousy and envy in our dynamic?", type: "neutral" }, //
    { text: "If we were to introduce a new long-term partner into our dynamic, what qualities would be most important?", type: "neutral" }, //
    { text: "What's the most unexpected thing you've enjoyed about ENM?", type: "neutral" }, //
    { text: "How do you feel about discussing our ENM dynamic with friends or family?", type: "neutral" }, //
    { text: "Describe a time you felt particularly secure and loved within our non-monogamous relationship.", type: "neutral" }, //
    { text: "What's your favourite way to incorporate impact play (spanking, flogging, etc.)?", type: "neutral" }, //
    { text: "How do you feel about age play dynamics?", type: "neutral" }, //
    { text: "What's your opinion on incorporating elements of humiliation or degradation?", type: "neutral" }, //
    { text: "What's your favourite type of bondage? (Rope, cuffs, leather, tape, etc.)", type: "neutral" }, //
    { text: "How do you feel about medical play or scenes involving doctor/patient dynamics?", type: "neutral" }, //
    { text: "What's your stance on knife play or edge play involving sharp objects?", type: "neutral" }, //
    { text: "Describe a fantasy involving watersports (urophilia).", type: "neutral" }, //
    { text: "How do you feel about incorporating wax play into our scenes?", type: "neutral" }, //
    { text: "What's your interest level in pet play dynamics?", type: "neutral" }, //
    { text: "What's your favourite non-genital part of my body to worship or focus on?", type: "neutral" }, //
    { text: "How do you feel about incorporating electrostimulation (e-stim) toys?", type: "neutral" }, //
    { text: "What's a piece of kink gear you'd love for us to acquire?", type: "neutral" }, //
    { text: "How do you feel about incorporating costumes or specific uniforms into roleplay?", type: "neutral" }, //
    { text: "How do you communicate limits or safewords effectively during intense play?", type: "neutral" }, //
    { text: "How do you feel about incorporating elements of primal play?", type: "neutral" }, //
    { text: "What's your opinion on incorporating chastity devices?", type: "neutral" }, //
    { text: "Describe a fantasy involving public (but discreet) play.", type: "neutral" }, //
    { text: "How do you feel about incorporating elements of age regression or age progression?", type: "neutral" }, //
    { text: "What's your favourite way to use sensory deprivation (blindfolds, earplugs)?", type: "neutral" }, //
    { text: "Describe a scenario involving consensual non-consent (CNC) that intrigues you.", type: "neutral" }, //
    { text: "How do you feel about incorporating tickle torture?", type: "neutral" }, //
    { text: "What's a specific location (real or imagined) where you'd love to have a scene?", type: "neutral" }, //
    { text: "Describe your ideal BDSM dynamic: What roles? What rules? What goals?", type: "neutral" }, //
    { text: "How do you feel about incorporating food play (excluding standard aphrodisiacs)?", type: "neutral" }, //

     // --- Dom asks sub Questions (D_asks_S) ---
    { text: "What’s the most vulnerable you’ve felt during a scene with me, and why?", type: "D_asks_S" }, //
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "D_asks_S" }, //
    { text: "What’s the most intense impact play moment we’ve tried, and did you enjoy it?", type: "D_asks_S" }, //
    { text: "What would be the perfect safeword for us to use that also turns you on?", type: "D_asks_S" }, //
    { text: "Would you prefer for me to punish you for bad behavior or reward you for being good?", type: "D_asks_S" }, //
    { text: "What non-sexual act turns you on the most when we’re in a kink scene?", type: "D_asks_S" }, //
    { text: "If you had to wear a collar in public for me, how would it make you feel?", type: "D_asks_S" }, //
    { text: "What’s a limit you thought you had, but discovered you enjoy when I pushed it?", type: "D_asks_S" }, //
    { text: "Do you prefer when I restrain you with ropes, cuffs, or something else?", type: "D_asks_S" }, //
    { text: "How often do you experience sub-drop after a scene with me?", type: "D_asks_S" }, //
    { text: "Do you prefer silent obedience or verbal interaction with me during a scene?", type: "D_asks_S" }, //
    { text: "Is there a phrase I could say that would instantly turn you on?", type: "D_asks_S" }, //
    { text: "What’s your favourite type of edging play with me, and how long do you think you could last?", type: "D_asks_S" }, //
    { text: "Would you rather be made to orgasm on command or be denied by me completely for a night?", type: "D_asks_S" }, //
    { text: "What’s the most challenging position I’ve ever restrained you in?", type: "D_asks_S" }, //
    { text: "What’s the most intense form of humiliation you've experienced and enjoyed?", type: "D_asks_S" }, //
    { text: "Describe in detail how you'd want me to watch you service another partner", type: "D_asks_S" }, //
    { text: "How would you want me to mark you before sending you to play with someone else?", type: "D_asks_S" }, //
    { text: "How should I punish you if you cum without permission while with someone else?", type: "D_asks_S" }, //
    { text: "How would you want me to reclaim you after watching you play with another?", type: "D_asks_S" }, //
    { text: "Describe in detail how you'd want me to pimp you out or big you up to others for an evening.", type: "D_asks_S" }, //
    { text: "Describe a scenario where you'd enjoy being objectified (consensually).", type: "D_asks_S" }, //
    { text: "Describe a scenario involving forced orgasm or orgasm denial that excites you.", type: "D_asks_S" }, //
    { text: "What's a specific fear or limit you'd be willing to explore pushing, with careful negotiation?", type: "D_asks_S" }, //
    { text: "Describe a time you felt 'subspace'. What did it feel like?", type: "D_asks_S" }, //
    { text: "What's your favourite way to explore power dynamics through non-sexual tasks or service?", type: "D_asks_S" }, //
    { text: "Tell me about a time you felt truly owned or possessed by me. What did you enjoy about it?", type: "D_asks_S" }, //
    { text: "What kind of praise motivates you the most during a scene?", type: "D_asks_S" }, //
    { text: "How can I make you feel safer when we explore intense kinks?", type: "D_asks_S" }, //
    { text: "Describe your ideal servitude task.", type: "D_asks_S" }, //
    { text: "What's the threshold between challenging pain and a hard limit for you?", type: "D_asks_S" }, //

    // --- sub asks Dom Questions (S_asks_D) ---
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "S_asks_D" }, //
    { text: "What’s your favorite part of a power exchange dynamic with me?", type: "S_asks_D" }, //
    { text: "Do you prefer when I am rough with you or when I’m gentle?", type: "S_asks_D" }, //
    { text: "What’s the most dominant thing you’ve done to me during a scene?", type: "S_asks_D" }, //
    { text: "How often do you experience dom-drop after a scene with me?", type: "S_asks_D" }, //
    { text: "What’s the worst possible pet name for a Dom?", type: "S_asks_D" }, //
    { text: "What mundane task would you make a sub do as punishment?", type: "S_asks_D" }, //
    { text: "What role do you see yourself taking in a group scene? Dominant, submissive, or switch?", type: "S_asks_D" }, //
    { text: "What's a specific insecurity that ENM brings up for you, and how can I support you with it?", type: "S_asks_D" }, //
    { text: "Describe a time you felt 'domspace'. What did it feel like?", type: "S_asks_D" }, //
    { text: "What's your favourite type of verbal interaction during a scene (praise, degradation, commands, silence)?", type: "S_asks_D" }, //
    { text: "What qualities do you look for in a submissive partner?", type: "S_asks_D" }, //
    { text: "How do you prefer I communicate my limits or needs during a scene?", type: "S_asks_D" }, //
    { text: "What's one aspect of being dominant that you find challenging?", type: "S_asks_D" }, //
    { text: "Describe a time you felt particularly proud of my submission or service.", type: "S_asks_D" }, //
    { text: "What kind of feedback do you appreciate after a scene?", type: "S_asks_D" }, //
    { text: "Is there a particular type of scene or dynamic you'd like to explore more with me?", type: "S_asks_D" }, //
    { text: "What’s your favorite way to tease me until I beg?", type: "S_asks_D" }, //
    { text: "When was the last time you pushed a boundary with me, and how did it feel afterward?", type: "S_asks_D" }, //
    { text: "What’s your favourite name to call me during a scene?", type: "S_asks_D" }, //
    { text: "Would it excite you to watch me being dominated by someone in a public or group setting?", type: "S_asks_D" }, //
    { text: "What's one thing you wish I did more of during our kink encounters?", type: "S_asks_D" }, //
    // *** NEW S_asks_D Questions Start Here ***
    { text: "What signals or behaviors from me make you feel most powerful or in control?", type: "S_asks_D" }, //
    { text: "Are there any specific titles or ways you prefer to be addressed during scenes?", type: "S_asks_D" }, //
    { text: "What are your hard limits when you are in a dominant headspace?", type: "S_asks_D" }, //
    { text: "Is there a type of submission or obedience from me that particularly pleases you?", type: "S_asks_D" }, //
    { text: "What are your expectations for my behaviour outside of dedicated scene time?", type: "S_asks_D" }, //
    { text: "How do you prefer to initiate a scene or signal that you want to play?", type: "S_asks_D" }, //
    { text: "Is there a fantasy scenario where you are dominant that you'd like to explore?", type: "S_asks_D" }, //
    { text: "What does 'success' look like for you at the end of a scene where you've been dominant?", type: "S_asks_D" }, //
    { text: "How do you balance control with ensuring my pleasure and well-being during a scene?", type: "S_asks_D" }, //
    { text: "Are there any specific dominant figures (real or fictional) who inspire your style?", type: "S_asks_D" }, //
    { text: "What's something you appreciate about my submission that I might not be aware of?", type: "S_asks_D" }, //
    { text: "How important is verbal affirmation or praise *from* me *to* you during or after a scene?", type: "S_asks_D" }, //
    { text: "What's one rule you'd like to implement in our dynamic, even just temporarily?", type: "S_asks_D" }, //
    { text: "Is there anything you hesitate to ask for when you're dominant, fearing it might be 'too much'?", type: "S_asks_D" }, //
    { text: "How do you feel about negotiating scenes beforehand versus more spontaneous play?", type: "S_asks_D" } //
    // *** NEW S_asks_D Questions End Here ***
];

// Forfeits
const forfeits = [
    // --- Original Forfeits ---
    "You must head to the bathroom, take a naughty photo and send it to the other player", //
    "You must remove one item of clothing", //
    "You must kiss the other player's neck for 10 seconds", //
    "You must take 5 spanks", //
    "You must let the other player restrain you in some way for 5 minutes", //
    "You must refer to the other player as Daddy for the rest of the game", //
    "You must choose someone else to message, telling them you just masturbated thinking of them", //
    "You must remove two items of clothing", //
    "You must be in a doggy receiving position for the next 4 questions", //
    "You must down your drink. If you don't have one, the other player can make you one.", //
    "You must slide a hand into the other person's pants, and have a good feel for 10 seconds", //
    "You must allow the other player to call you 'slut' for the remainder of the game", //
    "You must perform your best slut drop", //
    "You must enthusiastically mime what you most enjoy doing with/to your partner's private parts", //
    "You must let your partner go and choose a sex toy to use on you for at least 20 seconds", //
    "You must do a mating ritual dance for your partner", //
    "You must seductively eat something phallic shaped. Bonus points if you put on Marvin Gaye's 'Let's Get It On' in the background", //
    "You must show your partner the latest porn video you watched", //
    "You must discuss 'why ducks are better than us' for 30 seconds", //
    "You must message game creator Rysta (linked below) to let him know you're playing this game", //
    "You must lick your partner's elbow or knee (your choice) until they answer their next question", //
    "Your partner has 10 seconds to choose any forfeit for you", //
    "You must act out your favourite porn genre in a charades style for your partner to guess", //
    "Choose someone to message that has a partner, and tell them you think their partner is attractive", //
    "Tease your own bare nipples and say 'These make milk like moo moo cows'", //
    "You must post to a social media of your choice, saying how needy you feel tonight, with a devil emoji", //
    "Send a flirty voice note to the 4th person in your Insta DMs", //
    "Wear a vibrating toy for the next 3 questions", //
    "Let your partner choose your underwear for tomorrow", //
    "Write your partner's name on your body in marker", //
    "Do 5 minutes of service-oriented tasks (their choice)", //
    "Let your partner decide a new dating profile headline for you", //
    "Practice your best 'good boy/girl' voice for 1 minute", //
    "Demonstrate your favourite restraint technique", //
    "Let your partner attach clothespins or similar to 5 body parts", //
    "Find something food-based and turn it sexual", //

    // --- New Forfeits ---
    "Give the other player a 60-second foot massage.", //
    "Blindfold yourself for the next two questions.", //
    "Let the other player write a temporary 'property of' mark on you (visible only to them).", //
    "Describe your partner's best physical feature in explicit detail.", //
    "Confess the last time you masturbated and what you thought about.", //
    "Let the other player choose a song for you to strip tease (partially or fully) to.", //
    "Whisper three dirty things you want to do to the other player.", //
    "Wear an ice cube somewhere sensitive until it melts.", //
    "Let the other player apply lipstick to you (regardless of gender) and wear it for 10 minutes.", //
    "Perform 10 push-ups or sit-ups while complimenting the other player.", //
    "Send a suggestive text to the other player right now.", //
    "Let the other player choose one part of your body to kiss for 30 seconds.", //
    "Gag yourself lightly (e.g., with a scarf) for the next question.", //
    "Kneel at the other player's feet until your next turn.", //
    "Let the other player drip candle wax (safely, from a low temp candle) on a non-sensitive part of your body.", //
    "Recite a nursery rhyme in your sexiest voice.", //
    "Let the other player lightly spank you 10 times with their hand or a chosen implement.", //
    "Describe your ideal threesome scenario involving the two of you and a specific type of person.", //
    "Swap one item of clothing with the other player for the next 15 minutes.", //
    "Let the other player tie one of your wrists to your ankle for 5 minutes.", //
    "Lick whipped cream (or similar) off a chosen part of the other player's body.", //
    "Give the other player full control of the TV remote/music for the next 30 minutes.", //
    "Confess a secret sexual fantasy you haven't shared before.", //
    "Let the other player put you in a collar (if available) for 10 minutes.", //
    "Massage the other player's shoulders for two minutes.", //
    "Answer the next question while holding a plank position.", //
    "Let the other player draw a silly (temporary) tattoo on you.", //
    "Make orgasm noises on command for 15 seconds.", //
    "Tell the other player exactly how you want them to touch you right now.", //
    "Let the other player choose a safe word for you to use (just for fun) for the next 5 minutes.", //
    "Blindfold the other player and feed them a small piece of food.", //
    "Confess the kinkiest thing you've ever searched for online.", //
    "Let the other player put clothespins on your nipples or earlobes (gently!) for one minute.", //
    "Do your best impression of the other player having an orgasm.", //
    "Write a short, kinky poem about the other player.", //
    "Let the other player tickle you for 30 seconds.", //
    "Praise the other player's dominance or submissiveness for 60 seconds.", //
    "Describe what you'd wear (or not wear) to seduce the other player.", //
    "Let the other player choose a spot on your body for you to lick.", //
    "Hold eye contact with the other player for 60 seconds without laughing.", //
    "Confess one thing that makes you feel insecure during sex.", //
    "Let the other player gently bite you somewhere.", //
    "Perform a 'service' for the other player (e.g., fetch a drink, adjust their cushion) while calling them 'Master'/'Mistress'/'Sir'/'Ma'am'.", //
    "Show the other player your 'O face'.", //
    "Let the other player choose a position for you to hold for 60 seconds.", //
    "Tell the other player a dirty joke.", //
    "Let the other player whisper instructions in your ear for the next minute, which you must follow.", //
    "Confess one rule you'd secretly love for the other player to impose on you.", //
    "Let the other player put you in light bondage (e.g., scarf around wrists) for the next question.", //
    "Describe the other player's smell in a sensual way." //
];


// --- Utility Functions (Keep your existing functions: getUsedIndices, saveUsedIndices, getNextUniqueForfeit, getNextUniqueQuestion) ---

/**
 * Safely retrieves an array of used indices from localStorage.
 * @param {string} key The localStorage key.
 * @returns {number[]} An array of used indices, or an empty array if none found or error occurs.
 */
function getUsedIndices(key) {
    try {
        const stored = localStorage.getItem(key);
        const parsed = stored ? JSON.parse(stored) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error("Error reading from localStorage:", e);
        return [];
    }
} //

/**
 * Safely saves an array of used indices to localStorage.
 * @param {string} key The localStorage key.
 * @param {number[]} indices The array of indices to save.
 */
function saveUsedIndices(key, indices) {
    try {
        if (!Array.isArray(indices)) {
            console.error("Attempted to save non-array to localStorage:", indices);
            return;
        }
        localStorage.setItem(key, JSON.stringify(indices));
    } catch (e) {
        console.error("Error writing to localStorage:", e);
    }
} //

/**
 * Gets the next unique forfeit, managing used indices via localStorage.
 * @returns {string} The text of the next unique forfeit.
 */
function getNextUniqueForfeit() {
    let usedIndices = getUsedIndices(USED_FORFEITS_KEY); //
    const totalItems = forfeits.length; //

    // Reset cycle if all items are used //
    if (usedIndices.length >= totalItems && totalItems > 0) { //
        console.log(`All forfeits used. Resetting cycle.`); //
        usedIndices = []; //
        saveUsedIndices(USED_FORFEITS_KEY, usedIndices); //
    }

    // Find an unused index //
    let attempts = 0; //
    const maxAttempts = totalItems * 2; //
    let randomIndex; //

    if (totalItems === 0) return "No forfeits available!"; //

    do {
        randomIndex = Math.floor(Math.random() * totalItems); //
        attempts++; //
         // Safety break: If we can't find an unused item quickly, reset the cycle //
         if (attempts > maxAttempts && usedIndices.length < totalItems) { //
             console.error("Could not find an unused forfeit after multiple attempts. Resetting cycle."); //
             usedIndices = []; //
             saveUsedIndices(USED_FORFEITS_KEY, usedIndices); //
             // Try one more time after reset //
             randomIndex = Math.floor(Math.random() * totalItems); //
             break; //
         }
         // If all items are actually used (cycle should have reset above, but double-check) //
         if (usedIndices.length >= totalItems) { //
             randomIndex = Math.floor(Math.random() * totalItems); // Just pick one after reset //
             break; //
         }
    } while (usedIndices.includes(randomIndex)); // Keep trying until an unused index is found //

    // Record the used index and save //
    const selectedForfeit = forfeits[randomIndex]; //
    // Only add if it wasn't already added (relevant if cycle was reset mid-function) //
    if (!usedIndices.includes(randomIndex)) { //
        usedIndices.push(randomIndex); //
        saveUsedIndices(USED_FORFEITS_KEY, usedIndices); //
    }


    return selectedForfeit; //
}


/**
 * Gets the next unique question based on player roles, managing used indices via localStorage.
 * @returns {object} The question object { text: string, type: string }.
 */
function getNextUniqueQuestion() {
    let usedQuestionIndices = getUsedIndices(USED_QUESTIONS_KEY); //
    const totalQuestions = questions.length; //

    if (totalQuestions === 0) return { text: "No questions available!", type: "neutral" }; //

    // --- Determine Asker and Answerer Roles --- //
    const askerRole = (currentPlayer === 1) ? player1Role : player2Role; //
    const answererRole = (currentPlayer === 1) ? player2Role : player1Role; //

    // --- Define Allowed Question Types based on Roles --- //
    // Start with neutral, add specific types based on interaction //
    let allowedTypes = ['neutral']; //
    // Determine allowed types based on roles (simplified logic from original)
    if (askerRole === 'Dom' && (answererRole === 'sub' || answererRole === 'switch')) { //
        allowedTypes.push('D_asks_S'); //
    } else if ((askerRole === 'sub' || askerRole === 'switch') && answererRole === 'Dom') { //
        allowedTypes.push('S_asks_D'); //
    } else if (askerRole === 'switch' && answererRole === 'sub') { //
        allowedTypes.push('D_asks_S'); //
    } else if (askerRole === 'sub' && answererRole === 'switch') { //
         allowedTypes.push('S_asks_D'); //
    }
    // If Switch asks Switch, both S_asks_D and D_asks_S could potentially apply,
    // but we'll stick to neutral primarily unless specific switch-switch questions are added.
    // Consider if 'S_asks_D' and 'D_asks_S' should be allowed when Switch asks Switch. For now, neutral is safer.

    // --- Filter Available Question Indices --- //
    // Find indices of questions that match allowed types AND are not already used //
    let availableIndices = []; //
    for (let i = 0; i < totalQuestions; i++) { //
        if (!usedQuestionIndices.includes(i) && allowedTypes.includes(questions[i].type)) { //
            availableIndices.push(i); //
        }
    }

    // --- Fallback Strategy 1: No specific types left? Use only neutral --- //
    if (availableIndices.length === 0 && allowedTypes.length > 1) { //
         console.log("No specific role questions left, falling back to unused neutral."); //
         // Find indices of questions that are neutral AND not already used //
         availableIndices = []; // Reset list //
         for (let i = 0; i < totalQuestions; i++) { //
             if (!usedQuestionIndices.includes(i) && questions[i].type === 'neutral') { //
                 availableIndices.push(i); //
             }
         }
    }

    // --- Fallback Strategy 2: No suitable questions left at all? Reset cycle or pick any unused --- //
    if (availableIndices.length === 0) { //
        // Check if ALL questions are used //
        if (usedQuestionIndices.length >= totalQuestions) { //
            console.log(`All questions used. Resetting cycle.`); //
            usedQuestionIndices = []; // Reset used list //
            saveUsedIndices(USED_QUESTIONS_KEY, usedQuestionIndices); // Clear storage //

            // Re-filter based on original allowed types now that used list is empty //
            for (let i = 0; i < totalQuestions; i++) { //
                if (allowedTypes.includes(questions[i].type)) { //
                    availableIndices.push(i); //
                }
            }
             // If still none, broaden to neutral //
             if (availableIndices.length === 0) { //
                 for (let i = 0; i < totalQuestions; i++) { //
                     if (questions[i].type === 'neutral') { //
                         availableIndices.push(i); //
                     }
                 }
             }
             // If STILL none (e.g. only D_asks_S exist and roles are S/S), pick any //
             if (availableIndices.length === 0) { //
                 for (let i = 0; i < totalQuestions; i++) { //
                    availableIndices.push(i); // Pick any index as all are now available //
                 }
             }

        } else {
            // All suitable questions for this combo are used, but not all questions overall //
            console.warn("No suitable questions left for this role combination in the current cycle. Falling back to any unused question."); //
            // Pick ANY unused question regardless of type //
            availableIndices = []; // Reset list //
            for (let i = 0; i < totalQuestions; i++) { //
                if (!usedQuestionIndices.includes(i)) { //
                   availableIndices.push(i); //
                }
            }
        }
        // If absolutely no questions are left even after fallbacks (shouldn't happen with non-empty list) //
        if (availableIndices.length === 0 && totalQuestions > 0) { //
             console.error("Critical Error: No available question index found even after fallbacks.");
             // This case implies totalQuestions > 0 but no index could be selected
             // Resetting the cycle as a last resort if not already done
             if(usedQuestionIndices.length !== 0){
                 usedQuestionIndices = [];
                 saveUsedIndices(USED_QUESTIONS_KEY, usedQuestionIndices);
                 // Try one last time to get any question index
                 const randomIndexFromArray = Math.floor(Math.random() * totalQuestions);
                 const selectedQuestionIndex = randomIndexFromArray; // Just pick the first one
                 const selectedQuestion = questions[selectedQuestionIndex];
                 usedQuestionIndices.push(selectedQuestionIndex);
                 saveUsedIndices(USED_QUESTIONS_KEY, usedQuestionIndices);
                 return selectedQuestion;
             } else {
                 // If cycle was already reset and still nothing, return error
                 return { text: "Error: No questions available.", type: "neutral" };
             }

         } else if (availableIndices.length === 0 && totalQuestions === 0) {
             return { text: "Error: Question list is empty.", type: "neutral" };
         }
    }

    // --- Select Randomly from the final list of Available Indices --- //
    const randomIndexFromArray = Math.floor(Math.random() * availableIndices.length); //
    const selectedQuestionIndex = availableIndices[randomIndexFromArray]; //
    const selectedQuestion = questions[selectedQuestionIndex]; //

    // --- Save Progress --- //
    // Only add if it wasn't already added (relevant if cycle was reset mid-function) //
    if (!usedQuestionIndices.includes(selectedQuestionIndex)) { //
        usedQuestionIndices.push(selectedQuestionIndex); //
        saveUsedIndices(USED_QUESTIONS_KEY, usedQuestionIndices); //
    }


    return selectedQuestion; // Return the question object { text: string, type: string } //
}


// --- Core Game Logic Functions ---

/**
 * Updates the turn indicator text based on current player and roles.
 */
function updateTurnIndicator() {
    const askerName = (currentPlayer === 1) ? player1Name : player2Name; //
    const answererName = (currentPlayer === 1) ? player2Name : player1Name; //
    // No need to show roles here if they are clear from context or too long
    turnIndicator.textContent = `${askerName} asks ${answererName}:`; //
}

/**
 * Displays the next unique question based on roles.
 */
function displayNextQuestion() {
    // Ensure the game container is visible and name form is hidden //
    if (gameContainer.style.display === 'none') { //
        nameFormContainer.style.display = 'none'; //
        gameContainer.style.display = 'block'; // Use 'block' or 'flex' depending on CSS //
    }

    const nextQObject = getNextUniqueQuestion(); //
    // Check if we received a valid question object //
    if (nextQObject && typeof nextQObject.text === 'string') { //
        questionCard.innerHTML = nextQObject.text; // Use innerHTML if questions contain simple formatting //
        questionCard.style.display = 'flex'; // Show question card //
        forfeitCard.style.display = 'none'; // Hide forfeit card //
        updateTurnIndicator(); // Update turn indicator //
    } else {
        // Handle potential error case where getNextUniqueQuestion failed //
        console.error("Failed to get a valid question object:", nextQObject); //
        questionCard.textContent = "Error loading question. Please try again."; //
        questionCard.style.display = 'flex'; //
        forfeitCard.style.display = 'none'; //
        // Optionally update turn indicator with an error message or leave as is //
    }
}

/**
 * Displays the next unique forfeit.
 */
function displayNextForfeit() {
    const nextF = getNextUniqueForfeit(); //
    // The performer is the player whose turn it *was* (the one skipping the question) //
    const performer = (currentPlayer === 1) ? player2Name : player1Name; // The one whose turn it WAS //
    forfeitCard.innerHTML = `<strong>${performer}'s Forfeit:</strong><br>${nextF}`; // Use innerHTML for formatting //
    forfeitCard.style.display = 'flex'; // Show forfeit card //
    questionCard.style.display = 'none'; // Hide question card //
    // Turn indicator doesn't change here, as the *next* question is still asked by the same person
}

/**
 * Switches the current player.
 */
function switchPlayer() {
     currentPlayer = (currentPlayer === 1) ? 2 : 1; //
}

/**
 * Resets the game to the initial state.
 */
function resetGame() {
    // Clear player info (optional, could keep names)
    // player1Input.value = '';
    // player2Input.value = '';
    // player1RoleSelect.value = 'switch';
    // player2RoleSelect.value = 'switch';

    // Hide game, show setup
    gameContainer.style.display = 'none';
    nameFormContainer.style.display = 'block'; // Or 'flex' if you use flexbox for the form container

    // Reset internal state if needed (like current player)
    currentPlayer = 1;

    // Optionally clear used questions/forfeits from localStorage (or keep for persistence)
    // localStorage.removeItem(USED_QUESTIONS_KEY);
    // localStorage.removeItem(USED_FORFEITS_KEY);

    console.log("Game Reset");
}


// --- Event Listeners ---

/**
 * Handles the Start Game button click.
 * Reads names and roles, hides setup, shows game, displays first question.
 */
startGameButton.addEventListener('click', () => { //
    console.log("Start Game button clicked"); // Debugging line //
    try { //
        // Get names, provide defaults if empty //
        player1Name = player1Input.value.trim() || "Player 1"; //
        player2Name = player2Input.value.trim() || "Player 2"; //
        // Get selected roles //
        player1Role = player1RoleSelect.value; //
        player2Role = player2RoleSelect.value; //

        console.log(`Player 1: ${player1Name} (${player1Role})`); // Debugging line //
        console.log(`Player 2: ${player2Name} (${player2Role})`); // Debugging line //

        // Hide setup form, show game container - Check if elements exist //
        if (nameFormContainer && gameContainer) { //
            nameFormContainer.style.display = 'none'; //
            gameContainer.style.display = 'block'; // Make sure this matches CSS display property //
            console.log("Containers visibility toggled"); // Debugging line //
        } else { //
            console.error("Name form or game container element not found!"); //
            return; // Stop execution if elements are missing //
        }


        // Set player 1 to start //
        currentPlayer = 1; //
        // Display the first question using the role-aware logic //
        displayNextQuestion(); //
        console.log("First question displayed"); // Debugging line //

    } catch (error) { //
        console.error("Error in startGameButton listener:", error); //
        // Optionally display an error message to the user //
        alert("An error occurred starting the game. Please check the console (F12)."); //
    }
});

/**
 * Handles the Next Question button click.
 * Switches player turn, displays the next appropriate question.
 */
nextButton.addEventListener('click', () => { //
    console.log("Next Question button clicked"); // Debugging line //
    try { //
        switchPlayer(); // Switch turn first //
        displayNextQuestion(); // Then display question for the new player //
    } catch (error) { //
        console.error("Error in nextButton listener:", error); //
        alert("An error occurred getting the next question. Please check the console (F12)."); //
    }
});

/**
 * Handles the Take a Forfeit button click.
 * Displays a forfeit for the current player (who skipped the question).
 * Does NOT automatically switch the turn.
 */
forfeitButton.addEventListener('click', () => { //
    console.log("Forfeit button clicked"); // Debugging line //
    try { //
        displayNextForfeit(); //
        // The turn remains with the same asker for the *next* question click. //
    } catch (error) { //
        console.error("Error in forfeitButton listener:", error); //
        alert("An error occurred getting the forfeit. Please check the console (F12)."); //
    }
});

// Added: Event Listener for the Home Logo Link
homeLogoLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    // Option 1: Simple page reload (easiest)
    // window.location.reload();

    // Option 2: JS Reset function
    resetGame();
});

// --- Initial Setup ---
// Ensure game container is hidden initially (can also be done via CSS) //
if (gameContainer) { //
    gameContainer.style.display = 'none'; //
} else { //
    console.error("Game container element not found on initial load!"); //
}
// Ensure name form is visible initially
if (nameFormContainer) {
    nameFormContainer.style.display = 'block'; // Or 'flex'
} else {
     console.error("Name form container element not found on initial load!");
}

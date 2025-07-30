// --- CONTENT LIBRARIES (Can be declared early as they don't need the page to be loaded) ---

// --- Couple Mode Content (Original) ---
const coupleQuestions = [
    // --- Neutral Questions (Suitable for most dynamics) ---
    { text: "Have you ever wanted to explore a kink or fetish with me but haven't yet?", type: "neutral" },
    { text: "When was the last time you felt jealous in our ENM dynamic, and how did you handle it?", type: "neutral" },
    { text: "What’s one thing you wish I understood better about your sexual or ENM needs?", type: "neutral" },
    { text: "How do you balance your emotional connections with me and other partners?", type: "neutral" },
    { text: "Have you ever had a kink experience go wrong?", type: "neutral" },
    { text: "How has exploring ENM changed the way you view love and commitment between us?", type: "neutral" },
    { text: "What’s something you've learned about yourself through sexual play with me?", type: "neutral" },
    { text: "How do you manage the emotional highs and lows of engaging with me and multiple partners?", type: "neutral" },
    { text: "How do you feel when I get closer to someone else in our ENM dynamic?", type: "neutral" },
    { text: "What’s one thing you wish people outside of our relationship understood about us?", type: "neutral" },
    { text: "How do you establish trust when getting to know new partners?", type: "neutral" },
    { text: "Have I ever pushed an emotional boundary in our relationship? How did we handle it?", type: "neutral" },
    { text: "How do you navigate jealousy in our ENM relationship?", type: "neutral" },
    { text: "How has our sexual dynamic helped you grow as a person?", type: "neutral" },
    { text: "What’s one fear you have in exploring new kinks, or meeting new partners?", type: "neutral" },
    { text: "What’s your favourite type of roleplay?", type: "neutral" },
    { text: "Have you ever had a threesome or group play that didn’t go as planned? What happened?", type: "neutral" },
    { text: "What’s the naughtiest location you’ve had sex, and would you do it again?", type: "neutral" },
    { text: "Have you ever fantasised about me with one of my other partners?", type: "neutral" },
    { text: "Have you ever kept something from me in ENM to keep the peace?", type: "neutral" },
    { text: "What’s something you've done in a kink scene that surprised even you?", type: "neutral" },
    { text: "If you could play with anyone outside of our relationship, who would it be and why?", type: "neutral" },
    { text: "What’s the longest you’ve gone without sex, and why?", type: "neutral" },
    { text: "What’s one kink you’d never try with me, even if I asked?", type: "neutral" },
    { text: "If you could only have me as your partner for the next year, how would you feel?", type: "neutral" },
    { text: "Have you ever experienced compersion when watching me with someone else? What was it like?", type: "neutral" },
    { text: "What’s a scene or experience that left a lasting impact on your sexuality?", type: "neutral" },
    { text: "How do you feel about using toys with me? Which one is your favourite?", type: "neutral" },
    { text: "What’s the most extreme form of sensation play we’ve tried, and how did it feel?", type: "neutral" },
    { text: "If we could take a kink vacation together, where would you want to go and what would we do?", type: "neutral" },
    { text: "Has there been a partner I've had, that you would have liked to have shared with me?", type: "neutral" },
    { text: "Have you ever been involved in a taboo scenario? What was it, and did it turn you on?", type: "neutral" },
    { text: "If we could bring a trans celebrity into our dynamic for one night, who would it be and why?", type: "neutral" },
    { text: "What’s the one kink that you think best defines our sexual relationship?", type: "neutral" },
    { text: "Have you ever tried double penetration (or want to), and how was it?", type: "neutral" },
    { text: "What’s your biggest turn-on if you watch me with someone else?", type: "neutral" },
    { text: "What’s one fantasy we’ve fulfilled that you wish we could experience for the first time again?", type: "neutral" },
    { text: "How do you feel about breath play with me, and have we tried it?", type: "neutral" },
    { text: "What’s your favourite spot for me to kiss, lick, or tease?", type: "neutral" },
    { text: "Have we ever been caught in the act by someone? How did you react?", type: "neutral" },
    { text: "What’s your favourite form of foreplay with me?", type: "neutral" },
    { text: "If we could roleplay as any fictional characters from movies, books or TV, who would we be and why?", type: "neutral" },
    { text: "Would you ever use food in a scene with me?", type: "neutral" },
    { text: "What’s your favourite part of my body to tease, and why?", type: "neutral" },
    { text: "Have you ever gotten off to anything I've created with someone else?", type: "neutral" },
    { text: "What’s the naughtiest fantasy we’ve yet to act out?", type: "neutral" },
    { text: "What’s a kink you thought you’d never try with me but ended up loving?", type: "neutral" },
    { text: "Do you prefer solo play or group play with me, and why?", type: "neutral" },
    { text: "What was the moment you realised we'd be good in this type of dynamic together?", type: "neutral" },
    { text: "If you could change one thing about our current dynamic, what would it be?", type: "neutral" },
    { text: "What’s your biggest fear when it comes to exploring kink or ENM dynamics with me?", type: "neutral" },
    { text: "What’s a desire you've kept from everyone that you’re nervous to share?", type: "neutral" },
    { text: "Have we ever experimented with temperature play? How did it feel for you?", type: "neutral" },
    { text: "What’s your favourite kind of outfit to wear when we play?", type: "neutral" },
    { text: "Have we ever experimented with extreme pain play? What’s your favorite type?", type: "neutral" },
    { text: "What’s one piece of equipment you’ve never used with me but would love to try?", type: "neutral" },
    { text: "Have we ever tried sensory deprivation (e.g., blindfolds)? How did it feel for you?", type: "neutral" },
    { text: "Do you prefer leather or latex, and why?", type: "neutral" },
    { text: "Which would be your choice of roleplay for us: teacher/student, patient/nurse, or jailer/inmate?", type: "neutral" },
    { text: "Which sexual activity are any future partners totally not ready for from me?", type: "neutral" },
    { text: "What’s the kinkiest request you’ve ever received?", type: "neutral" },
    { text: "How did you feel when you first saw me naked?", type: "neutral" },
    { text: "If you could only indulge in oral, vaginal or anal sex for the rest of your life, which would it be?", type: "neutral" },
    { text: "If we could star in a BDSM-themed movie or show, what would it be called?", type: "neutral" },
    { text: "How do you feel about sharing my body with someone else during a group play session?", type: "neutral" },
    { text: "What’s your favourite way for us to explore anal play, and why?", type: "neutral" },
    { text: "How do you feel when you see me playing with someone else at an event?", type: "neutral" },
    { text: "Would you want us to explore group play more often? Why or why not?", type: "neutral" },
    { text: "How would you feel about us participating in a public kink scene with an audience at an event?", type: "neutral" },
    { text: "What would be your biggest turn-on about seeing me with multiple people?", type: "neutral" },
    { text: "What boundaries would you want to set for us at a public kink or sex event?", type: "neutral" },
    { text: "Have you ever been nervous to engage in public play with me? What made you feel that way?", type: "neutral" },
    { text: "How do you feel about the idea of us playing completely separately with others at events or parties?", type: "neutral" },
    { text: "Is there anyone we’ve engaged with in the past that you’d like to invite for a group session?", type: "neutral" },
    { text: "How would you feel if I organised a private session with someone else and invited you to watch?", type: "neutral" },
    { text: "How would you feel about us performing a kink demonstration together at a public event?", type: "neutral" },
    { text: "Pick two celebrities, one male and one female, to join us for a hot and steamy evening together", type: "neutral" },
    { text: "Would you describe me as a good kisser? Just good, or great?", type: "neutral" },
    { text: "If we played separately at an event, how would you want us to reconnect afterward?", type: "neutral" },
    { text: "Name a sexual activity that someone else does notably better than I do", type: "neutral" },
    { text: "Do you have an ex partner that you fantastise about playing with again?", type: "neutral" },
    { text: "In what ways do I need to work on my foreplay game?", type: "neutral" },
    { text: "How would you rate the most recent play we had out of 10?", type: "neutral" },
    { text: "How would you rate the most recent play you had with someone else, out of 10?", type: "neutral" },
    { text: "In your opinion, which is more important? Length or girth? (Can be for a toy or penis)", type: "neutral" },
    { text: "Which every day outfit do you find me most attractive in?", type: "neutral" },
    { text: "Do you want me to send you pics and videos from scenes with other people?", type: "neutral" },
    { text: "What household item would you least want to be tied up with, and why?", type: "neutral" },
    { text: "If our sex life was a cocktail, what ingredients would it have?", type: "neutral" },
    { text: "What ridiculous safe word would you actually use in an emergency?", type: "neutral" },
    { text: "What's the worst possible music to have sex to?", type: "neutral" },
    { text: "If you had to explain our dynamic using only emojis, which would you choose?", type: "neutral" },
    { text: "What cartoon character would be the worst third wheel?", type: "neutral" },
    { text: "What's the most unsexy thing you've done immediately after sex?", type: "neutral" },
    { text: "If we made a sex tape, what ridiculous blooper would definitely be in it?", type: "neutral" },
    { text: "What completely non-sexual skill do you have that's weirdly attractive?", type: "neutral" },
    { text: "What's your spirit animal during aftercare?", type: "neutral" },
    { text: "What terrible pickup line actually worked on you?", type: "neutral" },
    { text: "What's the worst possible tattoo placement for an ex's name?", type: "neutral" },
    { text: "If our bed had a Yelp review from previous partners, what would it say?", type: "neutral" },
    { text: "What's the worst food to eat right before a makeout session?", type: "neutral" },
    { text: "If our relationship had a theme song for playtime, what would it be?", type: "neutral" },
    { text: "What ridiculous alias would you use at a sex club?", type: "neutral" },
    { text: "What's the worst possible gift from a new play partner?", type: "neutral" },
    { text: "If you had to use a children's toy in a scene, which would you choose?", type: "neutral" },
    { text: "What completely innocent phrase makes you blush now?", type: "neutral" },
    { text: "What's the most embarrassing thing that's happened during aftercare?", type: "neutral" },
    { text: "If we opened a kink B&B, what would our specialty service be?", type: "neutral" },
    { text: "What terrible movie deserves a BDSM-themed remake?", type: "neutral" },
    { text: "What normal body part feels weirdly taboo to you?", type: "neutral" },
    { text: "What's the worst possible time to get a booty call text?", type: "neutral" },
    { text: "If you had to explain polyamory to a Victorian ghost, how would you start?", type: "neutral" },
    { text: "What completely non-sexual item have you fantasised about using in bed?", type: "neutral" },
    { text: "What childhood game would make the kinkiest drinking game?", type: "neutral" },
    { text: "If our relationship was a Tinder bio, what emojis would we need?", type: "neutral" },
    { text: "If you had to wear one outfit to every play party, what would it be?", type: "neutral" },
    { text: "What normal household sound turns you on unexpectedly?", type: "neutral" },
    { text: "What ridiculous rule would you add to our dynamic for April Fools?", type: "neutral" },
    { text: "If we made a kinky board game, what's the most chaotic rule?", type: "neutral" },
    { text: "What's the worst possible food to incorporate into sensation play?", type: "neutral" },
    { text: "If our sex tape got mixed up with a family vacation video, who would be most shocked?", type: "neutral" },
    { text: "What completely innocent habit drives you wild when I do it?", type: "neutral" },
    { text: "If you had to use a shampoo bottle as a toy, which brand would you trust?", type: "neutral" },
    { text: "What's the worst possible song to strip tease to?", type: "neutral" },
    { text: "If we hosted a kink workshop, what ridiculous skill would we teach?", type: "neutral" },
    { text: "What normal phrase takes on a dirty meaning in our relationship?", type: "neutral" },
    { text: "If you had to explain aftercare using only office supplies?", type: "neutral" },
    { text: "What's the worst possible celebrity to walk in on us?", type: "neutral" },
    { text: "If our dynamic was a pizza topping combination, what would it be?", type: "neutral" },
    { text: "What completely non-sexual app deserves a XXX version?", type: "neutral" },
    { text: "If we opened a kinky food truck, what would our special be called?", type: "neutral" },
    { text: "What's your ultimate free-use fantasy scenario involving me and someone else?", type: "neutral" },
    { text: "Describe your ideal scenario of being shared at a kink event - who watches? Who participates?", type: "neutral" },
    { text: "What's the most intense CNC (consensual non-consent) scenario you've fantasised about?", type: "neutral" },
    { text: "How would you feel about us livestreaming our play session?", type: "neutral" },
    { text: "What's the most explicit photo/video you'd let me take to share with others?", type: "neutral" },
    { text: "What's the most extreme public play you'd consent to if guaranteed privacy?", type: "neutral" },
    { text: "How would you feel about me negotiating your limits with a new play partner?", type: "neutral" },
    { text: "What's your ultimate orgasm torture scenario? Edging duration? Overstim methods?", type: "neutral" },
    { text: "How should we memorialise your best kink moments? Tattoos? Photo wall? Trophy case?", type: "neutral" },
    { text: "Which previous partner had the most memorable oral technique and what made it special?", type: "neutral" },
    { text: "What's something you learned from a past lover that you now use in our play?", type: "neutral" },
    { text: "Describe the most skilled handjob/fingering technique you've ever received from someone else", type: "neutral" },
    { text: "Which ex had the best stamina and how did that impact your sessions?", type: "neutral" },
    { text: "What's the most impressive physical attribute a past partner had that you still think about?", type: "neutral" },
    { text: "Which former flame had the dirtiest mouth during sex? Describe their best line", type: "neutral" },
    { text: "What's one move from a previous partner's repertoire you wish I'd adopt?", type: "neutral" },
    { text: "Who gave you your most intense orgasm before me, and what were they doing?", type: "neutral" },
    { text: "Describe the most creative use of furniture you've experienced with someone else", type: "neutral" },
    { text: "Which past partner had the best aftercare routine and what made it exceptional?", type: "neutral" },
    { text: "If you could choose one real person (not a celebrity) to watch me have sex with, who would it be?", type: "neutral" },
    { text: "What's a specific way you feel compersion for me when I'm with another partner?", type: "neutral" },
    { text: "Describe a time you felt 'new relationship energy' (NRE) with someone else. How did you navigate it with me?", type: "neutral" },
    { text: "What's one aspect of our ENM agreement you'd like to renegotiate or clarify?", type: "neutral" },
    { text: "How do you handle scheduling conflicts or time management between me and other partners?", type: "neutral" },
    { text: "What's your ideal level of communication about my other relationships? Too much detail? Not enough?", type: "neutral" },
    { text: "Describe a fantasy involving me, you, and one (or more) of your other partners.", type: "neutral" },
    { text: "What's the most challenging aspect of being my primary partner (if applicable) in an ENM structure?", type: "neutral" },
    { text: "How do you feel about fluid bonding or safer sex practices within our network?", type: "neutral" },
    { text: "What's a kink you're curious about but hesitant to bring up?", type: "neutral" },
    { text: "How do you differentiate between jealousy and envy in our dynamic?", type: "neutral" },
    { text: "If we were to introduce a new long-term partner into our dynamic, what qualities would be most important?", type: "neutral" },
    { text: "What's the most unexpected thing you've enjoyed about ENM?", type: "neutral" },
    { text: "How do you feel about discussing our ENM dynamic with friends or family?", type: "neutral" },
    { text: "Describe a time you felt particularly secure and loved within our non-monogamous relationship.", type: "neutral" },
    { text: "What's your favourite way to incorporate impact play (spanking, flogging, etc.)?", type: "neutral" },
    { text: "How do you feel about age play dynamics?", type: "neutral" },
    { text: "What's your opinion on incorporating elements of humiliation or degradation?", type: "neutral" },
    { text: "What's your favourite type of bondage? (Rope, cuffs, leather, tape, etc.)", type: "neutral" },
    { text: "How do you feel about medical play or scenes involving doctor/patient dynamics?", type: "neutral" },
    { text: "What's your stance on knife play or edge play involving sharp objects?", type: "neutral" },
    { text: "Describe a fantasy involving watersports (urophilia).", type: "neutral" },
    { text: "How do you feel about incorporating wax play into our scenes?", type: "neutral" },
    { text: "What's your interest level in pet play dynamics?", type: "neutral" },
    { text: "What's your favourite non-genital part of my body to worship or focus on?", type: "neutral" },
    { text: "How do you feel about incorporating electrostimulation (e-stim) toys?", type: "neutral" },
    { text: "What's a piece of kink gear you'd love for us to acquire?", type: "neutral" },
    { text: "How do you feel about incorporating costumes or specific uniforms into roleplay?", type: "neutral" },
    { text: "How do you communicate limits or safewords effectively during intense play?", type: "neutral" },
    { text: "How do you feel about incorporating elements of primal play?", type: "neutral" },
    { text: "What's your opinion on incorporating chastity devices?", type: "neutral" },
    { text: "Describe a fantasy involving public (but discreet) play.", type: "neutral" },
    { text: "How do you feel about incorporating elements of age regression or age progression?", type: "neutral" },
    { text: "What's your favourite way to use sensory deprivation (blindfolds, earplugs)?", type: "neutral" },
    { text: "Describe a scenario involving consensual non-consent (CNC) that intrigues you.", type: "neutral" },
    { text: "How do you feel about incorporating tickle torture?", type: "neutral" },
    { text: "What's a specific location (real or imagined) where you'd love to have a scene?", type: "neutral" },
    { text: "Describe your ideal BDSM dynamic: What roles? What rules? What goals?", type: "neutral" },
    { text: "How do you feel about incorporating food play (excluding standard aphrodisiacs)?", type: "neutral" },

     // --- Dom asks sub Questions (D_asks_S) ---
    { text: "What’s the most vulnerable you’ve felt during a scene with me, and why?", type: "D_asks_S" },
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "D_asks_S" },
    { text: "What’s the most intense impact play moment we’ve tried, and did you enjoy it?", type: "D_asks_S" },
    { text: "What would be the perfect safeword for us to use that also turns you on?", type: "D_asks_S" },
    { text: "Would you prefer for me to punish you for bad behavior or reward you for being good?", type: "D_asks_S" },
    { text: "What non-sexual act turns you on the most when we’re in a kink scene?", type: "D_asks_S" },
    { text: "If you had to wear a collar in public for me, how would it make you feel?", type: "D_asks_S" },
    { text: "What’s a limit you thought you had, but discovered you enjoy when I pushed it?", type: "D_asks_S" },
    { text: "Do you prefer when I restrain you with ropes, cuffs, or something else?", type: "D_asks_S" },
    { text: "How often do you experience sub-drop after a scene with me?", type: "D_asks_S" },
    { text: "Do you prefer silent obedience or verbal interaction with me during a scene?", type: "D_asks_S" },
    { text: "Is there a phrase I could say that would instantly turn you on?", type: "D_asks_S" },
    { text: "What’s your favourite type of edging play with me, and how long do you think you could last?", type: "D_asks_S" },
    { text: "Would you rather be made to orgasm on command or be denied by me completely for a night?", type: "D_asks_S" },
    { text: "What’s the most challenging position I’ve ever restrained you in?", type: "D_asks_S" },
    { text: "What’s the most intense form of humiliation you've experienced and enjoyed?", type: "D_asks_S" },
    { text: "Describe in detail how you'd want me to watch you service another partner", type: "D_asks_S" },
    { text: "How would you want me to mark you before sending you to play with someone else?", type: "D_asks_S" },
    { text: "How should I punish you if you cum without permission while with someone else?", type: "D_asks_S" },
    { text: "How would you want me to reclaim you after watching you play with another?", type: "D_asks_S" },
    { text: "Describe in detail how you'd want me to pimp you out or big you up to others for an evening.", type: "D_asks_S" },
    { text: "Describe a scenario where you'd enjoy being objectified (consensually).", type: "D_asks_S" },
    { text: "Describe a scenario involving forced orgasm or orgasm denial that excites you.", type: "D_asks_S" },
    { text: "What's a specific fear or limit you'd be willing to explore pushing, with careful negotiation?", type: "D_asks_S" },
    { text: "Describe a time you felt 'subspace'. What did it feel like?", type: "D_asks_S" },
    { text: "What's your favourite way to explore power dynamics through non-sexual tasks or service?", type: "D_asks_S" },
    { text: "Tell me about a time you felt truly owned or possessed by me. What did you enjoy about it?", type: "D_asks_S" },
    { text: "What kind of praise motivates you the most during a scene?", type: "D_asks_S" },
    { text: "How can I make you feel safer when we explore intense kinks?", type: "D_asks_S" },
    { text: "Describe your ideal servitude task.", type: "D_asks_S" },
    { text: "What's the threshold between challenging pain and a hard limit for you?", type: "D_asks_S" },

    // --- sub asks Dom Questions (S_asks_D) ---
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "S_asks_D" },
    { text: "What’s your favorite part of a power exchange dynamic with me?", type: "S_asks_D" },
    { text: "Do you prefer when I am rough with you or when I’m gentle?", type: "S_asks_D" },
    { text: "What’s the most dominant thing you’ve done to me during a scene?", type: "S_asks_D" },
    { text: "How often do you experience dom-drop after a scene with me?", type: "S_asks_D" },
    { text: "What’s the worst possible pet name for a Dom?", type: "S_asks_D" },
    { text: "What mundane task would you make a sub do as punishment?", type: "S_asks_D" },
    { text: "What role do you see yourself taking in a group scene? Dominant, submissive, or switch?", type: "S_asks_D" },
    { text: "What's a specific insecurity that ENM brings up for you, and how can I support you with it?", type: "S_asks_D" },
    { text: "Describe a time you felt 'domspace'. What did it feel like?", type: "S_asks_D" },
    { text: "What's your favourite type of verbal interaction during a scene (praise, degradation, commands, silence)?", type: "S_asks_D" },
    { text: "What qualities do you look for in a submissive partner?", type: "S_asks_D" },
    { text: "How do you prefer I communicate my limits or needs during a scene?", type: "S_asks_D" },
    { text: "What's one aspect of being dominant that you find challenging?", type: "S_asks_D" },
    { text: "Describe a time you felt particularly proud of my submission or service.", type: "S_asks_D" },
    { text: "What kind of feedback do you appreciate after a scene?", type: "S_asks_D" },
    { text: "Is there a particular type of scene or dynamic you'd like to explore more with me?", type: "S_asks_D" },
    { text: "What’s your favorite way to tease me until I beg?", type: "S_asks_D" },
    { text: "When was the last time you pushed a boundary with me, and how did it feel afterward?", type: "S_asks_D" },
    { text: "What’s your favourite name to call me during a scene?", type: "S_asks_D" },
    { text: "Would it excite you to watch me being dominated by someone in a public or group setting?", type: "S_asks_D" },
    { text: "What's one thing you wish I did more of during our kink encounters?", type: "S_asks_D" },
    { text: "What signals or behaviors from me make you feel most powerful or in control?", type: "S_asks_D" },
    { text: "Are there any specific titles or ways you prefer to be addressed during scenes?", type: "S_asks_D" },
    { text: "What are your hard limits when you are in a dominant headspace?", type: "S_asks_D" },
    { text: "Is there a type of submission or obedience from me that particularly pleases you?", type: "S_asks_D" },
    { text: "What are your expectations for my behaviour outside of dedicated scene time?", type: "S_asks_D" },
    { text: "How do you prefer to initiate a scene or signal that you want to play?", type: "S_asks_D" },
    { text: "Is there a fantasy scenario where you are dominant that you'd like to explore?", type: "S_asks_D" },
    { text: "What does 'success' look like for you at the end of a scene where you've been dominant?", type: "S_asks_D" },
    { text: "How do you balance control with ensuring my pleasure and well-being during a scene?", type: "S_asks_D" },
    { text: "Are there any specific dominant figures (real or fictional) who inspire your style?", type: "S_asks_D" },
    { text: "What's something you appreciate about my submission that I might not be aware of?", type: "S_asks_D" },
    { text: "How important is verbal affirmation or praise *from* me *to* you during or after a scene?", type: "S_asks_D" },
    { text: "What's one rule you'd like to implement in our dynamic, even just temporarily?", type: "S_asks_D" },
    { text: "Is there anything you hesitate to ask for when you're dominant, fearing it might be 'too much'?", type: "S_asks_D" },
    { text: "How do you feel about negotiating scenes beforehand versus more spontaneous play?", type: "S_asks_D" }
];
const coupleForfeits = [
    "You must head to the bathroom, take a naughty photo and send it to the other player",
    "You must remove one item of clothing",
    "You must kiss the other player's neck for 10 seconds",
    "You must take 5 spanks",
    "You must let the other player restrain you in some way for 5 minutes",
    "You must refer to the other player as Daddy/Mommy for the rest of the game",
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
    "You must message game creator Rysta to let him know you're playing this game",
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
    "Find something food-based and turn it sexual",
    "Give the other player a 60-second foot massage.",
    "Blindfold yourself for the next two questions.",
    "Let the other player write a temporary 'property of' mark on you (visible only to them).",
    "Describe your partner's best physical feature in explicit detail.",
    "Confess the last time you masturbated and what you thought about.",
    "Let the other player choose a song for you to strip tease (partially or fully) to.",
    "Whisper three dirty things you want to do to the other player.",
    "Wear an ice cube somewhere sensitive until it melts.",
    "Let the other player apply lipstick to you (regardless of gender) and wear it for 10 minutes.",
    "Perform 10 push-ups or sit-ups while complimenting the other player.",
    "Send a suggestive text to the other player right now.",
    "Let the other player choose one part of your body to kiss for 30 seconds.",
    "Gag yourself lightly (e.g., with a scarf) for the next question.",
    "Kneel at the other player's feet until your next turn.",
    "Let the other player drip candle wax (safely, from a low temp candle) on a non-sensitive part of your body.",
    "Recite a nursery rhyme in your sexiest voice.",
    "Let the other player lightly spank you 10 times with their hand or a chosen implement.",
    "Describe your ideal threesome scenario involving the two of you and a specific type of person.",
    "Swap one item of clothing with the other player for the next 15 minutes.",
    "Let the other player tie one of your wrists to your ankle for 5 minutes.",
    "Lick whipped cream (or similar) off a chosen part of the other player's body.",
    "Give the other player full control of the TV remote/music for the next 30 minutes.",
    "Confess a secret sexual fantasy you haven't shared before.",
    "Let the other player put you in a collar (if available) for 10 minutes.",
    "Massage the other player's shoulders for two minutes.",
    "Answer the next question while holding a plank position.",
    "Let the other player draw a silly (temporary) tattoo on you.",
    "Make orgasm noises on command for 15 seconds.",
    "Tell the other player exactly how you want them to touch you right now.",
    "Let the other player choose a safe word for you to use (just for fun) for the next 5 minutes.",
    "Blindfold the other player and feed them a small piece of food.",
    "Confess the kinkiest thing you've ever searched for online.",
    "Let the other player put clothespins on your nipples or earlobes (gently!) for one minute.",
    "Do your best impression of the other player having an orgasm.",
    "Write a short, kinky poem about the other player.",
    "Let the other player tickle you for 30 seconds.",
    "Praise the other player's dominance or submissiveness for 60 seconds.",
    "Describe what you'd wear (or not wear) to seduce the other player.",
    "Let the other player choose a spot on your body for you to lick.",
    "Hold eye contact with the other player for 60 seconds without laughing.",
    "Confess one thing that makes you feel insecure during sex.",
    "Let the other player gently bite you somewhere.",
    "Perform a 'service' for the other player (e.g., fetch a drink, adjust their cushion) while calling them 'Master'/'Mistress'/'Sir'/'Ma'am'.",
    "Show the other player your 'O face'.",
    "Let the other player choose a position for you to hold for 60 seconds.",
    "Tell the other player a dirty joke.",
    "Let the other player whisper instructions in your ear for the next minute, which you must follow.",
    "Confess one rule you'd secretly love for the other player to impose on you.",
    "Let the other player put you in light bondage (e.g., scarf around wrists) for the next question.",
    "Describe the other player's smell in a sensual way."
];

// --- Friends Mode Content (REVISED & EXPANDED) ---
const friendsQuestions = [
    // Original, more conversational questions
    "What's a misconception you think I might have about your sex life?",
    "Have you ever had a sexual experience that made you see yourself differently?",
    "What's one thing you wish more people understood about sex or sexuality?",
    "Describe a time you felt really confident and sex-positive.",
    "What's the best or worst piece of sex advice you've ever received?",
    "Is there a sexual topic you've always been curious about but never researched?",
    "What's your opinion on the way sex is portrayed in movies versus reality?",
    "What's a boundary you're proud of setting in a past relationship (romantic or sexual)?",
    "If you could give your younger self one piece of advice about sex, what would it be?",
    "What does 'good sex' mean to you, beyond the physical act?",
    "Have you ever been surprised by something that turned you on?",
    "What's one thing you've learned about consent that you think is really important?",
    "How has your taste in partners (or play partners) changed over the years?",
    "What's a non-sexual activity that you find surprisingly intimate?",
    "What's the funniest thing that's ever happened to you during a sexual encounter?",
    "Do you think emotional connection is necessary for good sex? Why or why not?",
    "What's a quality you really admire in a partner?",
    "Have you ever faked an orgasm? If you're comfortable sharing, why?",
    "What's something you find attractive that most people might not?",
    "How important is communication about sex in a relationship to you?",
    "What's a piece of media (book, movie, show) that shaped your view on love or sex?",
    "What's a deal-breaker for you in any kind of relationship?",
    "What's a fear you have about dating or relationships in general?",
    "What's a sexual 'milestone' you think is overrated?",
    "What's a green flag you look for in people?",
    // New, kinkier questions
    "What's your honest, unfiltered opinion on anal sex, giving or receiving?",
    "If you had to be restrained, what would be your weapon of choice: ropes, cuffs, or something more creative?",
    "What's a fetish you find fascinating, even if you're not sure you'd try it?",
    "Describe a time you felt powerful and dominant sexually.",
    "What's the most 'out-there' thing on your sexual bucket list?",
    "Have you ever had a fantasy about being with more than one person at once? Describe it.",
    "What's the difference between a 'kink' and a 'deal-breaker' for you?",
    "If you were to explore impact play, would you rather be the one giving or receiving the spanks?",
    "What's a non-sexual scenario that you find incredibly arousing (e.g., watching someone cook, fix something)?",
    "Have you ever fantasised about being with someone of a different gender than you usually go for?",
    "What's your favourite type of porn to watch, and what do you like about it?",
    "Describe your ideal 'dirty weekend' away.",
    "What's a sexual skill you're proud of?",
    "What's the kinkiest thing you've ever done in a public or semi-public place?",
    "How do you feel about praise or degradation during sex?",
    "What's the most surprising thing that's ever turned you on?",
    "If you could design a sex toy, what would it do?",
    "What's your view on using food during sex?",
    "Have you ever had a sexual dream about me? You don't have to share details unless you want to.",
    "What's a piece of kinky gear you've always wanted to own?",
    "What's your favourite body part on a potential partner to focus on?",
    "Would you rather have incredibly passionate, rough sex or slow, sensual, intimate sex?",
    "What's a secret turn-on you've never told anyone before?",
    "Have you ever considered going to a sex club or a kink event?",
    "What's an assumption people might make about your sex life that's completely wrong?",
    "If you had a 'free pass' to do one kinky thing with no judgment, what would it be?",
    "What's your favourite outfit to feel sexy in?",
    "What's the hottest piece of media (book, movie, show) you've consumed recently?",
    "Do you prefer giving or receiving oral sex?",
    "If we were to experiment sexually, what's the first thing you'd want to try?",
];
const friendsForfeits = [
    "Describe your ideal dirty talk to the other player.",
    "Show the other player your 'O' face.",
    "Send a flirty text to the other player right now, as if you were trying to seduce them.",
    "Remove one item of clothing.",
    "Let the other player choose a song for you to do a 30-second seductive dance to.",
    "Whisper your darkest sexual secret in the other player's ear.",
    "For the next three rounds, you must start every sentence with 'Listen, you sexy thing...'",
    "Take a suggestive selfie and send it to the other player.",
    "Truth or Dare: let the other player choose. The dare must be kinky.",
    "Blindfold yourself for the next two rounds.",
    "Describe, in detail, what you would do to the other player if you were going to hook up right now.",
    "Let the other player lightly trace a word on your back with their finger. You have to guess the word. The word must be naughty.",
    "Give the other player a genuine, flirty compliment about a physical feature.",
    "You must sit on the floor at the other player's feet until your next turn.",
    "Show the other player the kinkiest thing you have saved on your phone (meme, photo, video).",
    "Write the other player's name somewhere on your body (e.g., arm, leg) with a pen.",
    "Enthusiastically mime your favourite sexual position.",
    "Let the other player choose a new, kinky nickname for you for the rest of the game.",
    "Confess the last thing you masturbated to.",
    "Hold intense, seductive eye contact with the other player for 60 seconds without breaking it.",
];

// --- Group Mode Content (REVISED & EXPANDED) ---
const groupQuestions = [
    // Original, tamer questions (converted to new format)
    { text: "Who in this group do you think has the wildest, unspoken fantasy?", type: 'target' },
    { text: "If you had to trust one person here with a kinky secret, who would it be and why?", type: 'target' },
    { text: "Point to the person you think gives the best hugs. That person must now give a hug to the person on their left.", type: 'target' },
    { text: "Who here do you think would be most likely to survive a zombie apocalypse? Why?", type: 'target' },
    { text: "Ask a question to the person you know the least in this group.", type: 'target' },
    { text: "If you could pair up any two people in this room for a devious prank, who would they be and what's the prank?", type: 'target' },
    { text: "Who in the group do you think has the most embarrassing 'guilty pleasure' song?", type: 'target' },
    { text: "What is your first impression of the person sitting opposite you?", type: 'target' },
    { text: "Who here would be the most likely to get away with a crime? What would the crime be?", type: 'target' },
    { text: "If this group was a band, who would play which instrument?", type: 'target' },
    { text: "What's a secret skill you have that would surprise everyone here?", type: 'target' },
    { text: "Who in the group do you think has the best 'poker face'?", type: 'target' },
    { text: "Who here do you think has been in the most fist-fights?", type: 'target' },
    { text: "If you could trade lives with someone in this group for a day, who would it be?", type: 'target' },
    { text: "Who do you think has the dirtiest laugh? Make them laugh to prove it.", type: 'target' },
    { text: "What's one thing you think everyone in this group has in common?", type: 'target' },
    { text: "Who here is most likely to talk their way out of a speeding ticket?", type: 'target' },
    { text: "If the group had to create a secret handshake right now, what would be the first move?", type: 'group' },
    { text: "Who in the group would you want to be your 'phone a friend' in a pub quiz?", type: 'target' },
    { text: "What's a rumour you could start about the person to your left?", type: 'target' },
    { text: "Who here do you think has the most tattoos (or hidden ones)?", type: 'target' },
    { text: "If you were to cast everyone in this room in a movie, what genre would it be and what roles would they play?", type: 'group' },
    { text: "Who in the group seems the most innocent, but you suspect is the wildest?", type: 'target' },
    // New, kinkier questions
    { text: "Who in this room do you think has the most experience with anal play?", type: 'target' },
    { text: "If you had to restrain one person in this room, who would it be and what would you use?", type: 'target' },
    { text: "If you had to make out with one person in this room right now, who would it be?", type: 'target' },
    { text: "Who in the group do you think has the kinkiest search history?", type: 'target' },
    { text: "Who here looks like they'd enjoy being (consensually) degraded?", type: 'target' },
    { text: "If you could watch any two people in this room hook up, who would you pick?", type: 'target' },
    { text: "Who do you think has the best 'O' face? That person must now demonstrate it.", type: 'target' },
    { text: "Point to the person you think would be the best at dirty talk.", type: 'target' },
    { text: "If you had to choose one person to share a partner with for a night, who would it be?", type: 'target' },
    { text: "Point to the person you think would be the most fun at a sex party.", type: 'target' },
    { text: "Who here do you think has the most sex toys?", type: 'target' },
    { text: "If you had to give someone here a lap dance, who would you choose?", type: 'target' },
    { text: "If you had 'one free pass' to sleep with someone in this room, who would you pick?", type: 'target' },
    { text: "Point to the person you'd most like to spank.", type: 'target' },
    { text: "If you had to be handcuffed to one person in this room for 24 hours, who would you choose?", type: 'target' },
    { text: "Who here seems like they would be into some form of impact play (spanking, flogging, etc)?", type: 'target' },
    { text: "If you could have a threesome with any two people in this room, who would they be?", type: 'target' },
    { text: "Who here do you think has the weirdest turn-on?", type: 'target' },
    { text: "Who in the group would you want to be your 'Dom' for an evening?", type: 'target' },
    { text: "Who here would you most like to see strip?", type: 'target' },
    { text: "Point to the person you think would be the most adventurous in bed.", type: 'target' },
    { text: "Who in the group do you think has a secret fetish no one knows about?", type: 'target' },
    { text: "If you had to lick food off one person's body, who would you choose?", type: 'target' },
    { text: "Which person in the room do you think would be the most demanding in bed?", type: 'target' },
    { text: "Point to the person you think has the sexiest voice.", type: 'target' },
    { text: "If you had to go down on one person in this room, who would it be?", type: 'target' },
    { text: "Who in this room would you let tie you up?", type: 'target' },
    { text: "Point to the person with the sexiest lips.", type: 'target' },
    { text: "Who here do you think would be the best at roleplaying?", type: 'target' },
    { text: "If you could only use your mouth on one person in this room for 10 minutes, who would you choose?", type: 'target' },
    { text: "Who here looks like they'd be into being praised and called a 'good girl/boy'?", type: 'target' },
    { text: "Point to the person you think has the best ass in the room.", type: 'target' },
    { text: "Who in the group would you want to be your 'sub' for an evening?", type: 'target' },
    { text: "If you had to watch porn with one person in this room, who would it be?", type: 'target' },
    { text: "Point to the person you'd most like to bite (gently!).", type: 'target' },
    { text: "Everyone goes around the circle and says who in the group they'd most like to kiss.", type: 'group' },
    { text: "Everyone reveals their biggest sexual turn-on.", type: 'group' },
    { text: "The group must decide on one person to take a forfeit. That person takes the next forfeit card.", type: 'group' },
    { text: "Everyone removes one item of clothing.", type: 'group' },
    { text: "Go around the circle. Each person describes their 'type' in three words.", type: 'group' },
    { text: "The group must invent a new, kinky rule that applies for the next 5 rounds.", type: 'group' },
    { text: "Everyone writes down a secret fantasy on a piece of paper. Shuffle them, and read them aloud. The group has to guess who wrote which fantasy.", type: 'group' },
];
const groupForfeits = [
    "Remove one item of clothing.",
    "Let the person to your right blindfold you for the next two rounds.",
    "You must sit on someone's lap (of their choosing) until your next turn.",
    "Give a 30-second lap dance to the person of your choice.",
    "Whisper a dirty secret into the ear of the person on your left.",
    "Let the person opposite you write a word on your body with their finger. You have to guess the word.",
    "You must refer to the person who asked the question as 'Master' or 'Mistress' for the next three rounds.",
    "Take an ice cube and slowly run it along the arm of the person to your right.",
    "The group votes on who you have to spank. You must give them 3 firm spanks.",
    "Choose someone in the group. You must kiss them on the neck for 10 seconds.",
    "Let the group choose a song for you to strip-tease to for 30 seconds. You must remove at least one item.",
    "You must describe your last orgasm in detail to the group.",
    "Let the person to your left put you in a light bondage position for 5 minutes (e.g., hands tied with a scarf).",
    "You must lick a drop of your drink off the finger of the person of your choice.",
    "The group must choose a new, kinky nickname for you that lasts the rest of the game.",
    "You must demonstrate your 'O' face.",
    "For the next round, you can only communicate by moaning seductively.",
    "Use a pickup line on the person in the group you find most attractive.",
    "Let the group choose a body part (e.g., neck, shoulder, arm) for the person to your right to kiss.",
    "You must show the group the last saved photo on your phone, no matter what it is.",
    "Choose two people in the group to kiss each other (on the cheek or lips, their choice).",
    "You must get on all fours and act like a pet for the person of your choice for one round.",
    "Let the group apply lipstick to you (badly). You must wear it for three rounds.",
    "You must give a foot massage to the person with the nicest shoes for 60 seconds.",
    "Post 'feeling needy tonight' with a devil emoji to a social media story of your choice.",
    "You must remove two items of clothing.",
    "You must let the person of your choice feed you a bite of food or a sip of a drink seductively.",
    "You must describe your ideal sexual fantasy to the group.",
    "Let the person to your left lightly bite you somewhere of their choosing (e.g., shoulder, arm).",
    "You must choose one person to be your 'human throne' for the next round.",
    "Send a text to the 3rd person in your contacts list saying 'thinking of you'.",
    "You must perform your best slut drop.",
    "Let the group choose an object in the room. You must describe, in detail, how you would use it sexually.",
    "You must take a body shot off a person of your choice (if applicable and consensual).",
    "For the next 3 rounds, you must address everyone with a kinky title (e.g., 'Yes, Sir', 'Of course, Mistress').",
];

// --- This listener ensures the script runs only after the page is fully loaded ---
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const welcomeContainer = document.getElementById('welcomeContainer');
    const coupleSetupContainer = document.getElementById('coupleSetupContainer');
    const groupSetupContainer = document.getElementById('groupSetupContainer');
    const gameContainer = document.getElementById('gameContainer');
    const interstitialContainer = document.getElementById('interstitialContainer');
    const interstitialMessage = document.getElementById('interstitialMessage');
    const readyButton = document.getElementById('readyButton');
    const groupModeBtn = document.getElementById('groupModeBtn');
    const coupleModeBtn = document.getElementById('coupleModeBtn');
    const friendsModeBtn = document.getElementById('friendsModeBtn');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    const player1RoleSelect = document.getElementById('player1Role');
    const player2RoleSelect = document.getElementById('player2Role');
    const player1RoleRow = document.getElementById('player1RoleRow');
    const player2RoleRow = document.getElementById('player2RoleRow');
    const startCoupleGameButton = document.getElementById('startCoupleGameButton');
    const newPlayerNameInput = document.getElementById('newPlayerName');
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const playerList = document.getElementById('playerList');
    const startGroupGameButton = document.getElementById('startGroupGameButton');
    const turnIndicator = document.getElementById('turnIndicator');
    const questionCard = document.getElementById('questionCard');
    const forfeitCard = document.getElementById('forfeitCard');
    const nextButton = document.getElementById('nextButton');
    const forfeitButton = document.getElementById('forfeitButton');
    const homeLogoLink = document.getElementById('homeLogoLink');

    // --- Game State Variables ---
    let gameMode = '';
    let players = [];
    let currentPlayerIndex = 0;
    let currentTargetIndex = null;
    let currentQuestionType = 'target';

    // --- localStorage Keys ---
    const USED_QUESTIONS_KEY_PREFIX = 'kinkAndTellUsedQuestions_';
    const USED_FORFEITS_KEY_PREFIX = 'kinkAndTellUsedForfeits_';

    // --- Utility Functions ---
    function showContainer(containerId) {
        const containers = [welcomeContainer, coupleSetupContainer, groupSetupContainer, gameContainer, interstitialContainer];
        containers.forEach(container => {
            if (container) {
                container.style.display = container.id === containerId ? 'block' : 'none';
            }
        });
    }

    function getUsedIndices(key) {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error("Error reading from localStorage:", e);
            return [];
        }
    }

    function saveUsedIndices(key, indices) {
        try {
            localStorage.setItem(key, JSON.stringify(indices));
        } catch (e) {
            console.error("Error writing to localStorage:", e);
        }
    }

    function getNextUniqueItem(contentArray, storageKey) {
        let usedIndices = getUsedIndices(storageKey);
        const totalItems = contentArray.length;
        if (totalItems === 0) return "No content available!";
        let availableIndices = Array.from({ length: totalItems }, (_, i) => i).filter(i => !usedIndices.includes(i));
        if (availableIndices.length === 0) {
            console.log(`All items for ${storageKey} used. Resetting cycle.`);
            usedIndices = [];
            saveUsedIndices(storageKey, []);
            availableIndices = Array.from({ length: totalItems }, (_, i) => i);
        }
        const randomIndexFromArray = Math.floor(Math.random() * availableIndices.length);
        const selectedItemIndex = availableIndices[randomIndexFromArray];
        usedIndices.push(selectedItemIndex);
        saveUsedIndices(storageKey, usedIndices);
        return contentArray[selectedItemIndex];
    }

    // --- Game Mode Setup ---
    function setupMode(mode) {
        gameMode = mode;
        if (mode === 'group') {
            showContainer('groupSetupContainer');
        } else {
            player1RoleRow.style.display = mode === 'couple' ? 'grid' : 'none';
            player2RoleRow.style.display = mode === 'couple' ? 'grid' : 'none';
            instructionTextCouple.textContent = mode === 'couple' ? 'Enter names and select roles!' : 'Enter player names!';
            showContainer('coupleSetupContainer');
        }
    }

    // --- Group Setup Logic ---
    function renderPlayerList() {
        playerList.innerHTML = '';
        players.forEach((player, index) => {
            const li = document.createElement('li');
            li.textContent = player.name;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '×';
            removeBtn.className = 'remove-player-btn';
            removeBtn.onclick = () => {
                players.splice(index, 1);
                renderPlayerList();
            };
            li.appendChild(removeBtn);
            playerList.appendChild(li);
        });
    }

    // --- Start Game Logic ---
    function startGame() {
        currentPlayerIndex = 0;
        if (gameMode === 'group') {
            const firstPlayerName = players[currentPlayerIndex].name;
            interstitialMessage.textContent = `Pass the device to ${firstPlayerName}`;
            showContainer('interstitialContainer');
        } else {
            showContainer('gameContainer');
            displayNextQuestion();
        }
    }

    // --- Core Game Logic ---
    function switchPlayer() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    }

    function updateTurnIndicator() {
        const asker = players[currentPlayerIndex];
        let indicatorText = '';
        if (gameMode === 'group') {
            if (currentQuestionType === 'group') {
                indicatorText = `${asker.name} asks the group:`;
                currentTargetIndex = null;
            } else {
                let targetIdx;
                if (players.length > 1) {
                    do {
                        targetIdx = Math.floor(Math.random() * players.length);
                    } while (targetIdx === currentPlayerIndex);
                } else {
                    targetIdx = 0;
                }
                currentTargetIndex = targetIdx;
                const target = players[currentTargetIndex];
                indicatorText = `${asker.name} asks ${target.name}:`;
            }
        } else {
            const answerer = players[(currentPlayerIndex + 1) % 2];
            indicatorText = `${asker.name} asks ${answerer.name}:`;
        }
        turnIndicator.textContent = indicatorText;
    }

    function displayNextQuestion() {
        let question;
        let questionKey = USED_QUESTIONS_KEY_PREFIX + gameMode;
        if (gameMode === 'couple') {
            // Couple logic remains the same
            const askerRole = players[currentPlayerIndex].role;
            const answererRole = players[(currentPlayerIndex + 1) % 2].role;
            let allowedTypes = ['neutral'];
            if (askerRole === 'Dom' && (answererRole === 'sub' || answererRole === 'switch')) allowedTypes.push('D_asks_S');
            else if ((askerRole === 'sub' || askerRole === 'switch') && answererRole === 'Dom') allowedTypes.push('S_asks_D');
            else if (askerRole === 'switch' && answererRole === 'sub') allowedTypes.push('D_asks_S');
            else if (askerRole === 'sub' && answererRole === 'switch') allowedTypes.push('S_asks_D');
            let usedIndices = getUsedIndices(questionKey);
            let availableQuestions = coupleQuestions.filter((q, i) => !usedIndices.includes(i) && allowedTypes.includes(q.type));
            if (availableQuestions.length === 0) {
                availableQuestions = coupleQuestions.filter((q, i) => !usedIndices.includes(i) && q.type === 'neutral');
            }
            if (availableQuestions.length === 0) {
                 console.log(`All suitable couple questions used. Resetting cycle.`);
                 saveUsedIndices(questionKey, []);
                 availableQuestions = coupleQuestions.filter(q => allowedTypes.includes(q.type));
            }
            const selectedQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
            if(selectedQuestion) {
                const originalIndex = coupleQuestions.indexOf(selectedQuestion);
                let used = getUsedIndices(questionKey);
                if (!used.includes(originalIndex)) {
                    used.push(originalIndex);
                    saveUsedIndices(questionKey, used);
                }
                question = selectedQuestion.text;
            } else {
                question = "No suitable questions found. Click next to try again.";
            }
        } else if (gameMode === 'group') {
            const selectedQuestion = getNextUniqueItem(groupQuestions, questionKey);
            question = selectedQuestion.text;
            currentQuestionType = selectedQuestion.type;
        } else {
            const questionBank = friendsQuestions;
            question = getNextUniqueItem(questionBank, questionKey);
        }
        questionCard.innerHTML = question;
        questionCard.style.display = 'flex';
        forfeitCard.style.display = 'none';
        updateTurnIndicator();
    }

    function displayNextForfeit() {
        const forfeitKey = USED_FORFEITS_KEY_PREFIX + gameMode;
        const forfeitBank = gameMode === 'couple' ? coupleForfeits : (gameMode === 'friends' ? friendsForfeits : groupForfeits);
        const forfeit = getNextUniqueItem(forfeitBank, forfeitKey);
        let performerName;
        if (gameMode === 'group') {
            performerName = currentTargetIndex !== null ? players[currentTargetIndex].name : players[currentPlayerIndex].name;
        } else {
            performerName = players[(currentPlayerIndex + 1) % 2].name;
        }
        forfeitCard.innerHTML = `<strong>${performerName}'s Forfeit:</strong><br>${forfeit}`;
        forfeitCard.style.display = 'flex';
        questionCard.style.display = 'none';
    }

    function resetGame() {
        gameMode = '';
        players = [];
        currentPlayerIndex = 0;
        currentTargetIndex = null;
        playerList.innerHTML = '';
        player1Input.value = '';
        player2Input.value = '';
        newPlayerNameInput.value = '';
        showContainer('welcomeContainer');
    }

    // --- ATTACH ALL EVENT LISTENERS ---
    groupModeBtn.addEventListener('click', () => setupMode('group'));
    coupleModeBtn.addEventListener('click', () => setupMode('couple'));
    friendsModeBtn.addEventListener('click', () => setupMode('friends'));

    startCoupleGameButton.addEventListener('click', () => {
        const p1Name = player1Input.value.trim() || 'Player 1';
        const p2Name = player2Input.value.trim() || 'Player 2';
        if (gameMode === 'couple') {
            players = [{ name: p1Name, role: player1RoleSelect.value }, { name: p2Name, role: player2RoleSelect.value }];
        } else {
            players = [{ name: p1Name }, { name: p2Name }];
        }
        startGame();
    });

    addPlayerBtn.addEventListener('click', () => {
        const name = newPlayerNameInput.value.trim();
        if (name && !players.some(p => p.name === name)) {
            players.push({ name });
            renderPlayerList();
            newPlayerNameInput.value = '';
            newPlayerNameInput.focus();
        } else if (!name) {
            alert("Please enter a name.");
        } else {
            alert("That player name already exists.");
        }
    });

    newPlayerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addPlayerBtn.click();
    });

    startGroupGameButton.addEventListener('click', () => {
        if (players.length < 2) {
            alert("You need at least 2 players to start the game.");
            return;
        }
        startGame();
    });

    nextButton.addEventListener('click', () => {
        switchPlayer();
        if (gameMode === 'group') {
            const nextPlayerName = players[currentPlayerIndex].name;
            interstitialMessage.textContent = `Pass the device to ${nextPlayerName}`;
            showContainer('interstitialContainer');
        } else {
            displayNextQuestion();
        }
    });
    
    readyButton.addEventListener('click', () => {
        showContainer('gameContainer');
        displayNextQuestion();
    });

    forfeitButton.addEventListener('click', () => {
        displayNextForfeit();
    });

    homeLogoLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you want to end this game and return to the main menu?")) {
            resetGame();
        }
    });

    // --- Initial Page State ---
    showContainer('welcomeContainer');
});

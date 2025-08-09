/* Kink & Tell — Simplified JS (UI tidy + functional tweaks)
 * - Timer only on time-limited forfeits
 * - External Actions toggle removed (always included)
 * - Sound button/setting removed
 * - Spiciness buttons (pills) instead of checkboxes
 * - Emphasised Next/Forfeit; de-emphasised skip/undo
 * - Full content arrays embedded as provided
 */

/* === Full content (from original) === */
const coupleQuestions = [
    // --- Neutral Questions (Suitable for most dynamics) ---
    { text: "Have you ever wanted to explore a kink or fetish with me but haven't yet?", type: "neutral" },
    { text: "When was the last time you felt jealous in our ENM dynamic, && how did you handle it?", type: "neutral" },
    { text: "What’s one thing you wish I understood better about your sexual or ENM needs?", type: "neutral" },
    { text: "How do you balance your emotional connections with me && other partners?", type: "neutral" },
    { text: "Have you ever had a kink experience go wrong?", type: "neutral" },
    { text: "How has exploring ENM changed the way you view love && commitment between us?", type: "neutral" },
    { text: "What’s something you've learned about yourself through sexual play with me?", type: "neutral" },
    { text: "How do you manage the emotional highs && lows of engaging with me && multiple partners?", type: "neutral" },
    { text: "How do you feel when I get closer to someone else in our ENM dynamic?", type: "neutral" },
    { text: "What’s one thing you wish people outside of our relationship understood about us?", type: "neutral" },
    { text: "How do you establish trust when getting to know new partners?", type: "neutral" },
    { text: "Have I ever pushed an emotional boundary in our relationship? How did we handle it?", type: "neutral" },
    { text: "How do you navigate jealousy in our ENM relationship?", type: "neutral" },
    { text: "How has our sexual dynamic helped you grow as a person?", type: "neutral" },
    { text: "What’s one fear you have in exploring new kinks, or meeting new partners?", type: "neutral" },
    { text: "What’s your favourite type of roleplay?", type: "neutral" },
    { text: "Have you ever had a threesome or group play that didn’t go as planned? What happened?", type: "neutral" },
    { text: "What’s the naughtiest location you’ve had sex, && would you do it again?", type: "neutral" },
    { text: "Have you ever fantasised about me with one of my other partners?", type: "neutral" },
    { text: "Have you ever kept something from me in ENM to keep the peace?", type: "neutral" },
    { text: "What’s something you've done in a kink scene that surprised even you?", type: "neutral" },
    { text: "If you could play with anyone outside of our relationship, who would it be && why?", type: "neutral" },
    { text: "What’s the longest you’ve gone without sex, && why?", type: "neutral" },
    { text: "What’s one kink you’d never try with me, even if I asked?", type: "neutral" },
    { text: "If you could only have me as your partner for the next year, how would you feel?", type: "neutral" },
    { text: "Have you ever experienced compersion when watching me with someone else? What was it like?", type: "neutral" },
    { text: "What’s a scene or experience that left a lasting impact on your sexuality?", type: "neutral" },
    { text: "How do you feel about using toys with me? Which one is your favourite?", type: "neutral" },
    { text: "What’s the most extreme form of sensation play we’ve tried, && how did it feel?", type: "neutral" },
    { text: "If we could take a kink vacation together, where would you want to go && what would we do?", type: "neutral" },
    { text: "Has there been a partner I've had, that you would have liked to have shared with me?", type: "neutral" },
    { text: "Have you ever been involved in a taboo scenario? What was it, && did it turn you on?", type: "neutral" },
    { text: "If we could bring a trans celebrity into our dynamic for one night, who would it be && why?", type: "neutral" },
    { text: "What’s the one kink that you think best defines our sexual relationship?", type: "neutral" },
    { text: "Have you ever tried double penetration (or want to), && how was it?", type: "neutral" },
    { text: "What’s your biggest turn-on if you watch me with someone else?", type: "neutral" },
    { text: "What’s one fantasy we’ve fulfilled that you wish we could experience for the first time again?", type: "neutral" },
    { text: "How do you feel about breath play with me, && have we tried it?", type: "neutral" },
    { text: "What’s your favourite spot for me to kiss, lick, or tease?", type: "neutral" },
    { text: "Have we ever been caught in the act by someone? How did you react?", type: "neutral" },
    { text: "What’s your favourite form of foreplay with me?", type: "neutral" },
    { text: "If we could roleplay as any fictional characters from movies, books or TV, who would we be && why?", type: "neutral" },
    { text: "Would you ever use food in a scene with me?", type: "neutral" },
    { text: "What’s your favourite part of my body to tease, && why?", type: "neutral" },
    { text: "Have you ever gotten off to anything I've created with someone else?", type: "neutral" },
    { text: "What’s the naughtiest fantasy we’ve yet to act out?", type: "neutral" },
    { text: "What’s a kink you thought you’d never try with me but ended up loving?", type: "neutral" },
    { text: "Do you prefer solo play or group play with me, && why?", type: "neutral" },
    { text: "What was the moment you realised we'd be good in this type of dynamic together?", type: "neutral" },
    { text: "If you could change one thing about our current dynamic, what would it be?", type: "neutral" },
    { text: "What’s your biggest fear when it comes to exploring kink or ENM dynamics with me?", type: "neutral" },
    { text: "What’s a desire you've kept from everyone that you’re nervous to share?", type: "neutral" },
    { text: "Have we ever experimented with temperature play? How did it feel for you?", type: "neutral" },
    { text: "What’s your favourite kind of outfit to wear when we play?", type: "neutral" },
    { text: "Have we ever experimented with extreme pain play? What’s your favorite type?", type: "neutral" },
    { text: "What’s one piece of equipment you’ve never used with me but would love to try?", type: "neutral" },
    { text: "Have we ever tried sensory deprivation (e.g., blindfolds)? How did it feel for you?", type: "neutral" },
    { text: "Do you prefer leather or latex, && why?", type: "neutral" },
    { text: "Which would be your choice of roleplay for us: teacher/student, patient/nurse, or jailer/inmate?", type: "neutral" },
    { text: "Which sexual activity are any future partners totally not ready for from me?", type: "neutral" },
    { text: "What’s the kinkiest request you’ve ever received?", type: "neutral" },
    { text: "How did you feel when you first saw me naked?", type: "neutral" },
    { text: "If you could only indulge in oral, vaginal or anal sex for the rest of your life, which would it be?", type: "neutral" },
    { text: "If we could star in a BDSM-themed movie or show, what would it be called?", type: "neutral" },
    { text: "How do you feel about sharing my body with someone else during a group play session?", type: "neutral" },
    { text: "What’s your favourite way for us to explore anal play, && why?", type: "neutral" },
    { text: "How do you feel when you see me playing with someone else at an event?", type: "neutral" },
    { text: "Would you want us to explore group play more often? Why or why not?", type: "neutral" },
    { text: "How would you feel about us participating in a public kink scene with an audience at an event?", type: "neutral" },
    { text: "What would be your biggest turn-on about seeing me with multiple people?", type: "neutral" },
    { text: "What boundaries would you want to set for us at a public kink or sex event?", type: "neutral" },
    { text: "Have you ever been nervous to engage in public play with me? What made you feel that way?", type: "neutral" },
    { text: "How do you feel about the idea of us playing completely separately with others at events or parties?", type: "neutral" },
    { text: "Is there anyone we’ve engaged with in the past that you’d like to invite for a group session?", type: "neutral" },
    { text: "How would you feel if I organised a private session with someone else && invited you to watch?", type: "neutral" },
    { text: "How would you feel about us performing a kink demonstration together at a public event?", type: "neutral" },
    { text: "Pick two celebrities, one male && one female, to join us for a hot && steamy evening together", type: "neutral" },
    { text: "Would you describe me as a good kisser? Just good, or great?", type: "neutral" },
    { text: "If we played separately at an event, how would you want us to reconnect afterward?", type: "neutral" },
    { text: "Name a sexual activity that someone else does notably better than I do", type: "neutral" },
    { text: "Do you have an ex partner that you fantastise about playing with again?", type: "neutral" },
    { text: "In what ways do I need to work on my foreplay game?", type: "neutral" },
    { text: "How would you rate the most recent play we had out of 10?", type: "neutral" },
    { text: "How would you rate the most recent play you had with someone else, out of 10?", type: "neutral" },
    { text: "In your opinion, which is more important? Length or girth? (Can be for a toy or penis)", type: "neutral" },
    { text: "Which every day outfit do you find me most attractive in?", type: "neutral" },
    { text: "Do you want me to send you pics && videos from scenes with other people?", type: "neutral" },
    { text: "What household item would you least want to be tied up with, && why?", type: "neutral" },
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
    { text: "What's your ultimate free-use fantasy scenario involving me && someone else?", type: "neutral" },
    { text: "Describe your ideal scenario of being shared at a kink event - who watches? Who participates?", type: "neutral" },
    { text: "What's the most intense CNC (consensual non-consent) scenario you've fantasised about?", type: "neutral" },
    { text: "How would you feel about us livestreaming our play session?", type: "neutral" },
    { text: "What's the most explicit photo/video you'd let me take to share with others?", type: "neutral" },
    { text: "What's the most extreme public play you'd consent to if guaranteed privacy?", type: "neutral" },
    { text: "How would you feel about me negotiating your limits with a new play partner?", type: "neutral" },
    { text: "What's your ultimate orgasm torture scenario? Edging duration? Overstim methods?", type: "neutral" },
    { text: "How should we memorialise your best kink moments? Tattoos? Photo wall? Trophy case?", type: "neutral" },
    { text: "Which previous partner had the most memorable oral technique && what made it special?", type: "neutral" },
    { text: "What's something you learned from a past lover that you now use in our play?", type: "neutral" },
    { text: "Describe the most skilled handjob/fingering technique you've ever received from someone else", type: "neutral" },
    { text: "Which ex had the best stamina && how did that impact your sessions?", type: "neutral" },
    { text: "What's the most impressive physical attribute a past partner had that you still think about?", type: "neutral" },
    { text: "Which former flame had the dirtiest mouth during sex? Describe their best line", type: "neutral" },
    { text: "What's one move from a previous partner's repertoire you wish I'd adopt?", type: "neutral" },
    { text: "Who gave you your most intense orgasm before me, && what were they doing?", type: "neutral" },
    { text: "Describe the most creative use of furniture you've experienced with someone else", type: "neutral" },
    { text: "Which past partner had the best aftercare routine && what made it exceptional?", type: "neutral" },
    { text: "If you could choose one real person (not a celebrity) to watch me have sex with, who would it be?", type: "neutral" },
    { text: "What's a specific way you feel compersion for me when I'm with another partner?", type: "neutral" },
    { text: "Describe a time you felt 'new relationship energy' (NRE) with someone else. How did you navigate it with me?", type: "neutral" },
    { text: "What's one aspect of our ENM agreement you'd like to renegotiate or clarify?", type: "neutral" },
    { text: "How do you handle scheduling conflicts or time management between me && other partners?", type: "neutral" },
    { text: "What's your ideal level of communication about my other relationships? Too much detail? Not enough?", type: "neutral" },
    { text: "Describe a fantasy involving me, you, && one (or more) of your other partners.", type: "neutral" },
    { text: "What's the most challenging aspect of being my primary partner (if applicable) in an ENM structure?", type: "neutral" },
    { text: "How do you feel about fluid bonding or safer sex practices within our network?", type: "neutral" },
    { text: "What's a kink you're curious about but hesitant to bring up?", type: "neutral" },
    { text: "How do you differentiate between jealousy && envy in our dynamic?", type: "neutral" },
    { text: "If we were to introduce a new long-term partner into our dynamic, what qualities would be most important?", type: "neutral" },
    { text: "What's the most unexpected thing you've enjoyed about ENM?", type: "neutral" },
    { text: "How do you feel about discussing our ENM dynamic with friends or family?", type: "neutral" },
    { text: "Describe a time you felt particularly secure && loved within our non-monogamous relationship.", type: "neutral" },
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
    { text: "What’s the most vulnerable you’ve felt during a scene with me, && why?", type: "D_asks_S" },
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "D_asks_S" },
    { text: "What’s the most intense impact play moment we’ve tried, && did you enjoy it?", type: "D_asks_S" },
    { text: "What would be the perfect safeword for us to use that also turns you on?", type: "D_asks_S" },
    { text: "Would you prefer for me to punish you for bad behavior or reward you for being good?", type: "D_asks_S" },
    { text: "What non-sexual act turns you on the most when we’re in a kink scene?", type: "D_asks_S" },
    { text: "If you had to wear a collar in public for me, how would it make you feel?", type: "D_asks_S" },
    { text: "What’s a limit you thought you had, but discovered you enjoy when I pushed it?", type: "D_asks_S" },
    { text: "Do you prefer when I restrain you with ropes, cuffs, or something else?", type: "D_asks_S" },
    { text: "How often do you experience sub-drop after a scene with me?", type: "D_asks_S" },
    { text: "Do you prefer silent obedience or verbal interaction with me during a scene?", type: "D_asks_S" },
    { text: "Is there a phrase I could say that would instantly turn you on?", type: "D_asks_S" },
    { text: "What’s your favourite type of edging play with me, && how long do you think you could last?", type: "D_asks_S" },
    { text: "Would you rather be made to orgasm on command or be denied by me completely for a night?", type: "D_asks_S" },
    { text: "What’s the most challenging position I’ve ever restrained you in?", type: "D_asks_S" },
    { text: "What’s the most intense form of humiliation you've experienced && enjoyed?", type: "D_asks_S" },
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
    { text: "What's the threshold between challenging pain && a hard limit for you?", type: "D_asks_S" },

    // --- sub asks Dom Questions (S_asks_D) ---
    { text: "What does aftercare usually look like for you? How can I best provide it?", type: "S_asks_D" },
    { text: "What’s your favorite part of a power exchange dynamic with me?", type: "S_asks_D" },
    { text: "Do you prefer when I am rough with you or when I’m gentle?", type: "S_asks_D" },
    { text: "What’s the most dominant thing you’ve done to me during a scene?", type: "S_asks_D" },
    { text: "How often do you experience dom-drop after a scene with me?", type: "S_asks_D" },
    { text: "What’s the worst possible pet name for a Dom?", type: "S_asks_D" },
    { text: "What mundane task would you make a sub do as punishment?", type: "S_asks_D" },
    { text: "What role do you see yourself taking in a group scene? Dominant, submissive, or switch?", type: "S_asks_D" },
    { text: "What's a specific insecurity that ENM brings up for you, && how can I support you with it?", type: "S_asks_D" },
    { text: "Describe a time you felt 'domspace'. What did it feel like?", type: "S_asks_D" },
    { text: "What's your favourite type of verbal interaction during a scene (praise, degradation, commands, silence)?", type: "S_asks_D" },
    { text: "What qualities do you look for in a submissive partner?", type: "S_asks_D" },
    { text: "How do you prefer I communicate my limits or needs during a scene?", type: "S_asks_D" },
    { text: "What's one aspect of being dominant that you find challenging?", type: "S_asks_D" },
    { text: "Describe a time you felt particularly proud of my submission or service.", type: "S_asks_D" },
    { text: "What kind of feedback do you appreciate after a scene?", type: "S_asks_D" },
    { text: "Is there a particular type of scene or dynamic you'd like to explore more with me?", type: "S_asks_D" },
    { text: "What’s your favorite way to tease me until I beg?", type: "S_asks_D" },
    { text: "When was the last time you pushed a boundary with me, && how did it feel afterward?", type: "S_asks_D" },
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
    { text: "How do you balance control with ensuring my pleasure && well-being during a scene?", type: "S_asks_D" },
    { text: "Are there any specific dominant figures (real or fictional) who inspire your style?", type: "S_asks_D" },
    { text: "What's something you appreciate about my submission that I might not be aware of?", type: "S_asks_D" },
    { text: "How important is verbal affirmation or praise *from* me *to* you during or after a scene?", type: "S_asks_D" },
    { text: "What's one rule you'd like to implement in our dynamic, even just temporarily?", type: "S_asks_D" },
    { text: "Is there anything you hesitate to ask for when you're dominant, fearing it might be 'too much'?", type: "S_asks_D" },
    { text: "How do you feel about negotiating scenes beforehand versus more spontaneous play?", type: "S_asks_D" }
];

const coupleForfeits = [
    "You must head to the bathroom, take a naughty photo && send it to the other player",
    "You must remove one item of clothing",
    "You must kiss the other player's neck for 10 seconds",
    "You must take 5 spanks",
    "You must let the other player restrain you in some way for 5 minutes",
    "You must refer to the other player as Daddy/Mommy for the rest of the game",
    "You must choose someone else to message, telling them you just masturbated thinking of them",
    "You must remove two items of clothing",
    "You must be in a doggy receiving position for the next 4 questions",
    "You must down your drink. If you don't have one, the other player can make you one.",
    "You must slide a hand into the other person's pants, && have a good feel for 10 seconds",
    "You must allow the other player to call you 'slut' for the remainder of the game",
    "You must perform your best slut drop",
    "You must enthusiastically mime what you most enjoy doing with/to your partner's private parts",
    "You must let your partner go && choose a sex toy to use on you for at least 20 seconds",
    "You must do a mating ritual dance for your partner",
    "You must seductively eat something phallic shaped. Bonus points if you put on Marvin Gaye's 'Let's Get It On' in the background",
    "You must show your partner the latest porn video you watched",
    "You must lick your partner's elbow or knee (your choice) until they answer their next question",
    "Your partner has 10 seconds to choose any forfeit for you",
    "You must act out your favourite porn genre in a charades style for your partner to guess",
    "Choose someone to message that has a partner, && tell them you think their partner is attractive",
    "Tease your own bare nipples && say 'These make milk like moo moo cows'",
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
    "Find something food-based && turn it sexual",
    "Give the other player a 60-second foot massage.",
    "Blindfold yourself for the next two questions.",
    "Let the other player write a temporary 'property of' mark on you (visible only to them).",
    "Describe your partner's best physical feature in explicit detail.",
    "Confess the last time you masturbated && what you thought about.",
    "Let the other player choose a song for you to strip tease (partially or fully) to.",
    "Whisper three dirty things you want to do to the other player.",
    "Wear an ice cube somewhere sensitive until it melts.",
    "Let the other player apply lipstick to you (regardless of gender) && wear it for 10 minutes.",
    "Perform 10 push-ups or sit-ups while complimenting the other player.",
    "Send a suggestive text to the other player right now.",
    "Let the other player choose one part of your body to kiss for 30 seconds.",
    "Gag yourself lightly (e.g., with a scarf) for the next question.",
    "Kneel at the other player's feet until your next turn.",
    "Let the other player drip candle wax (safely, from a low temp candle) on a non-sensitive part of your body.",
    "Recite a nursery rhyme in your sexiest voice.",
    "Let the other player lightly spank you 10 times with their hand or a chosen implement.",
    "Describe your ideal threesome scenario involving the two of you && a specific type of person.",
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
    "Blindfold the other player && feed them a small piece of food.",
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
    "Describe the other player's smell in a sensual way.",
    "EASTER EGG: Message Rysta, the game creator, on Fetlife (RYSTA) or Instagram (@rystadom). Your message must be a confession of the naughtiest thing you've thought about doing with your partner. Be creative."
];

const friendsQuestions = [
    // Original, more conversational questions
    "What's a misconception you think I might have about your sex life?",
    "Have you ever had a sexual experience that made you see yourself differently?",
    "What's one thing you wish more people understood about sex or sexuality?",
    "Describe a time you felt really confident && sex-positive.",
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
    "Describe a time you felt powerful && dominant sexually.",
    "What's the most 'out-there' thing on your sexual bucket list?",
    "Have you ever had a fantasy about being with more than one person at once? Describe it.",
    "What's the difference between a 'kink' && a 'deal-breaker' for you?",
    "If you were to explore impact play, would you rather be the one giving or receiving the spanks?",
    "What's a non-sexual scenario that you find incredibly arousing (e.g., watching someone cook, fix something)?",
    "Have you ever fantasised about being with someone of a different gender than you usually go for?",
    "What's your favourite type of porn to watch, && what do you like about it?",
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
    "Take a suggestive selfie && send it to the other player.",
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
    "EASTER EGG: Message Rysta, the game creator, on Fetlife (RYSTA) or Instagram (@rystadom). Your message must be a confession of the naughtiest thing you've thought about doing with your friend here. Be creative."
];

const groupQuestions = [
    // Original, tamer questions (converted to new format)
    { text: "Who in this group do you think has the wildest, unspoken fantasy?", type: 'target' },
    { text: "If you had to trust one person here with a kinky secret, who would it be && why?", type: 'target' },
    { text: "Point to the person you think gives the best hugs. That person must now give a hug to the person on their left.", type: 'target' },
    { text: "Who here do you think would be most likely to survive a zombie apocalypse? Why?", type: 'target' },
    { text: "Ask a question to the person you know the least in this group.", type: 'target' },
    { text: "If you could pair up any two people in this room for a devious prank, who would they be && what's the prank?", type: 'target' },
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
    { text: "If you were to cast everyone in this room in a movie, what genre would it be && what roles would they play?", type: 'group' },
    { text: "Who in the group seems the most innocent, but you suspect is the wildest?", type: 'target' },
    // New, kinkier questions
    { text: "Who in this room do you think has the most experience with anal play?", type: 'target' },
    { text: "If you had to restrain one person in this room, who would it be && what would you use?", type: 'target' },
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
    { text: "Who here looks like they'd be into being praised && called a 'good girl/boy'?", type: 'target' },
    { text: "Point to the person you think has the best ass in the room.", type: 'target' },
    { text: "Who in the group would you want to be your 'sub' for an evening?", type: 'target' },
    { text: "If you had to watch porn with one person in this room, who would it be?", type: 'target' },
    { text: "Point to the person you'd most like to bite (gently!).", type: 'target' },
    { text: "Everyone goes around the circle && says who in the group they'd most like to kiss.", type: 'group' },
    { text: "Everyone reveals their biggest sexual turn-on.", type: 'group' },
    { text: "The group must decide on one person to take a forfeit. That person takes the next forfeit card.", type: 'group' },
    { text: "Everyone removes one item of clothing.", type: 'group' },
    { text: "Go around the circle. Each person describes their 'type' in three words.", type: 'group' },
    { text: "The group must invent a new, kinky rule that applies for the next 5 rounds.", type: 'group' },
    { text: "Everyone writes down a secret fantasy on a piece of paper. Shuffle them, && read them aloud. The group has to guess who wrote which fantasy.", type: 'group' },
];

const groupForfeits = [
    "Remove one item of clothing.",
    "Let the person to your right blindfold you for the next two rounds.",
    "You must sit on someone's lap (of their choosing) until your next turn.",
    "Give a 30-second lap dance to the person of your choice.",
    "Whisper a dirty secret into the ear of the person on your left.",
    "Let the person opposite you write a word on your body with their finger. You have to guess the word.",
    "You must refer to the person who asked the question as 'Master' or 'Mistress' for the next three rounds.",
    "Take an ice cube && slowly run it along the arm of the person to your right.",
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
    "You must get on all fours && act like a pet for the person of your choice for one round.",
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
    "You must take a body shot off a person of your choice (if applicable && consensual).",
    "For the next 3 rounds, you must address everyone with a kinky title (e.g., 'Yes, Sir', 'Of course, Mistress').",
    "EASTER EGG: Message Rysta, the game creator, on Fetlife (RYSTA) or Instagram (@rystadom). Your message must be a confession of the naughtiest thing you've thought about doing with someone in this room. Be creative."
];

/* === DOM handles === */
const els = {
  welcome: document.getElementById('welcomeContainer'),
  coupleSetup: document.getElementById('coupleSetupContainer'),
  groupSetup: document.getElementById('groupSetupContainer'),
  game: document.getElementById('gameContainer'),
  interstitial: document.getElementById('interstitialContainer'),

  groupModeBtn: document.getElementById('groupModeBtn'),
  coupleModeBtn: document.getElementById('coupleModeBtn'),
  friendsModeBtn: document.getElementById('friendsModeBtn'),

  startCouple: document.getElementById('startCoupleGameButton'),
  startGroup: document.getElementById('startGroupGameButton'),

  player1: document.getElementById('player1'),
  player2: document.getElementById('player2'),
  player1Role: document.getElementById('player1Role'),
  player2Role: document.getElementById('player2Role'),
  player1RoleRow: document.getElementById('player1RoleRow'),
  player2RoleRow: document.getElementById('player2RoleRow'),

  newPlayerName: document.getElementById('newPlayerName'),
  addPlayerBtn: document.getElementById('addPlayerBtn'),
  playerList: document.getElementById('playerList'),

  questionCard: document.getElementById('questionCard'),
  forfeitCard: document.getElementById('forfeitCard'),
  cardTypeLabel: document.getElementById('cardTypeLabel'),
  turnIndicator: document.getElementById('turnIndicator'),
  interstitialMessage: document.getElementById('interstitialMessage'),
  readyButton: document.getElementById('readyButton'),

  nextButton: document.getElementById('nextButton'),
  forfeitButton: document.getElementById('forfeitButton'),
  skipButton: document.getElementById('skipButton'),
  undoButton: document.getElementById('undoButton'),
  newGameButton: document.getElementById('newGameButton'),
  homeLogoLink: document.getElementById('homeLogoLink'),
  muteButton: document.getElementById('muteButton'),

  modeBadge: document.getElementById('modeBadge'),
  progressBadge: document.getElementById('progressBadge'),
  repeatNotice: document.getElementById('repeatNotice'),

  timerBar: document.getElementById('timerBar'),
  timerDisplay: document.getElementById('timerDisplay'),
  timerStart: document.getElementById('timerStart'),
  timerPause: document.getElementById('timerPause'),
  timerReset: document.getElementById('timerReset'),

  // welcome controls
  spiceTame: document.getElementById('spiceTame'),
  spiceSpicy: document.getElementById('spiceSpicy'),
  spiceFilthy: document.getElementById('spiceFilthy'),
  allowExternal: document.getElementById('allowExternal'),
  soundEnabled: document.getElementById('soundEnabled'),

  tutorialLink: document.getElementById('tutorialLink'),
  tutorialModal: document.getElementById('tutorialModal'),
  closeTutorial: document.getElementById('closeTutorial'),

  customModal: document.getElementById('customModal'),
  addCustomBtn: document.getElementById('addCustomBtn'),
  addCustomBtnGroup: document.getElementById('addCustomBtnGroup'),
  customKind: document.getElementById('customKind'),
  customSubtype: document.getElementById('customSubtype'),
  customSubtypeWrap: document.getElementById('customSubtypeWrap'),
  customSpice: document.getElementById('customSpice'),
  customExternal: document.getElementById('customExternal'),
  customText: document.getElementById('customText'),
  saveCustom: document.getElementById('saveCustom'),
  cancelCustom: document.getElementById('cancelCustom'),

  resetModal: document.getElementById('resetModal'),
  resetCancel: document.getElementById('resetCancel'),
  saveExit: document.getElementById('saveExit'),
  hardReset: document.getElementById('hardReset'),
};

/* === Utilities === */
const LSK = 'kinkandtell_simplified_state';
const rand = (n) => Math.floor(Math.random() * n);
function shuffle(arr) { const a = arr.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function normaliseQuestion(item, fallbackType='neutral'){ return typeof item==='string' ? {text:item, type:fallbackType} : {text:item.text, type:item.type||fallbackType}; }
function normaliseForfeit(item){ return typeof item==='string' ? {text:item} : {text:item.text}; }
function classifySpice(text){
  const t = (text||'').toLowerCase();
  const filthy = /(cum|orgasm|watersport|knife|cnc|degradation|deepthroat|anal|double penetration|dp|fuck|cock|pussy|slut|choke|gag|vibrator|collar|spank|whip|lap dance|threesome|sex club)/;
  const spicy = /(kiss|makeout|undress|nipple|toy|roleplay|edge|deny|praise|porn|public|bondage|rope|cuffs|wax|mouth|strip|dirty talk|good boy|good girl)/;
  if (filthy.test(t)) return 'filthy';
  if (spicy.test(t)) return 'spicy';
  return 'tame';
}
function hasTimeLimit(text){
  if (!text) return false;
  const t = text.toLowerCase();
  if (/(\\b\\d+[-\\s]?(sec|secs|second|seconds|min|mins|minute|minutes|hr|hrs|hour|hours)\\b)/.test(t)) return true;
  if (/for\\s+\\d+\\s+(seconds?|mins?|minutes?|hours?)/.test(t)) return true;
  if (/for\\s+(one|two|three|four|five)\\s+(seconds?|minutes?|hours?)/.test(t)) return true;
  if (/until it melts/.test(t)) return true;
  return false;
}
function typeLabel(t){
  if (!t) return 'Question';
  if (t==='group') return 'Group';
  if (t==='target') return 'Targeted';
  if (t==='D_asks_S') return 'Dom asks Sub';
  if (t==='S_asks_D') return 'Sub asks Dom';
  return 'Question';
}

/* === State === */
const state = {
  mode: null,
  players: [],
  askerIndex: 0,
  askCounts: [],
  used: { questions: new Set(), forfeits: new Set() },
  history: [],
  deck: { questions: [], forfeits: [] },
  spice: { tame: true, spicy: true, filthy: true },
  repeatsShown: false,
  timer: { start: 0, ms: 0, running: false, int: null },
};

/* === Persistence === */
function saveState(){
  try{
    const s = { ...state, used: { questions:[...state.used.questions], forfeits:[...state.used.forfeits] }, history: state.history.slice(-20), deck: undefined };
    localStorage.setItem(LSK, JSON.stringify(s));
  }catch{}
}
function loadState(){
  try{
    const raw = localStorage.getItem(LSK); if (!raw) return false;
    const s = JSON.parse(raw);
    Object.assign(state, s);
    state.used.questions = new Set(s.used?.questions||[]);
    state.used.forfeits = new Set(s.used?.forfeits||[]);
    return true;
  }catch{ return false; }
}
function clearState(){ localStorage.removeItem(LSK); }

/* === Deck building === */
function buildDecks(){
  const CQ = (window.coupleQuestions||[]).map(q=>normaliseQuestion(q,'neutral'));
  const CF = (window.coupleForfeits||[]).map(normaliseForfeit);
  const FQ = (window.friendsQuestions||[]).map(q=>normaliseQuestion(q,'neutral'));
  const FF = (window.friendsForfeits||[]).map(normaliseForfeit);
  const GQ = (window.groupQuestions||[]).map(q=>normaliseQuestion(q,'target'));

  let qDeckRaw=[], fDeckRaw=[];
  if (state.mode==='couple'){ qDeckRaw=CQ; fDeckRaw=CF; }
  if (state.mode==='friends'){ qDeckRaw=FQ; fDeckRaw=FF; }
  if (state.mode==='group'){ qDeckRaw=GQ; fDeckRaw=[]; }

  const qDeck = qDeckRaw.map(q=>({ ...q, spice: q.spice||classifySpice(q.text) }));
  const fDeck = fDeckRaw.map(f=>({ ...f, spice: f.spice||classifySpice(f.text) }));

  const allowed = new Set([ state.spice.tame?'tame':null, state.spice.spicy?'spicy':null, state.spice.filthy?'filthy':null ].filter(Boolean));
  state.deck.questions = shuffle(qDeck.filter(q=>allowed.has(q.spice)));
  state.deck.forfeits = shuffle(fDeck.filter(f=>allowed.has(f.spice)));
  state.used.questions.clear(); state.used.forfeits.clear();
  state.repeatsShown=false;
  updateProgress();
}

/* === UI helpers === */
function setScreen(screen){
  els.welcome.style.display = screen==='welcome'?'block':'none';
  els.coupleSetup.style.display = screen==='coupleSetup'?'block':'none';
  els.groupSetup.style.display = screen==='groupSetup'?'block':'none';
  els.game.style.display = screen==='game'?'block':'none';
  els.interstitial.hidden = screen!=='interstitial';
}
function updateModeBadge(){
  const t = state.mode? (state.mode[0].toUpperCase()+state.mode.slice(1)) : 'Mode';
  document.getElementById('modeBadge').textContent = t;
  document.body.classList.remove('mode-couple','mode-friends','mode-group');
  if (state.mode) document.body.classList.add(`mode-${state.mode}`);
}
function updateTurnIndicator(){
  if (state.mode==='group'){
    const asker = state.players[state.askerIndex]?.name || 'Player';
    els.turnIndicator.textContent = `${asker}, you are asking`;
  } else {
    const p1=state.players[0]?.name||'Player 1';
    const p2=state.players[1]?.name||'Player 2';
    els.turnIndicator.textContent = `${p1} && ${p2}`;
  }
}
function updateProgress(){ els.progressBadge.textContent = `${state.used.questions.size} used`; }
function showRepeatNoticeIfNeeded(kind){
  const deck = state.deck[kind], used = state.used[kind];
  if (!state.repeatsShown && used.size >= deck.length){ state.repeatsShown = true; els.repeatNotice.hidden=false; setTimeout(()=>els.repeatNotice.hidden=true, 4000); }
}

/* === Group rotation === */
function nextAskerIndex(){
  if (state.mode!=='group') return state.askerIndex;
  const min = Math.min(...state.askCounts);
  const cand = state.askCounts.map((c,i)=>({c,i})).filter(o=>o.c===min).map(o=>o.i);
  let chosen = cand[rand(cand.length)];
  if (chosen===state.askerIndex && cand.length>1){ chosen = cand[(cand.indexOf(chosen)+1)%cand.length]; }
  state.askerIndex=chosen; state.askCounts[chosen]=(state.askCounts[chosen]||0)+1;
  return chosen;
}

/* === Draws === */
let drawLock=false;
function guarded(fn){ if(drawLock) return; drawLock=true; fn(); setTimeout(()=>drawLock=false, 320); }

function drawQuestion(){
  guarded(()=>{
    const deck = state.deck.questions;
    if (!deck.length){ els.questionCard.textContent='No questions available with the current filters.'; return; }
    let idx=rand(deck.length), tries=0;
    while(state.used.questions.has(idx) && tries<deck.length){ idx=(idx+1)%deck.length; tries++; }
    const item = deck[idx];
    els.cardTypeLabel.textContent = typeLabel(item.type);
    els.questionCard.textContent = item.text;
    els.forfeitCard.hidden = true;
    els.timerBar.hidden = true; // ensure timer OFF for questions

    state.history.push({ kind:'questions', index:idx, text:item.text, type:item.type });
    state.used.questions.add(idx);
    showRepeatNoticeIfNeeded('questions'); updateProgress(); saveState();

    if (state.mode==='group'){
      setScreen('interstitial');
      const nextIdx = nextAskerIndex();
      els.interstitialMessage.textContent = `${state.players[nextIdx]?.name || 'Player'}, your turn to ask`;
    }
  });
}

function drawForfeit(){
  guarded(()=>{
    const deck = state.deck.forfeits;
    if (!deck.length){ els.forfeitCard.textContent='No forfeits available with the current filters.'; els.forfeitCard.hidden=false; els.timerBar.hidden=true; return; }
    let idx=rand(deck.length), tries=0;
    while(state.used.forfeits.has(idx) && tries<deck.length){ idx=(idx+1)%deck.length; tries++; }
    const item = deck[idx];
    els.cardTypeLabel.textContent='Forfeit';
    els.forfeitCard.textContent=item.text;
    els.forfeitCard.hidden=false;

    // Timer only for time-limited forfeits
    els.timerBar.hidden = !hasTimeLimit(item.text);

    state.history.push({ kind:'forfeits', index:idx, text:item.text, type:'forfeit' });
    state.used.forfeits.add(idx);
    showRepeatNoticeIfNeeded('forfeits'); saveState();
  });
}

function skipCard(){ if(!state.history.length) return; drawQuestion(); }
function undoLast(){
  const last = state.history.pop(); if(!last) return;
  const usedSet = state.used[last.kind]; if (usedSet) usedSet.delete(last.index);
  if (last.kind==='questions'){ els.questionCard.textContent='Undone. Tap Next to continue.'; } else { els.forfeitCard.hidden=true; els.timerBar.hidden=true; }
  updateProgress(); saveState();
}

/* === Timer controls (manual) === */
function formatMs(ms){ const total=Math.max(0,Math.floor(ms/1000)); const m=String(Math.floor(total/60)).padStart(2,'0'); const s=String(total%60).padStart(2,'0'); return `${m}:${s}`; }
function timerTick(){ els.timerDisplay.textContent = formatMs(state.timer.ms + (Date.now()-state.timer.start)); }
function timerStart(){ if(state.timer.running) return; state.timer.running=true; state.timer.start=Date.now(); state.timer.int=setInterval(timerTick,200); }
function timerPause(){ if(!state.timer.running) return; state.timer.ms += Date.now()-state.timer.start; state.timer.running=false; clearInterval(state.timer.int); state.timer.int=null; timerTick(); }
function timerReset(){ state.timer.ms=0; els.timerDisplay.textContent='00:00'; }

/* === Setup flows === */
function openSetup(mode){
  state.mode = mode; updateModeBadge();
  const friends = mode==='friends';
  if (mode==='group'){
    state.players=[]; els.playerList.innerHTML=''; setScreen('groupSetup');
  } else {
    els.player1.value=''; els.player2.value=''; els.player1RoleRow.style.display = friends?'none':'grid'; els.player2RoleRow.style.display = friends?'none':'grid'; setScreen('coupleSetup');
  }
}
function startCoupleOrFriends(){
  const p1=els.player1.value.trim()||'Player 1'; const p2=els.player2.value.trim()||'Player 2';
  const friends = state.mode==='friends';
  const r1 = friends?'switch':els.player1Role.value; const r2 = friends?'switch':els.player2Role.value;
  state.players=[{name:p1, role:r1},{name:p2, role:r2}];
  state.askerIndex=0; state.askCounts=[0,0];
  buildDecks(); updateTurnIndicator(); setScreen('game'); saveState();
}
function addGroupPlayer(){ const name=els.newPlayerName.value.trim(); if(!name) return; state.players.push({name,role:'switch'}); els.newPlayerName.value=''; renderGroupList(); }
function removeGroupPlayer(i){ state.players.splice(i,1); renderGroupList(); }
function renderGroupList(){
  els.playerList.innerHTML='';
  state.players.forEach((p,i)=>{
    const li=document.createElement('li');
    li.innerHTML=`<span>${p.name}</span><button class="remove-player-btn" title="Remove">×</button>`;
    li.querySelector('button').addEventListener('click',()=>removeGroupPlayer(i));
    els.playerList.appendChild(li);
  });
}
function startGroup(){
  if (state.players.length<3){ state.players = state.players.length? state.players : [{name:'A'},{name:'B'},{name:'C'}]; }
  state.askerIndex=0; state.askCounts=new Array(state.players.length).fill(0);
  buildDecks(); updateTurnIndicator(); setScreen('game'); saveState();
}

/* === Custom cards === */
function openCustomModal(){
  document.getElementById('customSubtypeWrap').style.display = state.mode==='couple' && els.customKind.value==='question' ? 'grid':'none';
  els.customText.value=''; document.getElementById('customExternal').checked=false; els.customSpice.value='tame'; els.customModal.showModal();
}
function saveCustomCard(){
  const kind=els.customKind.value; const text=els.customText.value.trim(); if(!text) return; const spice=els.customSpice.value;
  if (state.mode==='couple' && kind==='question'){ const type=els.customSubtype.value; coupleQuestions.push({text, type, spice}); }
  else if (state.mode==='friends' && kind==='question'){ friendsQuestions.push({text, spice}); }
  else if (state.mode==='group' && kind==='question'){ groupQuestions.push({text, type:'target', spice}); }
  else { // forfeit
    const obj={text, spice}; // no external toggle any more
    if (state.mode==='couple') coupleForfeits.push(obj);
    if (state.mode==='friends') friendsForfeits.push(obj);
  }
  els.customModal.close(); buildDecks(); saveState();
}

/* === Reset / Save & exit === */
function openResetModal(){ document.getElementById('resetModal').showModal(); }
function doSaveAndExit(){ saveState(); setScreen('welcome'); document.getElementById('resetModal').close(); }
function doHardReset(){
  clearState(); state.mode=null; state.players=[]; state.askCounts=[]; state.used.questions.clear(); state.used.forfeits.clear(); state.history=[]; state.deck.questions=[]; state.deck.forfeits=[]; state.repeatsShown=false;
  els.questionCard.textContent='Tap Next to begin.'; els.forfeitCard.hidden=true; els.timerBar.hidden=true; setScreen('welcome'); document.getElementById('resetModal').close();
}

/* === Interstitial === */
els.readyButton.addEventListener('click',()=>setScreen('game'));

/* === Spiciness buttons (replace checkboxes) === */
function buildSpiceChips(){
  const tame = els.spiceTame, spicy = els.spiceSpicy, filthy = els.spiceFilthy;
  const block = tame?.closest('.control-block');
  if (!block) return;
  // Hide original toggles
  block.querySelectorAll('.toggle').forEach(el=> el.style.display='none');
  // Build pill buttons
  const wrap = document.createElement('div');
  wrap.id = 'spicePills';
  wrap.style.display='flex'; wrap.style.gap='8px'; wrap.style.flexWrap='wrap';

  const mk = (label, key) => {
    const b = document.createElement('button');
    b.type='button';
    b.textContent = label;
    b.className = 'secondary';
    b.style.minWidth='88px';
    b.style.borderRadius='999px';
    b.style.padding='10px 14px';
    function paint(){
      const on = state.spice[key];
      b.style.background = on ? 'var(--primary)' : 'var(--surface-2)';
      b.style.color = on ? '#0d0d0f' : 'var(--text)';
      b.style.border = '1px solid var(--line)';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    b.addEventListener('click', ()=>{
      state.spice[key] = !state.spice[key];
      // Keep at least one level on
      if (!state.spice.tame && !state.spice.spicy && !state.spice.filthy){ state.spice[key] = true; }
      paint();
      if (state.mode){ buildDecks(); saveState(); }
    });
    paint();
    return b;
  };

  wrap.appendChild(mk('Tame','tame'));
  wrap.appendChild(mk('Spicy','spicy'));
  wrap.appendChild(mk('Filthy','filthy'));
  block.appendChild(wrap);
}

/* === Emphasise primary actions; deemphasise secondary === */
function emphasiseControls(){
  // Make Next/Forfeit larger
  if (els.nextButton){ els.nextButton.style.padding='16px 18px'; els.nextButton.style.fontSize='16px'; }
  if (els.forfeitButton){ els.forfeitButton.style.padding='16px 18px'; els.forfeitButton.style.fontSize='16px'; }
  // Tone down skip/undo/new
  [els.skipButton, els.undoButton, els.newGameButton].forEach(btn => {
    if (!btn) return; btn.style.opacity='0.9'; btn.style.fontWeight='600'; btn.style.padding='10px 12px'; btn.style.fontSize='13px';
  });
}

/* === Event wiring === */
els.groupModeBtn.addEventListener('click', ()=>openSetup('group'));
els.coupleModeBtn.addEventListener('click', ()=>openSetup('couple'));
els.friendsModeBtn.addEventListener('click', ()=>openSetup('friends'));

els.startCouple.addEventListener('click', startCoupleOrFriends);
els.startGroup.addEventListener('click', startGroup);

els.addPlayerBtn.addEventListener('click', addGroupPlayer);
els.newPlayerName.addEventListener('keydown', e=>{ if(e.key==='Enter') addGroupPlayer(); });

els.nextButton.addEventListener('click', drawQuestion);
els.forfeitButton.addEventListener('click', drawForfeit);
els.skipButton.addEventListener('click', skipCard);
els.undoButton.addEventListener('click', undoLast);

els.timerStart.addEventListener('click', timerStart);
els.timerPause.addEventListener('click', timerPause);
els.timerReset.addEventListener('click', timerReset);

els.homeLogoLink.addEventListener('click', e=>{ e.preventDefault(); openResetModal(); });
els.newGameButton.addEventListener('click', openResetModal);

els.tutorialLink.addEventListener('click', e=>{ e.preventDefault(); els.tutorialModal.showModal(); });
els.closeTutorial.addEventListener('click', ()=> els.tutorialModal.close());

els.addCustomBtn.addEventListener('click', openCustomModal);
els.addCustomBtnGroup.addEventListener('click', openCustomModal);
els.customKind.addEventListener('change', ()=> { els.customSubtypeWrap.style.display = state.mode==='couple' && els.customKind.value==='question' ? 'grid' : 'none'; });
els.saveCustom.addEventListener('click', saveCustomCard);
els.cancelCustom.addEventListener('click', ()=> els.customModal.close());

els.resetCancel.addEventListener('click', ()=> els.resetModal.close());
els.saveExit.addEventListener('click', doSaveAndExit);
els.hardReset.addEventListener('click', doHardReset);

/* Touch gestures for quick play */
['questionCard','forfeitCard'].forEach(id=>{
  const el=document.getElementById(id);
  el.addEventListener('touchstart', e=> window._ts = e.changedTouches[0], {passive:true});
  el.addEventListener('touchend', e=>{
    const s = window._ts; if(!s) return; const end=e.changedTouches[0];
    const dx=end.clientX - s.clientX, dy=end.clientY - s.clientY;
    if (Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)) { if (dx>0) drawQuestion(); }
    else if (Math.abs(dy)>60 && Math.abs(dy)>Math.abs(dx)) { if (dy<0) drawForfeit(); }
    window._ts=null;
  }, {passive:true});
});

/* === Init === */
(function init(){
  // Build pill buttons for spice && hide unwanted controls
  try {
    buildSpiceChips();
    // Hide External Actions block && Sound block if present
    els.allowExternal?.closest('.control-block')?.style && (els.allowExternal.closest('.control-block').style.display='none');
    els.soundEnabled?.closest('.control-block')?.style && (els.soundEnabled.closest('.control-block').style.display='none');
    // Hide mute button if present
    els.muteButton && (els.muteButton.style.display='none');
    // Hide 'External action' row in custom modal
    document.getElementById('customExternal')?.closest('.row')?.style && (document.getElementById('customExternal').closest('.row').style.display='none');
  } catch {}

  emphasiseControls();

  if (loadState() && state.mode){
    updateModeBadge(); buildDecks(); updateTurnIndicator(); setScreen('game');
    if (state.history.length){
      const last = state.history[state.history.length-1];
      els.cardTypeLabel.textContent = typeLabel(last.type);
      if (last.kind==='forfeits'){ els.forfeitCard.textContent=last.text; els.forfeitCard.hidden=false; els.timerBar.hidden = !hasTimeLimit(last.text); }
      else { els.questionCard.textContent=last.text; els.forfeitCard.hidden=true; els.timerBar.hidden=true; }
      updateProgress();
    }
  } else {
    setScreen('welcome');
  }
})();

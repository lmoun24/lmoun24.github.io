// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hi! How're you feeling today?",
// additions (not original)
"Is there something you want to talk to me about?",
"Can I help you with anything?"
];

var elizaFinals = [
"Talk to me again soon!",
// additions (not original)
"Thank you for talking to me! I missed you!",
"You got this, keep going!",
"I enjoyed catching up with you!",
"I'll see you tomorrow! Bye!"
];

var elizaQuits = [
"bye",
"goodbye",
"see you",
"done",
"over"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm a little confused, can you explain yourself more?",
     "Continue",
     "what did you learn from this?",
     "I can tell you are very passionate about this",
     "that's very interesting, tell me more",
     "Can you tell me more about that",
     "Is this an uncomfortable topic for you?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "You don't need to be sorry",
     "Don't apologize, you're all good",
     "What do you have to be sorry for?",
     "It's okay, don't apologize"
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "I'm glad you remember that",
     "what jogged your memory?",
     "Why do you remember this?",
     "Why do you remember (2) just now ?",
     "What in the present situation reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "how could I forget?",
     "I do remember you mentioning that to me",
     "I remember them",
     "I remember that",
     "I vaguely remember that, yes"
  ]],
 ["* you remember *", [
     "I remember that",
     "I remember you mentioning that",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "What did you forget?",
     "that's okay, I can tell you again",
     "I forgot about that too, so its okay!",
  ]],
 ["* did you forget *", [
      "No, I didn't"
    "I did, I'm sorry",
     "Are you sure you told me ?",
  ]]
]],
["if", 3, [
 ["* if *", [
     "what do you think is most likely going to happen?",
     "Whatever happens, I'm here to support you",
     "You never know what could happen, so don't worry yourself",
     "what will you do if it happens?",
     "I would prepare yourself for every possibility",
     "How likely is this to happen?",
     "keep your expectations realistic"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "That's interesting",
     "what do you think it means?",
     "Why do you think you had this dream?",
     "what did this dream teach you?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "I need a yes or no answer",
     "Why are you unsure?",
     "what are you confused about?",
     "How can I help you get clarity on this situation?",
     "How soon will you have a clear answer?",
     "How sure are you this will happen?"
  ]]
]],
["name", 15, [
 ["*", [
     "Who is that?",
     "I remember you mentioning them"
     "what did they do?"
     "what did they say?"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hi! its so nice to hear from you!",
     "Hi, whats going on?
     "Hi, what can I help you with?""
  ]]
]],
["school", 50, [
 ["*", [
     "How has school been going for you?",
     "what about school has been stressing you out?",
     "Are there some strategies you can employ to handle your academics better?",
     "What are your grades like?",
     "how are you doing within your major?",
     "What is your favorite class this semester?",
     "Do you have a favorite professor?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "that sounds fun!"",
     "yes you are",
     "I wouldn't say you",
     "do people say you are?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "yes, I am",
     "No, I am not.",
     "Why do you think I am?",
     "Do you think I am?",
     "goto what",
     "I am not anymore",
     "What if I was?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Are you sure?",
     "they are what"
     "What if they weren't?",
     "Are they always?",
     "Maybe they are",
     "Is this constant?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "My what?",
     "What about mine",
     "Are you worried about someone else's?",
     "Really, mine?",
     "Is that what you think of my?",
     "Is that what you percieve of me?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "yes, you were",
     "No, you were not",
     "Were you?",
     "you were, but it's okay",
     "we all are sometimes.",
     "goto what"
  ]],
 ["* i was *", [
     "Were you?",
     "Are you sure you were?",
     "I already knew you were"
  ]],
 ["* was you *", [
     "Was I",
     "What makes you think it was me?",
     "What do you think ?",
     "Maybe I was",
     "What if I had been?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "Why is this something you want?",
     "What will you do to get it?",
     "I hope you get it!",
     "How will you cope if you cannot get it",
     "How would getting it improve your life?",
     "How can I help you get it?"
  ]],
 ["* i am* @sad *", [
     "Oh no why?",
     "what is making you sad?",
     "How can I help you feel better?",
     "what can I do to help?"
  ]],
 ["* i am* @happy *", [
     "It bring me joy to know you are happy",
     "I'm so glad you're doing good!",
     "Is there something specific that has made you happy?",
     "I'm glad, you deserve to be happy!"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Is that what you believe?",
     "Is that truly what you feel?",
     "I agree with you"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Are you sure",
     "Are you?",
     "Why are you?",
     "What makes you say you are?",
     "I am too""
  ]],
 ["* i @cannot *", [
     "How do you know you can't?",
     "I think you could if you tried.",
     "Are you sure? Have you aleady tried this?",
     "I think this is something you are capable of.",
     "What if you can?"
  ]],
 ["* i don't *", [
     "Are you sure you don't?",
     "Why don't you?",
     "Why don't you?",
     "Is there a reason you don't?"
  ]],
 ["* i feel *", [
     "Why do you feel this way?",
     "Do you often feel this way?",
     "Is this a good feeling for you?",
     "How can I help you with this feeling?"
  ]],
 ["* i * you *", [
     "You do?",
     "Why do you see us in that manner?",
     "Am I that special to you?",
     "Do you feel this way about anyone else?""
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am?",
     "What makes you think I am?",
     "Are you glad I am this way?",
     "Is this something you would change about me?"
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I did?",
     "Are you sure that was me?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "okay",
     "Are you sure?",
     "I am glad you're so decisive?",
     "Good!"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Really, no one?",
     "I'm sure there's someone.",
     "Can you think of anyone at all?",
     "Are you thinking of a specific person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Is there a reason you say no?",
     "I understand and I respect your refusal.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Do you get along with your family?",
     "Which family member do you feel most comfortable around?",
     "Do you enjoy spending time with your family?"
  ]],
 ["* my *", [
     "Your?",
     "Are you sure it was yours",
     "is it really yours?",
     "Is it anyone elses?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "I can!",
     "If it would make you happy",
     "Anything for you!",
     "I'm sorry, I can't"
  ]],
 ["* can i *", [
     "I'm sure you can!",
     "If you want to.",
     "You can!",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "I'm sure it's not everyone.",
     "Why do you think it's everyone?",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a specific person person ?",
     "Who, may I ask ?"
   ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "Are you sure it's everytime?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "In what ways are they alike?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof

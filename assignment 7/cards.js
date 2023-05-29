
firstCard = {
  prompt: "Would you like a panini",
  rightChoiceText: "yes! mmmmm",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "naw,, I don't like bread", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy": {
    prompt: "Ah yes... swiss or american?",
    rightChoiceText: "swiss",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "american", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "You don't deserve a panini anyways. Toasted bread is for the elite",
    rightChoiceText: "ok..",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "meow", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}


secondCard = {
  prompt: "How do you feel about rain?",
  rightChoiceText: "I love it,, we are in a drought",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "ew.. I h hate being wet", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "I love you",
    rightChoiceText: "I love you too...",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "uhh what", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "K, I'll rain on you anyways",
    rightChoiceText: "AHHHHHHHH",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "GROSS", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

thirdCard = {
  prompt: "brrrrrrr",
  rightChoiceText: "its cold",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "penguin", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "Hug? (for warmth?)",
    rightChoiceText: "yasss",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "no id rather die of coldness", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "Why yes, I am a penguin",
    rightChoiceText: "huh?",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "I hate penguins", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

fourthCard = {
  prompt: "unda da sea",
  rightChoiceText: "seashells",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "sushi!", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "I love to collect and make beautiful necklaces out of sea shells",
    rightChoiceText: "awe, thats so lovely, mermaid",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "lol who cares", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "Oh my, that is an awful thing to say!",
    rightChoiceText: "You're right, Im sorry Im actually vegan",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "oops, i dont care", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}

fifthCard = {
  prompt: "giddie up, buttercup!",
  rightChoiceText: "i wanna be a cowboyyyy babyyyy",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "wtf", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "ChefHappy" : {
    prompt: "I'll train you, lets start with your best cowboy phrase",
    rightChoiceText: "Yeehaw!",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "this is lame", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "Gosh darn,you're a real stickler, now arent cha",
    rightChoiceText: "oops",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "I hate horses", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

sixthCard = {
  prompt: "oui",
  rightChoiceText: "bonjour",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("FrenchChefHappy")
    },
  
  leftChoiceText: "what?", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("FrenchChefBetrayed")
    enemiesMade += 1;
  },
  name: "French Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["FrenchChefHappy", "FrenchChefBetrayed"],
  
  "FrenchChefHappy" : {
    prompt: "A fellow french!",
    rightChoiceText: "swiss",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "american", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("FrenchChefBetrayed")
    enemiesMade += 1;
    },
    name: "French Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "FrenchChefBetrayed": {
    prompt: "You americans...",
    rightChoiceText: "ok..",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "paris", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "French Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

seventhCard = {
  prompt: "Floating is awesome",
  rightChoiceText: "ikr",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("FloatCloudHappy")
    },
  
  leftChoiceText: "nah, its a waste of time", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("FloatCloudBetrayed")
    enemiesMade += 1;
  },
  name: "Float Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["FloatCloudHappy", "FloatCloudBetrayed"],
  
  "FloatCloudHappy" : {
    prompt: "We get each other",
    rightChoiceText: "true",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "ummmmmmmm", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("FloatCloudBetrayed")
    enemiesMade += 1;
    },
    name: "Float Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "FloatCloudBetrayed": {
    prompt: "Hater",
    rightChoiceText: "LOL",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "clouds are lame", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Float Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

eigthCard = {
  prompt: "Theres a shrimp in ma boot!",
  rightChoiceText: "wait, I thought it was a snake",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "dang nabbit", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "No, thats right",
    rightChoiceText: "facts",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "ok haha", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "Meet me outside the saloon 5 pm sharp.",
    rightChoiceText: "No, violence is not the answer",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "bet", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}
ninthCard = {
  prompt: "The ocean is magical",
  rightChoiceText: "so true, it speaks to me",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "lol thats some hippie nonsense", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "Isn't it lovely",
    rightChoiceText: "yea",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "bruh", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "You should try swimming",
    rightChoiceText: "No, ill drown",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "ur funny", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}


tenthCard = {
  prompt: "Help! My baby is hatching",
  rightChoiceText: "the miracle of life! <3",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "Im not a doctor, get away from me", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "Hes coming any minute now, I cant wait to be a father",
    rightChoiceText: "Its a beautiful thing, congratulations",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "Boi", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "Oh, thats rude",
    rightChoiceText: "Im sorry, im just not qualified",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "idc about ur son", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

eleventhCard = {
  prompt: "Eat my food",
  rightChoiceText: "yes pls",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "no, gross", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "Welcome to my kitchen, what would you like?",
    rightChoiceText: "a baked crustini with tomatoes",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "oh im not hungry", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "How could you >:(",
    rightChoiceText: "LOL",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "sowwy", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

twelfthCard = {
  prompt: "rain rain go away come back another day",
  rightChoiceText: "cute song",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "that song is for babies", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "Right!",
    rightChoiceText: "yassss",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "no haha", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "You are a baby",
    rightChoiceText: "Waaaaaaaaaah!",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "No, I am not a baby!!!!!!!", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}


thirteenthCard = {
  prompt: "Wanna go surfing?",
  rightChoiceText: "Wait, but you are a penguin!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "Penguins dont surf", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "KALABUNGA DUDE",
    rightChoiceText: "surfs up!",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "I can't swim", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "You are such a party pooper",
    rightChoiceText: "I don't care, i love it",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "I crashed my car into the bridge", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

fourteenthCard = {
  prompt: "rootin tootin bootin, i love cows",
  rightChoiceText: "cute song",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "I am a city gal", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "Right!",
    rightChoiceText: "wooop woooop",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "I hate you", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "Yall hatin",
    rightChoiceText: "but i love cowboys",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: ":/", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

fifteenthCard = {
  prompt: "Seashells are the windows to the soul",
  rightChoiceText: "ay ay captain!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "i dont get it", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "The waves flush away hard times",
    rightChoiceText: "*snaps*",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "so poetic", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "No one appreciates me",
    rightChoiceText: "skrrrrrrt",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "............", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}



sixteenthCard = {
  prompt: "Mcdonalds is a mockery of fine dining",
  rightChoiceText: "Agreed! gimme real fancy food",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "but but but i love mcflurries", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "Our ancestors would be so disappointed in us",
    rightChoiceText: "they would probably die instantly from all the chemicals in our food today",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "ignorance is bliss", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "You can't ignore it forever",
    rightChoiceText: "I CAN AND I WILL",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Watch me", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}


seventeenthCard = {
  prompt: "these airplanes are quite literally tearing me apart",
  rightChoiceText: "oh no!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "but you are just a cloud", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "Its terrible, my family is being separated",
    rightChoiceText: "meeeeep",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "im sorry cloud, you don't deserve that. jk", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "Just a cloud? Just? That is my whole reality",
    rightChoiceText: "you are a beautiful cloud",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "wake up", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

eighteenthCard = {
  prompt: "these chickesn are giving me a headache",
  rightChoiceText: "cockadoodle-doo",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "too bad", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "They keep waking me up at the crack of dawn",
    rightChoiceText: "You need your beauty sleep",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "you chose the cowboy life", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "RUDE!",
    rightChoiceText: "sorry (sorry)",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Sorry not sorry", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

nineteenthCard = {
  prompt: "I wish I had legs",
  rightChoiceText: "but your tail is gorgeous",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "legs are only for humans, you sea- freak", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "Yeah, you're right",
    rightChoiceText: "Yes, you need to listen to your friends sometimes",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "i told you so", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "Oh my! Maybe I don't want to be a part of your disrespectful kind",
    rightChoiceText: "good!",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "thank goodness", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}

twentyCard = {
  prompt: "I can't believe Im just a part of this exhibit",
  rightChoiceText: "what? how do you know that",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "its too dangerous out in the real world", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "Because, I look outside and I see humans taking pictures of me!",
    rightChoiceText: "be greatful you are safe",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "that sucks", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "L",
    rightChoiceText: "L.",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "That's mean", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

twentyoneCard = {
  prompt: "A chef is like an artist",
  rightChoiceText: "yes! food is art",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefdHappy")
    },
  
  leftChoiceText: "no, chefs are not artists duh", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "Thank you! You understand!",
    rightChoiceText: "food is an interactive experience",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "actually, no I dont", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "You don't know what art is then",
    rightChoiceText: "Youre right, I need to stop being rude",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "HAHA IDC", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

twentytwoCard = {
  prompt: "I have a crush on this rain cloud.",
  rightChoiceText: "go for it!!!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "you dont stand a chance", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "Really? you think so?",
    rightChoiceText: "yassss you are so cute they will like you",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "just kidding, they won't like you back", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "Bruh.... Im gonna cry, uh I mean rain",
    rightChoiceText: "Here's a tissue",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Good we need some rain", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

twentythreeCard = {
  prompt: "lets go hunting",
  rightChoiceText: "ok",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "What??? thats so cruel", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "Finally someone who will go with me",
    rightChoiceText: "lets find some deer",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "just kidding, Im not a murderer", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "Thats what I though you would say",
    rightChoiceText: "Oh well",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Zip it", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

twentyfourCard = {
  prompt: "people are so weird. mermaids are so much better",
  rightChoiceText: "agreeeeeeeed",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "At least we can walk", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "Theyre so weirf eating sea food. How could they?",
    rightChoiceText: "ikr, fish are friends",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "but shrimp are yummy", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "How could you say that, you know Im insecure about that",
    rightChoiceText: "WHOOPS I FORGOT",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "You deserve it", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}

twentyfiveCard = {
  prompt: "Im jelous of birds",
  rightChoiceText: "why",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "did I ask?", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "They can fly and I cant",
    rightChoiceText: "Thats ok, some things just aren't meant to be",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "oh yeah, what a loser", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "Ok, nevermind",
    rightChoiceText: "Wait! im sorry",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "thats better", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

twentysixCard = {
  prompt: "escargo anyone?",
  rightChoiceText: "snails?!?",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "no way", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "yes! it is a delicacy",
    rightChoiceText: "ok, ill try it",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "im gonna throw up", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "Ok then. Get out of my restaraunt ",
    rightChoiceText: "Wait, I'll be good i promise",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "heheheh", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

twentysevenCard = {
  prompt: "lalalalalalalalal",
  rightChoiceText: "head in the clouds",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "what are you even saying?", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "You are so wise",
    rightChoiceText: "Thanks you!",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "unlike you", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "You wouldn't get it",
    rightChoiceText: "boi boi boi",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "ok lol", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

twentyeightCard = {
  prompt: "back in my day, we only had horses, hay, and card games",
  rightChoiceText: "sounds lovely",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "okay, boomer", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "Wow, you are so wise",
    rightChoiceText: "ikr",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "grrrrrrrrrrr", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "ARF ARF ARF",
    rightChoiceText: "meow meow",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "what the heck", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

twentynineCard = {
  prompt: "You wanna be me so bad",
  rightChoiceText: "i do... penguins are so cute",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "what are you talking about", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "IYKYK",
    rightChoiceText: "#awesome",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "you are so weird", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: ":(",
    rightChoiceText: "?",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Be sad", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}


thirtyCard = {
  prompt: "swish swish",
  rightChoiceText: "swish",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "what", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "Swish!",
    rightChoiceText: "woooooooooohooooooo",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "what is happening", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "Why are you confused",
    rightChoiceText: "I dont know",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Because you are confusing", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}

thridtyoneCard = {
  prompt: "sushi is awesome",
  rightChoiceText: "so delish",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "mermaid wouldn't like that statement", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "it is so pleasant",
    rightChoiceText: "pleasant indeed",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "naw", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "Omg, don't bring mermaid into this",
    rightChoiceText: "true, mermaid doesnt need to know",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "No, she needs to know", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

thirtytwoCard = {
  prompt: "birds always get in my way",
  rightChoiceText: "birds arent real",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "give the birds some respect", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "Ik.... you are so right",
    rightChoiceText: "duh",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "merp", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "But they always fly through me",
    rightChoiceText: "You don't deserve that, cloud",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "too bad so sad", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

thirtytwoCard = {
  prompt: "save the polar bears!",
  rightChoiceText: "recycle!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "true, but i dont wanna recycle", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "Be vegan!",
    rightChoiceText: "YES",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "NAW, I LOVE MEAT", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "You don't care about the planet",
    rightChoiceText: "Wait, yes i do",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "no comment", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

thirtythreeCard = {
  prompt: "fish are friends!",
  rightChoiceText: "dolphins are so cute",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "idc about fish", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "COOOOOOOOOL",
    rightChoiceText: "omg, cool",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "so not cool", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "Rofl",
    rightChoiceText: "rolling on floor, laughing",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "rofl is outdated", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}


thirtyfourCard = {
  prompt: "find me a cowgirl!",
  rightChoiceText: "anything for u",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "find your own girlfriend", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "She needs to love cows as much as i do",
    rightChoiceText: "ok",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "no", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "What the heck",
    rightChoiceText: "sorry!",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Not my problem", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

thirtyfiveCard = {
  prompt: "making cakes is so hard",
  rightChoiceText: "ikr, baking is tough",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "if you were a good chef, you would be able to bake too", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "Right!",
    rightChoiceText: "yea its impossible",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "yall are tripping, its easy", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "You don't know how hard it is to be a chef",
    rightChoiceText: "lets play 8 ball!",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "i bet its easy", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

thirtysixCard = {
  prompt: "cloudy days are the best days",
  rightChoiceText: "cuz your in in <3",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "bruh stop lying", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "Aw, thanks man",
    rightChoiceText: "no prob",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "i was just joshin", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "Im not lying! ",
    rightChoiceText: "i believe you",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "cap", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

thirtysevenCard = {
  prompt: "a blizzard is coming",
  rightChoiceText: "heres a sweater",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinHappy")
    },
  
  leftChoiceText: "Freeze!", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
  },
  name: "Penguin",
  resultText: "",
  image: "./images/penguin.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["PenguinHappy", "PenguinBetrayed"],
  
  "PenguinHappy" : {
    prompt: "Aw it has stripes and everything",
    rightChoiceText: "its hand knit",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "k", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("PenguinBetrayed")
    enemiesMade += 1;
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  },


  "PenguinBetrayed": {
    prompt: "No one cares about me",
    rightChoiceText: "hey, i do",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "lol your right", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Penguin",
    resultText: "",
    image: "./images/penguin.png",
    priority: 2,
    pack : "none"
  }

}

thrityeightCard = {
  prompt: "i love booze and farms",
  rightChoiceText: "rock on!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "that doesn't sound fun to me", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "Rock and roll buddy",
    rightChoiceText: "peace and love",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "rock and roll?", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "Its not everyones cup of tea",
    rightChoiceText: "so mature!",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "bruh", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}


thirtynineCard = {
  prompt: "i love holding onto dolphins as they swim",
  rightChoiceText: "sounds fun!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "thats dangerous", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "Its so exhillerating",
    rightChoiceText: "like a roller coaster",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: ":3", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "You don't sound like a fun person",
    rightChoiceText: "hey, that is mean",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "safety is a priority", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}

fourtyCard = {
  prompt: "pizza",
  rightChoiceText: "pizza pizza",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefHappy")
    },
  
  leftChoiceText: "bleh", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
  },
  name: "Chef",
  resultText: "",
  image: "./images/chef.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["ChefHappy", "ChefBetrayed"],
  
  "ChefHappy" : {
    prompt: "Pizza!",
    rightChoiceText: "yup",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "nah", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("ChefBetrayed")
    enemiesMade += 1;
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  },


  "ChefBetrayed": {
    prompt: "You are bleh",
    rightChoiceText: "No, you",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "No, you are", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Chef",
    resultText: "",
    image: "./images/chef.png",
    priority: 2,
    pack : "none"
  }

}

fourtyoneCard = {
  prompt: "snow snow snow snow snow snow",
  rightChoiceText: "i love snow!",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "be quiet", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "Me too! Lets be friends",
    rightChoiceText: "yes pls",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "no ew", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "ok. :(",
    rightChoiceText: "I didnt mean to hurt your feelings",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "finally", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

fourtytwoCard = {
  prompt: "i hate being a cloud",
  rightChoiceText: "why",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "that sucks not me tho", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "its so lonely",
    rightChoiceText: "im sowwy",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "who cares", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "that just proves my point",
    rightChoiceText: "oops",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "haha", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}

fourtythreeCard = {
  prompt: "bubbles are so pretty",
  rightChoiceText: "bubble",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidHappy")
    },
  
  leftChoiceText: "ill pop them all", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("MermaidBetrayed")
    enemiesMade += 1;
  },
  name: "Mermaid",
  resultText: "",
  image: "./images/mermaid.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["MermaidHappy", "MermaidBetrayed"],
  
  "MermaidHappy" : {
    prompt: "holy mother of pearl",
    rightChoiceText: "pearls",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "pearls :(", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  },


  "MermaidBetrayed": {
    prompt: "You are so neagtive",
    rightChoiceText: "lololololol",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "haha my b", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Mermaid",
    resultText: "",
    image: "./images/mermaid.png",
    priority: 2,
    pack : "none"
  }

}

fourtyfourCard = {
  prompt: "give me my horse back",
  rightChoiceText: "ok fine",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyHappy")
    },
  
  leftChoiceText: "No!", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
  },
  name: "Cowboy",
  resultText: "",
  image: "./images/cowboy.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CowboyHappy", "CowboyBetrayed"],
  
  "CowboyHappy" : {
    prompt: "yay thats my best friend",
    rightChoiceText: "thats sweet",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "your best friend is a horse?", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CowboyBetrayed")
    enemiesMade += 1;
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  },


  "CowboyBetrayed": {
    prompt: "I will sue you",
    rightChoiceText: "bet",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "Ok, my dads a lawyer", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cowboy",
    resultText: "",
    image: "./images/cowboy.png",
    priority: 2,
    pack : "none"
  }

}

fourtyfiveCard = {
  prompt: "what a beautiful day",
  rightChoiceText: "yeah the weathers perf",
  rightChoice: function(){
    addResource("rainbows", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudHappy")
    },
  
  leftChoiceText: "no, theres clouds", 
  leftChoice: function(){
    addResource("gold stars", 20)
      addPackToDeck("bumbling")
    addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
  },
  name: "Cloud",
  resultText: "",
  image: "./images/cloud.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["CloudHappy", "CloudBetrayed"],
  
  "CloudHappy" : {
    prompt: "its a perfect beach day",
    rightChoiceText: "yes i cant wait",
      rightChoice: function(){
      addResource("rainbows", 10)
      },
    leftChoiceText: "no its too cloudy", 
    leftChoice: function(){
      addResource("gold stars", 20)
      addToTopDeck("CloudBetrayed")
    enemiesMade += 1;
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  },


  "CloudBetrayed": {
    prompt: "WHAT DO YOU HAVE AGAINST CLOUDS",
    rightChoiceText: "nothing i swear!",
      rightChoice: function(){
      addResource("rainbows", 20)
      },
    leftChoiceText: "hahahahha", 
    leftChoice: function(){
      addResource("gold stars", 100)
    },
    name: "Cloud",
    resultText: "",
    image: "./images/cloud.png",
    priority: 2,
    pack : "none"
  }

}









































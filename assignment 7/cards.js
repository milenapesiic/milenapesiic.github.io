
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
  
  "ChefHappy" : {
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


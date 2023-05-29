failCards = [{
  resource:"gold stars", 
  level: "high", 
  card: {
    prompt: "Too many gold stars!! You're too good",
    rightChoiceText: "AHHHHH",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Thank god", 
    leftChoice: function(){location.reload();
    },
    name: "blinded ",
    resultText: "",
    image: "./images/penguin.png"
  }  
}]

defaultFailCard = {
  prompt: "Oops! Something went wrong",
  rightChoiceText: "nooooo :(",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "damn", 
  leftChoice: function(){location.reload();
  },
  name: "the council",
  resultText: "",
  image: "./images/penguin.png"
}
const GameInstance = class {
  constructor() {
    this.narrativeManager = new narrativeManager(this)
    
    this.stages = ["stage1", "stage2", "stage3"];
    this.currentStage = "stage1"; 
    this.panels = {
      "stage1": ["stream", "inventory", "explore"],
      "stage2": ["beaver"],
      "stage3": []
    }
    this.currentPanel = "stream";

    

    this.logs = 0;
    this.mud = 0;
    
	  
    
      
    this.collectorsProtected = 0;
    this.findersProtected = 0;
    this.gardenCollectors = 0;
    
  }
  
  

  
  // the following functions are to be called from buttons in the index.html
  collectLogs(){
	this.logs = logs + 1;
	this.updateDisplay()
	}

  collectMud(){
	this.mud = mud + 1;
	this.updateDisplay()
	}


  gainResource1(){ this.logs +=1; this.updateDisplay();}
  gainResource2(){ this.mud +=2; this.logs -=5;this.updateDisplay();}
  
  runResource2Work(){
      this.logs += this.mud;
  }
  
    
  // this function takes in a panel 
  swichPanels(panel) {
    game.currentPanel = panel;
    io.showPanel(game);    
  }
  
  updateDisplay(){
    io.writeValueIntoClass(this.resource1, "logsNumber")
    io.writeValueIntoClass(this.resource2, "mud2Number")
  }
  
};


// this function forom JQuery waits until the web page is fully loaded before triggering the start of the game
$( document ).ready(function() {
  game = new GameInstance();
  game.narrativeManager.setup();
  
  io.showStage(game); 
  game.updateDisplay()

  startRecording(game);

  // Run the Loop
  gameTimer = setInterval(function(){
    game.runResource2Work();
    game.narrativeManager.assess()
    game.updateDisplay()
}, 500)
  

})

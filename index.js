//Getting 76 tiles

function getTiles() {
    let arrayNumbers = [];

    for (let i = 1; i <= 76; i++) {
        arrayNumbers.push(i);
    }
    
    return arrayNumbers;
}

// Creating the main board when window loads

function onLoadActions() {
    let randomTiles = getTiles();

    for (let i = 0; i < randomTiles.length; i++) {
      let tileNode = document.createElement("div");
    
      tileNode.classList.add("tile");
      tileNode.innerText = i + 1;
    
      document.getElementById("main_board").appendChild(tileNode);
      
    }
    
}

// creating the player boards

function addPlayerBoard () {
    let input = document.getElementById("player_number").value;
    document.getElementById("player_boards").innerHTML = "";

    for ( let player = 1; player <= input; player++) { 
        let playerContainer = document.createElement("div");
        playerContainer.classList.add("player_board");
        
        document.getElementById("player_boards").appendChild(playerContainer);
        
        let playerNum = document.createElement("h2");
        playerNum.innerText = `Player: ${player}`;
        
        playerContainer.appendChild(playerNum);

        let randomNumbers = getTiles().sort(() => 0.5 - Math.random()); // anonymous arrow function in one linethat is directly stored in the variable "shuffle". no parameter and after the arrow is what usually is in {}. (0.5-Math.random makes sure that the tiles are being moved around forwards and backwards by comparing randomly with + and - numbers)

        for (let i = 0; i < 24; i++) {
            let tileNode = document.createElement("div");
            
            tileNode.classList.add("playerTile");
            tileNode.innerText = randomNumbers[i];
          
            playerContainer.appendChild(tileNode);
        }
    }
}

// chosing a random tile everytime the button Random Number is pressed

function renderRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 76);
    let selectedElement = document.getElementsByClassName("tile")[randomNumber - 1];
    let allElementFromPlayer = document.getElementsByClassName("playerTile");
    //console.log(allElementFromPlayer);
    if (!selectedElement.classList.contains("selected")) {
        selectedElement.classList.add("selected");
    } else if (document.getElementsByClassName("tile selected").length === 76) {
        alert("Error: You selected all the tiles!");
    } else {

        renderRandomNumber();
    };
    for (let i = 0; i < allElementFromPlayer.length; i++) {
        if (parseInt(allElementFromPlayer[i].innerText) === randomNumber) {
            allElementFromPlayer[i].classList.add("selected");
        }
        
    }
}

window.onload = onLoadActions;
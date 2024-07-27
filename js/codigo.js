//Global Variables
let selectedAttack
let selectedEnemyAttack
const friendPetMovement = document.getElementById("friend-pet-movement");
const enemyPetMovement = document.getElementById("enemy-pet-movement");
let victories = 0;
let loses = 0;
let result = "";
let friendVictories = 0;
let enemyVictories = 0;
//Sections to hide and show
const sectionTitle = document.getElementById("section-title")
const sectionLifes = document.getElementById("check-life");
const sectionMessages = document.getElementById("messages");
const sectionRestart = document.getElementById("play-again");
const sectionSelectAttack = document.getElementById("select-attack");
//Restart the game
const buttonRestart = document.getElementById("button-again");
//Characters
const selectedCharacterImage = document.getElementById(
  "selected-character-image"
);
const friendPet = document.getElementById("friend-pet");
//Select enemy pet
const sectionSelectPet = document.getElementById("select-pet");
const enemyPet = document.getElementById("enemy-pet");
const selectedEnemyCharacterImage = document.getElementById(
  "selected-enemy-character-image"
);
//Marcador
const spanfriendVictories = document.getElementById("friend-victories");
const spanenemyVictories = document.getElementById("enemy-victories");
//Add message
const messagesSection = document.getElementById("result-of-fight");
const playerAttackDiv = document.getElementById("player-Attack-div");
const enemyAttackDiv = document.getElementById("enemy-Attack-div");
//Mokepons array
let mokeponsOption;
let inputFiregod
let inputWatermelon
let inputFloraline 
let inputThundercat 
let inputTucaferreti 
let inputJachibombo
let selectedPet
const petCardsContainer = document.getElementById('pet-cards-container')

//Buttons for attacks
let buttonPet = document.getElementById("button-pet");
let buttonFire
let buttonWater
let buttonPlantae
let buttonElectricity
let buttonWind
let buttonPlasma
let attackButtons = []
let playerAttack = []
let enemyAttack = []
let enemyMokeponAttacks
let lastFriendlyAttack
let lastEnemyAttack


//Array of mokepons
let mokepons = [];

//Attacks of mokepons
let containerButtonsAttack = document.getElementById("container-buttons-attack")
let attackOption
let attacks = "This is a value"
let playerAttackName = "Attack Name Default"


//Creationg of a class for mokepons array
class Mokepon {
  constructor(name, photo, life) {
    this.name = name;
    this.photo = photo;
    this.life = life;
    this.attacks = [];
  }
}

//Creating objects using the class
let firegod = new Mokepon("Firegod", "./images/Firegod.jpg", 3);
let thundercat = new Mokepon("Thundercat", "./images/Thunder.png", 3);
let watermelon = new Mokepon("Watermelon", "./images/Watermelon.png", 3);
let tucaferreti = new Mokepon("Tucaferreti", "./images/Tucaferreti.webp", 3);
let floraline = new Mokepon("Floraline", "./images/flor.png", 3);
let jachibombo = new Mokepon("Jachibombo", "./images/Jachibombo.webp", 3);

//Adding new attacks to the property depending on the mokepon
firegod.attacks.push(
  { name: "🔥", id: "button-fire" },
  { name: "🔥", id: "button-fire" },
  { name: "⚡", id: "button-electricity" },
  { name: "💧", id: "button-water" },
  { name: "🍃", id: "button-plantae" }
);

thundercat.attacks.push(
  { name: "⚡", id: "button-electricity" },
  { name: "⚡", id: "button-electricity" },
  { name: "🔥", id: "button-fire" },
  { name: "💨", id: "button-wind" },
  { name: "🌌", id: "button-plasma" }
);

watermelon.attacks.push(
  { name: "💧", id: "button-water" },
  { name: "💧", id: "button-water" },
  { name: "💨", id: "button-wind" },
  { name: "🔥", id: "button-fire" },
  { name: "🍃", id: "button-plantae" }
);

tucaferreti.attacks.push(
  { name: "💨", id: "button-wind" },
  { name: "💨", id: "button-wind" },
  { name: "💧", id: "button-water" },
  { name: "⚡", id: "button-electricity" },
  { name: "🌌", id: "button-plasma" }
);

floraline.attacks.push(
  { name: "🍃", id: "button-plantae" },
  { name: "🍃", id: "button-plantae" },
  { name: "🌌", id: "button-plasma" },
  { name: "🔥", id: "button-fire" },
  { name: "💧", id: "button-water" },
);

jachibombo.attacks.push(
  { name: "🌌", id: "button-plasma" },
  { name: "🌌", id: "button-plasma" },
  { name: "🍃", id: "button-plantae" },
  { name: "⚡", id: "button-electricity" },
  { name: "💨", id: "button-wind" },
);

//Adding mokepons to the array 'mokepons'
mokepons.push(
  firegod,
  watermelon,
  floraline,
  thundercat,
  tucaferreti,
  jachibombo
);

//Functions
function initiateGame() {
  //Hiding sections in HTML
  sectionLifes.style.display = "none";
  sectionMessages.style.display = "none";
  sectionRestart.style.display = "none";
  sectionSelectAttack.style.display = "none";

  //Array of mokepons
  mokepons.forEach((mokepon) => {
    mokeponsOption = `
    <div class="container-images">
    <input type="radio" name="animal" id=${mokepon.name} class="input-mokepon">
    <label for=${mokepon.name} class="label-border">
        <img src=${mokepon.photo} alt=${mokepon.name} class="images">
        <p class="name-pet">${mokepon.name}</p>
    </label>
    </div>
    `
    petCardsContainer.innerHTML += mokeponsOption;

    inputFiregod = document.getElementById("Firegod");
    inputWatermelon = document.getElementById("Watermelon");
    inputFloraline = document.getElementById("Floraline");
    inputThundercat = document.getElementById("Thundercat");
    inputTucaferreti = document.getElementById("Tucaferreti");
    inputJachibombo = document.getElementById("Jachibombo");
  });


  //Select our pet and enemy pet
  buttonPet.addEventListener("click", selectPet);
  buttonRestart.addEventListener("click", restartGame);
  }

function selectPet() {
  if (inputFiregod.checked) {
    friendPet.innerHTML = inputFiregod.id
    selectedCharacterImage.src = "./images/Firegod.jpg";
    selectedPet = inputFiregod.id
  } else if (inputWatermelon.checked) {
    friendPet.innerHTML = inputWatermelon.id
    selectedCharacterImage.src = "./images/Watermelon.png";
    selectedPet = inputWatermelon.id
  } else if (inputFloraline.checked) {
    friendPet.innerHTML = inputFloraline.id
    selectedCharacterImage.src = "./images/Flor.png";
    selectedPet = inputFloraline.id
  } else if (inputThundercat.checked) {
    friendPet.innerHTML = inputThundercat.id
    selectedCharacterImage.src = "./images/Thunder.png";
    selectedPet = inputThundercat.id
  } else if (inputTucaferreti.checked) {
    friendPet.innerHTML = inputTucaferreti.id
    selectedCharacterImage.src = "./images/Tucaferreti.webp";
    selectedPet = inputTucaferreti.id
  } else if (inputJachibombo.checked) {
    friendPet.innerHTML = inputJachibombo.id
    selectedCharacterImage.src = "./images/Jachibombo.webp";
    selectedPet = inputJachibombo.id
  } else {
    alert("You selected to be a loser 👎");
  }

  extractAttacks(selectedPet)
  selectEnemyPet()
}

function extractAttacks(selectedPet){
  for (let i = 0; i < mokepons.length; i++) {
    if(selectedPet === mokepons[i].name) {
      attacks = mokepons[i].attacks
    }  
  }
  showAttacks(attacks)
}

function showAttacks(attacks){
  //Dynamically creates the buttons' structure for attacks
  attacks.forEach((attack) => {
    attackOption = `
    <button id=${attack.id} class="button-attack concert-one-regular attackB">${attack.name}</button>
    `
    containerButtonsAttack.innerHTML += attackOption;
  });

    //Linking buttons after creating them
     buttonPet = document.getElementById("button-pet");
     buttonFire = document.getElementById("button-fire");
     buttonWater = document.getElementById("button-water");
     buttonPlantae = document.getElementById("button-plantae");
     buttonElectricity = document.getElementById("button-electricity");
     buttonWind = document.getElementById("button-wind");
     buttonPlasma = document.getElementById("button-plasma");
     attackButtons = document.querySelectorAll(".attackB")
}

function attackSequence(){
  attackButtons.forEach((attackButton) => {
    attackButton.addEventListener("click", (e) => {
      if(e.target.textContent === "🔥"){
        playerAttack.push("FIRE")
        console.log(playerAttack)
        selectedAttack = "🔥"
        attackButton.style.background = "rgb(70, 0, 0)"
        attackButton.disabled = true;
      }else if(e.target.textContent === "💧"){
        playerAttack.push("WATER")
        console.log(playerAttack)
        selectedAttack = "💧"
        attackButton.style.background = "rgb(70, 0, 0)"
        attackButton.disabled = true;

      }else if(e.target.textContent === "🍃"){
        playerAttack.push("PLANTAE")
        console.log(playerAttack)
        selectedAttack = "🍃"
        attackButton.style.background = "rgb(70, 0, 0)"
        attackButton.disabled = true;
      }else if(e.target.textContent === "⚡"){
        playerAttack.push("ELECTRICITY")
        console.log(playerAttack)
        selectedAttack = "⚡"
        attackButton.style.background = "rgb(70, 0, 0)"
        attackButton.disabled = true;
      }else if(e.target.textContent === "💨"){
        playerAttack.push("WIND")
        console.log(playerAttack)
        selectedAttack = "💨"
        attackButton.style.background = "rgb(70, 0, 0)"
        attackButton.disabled = true;
      }else if(e.target.textContent === "🌌"){
        playerAttack.push("PLASMA")
        console.log(playerAttack)
        selectedAttack = "🌌"
        attackButton.style.background = "rgb(70, 0, 0)"
        attackButton.disabled = true;
      }
      selectEnemyAttack()
    })
  })
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectEnemyPet() {
  //Showing back the sections
  sectionSelectAttack.style.display = "flex";
  sectionLifes.style.display = "grid";
  sectionMessages.style.display = "flex";
  //Hiding sections
  sectionTitle.style.display = "none";
  sectionRestart.style.display = "none";
  sectionSelectPet.style.display = "none";
  //Enemy selects pet
  let aleatorySelection = aleatorio(mokepons.length -1, 0);
  //Inserting name, image and attacks of mokepons
  enemyPet.innerHTML = mokepons[aleatorySelection].name
  selectedEnemyCharacterImage.src = mokepons[aleatorySelection].photo
  enemyMokeponAttacks = mokepons[aleatorySelection].attacks
  //Calling function
  attackSequence();

}

function selectEnemyAttack() {
  //Enemy selects attack
  let aleatoryAttack = aleatorio(0, enemyMokeponAttacks.length -1);

  if (aleatoryAttack === 0) {
    selectedEnemyAttack = "🔥"
    enemyAttack.push("FIRE")
    console.log(enemyAttack)

  } else if (aleatoryAttack === 1) {
    selectedEnemyAttack = "💧"
    enemyAttack.push("WATER")
    console.log(enemyAttack)

  } else if (aleatoryAttack === 2) {
    selectedEnemyAttack = "🍃"
    enemyAttack.push("PLANTAE")
    console.log(enemyAttack)

  } else if (aleatoryAttack === 3) {
    selectedEnemyAttack = "⚡"
    enemyAttack.push("ELECTRICITY")
    console.log(enemyAttack)

  } else if (aleatoryAttack === 4) {
    selectedEnemyAttack = "💨"
    enemyAttack.push("WIND")
    console.log(enemyAttack)

  } else if (aleatoryAttack === 5) {
    selectedEnemyAttack = "🌌"
    enemyAttack.push("PLASMA")
    console.log(enemyAttack)

  }
  initiateCombat();
}


function initiateCombat(){
  if (playerAttack.length == 5) {
    marcador()
    addMessage()
  }
}

  
function indexBothOponents(player, enemy){
  lastFriendlyAttack = playerAttack[player]
  lastEnemyAttack = enemyAttack[enemy]
}

function marcador() {
  for (let index = 0; index < 5; index++) {
    indexBothOponents(index, index)  
    if(lastFriendlyAttack == lastEnemyAttack) {
    } else if (
      (lastFriendlyAttack == "FIRE" && lastEnemyAttack == "ELECTRICITY") ||
      (lastFriendlyAttack == "ELECTRICITY" && lastEnemyAttack == "FIRE") ||
      (lastFriendlyAttack == "PLANTAE" && lastEnemyAttack == "PLASMA") ||
      (lastFriendlyAttack == "PLASMA" && lastEnemyAttack == "PLANTAE") ||
      (lastFriendlyAttack == "WATER" && lastEnemyAttack == "WIND") ||
      (lastFriendlyAttack == "WIND" && lastEnemyAttack == "WATER")
    ) {
    } else if (
      (lastFriendlyAttack == "FIRE" && lastEnemyAttack == "PLANTAE") ||
      (lastFriendlyAttack == "FIRE" && lastEnemyAttack == "PLASMA") ||
      (lastFriendlyAttack == "ELECTRICITY" && lastEnemyAttack == "PLANTAE") ||
      (lastFriendlyAttack == "ELECTRICITY" && lastEnemyAttack == "PLASMA") ||
      (lastFriendlyAttack == "PLANTAE" && lastEnemyAttack == "WATER") ||
      (lastFriendlyAttack == "PLANTAE" && lastEnemyAttack == "WIND") ||
      (lastFriendlyAttack == "PLASMA" && lastEnemyAttack == "WATER") ||
      (lastFriendlyAttack == "PLASMA" && lastEnemyAttack == "WIND") ||
      (lastFriendlyAttack == "WATER" && lastEnemyAttack == "FIRE") ||
      (lastFriendlyAttack == "WATER" && lastEnemyAttack == "ELECTRICITY") ||
      (lastFriendlyAttack == "WIND" && lastEnemyAttack == "FIRE") ||
      (lastFriendlyAttack == "WIND" && lastEnemyAttack == "ELECTRICITY")
    ) {
      friendVictories++;
      spanfriendVictories.innerHTML = friendVictories;
    }  else {
      enemyVictories++;
      spanenemyVictories.innerHTML = enemyVictories;
    }
  }

/*
  if (lastEnemyAttack == lastFriendlyAttack) {
    result = "You draw ⚔️";
  } else if (
    (playerAttack == "FIRE" && enemyAttack == "PLANTAE") ||
    (playerAttack == "FIRE" && enemyAttack == "PLASMA") ||
    (playerAttack == "ELECTRICITY" && enemyAttack == "PLANTAE") ||
    (playerAttack == "ELECTRICITY" && enemyAttack == "PLASMA") ||
    (playerAttack == "PLANTAE" && enemyAttack == "WATER") ||
    (playerAttack == "PLANTAE" && enemyAttack == "WIND") ||
    (playerAttack == "PLASMA" && enemyAttack == "WATER") ||
    (playerAttack == "PLASMA" && enemyAttack == "WIND") ||
    (playerAttack == "WATER" && enemyAttack == "FIRE") ||
    (playerAttack == "WATER" && enemyAttack == "ELECTRICITY") ||
    (playerAttack == "WIND" && enemyAttack == "FIRE") ||
    (playerAttack == "WIND" && enemyAttack == "ELECTRICITY")
  ) {
    result = "You win🏆";
    enemyVictories--;
    spanenemyVictories.innerHTML = enemyVictories;
  } else if (
    (playerAttack == "FIRE" && enemyAttack == "ELECTRICITY") ||
    (playerAttack == "ELECTRICITY" && enemyAttack == "FIRE") ||
    (playerAttack == "PLANTAE" && enemyAttack == "PLASMA") ||
    (playerAttack == "PLASMA" && enemyAttack == "PLANTAE") ||
    (playerAttack == "WATER" && enemyAttack == "WIND") ||
    (playerAttack == "WIND" && enemyAttack == "WATER")
  ) {
    result = "You draw ⚔️";
  } else {
    result = "You lose👎";
    friendVictories--;
    spanfriendVictories.innerHTML = friendVictories;
  }
    */

  
  if (friendVictories == 5) {
    spanfriendVictories.innerHTML = "👑👑👑👑👑";
  } else if (friendVictories == 4) {
    spanfriendVictories.innerHTML = "👑👑👑👑⭕";
  } else if (friendVictories == 3) {
    spanfriendVictories.innerHTML = "👑👑👑⭕⭕";
  } else if (friendVictories == 2) {
    spanfriendVictories.innerHTML = "👑👑⭕⭕⭕";
  } else if (friendVictories == 1) {
    spanfriendVictories.innerHTML = "👑⭕⭕⭕⭕";
  } else if (friendVictories == 0) {
    spanfriendVictories.innerHTML = "⭕⭕⭕⭕⭕";
  }


  if (enemyVictories == 5) {
    spanenemyVictories.innerHTML = "👑👑👑👑👑";
  } else if (enemyVictories == 4) {
    spanenemyVictories.innerHTML = "👑👑👑👑⭕";
  } else if (enemyVictories == 3) {
    spanenemyVictories.innerHTML = "👑👑👑⭕⭕";
  } else if (enemyVictories == 2) {
    spanenemyVictories.innerHTML = "👑👑⭕⭕⭕";
  } else if (enemyVictories == 1) {
    spanenemyVictories.innerHTML = "👑⭕⭕⭕⭕";
  } else if (enemyVictories == 0) {
    spanenemyVictories.innerHTML = "⭕⭕⭕⭕⭕";
  }  
}

function addMessage() {
  // Clear previous messages
  /*playerAttackDiv.innerHTML = '';
  enemyAttackDiv.innerHTML = '';*/
  //Show historial of attacks
  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");
  //Show attack made by player
  newPlayerAttack.innerHTML = selectedAttack;
  newEnemyAttack.innerHTML = selectedEnemyAttack;
  //Insert message of attacks
  playerAttackDiv.appendChild(newPlayerAttack);
  enemyAttackDiv.appendChild(newEnemyAttack);

  /*
  if (enemyVictories == 0) {
    //Message of victory
    messagesSection.innerHTML = "Select the order of your attacks";
    //Disabling enemy attacks
    inputFiregod.disabled = true;
    inputWatermelon.disabled = true;
    inputFloraline.disabled = true;
    inputThundercat.disabled = true;
    inputTucaferreti.disabled = true;
    inputJachibombo.disabled = true;
    //Disabling attack buttons
    buttonFire.disabled = true;
    buttonWater.disabled = true;
    buttonPlantae.disabled = true;
    buttonElectricity.disabled = true;
    buttonWind.disabled = true;
    buttonPlasma.disabled = true;
    //Show section to restart game
    sectionRestart.style.display = "flex";
  } else */
  if (friendVictories > enemyVictories && friendVictories == 5) {
    //Message of perfect victory
    messagesSection.innerHTML = "FLAWLESS VICTORY";
  } else if (friendVictories > enemyVictories && friendVictories >= 3) {
    messagesSection.innerHTML = "Amazing victory"
  } else if (friendVictories > enemyVictories) {
    messagesSection.innerHTML = "Victory";
  } else if (friendVictories == enemyVictories) {
    messagesSection.innerHTML = "Draw";
  } else {
    messagesSection.innerHTML = "You lost";
  }
  //Show section to restart game
  sectionRestart.style.display = "flex";
}

function restartGame() {
  location.reload();
}

//ExecutioninputFiregod
window.addEventListener("load", initiateGame);

//Second part Finishes

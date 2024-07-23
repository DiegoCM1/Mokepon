//Global Variables
let playerAttack
let selectedAttack
let enemyAttack
let selectedEnemyAttack
const friendPetMovement = document.getElementById("friend-pet-movement");
const enemyPetMovement = document.getElementById("enemy-pet-movement");
let victories = 0;
let loses = 0;
let result = "";
let friendLifes = 3;
let enemyLifes = 3;
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
const spanFriendLifes = document.getElementById("friend-lifes");
const spanEnemyLifes = document.getElementById("enemy-lifes");
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
let attackOfPlayer = []

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
  { name: "🔥", id: "button-fire" },
  { name: "💧", id: "button-water" },
  { name: "🍃", id: "button-plantae" }
);

thundercat.attacks.push(
  { name: "⚡", id: "button-electricity" },
  { name: "⚡", id: "button-electricity" },
  { name: "⚡", id: "button-electricity" },
  { name: "💨", id: "button-wind" },
  { name: "🌌", id: "button-plasma" }
);

watermelon.attacks.push(
  { name: "💧", id: "button-fire" },
  { name: "💧", id: "button-fire" },
  { name: "💧", id: "button-fire" },
  { name: "🔥", id: "button-water" },
  { name: "🍃", id: "button-plantae" }
);

tucaferreti.attacks.push(
  { name: "💨", id: "button-wind" },
  { name: "💨", id: "button-wind" },
  { name: "💨", id: "button-wind" },
  { name: "⚡", id: "button-electricity" },
  { name: "🌌", id: "button-plasma" }
);

floraline.attacks.push(
  { name: "🍃", id: "button-fire" },
  { name: "🍃", id: "button-fire" },
  { name: "🍃", id: "button-fire" },
  { name: "💧", id: "button-water" },
  { name: "🔥", id: "button-plantae" }
);

jachibombo.attacks.push(
  { name: "🌌", id: "button-plasma" },
  { name: "🌌", id: "button-plasma" },
  { name: "🌌", id: "button-plasma" },
  { name: "💨", id: "button-wind" },
  { name: "⚡", id: "button-electricity" }
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
    selectEnemyPet();
  } else if (inputWatermelon.checked) {
    friendPet.innerHTML = inputWatermelon.id
    selectedCharacterImage.src = "./images/Watermelon.png";
    selectedPet = inputWatermelon.id
    selectEnemyPet();
  } else if (inputFloraline.checked) {
    friendPet.innerHTML = inputFloraline.id
    selectedCharacterImage.src = "./images/Flor.png";
    selectedPet = inputFloraline.id
    selectEnemyPet();
  } else if (inputThundercat.checked) {
    friendPet.innerHTML = inputThundercat.id
    selectedCharacterImage.src = "./images/Thunder.png";
    selectedPet = inputThundercat.id
    selectEnemyPet();
  } else if (inputTucaferreti.checked) {
    friendPet.innerHTML = inputTucaferreti.id
    selectedCharacterImage.src = "./images/Tucaferreti.webp";
    selectedPet = inputTucaferreti.id
    selectEnemyPet();
  } else if (inputJachibombo.checked) {
    friendPet.innerHTML = inputJachibombo.id
    selectedCharacterImage.src = "./images/Jachibombo.webp";
    selectedPet = inputJachibombo.id
    selectEnemyPet();
  } else {
    alert("You selected to be a loser 👎");
  }

  extractAttacks(selectedPet)
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

    //AddEventListeners after the buttons are created
    
    buttonFire.addEventListener("click", () => {
      console.log("You selected fire")
      attackFire();
      selectEnemyAttack();
    });
    buttonWater.addEventListener("click", () => {
      console.log("You selected water")
      attackWater();
      selectEnemyAttack();
    });
    buttonPlantae.addEventListener("click", () => {
      console.log("You selected nature")
      attackPlantae();
      selectEnemyAttack();
    });
    buttonElectricity.addEventListener("click", () => {
      console.log("You selected electricity")
      attackElectricity();
      selectEnemyAttack();
    });
    buttonWind.addEventListener("click", () => {
      console.log("You selected wind")
      attackWind();
      selectEnemyAttack();
    });
    buttonPlasma.addEventListener("click", () => {
      console.log("You selected plasma")
      attackPlasma();
      selectEnemyAttack();
    });  
    
}
/*
function attackSequence(){
  attackButtons.forEach((attackButton) =>{
    attackButton.addEventListener("click", (e) => {
      if(e.target.textContent === "🔥"){
        attackOfPlayer.push("Fire")
        console.log(attackOfPlayer)
        playerAttack = buttonFire;
        selectedAttack = "🔥"
        console.log("You selected fire")
        selectEnemyAttack();
        attackButton.style.background = "black"
      }else if(e.target.textContent === "💧"){
        attackOfPlayer.push("Water")
        console.log(attackOfPlayer)
        playerAttack = buttonWater;
        selectedAttack = "💧"
        console.log("You selected water")
        selectEnemyAttack();
        attackButton.style.background = "black"
      }else if(e.target.textContent === "🍃"){
        attackOfPlayer.push("Nature")
        console.log(attackOfPlayer)
        playerAttack = buttonPlantae;
        selectedAttack = "🍃"
        console.log("You selected nature")
        selectEnemyAttack();
        attackButton.style.background = "black"
      }else if(e.target.textContent === "⚡"){
        attackOfPlayer.push("Electricity")
        console.log(attackOfPlayer)
        playerAttack = buttonElectricity;
        selectedAttack = "⚡"
        console.log("You selected electricity")
        selectEnemyAttack();
        attackButton.style.background = "black"
      }else if(e.target.textContent === "💨"){
        attackOfPlayer.push("Wind")
        console.log(attackOfPlayer)
        playerAttack = buttonWind;
        selectedAttack = "💨"
        console.log("You selected wind")
        selectEnemyAttack();
        attackButton.style.background = "black"
      }else if(e.target.textContent === "🌌"){
        attackOfPlayer.push("Plasma")
        console.log(attackOfPlayer)
        playerAttack = buttonPlasma;
        selectedAttack = "🌌"
        console.log("You selected plasma")
        selectEnemyAttack();
        attackButton.style.background = "black"
      }
    })
  })
}
  */

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
  //Inserting name and image of mokepons
  enemyPet.innerHTML = mokepons[aleatorySelection].name
  selectedEnemyCharacterImage.src = mokepons[aleatorySelection].photo
}

function selectEnemyAttack() {
  //Enemy selects attack
  let aleatoryAttack = aleatorio(6, 1);

  if (aleatoryAttack === 1) {
    enemyAttack = "FIRE";
    console.log("Enemey selected " + enemyAttack)
    selectedEnemyAttack = "🔥"
  } else if (aleatoryAttack === 2) {
    enemyAttack = "WATER";
    selectedEnemyAttack = "💧"
    console.log("Enemey selected " + enemyAttack)

  } else if (aleatoryAttack === 3) {
    enemyAttack = "PLANTAE";
    selectedEnemyAttack = "🍃"
    console.log("Enemey selected " + enemyAttack)

  } else if (aleatoryAttack === 4) {
    enemyAttack = "ELECTRICITY";
    selectedEnemyAttack = "⚡"
    console.log("Enemey selected " + enemyAttack)

  } else if (aleatoryAttack === 5) {
    enemyAttack = "WIND";
    selectedEnemyAttack = "💨"
    console.log("Enemey selected " + enemyAttack)

  } else if (aleatoryAttack === 6) {
    enemyAttack = "PLASMA";
    selectedEnemyAttack = "🌌"
    console.log("Enemey selected " + enemyAttack)

  }

  marcador();
  addMessage();
  attackSequence();
}

//Available attacks

function attackFire() {
  playerAttack = "FIRE";
  selectedAttack = "🔥"
}

function attackWater() {
  playerAttack = "WATER";
  selectedAttack = "💧"

}

function attackPlantae() {
  playerAttack = "PLANTAE";
  selectedAttack = "🍃"

}

function attackElectricity() {
  playerAttack = "ELECTRICITY";
  selectedAttack = "⚡"

}

function attackWind() {
  playerAttack = "WIND";
  selectedAttack = "💨"

}

function attackPlasma() {
  playerAttack = "PLASMA";
  selectedAttack = "🌌"

}
  

function marcador() {
  if (enemyAttack == playerAttack) {
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
    enemyLifes--;
    spanEnemyLifes.innerHTML = enemyLifes;
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
    friendLifes--;
    spanFriendLifes.innerHTML = friendLifes;
  }

  if (friendLifes == 3) {
    spanFriendLifes.innerHTML = "❤️❤️❤️";
  } else if (friendLifes == 2) {
    spanFriendLifes.innerHTML = "❤️❤️🖤";
  } else if (friendLifes == 1) {
    spanFriendLifes.innerHTML = "❤️🖤🖤";
  } else {
    spanFriendLifes.innerHTML = "🖤🖤🖤";
  }

  if (enemyLifes == 3) {
    spanEnemyLifes.innerHTML = "❤️❤️❤️";
  } else if (enemyLifes == 2) {
    spanEnemyLifes.innerHTML = "❤️❤️🖤";
  } else if (enemyLifes == 1) {
    spanEnemyLifes.innerHTML = "❤️🖤🖤";
  } else {
    spanEnemyLifes.innerHTML = "🖤🖤🖤";
  }

  return result;
}

function addMessage() {
  // Clear previous messages
  playerAttackDiv.innerHTML = '';
  enemyAttackDiv.innerHTML = '';
  //Show historial of attacks
  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");
  //Show attack made by player
  newPlayerAttack.innerHTML = selectedAttack;
  newEnemyAttack.innerHTML = selectedEnemyAttack;
  //Insert message of attacks
  playerAttackDiv.appendChild(newPlayerAttack);
  enemyAttackDiv.appendChild(newEnemyAttack);

  if (enemyLifes == 0) {
    //Message of victory
    messagesSection.innerHTML = "You won the battle ";
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
  } else if (friendLifes == 0) {
    //Message of defeat
    messagesSection.innerHTML = "You lost the battle ☠️";
    //Disabling pet selection
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
  } else if (enemyLifes > 0 && friendLifes > 0) {
    messagesSection.innerHTML = result;
  }
}

function restartGame() {
  location.reload();
}

//ExecutioninputFiregod
window.addEventListener("load", initiateGame);

//Second part Finishes

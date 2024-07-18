//Global Variables
let playerAttack = "";
let enemyAttack = "";
const friendPetMovement = document.getElementById("friend-pet-movement");
const enemyPetMovement = document.getElementById("enemy-pet-movement");
let victories = 0;
let loses = 0;
let result = "";
let friendLifes = 3;
let enemyLifes = 3;
//Sections to hide and show
const sectionLifes = document.getElementById("check-life");
const sectionMessages = document.getElementById("messages");
const sectionRestart = document.getElementById("play-again");
const sectionSelectAttack = document.getElementById("select-attack");
//Buttons for attacks
const buttonPet = document.getElementById("button-pet");
const buttonFire = document.getElementById("button-fire");
const buttonWater = document.getElementById("button-water");
const buttonPlantae = document.getElementById("button-plantae");
const buttonElectricity = document.getElementById("button-electricity");
const buttonWind = document.getElementById("button-wind");
const buttonPlasma = document.getElementById("button-plasma");
//Restart the game
const buttonRestart = document.getElementById("button-again");
//Characters
let selectedPet = "";
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
const petCardsContainer = document.getElementById('pet-cards-container')

//Array of mokepons
let mokepons = [];

//Creationg of classes
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

  buttonFire.addEventListener("click", () => {
    attackFire();
    selectEnemyAttack();
  });
  buttonWater.addEventListener("click", () => {
    attackWater();
    selectEnemyAttack();
  });
  buttonPlantae.addEventListener("click", () => {
    attackPlantae();
    selectEnemyAttack();
  });
  buttonElectricity.addEventListener("click", () => {
    attackElectricity();
    selectEnemyAttack();
  });
  buttonWind.addEventListener("click", () => {
    attackWind();
    selectEnemyAttack();
  });
  buttonPlasma.addEventListener("click", () => {
    attackPlasma();
    selectEnemyAttack();
  });

  buttonRestart.addEventListener("click", restartGame);
}

function selectPet() {
  if (inputFiregod.checked) {
    selectedPet = "Firegod 🔥";
    friendPet.innerHTML = inputFiregod.id
    selectedCharacterImage.src = "./images/Firegod.jpg";
    selectEnemyPet();
  } else if (inputWatermelon.checked) {
    selectedPet = "Watermelon 💦";
    friendPet.innerHTML = inputWatermelon.id
    selectedCharacterImage.src = "./images/Watermelon.png";
    selectEnemyPet();
  } else if (inputFloraline.checked) {
    selectedPet = "Floraline 🌲";
    friendPet.innerHTML = inputFloraline.id
    selectedCharacterImage.src = "./images/Flor.png";
    selectEnemyPet();
  } else if (inputThundercat.checked) {
    selectedPet = "Thundercat ⚡";
    friendPet.innerHTML = inputThundercat.id
    selectedCharacterImage.src = "./images/Thunder.png";
    selectEnemyPet();
  } else if (inputTucaferreti.checked) {
    selectedPet = "Tucaferreti 💨";
    friendPet.innerHTML = inputTucaferreti.id
    selectedCharacterImage.src = "./images/Tucaferreti.webp";
    selectEnemyPet();
  } else if (inputJachibombo.checked) {
    selectedPet = "Jachibombo 🌌";
    friendPet.innerHTML = inputJachibombo.id
    selectedCharacterImage.src = "./images/Jachibombo.webp";
    selectEnemyPet();
  } else {
    selectedPet = "to be a loser 👎";
    alert("You selected " + selectedPet);
  }
}

function aleatorio(max, min) {
  //Get aleatory number
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

function selectEnemyPet() {
  //Showing back the sections
  sectionSelectAttack.style.display = "flex";
  sectionLifes.style.display = "grid";
  sectionMessages.style.display = "flex";
  //Hiding sections
  sectionRestart.style.display = "none";
  sectionSelectPet.style.display = "none";
  //Enemy selects pet
  let aleatorySelection = aleatorio(mokepons.length -1, 0);

  enemyPet.innerHTML = mokepons[aleatorySelection].name
  selectedEnemyCharacterImage.src = mokepons[aleatorySelection].photo

}

function selectEnemyAttack() {
  //Enemy selects attack
  let aleatoryAttack = aleatorio(6, 1);

  if (aleatoryAttack === 1) {
    enemyAttack = "Fireball 🔥";
  } else if (aleatoryAttack === 2) {
    enemyAttack = "Waterball 💧";
  } else if (aleatoryAttack === 3) {
    enemyAttack = "Natureball 🌏";
  } else if (aleatoryAttack === 4) {
    enemyAttack = "Electroball ⚡";
  } else if (aleatoryAttack === 5) {
    enemyAttack = "Windball 💨";
  } else if (aleatoryAttack === 6) {
    enemyAttack = "Plasmaball 🌌";
  }

  marcador();
  addMessage();
}

function marcador() {
  if (enemyAttack == playerAttack) {
    result = "You draw ⚔️";
  } else if (
    (playerAttack == "Fireball 🔥" && enemyAttack == "Natureball 🌏") ||
    (playerAttack == "Fireball 🔥" && enemyAttack == "Plasmaball 🌌") ||
    (playerAttack == "Electroball ⚡" && enemyAttack == "Natureball 🌏") ||
    (playerAttack == "Electroball ⚡" && enemyAttack == "Plasmaball 🌌") || //Fire thunder finish
    (playerAttack == "Natureball 🌏" && enemyAttack == "Waterball 💧") ||
    (playerAttack == "Natureball 🌏" && enemyAttack == "Windball 💨") ||
    (playerAttack == "Plasmaball 🌌" && enemyAttack == "Waterball 💧") ||
    (playerAttack == "Plasmaball 🌌" && enemyAttack == "Windball 💨") || //Nature plasma finish
    (playerAttack == "Waterball 💧" && enemyAttack == "Fireball 🔥") ||
    (playerAttack == "Waterball 💧" && enemyAttack == "Electroball ⚡") ||
    (playerAttack == "Windball 💨" && enemyAttack == "Fireball 🔥") ||
    (playerAttack == "Windball 💨" && enemyAttack == "Electroball ⚡")
  ) {
    result = "You win🏆";
    enemyLifes--;
    spanEnemyLifes.innerHTML = enemyLifes;
  } else if (
    (playerAttack == "Fireball 🔥" && enemyAttack == "Electroball ⚡") ||
    (playerAttack == "Electroball ⚡" && enemyAttack == "Fireball 🔥") || //Fire thunder
    (playerAttack == "Natureball 🌏" && enemyAttack == "Plasmaball 🌌") ||
    (playerAttack == "Plasmaball 🌌" && enemyAttack == "Natureball 🌏") || //Plasma nature
    (playerAttack == "Waterball 💧" && enemyAttack == "Windball 💨") ||
    (playerAttack == "Windball 💨" && enemyAttack == "Waterball 💧")
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

//Available attacks
function attackFire() {
  playerAttack = "Fireball 🔥";
}

function attackWater() {
  playerAttack = "Waterball 💧";
}

function attackPlantae() {
  playerAttack = "Natureball 🌏";
}

function attackElectricity() {
  playerAttack = "Electroball ⚡";
}

function attackWind() {
  playerAttack = "Windball 💨";
}

function attackPlasma() {
  playerAttack = "Plasmaball 🌌";
}

function addMessage() {
  //Show historial of attacks
  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");
  //Show attack made by player
  newPlayerAttack.innerHTML = playerAttack;
  newEnemyAttack.innerHTML = enemyAttack;
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

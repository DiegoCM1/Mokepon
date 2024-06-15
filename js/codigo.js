//Second part STARTS
//Functions
function initiateGame() {
    //Hiding sections in HTML

    let sectionLifes = document.getElementById('check-life')
    sectionLifes.style.display = 'none'
    let sectionMessages = document.getElementById('messages')
    sectionMessages.style.display = 'none'
    let sectionRestart = document.getElementById('play-again')
    sectionRestart.style.display = 'none'
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'
    

    //Game starts
  let buttonPet = document.getElementById("button-pet");
  buttonPet.addEventListener("click", selectPet); //Select our pet and enemy pet

  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", () => {
    attackFire();
    selectEnemyAttack();
  });
  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", () => {
    attackWater();
    selectEnemyAttack();
  });
  let buttonPlantae = document.getElementById("button-plantae");
  buttonPlantae.addEventListener("click", () => {
    attackPlantae();
    selectEnemyAttack();
  });
  let buttonElectricity = document.getElementById("button-electricity");
  buttonElectricity.addEventListener("click", () => {
    attackElectricity();
    selectEnemyAttack();
  });
  let buttonWind = document.getElementById("button-wind");
  buttonWind.addEventListener("click", () => {
    attackWind();
    selectEnemyAttack();
  });
  let buttonPlasma = document.getElementById("button-plasma");
  buttonPlasma.addEventListener("click", () => {
    attackPlasma();
    selectEnemyAttack();
  });

  let buttonRestart = document.getElementById("button-again");

  buttonRestart.addEventListener("click", restartGame);
}

function selectPet() {
  //Choosing our pet
  let inputFiregod = document.getElementById("firegod");
  let inputWatermelon = document.getElementById("watermelon");
  let inputFloraline = document.getElementById("floraline");
  let inputThundercat = document.getElementById("thundercat");
  let inputTucaferreti = document.getElementById("tucaferreti");
  let inputJachibombo = document.getElementById("jachibombo");
  let selectedPet = "";

  // Elements to display selected character
  let selectedCharacterImage = document.getElementById("selected-character-image");
  let friendPet = document.getElementById("friend-pet");


  if (inputFiregod.checked) {
    selectedPet = "Firegod 🔥";
    friendPet.innerHTML = "Firegod";
    selectedCharacterImage.src = "./images/Firegod.jpg";
    selectEnemyPet();
  } else if (inputWatermelon.checked) {
    selectedPet = "Watermelon 💦";
    friendPet.innerHTML = "Watermelon";
    selectedCharacterImage.src = "./images/Watermelon.png";
    selectEnemyPet();
  } else if (inputFloraline.checked) {
    selectedPet = "Floraline 🌲";
    friendPet.innerHTML = "Floraline";
    selectedCharacterImage.src = "./images/Flor.png";
    selectEnemyPet();
  } else if (inputThundercat.checked) {
    selectedPet = "Thundercat ⚡";
    friendPet.innerHTML = "Thundercat";
    selectedCharacterImage.src = "./images/Thunder.png";
    selectEnemyPet();
  } else if (inputTucaferreti.checked) {
    selectedPet = "Tucaferreti 💨";
    friendPet.innerHTML = "Tucaferreti";
    selectedCharacterImage.src = "./images/Tucaferreti.webp";
    selectEnemyPet();
  } else if (inputJachibombo.checked) {
    selectedPet = "Jachibombo 🌌";
    friendPet.innerHTML = "Jachibombo";
    selectedCharacterImage.src = "./images/Jachibombo.webp";
    selectEnemyPet();
  } else {
    selectedPet = "to be a loser 👎";
    alert('You selected ' + selectedPet)
  }
}

function aleatorio(max, min) {
  //Get aleatory number
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

function selectEnemyPet() {
    //Showing back the sections
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'flex'
    let sectionLifes = document.getElementById('check-life')
    sectionLifes.style.display = 'grid'
    let sectionMessages = document.getElementById('messages')
    sectionMessages.style.display = 'flex'
    
    //Hiding sections
    let sectionRestart = document.getElementById('play-again')
    sectionRestart.style.display = 'none'
    let sectionSelectPet = document.getElementById('select-pet')
    sectionSelectPet.style.display = 'none'

  //Enemy selects pet
  let aleatorySelection = aleatorio(6, 1);
  let enemySelectedPet = "";
  let enemyPet = document.getElementById("enemy-pet");
  let selectedEnemyCharacterImage = document.getElementById("selected-enemy-character-image");



  if (aleatorySelection === 1) {
    enemySelectedPet = "Firegod 🔥";
    enemyPet.innerHTML = "Firegod";
    selectedEnemyCharacterImage.src = "./images/Firegod.jpg";
  } else if (aleatorySelection === 2) {
    enemySelectedPet = "Watermelon 💦";
    enemyPet.innerHTML = "Watermelon";
    selectedEnemyCharacterImage.src = "./images/Watermelon.png";
  } else if (aleatorySelection === 3) {
    enemySelectedPet = "Floraline 🌲";
    enemyPet.innerHTML = "Floraline";
    selectedEnemyCharacterImage.src = "./images/Flor.png";
  } else if (aleatorySelection === 4) {
    enemySelectedPet = "Thundercat ⚡";
    enemyPet.innerHTML = "Thundercat";
    selectedEnemyCharacterImage.src = "./images/Thunder.png";
  } else if (aleatorySelection === 5) {
    enemySelectedPet = "Tucaferreti 💨";
    enemyPet.innerHTML = "Tucaferreti";
    selectedEnemyCharacterImage.src = "./images/Tucaferreti.webp";
  } else if (aleatorySelection === 6) {
    enemySelectedPet = "Jachibombo 🌌";
    enemyPet.innerHTML = "Jachibombo";
    selectedEnemyCharacterImage.src = "./images/Jachibombo.webp";
  }
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
  let spanFriendLifes = document.getElementById("friend-lifes");
  let spanEnemyLifes = document.getElementById("enemy-lifes");

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

  if(friendLifes == 3){
    spanFriendLifes.innerHTML = '❤️❤️❤️';
  }else if(friendLifes == 2){
    spanFriendLifes.innerHTML = '❤️❤️🖤';
  }else if(friendLifes == 1){
    spanFriendLifes.innerHTML = '❤️🖤🖤';
  }else{
    spanFriendLifes.innerHTML = '🖤🖤🖤';
  }

  if(enemyLifes == 3){
    spanEnemyLifes.innerHTML = '❤️❤️❤️';
  }else if(enemyLifes == 2){
    spanEnemyLifes.innerHTML = '❤️❤️🖤';
  }else if(enemyLifes == 1){
    spanEnemyLifes.innerHTML = '❤️🖤🖤';
  }else{
    spanEnemyLifes.innerHTML = '🖤🖤🖤';
  }

  return result;
}

//Global Variables
let playerAttack = "";
let enemyAttack = "";
let friendPetMovement = document.getElementById("friend-pet-movement");
let enemyPetMovement = document.getElementById("enemy-pet-movement");
let victories = 0;
let loses = 0;
let result = "";
let friendLifes = 3;
let enemyLifes = 3;

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

/*   let paragraph = document.createElement("p"); //Name of element to create
 */  

  let messagesSection = document.getElementById("result-of-fight");
  let playerAttackDiv = document.getElementById("player-Attack-div");
  let enemyAttackDiv = document.getElementById("enemy-Attack-div");

  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");

  newPlayerAttack.innerHTML = playerAttack
  newEnemyAttack.innerHTML =  enemyAttack

  playerAttackDiv.appendChild(newPlayerAttack);
  enemyAttackDiv.appendChild(newEnemyAttack);


  if (enemyLifes == 0) { //Conditional starts
    messagesSection.innerHTML = 'You won the battle '

    //Disabling pet selection
    let inputFiregod = document.getElementById("firegod");
    let inputWatermelon = document.getElementById("watermelon");
    let inputFloraline = document.getElementById("floraline");
    let inputThundercat = document.getElementById("thundercat");
    let inputTucaferreti = document.getElementById("tucaferreti");
    let inputJachibombo = document.getElementById("jachibombo");

    inputFiregod.disabled = true;
    inputWatermelon.disabled = true;
    inputFloraline.disabled = true;
    inputThundercat.disabled = true;
    inputTucaferreti.disabled = true;
    inputJachibombo.disabled = true;

    //Disabling attack buttons
    let buttonFire = document.getElementById("button-fire");
    buttonFire.disabled = true;
    let buttonWater = document.getElementById("button-water");
    buttonWater.disabled = true;
    let buttonPlantae = document.getElementById("button-plantae");
    buttonPlantae.disabled = true;
    let buttonElectricity = document.getElementById("button-electricity");
    buttonElectricity.disabled = true;
    let buttonWind = document.getElementById("button-wind");
    buttonWind.disabled = true;
    let buttonPlasma = document.getElementById("button-plasma");
    buttonPlasma.disabled = true;

    //Show section to restart game 
    let sectionRestart = document.getElementById('play-again')
    sectionRestart.style.display = 'flex'

  } else if (friendLifes == 0) {
    messagesSection.innerHTML = 'You lost the battle ☠️'


    //Disabling pet selection
    let inputFiregod = document.getElementById("firegod");
    let inputWatermelon = document.getElementById("watermelon");
    let inputFloraline = document.getElementById("floraline");
    let inputThundercat = document.getElementById("thundercat");
    let inputTucaferreti = document.getElementById("tucaferreti");
    let inputJachibombo = document.getElementById("jachibombo");

    inputFiregod.disabled = true;
    inputWatermelon.disabled = true;
    inputFloraline.disabled = true;
    inputThundercat.disabled = true;
    inputTucaferreti.disabled = true;
    inputJachibombo.disabled = true;

    //Disabling attack buttons
    let buttonFire = document.getElementById("button-fire");
    buttonFire.disabled = true;
    let buttonWater = document.getElementById("button-water");
    buttonWater.disabled = true;
    let buttonPlantae = document.getElementById("button-plantae");
    buttonPlantae.disabled = true;
    let buttonElectricity = document.getElementById("button-electricity");
    buttonElectricity.disabled = true;
    let buttonWind = document.getElementById("button-wind");
    buttonWind.disabled = true;
    let buttonPlasma = document.getElementById("button-plasma");
    buttonPlasma.disabled = true;

    //Show section to restart game 
    let sectionRestart = document.getElementById('play-again')
    sectionRestart.style.display = 'flex'
    
  } else if (enemyLifes > 0 && friendLifes > 0) {
    messagesSection.innerHTML = result
  }
}

function restartGame() {
  location.reload();
}

//ExecutioninputFiregod
window.addEventListener("load", initiateGame);

//Second part Finishes

//Global Variables
let selectedAttack;
let selectedEnemyAttack;
const friendPetMovement = document.getElementById("friend-pet-movement");
const enemyPetMovement = document.getElementById("enemy-pet-movement");
let victories = 0;
let loses = 0;
let result = "";
let friendVictories = 0;
let enemyVictories = 0;
//Sections to hide and show
const sectionTitle = document.getElementById("section-title");
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
//Section see map
const sectionSeeMap = document.getElementById("see-map");
const map = document.getElementById("map");
//Marcador
const spanfriendVictories = document.getElementById("friend-victories");
const spanenemyVictories = document.getElementById("enemy-victories");
//Add message
const messagesSection = document.getElementById("result-of-fight");
const playerAttackDiv = document.getElementById("player-Attack-div");
const enemyAttackDiv = document.getElementById("enemy-Attack-div");
//Mokepons array
let mokeponsOption;
let inputFiregod;
let inputWatermelon;
let inputFloraline;
let inputThundercat;
let inputTucaferreti;
let inputJachibombo;
let selectedPet;
const petCardsContainer = document.getElementById("pet-cards-container");

//Buttons for attacks
let buttonPet = document.getElementById("button-pet");
let buttonFire;
let buttonWater;
let buttonPlantae;
let buttonElectricity;
let buttonWind;
let buttonPlasma;
let attackButtons = [];
let playerAttack = [];
let enemyAttack = [];
let enemyMokeponAttacks;
let lastFriendlyAttack;
let lastEnemyAttack;

//Canvas shit
let canvas = map.getContext("2d");
let interval;
let backgroundMap = new Image();
backgroundMap.src;
let extractedDrawBackgroundMap;
let extractedDrawMokepon;
// Calculate width and height in pixels based on viewport width
const vwToPx = (vw) => (vw / 100) * window.innerWidth;
const vhToPx = (vh) => (vh / 100) * window.innerHeight;
let widthMap = window.innerWidth - 20;
const maxMapWidth = 800;

//Backend
let playerId = null;
let enemyId = null;4

//Array of mokepons
let mokepons = [];
let enemyMokepons = []
//Attacks of mokepons
let containerButtonsAttack = document.getElementById(
  "container-buttons-attack"
);
let attackOption;
let attacks = "This is a value";
let playerAttackName = "Attack Name Default";

//Creation of a class for mokepons array
class Mokepon {
  constructor(name, photo, life, id = null) {
    this.id = id
    this.name = name;
    this.photo = photo;
    this.life = life;
    this.attacks = [];
    //this.width = vwToPx(10)
    //this.height = vwToPx(10)
    this.width = 50;
    this.height = 50;
    this.photoMap = new Image();
    this.photoMap.src = photo;
    this.speedX = 0;
    this.speedY = 0;
    this.x = aleatorio(0, map.width - this.width)
    this.y = aleatorio(0, map.height - this.height)
  }
  paintMokepon() {
    canvas.drawImage(this.photoMap, this.x, this.y, this.width, this.height);
  }
}

//Creating objects using the class
let firegod = new Mokepon("Firegod", "./public/images/Firegod.jpg", 3);
let thundercat = new Mokepon("Thundercat", "./public/images/Thunder.png", 3);
let watermelon = new Mokepon("Watermelon", "./public/images/Watermelon.png", 3);
let tucaferreti = new Mokepon("Tucaferreti", "./public/images/Tucaferreti.webp", 3);
let floraline = new Mokepon("Floraline", "./public/images/flor.png", 3);
let jachibombo = new Mokepon("Jachibombo", "./public/images/Jachibombo.webp", 3);


//Stablishing what type of mokepon will have what type of attacks
const firegodAttacks = [
  { name: "🔥", id: "button-fire" },
  { name: "🔥", id: "button-fire" },
  { name: "⚡", id: "button-electricity" },
  { name: "💧", id: "button-water" },
  { name: "🍃", id: "button-plantae" }
]

const thundercatAttacks = [
  { name: "⚡", id: "button-electricity" },
  { name: "⚡", id: "button-electricity" },
  { name: "🔥", id: "button-fire" },
  { name: "💨", id: "button-wind" },
  { name: "🌌", id: "button-plasma" }
]

const watermelonAttacks = [
  { name: "💧", id: "button-water" },
  { name: "💧", id: "button-water" },
  { name: "💨", id: "button-wind" },
  { name: "🔥", id: "button-fire" },
  { name: "🍃", id: "button-plantae" }
]

const tucaferretiAttacks = [
  { name: "💨", id: "button-wind" },
  { name: "💨", id: "button-wind" },
  { name: "💧", id: "button-water" },
  { name: "⚡", id: "button-electricity" },
  { name: "🌌", id: "button-plasma" }
]

const floralineAttacks = [
  { name: "🍃", id: "button-plantae" },
  { name: "🍃", id: "button-plantae" },
  { name: "🌌", id: "button-plasma" },
  { name: "🔥", id: "button-fire" },
  { name: "💧", id: "button-water" }
]

const jachibomboAttacks = [
  { name: "🌌", id: "button-plasma" },
  { name: "🌌", id: "button-plasma" },
  { name: "🍃", id: "button-plantae" },
  { name: "⚡", id: "button-electricity" },
  { name: "💨", id: "button-wind" }
]

//Inserting available attacks so the player can select them
firegod.attacks.push(...firegodAttacks);

thundercat.attacks.push(...thundercatAttacks);

watermelon.attacks.push(...watermelonAttacks);

tucaferreti.attacks.push(...tucaferretiAttacks);

floraline.attacks.push(...floralineAttacks);

jachibombo.attacks.push(...jachibomboAttacks);


//Adding mokepons to the array 'mokepons'
mokepons.push(
  firegod,
  watermelon,
  floraline,
  thundercat,
  tucaferreti,
  jachibombo
);

function initiateGame() {
  //Hiding sections in HTML
  sectionSeeMap.style.display = "none";
  sectionLifes.style.display = "none";
  sectionMessages.style.display = "none";
  sectionRestart.style.display = "none";
  sectionSelectAttack.style.display = "none";

  //Dynamic creation of mokepon cards to select
  mokepons.forEach((mokepon) => {
    mokeponsOption = `
    <div class="container-images">
    <input type="radio" name="animal" id=${mokepon.name} class="input-mokepon">
    <label for=${mokepon.name} class="label-border">
        <img src=${mokepon.photo} alt=${mokepon.name} class="images">
        <p class="name-pet">${mokepon.name}</p>
    </label>
    </div>
    `;

    petCardsContainer.innerHTML += mokeponsOption; //Inserting dynamicall mokepons into the html

    inputFiregod = document.getElementById("Firegod");
    inputWatermelon = document.getElementById("Watermelon");
    inputFloraline = document.getElementById("Floraline");
    inputThundercat = document.getElementById("Thundercat");
    inputTucaferreti = document.getElementById("Tucaferreti");
    inputJachibombo = document.getElementById("Jachibombo");
  });

  //Select pet function
  buttonPet.addEventListener("click", selectPet);
  //Restart button at the end of the game
  buttonRestart.addEventListener("click", restartGame);
}

function selectPet() { //Function that allows player to select a pet
  if (inputFiregod.checked) {
    friendPet.innerHTML = inputFiregod.id;
    selectedCharacterImage.src = "./public/images/Firegod.jpg";
    selectedPet = inputFiregod.id;
  } else if (inputWatermelon.checked) {
    friendPet.innerHTML = inputWatermelon.id;
    selectedCharacterImage.src = "./public/images/Watermelon.png";
    selectedPet = inputWatermelon.id;
  } else if (inputFloraline.checked) {
    friendPet.innerHTML = inputFloraline.id;
    selectedCharacterImage.src = "./public/images/Flor.png";
    selectedPet = inputFloraline.id;
  } else if (inputThundercat.checked) {
    friendPet.innerHTML = inputThundercat.id;
    selectedCharacterImage.src = "./public/images/Thunder.png";
    selectedPet = inputThundercat.id;
  } else if (inputTucaferreti.checked) {
    friendPet.innerHTML = inputTucaferreti.id;
    selectedCharacterImage.src = "./public/images/Tucaferreti.webp";
    selectedPet = inputTucaferreti.id;
  } else if (inputJachibombo.checked) {
    friendPet.innerHTML = inputJachibombo.id;
    selectedCharacterImage.src = "./public/images/Jachibombo.webp";
    selectedPet = inputJachibombo.id;
  } else {
    alert("You selected to be a loser 👎");
    return 
  }

  extractAttacks(selectedPet); //Function that extracts attacks of the pet you selected

  //Showing sections
  sectionSeeMap.style.display = "flex";

  //Hiding sections
  sectionSelectPet.style.display = "none";
  sectionTitle.style.display = "none";

  initiateMap(); //Map starts
  joinGame(); //Creation of id and join to the sercer
}

function joinGame() {
  //Function from backend to generate an id into the console.
  fetch("http://192.168.1.4:8080/join").then(function (res) {
    if (res.ok) {
      res.text().then(function (response) {
        console.log("Response received, updating playerId:", response);
        playerId = response;
        console.log("Updated playerId:", playerId);
        //
        console.log(`Sending request with playerId: ${playerId}`);
        selectMokeponBackend(selectedPet);
        console.log(`Sent playerID: ${playerId}`);
      });
    }
  });
}

function selectMokeponBackend(selectedPet) {
  fetch(`http://192.168.1.4:8080/mokepon/${playerId}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mokepon: selectedPet,
    }),
  });
}

function extractAttacks(selectedPet) { //Function to extract attacks depending on the pet you selected
  for (let i = 0; i < mokepons.length; i++) {
    if (selectedPet === mokepons[i].name) {
      attacks = mokepons[i].attacks;
    }
  }
  showAttacks(attacks);
}

function showAttacks(attacks) {
  //Dynamically creates the buttons' structure for attacks
  attacks.forEach((attack) => {
    attackOption = `
    <button id=${attack.id} class="button-attack concert-one-regular attackB">${attack.name}</button>
    `;
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
  attackButtons = document.querySelectorAll(".attackB");
}

function attackSequence() {//Function to add your attacks into the array of attacks
  attackButtons.forEach((attackButton) => {
    attackButton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        playerAttack.push("FIRE");
        console.log(playerAttack);
        selectedAttack = "🔥";
        attackButton.style.background = "rgb(70, 0, 0)";
        attackButton.disabled = true;
      } else if (e.target.textContent === "💧") {
        playerAttack.push("WATER");
        console.log(playerAttack);
        selectedAttack = "💧";
        attackButton.style.background = "rgb(70, 0, 0)";
        attackButton.disabled = true;
      } else if (e.target.textContent === "🍃") {
        playerAttack.push("PLANTAE");
        console.log(playerAttack);
        selectedAttack = "🍃";
        attackButton.style.background = "rgb(70, 0, 0)";
        attackButton.disabled = true;
      } else if (e.target.textContent === "⚡") {
        playerAttack.push("ELECTRICITY");
        console.log(playerAttack);
        selectedAttack = "⚡";
        attackButton.style.background = "rgb(70, 0, 0)";
        attackButton.disabled = true;
      } else if (e.target.textContent === "💨") {
        playerAttack.push("WIND");
        console.log(playerAttack);
        selectedAttack = "💨";
        attackButton.style.background = "rgb(70, 0, 0)";
        attackButton.disabled = true;
      } else if (e.target.textContent === "🌌") {
        playerAttack.push("PLASMA");
        console.log(playerAttack);
        selectedAttack = "🌌";
        attackButton.style.background = "rgb(70, 0, 0)";
        attackButton.disabled = true;
      }

      if(playerAttack.length === 5){//Conditional to only proceed with the game once player selected all attacks
        sendAttacks()
      }
    });
  });
}

function sendAttacks(){//Sends the array of selected attacks to the backend
  fetch(`http://192.168.1.4:8080/mokepon/${playerId}/attacks`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      attacks: playerAttack
    })
  })

  interval = setInterval(getAttacks, 50)
}

function getAttacks(){//Receives the attacks in the backend
  fetch(`http://192.168.1.4:8080/mokepon/${enemyId}/attacks`)
    .then(function(res){
      if(res.ok){
        res.json()
            .then(function({attacks}){
              if(attacks.length === 5){
                playerAttack = attacks
                initiateCombat()//Starts the comparation of attacks between players
              }
            })
      }
    })
}

function aleatorio(min, max) { //Function that returns a number between two parameters
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectEnemyPet(colissionedEnemy) {//Shows the enemy pet on map
  enemyPet.innerHTML = colissionedEnemy.name;
  selectedEnemyCharacterImage.src = colissionedEnemy.photo;
  enemyMokeponAttacks = colissionedEnemy.attacks;
  attackSequence();//Starts the addition of attacks to the array
}

function paintCanva() { //Paints the map in general
  extractedDrawMokepon.x = extractedDrawMokepon.x + extractedDrawMokepon.speedX;
  extractedDrawMokepon.y = extractedDrawMokepon.y + extractedDrawMokepon.speedY;
  canvas.clearRect(0, 0, map.width, map.height); 
  canvas.drawImage(backgroundMap, 0, 0, map.width, map.height); //Draws the background of the map
  canvas.drawImage( //Draws your mokepon
    extractedDrawMokepon.photoMap,
    extractedDrawMokepon.x,
    extractedDrawMokepon.y,
    extractedDrawMokepon.width,
    extractedDrawMokepon.height
  )

  //Send position on x and y to the backend
  sendPosition(extractedDrawMokepon.x, extractedDrawMokepon.y);

  enemyMokepons.forEach(function(mokepon){ //Paints every selected mokepon on the map
    mokepon.paintMokepon()
    reviewCollisionMap(mokepon)//Reviews you haven't crashed another mokepon
  })
}

function sendPosition(x, y) {//Sends your position on the map to the backend
  fetch(`http://192.168.1.4:8080/mokepon/${playerId}/position`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ x, y }),
  })
  .then(function (res){
    if (res. ok){
      res.json()
          .then(function ({enemies}){
            console.log(enemies)
            enemyMokepons = enemies.map(function(enemy){ //Change the created mokepon depending on what was selected
              if (enemy.mokepon != undefined) { //Making sure the enemy is defined
                console.log("Enemy: " + enemy.mokepon)
                let enemyMokepon = null //Setting a standard variable
                const mokeponName = enemy.mokepon.name || ""
                if (mokeponName === "Firegod"){
                  console.log("Enemy: " + enemy.mokepon)
                  enemyMokepon = new Mokepon(
                    "Firegod",
                    "./public/images/Firegod.jpg",
                    3,
                    enemy.id,
                  );
                } else if (mokeponName === "Thundercat"){
                  console.log("Enemy: " + enemy.mokepon)
                  enemyMokepon = new Mokepon(
                    "Thundercat",
                    "./public/images/Thunder.png",
                    3,
                    enemy.id,
                  );
                } else if (mokeponName === "Watermelon"){
                  console.log("Enemy: " + enemy.mokepon)
                  enemyMokepon = new Mokepon(
                    "Watermelon",
                    "./public/images/Watermelon.png",
                    3,
                    enemy.id,
                  );
                } else if (mokeponName === "Tucaferreti"){
                  console.log("Enemy: " + enemy.mokepon)
                  enemyMokepon = new Mokepon(
                    "Tucaferreti",
                    "./public/images/Tucaferreti.webp",
                    3,
                    enemy.id,
                  );
                } else if (mokeponName === "Floraline"){
                  console.log("Enemy: " + enemy.mokepon)
                  enemyMokepon = new Mokepon("Floraline",
                    "./public/images/Flor.png",
                    3,
                    enemy.id,
                  );
                } else if (mokeponName === "Jachibombo"){
                  console.log("Enemy: " + enemy.mokepon)
                  enemyMokepon = new Mokepon(
                    "Jachibombo",
                    "./public/images/Jachibombo.webp",
                    3,
                    enemy.id,
                  );
                } else {
                  console.log("This is the value of enemy because no other condition was met: " + enemyMokepon)
                }

                //Update values of enemy on x and y before we paint it
                enemyMokepon.x = enemy.x
                enemyMokepon.y = enemy.y

                return enemyMokepon
              }
            })
          })
    }
  })
}

function extractDrawOfPet() {//Extracts the draw of the selected mokepon
  for (let i = 0; i < mokepons.length; i++) {
    if (selectedPet === mokepons[i].name) {
      return mokepons[i];
    }
  }
}

function extractDrawOfBackgroundMap() {//Extracts the map depending on the pet you selected
  if (selectedPet == "Firegod") {
    backgroundMap.src = "../public/images/mokemap.avif";
  } else if (selectedPet == "Watermelon") {
    backgroundMap.src = "../public/images/backgroundImgWater2.webp";
  } else if (selectedPet == "Floraline") {
    backgroundMap.src = "../public/images/backgroundImgPlantae.webp";
  } else if (selectedPet == "Thundercat") {
    backgroundMap.src = "../public/images/backgroundImgElectricity.webp";
  } else if (selectedPet == "Tucaferreti") {
    backgroundMap.src = "../public/images/backgroundImgAir.webp";
  } else if (selectedPet == "Jachibombo") {
    backgroundMap.src = "../public/images/backgroundImgPlasma.avif";
  }
  return backgroundMap.src;
}

function movePetRight() {
  extractedDrawMokepon.speedX = 5;
  paintCanva();
}
function movePetLeft() {
  extractedDrawMokepon.speedX = -5;
  paintCanva();
}
function movePetUp() {
  extractedDrawMokepon.speedY = -5;
  paintCanva();
}
function movePetDown() {
  extractedDrawMokepon.speedY = 5;
  paintCanva();
}

function stopMovement() {
  extractedDrawMokepon.speedX = 0;
  extractedDrawMokepon.speedY = 0;
  clearInterval(interval);
}

function movePetWithKeyboard(event) {//Allows to move pet with keyboard
  console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
    case "w":
      movePetUp();
      break;
    case "ArrowLeft":
    case "a":
      movePetLeft();
      break;
    case "ArrowDown":
    case "s":
      movePetDown();
      break;
    case "ArrowRight":
    case "d":
      movePetRight();
      break;
    default:
      break;
  }
}

function initiateMap() {//Calls the functions that extract necessary pictures and paint the map
  extractedDrawMokepon = extractDrawOfPet(selectedPet);//Extracts the draw of mokepon
  extractedDrawBackgroundMap = extractDrawOfBackgroundMap(selectedPet); //Extracts draw of map depending on selected pet
  setSizeMap(); //Sets the size of the map
  interval = setInterval(paintCanva, 50); //Gives an smooth look to the movement of pet
  window.addEventListener("keydown", movePetWithKeyboard);//Listens to when you touch any key
  window.addEventListener("keyup", stopMovement); //Listens to when you stop touching any key
}

function initiateCombat() { //Makes sure the array of attacks is full before proceeding to compare
  if (playerAttack.length == 5) {
    marcador();
    addMessage();
  }
}

function indexBothOponents(player, enemy) {//Compares last attacks of friend and enemy pet
  lastFriendlyAttack = playerAttack[player];
  lastEnemyAttack = enemyAttack[enemy];
}

function marcador() { //Decides who wins depending on the selected attack
  clearInterval(interval)

  for (let index = 0; index < 5; index++) {
    indexBothOponents(index, index);
    if (lastFriendlyAttack == lastEnemyAttack) {
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
    } else {
      enemyVictories++;
      spanenemyVictories.innerHTML = enemyVictories;
    }
  }

  if (friendVictories == 5) { //Defines how many victories friend got
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

  if (enemyVictories == 5) { //Defines how many victories the enemy got
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
  //Show historial of attacks
  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");
  //Show attack made by player
  newPlayerAttack.innerHTML = selectedAttack;
  newEnemyAttack.innerHTML = selectedEnemyAttack;
  //Insert message of attacks
  playerAttackDiv.appendChild(newPlayerAttack);
  enemyAttackDiv.appendChild(newEnemyAttack);

  if (friendVictories > enemyVictories && friendVictories == 5) {//Defines who wins the whole battle
    messagesSection.innerHTML = "FLAWLESS VICTORY";     //Message of perfect victory
  } else if (friendVictories > enemyVictories && friendVictories >= 3) {
    messagesSection.innerHTML = "Amazing victory";
  } else if (friendVictories > enemyVictories) {
    messagesSection.innerHTML = "Victory";
  } else if (friendVictories == enemyVictories) {
    messagesSection.innerHTML = "Draw";
  } else {
    messagesSection.innerHTML = "You lost";
  }
  //Shows section to restart game
  sectionRestart.style.display = "flex";
}

function restartGame() { //Function that restarts game
  location.reload();
}

function reviewCollisionMap(enemy) {//Checks if you crashed with an enemy pet on the map/canva
  //Sides of the enemy's pet
  const upsideEnemy = enemy.y;
  const downsideEnemy = enemy.y + enemy.height;
  const leftsideEnemy = enemy.x;
  const rightsideEnemy = enemy.x + enemy.width;
  //Sides of the player's pet
  const upsidePet = extractedDrawMokepon.y;
  const downsidePet = extractedDrawMokepon.y + extractedDrawMokepon.height;
  const leftsidePet = extractedDrawMokepon.x;
  const rightsidePet = extractedDrawMokepon.x + extractedDrawMokepon.width;
  //Conditionals to validate the collision
  if (
    downsidePet < upsideEnemy ||
    upsidePet > downsideEnemy ||
    rightsidePet < leftsideEnemy ||
    leftsidePet > rightsideEnemy
  ) {
    return;
  }
  stopMovement(); //Stops movement whenever you crash

  enemyId = enemy.id //Adding the id from the class Mokepon

  //Show sections back
  sectionSelectAttack.style.display = "flex";
  sectionSeeMap.style.display = "none";
  sectionTitle.style.display = "none";
  sectionRestart.style.display = "none";
  sectionSelectPet.style.display = "none";
  sectionLifes.style.display = "grid";
  sectionMessages.style.display = "flex";

  //Calling function to select enemy depending on which element had a collision
  selectEnemyPet(enemy);
}

function setSizeMap() { //Sets the size of the map
  if (widthMap > maxMapWidth) {
    widthMap = maxMapWidth - 20;
  }
  map.width = widthMap;
  map.height = vhToPx(70);
}

function stopOnBorderMap() {//Stops player from going out of the map
  // Border of the map
  const upsideMap = 0;
  const downsideMap = map.height;
  const leftsideMap = 0;
  const rightsideMap = map.width;

  // Sides of the player's pet
  const upsidePet = extractedDrawMokepon.y;
  const downsidePet = extractedDrawMokepon.y + extractedDrawMokepon.height;
  const leftsidePet = extractedDrawMokepon.x;
  const rightsidePet = extractedDrawMokepon.x + extractedDrawMokepon.width;

  // Stop the pet at the top border
  if (upsidePet <= upsideMap) {
    extractedDrawMokepon.y = upsideMap;
  }
  // Stop the pet at the bottom border
  else if (downsidePet >= downsideMap) {
    extractedDrawMokepon.y = downsideMap - extractedDrawMokepon.height;
  }
  // Stop the pet at the right border
  else if (rightsidePet >= rightsideMap) {
    extractedDrawMokepon.x = rightsideMap - extractedDrawMokepon.width;
  }
  // Stop the pet at the left border
  else if (leftsidePet <= leftsideMap) {
    extractedDrawMokepon.x = leftsideMap;
  }
}

window.addEventListener("load", initiateGame);

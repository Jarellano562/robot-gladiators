var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roborto", "Amy Andriod", "Robo Truble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName);

//REMOVE ENEMY'S HEALTH BY SUBTRACTING THE AMOUNT SET IN THE PLAYERATTACK VARIABLE
enemyHealth = enemyHealth - playerAttack
console.log(
  playerName + "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
);

//CHECK ENEMY'S HEALTH
if (enemyHealth <= 0) {
  window.alert(enemyName + "has died!");

  //LEAVE WHILE() LOOP SINCE ENEMY IS DEAD
  break;
}
else{
  window.alert(enemyName + 'still has' + enemyHealth + 'health left');
}

//REMOVE PLAYER'S HEALTH BY SUBTRACTING THE AMOUNT SET IN THE ENMEY ATTACK VARIABLE
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + 'attacked' + playerName + '. ' + playerName + 'now has' + playerHealth + 'health remaining.'
);

//CHECK PLAYER'S HEALTH 
if (playerHealth <= 0) {
  window.alert(playerName + 'has died!');
  //LEAVE WHILE () LOOP IF PLAYER IS DEAD
  break;
}

else {
  window.alert(playerName + 'still has' + playerHealth + 'health left.')
}
}

for(var i = 0; i < enemyName.length; i++) {
  fight(enemyName[i]);
}
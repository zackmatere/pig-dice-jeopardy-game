//business logic
 var playScore = 0;
 var winScore = 0;
 var rollDice

function Player(name, play) {
  this.playerName = name;
  this.playPlayer = active;
  this.rollDice = [];
  this.turnScore = 0;
  this.totalScore = 0;
};

Player.prototype.findScore = function() {
  var rollNumber = Math.floor((Math.random() * 6) + 1);
  this.rollDice.push(rollNumber);

  if(rollNumber != 1) {
    roundScore = roundScore += rollNumber;

Player.prototype.findTotal = function() {
  gameScore = this.totalScore += roundScore;
  this.totalScore = gameScore;
  if(gameScore >= 100) {
    alert("Congrats you win!");
  }
};

var fillScore = function() {
  $("h3.output-dice-roll").text("");
  $("h3.output-turn-total").text("0");
  this.roundScore = 0;
};

//user interface logic
$(document).ready(function() {

  $("form#player-setup-1").submit(function(event) {
    event.preventDefault();
    var player1Name = $("input.player-1-name").val();
    player1 = new Player(player1Name, true);
    console.log(player1.playerName);
    $("h3.output-player-1-name").text(player1.playerName);
  });
  $("form#player-setup-2").submit(function(event) {
    event.preventDefault();
    var player2name = $("input.player-2-name").val();
    player2 = new Player(player2name, false);
    $("h3.output-player-2-name").text(player2.playerName);
  });

  $("button.btn-roll-dice").click(function() {
    if(player1.playPlayer === true) {
      player1.findScore();
      $("h3.output-dice-roll").text(player1.diceRolls[player1.diceRolls.length - 1]);
      $("h3.output-turn-total").text(player1.turnScore);
    } else if (player2.playPlayer === true){
      player2.findScore();
      $("h3.output-dice-roll").text(player2.rollDice[player2.rollDice.length - 1]);
      $("h3.output-turn-total").text(player2.turnScore);
    } else {

    }

 
    if(player1.playPlayer === true) {
      $("div.player-1-score").text(player1.totalScore);
      player1.playPlayer = false;
      player2.playPlayer = true;
    } else {
      $("div.player-2-score").text(player2.winScore);
      player2.playPlayer = false;
      player1.playPlayer = true;
    }
  });

});

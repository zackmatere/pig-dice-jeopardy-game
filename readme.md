# pig dice jeopardy
##Pig Dice
*A game of chance where by rolling a die in turn with an opportunity to keep rolling or hold If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold" "end turn", their turn total is added to their score, and it becomes the next player's turn. *The first player to score 100 or more points wins*
##Setup/Installation Requirements
Clone this repository at:[pig dice jeopardy]
(https://github.com/zackmatere/pig-dice-jeopardy-game.git)
Move into the project folder
Open index.html in the browser of your choice


##Specifications
Pig Dice is a two player game each click in name

 starting score of 0
Example Input: zack
Example Output: Player 1 {zack, 0}

click to generate random number between 1 and 6
Example Input: Roll.click()
Example Output: 1 || 2 || 3 || 4 || 5 || 6
Sums all subsequent rolls in a single turn

Example Input: Rolls of (4, 3, 3, 6)
Example Output: Turn total: 16
Record score of 16

Example Input: Roll = 1
Example Output: end of turn
Adds turn total to given player's total score.

Example Input: Player1 total score => 100
Example Output: "Player one wins!"
##Known Bugs
There are no known bugs at this time.

Support and contact details
For help, contact:
zackmatere@gmail.com
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

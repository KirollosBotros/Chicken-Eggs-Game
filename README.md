# Chicken Eggs Game
This program is a recreation of one of my favourite games to play as a child - Chicken Eggs. In the traditional game, the objective of the game is to catch as many eggs as you can in the basket. In this version, I introduced new dynamics into the game such a leveling up system, various types of eggs and more.

## The Program:
### How to Play:
* The objective of this version remains the same as the original version - to accumulate as many points as possible by catching as many eggs as you can, however there are some differences:
	* Not all eggs are equal!
		* There are 4 types of eggs in this game, the standard egg (brown), the silver egg (silver), the sapphire egg (shiny blue) and the bomb. Catching these eggs will contribute to your score in a different way:
			* Standard eggs will increase your score by 1 point
			* Silver eggs will increase your score by 2 points
			* Sapphire eggs will increase your score by 5 points
			* Bombs will either kill you (game over) if your level score is 0 or reset your level score to 0 otherwise
	* Leveling System:
		* Like many other games, you progress in this game by completing levels to unlock new levels
			* Each new level will contain a new and larger set of eggs (each level has 5 more eggs than the previous) and the eggs will fall down at a faster speed (the speed increase is linear)
	* Point System:
		* There are two types of scores, the "Level Score" and the "Total Score"L
			* The Level Score keeps track of how many points you have scored in a specific level - which means it resets to 0 before a new level starts.
			- The 
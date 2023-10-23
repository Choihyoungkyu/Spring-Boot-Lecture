package com.in28minutes.learnspringframework;

import com.in28minutes.learnspringframework.game.GameRunner;
import com.in28minutes.learnspringframework.game.PacmanGame;

public class App01GamingBasicJava {
	   public App01GamingBasicJava() {
	   }

	   public static void main(String[] args) {
	      PacmanGame game = new PacmanGame();
	      GameRunner gameRunner = new GameRunner(game);
	      gameRunner.run();
	   }
	}

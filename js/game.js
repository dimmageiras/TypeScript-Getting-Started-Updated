"use strict";
exports.__esModule = true;
var utility_1 = require("./utility");
var scoreboard_1 = require("./scoreboard");
var Game = /** @class */ (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreboard_1["default"]();
    }
    Game.prototype.displayGame = function () {
        // create the html for the current game
        var gameForm = "";
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += "\n\t\t\t\t<form class=\"form-group\">\n\t\t\t\t\t<label for=\"answer".concat(i, "\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\t").concat(String(this.factor), " x ").concat(i, " =\n\t\t\t\t\t</label>\n\t\t\t\t\t<p class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer").concat(i, "\" size=\"5\"/></p>\n\t\t\t\t</form>\n\t\t\t");
        }
        // add the new game to the page
        var gameElement = document.getElementById("game");
        gameElement.innerHTML = gameForm;
        // enable the calculate score button
        document.getElementById("calculate").removeAttribute("disabled");
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number((0, utility_1.getValue)("answer" + i));
            i * this.factor === answer && score++;
        }
        // create a new result object to pass to the scoreboard
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        // disable the calculate score button
        document.getElementById("calculate").setAttribute("disabled", "true");
    };
    return Game;
}());
exports["default"] = Game;

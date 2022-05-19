"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Scoreboard = /** @class */ (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
        var allCapsName = _.upperCase(newResult.playerName);
        console.log("".concat(allCapsName, ": ").concat(newResult.score));
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = "<h2>Scoreboard</h2>";
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += "\n\t\t\t\t<h4>\n\t\t\t\t\t".concat(result.playerName, ": ").concat(result.score, "/").concat(result.problemCount, " for factor ").concat(result.factor, "\n\t\t\t\t</h4>\n\t\t\t");
        }
        var scoresElement = document.getElementById("scores");
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports["default"] = Scoreboard;

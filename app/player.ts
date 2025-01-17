import Person from "./person";

class Player implements Person {
	name!: string;
	age!: number;
	highScore!: number;

	formatName() {
		return this.name.toUpperCase();
	}
}

export default Player;

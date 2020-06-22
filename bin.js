class Blocks {
    constructor(x,y,width,height) {
        var options ={
            restitution: 0.1,
            density:3.5,
            friction:2
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world, this.body)
        this.width = width
        this.height = height
}

score() {
    if(this.body.speed > 5.2) {
		score = score + 1
	}
}

display() {
    push();
    fill("green")
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
}
}

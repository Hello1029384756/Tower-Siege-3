class iGround {
    constructor(x,y,width,height) {
        var options ={
            restitution: 0.01,
            friction: 1000000000
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world, this.body)
        this.width = width
        this.height = height
} 
display() {
    push();
    fill("white")
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
}
}
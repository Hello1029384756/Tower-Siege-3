class Sling {
    constructor(x,y,body) {
        var options = {
            pointA:{
                x:x,
                y:y
            },
            bodyB: body,
            stiffness: 0.2,
            length: 50
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling);
    } 

    attach() {
        this.sling.bodyB = body;
    }

    fly() {
        this.sling.bodyB = null;
    }
    
    display() {
        if(this.sling.bodyB) {
        stroke(255);
        var posA = this.sling.pointA
        var posB = this.sling.bodyB.position
        line(posA.x, posA.y, posB.x, posB.y)
        }
    }
}
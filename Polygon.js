class Polygon {
    constructor(bodyA, pointB){
        var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.05,
        length: 1
        }

        this.polygon = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.polygon);
    }

    attach(body) {
        this.polygon.bodyA = body;
      }
      
    fly() {
        this.polygon.bodyA = null;
    }

    display() {
        if(this.polygon.bodyA) {
        strokeWeight(4);
        stroke("white");
        line(this.polygon.bodyA.position.x, this.polygon.bodyA.position.x, this.pointB.x, this.pointB.y);
        }
    }
    
}
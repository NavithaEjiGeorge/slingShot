class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:1
        }
        this.sling = Constraint.create(options)
        this.pointB = pointB;
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
        var posA = (this.sling.bodyA.position)
        var posB = (this.pointB)
        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y)
        }
    }
    fly(){
     this.sling.bodyA = null
    }
}

class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:5
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    attach(body)
        {
            this.sling.bodyA=body
        }
    
    fly(){
        this.sling.bodyA = null;
    }
    display()
    {
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB1=this.pointB;
            push()
            stroke("white")
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB1.x,pointB1.y) 
            pop();
        }
      
    }
}
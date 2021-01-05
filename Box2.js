class Box2{

    constructor(x,y,width,height){
        
   var options = {
     isStatic : true,
     density : 0.1
   }
 
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   World.add(myWorld,this.body);
    }
 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;  
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(2);
        strokeWeight(3);
        fill("#3FE0D0");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
 
 }
class Box {
    constructor(x,y,width,height){
        var options = {
            
            restitution:0.8
            friction:1.0
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        
        this.height = height;
        World.add(world,this.body);

    }
        display(){
            var angle = this.body.angle;

            var pause = this.body.position;
            push();
            translate(pause.x,pause.y);
            rotate(angle);
            strokeWeight(4);
            stroke("green");
            fill("white");

            rectMode(CENTER);
            fill("brown");
            rect(0,0,this.width,this.height);
            pop();
        }
          
        
    

    
}
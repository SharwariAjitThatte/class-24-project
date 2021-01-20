class rubber{
    constructor(x,y,width,height){
        var options = {
            'retitution':1.2,
            'friction':5,
            'density':1.0,           
        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
       //rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke ("yellow");
        fill("orange");
        rect (0,0,this.width,this.height);
        pop();
    }   
};
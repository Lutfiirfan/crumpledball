class Dustbin{
    constructor(x,y,width,height){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    };
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(255)
      rotate(angle);
      imageMode(CENTER)
   
        image(this.image,pos.x, this.pos.y, 33,33);
        pop()
      }
}

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
        push()
	translate(pos.x, pos.y);
	rectMode(CENTER)
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        pull()
      }
}

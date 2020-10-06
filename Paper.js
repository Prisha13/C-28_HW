class Paper{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
     this.body = Bodies.circle(x, y, 20, options);
     this.image = loadImage("Paper.png");
     this.radius = 20;
     World.add(world, this.body);

    }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius*3, this.radius*3);
   }
}
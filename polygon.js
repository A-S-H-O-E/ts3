class Polygon{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.hexagon = loadImage("polygon.png")       
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.hexagon,0,0,this.width, this.height);
        pop();
      }
}

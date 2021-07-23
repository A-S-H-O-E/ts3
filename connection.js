class Connection {
    constructor(a, p) {
      var property = {
        bodyA: a,
        pointB: p,
        length: 20,
        stiffness: 0.02
      };
      this.connection = Constraint.create(property);
      World.add(world, this.connection);
      
    }
    displayBody(){
      
      if(this.connection.bodyA != null){
        var a = this.connection.bodyA.position
        var b = this.connection.pointB
        push()
        strokeWeight(3)
        stroke(48,22,8)
        line(a.x+15.5, a.y+30, b.x+15.5, b.y+30)
        line(a.x-15.5, a.y+25, b.x-15.5, b.y+30)
        pop()
      }
    }
    breakConnection(){
      this.connection.bodyA = null
    }
  }
  
  
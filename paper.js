class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          density:5000
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
     ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y,  this.radius);
      pop();
    }
  };
  
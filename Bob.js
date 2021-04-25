class Bob {
        constructor(x, y, radius) {
            var options = {
                'restitution':1.3,
                'friction':5.0,
                'density':1.0,
            }
            this.body = Bodies.circle(x, y, radius, options);
            this.radius = radius;
            //this.image = loadImage("sprites/base.png");
            World.add(world, this.body);
          }
          display(){
    
            var pos = this.body.position;
            var angle = this.body.angle;
            
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke('black');
            fill("purple");
            ellipse(50,0, this.radius);
            //imageMode(CENTER);
            //image(this.image, 0, 0, this.width, this.height);
            pop();
          }
    
}
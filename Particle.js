class Particle {
    constructor(x) {
        var options = {
            restitution: 1,
            friction: 1,
            density: 1
        }
        this.r = 10;
        this.body = Bodies.circle(x, 10, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};
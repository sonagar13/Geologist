class Rubber {

    constructor(x,y,r){

        var option = {

            density : 0.5,
            friction : 0.5,
            restitution: 0.3
        }
        
        this.body = Bodies.circle(x,y,r,option);
        this.x = x;
        this.y = y;
        this.r = r
        World.add(world,this.body);
    }


    display(){


        var pos = this.body.position;

        //pos.x = mouseX;
        //pos.y = mouseY;
        //var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);

        
        ellipseMode(RADIUS);
        strokeWeight(3);

        stroke("black");

        fill ("blue");
        
        ellipse(0,0,this.r,this.r);
        pop ();






    }
    }

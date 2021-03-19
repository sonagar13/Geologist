class Sand {

    constructor(x,y,r){

        var option = {

            density : 1,
            friction : 5,
            restitution: 0.3
        }

        this.body = Bodies.circle(x,y,r,option);
        this.x = x;
        this.y = y;

        this.r =  r;
        World.add(world,this.body);
    }


    display(){


        var pos = this.body.position;

        
        
        push ();
        translate(pos.x,pos.y);

        
        
        ellipseMode(RADIUS);
        strokeWeight(3);

        stroke("black");

        fill ("pink");
        
        ellipse(0,0,this.r,this.r);
        pop ();




    }

}
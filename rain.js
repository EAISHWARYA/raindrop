class rain {
    constructor( width,height) {
        
      
        var options = {
            isStatic: false,
            speed: 2,
            density: 3
        }
        
        this.body = Bodies.rectangle(random(10, 390),random(1, 10) , width, height, options);
       
      
        this.width = width;
        this.height = height;
        World.add(world, this.body)

    }

    display() {
        var pos = this.body.position
        rect(pos.x, pos.y, this.width, this.height);
    }
}
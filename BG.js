class BG {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.image = loadImage("images/city.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      // rectMode(CENTER);
      // fill(255);
      // rect(pos.x, pos.y, this.width, this.height);
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,displayWidth*2,displayHeight-170);
      pop();
    //  this.body.velocity.x = -2;
      this.body.position.x = this.body.position.x - 2;

      if(this.body.position.x<0) {
        this.body.position.x = 200;
      }
      //console.log(this.body.position.x)
    }
  };
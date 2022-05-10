let drag =[
    false,
    false
  ]
  
  let trashcan;
  
  let x = [];
  let y = [];
  
  
  
  function setup() {
    let canvas = createCanvas(windowWidth, 400);
    canvas.parent("my-containertwo")
    drag1 = new trashdrag1();
    trashcan = new trashbag();
    trashimg = loadImage('media/waste3.png');
    carimg2 = loadImage('media/trashcar.png');
    
    
    x[0] = 0;
    y[0] = 280;
    
    x[1] = 75;
    y[1] = 280;
  }
  
    
  
  function draw() {
    background(89, 166, 166);
    drag1.update();
    drag1.display();
    
    trashcan.update();
    trashcan.display();
    
  }
  
  function mousePressed() {
    drag1.pressed();
  }
  
  function mouseReleased() {
    drag1.released();
  }
  
  class trashdrag1 {
    constructor() {
      this.dragging = false; 
      this.rollover = false; 
      this.x = 10;
      this.y = (400-170);
      this.w = 75;
      this.h = 80;
    }
  
    update() {
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
      if( this.x > windowWidth/2+10 && this.y > 400/2 + 30){
        this.x += windowWidth/2+ 0.5  
      }
    }
  
    display() {
       image(trashimg, this.x, this.y)
    }
  
    pressed() {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.dragging = true;
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    }
  
    released() {
      this.dragging = false;
    }
  }
  
  
  class trashbag {
    constructor() { 
      this.xPos = (windowWidth/2 - 70);
      this.yPos = (400-170);
    }
  
  
    update() {      
      this.xPos += random(0.5);
    if(this.xPos > width ){
     this.xPos = 0 -10;


      }
    }
  
  
    display() {
      image(carimg2, this.xPos , this.yPos);
    } 
  }
  
  
  
  
  
  
  
  
  
  
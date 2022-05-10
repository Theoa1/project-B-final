let trash=[];
let numTrash = 10
let trash2;
let trash3;
let trash1;
let trash4;
let trash5;
let trash6;
let trash7;
let trash8;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("my-containerone")
  trash1 = new bola1();
  trash2 = new bola2();
  trash3 = new bola3();
  trash4 = new bola4();
  trash5 = new bola5();
  trash6 = new bola6();
  trash7 = new bola7();
  trash8 = new bola8();
  
  
  img = loadImage('media/waste1.png');
  img2 = loadImage('media/waste2.png');
  img3 = loadImage('media/waste3.png');
  img4 = loadImage('media/waste4.png');
  img5 = loadImage('media/waste5.png');
  img6 = loadImage('media/waste6.png');
  img7 = loadImage('media/waste7.png');
  img8 = loadImage('media/waste8.png');
}

function draw() {
  background(89, 166, 166)
  trash1.fall();
  trash1.display();
  
  trash2.fall();
  trash2.display();
  
  trash3.fall();
  trash3.display();
  
  trash4.fall();
  trash4.display();
  
  trash5.fall();
  trash5.display();
  
  trash6.fall();
  trash6.display();
  
  trash7.fall();
  trash7.display();
  
  trash8.fall();
  trash8.display();
  
}

class bola1 {
 constructor() {
    this.x = random(windowWidth-200);
    this.y = (windowHeight-200);
    this.speed = random(2, 3);   
  }
  
  fall() {
   this.x += random(-this.speed-2, this.speed+30);
   if(this.x > width + 4500 ){
     this.x = 0;
   }
     
   this.y += random(-1,3);
   this.y = this.y + this.speed;
   if(this.y > height + 450 ){
     this.y = 0-200;
   }  
  }

  display() {
    rotate(3 / -800 * 45);
    image(img, this.x / 20, this.y/2);
  } 
}

class bola2 {
 constructor() {
    this.x = (width + 3000);
    this.y = (windowHeight-20);
    this.w = random(10, 50)
    this.speed = random(1, 5);   
  }
  
  fall() {
   this.y = this.y + this.speed;
   if(this.y > height + 450 ){
     this.y = 0-200;
   }  
}

  display() {
    rotate(3 / 400 * 45);
    image(img2, this.x / 20, this.y/2);
  } 
}


class bola3 {
 constructor() {
    this.x = (width + 6000);
    this.y = (windowHeight-20);
    this.speed = random(1, 5);   
  }
  
  fall() {
   this.y = this.y + this.speed;
   if(this.y > height + 450 ){
     this.y = 0-300;
   }  
}

  display() {
    rotate(1 / 400 * 45);
    image(img3, this.x / 20, this.y/2);
  } 
}

class bola4 {
 constructor() {
    this.x = random(windowWidth-200);
    this.y = (windowHeight-200);
    this.speed = random(0.5, 3);   
  }
  
  fall() {
   this.y += random(-1,3);
   this.y = this.y + this.speed;
   if(this.y > height + 450 ){
     this.y = 0-200;
   }  
  }

  display() {
    rotate(3 / -800 * 45);
    image(img4, this.x, this.y/2);
  } 
}

class bola5 {
 constructor() {
    this.x = (width + 7000);
    this.y = (windowHeight-20);
    this.speed = random(1, 5);   
  }
  
  fall() {
   this.y = this.y + this.speed;
   if(this.y > height + 750 ){
     this.y = 0-300;
   }  
}

  display() {
    rotate(3 / -400 * 45);
    image(img5, this.x / 20, this.y/2);
  } 
}

class bola6 {
 constructor() {
    this.x = (width + 8000);
    this.y = (windowHeight-20);
    this.speed = random(1, 5);   
  }
  
  fall() {
   this.y = this.y + this.speed;
   if(this.y > height + 750 ){
     this.y = 0-300;
   }  
}

  display() {
    rotate(3 / -40 );
    image(img6, this.x / 20, this.y/2);
  } 
}

class bola7 {
 constructor() {
    this.x = random(windowWidth + 9000);
    this.y = (windowHeight-200);
    this.speed = random(0.5, 3);   
  }
  
  fall() {
   this.y += random(-1,3);
   this.y = this.y + this.speed;
   if(this.y > height + 750 ){
     this.y = 0-200;
   }  
  }

  display() {
    rotate(1 / -400 * 45);
    image(img7, this.x / 20, this.y/2);
  } 
}

class bola8 {
 constructor() {
    this.x = (width + 10000);
    this.y = (windowHeight-20);
    this.speed = random(1, 5);   
  }
  
  fall() {
   this.y = this.y + this.speed;
   if(this.y > height + 450 ){
     this.y = 0-200;
   }  
}

  display() {
    rotate(3 / 400 * 45);
    image(img8, this.x / 20, this.y/2);
  } 
}
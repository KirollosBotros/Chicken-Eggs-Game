Basket b;
Egg e;
Chicken c;

PImage imgB;
PImage imgE;
PImage C;
PImage B;
PImage HS;
int d=30;
int r=d/2;
int score=0;
float speed=4;
boolean defeat;
String go="Game Over";
String ys="Your Score: ";
String ctr="Click to Restart";
String shs="High Score:       ";
int hs;
int hc;

void setup(){
  size(800,500);
  b=new Basket();
  e=new Egg();
  c=new Chicken();
  imgB=loadImage("e.png");
  imgE=loadImage("egg.png");
  B=loadImage("sa.png");
  C=loadImage("chicken.png");
  defeat=false;
  hs=0;
  hc=0;
}

void draw(){
  background(B);
  b.show();
  e.show();
  b.move();
  totalShow();
  highScore();
 // c.show();
  
  if(b.hit(e.y,e.x)){
    e.pickLocation(); 
    speed+=0.3;
    score++;
   
  }
  
  if(hsCheck()){
    hs=score; 
   
   }else if(lost()){
     end();
     noLoop();
  }
}

  void initial(){
    b.h=100;
    b.w=100;
    b.x=width/2-b.w/2; 
    b.y=height-b.h;
    score=0;
    speed=4;
    e.pickLocation();
}

  void mousePressed(){
    if(defeat){
      initial();
      defeat=false;
     loop ();
   }
}

  void end(){
    textSize(60);
    text(go,(width-textWidth(go))/2,height/2-50);
    textSize(30);
    text(ys+score,(width-textWidth(ys+score))/2,height/2);
    text(ctr,(width-textWidth(ctr))/2,height/2+50);
    defeat=true; 
}

  boolean lost(){
    if(e.y>height){
      return true;
    }else{
      return false;
  }
}

  boolean hsCheck(){
    if(score>hs){
      return true;
    }else{
        return false;
}
}

  void totalShow(){
    fill(0);
    textSize(30);
    text("Score: "+score,10,40);
}

  void highScore(){
    fill(hc);
    textSize(30);
    text("High Score: "+hs,width-textWidth(shs),40);
  }
  void clickToplay(){
    initial();
    textSize(60);
    text("Click To Play",width-textWidth("Click To Play"),height/2);
  }

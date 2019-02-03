class Egg{
 int x,y; 
  
  Egg(){
    pickLocation();
  }
  
  void show(){
    fill(255);
    image(imgE,x,y,d,d+10);
    y+=speed;
  }
  
  void pickLocation(){
    x=(int)random(50,550); 
    y=50;
  }
}

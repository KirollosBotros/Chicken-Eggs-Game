class Basket{
 int x,y,h,w;
 boolean qz=true;
 boolean df;

 Basket(){
   h=100;
   w=100;
   x=width/2-w/2; 
   y=height-h;
 }
 
 void show(){
   fill(133,122,34);
   image(imgB,x,y,w,h);
 }
 
 void move(){
   x= mouseX-(w/2);
   x=constrain(x,0,width-w);
 } 
 
 boolean hit(int q,int z){
   if(q>y+30 && q<height && z>x && z<x+100){
     return true; 
     }else{
        return false;
}
} 
}

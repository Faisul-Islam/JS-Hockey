
window.onload = function(){

var c = document.querySelector('canvas');
var ctx = c.getContext("2d");
c.width = 350;
c.height = 450;

var date = new Date();
var prevT = 0;
var currT,ppx,ppy,cpx,cpy,phx,phy,chx,chy,X,Y,V,HX,HY,HV,dist;
var x = 175;
var y = 350;
var cx,cy,px,py,cs,dx,dy,sx,sy ;
var tempX = 0;
var tempY = 0;
var ox = 175;
var oy = 80;
var sFlag = false;
var hx = 175;
var hy = 290;
var hRad = 20;

var pScore = 0;
var cScore = 0;


c.onmousemove = function(e) {
    isDraggable = true;
    px = x;
    py = y;
    dx = x - hx;
    dy = y - hy;
    dist = Math.sqrt(dx*dx+dy*dy);
    if(e.clientY <= (c.height-20)/2+40){
    
    }else{
     x =e.clientX;
    y = e.clientY;
    if(dist<20+40){
    sFlag  = true;
    sx = x-hx;
    sy = y-hy;         
  //  alert (sx + " "+sy);
    }
    }
};


function draw(){
    ctx.fillStyle = 'black';
    ctx.rect(0,0,c.width,c.height);
    ctx.fill();
   ctx.beginPath();
   ctx.strokeStyle = "green";
   ctx.moveTo(0,(c.height-20)/2+10);
   ctx.lineTo((c.width),(c.height-20)/2+10);
   ctx.lineWidth = 8;
   ctx.stroke();
   ctx.closePath();
   ctx.beginPath();
   ctx.fillStyle= 'white';
   ctx.arc(x,y,30,0,2*Math.PI);
   ctx.fill();
   ctx.closePath();
   ctx.beginPath();
   ctx.strokeStyle= 'red';
   ctx.arc(x,y,35,0,2*Math.PI);
   ctx.stroke();
   ctx.lineWidth = 5;
   ctx.closePath();      
   ctx.beginPath();
   ctx.fillStyle= 'white';
   ctx.arc(ox,oy,30,0,2*Math.PI);
   ctx.fill();
   ctx.closePath();     
   ctx.beginPath();
   ctx.strokeStyle= 'lightblue';
        ctx.arc(ox,oy,35,0,2*Math.PI);
        ctx.stroke();
        ctx.lineWidth = 5;
        ctx.closePath(); 
   ctx.beginPath();
    ctx.fillStyle= 'white';
        ctx.arc(hx,hy,hRad,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    ctx.beginPath() ;
    ctx.strokeStyle = "yellow"; 
    ctx.moveTo ((c.width/2)-50,0);
    ctx.lineTo((c.width/2)+60,0); 
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();  
    ctx.beginPath() ;
    ctx.strokeStyle = "yellow"; 
    ctx.moveTo ((c.width/2)-50,c.height);
    ctx.lineTo((c.width/2)+60,c.height); 
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath(); 
    ctx.font = '30px Arial';
    ctx.fillText(" You: "+hx,10,30);
    ctx.fillText(hy +" :COM",c.width-110,30);
   
      checkTimer();
    if(V>15){
        V = 15;
    }
       accelHockey(sx,sy,V);
       V-= 5;
    }
    
function accelHockey(vX,vY,v){
  hx += tempX;
  
  hy += tempY;
  
   var qx = x - hx;
  var  qy = y - hy;
    var ist = Math.sqrt(qx*qx+qy*qy);
  if(hx<10){
      tempX = -tempX;
      tempY = +tempY;
  }else if((hx<10 && hy <10)|| (hx>340 && hy< 10) ||(hx<10 && hy > 440)||(hx>340 && hy>440)){
      tempX = -tempX;
      tempY = -tempY;
  }
  
  else if(hy<10){
      tempX = +tempX;
      tempY = -tempY;
  }else if(hx>340){
      tempX =-tempX;
      tempY = +tempY;
  }else if(hy> 440){
      tempX = +tempX;
      tempY = -tempY;
    
  }else if(ist<20+40){
  tempX =-tempX;
  tempY =-tempY;
}
if(sFlag===true){
    if(vX >0 && vY>0){
        tempX -=2;
        tempY -=2;
    }else if (vX<0&&vY>0){
        tempX +=2;
        tempY -=2;
    }else if(vX<0&&vY<0){
        tempX +=2;
        tempY +=2;
    }else if(vX>0&&vY<0){
        tempX -=2;
        tempY +=2;
    }
    
 sFlag = false ;
    }
    
}
function checkTimer(){
    
    if(prevT==0){
        currT = date.getTime();
       prevT = currT;
       ppx = x;
       ppy = y;
       phx = hx;
       phy = hy;
    }else{
        prevT = currT;
        currT = date.getTime();
    }
    if((currT-prevT)==1000){
        cpx = x;
        cpy = y;
        cpx = hx;
        cpy = hy;
        X = cpx - ppx;
        Y = cpy - ppy;
        V = X - Y;
        ppx = cpx;
        ppy = cpy;
        
    }
}
function AI(){
    
}
function checkVelocity(){
    
}
setInterval(draw,20);
    
}

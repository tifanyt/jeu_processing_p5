var seq=1;
var next=0;
var text0="Oh il fait tout noir, il faut que je trouve une lampe."
var text1="WOW ! Ce grenier est bien rempli ! Par où vais-je commencer ? Oh, il y a un coffre au trésor !";
var t0=1;
var t=1;
var t2=1;
var t3=1;
var text2="Il est fermé à clé... Où mon grand-père a-t-il pu cacher cette clé ?";
var text3="Mais mon grand-père était un vrai champion ! Il ne m'en avait jamais parlé, c'est incroyable !";


//araignee
var araignee;
var x=1;
var y=1;
var da;
var z=1;
var w=1;
var vitess;
var arout=false;
var aroutcarton=false;
var a;
var b;
var sortie=0;
var aroutlivre=false;

//coffre et cle
var cletrouvee=false;
var dc=3;
var xc=640;
var yc=450;
var decompte=0;
var decompte2=0;
var essai=false;
var bonnecle=false;
var cadenas=false;
var faux=false;

// ballon
var xb=375;
var ballonroulant=false;
var etape=0;
var angle=0;

//lampe
var lampeim;
var lum=false;

//placard
var placardim;


function sketch2() {
  background(grenier);
 if(seq==1){
    image(coffre,xc,yc,coffre.width/dc,coffre.height/dc);
    image(placardim,210,200,ballon.width/3.5,ballon.height/4);
    image(lampeim,150,27,lampeet.width/2.5,lampeet.height/3.3);
    image(perso,800,150,perso.width*1.4,perso.height*1.4);
    image(feuilles,100,380,feuilles.width/1.6,feuilles.height/1.6);
    fill(255);
    textSize(32);
    if(next===0){
      if(text1.length>=t) {
        t++;
      }
      
      text(text1.substring(0, t),50, 50,500, 410);
      if(mouseButton ==LEFT){
        next=1;
        mouseButton =RIGHT;
      }
    }
    if(next==1){
      if(text2.length>=t2) {
        t2++;
      }
      text(text2.substring(0, t2),50,50,500, 400);
      if(mouseButton ==LEFT){
          seq=2;
          mouseButton =RIGHT;
      }
    }
  }
  
  else if(seq==2){
    image(coffre,xc,yc,coffre.width/dc,coffre.height/dc);
    lampe();
    carton();
    livre();
        
    placardfonction();
    
    ouvrecoffre();
    
  }
  else if(seq==3){
    image(placardim,210,200,ballon.width/3.5,ballon.height/4);
    image(lampeim,150,27,lampeet.width/2.5,lampeet.height/3.3);
    image(feuilles,100,380,feuilles.width/1.6,feuilles.height/1.6);
    image(coffreouvert,350,20,coffreouvert.width*1.3,coffreouvert.height*1.3);
    image(photo,580,300);
    image(coupe1,450,300);
    image(coupe2,700,300);
    image(medaille,570,450);
    if(mouseX>=622 && mouseX<=722 && mouseY>=304 && mouseY<=446){
      image(photo,580,300);
    }
    else if(mouseX>=520 && mouseX<=570 && mouseY>=330 && mouseY<=590){
      image(coupe1,450,300);
    }
    fill(255);
    textSize(32);
    if(text3.length>=t3) {
        t3++;
      }
      
    text(text3.substring(0, t3),50, 50,500, 400);
   
  }
}

function livre(){
   if(mouseX>=848 && mouseX<=1027 && mouseY>=165 && mouseY<=493){
     if (mouseIsPressed){
       if(aroutlivre===false && cletrouvee===false){
          aroutlivre=true;
          x=1;
          y=1;
          sortie=3;
       }
     }
  }
  if(aroutlivre===true ){
    sortiearaignee();
  }
}

function carton(){
  if(mouseX>=996 && mouseX<=1148 && mouseY>=501 && mouseY<=557){
     if (mouseIsPressed){
       if(aroutcarton===false){
          aroutcarton=true;
          x=1;
          y=1;
          sortie=1;
       }
     }
  }
  if(aroutcarton===true){
    sortiearaignee(a,b);
  }
}
  
function ouvrecoffre(){
   if(cletrouvee===true){
       if(mouseX>=690 && mouseX<=711 && mouseY>=494 && mouseY<=520){
           if (mouseIsPressed){
              if(bonnecle===true && essai===true){
                cadenas=true;
                ouvert.play();
              }
              else if(essai===true && bonnecle===false){
                faux=true;
                fermer.play();
              }
           }
       }
   }
   if(faux===true && essai===true){
      textSize(90);
      textStyle(BOLD);
      textFont("Arial");
      textAlign(CENTER);
      fill(254,198,43);
      text("Mauvaise clé", 680, 355); 
      decompte2+=2;
   }
   if(decompte2>=50){
     essai=false;
   }
   if(cadenas===true){
     image(coffre,xc,yc,coffre.width/dc,coffre.height/dc);
        if(dc>0.8){
           dc=dc-0.2;
        }
        if(xc>370 && yc>90){
             xc=xc-25;
             yc=yc-32;
        }
        if(xc<=370){
          seq=3;
        }
    }
}

function placardfonction(){
  image(placardim,210,200,ballon.width/3.5,ballon.height/4);
  image(feuilles,100,380,feuilles.width/1.6,feuilles.height/1.6);
  if(mouseX>=382 && mouseX<=533 && mouseY>=339 && mouseY<=442){
     if (mouseIsPressed && arout===false && mouseButton == LEFT){
          arout=true;
          x=1;
          y=1;
          sortie=2;
          mouseButton = RIGHT;
      }
  }
  if(mouseX>=445 && mouseX<=533 && mouseY>=339 && mouseY<=442){
    if(mouseIsPressed && arout===true && mouseButton === LEFT){
        arout=false;
        mouseButton = RIGHT;
     }
  }
  if(arout===true && etape<=2){
    etape+=0.2;
  }
  if(arout===false){
    placardim=placardferme;
  }
  else{    
    placardim=placardouvert;
    sortiearaignee();
    ballonroule();
  }
}

function sortiearaignee() {
  if(sortie==1){
    a=1050;
    b=520;
  }
  else if(sortie==2){
      a=382;
      b=440;
  }
  else if(sortie==3){
    a=900;
    b=300;
  }
  for(var j=0;j<=5;j++){   
    image(araignee,a+x*z,b+y*w,araignee.width/da,araignee.height/da);
    switch(j){
      case 0:
        z=-1.1;
        w=1.2;
        da=18;
        vitess=1;
        break;
      case 1:
        z=1.4;
        w=-1.1;
        da=25;
        vitess=2;
        break;
      case 2 : 
        z=1.2;
        w=-1.3;
        da=30;
        vitess=0.5;
        break;
      case 3 :
        z=1;
        w=-1.1;
        da=22;
        vitess=2;
        break;
      case 4:
        z=1.2;
        w=1.5;
        da=27;
        vitess=2;
        break;
      case 5:
        z=1.1;
        w=1.2;
        da=18;
        vitess=2;
        break;  
    }
    x=vitess+x;
    y=vitess+y;
  }

}

function lampe(){
    image(lampeim,150,27,lampeet.width/2.5,lampeet.height/3.3);
    if(mouseX>=293 && mouseX<=299 && mouseY>=122 && mouseY<=151){
      if(mouseIsPressed && lum===false && mouseButton == LEFT){
          lum=true;
          mouseButton = RIGHT
      }
      else if(mouseIsPressed && lum===true && mouseButton == LEFT){
          lum=false;
          mouseButton = RIGHT;
      }
    }
    if(lum===false){
      lampeim=lampeet;
      
    }
    else{
      lampeim=lampeall;
    }
}

function ballonroule(){
  image(ballon1,xb,364,ballon.width/13,ballon.height/13);
  if(mouseX>=399 && mouseX<=449 && mouseY>=375 && mouseY<=432){
     if (mouseIsPressed && etape>=2){
       ballonroulant=true;
      
     }
  }
  if(ballonroulant===true ){
      clef();
      if(xb<440){
          xb=xb+3;
          translation(xb);
      }
      else if(xb>=440){
        frameRate(20);
        
      }
  }
  
}

function translation(xb){
  
  frameRate(13);
  translate(xb + 37,404);
  rotate(angle);
  angle+=1.5;
  translate(-38.7,-38.8).
  image(ballon1, 0, 0,ballon.width/13,ballon.height/13);
}


function clef(){
  if(cletrouvee===false){
     image(cle,380,385,cle.width/6,cle.height/6);
  }
  if(mouseX>=390 && mouseX<=413 && mouseY>=396 && mouseY<=432){
     if (mouseIsPressed && xb>=440){
       etape=3;
       cles.play();
     }
  }
  if(etape==3){
       cletrouvee=true;
  }
  if(cletrouvee===true && decompte<60){
    image(cle,440,-10,cle.width*1.6,cle.height*1.6);
    decompte=decompte+2;
  }
  if(decompte>=60 && essai===false){
    image(cle1,200,-20,cle1.width*3,cle1.height*3);
    image(cle2,510,-20,cle2.width*2.6,cle2.height*2.6);
    image(cle3,810,-20,cle3.width*2.6,cle3.height*2.6);
    textSize(50);
    textStyle(BOLD);
    textFont("Arial");
    textAlign(CENTER);
    fill(254,198,43);
    text("Quelle est la clé qui ouvre le coffre ?", 680, 555); 
   
    //choix de la cle
    
    if(mouseX>=238 && mouseX<=419 && mouseY>=66 && mouseY<=481){
     if (mouseIsPressed){
       essai=true;
       decompte2=0;
       faux=false;
     }
    }
    else if(mouseX>=596 && mouseX<=717 && mouseY>=160 && mouseY<=483){
     if (mouseIsPressed){
       essai=true;
       decompte2=0;
       faux=false;
     }
    }
    else if(mouseX>=872 && mouseX<=1063 && mouseY>=68 && mouseY<=480){
     if (mouseIsPressed){
       bonnecle=true;
       essai=true;
       decompte2=0;
       faux=false;
     }
    }
  }
}


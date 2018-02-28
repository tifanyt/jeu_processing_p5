var fond;
var img;
var maison_sans_porte;
var x;
var maisonx = 0;
var textd="Mon grand-père m'a demandé de l'aider à ranger son grenier aujourd'hui. J'espère qu'il ne fait pas encore la sieste sinon je vais rester à la porte ! Oh il faut que je fasse attention aux voitures en traversant !";
var tdeb=1;

var play;
var monte = 50;
var carre = 610;
var savoirmonte = 0;

var nuages;
var nuagex = 0;
var nuagey = -10;
var sens = 0.5;
var fin_nuage=0;
var voiture_droite;
var voiture_gauche;
var avance = 820;
var cest_parti = false;
var direction = -10;

var sequence_actuelle = 1;
var fenetre_ouverte = 0;

var grenier;
var grenierx = 1370;
var greniery = 0;
var rectx1 = 1366;
var rectx2 = 2732;
var placardx = 1580;
var lampx = 1520;
var coffrex = 2013;

var moteur;
var porte;
var escalier;
var cles;
var fermer;
var ouvert;
var musique_fond;
var start_mus = 0;

function preload(){
play = loadImage("data/play.png");
img = loadImage("data/maison_flat_design.png");
maison_sans_porte = loadImage("data/maison_sans_porte.png");
nuages = loadImage("data/nuages.png");
voiture_droite = loadImage("data/voiture_droit.png");
voiture_gauche = loadImage("data/voiture_gauc.png");
x = img;
  araignee = loadImage("data/araignee.png");
  coffre = loadImage("data/coffre.png");
  grenier= loadImage("data/grenier.png");
  cle= loadImage("data/cle.png");
  ballon=loadImage("data/ballon.png");
  ballon1=loadImage("data/ballon1.png");
  placardferme=loadImage("data/placard.png");
  placardouvert=loadImage("data/placard_ouvert.png");
  lampeall=loadImage("data/allume.png");
  lampeet=loadImage("data/eteinte.png");
  cle1=loadImage("data/cle1.png");
  cle2=loadImage("data/cle2.png");
  cle3=loadImage("data/cle3.png");
  feuilles=loadImage("data/feuilles.png");
  perso=loadImage("data/personnage_dos.png");
  coffreouvert=loadImage("data/coffre_ouvert.png");
  coupe1=loadImage("data/coupe.png");
  coupe2=loadImage("data/coupe2.png");
  photo=loadImage("data/velo.png");
  medaille=loadImage("data/medaille.png");
  moteur = loadSound("data/moteur.mp3");
  porte = loadSound("data/porte.mp3");
  escalier = loadSound("data/escalier.mp3");
  cles = loadSound("data/cles.mp3");
  fermer = loadSound("data/fermer.mp3");
  ouvert = loadSound("data/ouvert.mp3");
  musique_fond = loadSound("data/Cyber-Toy.mp3");
}

function setup() {
  createCanvas(1366, 606);
  frameRate(30);
  colorMode(RGB);
  fond = color(255, 255, 255);
  background(fond);
  imageMode(CORNER);
  lampeim=lampeet;
  placardim=placardferme;
  
  
  
}

function draw() {
       
  switch(sequence_actuelle){
    case 1:
      image(x, maisonx, 1, 1400, 606);
      image(nuages, nuagex, nuagey);
      image(voiture_gauche,avance,420,160,110);
      bougenuage();
      fill(255,255,255);
      rect(0, -2, 1370, carre);
      strokeWeight(0);
      image(play,430,monte);
      lancer();
      break;
      
    case 2:
      if(fin_nuage!==0){rect(0,0,1366,606);}
      image(x, maisonx, 1, 1400, 606);
      image(nuages, nuagex, nuagey);
      fenetre();
      fill(255,255,255);
      rect(rectx1,-2,rectx2,712);
      strokeWeight(0);
      image(grenier, grenierx,greniery);
     
         if(fin_nuage===0){
              bougenuage();
               le_texte();
               roule();
          }
        if(direction == 10){
      image(voiture_droite,avance,420,160,110);
        }
        else{
       image(voiture_gauche,avance,420,160,110);
        }
      break;
      
    case 3:
      image(grenier, grenierx,greniery);
      fill(255,255,255);
      rect(rectx1,-2,rectx2,712);
      sketch2();
      break;
    default:
  }

}


function lancer(){

  if(mouseButton == LEFT && mouseIsPressed && start_mus===0){musique_fond.loop();}
  if(mouseButton == LEFT){
    savoirmonte = 1;
    start_mus = 1;
    if(savoirmonte == 1){
    monte-=10;
    carre-=10;
      if(carre < -10){
        savoirmonte = 0;
        sequence_actuelle=2;
        mouseButton = RIGHT;
      }
    }
  }
}


function bougenuage(){
  
  nuagex = nuagex + sens;
  if(nuagex>=30){
    sens=-0.5;
  }
  else if(nuagex<=0){
    sens=0.5;
  } 
  
}

function roule(){
  
  if(mouseButton==LEFT && 400<mouseY && mouseY<580 && avance <= mouseX && mouseX <= avance+160 && !cest_parti && mouseIsPressed){
    cest_parti = true;
    mouseButton=RIGHT;
    moteur.loop();
  }
  if(mouseButton==LEFT && 400<mouseY && mouseY<580 && avance <= mouseX && mouseX <= avance+160&& cest_parti && mouseIsPressed){
    cest_parti = false;
    mouseButton=RIGHT;
        moteur.stop();
  }
  
  if(cest_parti){ 
    avance = avance + direction;
    if(avance <= 260){
      direction = 10;
    }
    else if(avance >= 860){
      direction = -10;
    }
  }
}

function le_texte(){
  fill(33,50,79);
  textSize(28);
  if(textd.length>=t) {
      tdeb++;
  }
  text(textd.substring(0, tdeb),208,65,500,300);
  
}

function fenetre(){

  if(685<mouseX && mouseX<785 && 400<mouseY && mouseY<600 && sequence_actuelle==2 && mouseButton == LEFT && fenetre_ouverte===0 && mouseIsPressed){
    fenetre_ouverte=1;
    mouseButton = RIGHT;
    x = maison_sans_porte;
    porte.play();
  }
  
  if(685<mouseX && mouseX<785 && 400<mouseY && mouseY<600 && fenetre_ouverte==1 && mouseButton == LEFT && mouseIsPressed){
        fin_nuage =1;
        escalier.play();
        moteur.stop();
  }
  
  if(fin_nuage==1){
        maisonx-=15;
        nuagex-=15;
        grenierx-=15;
        avance-=15;
        rectx1-=15; rectx2-=15;
        placardx-=15;
        lampx-=15;
        coffrex-=15;
        }
        
        if(maisonx<-1360){
          sequence_actuelle=3;
          mouseButton = RIGHT;
        }
  
}
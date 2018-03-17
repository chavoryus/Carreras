const carros=[];
var numCarros=0;
var avanza1=0;
var aux=0;
var aux2=0;
var aux3=0;
var aux4=0;
var aux5=0;
var aux6=0;



var auxA=0;
var auxA2=0;
var auxA3=0;
var auxA4=0;
var auxA5=0;
var auxA6=0;
var img,img2,imgAux; 
var imgA,imgA2,imgAAux; 

function preload(){
	img = loadImage("Pruebas/carritoSolo1.png"); 
	imgAux = loadImage("Pruebas/carritoSolo1.png"); 
	img2 = loadImage("Pruebas/carroSolo11.png");

	imgA = loadImage("Pruebas/carritoSolo222.png"); 
	imgAAux = loadImage("Pruebas/carritoSolo222.png"); 
	imgA2 = loadImage("Pruebas/carroSolo22.png");
}
function setup() {
	 createCanvas(windowWidth,windowHeight);
	 noStroke();
     for(let i=0; i<2; i++)
	{
		
		let carrito={
			x: 120,
			y: 100,
			d: 90,
			r: random(0,254),
			g: random(0,254),
			b: random(0,254),
			velocidad: random(3,8),
		}
		carros.push(carrito);
	}
}
function pista(){

	rect(120,100,700,100);
	fill('#6E6E6E');
	quad(819,100,819,200,897,426,1161,339);
	quad(1161,339,897,426,881,507,1005,582);
	quad(881,507,1005,582,851,640,518,507);
	quad(521,508,849,638,318,637,361,386);
	quad(361,386,318,637,152,440,312,254);
	quad(308,254,360,386,604,190,422,200);

}
function draw() { 
	
	
		background('#33ff6e');
			pista();
			image(img,carros[0].x, carros[0].y, carros[0].d, carros[0].d);
			
			image(imgA,carros[1].x, carros[1].y, carros[1].d, carros[1].d);
		 
  		 //ellipse(carros[i].x,carros[i].y,carros[i].d,carros[i].d);
  		 
	


	
		
		if(carros[0].x<=800&&carros[0].y<=100&&aux==0){
			carros[0].x+=random(3,10);
		
		}

		if(carros[0].x>=800&&carros[0].y<=300&&aux2==0){
			aux=1;
			carros[0].x+=5;
			carros[0].y+=5;
			console.log('2ntroo1111');
		}


		if(carros[0].y>=300&&carros[0].y<=540&&aux3==0){
			aux2=1;
			img=img2;
			carros[0].x-=3;
			carros[0].y+=5;
			
		}

		if(carros[0].y>=540&&carros[0].x>380){
			aux3=1;
			carros[0].x-=5;
			/*if(carros[0].x<380){
				aux=0;
			}*/
		}


		if(carros[0].x<=380&&carros[0].y>=300&&aux3==1){
			aux4=1;
			carros[0].x-=3;
			carros[0].y-=5;	
		}

		if(aux4==1&&carros[0].y<=300){
			aux5=1;
			img=imgAux;
			carros[0].x+=5;
			carros[0].y-=3;
		}

		if(carros[0].y<=100&&aux==1&&aux2==1&&aux3==1&&aux4==1&&aux5==1){
			aux=0;
			aux2=0;
			aux3=0;
			aux4=0;
			aux5=0;

		}



//carro numero 2-----------------------------------------
if(carros[1].x<=800&&carros[1].y<=100&&auxA==0){
			carros[1].x+=random(3,10);
		
		}

		if(carros[1].x>=800&&carros[1].y<=300&&auxA2==0){
			auxA=1;
			carros[1].x+=carros[1].velocidad;
			carros[1].y+=carros[1].velocidad;
			console.log('2ntroo1111');
		}


		if(carros[1].y>=300&&carros[1].y<=540&&auxA3==0){
			auxA2=1;
			imgA=imgA2;
			carros[1].x-=carros[1].velocidad;
			carros[1].y+=carros[1].velocidad;
			
		}

		if(carros[1].y>=540&&carros[1].x>380){
			auxA3=1;
			carros[1].x-=carros[1].velocidad;
			
		}


		if(carros[1].x<=380&&carros[1].y>=300&&auxA3==1){
			auxA4=1;
			carros[1].x-=3;
			carros[1].y-=5;	
		}

		if(auxA4==1&&carros[1].y<=300){
			auxA5=1;
			imgA=imgAAux;
			carros[1].x+=5;
			carros[1].y-=3;
		}

		if(carros[1].y<=100&&auxA==1&&auxA2==1&&auxA3==1&&auxA4==1&&auxA5==1){
			auxA=0;
			auxA2=0;
			auxA3=0;
			auxA4=0;
			auxA5=0;

		}



		
			console.log("x= "+mouseX+" y= "+mouseY);
		
		
		
		
		 

		 
  		
	
  
 
}
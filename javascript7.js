let indice = 2;

setInterval(() => {
   
     if(indice == 1) {

        document.getElementById("immagini").style.opacity = 0;



        setTimeout(() => {
            document.getElementById("immagini").src="immagine1.jpeg";
            document.getElementById("immagini").style.opacity = 1;

        }, 500);
        indice++;
     } else if(indice == 2) {
        
        document.getElementById("immagini").style.opacity = 0;

        setTimeout(() => {
            document.getElementById("immagini").src="immagine2.jpg";
            document.getElementById("immagini").style.opacity = 1;

        }, 500);
        indice++;
     } else if(indice == 3) {
       
        document.getElementById("immagini").style.opacity = 0;

        setTimeout(() => {
            document.getElementById("immagini").src="immagine3.jpg";
            document.getElementById("immagini").style.opacity = 1;
        }, 500);
        indice++;
     } else if (indice == 4) {
        
        document.getElementById("immagini").style.opacity = 0;

        setTimeout(() => {
            document.getElementById("immagini").src="immagine4.jpg";
            document.getElementById("immagini").style.opacity = 1;
        }, 500);
        indice = 1;
     }



}, 3000);

window.onload = setInterval;
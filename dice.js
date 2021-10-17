// For Dice-1
 var randomNumber1 = Math.floor(Math.random()*6)+1;
 var randomImageSource = "images/dice"+randomNumber1+".png";//for fetching source
 document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);//setting image according to dice no

 // For Dice-2
 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var randomImageSource2 = "images/dice"+randomNumber2+".png";//for fetching source
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);//setting image according to dice no


 if(randomNumber1>randomNumber2)
 {
     document.querySelector("h1").innerHTML="Player 1 wins✌";
 }
 else if(randomNumber1===randomNumber2)
 {
     document.querySelector("h1").innerHTML="Draw!!";
 }
 else{
     document.querySelector("h1").innerHTML="Player 2 wins✌";
 }



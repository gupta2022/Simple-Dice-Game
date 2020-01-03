function myfunction(){

  var a = Math.floor(Math.random()*6)+1;
  var b = Math.floor(Math.random()*6)+1
  if(a>b)
    document.querySelector("h1").innerHTML="Plaer1 Wins";
    else
    if(b>a)
    document.querySelector("h1").innerHTML="Plaer2 Wins";
    else
    document.querySelector("h1").innerHTML="Click On The Button";
  switch (a)  {
    case 1:
            document.querySelector(".img1").src="images/dice1.png";
            break;
    case 2:
            document.querySelector(".img1").src="images/dice2.png";
            break;
    case 3:
            document.querySelector(".img1").src="images/dice3.png";
            break;
    case 4:
            document.querySelector(".img1").src="images/dice4.png";
            break;
    case 5:
            document.querySelector(".img1").src="images/dice5.png";
            break;
    case 6:
            document.querySelector(".img1").src="images/dice6.png";
            break;
  }
  switch (b)  {
    case 1:
            document.querySelector(".img2").src="images/dice1.png";
            break;
    case 2:
            document.querySelector(".img2").src="images/dice2.png";
            break;
    case 3:
            document.querySelector(".img2").src="images/dice3.png";
            break;
    case 4:
            document.querySelector(".img2").src="images/dice4.png";
            break;
    case 5:
            document.querySelector(".img2").src="images/dice5.png";
            break;
    case 6:
            document.querySelector(".img2").src="images/dice6.png";
            break;
  }

}

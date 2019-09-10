function findViewCoords(mouseEvent)
{
  var xpos;
  var ypos;
  if (mouseEvent)
  {
    //FireFox
    xpos = mouseEvent.pageX - document.body.scrollLeft;
    ypos = mouseEvent.pageY - document.body.scrollTop;
  }
  else
  {
    //IE
    xpos = window.event.x + 2;
    ypos = window.event.y + 2;
  }

  //console.log(ypos);

  if (ypos < 500 && (document.getElementById("bee1")))
  {
  	  document.getElementById("bee1").style.transform = "rotate("+(-20+.06*ypos)+"deg)";
  	  //console.log("rotate("+(10+.04*ypos)+"deg)");
  	  document.getElementById('bee2').style.transform = "rotate("+(285-.06*ypos)+"deg)";
  }
  else if (document.getElementById("bee1"))
  {
  	  document.getElementById('bee1').style.transform = "rotate(10deg)";
  	  document.getElementById('bee2').style.transform = "rotate(255deg)";
  }
}
//document.onmousemove = findViewCoords;

$('#bee1').followCursor();
$('#bee2').followCursor();

$(window).scroll(function() {
	var height = $(window).scrollTop();
	//console.log(height);
	if (height <= 600)
	{
		var grassBackHeight = ""+(.033333333333*3*height)+"px";
		var grassMiddleHeight = ""+(.016666666666*3*height)+"px";
	  	document.getElementById('grassback').style.marginTop = grassBackHeight;
		document.getElementById('grassmiddle').style.marginTop = grassMiddleHeight;
		document.getElementById('grasscover').style.height = ""+(.033333333333*3*height)+"px"; 
	}
	else
	{
		document.getElementById('grassback').style.marginTop = "60px";
		document.getElementById('grassmiddle').style.marginTop = "30px";
		document.getElementById('grasscover').style.height = "60px"; 
	}

	if (height <= 300)
	{
		document.getElementById('logo').style.opacity = "0";
		document.getElementById('nav').style.borderBottom = ".4vh solid rgba(0,39,77,0)";
	}
	else if (height <= 400)
	{
		document.getElementById('logo').style.opacity = ""+(.01*(height-300))+"";
		document.getElementById('nav').style.borderBottom = ".4vh solid rgba(0,39,77,"+(.01*(height-300))+")";
	}
	else
	{
		document.getElementById('logo').style.opacity = "1";
		document.getElementById('nav').style.borderBottom = ".4vh solid rgba(0,39,77,1)";
	}

	if (height <= 400)
	{
		document.getElementById('nav').style.webkitBackdropFilter = "blur("+(.0025*(height))+"vw)";
		document.getElementById('nav').style.backdropFilter = "blur("+(.0025*(height))+"vw)";
	}
	else
	{
		document.getElementById('nav').style.webkitBackdropFilter = "blur(1vw)";
		document.getElementById('nav').style.backdropFilter = "blur(1vw)";
	}
});
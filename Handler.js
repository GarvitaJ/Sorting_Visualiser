var boxes=[];
 function setarrsize(){
	 var size=document.getElementById("Range");
	 var output=document.getElementById("Size");
	 output.innerHTML = size.value;
 }

 function genarr(){
	 document.getElementById("gfg").innerHTML="";
	 var size=document.getElementById("Size").value;
	 var width = ((1147-3*(size-1)) / size);
	 var left= 70;
	 var i=0;
	 for(i=0;i<size;i++){
		 boxes[i]=Math.floor(Math.random() * 200) + 25;
//		document.write("<div style= \"width:"+width+"; height:200px; position:absolute; top:110px; left:"+left+"; background:rgb(255, 220, 106);\"></div>");
		 document.getElementById("gfg").innerHTML+="<div style= \"width:"+width+"; height:"+boxes[i]+"px; position:absolute; top:110px; left:"+left+"px; background:rgb(255, 220, 106);\"></div>";
		 left=parseInt(left)+parseInt(width)+3;
	 }
 }
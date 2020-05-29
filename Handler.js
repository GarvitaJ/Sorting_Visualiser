var boxes=[];
 function setarrsize(){
	 var size=document.getElementById("Range");
	 var output=document.getElementById("Size");
	 output.innerHTML = size.value;
 }

 function genarrrand(){
	 document.getElementById("gfg").innerHTML="";
	 var size=document.getElementById("Size").value;
	 var width = ((1147-3*(size-1)) / size);
	 var left= 70;
	 var i=0;
	 for(i=0;i<size;i++){
		 boxes[i]=Math.floor(Math.random() * 200) + 25;
		 document.getElementById("gfg").innerHTML+="<div id="+i+" style= \"width:"+width+"; height:"+boxes[i]+"px; position:absolute; top:110px; left:"+left+"px; background:rgb(255, 220, 106);\"></div>";
		 left=parseInt(left)+parseInt(width)+3;
	 }
 }

// function sleep(milliseconds) {
// 	var date = Date.now();
// 	var currentDate = null;
// 	do {
// 		currentDate = Date.now();
// 	} while (currentDate - date < milliseconds);
// }

function showarr(size){
	document.getElementById("gfg").innerHTML="";
	var width = ((1147-3*(size-1)) / size);
	var left= 70;
	var i=0;
	for(i=0;i<size;i++){
		document.getElementById("gfg").innerHTML+="<div id="+i+" style= \"width:"+width+"; height:"+boxes[i]+"px; position:absolute; top:110px; left:"+left+"px; background:rgb(255, 220, 106);\"></div>";
		left=parseInt(left)+parseInt(width)+3;
	}
}

 function bubblesort() {
	 var temp;
	 var n=boxes.length;
	 setTimeout(function(){
	 	for(let i=0;i<n;i++){
			document.getElementById(i).style.backgroundColor="blue";
			 for(let j=0;j<n-i-1;j++){
			 	setTimeout(function(){
					document.getElementById(j).style.backgroundColor="red";
					if(boxes[j]>boxes[j+1]){
						setTimeout(function(){
							temp=boxes[j+1];
							boxes[j+1]=boxes[j];
							boxes[j]=temp;
							showarr(n);
						},10);

					}
				},100);
			 }
		 }
	 }, 1000);
 }
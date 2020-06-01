var boxes=[],temp=[];
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

function speed() {
	var speed=document.getElementsByName("radio");
	var t;
	for(var i=0;i<speed.length;i++)
		if(speed[i].checked)
			t=speed[i].value;
	return t;
}

function showarrbub(size,i){
	document.getElementById("gfg").innerHTML="";
	var width = ((1147-3*(size-1)) / size);
	var left= 70;
	var k=0;
	for(k=0;k<size;k++){
		if(k>i)
			document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:red;\"></div>";
		else
			document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:rgb(255, 220, 106);\"></div>";
		left=parseInt(left)+parseInt(width)+3;
	}

}



async function bubblesort() {
 	 var t=speed();
	 var temp;
	 var n=boxes.length;
	 var p=n-1;
	 	for(var i=0;i<n;i++){
			 for(var j=0;j<n-i-1;j++){
					document.getElementById(j).style.backgroundColor="red";
					if(boxes[j]>boxes[j+1]){
						var promise=new Promise((resolve, reject) =>{
							setTimeout(function a() {
								temp=boxes[j+1];
								boxes[j+1]=boxes[j];
								boxes[j]=temp;
								resolve(1);
							},t)
						});
						await promise;
					}
				 showarrbub(n,p);
			 }
			 p--;
		 }
	showarrbub(n,p);
};


function showarrsel(size,i,min){
    document.getElementById("gfg").innerHTML="";
    var width = ((1147-3*(size-1)) / size);
    var left= 70;
    var k=0;
    for(k=0;k<size;k++){
        if(k==min)
            document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:blue;\"></div>";
        else if(k<=i)
            document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:red;\"></div>";
        else
            document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:rgb(255, 220, 106);\"></div>";
        left=parseInt(left)+parseInt(width)+3;
    }

}


async function selectionsort() {
	var t=speed();
	var temp,min;
	var n=boxes.length;
	var p=n-1;
	for(var i=0;i<n-1;i++){
		min=i;
		for(var j=i+1;j<n;j++){
			if(boxes[min]>boxes[j]){
				min=j;
				showarrsel(n,i-1,min);
				var promise=new Promise(resolve => resolve(1));
				await promise;
			}
		}
		var promise=new Promise((resolve, reject) =>{
			setTimeout(function a() {
				temp=boxes[i];
				boxes[i]=boxes[min];
				boxes[min]=temp;
				resolve(1);
			},t)
		});
		await promise;
		showarrsel(n,i,min);
	}
	showarrsel(n,i);
};


function showarrmerge(i,j){
	document.getElementById("gfg").innerHTML="";
	var size=boxes.length;
	var width = ((1147-3*(size-1)) / size);
	var left= 70;
	var k=0;
	for(k=0;k<=size;k++){
		// if(k<=i+j)
		// 	document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:red;\"></div>";
		// else
		// 	document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:rgb(255, 220, 106);\"></div>";
		if(k<=i+j && k!=j && k!=i )
			document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:red;\"></div>";
		else if (k==j || k==i)
			document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:blue;\"></div>";
		else if(k>j)
			document.getElementById("gfg").innerHTML+="<div id="+k+" style= \"width:"+width+"; height:"+boxes[k]+"px; position:absolute; top:110px; left:"+left+"px; background-color:rgb(255, 220, 106);\"></div>";
		left=parseInt(left)+parseInt(width)+3;
	}

}

async function merge(boxes,s,m,e){
	var t=speed();
	var k=0;
	var i=s,j=m+1;
	var promise= new Promise((resolve, reject) =>
		setTimeout(function(){
			while(i<=m && j<=e)
			{
				if(boxes[i]<=boxes[j]){
					temp[k++]=boxes[i++];
				}
				else
				{
					temp[k++]=boxes[j++];
				}
			}
			while(i<=m)
				temp[k++]=boxes[i++];
			while(j<=e)
				temp[k++]=boxes[j++];
			for(var p = s; p <= e; p+= 1) {
				boxes[p] = temp[p - s]
			}
			resolve(1);
		},t)
	);
	await promise;
	showarrmerge(s,e);
}

function mergesrt(boxes,s,e) {
	if(s<e){
		var m=Math.floor((s+e)/2);
		mergesrt(boxes,s,m);
		mergesrt(boxes,m+1,e);
		merge(boxes,s,m,e);
	}

}

function mergesort() {
	var s=0,e=boxes.length-1;
	mergesrt(boxes,s,e);
}


function showarrquic() {
	document.getElementById("gfg").innerHTML="";
	var size=boxes.length;
	var width = ((1147-3*(size-1)) / size);
	var left= 70;
	var k=0;
	for(k=0;k<=size;k++){

	}
}

function partition (arr, low, high)
{
	var pivot = arr[high];
	var i = (low - 1);

	for (var j = low; j <= high- 1; j++)
	{
		if (arr[j] < pivot)
		{
			i++;
			temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
		}
	}
	temp=arr[i+1];
	arr[i+1]=arr[high];
	arr[high]=temp;
	return (i + 1);
}

function quickSrt(arr, low, high)
{
	if (low < high)
	{
		var pi = partition(arr, low, high);
		quickSrt(arr, low, pi - 1);
		quickSrt(arr, pi + 1, high);
	}
}

function quickSort() {
	quickSrt(boxes,0,boxes.length-1);
	document.getElementById("gfg").innerHTML="";
	for (var i=0;i<boxes.length;i++){
		document.getElementById("gfg").innerHTML="";
	}
}
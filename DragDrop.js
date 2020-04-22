function init()
{
	document.getElementById('aws_ec2').addEventListener("dragstart",ec2Drag,false);
	subcanvas=document.getElementById('subcanvas');
	subcanvas.addEventListener("dragenter",function(e){e.preventDefault();},false);
	subcanvas.addEventListener("dragover",function(e){e.preventDefault();},false);
	subcanvas.addEventListener("drop",ec2Drop,false);
}
function ec2Drag1(img)
{	
img.style.top = ‘550px’;
img.style.left = ‘550px’;
}
function ec2Drag(e)
{
	var imageCode='<img src="ec2.png" draggable=true id="temp">';
	e.dataTransfer.setData('Aws_EC2',imageCode);
}
function ec2Drop(e)
{	
	e.preventDefault();
	subcanvas.innerHTML=e.dataTransfer.getData('Aws_EC2');
	img=document.getElementById('temp');
	img.addEventListener("dragstart",ec2Drag1(img),false);
}

window.addEventListener("load",init,false);
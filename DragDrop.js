var imageCode="";
function init()
{
	document.getElementById('aws_ec2').addEventListener("dragstart",ec2Drag,false);
	document.getElementById('aws_s3').addEventListener("dragstart",s3Drag,false);
	subcanvas=document.getElementById('subcanvas');
	subcanvas.addEventListener("dragenter",function(e){e.preventDefault();},false);
	subcanvas.addEventListener("dragover",function(e){e.preventDefault();},false);
	subcanvas.addEventListener("drop",canvasDrop,false);
}

function ec2Drag(e)
{
	imageCode='<img src="ec2.png" class="aws_EC2" onClick="reply_click(this.className)">';
	e.dataTransfer.setData('Aws_EC2',imageCode);
}

function s3Drag(e)
{
	imageCode='<img src="s3.png" class="aws_s3" onClick="reply_click(this.className)">';
	e.dataTransfer.setData('Aws_S3',imageCode);
	
}
function canvasDrop(e)
{	
	e.preventDefault();
	subcanvas.innerHTML=subcanvas.innerHTML+e.dataTransfer.getData('Aws_S3')+e.dataTransfer.getData('Aws_EC2');	
}
function reply_click(clicked_class)
{
      alert("Call AJAX to pull properties for : "+clicked_class);
}
window.addEventListener("load",init,false);
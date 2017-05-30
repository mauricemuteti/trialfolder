var images = [
"images/Chrysanthemum.jpg", 
"images/Desert.jpg", 
"images/Hydrangeas.jpg", 
"images/Jellyfish.jpg", 
"images/Koala.jpg"
 ];
 

var caption = [
"caption 1", 
"caption 2", 
"caption 3",
"caption 4", 
"caption 5" 
];


var imagePos = 0;
var imagesLenth = images.length - 1;

function startslide(x){
		imagePos += x;

		if(imagePos > imagesLenth) {
			imagePos =0;
		}

		if(imagePos < 0) {
			imagePos = imagesLenth;
		}

document.getElementById('imagethmb').src = images[imagePos];
document.getElementById('cap').innerHTML = caption[imagePos];

}


setInterval(function startslide(){
		imagePos ++;

		if(imagePos > imagesLenth) {
			imagePos =0;
		}

		if(imagePos < 0) {
			imagePos = imagesLenth;
		}

document.getElementById('imagethmb').src = images[imagePos];
document.getElementById('cap').innerHTML = caption[imagePos];

},1000);
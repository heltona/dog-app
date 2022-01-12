let form = document.querySelector("form");
let breeds = document.querySelector("[name=breed]");


let state = null;

form.addEventListener("submit", process);
breeds.addEventListener("change", getPictures);
window.addEventListener("load", recoverState)



message = [
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10447.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10680.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10848.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10859.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_10986.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11211.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11262.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11263.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11279.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11283.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11345.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11365.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11422.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11435.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11584.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11614.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11620.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11657.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11663.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11759.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11782.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11783.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11798.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11811.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11819.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11835.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11853.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11858.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11875.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_11942.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12003.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12025.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12070.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12077.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12227.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12272.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12391.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12431.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12512.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12556.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12579.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12676.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12808.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12819.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12893.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12913.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12938.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12973.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_12997.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13014.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13020.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13032.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13060.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13210.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13211.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13221.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13417.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13420.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13453.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13499.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13553.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13567.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13590.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13654.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13662.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13665.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13710.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13782.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_1387.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_13939.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_1446.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_1559.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_1581.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_1844.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_1966.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2157.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2327.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_233.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2383.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2416.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2748.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2894.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2911.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_2997.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3001.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3026.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3032.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3144.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3246.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3286.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3409.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3561.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3730.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3841.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_3972.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4086.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4130.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4275.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4433.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4457.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4542.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4597.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4607.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_475.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_4839.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_5186.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_5361.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_5522.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_5743.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6069.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6310.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_641.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6414.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6670.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6796.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6811.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6842.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6869.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6965.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_6991.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7013.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_735.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7404.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7612.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7680.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7694.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7770.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8033.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8048.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8050.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8071.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8154.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8250.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8519.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8621.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8695.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8714.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8856.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_8949.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_946.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_9634.jpg",
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_9822.jpg"
];



function process(evt) {
	evt.preventDefault();
	state = {
		color: document.querySelector("[name=color]").value,
		font: document.querySelector("[name=font]").value,
		breed: document.querySelector("[name=breed]").value,
		name: document.querySelector("[name=name]").value,
		image: document.querySelector("[name=dogPic]:checked").value
	}

	localStorage.setItem("state", JSON.stringify(state));

	displayResult();
}

function recoverState() {
	let tempState = localStorage.getItem("state");
	if (tempState) {
		state = JSON.parse(tempState);
		displayResult();
	}
}

function getPictures() {
	fetch("/pics?breed=" + this.value).then(r => r.json()).then(function(result) {
		if (result.status = "success") {
			display(result.message)
		}

	});
}



function display(message) {
	let dogPics = document.querySelector("#docPics");
	var image, imageHolder, radio, clipper;

	dogPics.innerHTML = "";

	for (i = 0; i < message.length; i++) {
		image = getImage(message[i]);

		clipper = getClipper();
		clipper.append(image);

		imageHolder = getImageHolder();
		imageHolder.append(clipper);

		radio = getRadioInput(message[i]);
		imageHolder.append(radio);

		dogPics.append(imageHolder);
	}
}

function getClipper() {
	let clipper = document.createElement("div");
	clipper.classList.add("clipper");
	return clipper;
}

function getRadioInput(value) {
	radio = document.createElement("input");
	radio.type = "radio";
	radio.value = value;
	radio.name = "dogPic";
	return radio;
}

function getImageHolder() {
	let imageHolder = document.createElement("div");
	imageHolder.classList.add("imageHolder")
	return imageHolder;
}

function getImage(src) {
	image = document.createElement("img");
	image.src = src;
	return image;
}

function getParagraph(text) {
	p = document.createElement("p");
	p.innerText = text;
	return p;
}

function getTitle()
{
	h1 = document.createElement("h1");
	h1.innerText = "Your favorite dog is: ";
	return h1;
}

//this could be more easily done with php; but let's get some fun
//consider it as the success message
function displayResult() {

	let result = document.querySelector("#choice-result")
	result.style.setProperty("color", state.color);
	result.style.setProperty("font-family", state.font);
	
	result.innerHTML = "";
	
	result.appendChild(getTitle());
	
	result.appendChild(getParagraph("Breed: " + state.breed));
	result.appendChild(getParagraph("Name: " + state.name));
	result.appendChild(getImage(state.image));
}

display(message);


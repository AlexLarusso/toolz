var matches = document.querySelectorAll('.flex > p');
var slice = Function.prototype.call.bind(Array.prototype.slice);
var arr = slice(matches);
var R, G, B, Rh, Gh, Bh;

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


arr.forEach(function(el){

	R = getRandomArbitrary(0, 255);
	G = getRandomArbitrary(0, 255);
	B = getRandomArbitrary(0, 255);

	Rh = getRandomArbitrary(0, 255);
	Gh = getRandomArbitrary(0, 255);
	Bh = getRandomArbitrary(0, 255);


	el.style.background = `rgb(${R},${G},${B})`;

	(function(R,G,B,Rh,Gh,Bh){

		this.addEventListener('mouseover', function onHover(ev){ 
			console.log(`rgb(${Rh},${Gh},${Bh})`);
   			this.setAttribute("style", `background: rgb(${Rh},${Gh},${Bh})`);
		});

		this.addEventListener('mouseout', function onHover(ev){ 
   			this.setAttribute("style", `background: rgb(${R},${G},${B})`);
		});

	}).call(el, R,G,B,Rh,Gh,Bh);

	
})
//Main class
var cvjs = function(opt)
{
	//Check the canvas ID
	if(typeof opt.id === 'undefined'){ console.error('cv.js: no canvas ID provided...'); return null; }

	//Check the canvas width
	if(typeof opt.width === 'undefined'){ console.error('cv.js: no width provided...'); return null; }

	//Check the canvas height
	if(typeof opt.height === 'undefined'){ console.error('cv.js: no height provided...'); return null; }

	//Canvas content
	this.ctx = null;

	//Save the element ID
	this.id = document.getElementById(opt.id);

	//Check if element exists
	if(!this.id){ console.error('cv.js: cannot get element "' + opt.id + '"'); return null; }

	//Check for get the context
	if(!this.id.getContext){ console.error('cv.js: cannot get context for canvas...'); return null; }

	//Save the context
	this.ctx = this.id.getContext('2d');

	//Check for null
	if(!this.ctx){ console.error('cv.js: error getting context for canvas...'); return null; }

	//Save the canvas width
	this.id.width = opt.width;

	//Save the canvas height
	this.id.height = opt.height;
};

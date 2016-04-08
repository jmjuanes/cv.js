/**
 * cvjs - A lightweight Canvas JavaScript library.
 * @version v1.0.0
 * @link https://github.com/jmjuanes/cv.js
 * @license MIT
 */

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

//cvjs arc
cvjs.prototype.Arc = function(o)
{
	//Initialize the clockwise
	var cl = (typeof o.dir !== 'undefined' && o.dir === -1) ? true : false;

	//Begin the path
	this.ctx.beginPath();

	//Draw the arc
	this.ctx.arc(o.x, o.y, o.radius, o.start, o.end, cl);
};

//cvjs circle
cvjs.prototype.Circle = function(o)
{
	//Add the start angle
	o.start = 0;

	//Add the end angle
	o.end = 2*Math.PI;

	//Draw the arc
	this.Arc(o);
};

//cvjs clear the canvas
cvjs.prototype.Clear = function(opt)
{
	//Check for null opt
	if(typeof opt === 'undefined'){ var opt = {}; }
	
	//Check the x point
	var x = (typeof opt.x === 'undefined')? 0 : opt.x;

	//Check the y point
	var y = (typeof opt.y === 'undefined')? 0 : opt.y;

	//Check the width
	var w = (typeof opt.width === 'undefined')? this.id.width : opt.width;

	//Check the height
	var h = (typeof opt.height === 'undefined')? this.id.height : opt.height;

	//Clear a rectangle
	this.ctx.clearRect(x, y, w, h);
};

//cvjs fill
cvjs.prototype.Fill = function(opt)
{
	//Check for unique color
	if(typeof opt === 'string'){ this.ctx.fillStyle = opt; }
	
	//Check for add the color
	if(typeof opt.color !== 'undefined'){ this.ctx.fillStyle = opt.color; }

	//Check the opacity
	if(typeof opt.opacity !== 'undefined'){ this.ctx.globalAlpha = opt.opacity; }

	//Fill
	this.ctx.fill();

	//Reset the global alpha
	this.ctx.globalAlpha = 1;
};

//cvjs image
cvjs.prototype.Image = function(o)
{
	//Save the actual state
	this.ctx.save();

	//Set the opacity
	if(typeof o.opacity !== 'undefined'){ this.ctx.globalAlpha = o.opacity; }

	//Save the image width
	var w = (typeof o.width !== 'undefined')? o.width : o.img.width;

	//Save the image height
	var h = (typeof o.height !== 'undefined')? o.height : o.img.height;

	//Check for rotate the image
	if(typeof o.rotate !== 'undefined')
	{
		//Translate
		this.ctx.translate(o.x + w/2, o.y + h/2);

		//Rotate the image
		this.ctx.rotate(o.rotate);

		//Resize and put the image
		this.ctx.drawImage(o.img, -w/2, -h/2, w, h);
	}
	else
	{
		//Put the image
		this.ctx.drawImage(o.img, o.x, o.y, w, h);
	}

	//Restore
	this.ctx.restore();

	//Reset the global alpha
	this.ctx.globalAlpha = 1;
};

//cvjs line
cvjs.prototype.Line = function(o)
{
	//Begin the path
	this.ctx.beginPath();

	//Move to first point
	this.ctx.moveTo(o[0][0], o[0][1]);

	//Draw all lines
	for(var i = 1; i < o.length; i++)
	{
		//Draw the line
		this.ctx.lineTo(o[i][0], o[i][1]);
	}
};


//cvjs polygon
cvjs.prototype.Polygon = function(o)
{
	//Draw the lines
	this.Line(o);

	//Close path
	this.ctx.closePath();
};

//cvjs rectangle
cvjs.prototype.Rect = function(o)
{
	//Begin the path
	this.ctx.beginPath();

	//Check the radius
	var r = (typeof o.radius !== 'undefined')? o.radius : 0;

	//Start point
	this.ctx.moveTo(o.x + r, o.y);

	//Horizontal line
	this.ctx.lineTo(o.x + o.width - r, o.y);

	//Draw the quadratic curve
	this.ctx.quadraticCurveTo(o.x + o.width, o.y, o.x + o.width, o.y + r);

	//Vertical line
	this.ctx.lineTo(o.x + o.width, o.y + o.height - r);

	//Draw the quadratic curve
	this.ctx.quadraticCurveTo(o.x + o.width, o.y + o.height, o.x + o.width - r, o.y + o.height);

	//Horizontal line
	this.ctx.lineTo(o.x + r, o.y + o.height);

	//Draw the quatratic curve
	this.ctx.quadraticCurveTo(o.x, o.y + o.height, o.x, o.y + o.height - r);

	//Vertical line
	this.ctx.lineTo(o.x, o.y + r);

	//Draw the quadratic curve
	this.ctx.quadraticCurveTo(o.x, o.y, o.x + r, o.y);

	//Close path
	this.ctx.closePath();
};

//cvjs set the size
cvjs.prototype.Size = function(w, h)
{
	//Check for width
	if(typeof w !== 'undefined')
	{
		//Set the width
		this.Width(w);
	}

	//Check for height
	if(typeof h !== 'undefined')
	{
		//Set the height
		this.Height(h);
	}
};

//cvjs width function
cvjs.prototype.Width = function(w)
{
	//Check for return the width or save it
	if(typeof w === 'undefined')
	{
		//Return the element width
		return this.id.width;
	}
	else
	{
		//Save the element width
		this.id.width = w;
	}
};

//cvjs height function
cvjs.prototype.Height = function(h)
{
	//Check for return the height or save it
	if(typeof h === 'undefined')
	{
		//Return the element height
		return this.id.height;
	}
	else
	{
		//Save the element height
		this.id.height = h;
	}
};

//cvjs Stroke
cvjs.prototype.Stroke = function(opt)
{
	//Check the stroke color
	if(typeof opt === 'string'){ this.ctx.strokeStyle = opt; }
	
	//Check the stroke width
	if(typeof opt.width !== 'undefined'){ this.ctx.lineWidth = opt.width; }

	//Check the stroke color
	if(typeof opt.color !== 'undefined'){ this.ctx.strokeStyle = opt.color; }

	//Check the line cap butt|round|square
	if(typeof opt.cap !== 'undefined'){ this.ctx.lineCap = opt.cap; }

	//Check the line join: bevel|round|miter
	if(typeof opt.join !== 'undefined'){ this.ctx.lineJoin = opt.join; }

	//Check the opacity
	if(typeof opt.opacity !== 'undefined'){ this.ctx.globalAlpha = opt.opacity; }

	//Apply the stroke
	this.ctx.stroke();

	//Reset the global alpha
	this.ctx.globalAlpha = 1;
};

//cvjs Text
cvjs.prototype.Text = function(o)
{
	//Set the opacity
	if(typeof o.opacity !== 'undefined'){ this.ctx.globalAlpha = o.opacity; }

	//Get the font size
	var size = (typeof o.size !== 'undefined')? o.size.toString().replace('px', '') + 'px' : '16px';

	//Get the font family
	var font = (typeof o.font !== 'undefined')? o.font : 'Arial';

	//Add the font style
	this.ctx.font = size + ' ' + font;

	//Add the text baseline  alphabetic|top|hanging|middle|ideographic|bottom
	if(typeof o.base !== 'undefined')
	{
		//Set the user baseline
		this.ctx.textBaseline = o.base;
	}
	else
	{
		//Set the default baseline
		this.ctx.textBaseline = 'top';
	}

	//Add the font color
	if(typeof o.color !== 'undefined'){ this.ctx.fillStyle = o.color; }

	//Check the align  center|end|left|right|start
	if(typeof o.align !== 'undefined'){ this.ctx.textAlign = o.align; }

	//Check for max width
	if(typeof o.mwidth !== 'undefined')
	{
		//Add the text with maxwidth
		this.ctx.fillText(o.text, o.x, o.y, o.mwidth);
	}
	else
	{
		//Add the text
		this.ctx.fillText(o.text, o.x, o.y);
	}

	//Reset the global alpha
	this.ctx.globalAlpha = 1;
};

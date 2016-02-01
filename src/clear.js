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

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

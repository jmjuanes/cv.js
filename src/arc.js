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

//cvjs polygon
cvjs.prototype.Polygon = function(o)
{
	//Draw the lines
	this.Line(o);

	//Close path
	this.ctx.closePath();
};

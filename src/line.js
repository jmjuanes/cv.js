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

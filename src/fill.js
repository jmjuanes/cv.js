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

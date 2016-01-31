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

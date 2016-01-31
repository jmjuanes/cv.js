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

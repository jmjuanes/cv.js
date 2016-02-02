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
	if(typeof o.base !== 'undefined'){ this.ctx.textBaseline = o.base; }

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

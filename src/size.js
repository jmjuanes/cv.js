//cv.js width function
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
		//Save the element heigth
		this.id.height = h;
	}
};

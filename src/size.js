//cvjs set the size
cvjs.prototype.Size = function(w, h)
{
	//Check for width
	if(typeof w !== 'undefined')
	{
		//Set the width
		this.Width(w);
	}

	//Check for height
	if(typeof h !== 'undefined')
	{
		//Set the height
		this.Height(h);
	}
};

//cvjs width function
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
		//Save the element height
		this.id.height = h;
	}
};

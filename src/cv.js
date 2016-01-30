//Main class
var cvjs = function(opt)
{
	//Check the canvas ID
	if(typeof opt.id === 'undefined'){ console.error('cv.js: no canvas ID provided...'); return null; }

	//Check the canvas width
	if(typeof opt.width === 'undefined'){ console.error('cv.js: no width...'); return null; }

	//Check the canvas height
	if(typeof opt.height === 'undefined'){ console.error('cv.js: no height...'); return null; }

	//Canvas content
	this.ctx = null;

	//Save the element ID
	this.id = document.getElementById(opt.id);

	//Check if element exists
	if(this.id)
	{
		//Check for get the context
		if(this.id.getContext)
		{
			//Save the context
			this.ctx = this.id.getContext('2d');

			//Check for null
			if(this.ctx)
			{
				//Save the canvas width and height
				this.id.width  = opt.width;
				this.id.height = opt.height;
			}
		}
	}
	else
	{
		//If canvas not found
		console.error('No element ' + opt.id + ' found...');
	}
};

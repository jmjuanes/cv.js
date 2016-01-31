# cv.js

[![npm](https://img.shields.io/npm/v/cvjs.svg?style=flat-square)](https://www.npmjs.com/package/cvjs)
[![npm](https://img.shields.io/npm/dt/cvjs.svg?style=flat-square)](https://www.npmjs.com/package/cvjs)

A lightweight Canvas JavaScript library.

```javascript
//Initialize the canvas element
var canvas = new cvjs({ id: 'my-canvas', width: 300, height: 300 });

//Draw a new arc
canvas.Arc({ x: 150, y: 150, radius: 100, start: 0, end: 3*Math.PI/2 });

//Set background color
canvas.Fill({ color: '#000000', opacity: 0.5 });
```

## Download

Get the library downloading the latest release or using NPM:

- Latest release: [download](https://github.com/jmjuanes/cv.js/releases).
- **NPM**: [https://www.npmjs.com/package/cvjs](https://www.npmjs.com/package/cvjs).


## Usage

Add to your website:

```html
<script type="text/javascript" src="/path/to/cv.js"></script>
```

Initialize your canvas element with:

```javascript
var canvas = new cvjs({ id: 'your-canvas-id', width: 300, height: 300 });
```

The argument must be an object with the next keys:

- `id`: ID of your canvas element (mandatory).
- `width`: width dimension of your canvas (in pixels) (mandatory).
- `height`: height dimension of your canvas (in pixels) (mandatory).


### Width(w)

Use this function for set the width of your canvas element. If no argument is provided, the function returns the actual canvas width.

```javascript
//Set the canvas width to 500px
canvas.Width(500);

//Get the canvas width
var width = canvas.Width(); //now width is 500
```

### Height(h)

Use this function for set the height of your canvas element. If no argument is provided, the function return the actual canvas height.

```javascript
//Set the canvas height to 600px
canvas.Height(600);

//Get the canvas height
var height = canvas.Height(); //Now height is 600
```

### Clear(object)

Clear a rectangle of your canvas. The argument must be an object with the next keys:

- `x`: position x of your rectangle.
- `y`: position y of your rectangle.
- `width`: rectangle width.
- `height`: rectangle height.

If no argument is provided, the function will clear all the canvas.

```javascript
//Clear only a rectangle
canvas.Clear({ x: 50, y: 50, width: 100, height: 100 });

//Clear all the canvas
canvas.Clear();
```

### Fill(object)

Sets the color used to fill the drawing. The argument can be an object with the following keys:

- `color`: a color value that indicates the fill color.
- `opacity`: sets the transparency of the fill.

```javascript
//Set the fill of the object
canvas.Fill({ color: '#abcdef', opacity: 0.6 });
```

The `Fill` method also works with a string argument:

```javascript
//Set only the fill color
canvas.Fill('#abcdef');
```

### Stroke(object)

The `Stroke` method draws the path that you have previous defined. The argument can be an object with the following keys:

- `color`: color value for the line.
- `width`: sets the line width.
- `cap`: sets the cap end style for the lines. Available values: `butt`, `round` or `square`.
- `join`: sets the corner style. Available values: `bevel`, `round` or `miter`.
- `opacity`: sets the transparency value of the line.

```javascript
//Set the stroke style
canvas.Stroke({ color: '#000000', width: 5, cap: 'round', join: 'round', opacity: 0.5 });
```

Also, the `Stroke` method allows a string argument for set only the stroke color:

```javascript
//Set only the stroke color
canvas.Stroke('#000000');
```

### Rect(object)

Draws a rectangle defined by:

- `x`: x position of the rectangle.
- `y`: y position of the rectangle.
- `width`: rectangle width.
- `height`: rectangle height.
- `radius`: sets the corner radius of the rectangle (optional).


```javascript
//Draw a normal rectangle
canvas.Rect({ x: 50, y: 50, width: 100, height: 100 });

//Fill the normal rectangle
canvas.Fill('#ed321f');


//Draw a rounded rectangle
canvas.Rect({ x: 200, y: 50, width: 100, height: 100, radius: 20 });

//Fill the rounded rectangle
canvas.Fill('#588bfe');
```

### Line(points)

Draws a line defined by an array of points.

```javascript
//Draw a single line
canvas.Line([[50, 50], [100, 100]]);

//Set the stroke of the single line
canvas.Stroke('#ed321f');

//Draw five connected lines
canvas.Line([[50, 50], [100, 100], [150, 50], [200, 100], [250, 50], [300, 100]]);

//Set the stroke of the five lines
canvas.Stroke('#588bfe');
```

### Polygon(points)

Draws a polygon defined by an array of points.

```javascript
//Draw a triangle
canvas.Polygon([[50, 50], [50, 100], [100, 100]]);

//Fill the friangle
canvas.Fill('#000000');
```

### Arc(object)

Draws an arc or curve. The argument must be an object with the following keys:

- `x`: x-position of the arc center.
- `y`: y-position of the arc center.
- `radius`: arc radius.
- `start`: start angle of the arc.
- `end`: end angle of the arc.
- `dir`: sets the direction of the arc (optional). `1` indicates clockwise (default), and `-1` indicates counter-clockwise.

```javascript
//Draw a new arc
canvas.Arc({ x: 150, y: 150, radius: 100, start: 0, end: 3*Math.PI/2 });

//Arc fill
canvas.Fill('#abcdef');
```

### Circle(object)

Draws a full circle defined by:

- `x`: x-position of the circle center.
- `y`: y-position of the circle center.
- `radius`: circle radius.

```javascript
//Draw a circle
canvas.Circle({ x: 150, y: 150, radius: 100 });

//Fill the circle
canvas.Fill('#abcdef');
```


### Text(object)

Draws a text on the canvas. The argument of this method must be an object with the following keys:

- `text`: text to be written on the canvas.
- `color`: text color.
- `x`: x-position of the text.
- `y`: y-position of the text.
- `font`: text font. Default is `Arial`.
- `size`: text size in pixels. Default is `16px`.
- `base`: sets the text baseline. Available values: `alphabetic`, `top`, `hanging`, `middle`, `ideographic` or `bottom`. Default is `alphabetic`.
- `align`: sets the text align. Available values: `center`, `end`, `left`, `right` or `start`. Default is `start`.
- `mwidth`: sets the maximum allowed width of the text in pixels (optional).
- `opacity`: sets the transparency of the text.

```javascript
//Draw Hello World
canvas.Text({ text: 'Hello World', size: 14, x: 50, y: 50, color: '#588bfe' });
```

## Draw on the canvas directly

You can use the `ctx` method provided for draw directly on the canvas using the canvas API (see [http://www.w3schools.com/tags/ref_canvas.asp](http://www.w3schools.com/tags/ref_canvas.asp) for get more info). This allows you to use `moveTo()`, `quadraticCurveTo()`, `bezierCurveTo()`, and more!

```javascript
//Initialize the canvas
var canvas = new cvjs({ id: 'my-canvas', width: 500, height: 500 });

//Move to our new point
canvas.ctx.moveTo(50,50);

//Draw a quadratic curve
canvas.ctx.quadraticCurveTo(50,200,300,50);
```


## Contribute

Pull requests are always welcome :)

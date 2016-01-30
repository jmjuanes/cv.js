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

- **id**: ID of your canvas element (mandatory).
- **width**: width dimension of your canvas (in pixels) (mandatory).
- **height**: height dimension of your canvas (in pixels) (mandatory).


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

- **x**: position x of your rectangle.
- **y**: position y of your rectangle.
- **width**: rectangle width.
- **height**: rectangle height.

If no argument is provided, the function will clear all the canvas.

```javascript
//Clear only a rectangle
canvas.Clear({ x: 50, y: 50, width: 100, height: 100 });

//Clear all the canvas
canvas.Clear();
```

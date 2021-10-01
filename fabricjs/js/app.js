function drawRect() {
    console.log('work fine !!');
    // reference canvas element (with id="c")
    var canvasEl = document.getElementById('work-space');

    // get 2d context to draw on (the "bitmap" mentioned earlier)
    var ctx = canvasEl.getContext('2d');

    // set fill color of context
    ctx.fillStyle = 'red';

    // create rectangle at a 100,100 point, with 20x20 dimensions
    ctx.fillRect(100, 100, 20, 20);
}

function fabricDrawRect() {
    console.log('fabric function work!!');
    // create a wrapper around native canvas element (with id="c")
    var canvas = new fabric.Canvas('work-space');

    // create a rectangle object
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20,
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
}

fabricDrawRect();

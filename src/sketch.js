let arr = [];
let minElement;
let maxElement;
let elementCount;
let allArr;
let k;
let drawingStatus;
let loopStatus;
let cnv;
let algSelect;
let nSelect;
let startButton;
let generateButton;
let orderedButton;
let shuffleButton;
let resetButton;
let helpButton;
let currAlg;
let algorithmNames;
let validKeys;

function setup() {
    cnv = createCanvas(1280, 640);
    cnv.parent('container');
    allArr = [];

    algorithmNames = {
        'Bubble Sort': 'bubbleSort',
        'Quick Sort': 'quickSort',
        'Merge Sort': 'mergeSort',
        'Insertion Sort': 'insertionSort'
    };

    validKeys = {
        'b': 'bubbleSort',
        'q': 'quickSort',
        'm': 'mergeSort'
    };

    initDOM();
    elementCount = 8;

    arr = randomArray(elementCount, 1, 50);
    calculateArray(arrayExt(arr));
    k = 0;
    frameRate(120);
    drawingStatus = false;
    loopStatus = "noLoop";
}

function reset() {
    drawingStatus = false;
    loopStatus = 'noLoop';
    k = 0;
}

function draw() {
    clear();
    background(127);

    if (drawingStatus) {
        if (loopStatus === "loop") {
            drawArray(allArr[k++], minElement, maxElement);
            if (k >= allArr.length) {
                k = 0;
                loopStatus = "noLoop";
            }
        } else {
            drawArray(allArr[allArr.length -1], minElement, maxElement);
        }
    } else {
        drawArray(arr, minElement, maxElement);
    }
}

function drawArray(a, min, max) {
    let r = width / a.length;
    for (let i = 0; i < a.length; i++) {
        fill(200, 0, 200, 200);
        let yy = map(a[i], min, max, r / 4, height);
        rect(i * r, height - yy, r, yy);
    }
}

function keyPressed() {
    for (let v of Object.keys(validKeys)) {
        if (key === v) {
            allArr = [];
            drawingStatus = true;
            loopStatus = "loop";
            callSortFunction(validKeys[v])
        }
    }
}

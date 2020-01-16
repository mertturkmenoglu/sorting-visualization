let arr;
let minElement;
let maxElement;
let numberCount = 50;
let allArr;
let k;
let drawingStatus;
let loopStatus;

function setup() {
    createCanvas(960, 640);
    background(0);
    allArr = [];

    arr = randomArray(numberCount, 1, 50);
    calculateArray(arrayExtremums(arr));
    k = 0;
    frameRate(60);
    drawingStatus = false;
    loopStatus = "noLoop";
}

function draw() {
    clear();
    background(51);

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

function keyPressed() {
    if (key === 'b' || key === 'B') {
        allArr = [];
        drawingStatus = true;
        bubbleSort(arr.slice());
        if (loopStatus === "noLoop") {
            loopStatus = "loop";
        }
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

function calculateArray(ext) {
    minElement = ext['min'];
    maxElement = ext['max'];
}

function arrayExtremums(a) {
    let tmpMin = 0;
    let tmpMax = 0;

    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[tmpMin])
            tmpMin = i;
        if (a[i] > a[tmpMax])
            tmpMax = i;
    }

    return {
        "min": a[tmpMin],
        "max": a[tmpMax]
    };
}

function randomArray(n, min, max) {
    let a = [];

    for (let i = 0; i < n; i++) {
        a.push(Math.floor(random(min, max)));
    }

    return a;
}

function bubbleSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                allArr.push(a.slice());
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }
    allArr.push(a.slice());
}

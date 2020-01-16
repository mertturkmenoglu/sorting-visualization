let r = 32;
let arr;
let minElement;
let maxElement;
let dy;
let showNumbers;
let numberCount = 50;

function setup() {
    createCanvas(960, 640);
    background(0);

    arr = randomArray(numberCount, 1, 50);
    calculateArray(arrayExtremums(arr));
    showNumbers = false;
}

function calculateArray(ext) {
    minElement = ext['min'];
    maxElement = ext['max'];
    r = width / arr.length;
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

function draw() {
    clear();
    background(51);

    for (let i = 0; i < arr.length; i++) {
        fill(200, 0, 200, 200);
        let yy = map(arr[i], minElement, maxElement, r / 4, height);
        rect(i * r, height - yy, r, yy);

        if (showNumbers) {
            textSize(24);
            fill(255);
            text(arr[i], i*r + r/2, height - 24);
        }
    }
}

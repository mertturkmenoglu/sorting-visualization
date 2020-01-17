let arr;
let minElement;
let maxElement;
let numberCount = 200;
let allArr;
let k;
let drawingStatus;
let loopStatus;
let cnv;

function setup() {
    cnv = createCanvas(960, 640);
    cnv.parent('container');
    allArr = [];

    arr = randomArray(numberCount, 1, 50);
    calculateArray(arrayExtremums(arr));
    k = 0;
    frameRate(120);
    drawingStatus = false;
    loopStatus = "noLoop";
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

function keyPressed() {
    if (key === 'b' || key === 'B') {
        allArr = [];
        drawingStatus = true;
        bubbleSort(arr.slice());
        loopStatus = "loop";
    }

    if (key === 'q' || key === 'Q') {
        allArr = [];
        drawingStatus = true;
        quickSort(arr.slice(), 0, arr.length - 1);
        loopStatus = "loop";
    }

    if (key === 'm' || key === 'M') {
        allArr = [];
        drawingStatus = true;
        mergeSort(arr.slice(), 0, arr.length - 1);
        loopStatus = "loop";
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
        a.push(random(min, max));
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

function quickSort(a, low, high) {
    if (low < high) {
        let pIndex = quickSortPartition(a, low, high);
        quickSort(a, low, pIndex - 1);
        quickSort(a, pIndex + 1, high);
    }
}

function quickSortPartition(a, low, high) {
    let pivot = a[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (a[j] < pivot) {
            i++;
            allArr.push(a.slice());
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
    }

    i++;
    allArr.push(a.slice());
    let tmp = a[high];
    a[high] = a[i];
    a[i] = tmp;
    allArr.push(a.slice());

    return i;
}

function mergeSort(a, low, high) {
    if (low < high) {
        let mid = parseInt((low + high) / 2);
        mergeSort(a, low, mid);
        mergeSort(a, mid + 1, high);
        merge(a, low, mid, high);
    }
}

function merge(a, low, mid, high) {
    let n1 = mid - low + 1;
    let n2 = high - mid;

    let l = new Array(n1);
    let r = new Array(n2);

    for (let i = 0; i < n1; i++) {
        l[i] = a[low + i];
    }

    for (let i = 0; i < n2; i++) {
        r[i] = a[mid + i + 1];
    }

    let i = 0;
    let j = 0;
    let k = low;

    while (i < n1 && j < n2) {
        if (l[i] <= r[j]) {
            a[k] = l[i];
            i++;
        } else {
            a[k] = r[j];
            j++;
        }
        k++;
        allArr.push(a.slice());
    }

    while (i < n1) {
        a[k] = l[i];
        i++;
        k++;
        allArr.push(a.slice());
    }

    while (j < n2) {
        a[k] = r[j];
        j++;
        k++;
        allArr.push(a.slice());
    }
}

let algSelect;
let nSelect;
let startButton;
let generateButton;
let orderedButton;
let shuffleButton;
let resetButton;
let helpButton;

function initDOM() {
    algSelect = document.getElementById('alg-select');
    nSelect = document.getElementById('n-select');
    startButton = document.getElementById('start-button');
    generateButton = document.getElementById('generate-button');
    orderedButton = document.getElementById('ordered-button');
    shuffleButton = document.getElementById('shuffle-button');
    resetButton = document.getElementById('reset-button');
    helpButton = document.getElementById('help-button');

    algSelect.onchange = () => {
        reset();
        updateCurrentAlgorithm(algSelect);
        generateRandomArray();
    };

    nSelect.onchange = () => {
        reset();
        updateElementCount(nSelect);
        generateRandomArray();
    };

    for (let a in algorithmNames) {
        if (algorithmNames.hasOwnProperty(a)) {
            let opt = document.createElement('option');
            opt.appendChild(document.createTextNode(a));
            opt.value = algorithmNames[a];
            opt.classList.add('nav-bar-select-item');
            algSelect.appendChild(opt);

        }
    }

    for (let i = 8; i <= 512; i *= 2) {
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode(i.toString()));
        opt.value = i.toString();
        opt.classList.add('nav-bar-select-item');
        nSelect.appendChild(opt);
    }

    updateCurrentAlgorithm(algSelect);
    updateElementCount(nSelect);

    startButton.onclick = function () {
        reset();
        callSortFunction(currAlg);
        drawingStatus = true;
    };

    generateButton.onclick = () => {
        generateRandomArray();
        reset();
    };

    orderedButton.onclick = () => {
        generateOrderedArray();
        reset();
    };

    shuffleButton.onclick = () => {
        arr = shuffleArray(arr);
        reset();
    };

    resetButton.onclick = reset;

    helpButton.onclick = () => alert('Select your algorithm and click start.');
}

function generateOrderedArray() {
    if (loopStatus !== 'loop') {
        arr = orderedArray(elementCount);
        calculateArray(arrayExt(arr));
    }
}

function generateRandomArray() {
    if (loopStatus !== 'loop') {
        arr = randomArray(elementCount, 1, 50);
        calculateArray(arrayExt(arr));
    }
}

function updateElementCount(selector) {
    elementCount = getElementCount(selector);
}

function getElementCount(selector) {
    return parseInt(selector.value);
}

function updateCurrentAlgorithm(selector) {
    currAlg = getAlgorithmName(selector)
}

function getAlgorithmName(selector) {
    return selector.value;
}

function calculateArray(ext) {
    minElement = ext['min'];
    maxElement = ext['max'];
}

function arrayExt(a) {
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

function orderedArray(n) {
    let a = [];

    for (let i = 1; i <= n; i++) {
        a.push(i);
    }

    return a;
}

function shuffleArray(a) {
    return shuffle(a);
}

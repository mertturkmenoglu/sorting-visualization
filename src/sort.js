function callSortFunction(fName) {
    allArr = [];
    drawingStatus = true;
    loopStatus = "loop";
    let before;
    let after;

    before = millis();

    switch (fName) {
        case 'bubbleSort':
            bubbleSort(arr.slice());
            break;
        case 'quickSort':
            quickSort(arr.slice(), 0, arr.length - 1);
            break;
        case 'mergeSort':
            mergeSort(arr.slice(), 0, arr.length - 1);
            break;
        case 'insertionSort':
            insertionSort(arr.slice());
            break;
        case 'selectionSort':
            selectionSort(arr.slice());
            break;
        case 'heapSort':
            heapSort(arr.slice());
            break;
        case 'timSort':
            timSort(arr.slice());
            break;
        case 'radixSort':
            if (arr.some(e => e !== Math.floor(e))) {
                alert('Radix sort can be applied to integer values');
                return 0;
            } else {
                radixSort(arr.slice());
            }
            break;
        case 'shellSort':
            shellSort(arr.slice());
            break;
        case 'cycleSort':
            cycleSort(arr.slice());
            break;
        case 'oddEvenSort':
            oddEvenSort(arr.slice());
            break;
        case 'cocktailSort':
            cocktailSort(arr.slice());
            break;
    }

    after = millis();
    return after - before;
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
            allArr.push(a.slice());
            i++;

            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
    }

    allArr.push(a.slice());
    i++;

    let tmp = a[high];
    a[high] = a[i];
    a[i] = tmp;

    allArr.push(a.slice());

    return i;
}

function mergeSort(a, low, high) {
    if (low < high) {
        let mid = parseInt(((low + high) / 2).toString());
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

function insertionSort(a) {
    for (let i = 0; i < a.length; i++) {
        let current = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] > current) {
            a[j + 1] = a[j];
            j--;

            allArr.push(a.slice());
        }

        a[j + 1] = current;
        allArr.push(a.slice());
    }
}

function selectionSort(a) {
    allArr.push(a.slice());

    for (let i = 0; i < a.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }

        let tmp = a[minIndex];
        a[minIndex] = a[i];
        a[i] = tmp;

        allArr.push(a.slice());
    }
}

function heapSort(a) {
    for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) {
        heapify(a, a.length, i);
    }

    for (let i = a.length - 1; i >= 0; i--) {
        let tmp = a[0];
        a[0] = a[i];
        a[i] = tmp;

        allArr.push(a.slice());

        heapify(a, i, 0);
    }
}

function heapify(a, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && a[l] > a[largest]) {
        largest = l;
    }

    if (r < n && a[r] > a[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let tmp = a[i];
        a[i] = a[largest];
        a[largest] = tmp;

        allArr.push(a.slice());

        heapify(a, n, largest);
    }
}

function timSortInsertion(a, low, high) {
    for (let i = low + 1; i <= high; i++) {
        let tmp = a[i];
        let j = i - 1;

        while (a[j] > tmp && j >= low) {
            a[j+1] = a[j];
            j--;
            allArr.push(a.slice());
        }

        a[j+1] = tmp;
        allArr.push(a.slice());
    }

}

function timSort(a) {
    const RUN = 32;
    const n = a.length;

    for (let i = 0; i < n; i += RUN) {
        timSortInsertion(a, i, Math.min(i+RUN-1, n-1));
    }

    for (let size = RUN; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2*size) {
            let mid = left + size - 1;
            let right = Math.min((left + 2*size-1), (n-1));
            merge(a, left, mid, right);
        }
    }
}

function radixSort(a) {
    let max = Math.max(...a); // Get maximum element
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(a, exp);
    }
}

function countSort(a, exp) {
    let output = new Array(a.length).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < a.length; i++) {
        count[ Math.floor(a[i] / exp) % 10 ]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i-1];
    }

    for (let i = a.length - 1; i >= 0; i--) {
        output[count[Math.floor(a[i]/exp)%10]-1] = a[i];
        count[Math.floor(a[i]/exp)%10]--;
    }

    for (let i = 0; i < a.length; i++) {
        a[i] = output[i];
        allArr.push(a.slice());
    }
}

function shellSort(a) {
    for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < a.length; i++) {
            let tmp = a[i];
            let j;
            for (j = i; j >= gap && a[j - gap] > tmp; j -= gap) {
                a[j] = a[j - gap];
                allArr.push(a.slice());
            }

            a[j] = tmp;
            allArr.push(a.slice());
        }
    }
}

function cycleSort(a) {
    for (let c = 0; c < a.length - 1; c++) {
        let item = a[c];
        let pos = c;

        for (let i = c + 1; i < a.length; i++) {
            if (a[i] < item) {
                pos++;
            }
        }

        if (pos === c) {
            continue;
        }

        while (item === a[pos]) {
            pos++;
        }

        let tmp = a[pos];
        a[pos] = item;
        item = tmp;
        allArr.push(a.slice());

        while (pos !== c) {
            pos = c;
            for (let i = c + 1; i < a.length; i++) {
                if (a[i] < item) {
                    pos++;
                }
            }

            while (item === a[pos]) {
                pos++;
            }

            tmp = a[pos];
            a[pos] = item;
            item = tmp;
            allArr.push(a.slice());
        }
    }
}

function oddEvenSort(a) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 1; i < a.length - 1; i += 2) {
            if (a[i] > a[i+1]) {
                let tmp = a[i];
                a[i] = a[i+1];
                a[i+1] = tmp;
                allArr.push(a.slice());
                sorted = false;
            }
        }

        for (let i = 0; i < a.length - 1; i += 2) {
            if (a[i] > a[i+1]) {
                let tmp = a[i];
                a[i] = a[i+1];
                a[i+1] = tmp;
                allArr.push(a.slice());
                sorted = false;
            }
        }
    }
}

function cocktailSort(a) {
    let swapped = true;
    let start = 0;
    let end = a.length - 1;
    allArr.push(a.slice());

    while (swapped) {
        swapped = false;

        for (let i = start; i < end; i++) {
            if (a[i] > a[i+1]) {
                let tmp = a[i];
                a[i] = a[i+1];
                a[i+1] = tmp;
                swapped = true;
                allArr.push(a.slice());
            }
        }

        if (swapped) {
            swapped = false;
            end--;
            for (let i = end - 1; i >= start; i--) {
                if (a[i] > a[i+1]) {
                    let tmp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = tmp;
                    swapped = true;
                    allArr.push(a.slice());
                }
            }
        }

        start++;
    }
}

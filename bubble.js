// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; i < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr
// }



// loop through both arrays
// move largest to the end
function bubbleSort(arr1) {

    for (let i = 0; i < arr1.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr1.length - i; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr1
}





function bubblesort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let switched = false;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                switched = true;
            }
        }
        if (!switched) break
    }
    return arr;
}




function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr

}












module.exports = bubbleSort;
// function merge(arr1, arr2) {
//     const results = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         results.push(arr1[i]);
//         i++
//     }
//     while (j < arr2.length) {
//         results.push(arr2[j]);
//         j++
//     }
//     return results;
// }

// function mergeSort(arr) {

//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     return merge(left, right)
// }

module.exports = { merge, mergeSort };

// function merge(arr1, arr2) {
//     // must be sorted
//     let arr = []
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             arr.push(arr1[i]);
//             i++;
//         }
//         else {
//             arr.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         arr.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         arr.push(arr2[j]);
//         j++;
//     }
//     return arr;
// }

// function mergeSort(arr) {
//     // recurse 
//     // stopping point
//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(mid.slice(0, mid));
//     const right = mergeSort(mid.slice(mid));
//     return merge(left, right)
// }


function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }

        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++
        }
        return result;
    }
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)

}
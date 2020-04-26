(async function () {
    const readline = require('readline');

    var nums1, nums2;
    const rl = readline.createInterface({ //initializing the console input
        input: process.stdin,
        output: process.stdout
    });

    await new Promise((resolve, reject) => { //waiting for the first sorted arrays(nums1)
        rl.question('Enter first sorted array (nums1): ', (ans) => {
            nums1 = ans;
            resolve();
        })
    });

    await new Promise((resolve, reject) => { //waiting for the first sorted arrays(nums2)
        rl.question('Enter second sorted array (nums2): ', (ans) => {
            nums2 = ans;
            resolve();
        })
    });

    nums1 = JSON.parse(nums1); //parsing the input
    nums2 = JSON.parse(nums2); //parsing the input

    let merge = function (arr1, arr2) { //merging two sorted arrays with time complexity of O(log(arr1.length + arr2.length))
        let arr3 = [],
            i = 0, j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                arr3.push(arr1[i]);
                i++
            } else {
                arr3.push(arr2[j]);
                j++
            }
        }

        while (i < arr1.length) {
            arr3.push(arr1[i++])
        }

        while (j < arr2.length) {
            arr3.push(arr2[j++])
        }

        return arr3;

    };

    mergedArray = merge(nums1, nums2);
    var median;

    if ((mergedArray.length + 1) % 2 == 0) { // generating the output
        median = mergedArray[(mergedArray.length + 1) / 2 - 1].toFixed(1);
    } else {
        let a = mergedArray[mergedArray.length / 2 - 1],
            b = mergedArray[mergedArray.length / 2];
        median = `(${a} + ${b})/2 = ${(a + b) / 2}`
    }
    output = `The median is ${median}`

    console.log(output);

    rl.close(); //closing the console input stream
})();
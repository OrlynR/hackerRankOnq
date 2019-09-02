function nonDivisibleSubset(inputArray) {
    let array = inputArray.split("\n");
    let n = parseInt(array[0].split(" ")[0]);
    let k = parseInt(array[0].split(" ")[1]);
    let s = array[1].split(" ");
    s = s.map(Number);
    let matriz = [];
    for (let i = 0; i < k; i++) {
        matriz[i] = 0;
    }

    for (i = 0; i < n; i++) {
        matriz[s[i] % k]++;
    }
    let total = 0
    for (let i = 1; i < Math.ceil(k / 2); i++) {
        if (matriz[i] > matriz[k - i]) {
            total += matriz[i];
        } else {
            total += matriz[k - i];
        }
    }
    if (matriz[0] != 0) {
        total++;
    }
    if (k % 2 == 0 && matriz[k / 2] != 0) {
        total++;
    }
    console.log(total);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
inputArray = "";
process.stdin.on("data", function (input) {
    inputArray += input;
});

process.stdin.on("end", function () {
    nonDivisibleSubset(inputArray);
});

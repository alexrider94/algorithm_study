function solution(arr) {
    var count = 1;
    var ans = 1;
    var i = 0;
    console.log(arr);
    while (arr.length > 1) {
        var arr2 = [];
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === arr[i + 1]) {
                count++;
            }
            if (arr[i] !== arr[i + 1]) {
                arr2.push(count);
                count = 1;
            }
        }
        console.log(arr2);
        arr = arr2;
        ans++;
    }
    return ans;
}

//a = solution([1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]);
//a = solution([1, 2, 3]);
a = solution([2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2]);
console.log(a);
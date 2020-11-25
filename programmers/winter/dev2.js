function solution(n, groups) {
    let check = new Array(n).fill(false);
    let countList = [];
    for (let i = 0; i < groups.length; ++i) {
        let start = groups[i][0];
        let end = groups[i][1];
        let count = 0;
        for (let j = start; j <= end; j++) {
            if (check[j] == true) {
                continue;
            }
            else {
                check[j] = true;
                count = count + 1;
            }
        }

        countList.push(count);
    }

    console.log(countList);

}


solution(10, [[1, 5], [2, 7], [4, 8], [3, 6]])

/* 10[[1, 5], [2, 7], [4, 8], [3, 6]]	4
7[[6, 7], [1, 4], [2, 4]]	3
100[[1, 50], [1, 100], [51, 100]]	1 */
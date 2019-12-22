function solution(n){
    let range = Array(n - 1).fill().map((v, i) => i + 2);
    for (let i = 0; i < range.length; i++) {
        range = range.filter(v => v === range[i] || v % range[i]);
    }
    return range.length;
}
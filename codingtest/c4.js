function solution(depar, hub, dest, roads) {
  let stack = [];
  for (let i = 0; i < roads.length; ++i) {
    if (depar == roads[i][0]) {
      stack.push(roads[i][0]);
      let s = dfs(roads[i][1], hub, dest, roads, stack);
      console.log(s);
    }
  }
}

function dfs(depar, hub, dest, roads, stack) {
  console.log(stack);
  for (let i = 0; i < roads.length; ++i) {
    if (depar == roads[i][0]) {
      stack.push(roads[i][0]);
      if (roads[i][1] == dest) {
        console.log("test");
        return stack;
      }
      dfs(roads[i][1], hub, dest, roads, stack);
    }
  }
}

solution("SEOUL", "DAEGU", "YEOSU", [
  ["ULSAN", "BUSAN"],
  ["DAEJEON", "ULSAN"],
  ["DAEJEON", "GWANGJU"],
  ["SEOUL", "DAEJEON"],
  ["SEOUL", "ULSAN"],
  ["DAEJEON", "DAEGU"],
  ["GWANGJU", "BUSAN"],
  ["DAEGU", "GWANGJU"],
  ["DAEGU", "BUSAN"],
  ["ULSAN", "DAEGU"],
  ["GWANGJU", "YEOSU"],
  ["BUSAN", "YEOSU"],
]);

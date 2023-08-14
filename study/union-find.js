function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

const list = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];
const parent = [0, 1, 2, 3, 4, 5, 6];

for (let i = 0; i < list.length; i++) {
  let a = list[i][0];
  let b = list[i][1];

  unionParent(parent, a, b);
}

for (let i = 1; i < parent.length; i++) {
  console.log(findParent(parent, i));
}

console.log(parent);

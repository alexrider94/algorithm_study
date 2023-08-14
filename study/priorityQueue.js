//priority Queue 구현하기
/*
다익스트라 알고리즘 최단거리 및 다른 알고리즘에 자주 쓰이는 자료구조
안에는 Heap 구조
peek O(1)
insert O(logn)
remove O(logn)

Heap은 트리구조 / Max Heap 과 Min Heap으로 나뉨.
Max Heap은 부모 노드는 항상 자식노드보다 크거나 같음.
Min Heap은 부모 노드는 항상 자식노드보다 값이 작아야한다.
Heap은 완전이진트리구조를 사용함.

왼쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 1
오른쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 2
부모 노드 인덱스 = (자식 노드 인덱스 - 1) / 2

 */

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor(childIndex - 1) / 2;

  peek = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count == 1) return (this.heap = []);
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  };

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;

      this.heap[index] = rootNode;
    }
  };
}

class priorityQueue extends Heap {
  constructor() {
    super();
  }
  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

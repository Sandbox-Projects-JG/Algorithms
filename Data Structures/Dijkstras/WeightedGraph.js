/*
Dijktras' Algorithm to find the shortest path possible to a vertex using a weighted graph.


*/

//this weighted graph uses a weight value along with the edges which can be used for determining the shortest path to a vertex
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    //priority queue to make it easy to find the next shortest path stored
    const nodes = new PriorityQueue();
    //this will store all the distances (weight) between nodes
    const distances = {};
    //this will store the previous node so that we can keep track of the "path" when needed
    const previous = {};
    //store the current node with the smallest distance (weight)
    let smallest;
    //this will return the entire path of nodes to use for shortest path
    let path = [];

    //loop through each vertex in the list to set a starting distance (weight). This is done once to 'build up the initial state'
    for (let vertex in this.adjacencyList) {
      //the starting vertex will have a weight of 0 since it points to itself
      if (vertex === start) {
        distances[vertex] = 0;
        //add the starting node to the queue
        nodes.enqueue(vertex, 0);
      } else {
        //within the distances object of that specific vertex we assign a value of infinity by default otherwise
        distances[vertex] = Infinity;
        //add the rest of the nodes to the queue
        nodes.enqueue(vertex, Infinity);
      }
      //also populate the previous object with each node with 'null' for the previous node since we haven't traversed yet
      previous[vertex] = null;
    }

    //while there is some node to visit, then we'll keep looping
    while (nodes.values.length) {
      //we get the first element's value within the priority queue which has the lowest distance (weight)
      smallest = nodes.dequeue().val;
      //if the smallest node is the ending node we are done
      if (smallest === finish) {
        //we'll loop through the previous object and create the sorted path and push it into the 'path' array
        while (previous[smallest]) {
          //we add in the last node which should be the node for 'finish'
          path.push(smallest);
          //we then find the previous node assigned to it and use that and repeat the process until we get back to the starting node
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        //we'll use a for loop to find all the objects within the array for smallest
        for (let neighbor in this.adjacencyList[smallest]) {
          //neighbor will return an index value
          //this will allow us to return the entire subarray (which contain the neighbors) for that smallest node
          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode);
          //calculate new distance to neighboring node by adding the distance of the smallest node with the neighbor node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          //we determine which node had the shortest distances and update our 'previous' object to keep track of it so we can find it later
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //the previous node of 'nextNode' was the 'smallest' node (how we got to next neighbor)
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log("Shortest path is", path.concat(smallest).reverse());
    return path.concat(smallest).reverse();
  }
}

//this priority class will help us to keep track which is the shortest path
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    //we add an element with the value and priority within an object
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    //removes the first element within the array
    return this.values.shift();
  }

  sort() {
    //we sort them to place a value with a lower priority value (like 1) at the beginning of the queue and larger values at the end
    //with the compare function if we subtract 'a' from 'b' and get less than 0 that means a will be added first and b second
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

////Priority Queue Example
var pqx = new PriorityQueue();
pqx.enqueue("A", 3); //this will appear at the end of our queue since the priority is a larger value
pqx.enqueue("B", 2);
pqx.enqueue("C", 1); //this will appear at the beginning of the queue (index of 0) since it has a small priority value
console.log(pqx.values);

var g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
console.log(g.adjacencyList);

g.addEdge("A", "B", 4); //edge going from A to B with a a weight of 4
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g.adjacencyList);

g.Dijkstra("A", "E");

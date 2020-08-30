//this will be an indirected graph which stores an adjacencyList
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //this adds a vertex to the graph with a key/value pair
  addVertex(vertex) {
    //If the current 'key' (vertex provided) doesn't exist then we create it and assign an empty array as the value
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  //this will create the connections between the vertices. Since this is non-direction we provide directions to and from
  addEdge(v1, v2) {
    //simple check to see if those vertices exist within the adjacency list
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return console.log("sorry those vertices are not valid");
    }
    //we add the vertices to each array since we have a non-directional graph
    //vertex one (v1) is connected to vertex 2 (v2) and vice versa
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //removes connections to other vertices. We remove two connections since this is a non-directional graph
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return console.log("sorry those vertices are not valid");
    }
    //we use filter to keep everything in the array except for verte2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    //we use a while loop to check if we still have a length with the list
    while (this.adjacencyList[vertex].length) {
      //store the value we want to remove
      const adVertex = this.adjacencyList[vertex].pop();
      console.log("removing", adVertex);
      this.removeEdge(vertex, adVertex);
    }
    console.log("removing", vertex);
    delete this.adjacencyList[vertex];
  }

  //Depth First Search using recursion with a helper function
  depthFirstRecursive(startVertex) {
    if (!this.adjacencyList[startVertex]) return undefined;
    //this will store all the vertices visited as well to return all of them in an array
    const result = [];
    //this object will keep track of which vertices we've already visited to avoid backtracking uneccessarily
    const visited = {};
    //store a reference to the adjacency list and make it easier (shorter) to utilize below
    const adList = this.adjacencyList;

    const dfs_helper = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      //we'll loop through the array to find all the connections 'neighbors' of that vertex
      adList[vertex].forEach((neighbor) => {
        //if the neighbor (a vertex) has not been visited already, then we recursively call the helper function to mark it as
        //visited then add it to the result array, otherwise we skip it
        if (!visited[neighbor]) {
          dfs_helper(neighbor);
        }
      });
      console.log(vertex + ": " + adList[vertex]);
    };
    //we initiate the helper function with a starting vertex
    dfs_helper(startVertex);
    console.log("DFS Recursive ", result);
    return result;
  }

  //dfs iterative is essentially the same as above but uses a while loop instead of recursion to traverse
  depthFirstIterative(start) {
    //the stack will keep track of each individual vertex
    let stack = [start];
    //returns all the vertices visited
    let result = [];
    //will determine if a vertex has been visited
    let visited = {};
    //stores the current vertex being checked
    let currentVertex;
    //set the starting vertex to be visited within the visited object
    visited[start] = true;

    //while we have something in the stack (vertices) then we'll loop through and find other vertices
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      //use a foreach loop again to traverse all the neighbors (connections) to other vertices
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        //if we have not visited that vertex then we'll set it to be visited
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log("DFS Iterative ", result);
    return result;
  }

  //bfs will be similar to the dfs iterative but use a queue like system (first in first out)
  breadthFirstTraversal(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      //shift grabs the first item in our queue for the 'first in first out' approach
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log("BFS Iterative ", result);
    return result;
  }
}

let g = new Graph();
g.addVertex("Tokyo"); //Creating a vertex creates the 'airport destinations'
g.addVertex("Aspen");
g.addVertex("San Francisco");
g.addVertex("Hong Kong");
g.addVertex("Dallas");
console.log(g.adjacencyList);
g.addEdge("Tokyo", "San Francisco"); //create connection from Tokyo <-> San Francisco
g.addEdge("Tokyo", "Hong Kong"); //create connection from Tokyo <-> Hong Kong
g.addEdge("Tokyo", "Dallas"); //create connection from Tokyo <-> Dallas
g.addEdge("Dallas", "Aspen"); //create connection from Dallas <-> Aspen
console.log(g.adjacencyList);
// g.removeEdge("Aspen", "Dallas"); //remove connection from Aspen to Dallas and also from Dallas to Aspen
// console.log(g.adjacencyList);
// g.removeVertex("Tokyo"); //removes connections associated with Tokyo then also removes Tokyo from the adjacency list altogether
// console.log(g.adjacencyList);
g.depthFirstRecursive("Dallas");
g.depthFirstIterative("Dallas");
g.breadthFirstTraversal("Dallas");

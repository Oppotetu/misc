
const airports = 'OSL DUB REY AAL BER MUN PAR MAN GEN SAR BAR'.split(' ');

const routes = [
  ['OSL', 'DUB'],
  ['BER', 'REY'],
  ['MAN', 'AAL'],
  ['GEN', 'BER'],
  ['DUB', 'MUN'],
  ['AAL', 'PAR'],
  ['BER', 'SAR'],
  ['PAR', 'BAR'],
  ['OSL', 'DUB']
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// breadth-first search

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === 'BAR') {
        console.log(`BFS found Barcelona`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

bfs('PAR')

// depth-first search

function dfs(start, visited = new Set()) {
  console.log(start);

  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === 'BAR') {
      console.log(`DFS found Barcelona`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs('PAR')
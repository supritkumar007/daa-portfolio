#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
using namespace std;

// Fenwick Tree for energy monitoring
class FenwickTree {
    vector<int> tree;
    int n;

public:
    FenwickTree(int size) : n(size) {
        tree.resize(n + 1, 0);
    }

    void update(int index, int value) {
        while (index <= n) {
            tree[index] += value;
            index += index & (-index);
        }
    }

    int query(int index) {
        int sum = 0;
        while (index > 0) {
            sum += tree[index];
            index -= index & (-index);
        }
        return sum;
    }
};

// BFS for workflow optimization
void bfs(const vector<vector<int>>& graph, int start) {
    vector<bool> visited(graph.size(), false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    cout << "Optimized Workflow (BFS): ";
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    cout << endl;
}

// Disjoint Set Union (Union-Find) for waste management
class UnionFind {
    vector<int> parent, rank;

public:
    UnionFind(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            parent[i] = i;
        }
    }

    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    void unionSets(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
};

// Priority Queue for predictive maintenance
void predictiveMaintenance() {
    priority_queue<pair<int, string>, vector<pair<int, string>>, greater<>> maintenanceQueue;

    // Add equipment and priority (lower number = higher priority)
    maintenanceQueue.push({3, "Ventilator"});
    maintenanceQueue.push({1, "MRI Machine"});
    maintenanceQueue.push({2, "X-Ray Machine"});

    cout << "Predictive Maintenance Schedule:" << endl;
    while (!maintenanceQueue.empty()) {
        auto task = maintenanceQueue.top();
        maintenanceQueue.pop();
        cout << "Priority: " << task.first << ", Equipment: " << task.second << endl;
    }
}

// Main workflow
int main() {
    // Step 1: Energy Monitoring
    int zones = 5;
    FenwickTree fenwickTree(zones);
    vector<int> energyUsage = {0, 10, 20, 15, 30, 25};

    // Build Fenwick Tree
    for (int i = 1; i <= zones; i++) {
        fenwickTree.update(i, energyUsage[i]);
    }
    cout << "Energy usage (zone 1 to 3): " << fenwickTree.query(3) << endl;

    // Step 2: Workflow Optimization
    vector<vector<int>> hospitalGraph = {
        {},          // Node 0 (no edges)
        {2, 3},      // Node 1 connects to 2, 3
        {4},         // Node 2 connects to 4
        {4},         // Node 3 connects to 4
        {5},         // Node 4 connects to 5
        {}           // Node 5 (no edges)
    };
    bfs(hospitalGraph, 1);

    // Step 3: Waste Management
    UnionFind unionFind(5);
    unionFind.unionSets(1, 2);
    unionFind.unionSets(3, 4);

    cout << "Waste Categories:" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << "Category " << i << " belongs to set " << unionFind.find(i) << endl;
    }

    // Step 4: Predictive Maintenance
    predictiveMaintenance();

    return 0;
}
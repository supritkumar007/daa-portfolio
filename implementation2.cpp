#include <iostream>
#include <queue>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

// Structure for Patient
struct Patient {
    int id;
    string name;
    int severity;  // Higher severity = Higher priority
    int waitingTime;
};

// Structure for Doctor
struct Doctor {
    int id;
    string name;
    int availableSlots;
};

// Priority Queue Comparator for Patient
struct ComparePatient {
    bool operator()(const Patient &p1, const Patient &p2) {
        return (p1.severity + p1.waitingTime) < (p2.severity + p2.waitingTime);
    }
};

// Function to match patients with doctors
void matchPatientsToDoctors(priority_queue<Patient, vector<Patient>, ComparePatient> &patientQueue,
                            vector<Doctor> &doctors) {
    unordered_map<int, vector<int>> doctorPatientMap;  // Doctor ID -> Patient IDs

    for (auto &doctor : doctors) {
        while (!patientQueue.empty() && doctor.availableSlots > 0) {
            Patient topPatient = patientQueue.top();
            patientQueue.pop();
            doctorPatientMap[doctor.id].push_back(topPatient.id);
            doctor.availableSlots--;
        }
    }

    // Display the scheduling results
    cout << "\nScheduling Results:\n";
    for (const auto &entry : doctorPatientMap) {
        cout << "Doctor ID " << entry.first << " is assigned to Patients: ";
        for (const auto &patientId : entry.second) {
            cout << patientId << " ";
        }
        cout << endl;
    }
}

int main() {
    // Input: Patients
    priority_queue<Patient, vector<Patient>, ComparePatient> patientQueue;
    patientQueue.push({1, "John", 8, 2});
    patientQueue.push({2, "Alice", 5, 3});
    patientQueue.push({3, "Bob", 9, 1});
    patientQueue.push({4, "Eve", 6, 2});

    // Input: Doctors
    vector<Doctor> doctors = {
        {1, "Dr. Smith", 2},
        {2, "Dr. Watson", 2}
    };

    // Perform Doctor-Patient Matching
    matchPatientsToDoctors(patientQueue, doctors);

    return 0;
}

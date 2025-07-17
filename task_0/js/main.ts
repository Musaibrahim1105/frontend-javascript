interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Musa",
  lastName: "Ibrahim",
  age: 24,
  location: "Abuja"
};

const student2: Student = {
  firstName: "Fatima",
  lastName: "Yahaya",
  age: 22,
  location: "Kano"
};

const studentsList: Student[] = [student1, student2];

// Create table and append to body
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

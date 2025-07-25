// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}


//TASK 6

// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return 'Working from home';
//   }

//   getCoffeeBreak(): string {
//     return 'Getting a coffee break';
//   }

//   workDirectorTasks(): string {
//     return 'Getting to director tasks';
//   }
// }

// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return 'Cannot work from home';
//   }

//   getCoffeeBreak(): string {
//     return 'Cannot have a break';
//   }

//   workTeacherTasks(): string {
//     return 'Getting to work';
//   }
// }

// Factory function
// function createEmployee(salary: number | string): Director | Teacher {
//   if (typeof salary === 'number' && salary < 500) {
//     return new Teacher();
//   } else {
//     return new Director();
//   }
// }

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases
console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Test
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History


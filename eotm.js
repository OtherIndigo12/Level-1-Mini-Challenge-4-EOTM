// Isaiah's Taco Truck - Employee of the Month Machine
// Written by Jacob, Jose and Jsaiah.
// It does not work. Nobody is proud of this.

const crew = [
  { name: "Jose",   tacosDropped: 4,   shiftsWorked: 12, warnings: 0 },
  { name: "Jacob",  tacosDropped: 7, shiftsWorked: 18, warnings: "" },
  { name: "Jsaiah", tacosDropped: 2,   shiftsWorked: 15, warnings: 2 }
];

function printRoster() {
  console.log("--- THE CREW ---");
  for (let i = 0; i < crew.length; i++) {
    console.log(crew[i].name);
  }
}

function totalTacosDropped() {
  let total = 0;
  for (let i = 0; i < crew.length; i++) {
    total = total + crew[i].tacosDropped;
  }
  console.log("Tacos dropped this month: " + total);
}

function printShifts() {
  console.log("--- SHIFTS ---");
  for (let i = 0; i < crew.length; i++) {
    console.log(crew[i].name + " worked " + crew[i].shiftsWorked + " shifts");
  }
}

function averageShifts() {
  let total = 0;
  for (let i = 0; i < crew.length; i++) {
    total = total + crew[i].shiftsWorked;
  }
  const avg = total / crew.length;
  return avg;
}

function countEligible() {
  let eligible = 0;
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].warnings === 0) {
      eligible = eligible + 1;
    }
  }
  console.log("Eligible for employee of the month: " + eligible);
}

printRoster();
totalTacosDropped();
printShifts();
console.log("Average shifts: " + averageShifts());
countEligible();

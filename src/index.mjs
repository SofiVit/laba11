const users = [
  {
    name: "Андрій",
    age: 21,
    city: "Київ",
    favoriteColors: ["синій", "жовтий", "зелений"],
    isStudent: true,
    grades: [95, 88, 100, 90],
  },
  {
    name: "Олена",
    age: 19,
    city: "Харків",
    favoriteColors: ["червоний", "рожевий"],
    isStudent: true,
    grades: [60, 75, 70, 80],
  },
  {
    name: "Микола",
    age: 25,
    city: "Львів",
    favoriteColors: ["чорний", "білий"],
    isStudent: false,
    grades: [45, 55, 50, 40],
  },
];

function greet(user) {
  console.log(`Привіт, ${user.name} з міста ${user.city}!`);
}

function average(grades) {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
}

function gradeAssessment(avg) {
  if (avg >= 90) return "Відмінно";
  else if (avg >= 70) return "Добре";
  else return "Задовільно";
}

function colorsToString(colors) {
  return colors.join(", ");
}

const square = (num) => num * num;
const double = (num) => num * 2;
const minusTen = (num) => num - 10;

console.log("=== АНКЕТУВАННЯ (FOR) ===");

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  greet(user);

  const avg = average(user.grades);
  const status = gradeAssessment(avg);
  const colors = colorsToString(user.favoriteColors);
  const retake = user.grades.some((g) => g < 60)
    ? "Потрібна перездача"
    : "Хвостів немає";

  console.log(`Місто: ${user.city}`);
  console.log(`Студент: ${user.isStudent}`);
  console.log(`Середній бал: ${avg.toFixed(2)}`);
  console.log(`Оцінка: ${status}`);
  console.log(`Кольори: ${colors}`);
  console.log(retake);
  console.log("---");
}

console.log("=== АНКЕТУВАННЯ (forEach) ===");

users.forEach((user) => {
  greet(user);

  const avg = average(user.grades);
  const status = gradeAssessment(avg);
  const colors = colorsToString(user.favoriteColors);
  const retake = user.grades.some((g) => g < 60)
    ? "Потрібна перездача"
    : "Хвостів немає";

  console.log(`Ім'я: ${user.name}`);
  console.log(`Місто: ${user.city}`);
  console.log(`Студент: ${user.isStudent}`);
  console.log(`Середній бал: ${avg.toFixed(2)}`);
  console.log(`Оцінка: ${status}`);
  console.log(`Улюблені кольори: ${colors}`);
  console.log(retake);
  console.log("=== Кінець ===");
});

console.log("=== Математика ===");
console.log("Квадрат 5:", square(5));
console.log("Подвоїти 10:", double(10));
console.log("10 мінус 10:", minusTen(10));

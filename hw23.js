let scores = [90, 85, 78, 92, 66, 100, 49, 76, 88, 95, 84, 74, 91, 62, 45, 59, 98, 82, 67, 72, 56, 53, 87, 68
];

for (let i = 0; i < scores.length - 1; i++) {
  for (let j = 0; j < scores.length - i - 1; j++) {
    console.log(`---Итерация ${i + 1}---`);
    console.log(`Сравниваем индексы: ${j} и ${j + 1}`);
    console.log(`Сравниваем пару ${scores[j]} и ${scores[j + 1]}`);
    console.log(`Работаем с массивом ${scores}`);

    if (scores[j] < scores[j + 1]) {
      let temp = scores[j];
      scores[j] = scores[j + 1];
      scores[j + 1] = temp;
    }
    console.log(`Новый массив: ${scores}`);
  }
}

console.log("Отсортированный массив " + scores);

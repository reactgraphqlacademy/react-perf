export const createRange = n => {
  const range = [];

  for (let i = 0; i < n; ++i) range.push(i);

  return range;
};

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const convertTens = n => {
  if (n < 10) return ones[n];

  if (n >= 10 && n < 20) return teens[n - 10];

  return tens[Math.floor(n / 10)] + " " + ones[n % 10];
};

const convertHundreds = n => {
  if (n > 99)
    return ones[Math.floor(n / 100)] + " hundred " + convertTens(n % 100);

  return convertTens(n);
};

const convertThousands = n => {
  if (n >= 1000)
    return (
      convertHundreds(Math.floor(n / 1000)) +
      " thousand " +
      convertHundreds(n % 1000)
    );

  return convertHundreds(n);
};

const convertMillions = n => {
  if (n >= 1000000)
    return (
      convertMillions(Math.floor(n / 1000000)) +
      " million " +
      convertThousands(n % 1000000)
    );

  return convertThousands(n);
};

export const convertNumberToEnglish = n =>
  n === 0 ? "zero" : convertMillions(n);

const users = [
  {
    name: "Richard",
    id: 1,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Frichard.jpg?alt=media"
  },
  {
    name: "Horacio",
    id: 2,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Fhoracio.jpg?alt=media"
  },
  {
    name: "Will",
    id: 3,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Fwill.jpg?alt=media"
  },
  {
    name: "Alex",
    id: 4,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Falex.jpg?alt=media"
  }
];

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createRandomUsers() {
  const random = Math.floor(Math.random() * users.length);
  return shuffle(users).slice(random);
}

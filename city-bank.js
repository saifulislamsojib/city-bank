// generate card number
const getCardNumber = (user = {}, number) => {
  const { district, currentYear, postNo, birthYear } = user;
  let cardNumber = district.toUpperCase().slice(0, 2);
  cardNumber = cardNumber + currentYear.toString().slice(0, 2);
  cardNumber = cardNumber + postNo.toString().slice(0, 2);
  cardNumber = cardNumber + birthYear;
  const serialNumber = "00000" + number;
  cardNumber = cardNumber + serialNumber;
  return cardNumber;
};

// distribute card
const cardDistribution = (users = []) => {
  const cardData = users.map((user, index) => {
    const cardNumber = getCardNumber(user, index + 1);
    const gift = +cardNumber.slice(-1) % 2 === 0 ? "R" : "W";
    const card = { cardNumber, gift, priority: user.priority };
    return card;
  });

  const sortedByCardNumber = cardData.sort((a, b) =>
    a.cardNumber.localeCompare(b.cardNumber)
  );
  const sortedByPriority = sortedByCardNumber.sort(
    (a, b) => a.priority - b.priority
  );

  return sortedByPriority;
};

const users = [
  {
    name: "Saiful Sojib",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 1,
  },
  {
    name: "Saiful Sojib",
    birthYear: 1999,
    currentYear: 2022,
    district: "Bhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Saiful Sojib",
    birthYear: 1999,
    currentYear: 2022,
    district: "Bhaka",
    postNo: 1200,
    priority: 4,
  },
];

// call card distribution
const result = cardDistribution(users);
console.log(result);

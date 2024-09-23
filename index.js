const calculateBtn = document.querySelector("#calculate-btn");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthday = document.querySelector("#birthday").value;
  const defaultDate = document.querySelector("#default-date").value;

  const startDate = new Date(birthday);
  const endDate = new Date(defaultDate);

  let yearDifference = endDate.getFullYear() - startDate.getFullYear();

  // Subtract a year if the month/day of the defaultDate is before the birthday in that year
  const isBeforeBirthday =
    endDate.getMonth() < startDate.getMonth() ||
    (endDate.getMonth() === startDate.getMonth() &&
      endDate.getDate() < startDate.getDate());

  if (isBeforeBirthday) {
    yearDifference--;
  }

  let eligibility = "";

  //Age group conditions
  if (
    yearDifference < 7 ||
    (yearDifference === 7 && startDate >= defaultDate)
  ) {
    eligibility = "eligible for U7";
  } else if (
    yearDifference < 9 ||
    (yearDifference === 9 && startDate >= defaultDate)
  ) {
    eligibility = "eligible for U9";
  } else if (
    yearDifference < 11 ||
    (yearDifference === 11 && startDate >= defaultDate)
  ) {
    eligibility = "eligible for U11";
  } else if (
    yearDifference < 13 ||
    (yearDifference === 13 && startDate >= defaultDate)
  ) {
    eligibility = "eligible for U13";
  } else if (
    yearDifference < 15 ||
    (yearDifference === 15 && startDate >= defaultDate)
  ) {
    eligibility = "eligible for U15";
  } else if (
    yearDifference < 19 ||
    (yearDifference === 19 && startDate >= defaultDate)
  ) {
    eligibility = "eligible for U19";
  } else {
    eligibility = "not eligible for any age group";
  }

  document.getElementById("birthday").value = "";

  if (eligibility) {
    document.querySelector(
      "#result-text"
    ).innerHTML = `The pupil is <strong><u>${eligibility}</u></strong>.`;
  } else {
    document.querySelector(
      "#result-text"
    ).textContent = `The pupil is ${eligibility}.`;
  }
});

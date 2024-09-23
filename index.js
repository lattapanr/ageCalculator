const calculateBtn = document.querySelector("#calculate-btn");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthDate = document.querySelector("#birthday").value;
  const defaultDate = document.querySelector("#default-date").value;

  // Convert the string input values to Date objects
  const startDate = new Date(birthDate);
  const endDate = new Date(defaultDate);

  // Calculate the difference in years, months, and days
  let yearDifference = endDate.getFullYear() - startDate.getFullYear();
  let monthDifference = endDate.getMonth() - startDate.getMonth();
  let dayDifference = endDate.getDate() - startDate.getDate();

  // Adjust if the day or month is negative
  if (dayDifference < 0) {
    monthDifference--;
    dayDifference += new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    ).getDate();
  }
  if (monthDifference < 0) {
    yearDifference--;
    monthDifference += 12;
  }

  // Eligibility check
  let eligibility = "";

  if (yearDifference < 7 || (yearDifference === 7 && startDate >= endDate)) {
    eligibility = "eligible for U7";
  } else if (
    yearDifference < 9 ||
    (yearDifference === 9 && startDate >= endDate)
  ) {
    eligibility = "eligible for U9";
  } else if (
    yearDifference < 11 ||
    (yearDifference === 11 && startDate >= endDate)
  ) {
    eligibility = "eligible for U11";
  } else if (
    yearDifference < 13 ||
    (yearDifference === 13 && startDate >= endDate)
  ) {
    eligibility = "eligible for U13";
  } else if (
    yearDifference < 15 ||
    (yearDifference === 15 && startDate >= endDate)
  ) {
    eligibility = "eligible for U15";
  } else if (
    yearDifference < 19 ||
    (yearDifference === 19 && startDate >= endDate)
  ) {
    eligibility = "eligible for U19";
  } else {
    eligibility = "not eligible for any age group";
  }

  // Clear input fields after calculation
  document.getElementById("birthday").value = "";

  // Display result
  if (eligibility) {
    document.querySelector(
      "#result-text"
    ).innerHTML = `On 01/08/2014, the student is ${yearDifference} years, ${monthDifference} months, ${dayDifference} days old and is <strong><u>${eligibility}</u></strong>.`;
  }
});

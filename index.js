const calculateBtn = document.querySelector("#calculate-btn");

function formatDate(date) {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

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

  const formattedDate = formatDate(endDate);
  // Display result
  if (eligibility) {
    document.querySelector(
      "#result-text"
    ).innerHTML = `On ${formattedDate}, the student's age is ${yearDifference} ${
      yearDifference > 1 ? "years" : "year"
    }, ${monthDifference} ${
      monthDifference > 1 ? "months" : "month"
    }, ${dayDifference} ${
      dayDifference > 1 ? "days" : "day"
    } old and is <strong><u>${eligibility}</u></strong>.`;
  }
});

const btn = document.querySelectorAll(".btn");

function main() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  console.log("main");
}
const dataDoughnut = {
  labels: ["JavaScript", "Python", "Ruby"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "#112D4E",
        "#3F72AF",
        "#DBE2EF",
      ],
      hoverOffset: 4,
    },
  ],
};

const configDoughnut = {
  type: "doughnut",
  data: dataDoughnut,
  options: {},
};

var chartBar = new Chart(
  document.getElementById("chartDoughnut"),
  configDoughnut
);

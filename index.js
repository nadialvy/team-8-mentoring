const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["US", "UK", "Germany", "Italy", "Indonesia", "Brazil"],
    datasets: [
      {
        label: "# of Votes",
        data: [654725, 635362, 123456, 900037, 534622, 343434],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

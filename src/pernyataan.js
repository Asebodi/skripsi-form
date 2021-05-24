const pernyataan = [
  {
    title: "Effort Expectancy",
    titleInd: "Ekspektasi Kemudahan",
    id: "EE",

    items: [
      {
        itemId: "EE1",
        isNegative: false,
        question:
          "Saya merasa bahwa aplikasi ini sangat bagus untuk digunakan.",
      },
      {
        itemId: "EE2",
        isNegative: false,
        question:
          "Aplikasi Lapor Sleman sangat buruk dan tidak layak untuk digunakan.",
      },
      {
        itemId: "EE3",
        isNegative: true,
        question:
          "Saya suka membuka aplikasi Lapor Sleman untuk digunakan ketika sedang sange.",
      },
    ],
  },

  {
    title: "Performance Expectancy",
    titleInd: "Ekspektasi Ke-anuan",
    id: "PE",

    items: [
      {
        itemId: "PE1",
        isNegative: false,
        question: "Aplikasi ini sampah banget kayak tai anjing tai.",
      },
      {
        itemId: "PE2",
        isNegative: false,
        question:
          "Aplikasi Lapor Sleman dapat memudahkan proses pembuatan pengaduan.",
      },
      {
        itemId: "PE3",
        isNegative: true,
        question:
          "Saya merasa tidak nyaman ketika menggunakan aplikasi Lapor Sleman.",
      },
    ],
  },
];

export default pernyataan;

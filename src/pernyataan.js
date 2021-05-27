const pernyataan = [
  {
    title: "Effort Expectancy",
    titleInd: "Ekspektasi Kemudahan",
    id: "EE",
    color: "bg-red-400",

    items: [
      {
        itemId: "EE1",
        isNegative: true,
        question: "Aplikasi Lapor Sleman mudah dipelajari.",
      },
      {
        itemId: "EE2",
        isNegative: false,
        question:
          "Saya merasa mudah beradaptasi dalam menggunakan aplikasi Lapor Sleman untuk melakukan pengaduan.",
      },
      {
        itemId: "EE3",
        isNegative: true,
        question:
          "Bagi saya aplikasi Lapor Sleman tidak rumit untuk digunakan.",
      },
      {
        itemId: "EE4",
        isNegative: false,
        question:
          "Saya tidak merasa bingung ketika menggunakan aplikasi Lapor Sleman.",
      },
    ],
  },

  {
    title: "Performance Expectancy",
    titleInd: "Ekspektasi Manfaat",
    id: "PE",
    color: "bg-green-500",

    items: [
      {
        itemId: "PE1",
        isNegative: true,
        question: "Aplikasi Lapor Sleman dapat mempercepat proses pengaduan.",
      },
      {
        itemId: "PE2",
        isNegative: false,
        question: "Aplikasi Lapor Sleman dapat memudahkan proses pengaduan.",
      },
      {
        itemId: "PE3",
        isNegative: false,
        question: "Aplikasi Lapor Sleman sangat bermanfaat bagi saya.",
      },
    ],
  },
];

export default pernyataan;

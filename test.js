fetch(
  "https://script.google.com/macros/s/AKfycbwNQckWtUJ08ycrH3FCH4eslU_LG9cMKSf49ABAtX8KQ0rVcXb0vFsnLrmxAfESt1pqaA/exec",
  {
    method: "POST",
    body: JSON.stringify({
      category: "食費",
      amount: 1200,
      memo: "ランチ",
    }),
  },
)
  .then((response) => response.json())
  .then((data) => alert(data.message));

const response = await fetch(
  "https://script.google.com/macros/s/AKfycbwNQckWtUJ08ycrH3FCH4eslU_LG9cMKSf49ABAtX8KQ0rVcXb0vFsnLrmxAfESt1pqaA/exec",
  {
    method: "POST",
    mode: "no-cors", // これを追加するとエラーが出にくくなる場合があります（ただしレスポンスの中身は読めなくなります）
    headers: {
      "Content-Type": "text/plain", // GASに送る際は application/json より text/plain の方が安定することがあります
    },
    body: JSON.stringify(data),
  },
);

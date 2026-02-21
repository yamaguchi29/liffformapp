// JavaScriptのfetch部分を少し補強
const response = await fetch(GAS_URL, {
  method: "POST",
  mode: "no-cors", // これを追加するとエラーが出にくくなる場合があります（ただしレスポンスの中身は読めなくなります）
  headers: {
    "Content-Type": "text/plain", // GASに送る際は application/json より text/plain の方が安定することがあります
  },
  body: JSON.stringify(data),
});

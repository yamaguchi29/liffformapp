// --- 設定項目 ---
const LIFF_ID = "2009133124-tG6paVoL";
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbwNQckWtUJ08ycrH3FCH4eslU_LG9cMKSf49ABAtX8KQ0rVcXb0vFsnLrmxAfESt1pqaA/exec";

async function initLiff() {
  try {
    await liff.init({ liffId: LIFF_ID });
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  } catch (error) {
    console.error("LIFF初期化失敗", error);
  }
}

document.getElementById("submit-btn").addEventListener("click", async () => {
  const btn = document.getElementById("submit-btn");
  const data = {
    category: document.getElementById("category").value,
    amount: document.getElementById("amount").value,
    memo: document.getElementById("memo").value,
  };

  if (!data.amount) {
    alert("金額を入力してください");
    return;
  }

  // 二重送信防止
  btn.disabled = true;
  btn.innerText = "送信中...";

  try {
    // mode: 'no-cors' で送信
    await fetch(GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(data),
    });

    // 通信が完了したら（no-corsなので成功とみなす）
    alert("スプレッドシートに保存しました！");
    liff.closeWindow(); // LINE画面を閉じる
    return; // ここで処理を終了させる
  } catch (error) {
    console.error(error);
    alert("送信に失敗しました。");
  } finally {
    btn.disabled = false;
    btn.innerText = "スプレッドシートに保存";
  }
});

initLiff();

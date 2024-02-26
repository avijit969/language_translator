const btn = document.getElementById("translateBtn");
btn.addEventListener("click", async () => {
  const inputText = document.getElementById("inputText").value;
  const sourceLanguage = document.getElementById("sourceLanguage").value;
  const targetLanguage = document.getElementById("targetLanguage").value;
  const result = document.getElementById("outputText");

  const url = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${sourceLanguage}|${targetLanguage}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const translateddata = data["matches"][0].translation;
    result.innerText = translateddata;
  } catch (error) {
    console.error(error)
  }
});

document.getElementById('sourceText').addEventListener('input', translateText);

async function translateText() {
    const inputText = document.getElementById('sourceText').value;
    const inputLanguage = document.getElementById('sourceLang').value;
    const outputLanguage = document.getElementById('targetLang').value;

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
        inputText
      )}`;

      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        document.getElementById('translatedText').innerText = json[0].map((item) => item[0]).join("");
      })
      .catch((error) => {
        console.log(error);
      });

    const result = await response.json();
}

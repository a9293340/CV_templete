let currentLanguage = "en";

function loadLanguageFile(language) {
	fetch(`./i18n/${language}.json`)
		.then((response) => response.json())
		.then((data) => {
			// 更新页面上的文本
			const elements = document.querySelectorAll("[data-i18n]");
			elements.forEach((element) => {
				const key = element.getAttribute("data-i18n");
				if (data[key]) {
					element.textContent = data[key];
				}
			});
		})
		.catch((error) => console.error("Error loading language file", error));
}

// init
loadLanguageFile(currentLanguage);

function changeLanguage(language) {
	currentLanguage = language;
	loadLanguageFile(language);
}

const languageButtons = document.querySelectorAll(".language-button");
languageButtons.forEach((button) => {
	button.addEventListener("click", () => {
		changeLanguage(button.getAttribute("data-language"));
	});
});

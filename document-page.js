// Автор: Yegor Lonskiy. Публичная страница читает только тему системы.
const media=matchMedia("(prefers-color-scheme: dark)");function appearance(){document.documentElement.dataset.theme=media.matches?"dark":"light";}appearance();media.addEventListener("change",appearance);

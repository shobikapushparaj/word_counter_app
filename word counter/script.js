document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const wordCountDisplay = document.getElementById('word-count');

    textInput.addEventListener('input', updateWordCount);

    function updateWordCount() {
        const text = textInput.value;
        const wordCount = countWords(text);
        wordCountDisplay.textContent = `Word count: ${wordCount}`;
    }

    function countWords(text) {
        // Remove leading and trailing whitespaces
        const trimmedText = text.trim();

        // Split the text into words using one or more spaces as the separator
        const words = trimmedText.split(/\s+/);

        // Filter out empty strings from the array
        const nonEmptyWords = words.filter(word => word !== '');

        return nonEmptyWords.length;
    }
});

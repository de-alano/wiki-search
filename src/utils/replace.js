const replace = (type, newPhrase) => {
    const singlePattern = /<span class="searchmatch">(.*?)<\/span>/;
    const multiplePattern = /<span class="searchmatch">(.*?)<\/span>/gi;
    const targetElement = document.querySelector('.result-item');
    const targetElements = document.querySelectorAll('.result-item');
    const newElement = `<span class="searchmatch">${newPhrase}</span>`;

    switch (type) {
        case 'single':
            targetElement.innerHTML = targetElement.innerHTML.replace(
                singlePattern,
                newElement,
                1
            );
            break;

        case 'multiple':
            targetElements.forEach(el => {
                el.innerHTML = el.innerHTML.replace(
                    multiplePattern,
                    newElement
                );
            });
            break;

        default:
            return null;
    }
};

export default replace;
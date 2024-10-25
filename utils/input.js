import readlineSync from 'readline-sync';

function input(promptText) {
    return readlineSync.question(promptText);
}

export { input };
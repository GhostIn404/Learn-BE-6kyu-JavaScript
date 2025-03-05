function isPangram(string){
    const alphabet = 'abcdefghiklmnopqrstuvwxyz'
    string = string.toLowerCase();

    for (let char of alphabet) {
        if (!string.includes(char))
            return false;
    }

    return true
}
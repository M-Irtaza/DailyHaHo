function isDisplacementZero(str: string){
    let vertical = 0;
    let horizontal = 0;
    for(const char of str){
        const lowerChar = char.toLocaleLowerCase();
        if(lowerChar === 'u')
            vertical++;
        else if(lowerChar === 'd')
            vertical--;
        else if(lowerChar === 'r')
            horizontal++;
        else if(lowerChar === 'l')
            horizontal--;
        else{
            return "Invalid String";
        }
    }

    return vertical == 0 && horizontal == 0;
}
console.log(isDisplacementZero("LR"));
console.log(isDisplacementZero("URURD"));
console.log(isDisplacementZero("RUULLDRD"));
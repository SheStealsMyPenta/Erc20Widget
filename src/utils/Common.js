export function stringToAscii(str) {
    let asciiArray = [];
    asciiArray.push(0);
    for (let i = 0; i < str.length; i++) {
        asciiArray.push(str.charCodeAt(i));
    }
    asciiArray.push(str.length);
    console.log(asciiArray,"asy");
    return asciiArray;
}
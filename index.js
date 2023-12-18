// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    let catsArr = [...cats, name]
    return catsArr;
}
function prependCat(name) {
    let catsCopy = [name, ...cats]
    return catsCopy;
}
function removeLastCat() {
    //let catsLast = cats.slice(0, cats.length - 1)
    //return catsLast;
    return cats.slice(0, -1)
}
function removeFirstCat() {
    return cats.slice(1)
}


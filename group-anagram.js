function groupAnagram(array) {
    let finalArray = [];

    let rearranged = array.map(element => {
        return [...element].sort().join("");
    });

    let uniqueArray = [...new Set(rearranged)];

    uniqueArray.forEach(word => {
        let chunk = array.filter(char => word === [...char].sort().join(""));
        finalArray.push(chunk.sort());
        console.log("Sorted chunk", chunk);
    });
    console.log(finalArray);
    return finalArray;
}

groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

function wordSearch(grid, word){
    console.log(grid)
    let found = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if ((grid[i][j] === word[0])) {
                found = found || dfs(grid, i, j, word, 0, new Set([i, j]));
            }
        }
    }
    return found;
}

function dfs(grid, i, j, word, pointer, seen) {
    if(pointer === word.length - 1) {
        return true
    }
    if (grid[i][j] !== word[pointer]) {
        return false;
    }
    let adjusent = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let numRows = grid.length;
    let numColls = grid[0].length;
    let found = false;
    for (let direction of adjusent) {
        let row = i + direction[0];
        let col = j + direction[1];
        if(row >= 0 && row < numRows && col >= 0 && col < numColls && !seen.has([row, col]) && grid[i][j] === word[pointer]) {
            seen.add([row, col]);
            if (dfs(grid, row, col, word, pointer++, new Set(seen))) {
                return  true
            }
        }
    }
    return found
}

console.log(wordSearch([["J", "D", "E", "I", "Y"], ["G", "I", "L", "M", "O"], ["Z", "A", "I", "E", "O"], ["L", "T", "B", "S", "N"], ["S", "I", "T", "C", "C"]] , "AIM"))

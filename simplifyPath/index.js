/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let dirs = path.split("/");
    console.log("dirs", dirs)
    let res = [];
    for(let dir of dirs) {
        if(dir === "" || dir === ".") {
            continue
        }
        if(dir === "..") {
            res.pop();
        } else {
            res.push(dir);
        }
    }
    return "/" + res.join("/")
};
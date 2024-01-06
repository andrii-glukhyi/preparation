
var RandomizedSet = function() {
    this.values = new Map();
    this.data = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let present = this.values.has(val);
    if(!present) {
        this.values.set(val, this.data.length);
        this.data.push(val);
    }
    return !present;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let present = this.values.has(val);
    if(present) {
        let position = this.values.get(val)
        let last = this.data[this.data.length - 1];
        this.values.set(last, position);
        this.data[position] = this.data[this.data.length - 1];
        this.values.delete(val);
        this.data.pop();
    }
    return present;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let rand = Math.floor(Math.random() * this.data.length);
    return this.data[rand];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
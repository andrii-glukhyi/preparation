export function findRepeatedSequences(s, k) {
    let sequences = {};
    for(let i = 0; i < s.length - k; i++) {
        let sl = s.slice(i, i+k);
        // console.log("slice", sl);
        if (!sequences[sl]) {
            sequences[sl] = 0;
        }
        sequences[sl] = sequences[sl] + 1;
    }
    console.log(sequences, "maps");
    let final = [];
    Object.keys(sequences).forEach(k => {
        if(sequences[k] > 1) {
            final.push(k)
        }
    })
    return final;
}

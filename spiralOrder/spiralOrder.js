var spiralOrder = function(matrix) {
    let flatened = new Array(matrix.length * matrix[0].length);
    let postion = 0
    let l=0;
    let r=matrix[0].length-1;
    let t=0;
    let b=matrix.length-1;

    while(l<=r && t<=b){

        for(let i=l;i<=r;i++){
            console.log(matrix[t][i])
            flatened[postion] = matrix[t][i];
            postion++
        }

        t++;

        for(let i=t;i<=b;i++){
            console.log(matrix[t][i])
            flatened[postion] = matrix[i][r];
            postion++
        }

        r--;

        if (!(l <=r && t<=b)){
            break;
        }
        for(let i=r;i>=l;i--){
            flatened[postion] =  matrix[b][i];
            postion++
        }

        b--;

        for(let i=b;i>=t;i--){
            flatened[postion] = matrix[i][l];
            postion++
        }

        l++;
    }


    return flatened;

};


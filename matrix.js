const N =3 

function multiply(mat1, mat2, mat3)
{
    let i,j,k;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
        res[i][j] = 0;
        for (k = 0; k < N; k++)
            res[i][j] += mat1[i][k] * mat2[k][j];
        }
    }
}

let res = new Array(N);
for (let k = 0; k < N; k++)
    res[k] = new Array(N);

let mat1 = [ [1,1,1],
             [2,2,2],
             [3,3,3] ];

let mat2 = [ [1,1,1],
             [2,2,2],
             [3,3,3] ];             

multiply(mat1, mat2, res);

console.log(res)
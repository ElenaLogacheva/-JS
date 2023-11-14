function compareArrays(arr1, arr2) {
    let compare 
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[i][j]) {
            compare = true;
            } 
            else {
            compare = false;
            }
        }
    }
    return compare;
  }

 console.log(compareArrays([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]))
 console.log(compareArrays([[1, 2], [4]], [[1], [4, 5]]))
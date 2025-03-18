function add (a: number, b: number) {
  return a + b;
}

function min (a: number, b: number, c: number) {
    if (a == null)
        a = Number.MAX_VALUE;
    if (b == null)
        b = Number.MAX_VALUE;
    if (c == null)
        c = Number.MAX_VALUE;

  return Math.min(a, b, c);
}

function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let mergedArray: number[] = [];
    let i = 0, j = 0, k = 0;

    for (let l = 0; l < collection_1.length + collection_2.length + collection_3.length; l++) {

        let minNum = min(collection_1[i], collection_2[j], collection_3[collection_3.length-1-k]);

        //console.log(`col 1 : ${collection_1[i]} col 2 : ${collection_2[j]} col 3 : ${collection_3[collection_3.length-1-k]} min : ${minNum}`);
        mergedArray.push(minNum);
        if (minNum === collection_1[i]) {
            i++;
        } else if (minNum === collection_2[j]) {
            j++;
        } else {
            k++;
        }
    }


    return mergedArray;
}

    // var collection_1 = [1, 3, 5, 7];
    // var collection_2 = [2, 4, 6, 8];
    // var collection_3 = [9, 7, 5, 3];
  
    // var result = merge(collection_1, collection_2, collection_3);
    // console.log(result+"\n\n")

    // collection_1 = [1, 2, 2, 3];
    // collection_2 = [2, 3, 4];
    // collection_3 = [5, 3, 1];

    // result = merge(collection_1, collection_2, collection_3);
    // console.log(result+"\n\n")
    

export { merge };
export { add };
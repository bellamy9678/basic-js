module.exports = function transform(arr) {
    
    if ( !Array.isArray(arr) ) {
        throw new Error('It is not an Array');
    }

    let output = [];
    const   DIS_NEXT = "--discard-next",
            DIS_PREV = "--discard-prev",
            DUB_NEXT = "--double-next",
            DUB_PREV = "--double-prev";

    for (let i = 0; i < arr.length; i++) {

        switch(arr[i]) {

            case DIS_NEXT: {
                i++;
                break;
            }

            case DIS_PREV: {
                if (arr[i-1] != undefined) {
                    output.pop();
                    break;
                } else {
                    break;
                }
            }

            case DUB_NEXT: {
                if (arr[i+1] != undefined) {
                    output.push(arr[i+1]);
                    break;
                } else {
                    break;
                }
            }

            case DUB_PREV: {
                if (arr[i-1] != undefined) {
                    output.push(arr[i-1]);
                    break;
                } else {
                    break;
                }
            }
            
            default: {
                output.push(arr[i]);
            }

        }
    }

    return output;
    
};
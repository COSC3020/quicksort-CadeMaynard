function quicksort(array) {
    /* New Idea: Everything is a pivot!*/
    for(i = 0; i < array.length; i++){
        pivot = i;
        for(b = 0; b < array.length; b++){
            if(b != pivot){
                if(array[b] < array[pivot] && b > pivot){
                    temp = array[b];
                    for(c = b; c >= pivot; c--)
                            array[c] = array[c - 1]
                    array[pivot] = temp;
                } else if(array[b] > array[pivot] && b < pivot){
                    temp = array[pivot];
                    for(c = pivot; c <= b; c++)
                            array[c] = array[c + 1]
                    array[pivot] = temp;
                }                                       
            }
        }
    }
    return array;
}

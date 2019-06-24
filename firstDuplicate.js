function FirstDuplicate(array){ /*code here*/
    
    var dups = [];
    var minIndex = [];
    var track = 0;
    
    for(i = 0; i < array.length; i++){
        for(j = (i+1); j < array.length; j++){
            if(array[i] === array[j]){
                dups[track] = array[j];
                minIndex[track] = j - i;     // difference between the number and duplicate
                track++;
            }
            else{
                continue;
            }
        }
    }
    
    if(dups.length > 0){
        return dups[minIndex.indexOf(Math.min(...minIndex))];  // messy but checks the smallest index difference and return the duplicate
    }
    
    else{
        return -1;
    }
}

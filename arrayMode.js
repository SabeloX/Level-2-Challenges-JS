function arrayMode(array){ /*code here*/
    
    var modes = [];   // one or more modes
    var freq = [];    // number of times occuring
    var count = 0;
    var max = 0;
    
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                count++;
            }
        }
        modes[i] = array[i];
        freq[i] = count;
        count = 0;
    }
    
    for(k = 0; k < freq.length; k++){
        for(m = 0; m < freq.length; m++){
            if(freq[k] > freq[m]){
                max = freq[k];
            }
        }
    }
    
    return modes[freq.indexOf(max)];
}

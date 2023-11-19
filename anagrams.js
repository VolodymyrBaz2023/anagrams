function CreateAnagrams(str) {
// check if length is even 
  if( str.length % 2 !== 0 ) {return -1;}

// split string into 2 substrings
  const mid = Math.floor( str.length/2 );
  const str1 = str.substring(0,mid);
  const str2 = str.substring(mid);

//create a frequency map for each substring 
  const freqMap1 = {};
  const freqMap2 = {};

//update frequency map for each substring
  for ( const char of str1 ) {
    freqMap1[char] = ( freqMap1[char] || 0 ) + 1;
  }
  for ( const char of str2 ) {
    freqMap2[char] = ( freqMap2[char] || 0 ) + 1;
  }
 
//calculate number characters
 let changes = 0;
//compare frequency map and count differences
  for ( const char in freqMap1 ) {
     if ( !freqMap2[char] ) {
    changes += freqMap1[char];
      } else {
    changes += Math.abs(freqMap1[char]- freqMap2[char]);  
    }
  }
  return changes;
}
//output result
console.log(CreateAnagrams(readline()));

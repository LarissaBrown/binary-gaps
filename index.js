

const binary = [];

function solution(num) {
   
   for(let i = num; i >= 0; i--) {

        if (num % 2 === 0) {
             binary.push(0);
             num = parseInt(num)/ 2   
            
        }else if (num % 2 === 1){
             binary.push(1);
             num = parseInt(num - 1) / 2
        }
        
    }  

    const reverseBinary = binary.reverse()

    const strBinary = reverseBinary.join("")

    const binaryGaps = strBinary.split("1")

    const binaryGapsSlice = []

    

    console.log(reverseBinary)
    console.log(strBinary)
   
    function  binaryGapEnds(arr) {
     if (reverseBinary.pop() === 0 && reverseBinary.shift() === 0 ) {
         console.log("index 0 and index -1 have zero")
         let binaryGapsSlice = binaryGaps.slice(1, -1)
               if (binaryGapsSlice = []) {
               console.log(0)
               } else {
                     console.log(binaryGapsSlice)
                     const longestGap = binaryGapsSlice.reduce(function(a,b) {
                    return a.length > b.length ? a : b} )
                    console.log(longestGap.length)}
    }else if (reverseBinary.pop() === 1 && reverseBinary.shift() === 0) {
         console.log("index 0 has a zero")
         let binaryGapsSlice = binaryGaps.slice(1, -2 ) 
               if (binaryGapsSlice = []) {
                    console.log(0)
               } else {
                     const longestGap = binaryGapsSlice.reduce(function(a,b) {
                    return a.length > b.length ? a : b} )
                    console.log(longestGap.length)}
    }else if (reverseBinary.shift() === 1 && reverseBinary.pop() === 0) {
         console.log("index -1 has a zero")
         let binaryGapsSlice = binaryGaps.slice(-1, 1)
         const longestGap = binaryGapsSlice.reduce(function(a,b) {
               return a.length > b.length ? a : b} )
               console.log(longestGap.length)
    }else if (reverseBinary.pop() === 1 && reverseBinary.shift() === 1 ) { 
          console.log("index 0 and index -1 have a 1");
          let binaryGapsSlice = binaryGaps
          const longestGap = binaryGapsSlice.reduce(function(a,b) {
               return a.length > b.length ? a : b} )
               console.log(longestGap.length)
} 

    
    
}
   
console.log(binaryGapsSlice)
console.log(binaryGapEnds())
 
}
solution(12)




module.exports = function toReadable (number) {
  let arr1 = ["zero", "one", "two", "three", "four", "five",
   "six", "seven", "eight", "nine", "ten", 
   "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

   let arr2 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

   let firstnumb;

   if(number.toString.length <= 2){
    firstnumb = arr1[number];
      if(firstnumb != undefined){
        return firstnumb
      }
      if(firstnumb == undefined) {
        let x;
        let y;
        x = Math.floor(number / 10);
        y = number % 10;
          if (y === 0){
            return arr2[x]
          } else if (arr2[x] == undefined){
            let z;
            let p;
            let o;
            let k;
            z = Math.floor(number / 100);
            k = (number % 100);
            p = Math.floor((number % 100) / 10); 
            o = (number % 10);
             if(k <= 10){
              return `${arr1[z]} hundred ${arr1[k]}`
             } else if(k > 10 && k< 20){
              return `${arr1[z]} hundred ${arr1[k]}`
             } 

            // if(k == 0){
            //     return `${arr1[z]} hundred`;
            //   }  else
            // if(k === arr1[k]){
            //     return `${arr1[z]} hundredse ${arr1[k]}`
            //   }
            return `${arr1[z]} hundred ${arr2[p]} ${arr1[o]}`;
          } else {
            return `${arr2[x]} ${arr1[y]}`
          }
      }
   }
}

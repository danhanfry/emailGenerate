
let caracters = ['', '.']
let name = 'santi roman castelo'
let emails = getEmails(name, caracters)

console.log( emails )

function getEmails(name, caracterArray){

   let nameSplit = name.split(' ')

   let nameConvination = getBinari(nameSplit.length)

   let nameInitials = getNameInital(nameSplit, nameConvination)

   let nameArray = getNamesArray(caracterArray, nameInitials)

   nameArray = nameFilter(nameArray)

   nameArray = nameString(nameArray)

   return nameArray

}

function nameString(nameArray){

   let arrayMemo = nameArray.map( function(arr){

      return arr.join('').toLowerCase()

   })

   return arrayUnique(arrayMemo)

}

function nameFilter(nameArray){

   let arrayMemo = []
   nameArray.forEach(function(arr){

      let crExternals = isLetter(arr[0]) && isLetter(arr[arr.length-1])

      let suma = 0
      arr.forEach( function(item){
         if(!isLetter(item)){ suma++}
      })

      if( crExternals && suma < 2){
         arrayMemo.push(arr)
      }

   })

   return arrayMemo

}

function getNamesArray(caracterArray, nameInitials){

   let arrayMemo = []
   nameInitials.forEach( function(item){

      let domainsCaracters = caracterArray.concat(item)
      let cmb = Combinatorics.permutationCombination(domainsCaracters)

      arrayMemo = arrayMemo.concat( cmb.toArray() )

   })

   return arrayMemo

}

function getNameInital(name, nameConvination){

   let arrayM = []
   nameConvination.forEach( function(num){

      let numBinariSplit = num.split('')

      let ArrayMemo = []
      numBinariSplit.forEach( function(item, i){

         if(item == 1){
            ArrayMemo.push( name[i].split('')[0] )
         }else{
            ArrayMemo.push( name[i] )
         }

      })

      arrayM.push(ArrayMemo)

   })

   return arrayM

}

function getBinari(leng){

   let arrayBin = []

   let bin = 0
   for(let i = 0; i < Math.pow(2, leng); i++){

      bin = (i).toString(2)
      let numDiff = leng - bin.length
      while(leng > bin.length){ bin = '0' + bin }

      arrayBin.push(bin)
   }

   return arrayBin

   function decbin(dec,length){
     var out = "";
     while(length--)
       out += (dec >> length ) & 1;
     return out;
   }

}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function arrayUnique(a) {
    return a.reduce(function(p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
    }, []);
};

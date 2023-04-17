//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
    if (str1.length !== str2.length) {
        return false;
      };
      
    const arr1 = str1.toLowerCase().split('');
    const arr2 = str2.toLowerCase().split('');  
    
      if(arr2.every((el, i) => arr2.includes(arr1[i]))) {
        return true
      } else {
        return false
      }   
  
  }

  module.exports = isAnagrams
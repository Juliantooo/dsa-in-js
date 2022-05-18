function reverse(string){
    // add whatever parameters you deem necessary - good luck!
    if(string.length===1) return string[0]
    const char = string.slice(0,-1)
    return string[string.length-1]+reverse(char)
  }
  
  console.log(reverse('awesome')) // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'
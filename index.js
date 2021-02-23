class Formatter {

  static capitalize(string){
    let a = string[0]
    let x = string[0].toUpperCase()
    return string.replace(a, x)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }

}
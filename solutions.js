/******************** TEST 1 ********************/
function f1(a, b) {
  var index = a.length;

  while(index--) {
    var position = b.indexOf(a[index]);
    if(position > -1) {
	  a = a.slice(0, index) + a.slice(index+1, a.length);
      b = b.slice(0, position) + b.slice(position+1, b.length);
    }
  }
  return a.length + b.length;
}


/******************** TEST 2 ********************/
function f2(a, b) {
  let result = [];
  let tempA = [...a];
  let position = 0;
  b.map(value => {
    let exist = true;
    let occurs = 0;

    while(exist) {
      let position = tempA.indexOf(value);
      if(position > -1) {
        occurs++;
        tempA.splice(position, 1);
      }
      else {
        exist = false;
      }
    }

    result[position] = occurs;
    position++;
  });

  return result;
}


/******************** TEST 3 ********************/
function f3(a) {
  if(a==='') return 0;
  
  let parts = 1;
  let regExp = new RegExp('[a-zA-Z0-9\-_.]');
  
  for (let character of a) {
    if(!character.match(regExp)) return 0;
    if(character === '.') 
		parts++;
  }
  
  return parts;
}


/******************** TEST 4 ********************/
function f4(cb) {
  if(!window.f4Called) {
    window.f4Called = true;
    setInterval(() => window.f4Called = false, 300);
    cb();
  }
}


/******************** EXPORT ********************/
module.exports = {
  f1: f1,
  f2: f2,
  f3: f3,
  f4: f4
};

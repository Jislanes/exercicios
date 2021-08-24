
//
export const square = (quadrado) => {

  if (quadrado <= 0 || quadrado > 64){

    throw new Error("square must be between 1 and 64");

  }

  let n = quadrado - 1;

  var graos = BigInt(2**n);

  return graos
  
};

export const total = () => {
var soma = BigInt(0);

for (let n = 0; n < 64; n++) {

  soma = soma + BigInt(2**n);

}

return soma

};



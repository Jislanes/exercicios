//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.  

export const age = (planeta,idadeEmSegundos) => {
  const anosTerrestresSec = 31557600;
let idade = 1;

  if (planeta === 'earth'){
    idade = 1;
  }
 else if (planeta === 'venus'){
   idade = 0.61519726;
 }
 else if (planeta === 'mercury'){
  idade = 0.2408467;
}
  else if (planeta === 'saturn'){
  idade = 29.447498;
}
else if (planeta === 'mars'){
  idade = 1.8808158;
}
else if (planeta === 'jupiter'){
  idade = 11.862615;
}
else if (planeta === 'uranus'){
  idade = 84.016846;
}
else if (planeta === 'neptune'){
  idade = 164.79132;
}

  const idadeReal = parseFloat((idadeEmSegundos / (anosTerrestresSec*idade)).toFixed(2));

  return idadeReal;
}

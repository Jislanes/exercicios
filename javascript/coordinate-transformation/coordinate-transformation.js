
export function translate2d(dx, dy) {
  const moveCoordinatesRight = (x,y) => [x + dx, y + dy];
  return moveCoordinatesRight;
}

export function scale2d(sx, sy) {
 return
}


export function composeTransform(f, g) {
  throw new Error('Implement the composeTransform function');
}


export function memoizeTransform(f) {
  let xAntigo, yAntigo = undefined;
  let resultadoAntigo
}

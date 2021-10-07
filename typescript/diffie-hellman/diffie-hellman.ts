export class DiffieHellman {
  private readonly g: number;
  private readonly p: number;
  constructor(p: number, g: number) {
    const limite = Math.max(p,g);
    const primos = Array.from(this.generatePrimes(limite));
    if (!primos.includes(p) || !primos.includes(g)){
      throw new Error();
    }
    this.g = g;
    this.p = p;
  }
  private *generatePrimes(limite:number): Iterable<number>{
    var talvezPrimo = 3;
    var primoMesmo:number[] = [2];
    if(limite >= 2){
      yield 2;
    }
    
    while (talvezPrimo <= limite){
      
      if (primoMesmo.filter(valor => valor).every(valor => talvezPrimo%valor != 0)){
        primoMesmo.push(talvezPrimo);
        yield talvezPrimo;
      }
      talvezPrimo += 2; 
    }
  }

  public getPublicKey(privateKey: number): number {
    if(privateKey <= 1 || privateKey >= this.p)
    throw new Error('O número tem que ser maior que 1 e menor que p.');
    return this.g**privateKey%this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey**myPrivateKey%this.p
  }
}


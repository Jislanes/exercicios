export class BankAccount {
  constructor() {
      this.contaAberta = false;
  }

  open() {
      if (this.contaAberta) throw new ValueError();
      this.contaAberta = true;
      this.balanco = 0;
  }

  close() {
      if (this.contaAberta != true) throw new ValueError();
      this.contaAberta = false;
      this.balanco = 0;
  }

  deposit(dinheiro) {
      if (this.contaAberta != true || dinheiro <= 0) throw new ValueError();
      this.balanco += dinheiro;
  }

  withdraw(dinheiro) {
      if (this.contaAberta != true || dinheiro <= 0|| this.balanco < dinheiro) throw new ValueError();
      this.balanco -= dinheiro;
  }

  get balance() {
      if (this.contaAberta != true) throw new ValueError();
      return this.balanco;
  }
}

export class ValueError extends Error {
  constructor() {
      super('Bank account error');
  }
}
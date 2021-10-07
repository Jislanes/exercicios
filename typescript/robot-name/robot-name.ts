export class Robot {
  private static nomesGerados: string []= [];
  private readonly list =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  private nome:string = '';

  constructor() {
    this.resetName();
  }
  private generateName(): string {
    let concate = '';
    let digitos ='';
    for (let i = 0; i < 2; i++){
      concate += this.list[Math.floor(Math.random()*26)];
	    }
    for (let i = 0; i < 3; i++){
      digitos += Math.floor(Math.random()*10);
    }
    return concate + digitos;
  }  

  public get name(): string {
    return this.nome;
  }

  public resetName(): void {
    var new_randon = this.generateName();
   while(Robot.nomesGerados.includes(new_randon)){
     new_randon = this.generateName();
   }
   Robot.nomesGerados.push(new_randon);
   this.nome = new_randon;
  }

  public static releaseNames(): void {
    Robot.nomesGerados = [];
  }
}

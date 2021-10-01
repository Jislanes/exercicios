export class Gigasecond {
  private readonly giga_Date: number;
  public constructor(initialDate: Date) {
    this.giga_Date = initialDate.getTime();
  }
  public date(): Date {
    let provisory = new Date(this.giga_Date + 1e12);
    return provisory;
  }
}

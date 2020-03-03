export class Company {
  public name: string;
  public full_name: string;
  public createdBy: string;

  constructor(name: string, full_name: string, createdBy: string) {
    this.name = name;
    this.full_name = full_name;
    this.createdBy = createdBy;
  }
}

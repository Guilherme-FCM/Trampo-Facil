import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TipoTurno } from "./enums/TipoTurno";
import { TipoContrato } from "./enums/TipoContrato";

@Entity()
export class Vaga {
  @PrimaryGeneratedColumn()
  private id!: number;
  
  @Column()
  private cargo: string;
  
  @Column({ type: "text" })
  private especificacao: string;
  
  @Column({ nullable: true })
  private remuneracao?: number;
  
  @Column({ type: "enum", enum: TipoTurno })
  private turno: TipoTurno;
  
  @Column({ type: "enum", enum: TipoContrato })
  private contrato: TipoContrato;

  @CreateDateColumn()
  private created_at!: Date;

  @UpdateDateColumn()
  private updated_at!: Date;

  constructor(
    cargo: string,
    especificacao: string,
    remuneracao: number,
    turno: TipoTurno,
    contrato: TipoContrato
  ) {
    this.cargo = cargo;
    this.especificacao = especificacao;
    this.remuneracao = remuneracao;
    this.turno = turno;
    this.contrato = contrato;
  }

  public getId(): number {
    return this.id;
  }

  public getCargo(): string {
    return this.cargo;
  }

  public setCargo(cargo: string): void {
    this.cargo = cargo;
  }

  public getEspecificacao(): string {
    return this.especificacao;
  }

  public setEspecificacao(especificacao: string): void {
    this.especificacao = especificacao;
  }

  public getRemuneracao(): number | undefined {
    return this.remuneracao;
  }

  public setRemuneracao(remuneracao: number): void {
    this.remuneracao = remuneracao;
  }

  public getTurno(): TipoTurno {
    return this.turno;
  }

  public setTurno(turno: TipoTurno): void {
    this.turno = turno;
  }

  public getContrato(): TipoContrato {
    return this.contrato;
  }

  public setContrato(contrato: TipoContrato): void {
    this.contrato = contrato;
  }

  public getCreatedAt(): Date {
    return this.created_at;
  }

  public getUpdatedAt(): Date {
    return this.updated_at;
  }
}

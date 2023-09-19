import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Endereco } from "./Endereco";

export abstract class Usuario {
	@PrimaryGeneratedColumn()
	protected id!: number;
	
	@Column()
	protected email: string;

	@Column()
	protected senha: string;

  @OneToOne(() => Endereco)
  @JoinColumn()
	public endereco: Endereco;

	@CreateDateColumn()
	protected created_at!: Date;

	@UpdateDateColumn()
  protected updated_at!: Date;

	constructor (
		email: string,
		senha: string,
		endereco: Endereco,
	) {
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
	}

	public getId(): number {
		return this.id;
	}

	public getEmail(): string {
		return this.email;
	}

	public setEmail(email: string): void {
		this.email = email;
	}

	public getSenha(): string {
		return this.senha;
	}

	public setSenha(senha: string): void {
		this.senha = senha;
	}

	public getEndereco(): Endereco {
		return this.endereco;
	}

	public setEndereco(endereco: Endereco): void {
		this.endereco = endereco;
	}

	public getCreatedAt(): Date {
		return this.created_at;
	}

	public getUpdatedAt(): Date {
		return this.updated_at;
	}
}

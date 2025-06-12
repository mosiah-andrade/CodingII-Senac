import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


/**
 * Representa a tabela `UH` (Unidade Habitacional) no banco de dados.
 */
@Entity({ name: 'UH', schema: 'apiPousada' })	
export class UH {

  /**
   * Chave primária auto-incrementada da tabela.
   * Mapeia a coluna `idUH`.
   */
  @PrimaryGeneratedColumn()
  idUH: number;

  /**
   * Nome da unidade habitacional (ex: "Suíte Master", "Chalé Família").
   * Mapeia a coluna `nome` do tipo VARCHAR(45).
   */
  @Column({ type: 'varchar', length: 45, nullable: false })
  nome: string;

  /**
   * Preço da diária da unidade habitacional.
   * Mapeia a coluna `valorDiaria` do tipo DECIMAL(6,2).
   */
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  valorDiaria: number;

  /**
   * Localização da unidade (ex: "Bloco A", "Próximo à piscina").
   * Mapeia a coluna `local` do tipo VARCHAR(45).
   */
  @Column({ type: 'varchar', length: 45, nullable: false })
  local: string;

  /**
   * Quantidade máxima de hóspedes que a unidade pode acomodar.
   * Mapeia a coluna `qtdMaxHospedes` do tipo INT.
   */
  @Column({ type: 'int', nullable: false })
  qtdMaxHospedes: number;
  constructor(
    idUH?: number,
    nome?: string,
    valorDiaria?: number,
    local?: string,
    qtdMaxHospedes?: number
  ) {
    this.idUH = idUH || 0;
    this.nome = nome || '';
    this.valorDiaria = valorDiaria || 0;
    this.local = local || '';
    this.qtdMaxHospedes = qtdMaxHospedes || 0;
  }

}


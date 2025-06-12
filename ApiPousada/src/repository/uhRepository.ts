import { AppDataSource } from '../db/data-source';
import { UH } from '../model/uh';

/**
 * Repositório para a entidade UH (Unidade Habitacional).
 * Fornece métodos para interagir com a tabela UH no banco de dados.
 */
class UhRepository {
    private repUH = AppDataSource.getRepository(UH);

    async save(uh: UH): Promise<UH> {
        try {
            return await this.repUH.save(uh);
        } catch (error) {
            throw new Error(`Error saving UH: ${error}`);
            
        }
    }

    async retriveAll(): Promise<UH[]> {
        try {
            return await this.repUH.find();
        } catch (error) {
            throw new Error(`Error retrieving all UHs: ${error}`);
        }
    }

    async retrieveById(id: number): Promise<UH | null> {
        try {
            return await this.repUH.findOneBy({ idUH: id });
        } catch (error) {
            throw new Error(`Error retrieving UH by ID ${id}: ${error}`);
        }
    }
    async retrieveByName(name: string): Promise<UH | null> {
        try {
            return await this.repUH.findOneBy({ nome: name });
        } catch (error) {
            throw new Error(`Error retrieving UH by name ${name}: ${error}`);
        }
    }
    async update(uh: UH): Promise<UH> {
        const { idUH, nome, valorDiaria, local, qtdMaxHospedes } = uh;
        try {
            await this.repUH.save({
                idUH,
                nome,
                valorDiaria,
                local,
                qtdMaxHospedes
            });
            return uh;
        } catch (error) {
            throw new Error(`Error updating UH: ${error}`);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const uh = await this.repUH.findOneBy({ idUH: id });
            if (!uh) {
                throw new Error(`UH with ID ${id} not found`);
            }
            await this.repUH.remove(uh);
        } catch (error) {
            throw new Error(`Error deleting UH with ID ${id}: ${error}`);
        }
    }
    
}
export default new UhRepository();
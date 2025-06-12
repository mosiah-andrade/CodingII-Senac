import { AppDataSource } from "./db/data-source";
import { UH } from "./model/uh";
import UhRepository  from "./repository/uhRepository";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is running!");
    const quarto2 = new UH(2, "02", 50.00, "Bloco A", 4);
    const quarto3 = new UH(3, "03", 150.00, "Bloco B", 2);
    const quarto4 = new UH(4, "4", 200.00, "Bloco A", 1);
    const quarto5 = new UH(5, "5", 100.00, "Bloco A", 6);
    const quarto6 = new UH(6, "6", 55.00, "Bloco A", 2);
    UhRepository.save(quarto2);
    UhRepository.save(quarto3);
    UhRepository.save(quarto4);
    UhRepository.save(quarto5);
    UhRepository.save(quarto6);


    UhRepository.retriveAll()
      .then((result) => {
        console.log("All UHs:", result);
      })
      .catch((error) => {
        console.error("Error retrieving all UHs:", error);
      });
    UhRepository.retrieveById(2)
      .then((result) => {
        console.log("UH with ID 2:", result);
      }
      )
      .catch((error) => {
        console.error("Error retrieving UH by ID 2:", error);
      }
    );
    UhRepository.retrieveByName("02")
      .then((result) => {
        console.log("UH with name '02':", result);
      }
      )
      .catch((error) => {
        console.error("Error retrieving UH by name '02':", error);
      }
    );
    quarto2.valorDiaria = 5000.00;
    UhRepository.update(quarto2)
      .then((result) => {
        console.log("Updated UH:", result);
      })
      .catch((error) => {
        console.error("Error updating UH:", error);
      }
    );
    UhRepository.delete(2)
      .then(() => {
        console.log("Deleted UH with ID 2");
      })
      .catch((error) => {
        console.error("Error deleting UH with ID 2:", error);
      });
    
  })
  .catch((error) => {
    console.error( error);
  });
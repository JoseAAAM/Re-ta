import { CategoriesRepository } from "../../repositories/implementations/categoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepositoy = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepositoy);

const listCategoriesControler = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesControler };

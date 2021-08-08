import { ProductsDao } from "../dao/products-dao";
import { HyperPaginated } from "../models/hyper-paginated";

export class ProductService {
  productsDao = new ProductsDao();

  // get all product
  async getAll(hyperPaginated?: HyperPaginated): Promise<any> {
    console.log("Get All Product");

    let products: any = await this.productsDao.findAll();

    return products;
  }

  // check product exits on database
  async checkProductExits(orgId: string, name: string) {
    const data = await this.productsDao.findOne({
      where: {
        orgId: orgId,
        name: name,
      },
    });

    if (data) {
      console.log("check exits data: ", data.id);
      return data.id;
    } else {
      return "";
    }
  }

  // insert a product to database
  async insertProduct(product: any) {
    var exitsId;
    await this.checkProductExits(product.orgId, product.name).then((res) => {
      exitsId = res;
    });
    console.log("Exits Id :", exitsId);
    if (exitsId != "") {
      console.log("UPDATE PRODUCT");
    } else {
      console.log("INSERT PRODUCT");
      await this.productsDao.create({
        id: "pd-" + Date.now(),
        orgId: product.orgId,
        productTypeId: product.productTypeId,
        name: product.name,
        generalPrice: product.generalPrice,
        imageUrl: product.imageUrl,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    }
  }
}

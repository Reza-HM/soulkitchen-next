import ProductModel from "@/models/Product";
export const newProduct = async (req, res, next) => {
  const product = await ProductModel.create(req.body);
  res.status(201).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {
  const resPerPage = 2;
  const productsCount = await ProductModel.countDocuments();

  const apiFilters = new APIFilters(ProductModel.find(), req.query)
    .search()
    .filter();

  let products = await apiFilters.query;
  const filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);

  products = await apiFilters.query.clone();

  res.status(200).json({
    productsCount,
    resPerPage,
    filteredProductsCount,
    products,
  });
};

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    res.status(404).json({
      error: "Product not found.",
    });
  }

  res.status(200).json({
    product,
  });
};

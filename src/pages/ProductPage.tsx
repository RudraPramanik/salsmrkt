import ProductSelect from "../components/ProductSelect";
import Layout from "../components/layout/Layout";

const ProductPage = () => {
  return (
    <Layout>
      <div className="mt-28  ">ProductPage</div>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className=" col-span-1 ">gallary</div>
        <div className=" col-span-1 ">
          {" "}
          <ProductSelect />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

import ProductSelect from "../components/ProductSelect";
import Layout from "../components/layout/Layout";
import YouTubeVideo from "../components/ui/YouTubeVideo";
import Product from "./product";

const ProductPage = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=PdJq-dAQr-Y';
  return (
    <Layout>
      <Product/>
      {/* <div className="mt-28  ">ProductPage</div>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className=" col-span-1 ">gallary</div>
        <div className=" col-span-1 ">
          {" "}
          <ProductSelect />
        </div>
        <YouTubeVideo videoUrl={videoUrl}/>
      </div> */}
    </Layout>
  );
};

export default ProductPage;

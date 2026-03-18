import ProductDetailItem from "../ProductDetail";

type ParamsProp = {
  params : Promise<{
    id : string
  }>
}

 const ProductParams = async ({params} : ParamsProp) => {
    const {id} = await params;
    
  return  <ProductDetailItem id={id}/>
 }

 export default ProductParams
   
import UpdateProductForm from "../UpdateProductForm";

type ParamsProp = {
  params : Promise<{
    id : string
  }>

}

 const ProductParams = async ({params} : ParamsProp) => {
    const {id} = await params;
    return(
        <UpdateProductForm id={id} />
    )
 }

 export default ProductParams
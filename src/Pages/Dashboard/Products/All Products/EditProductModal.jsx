
import { useGetProductQuery } from "../../../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import EditForm from "./EditForm";
import { CircleLoader } from "react-spinners";

const EditProductModal = () => {
      const { id } = useParams()
      const { data: product, isLoading, isError,error} = useGetProductQuery(id)
      let content = null
      const override = {
            display: "block",
            margin: "0 auto",
            borderColor: "red",
      };
      if (isLoading) content =   <CircleLoader cssOverride={override} color="#36d7b7"/>
      if (!isLoading && isError) {
            content = <h3 className="text-red-500">{error}</h3>
        }
        if (!isLoading && !isError && !product._id) {
            content = <h3 className="text-red-500">There is no Product</h3>
        }
        if (!isLoading && !isError && product._id) {
            content = <EditForm {...product} ></EditForm>
        }
      return (
            <div>
                  <div className='ml-16 mt-16'>
                        {content}
                  </div >
            </div>
      );
};

export default EditProductModal;
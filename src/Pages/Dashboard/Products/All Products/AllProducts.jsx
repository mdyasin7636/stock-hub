import { Table } from 'flowbite-react';

import AllProductList from './AllProductList';
import CircleLoader from "react-spinners/CircleLoader";
import { useGetProductsQuery } from '../../../../features/api/apiSlice';


const AllProducts = () => {
    const { data, isError, isLoading, error } = useGetProductsQuery()
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    let content = null
    if (!isLoading && isError) {
        content = <h3 className="text-red-500">{error}</h3>
    }
    if (!isLoading && !isError && data.length === 0) {
        content = <h3 className="text-red-500">There is no Product</h3>
    }
    if (!isLoading && !isError && data.length > 0) {
        content = data?.map(item => <AllProductList product={item} key={item._id}></AllProductList>)
    }
    return (
        <div className='mt-12'>
            {
                isLoading ? <CircleLoader cssOverride={override} color="#36d7b7"/>
                : <Table className='w-full' hoverable>
                    <Table.Head className='text-sm text-center bg-gray-300 font-normal text-gray-700'>
                        <Table.HeadCell>
                            image
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Code
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Brand
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Category
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Price
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Quantity
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Action
                        </Table.HeadCell>
                    </Table.Head>
                    {content}
                </Table>
            }
        </div>

    );
};

export default AllProducts;
import { Table } from "flowbite-react";
import { FaRegEdit, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';
import { useDeleteProductMutation } from "../../../../features/api/apiSlice";
import { useEffect} from "react";
import toast from "react-hot-toast"
import { Link } from "react-router-dom";


const AllProductList = ({ product }) => {
      const { _id, photo, name, brand, category, price, quantity , product:code} = product
      
      const [deleteProduct, { isSuccess }] = useDeleteProductMutation()
      const handleDelete = (id) => {
            deleteProduct(id)
      }
      useEffect(() => {
            if (isSuccess) toast.success("Product Deleted Successfully!")
      }, [isSuccess])
      return (
            <Table.Body className="divide-y">
                  <Table.Row className="bg-white text-center dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                              <img src={photo} className="w-12 h-12 rounded-xl object-fill" alt="" />
                        </Table.Cell>
                        <Table.Cell>
                              {name}
                        </Table.Cell>
                        <Table.Cell>
                              {code}
                        </Table.Cell>
                        <Table.Cell>
                              {brand}
                        </Table.Cell>
                        <Table.Cell>
                              {category}
                        </Table.Cell>
                        <Table.Cell>
                              ${price}
                        </Table.Cell>
                        <Table.Cell>
                              {quantity} pc
                        </Table.Cell>
                        <Table.Cell>
                              <div className='flex gap-2'>
                                    <Link to="/dashboard/viewProduct"><FaRegEye className='text-blue-500 text-lg'></FaRegEye></Link>
                                    <Link to={`/dashboard/editProduct/${_id}`}> <FaRegEdit className='text-green-500 text-lg cursor-pointer'></FaRegEdit></Link>
                                    <FaRegTrashAlt onClick={() => handleDelete(_id)} className='text-red-500 text-lg cursor-pointer'></FaRegTrashAlt>
                              </div>
                        </Table.Cell>
                  </Table.Row>

            </Table.Body>
      );
};

export default AllProductList;
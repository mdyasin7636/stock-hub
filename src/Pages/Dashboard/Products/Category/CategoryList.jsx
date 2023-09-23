
import { Table } from 'flowbite-react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDeleteCategoryMutation } from '../../../../features/api/apiSlice';
import { useEffect } from 'react';
import toast  from 'react-hot-toast';

const CategoryList = ({ category }) => {
      const { code, categoryName, _id } = category
      const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation()
      const handleDelete = () => {
           if(_id) deleteCategory(_id)
      }
      useEffect(() => {
            if (isSuccess) toast.success("Category Deleted Successfully!")
      }, [isSuccess])

      return (
            <>
                  <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell className="text-center">
                                    {code}
                              </Table.Cell>
                              <Table.Cell className='text-center'>
                                    {categoryName}
                              </Table.Cell>
                              <Table.Cell>
                                    <div className='flex gap-2 justify-center'>
                                          <FaRegTrashAlt onClick={handleDelete} className='text-red-500 text-lg cursor-pointer'></FaRegTrashAlt>
                                    </div>
                              </Table.Cell>
                        </Table.Row>
                  </Table.Body>
            </>

            
         
      );
};

export default CategoryList;
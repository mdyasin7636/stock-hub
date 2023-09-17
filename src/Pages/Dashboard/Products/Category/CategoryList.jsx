
import { Checkbox, Table } from 'flowbite-react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
const CategoryList = ({category}) => {
      const {code,categoryName}=category
      return (
             
                  <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                              <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="">
                              {code}
                        </Table.Cell>
                        <Table.Cell className=''>
                              {categoryName}
                        </Table.Cell>
                        <Table.Cell>
                              <div className='flex gap-2'>
                                    <FaRegEdit className='text-green-500 text-lg'></FaRegEdit>
                                    <FaRegTrashAlt className='text-red-500 text-lg'></FaRegTrashAlt>
                              </div>
                        </Table.Cell>
                  </Table.Row>
            </Table.Body>
         
      );
};

export default CategoryList;
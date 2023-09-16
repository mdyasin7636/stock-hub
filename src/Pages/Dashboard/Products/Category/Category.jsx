import { Checkbox, Table } from 'flowbite-react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const Category = () => {
      return (
            <div>
                  <Table hoverable>
                        <Table.Head className='text-sm font-normal text-gray-400'>
                              <Table.HeadCell className="p-4">
                                    <Checkbox />
                              </Table.HeadCell>
                              <Table.HeadCell>
                                    Category Code
                              </Table.HeadCell>
                              <Table.HeadCell>
                                    Category Name
                              </Table.HeadCell>
                              <Table.HeadCell>
                                    Action
                              </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="p-4 text-center">
                                          <Checkbox />
                                    </Table.Cell>
                                    <Table.Cell className="text-center">
                                          CA6
                                    </Table.Cell>
                                    <Table.Cell className='text-center'>
                                          Fruits
                                    </Table.Cell>
                                    <Table.Cell>
                                          <div className='flex gap-2 justify-center'>
                                                <FaRegEdit className='text-green-500 text-lg'></FaRegEdit>
                                                <FaRegTrashAlt className='text-red-500 text-lg'></FaRegTrashAlt>
                                          </div>
                                    </Table.Cell>
                              </Table.Row>
                        </Table.Body>
                  </Table>
            </div>
      );
};

export default Category;
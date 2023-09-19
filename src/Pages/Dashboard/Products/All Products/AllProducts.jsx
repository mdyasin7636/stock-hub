import { Checkbox, Table } from 'flowbite-react';
import { FaRegEdit, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';

const AllProducts = () => {
      return (
            <div className='mt-12'>
                  <Table hoverable>
                <Table.Head className='text-sm text-center bg-gray-300 font-normal text-gray-700'>
                    <Table.HeadCell>
                        <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Image
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
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white text-center dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>
                            Apple MacBook
                        </Table.Cell>
                        <Table.Cell>
                            Sunglasses
                        </Table.Cell>
                        <Table.Cell>
                            69311349
                        </Table.Cell>
                        <Table.Cell>
                            Adidas
                        </Table.Cell>
                        <Table.Cell>
                            Shoes
                        </Table.Cell>
                        <Table.Cell>
                            25.00
                        </Table.Cell>
                        <Table.Cell>
                            102 pc
                        </Table.Cell>
                        <Table.Cell>
                            <div className='flex gap-2'>
                                <FaRegEye className='text-blue-500 text-lg'></FaRegEye>
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

export default AllProducts;
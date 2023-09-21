
import { FaRegEdit, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';

const AllProducts = () => {
    return (
        <div className='mt-12'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gray-300 text-gray-800 w-full'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-500'>
                        <tr>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>
                                <h2>Apple macBook</h2>
                            </td>
                            <td>
                                <h2>Sunglasses</h2>
                            </td>
                            <td>
                                <p>69311349</p>
                            </td>
                            <td>
                                <p>Adidas</p>
                            </td>
                            <td>
                                <p>Shoes</p>
                            </td>
                            <td>
                                <p>$25.00</p>
                            </td>
                            <td>
                                <p>102pc</p>
                            </td>
                            <td>
                                <div className='flex gap-2 justify-center'>
                                    <FaRegEye className='text-blue-500 text-lg'></FaRegEye>
                                    <FaRegEdit className='text-green-500 text-lg'></FaRegEdit>
                                    <FaRegTrashAlt className='text-red-500 text-lg'></FaRegTrashAlt>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;
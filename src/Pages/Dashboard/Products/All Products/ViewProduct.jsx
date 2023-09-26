const ViewProduct = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className='grid md:grid-cols-2 gap-8 '>
                    <div className="overflow-x-auto">
                        <table className="table text-center w-full">
                            {/* Add the w-full and md:w-auto classes to control the width */}
                            <thead className="bg-gray-300 text-sm font-normal text-gray-700">
                                <tr>
                                    <th>Type</th>
                                    <th>Single</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-center dark:border-gray-700 dark:bg-gray-800">
                                <tr>
                                    <td>Brand</td>
                                    <td>Samsung</td>
                                </tr>
                                <tr>
                                    <td>Brand</td>
                                    <td>Samsung</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img className="w-60" src="https://i.ibb.co/0fdGLNw/img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;

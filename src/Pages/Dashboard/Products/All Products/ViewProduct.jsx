
const ViewProduct = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold mt-10">Product Details</h1>
        <div className="flex justify-center items-center gap-20 mt-16">
        
        {/* Table */}
        <div>
          <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400"></thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Product Name
                  </th>
                  <td className="px-24 py-4">Silver</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Product Code
                  </th>
                  <td className="px-24 py-4">White</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Brand
                  </th>
                  <td className="px-24 py-4">Black</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Category
                  </th>
                  <td className="px-24 py-4">Gray</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Price
                  </th>
                  <td className="px-24 py-4">Red</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Quantity
                  </th>
                  <td className="px-24 py-4">Red</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Description
                  </th>
                  <td className="px-24 py-4">Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Image */}
        <div>
          <img
            className="w-72"
            src="https://i.ibb.co/QbKT5Zn/redmi-note-13-pro.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;

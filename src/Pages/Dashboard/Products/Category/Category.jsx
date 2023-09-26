import { useState } from "react";
import CategoryModal from "./CategoryModal";
import { Table } from "flowbite-react";
import { useGetCategoryQuery } from "../../../../features/api/apiSlice";
import CategoryList from "./CategoryList";

const Category = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { data, error, isLoading, isError } = useGetCategoryQuery();
  let content = null;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3 className="text-red-500">{error}</h3>;
  }
  if (!isLoading && !isError && data.length === 0) {
    content = <h3 className="text-red-500">There is no Category</h3>;
  }
  if (!isLoading && !isError && data.length > 0) {
    content = data?.map((item) => (
      <CategoryList category={item} key={item._id}></CategoryList>
    ));
  }
  return (
    <div className="flex flex-col">
      <CategoryModal isOpen={isOpen} setIsOpen={setIsOpen}></CategoryModal>
      <div className="self-end mt-20 mr-32">
        <button
          className="btn text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black"
          onClick={() => setIsOpen(!isOpen)}
          >
          Add Category
        </button>
      </div>
      <div className="mx-24 flex-grow mt-6 shadow-xl">
      <h2 className=" mb-6 font-semibold text-center text-2xl">Category Products</h2>
      <Table hoverable className="">
          <Table.Head className="text-base font-semibold text-center">
            <Table.HeadCell className="">Category Code</Table.HeadCell>
            <Table.HeadCell className="">Category Name</Table.HeadCell>
            <Table.HeadCell className="">Action</Table.HeadCell>
          </Table.Head>
          {content}
        </Table>
      </div>
    </div>
  );
};

export default Category;

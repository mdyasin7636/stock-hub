import { useState } from "react";
import CategoryModal from "./CategoryModal";
import { Button, Table } from "flowbite-react";
import { useGetCategoryQuery } from "../../../../features/api/apiSlice";
import CategoryList from "./CategoryList";


const Category = () => {
      let [isOpen, setIsOpen] = useState(false)
      const { data, error, isLoading, isError } = useGetCategoryQuery()
      let content = null
      if (isLoading) {
            content = <h3>Loading...</h3>
      }
      if (!isLoading && isError) {
            content = <h3 className="text-red-500">{error}</h3>
      }
      if (!isLoading && !isError && data.length === 0) {
            content = <h3 className="text-red-500">There is no Category</h3>
      }
      if (!isLoading && !isError && data.length > 0) {
            content = data?.map(item => <CategoryList category={item} key={item._id}></CategoryList>)
      }
      return (
            <div >

                  <CategoryModal isOpen={isOpen} setIsOpen={setIsOpen}></CategoryModal>
                  <div className="w-full ">

                        <Button className="relative -right-72 top-2 z-10 my-2" onClick={() => setIsOpen(!isOpen)}
                              gradientMonochrome="info">
                              Add Category
                        </Button>

                        <Table hoverable>
                              <Table.Head className='text-sm font-normal
                               text-gray-400'>

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
                              {
                                    content
                              }

                        </Table>
                  </div>

            </div>
      );
};

export default Category;
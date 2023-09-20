import Modal from "../../../../ui/Modal";
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from "react-hook-form";
import { useAddCategoryMutation } from "../../../../features/api/apiSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CategoryModal = ({ isOpen, setIsOpen }) => {

      const { register, handleSubmit, reset } = useForm();
      const [addCategory, { data: category,isSuccess }] = useAddCategoryMutation()
      console.log(category)
      const handleCancel = () => {
            setIsOpen(false)
      }
      const onSubmit = (data) => {
            const { code, categoryName } = data
            addCategory({ code: parseInt(code), categoryName })
            reset()
            setIsOpen(false)
      };
      useEffect(() => {
            if (isSuccess) toast.success("Category Added Successfully!")
      }, [isSuccess])
      return (
            <div>
                  
                  <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Create Category">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 pt-5">
                              <div>
                                    <div className="mb-2 block">
                                          <Label
                                                htmlFor="base"
                                                value="Category Code"

                                          />
                                    </div>
                                    <TextInput
                                          id="base"
                                          sizing="md"
                                          type="number"
                                          name="code"
                                          {...register("code", { required: true })}
                                          placeholder="Enter Category Code"
                                    />
                              </div>

                              <div>
                                    <div className="mb-2 block">
                                          <Label
                                                htmlFor="base"
                                                value="Category Name"

                                          />
                                    </div>
                                    <TextInput
                                          id="base"
                                          sizing="md"
                                          type="text"
                                          name="name"
                                          {...register("categoryName", { required: true })}
                                          placeholder="Enter Category Name"
                                    />
                              </div>
                              <div className="flex gap-3 mt-5">
                                    <Button type="submit" gradientMonochrome="success" pill>
                                          <p>
                                                Submit
                                          </p>
                                    </Button>
                                    <Button onClick={handleCancel} gradientMonochrome="failure" pill>
                                          <p>
                                                Cancel
                                          </p>
                                    </Button>
                              </div>

                        </form>

                  </Modal>
            </div>
      );
};

export default CategoryModal;
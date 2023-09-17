import { useState } from "react";
import CategoryModal from "./CategoryModal";
import { Button } from "flowbite-react";


const Category = () => {
      let [isOpen, setIsOpen] = useState(false)
      return (
            <div>
                  <Button onClick={() => setIsOpen(!isOpen)}
                   gradientMonochrome="info">
                        Info
                  </Button>
                  <CategoryModal isOpen={isOpen} setIsOpen={setIsOpen}></CategoryModal>
            </div>
      );
};

export default Category;
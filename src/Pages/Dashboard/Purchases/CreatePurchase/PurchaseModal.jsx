import Modal from "../../../../ui/Modal";

const PurchaseModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Purchase Summary" maxWidth="5xl">
             <hr className="mt-5" />
            <div className="flex mt-5">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="">
                            <img className="w-12" src="https://i.ibb.co/QbKT5Zn/redmi-note-13-pro.png" alt="" />
                        </div>
                        <div className="text-xl ml-3">
                            <p>Redmi Note 12</p>
                            <p>256GB</p>
                        </div>
                    </div>
                    <div className="ml-64">
                        <p>$999.00</p>
                        <p>Qty: 1</p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className="flex">
                        <p>Total</p>
                        <p className="ml-[323px]">$3268.00</p>
                    </div>
                    <div className="flex">
                        <p>Tax</p>
                        <p className="ml-[360px]">$2.10</p>
                    </div>
                    <div className="flex">
                        <p>Shipping</p>
                        <p className="ml-80">$2.10</p>
                    </div>
                    <hr className="mt-2 mb-2"/>
                    <div className="flex">
                        <p>Total</p>
                        <p className="ml-80">$3270.00</p>
                    </div>
                </div>
            </div>
            <hr className="mt-5" />
          </Modal>
    );
};

export default PurchaseModal;

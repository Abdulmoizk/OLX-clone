import React, { useState } from "react";
import { Button, Modal } from "antd";
import SYMBOL from "../../assets/OLX-Symbol.png";
import NavLayout from "../NavLayout";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const AppModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button size="large" onClick={showModal}>
       Login
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="text-center m-5">
          <div className="d-flex justify-content-center">
            <img className="" width={60} src={SYMBOL} alt="" />
          </div>
          <div >
            <h5 className="mt-3" >Welcome to OLX</h5>
            <p className="mt-3">The trsuted company of buyers and sellers.</p>
          </div>
          <div className="border p-3 m-2 align-items-center d-flex justify-content-center gap-2">
            <FaGoogle /> <span>Continue with Google</span>
          </div>
          <div className="border p-3 m-2 align-items-center d-flex justify-content-center gap-2">
            <FaFacebook /> <span>Continue with Facebook</span>
          </div>
          <div className="border p-3 m-2 align-items-center d-flex justify-content-center gap-2">
            <MdEmail /> <span>Continue with Email</span>
          </div>
          <div className="border p-3 m-2 align-items-center d-flex justify-content-center gap-2">
            <FaPhoneAlt /> <span>Continue with Phone </span>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default AppModal;

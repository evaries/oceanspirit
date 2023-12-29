"use client";

import { destination } from "@/app/data";
import { Fragment, useState } from "react";
import Destination from "../../entities/Destination";
import ContactModal from "../../widgets/ContactModal";
import Modal from "../../widgets/Modal";

const Destinations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="destinations" className="section">
      <h3 className="subtitle-1 mt-20 text-center">Destinations</h3>
      {destination.map((item, index) => {
        return (
          <Fragment key={index}>
            <Destination {...item} action={() => setIsModalOpen(true)} />
          </Fragment>
        );
      })}
      <Modal handleClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <ContactModal />
      </Modal>
    </section>
  );
};
export default Destinations;

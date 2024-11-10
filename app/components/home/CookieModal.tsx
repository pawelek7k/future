"use client";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { SecondaryButton } from "../global/buttons/SecondaryBtn";

export const CookieModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setIsModalOpen(false);
    } else {
      setTimeout(() => {
        setShowModal(true);
      }, 50);
    }
  }, []);

  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 flex justify-center items-center bg-zinc-950/50 z-50 transition-opacity duration-300 ease-out ${
            isModalOpen ? "flex" : "hidden"
          }`}
        >
          <div
            className={`bg-neutral-100 shadow-lg shadow-sky-950 dark:shadow-rose-950 dark:bg-zinc-950 rounded-lg w-full max-w-lg p-4 fixed bottom-0 transition-transform duration-300 ease-out transform ${
              isModalOpen ? "translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
              <div className="text-zinc-950 dark:text-neutral-100">
                This website uses cookies to personalize content and analyse
                traffic in order to offer you a better experience.
              </div>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 text-nowrap">
                <PrimaryButton onClick={closeModal}>I accept</PrimaryButton>
                <SecondaryButton onClick={closeModal}>
                  Learn More
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

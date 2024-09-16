"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import DropDown, { Product } from "@/components/ui/DropDown";
import ImageDesign from "@/components/ui/ImageDesign";

import { dataImageType } from "./type";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const [imageSelected, setImageSelected] = useState<dataImageType>();
  const monitors: Product[] = [
    {
      title: "LG UltraFine UHD Monitor 32UN880P",
      linkAff: "link 1",
    },
    {
      title: "Apple Studio Display",
      linkAff: "link 1",
    },
    {
      title: "LG Dual up Monitor",
      linkAff: "link 1",
    },
    {
      title: "ASUS ProArt Monitor 27",
      linkAff: "link 1",
    },
    {
      title: "Dell Monitor 27 inch",
      linkAff: "link 1",
    },
    {
      title: "GIGABYTE Monitor 27",
      linkAff: "link 1",
    },
    {
      title: "BenQ Monitor 27",
      linkAff: "link 1",
    },
  ];
  const mouses: Product[] = [
    {
      title: "bàn phím",
      linkAff: "link 1",
    },
    {
      title: "bàn phím",
      linkAff: "link 1",
    },
    {
      title: "bàn phím",
      linkAff: "link 1",
    },
  ];
  const keyboards: Product[] = [
    {
      title: "bàn phím",
      linkAff: "link 1",
    },
    {
      title: "bàn phím",
      linkAff: "link 1",
    },
    {
      title: "bàn phím",
      linkAff: "link 1",
    },
  ];
  const dataImage: dataImageType[] = [
    {
      linkImage: "/image_1.webp",
      linkImageCover: "/cover_1.jpg",
      linkAff: ["https://amzn.to/3MOr1Eh", "https://amzn.to/3MOr1Eh"],
    },
    {
      linkImage: "/image_2.webp",
      linkImageCover: "/cover_2.jpg",
      linkAff: ["https://amzn.to/3MOr1Eh", "https://amzn.to/3MOr1Eh"],
    },
    {
      linkImage: "/image_3.webp",
      linkImageCover: "/cover_3.jpg",
      linkAff: ["https://amzn.to/3MOr1Eh", "https://amzn.to/3MOr1Eh"],
    },
    {
      linkImage: "/image_4.webp",
      linkImageCover: "/cover_4.jpg",
      linkAff: ["https://amzn.to/3MOr1Eh", "https://amzn.to/3MOr1Eh"],
    },
    {
      linkImage: "/image_5.webp",
      linkImageCover: "/cover_5.jpg",
      linkAff: ["https://amzn.to/3MOr1Eh", "https://amzn.to/3MOr1Eh"],
    },
    {
      linkImage: "/image_6.webp",
      linkImageCover: "/cover_6.jpg",
      linkAff: ["https://amzn.to/3MOr1Eh", "https://amzn.to/3MOr1Eh"],
    },
  ];
  const openModal = (data: any) => {
    setIsModal(true);
    console.log({ data });

    console.log({ data });
  };
  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <>
      <div className="main">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert image"
          src="/logo.png"
          alt="Next.js Logo"
          width={280}
          height={37}
          priority
        />
        <div className="wrap-title">
          <span className="title">itsworkflow</span>
          <p>(Our website may contain affiliate links)</p>
        </div>
        <div className="wrap-social">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
        <DropDown data={monitors} title="TOP MONITORS OF 2024" />
        <DropDown data={mouses} title="TOP MOUSE OF 2024" />
        <DropDown data={keyboards} title="TOP KEYBOARDS OF 2024" />
        <div className="max-w-[680px] w-full mt-4 px-2">
          <div className="grid grid-cols-3 gap-2">
            {dataImage.map((item, index) => {
              return (
                <ImageDesign
                  dataImage={item}
                  openModal={openModal}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <ModalComponent
        isOpenModal={isModal}
        closeModal={closeModal}
        dataModal={imageSelected}
      />
    </>
  );
}

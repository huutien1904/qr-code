"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import DropDown, { Product } from "@/components/ui/DropDown";
import ImageDesign from "@/components/ui/ImageDesign";
import ModaImage from "./ModaImage";
import { useState } from "react";
import { ImageModalType } from "./type";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageSelected, setImageSelected] = useState<any>();

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
  const listImgAff = [
    {
      imgLink: "/image_1.webp",
      imgCoverLink: "/cover_1.jpg",
      listLinkAff: ["link1", "link2"],
    },
    {
      imgLink: "/image_2.webp",
      imgCoverLink: "/cover_2.jpg",
      listLinkAff: ["link1", "link2"],
    },
    {
      imgLink: "/image_3.webp",
      imgCoverLink: "/cover_3.jpg",
      listLinkAff: ["link1", "link2"],
    },
    {
      imgLink: "/image_4.webp",
      imgCoverLink: "/cover_4.jpg",
      listLinkAff: ["link1", "link2"],
    },
    {
      imgLink: "/image_5.webp",
      imgCoverLink: "/cover_5.jpg",
      listLinkAff: ["link1", "link2"],
    },
    {
      imgLink: "/image_6.webp",
      imgCoverLink: "/cover_6.jpg",
      listLinkAff: ["link1", "link2"],
    },
  ];
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openModal = (imageCover: string, listLinkAff: string[]) => {
    setIsOpenModal(true);
    setImageSelected({ imageCover: imageCover, listLinkAff: listLinkAff });
  };
  return (
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
          {listImgAff.map((item, index) => {
            return (
              <ImageDesign
                image={item.imgLink}
                imageCover={item.imgCoverLink}
                listLinkAff={item.listLinkAff}
                openModal={openModal}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <ModaImage isOpen={isOpenModal} closeModal={closeModal} imageSelected={imageSelected} />
    </div>
  );
}

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons/faImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
export type linkAffType = {
  title: string;
  linkAff: string;
};
type ImageDesignType = {
  image: string;
  imageCover: string;
  listLinkAff: string[];
  openModal(imageCover: string, listImgAff: any[]): void;
};
export default function ImageDesign({ image, imageCover, listLinkAff, openModal }: ImageDesignType) {
  return (
    <div className="bg-blue-500 image-container" onClick={() => openModal(imageCover, listLinkAff)}>
      <Image src={image} alt="Next.js Logo" width={280} height={280} priority className="object-cover img-list" />
      <FontAwesomeIcon icon={faLink} className="icon-link" />
      <FontAwesomeIcon icon={faImages} className="icon-many-image" />
    </div>
  );
}

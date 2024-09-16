import { dataImageType } from "@/app/type";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons/faImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export default function ImageDesign({
  openModal,
  dataImage,
}: {
  openModal(dataImage: dataImageType): void;
  dataImage: dataImageType;
}) {
  return (
    <div
      className="bg-blue-500 image-container"
      onClick={() => openModal(dataImage)}
    >
      <Image
        src={dataImage.linkImage}
        alt="Next.js Logo"
        width={280}
        height={280}
        priority
        className="object-cover img-list"
      />
      <FontAwesomeIcon icon={faLink} className="icon-link" />
      <FontAwesomeIcon icon={faImages} className="icon-many-image" />
    </div>
  );
}

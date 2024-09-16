import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dataImageType } from "./type";
type ModalComponent = {
  isOpenModal: boolean;
  closeModal(): void;
  dataModal: dataImageType | undefined;
};
export default function ModalComponent({
  isOpenModal,
  closeModal,
  dataModal,
}: ModalComponent) {
  return (
    <div>
      <Dialog open={isOpenModal} onOpenChange={closeModal}>
        <DialogContent className="max-w-[870px] min-h-[450px] w-full flex ">
          <div className="grid grid-cols-12  w-full">
            <div className="col-span-7 ">
              <Image
                src="/image_5.webp"
                alt="Image"
                width={500}
                height={500}
                priority
                className="object-cover"
              />
            </div>
            <div className="col-span-5 mt-5">
              <p className="text-center font-semibold">Explore Post Links</p>
              <div className="mt-3 border-b border-gray-300">
                <div className="p-3 flex border-t border-gray-300">
                  <span className="flex items-center justify-center text-center bg-black text-white rounded-full px-3.5 text-sm">
                    1
                  </span>
                  <div className="flex items-center ">
                    <span className="block max-w-[50%] truncate text-sm mx-2">
                      Samsung LC49RG90SSPXXU 49" Curved LED Monitor
                    </span>
                    <Button variant="outline" className="text-sm" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageModalType } from "./type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type ModaImageType = {
  isOpen: boolean;
  closeModal(): void;
  imageSelected: ImageModalType;
};
export default function ModaImage({ isOpen, closeModal, imageSelected }: ModaImageType) {
  console.log({ imageSelected });

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="p-0 min-h-[450px] w-full max-w-[870px] bg-custom-bg border-transparent">
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-tl-lg rounded-bl-lg">
          <div className="flex justify-center items-center bg-custom-bg p-0 m-0 border-0 h-full md:col-span-7">
            <Image
              src={imageSelected?.imageCover}
              alt="Next.js Logo"
              width={280}
              height={280}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="w-[100vw] md:w-full h-auto object-cover rounded-tl-sm rounded-bl-sm"
            />
          </div>

          <div className="md:col-span-5 bg-white">
            <p className="p-4 sm:p-8 min-h-[50px] font-semibold">Explore Post Links</p>
            <div className="border-b border-gray-400">
              <Link
                href=""
                className="flex p-2.5 px-3 border-t border-gray-400 items-center justify-between text-[14px] cursor-pointer"
              >
                <p className="text-xs flex px-2.5 py-1 bg-black text-white rounded-full mr-4">1</p>
                <p className="w-[70%] truncate text-xs">Logitech MX Mechanical Mini Keyboard</p>
                <Button variant="outline" className="ml-3" size={"sm"}>
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

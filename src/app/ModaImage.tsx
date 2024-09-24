import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { ImageModalType } from "./type";
type ModaImageType = {
  isOpen: boolean;
  closeModal(): void;
  imageSelected: ImageModalType;
};
export default function ModaImage({
  isOpen,
  closeModal,
  imageSelected,
}: ModaImageType) {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="p-0 min-h-[450px] w-full max-w-[870px] bg-custom-bg border-transparent overflow-y-auto max-h-screen">
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
            <p className="p-4 sm:p-8 min-h-[50px] font-semibold">
              Explore Post Links
            </p>
            <div className="border-b border-gray-400">
              {imageSelected?.listLinkAff?.map((item: any, index) => {
                return (
                  <Link
                    key={index}
                    href={item?.linkAff}
                    target="_blank" // Mở trong tab mới
                    rel="noopener noreferrer" // Bảo mật tốt hơn khi mở tab mới
                    className="flex p-2.5 px-3 border-t border-gray-400 items-center justify-between text-[14px] cursor-pointer"
                  >
                    <p className="text-[10px] flex items-center justify-center w-6 h-6 bg-black text-white rounded-full mr-4">
                      {index + 1}
                    </p>
                    <p className="w-[70%] truncate text-xs">{item.title}</p>
                    <Button variant="outline" className="ml-3" size={"sm"}>
                      View
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

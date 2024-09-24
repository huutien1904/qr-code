"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import DropDown, { Product } from "@/components/ui/DropDown";
import ImageDesign from "@/components/ui/ImageDesign";
import ModaImage from "./ModaImage";
import { useState } from "react";
import { ImageModalType } from "./type";
import Link from "next/link";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageSelected, setImageSelected] = useState<any>();

  const monitors: Product[] = [
    {
      title: "LG Ultragear 4K UHD 32-Inch Gaming Monitor",
      linkAff: "https://amzn.to/3XSaTrO",
    },
    {
      title: "Apple Studio Display",
      linkAff: "https://amzn.to/3zrpzov",
    },
    {
      title: "LG Dual up Monitor",
      linkAff: "https://amzn.to/3TttyYf",
    },
    {
      title: "ASUS ProArt Monitor 27",
      linkAff: "https://amzn.to/47AGdPg",
    },
    {
      title: "Dell Monitor 27 inch",
      linkAff: "https://amzn.to/47w2Wf3",
    },
    {
      title: "GIGABYTE Monitor 27",
      linkAff: "https://amzn.to/3ZwMZmW",
    },
    {
      title: "BenQ Monitor 27",
      linkAff: "https://amzn.to/47xeFKs",
    },
    {
      title: "PHILIPS 22 inch Class Thin Full HD (1920 x 1080)",
      linkAff: "https://amzn.to/3Biflam",
    },
    {
      title: "SAMSUNG 27 T35F Series FHD 1080p Computer Monitor",
      linkAff: "https://amzn.to/4e8fnjV",
    },
  ];
  const mouses: Product[] = [
    {
      title: "Logitech MX Master 3S",
      linkAff: "https://amzn.to/3XyqLyd",
    },
    {
      title: "Razer Basilisk V3",
      linkAff: "https://amzn.to/3MQQNYF",
    },
    {
      title: "Apple Magic Mouse (White)",
      linkAff: "https://amzn.to/47yLhU8",
    },
    {
      title: "Apple Magic Mouse (Black)",
      linkAff: "https://amzn.to/3XpoqFW",
    },
    {
      title: "Logitech G PRO Wireless Gaming Mouse",
      linkAff: "https://amzn.to/3TAppBT",
    },
    {
      title: "Corsair Nightsabre Wireless",
      linkAff: "https://amzn.to/3TAppBT",
    },
    {
      title: "SteelSeries Aerox 5 Wireless",
      linkAff: "https://amzn.to/47u3a6F",
    },
    {
      title: "Logitech G G502",
      linkAff: "https://amzn.to/3TzryOm",
    },
  ];
  const keyboards: Product[] = [
    {
      title: "Apple Magic Keyboard",
      linkAff: "https://amzn.to/4e9fuvk",
    },
    {
      title: "Apple Magic Keyboard with Touch ID and Numeric Keypad",
      linkAff: "https://amzn.to/4e9rnBE",
    },
    {
      title: "Keychron V6 Mechanical Keyboard",
      linkAff: "https://amzn.to/3XMjLzg",
    },
    {
      title: "Logitech MX Mechanical Mini Wireless",
      linkAff: "https://amzn.to/3TzENib",
    },
    {
      title: "Logitech MX Keys Mini Minimalist Wireless",
      linkAff: "https://amzn.to/4dbXf7d",
    },
    {
      title: "Logitech G G213 Prodigy Gaming Keyboard",
      linkAff: "https://amzn.to/3ZOHFf5",
    },
    {
      title: "ASUS ROG Azoth 75 Wireless",
      linkAff: "https://amzn.to/3Bk2R1X",
    },
    {
      title: "Razer BlackWidow V4 75% Mechanical Gaming Keyboard",
      linkAff: "https://amzn.to/3TzsCSm",
    },
  ];
  const listImgAff = [
    {
      imgLink: "/image_1.webp",
      imgCoverLink: "/1.png",
      listLinkAff: [
        {
          title: "SAMSUNG 49-Inch Odyssey G9 Series DQHD 1000R",
          linkAff: "https://amzn.to/3Zxobv7",
        },
      ],
    },
    {
      imgLink: "/image_2.webp",
      imgCoverLink: "/2.png",
      listLinkAff: [
        {
          title: "Logitech MX Master 3S",
          linkAff: "https://amzn.to/3Bdky3s",
        },
        {
          title: "Logitech MX Mechanical Mini Wireless Illuminated Keyboard",
          linkAff: "https://amzn.to/4eeyk4y",
        },
        {
          title: "LG Electronics UltraFine Monitor 32UN88AP, 32 inch",
          linkAff: "https://amzn.to/4eb0q0s",
        },
        {
          title: "Apple 2023 MacBook Air laptop with M2 chip",
          linkAff: "https://amzn.to/4eaSkEX",
        },
      ],
    },
    {
      imgLink: "/image_3.webp",
      imgCoverLink: "/3.png",
      listLinkAff: [
        {
          title: "Apple Magic Trackpad",
          linkAff: "https://amzn.to/47ARqiE",
        },
        {
          title: "INVZI MagFree Pro Magnetic iPad Stand",
          linkAff: "https://amzn.to/47wHqXH",
        },
        {
          title:
            "Apple 2022 Mac Studio M1 Ultra chip with 20‑core CPU and 48‑core GPU, 64GB RAM, 1TB SSD - Silver",
          linkAff: "https://amzn.to/47DbnWg",
        },
      ],
    },
    {
      imgLink: "/image_4.webp",
      imgCoverLink: "/4.png",
      listLinkAff: [
        {
          title: "Logitech MX Master 3S",
          linkAff: "https://amzn.to/3BaGs7o",
        },
        {
          title: "Apple Magic Keyboard with Touch ID and Numeric Keypad",
          linkAff: "https://amzn.to/3XPvSeY",
        },
        {
          title: "Apple Studio Display",
          linkAff: "https://amzn.to/3XPpF2G",
        },
        {
          title:
            "Apple 2022 Mac Studio M1 Ultra chip with 20‑core CPU and 48‑core GPU, 64GB RAM, 1TB SSD - Silver",
          linkAff: "https://amzn.to/3XAucVf",
        },
        {
          title:
            "SIHOO Ergonomic Office Chair Mesh Desk Chair with Adjustable Lumbar Support 3D Armrests Breathable High Back Computer Chair",
          linkAff: "https://amzn.to/4dnjxTW",
        },
      ],
    },
    {
      imgLink: "/image_5.webp",
      imgCoverLink: "/5.png",
      listLinkAff: [
        {
          title: "Apple Magic Mouse",
          linkAff: "https://amzn.to/3ztvVUl",
        },
        {
          title:
            "Apple Magic Keyboard with Touch ID and Numeric Keypad: Bluetooth, rechargeable. Works with Mac computers silicon; British English, Black keys",
          linkAff: "https://amzn.to/3BgKn2D",
        },
        {
          title: "Apple Studio Display",
          linkAff: "https://amzn.to/47JTwNm",
        },
        {
          title: "Babacom Laptop Stand Lap Desk",
          linkAff: "https://amzn.to/47JTGUY",
        },
        {
          title: "2019 Apple MacBook Pro with 2.6GHz Intel Core i7",
          linkAff: "https://amzn.to/4dcrwTH",
        },
      ],
    },
    {
      imgLink: "/image_6.webp",
      imgCoverLink: "/6.png",
      listLinkAff: [
        {
          title: "iiyama G-Master GB3467WQSU-B5 Curved 1500R 34 Inch 21:9",
          linkAff: "https://amzn.to/4eC7hzT",
        },
        {
          title: "Logitech MX Master 3S",
          linkAff: "https://amzn.to/3zwMi2u",
        },
        {
          title:
            "Orbitkey Desk Mat Medium - Mouse Pad and Desk Organizer Black",
          linkAff: "https://amzn.to/4dfhz7R",
        },
        {
          title: "Apple 2022 10.9",
          linkAff: "https://amzn.to/4ezbkwF",
        },
        {
          title: "Beelta Magnetic iPad Stand Holder Adjustable",
          linkAff: "https://amzn.to/47Eg6GZ",
        },
      ],
    },
    {
      imgLink: "/image_7.webp",
      imgCoverLink: "/7.png",
      listLinkAff: [
        {
          title: "Logitech G Pro X Superlight 2 Lightspeed Wireless Gaming",
          linkAff: "https://amzn.to/47Aw2Kk",
        },
        {
          title:
            "Apple Magic Keyboard with Touch ID and Numeric Keypad: Wireless, Bluetooth",
          linkAff: "https://amzn.to/4devs6f",
        },
        {
          title:
            "LG 28MQ780-B 28 Inch SDQHD (2560 x 2880) Nano IPS DualUp Monitor with ",
          linkAff: "https://amzn.to/3MSwaLI",
        },
        {
          title:
            "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand",
          linkAff: "https://amzn.to/3TGR2tk",
        },
        {
          title:
            "Apple Magic Trackpad: Wireless, Bluetooth, Rechargeable. Works with Mac or iPad; Multi-Touch Surface - Black",
          linkAff: "https://amzn.to/4edekPJ",
        },
      ],
    },
    {
      imgLink: "/image_8.webp",
      imgCoverLink: "/8.png",
      listLinkAff: [
        {
          title:
            "Keychron C2 Full Size Hot-swappable Wired Mechanical Keyboard Compatible with Mac, Keychron Red Switch, 104 Keys ABS Retro Color Keycaps Gaming Keyboard for Windows, USB-C Type-C Braid Cable",
          linkAff: "https://amzn.to/4ebsaln",
        },
        {
          title: "Apple Magic Mouse: Wireless, Bluetooth",
          linkAff: "https://amzn.to/3TCnkp8",
        },
        {
          title:
            "Apple Studio Display - Nano-Texture Glass - Tilt- and Height-Adjustable Stand ​​​​​​​",
          linkAff: "https://amzn.to/4ecUXWW",
        },
        {
          title:
            "PyleUsa HiFi Active Bookshelf Speaker with Bluetooth - Audio Stereo Monitor Speaker System",
          linkAff: "https://amzn.to/3TypxBR",
        },
      ],
    },
    {
      imgLink: "/image_9.webp",
      imgCoverLink: "/9.png",
      listLinkAff: [
        {
          title:
            "SAMSUNG 27-Inch S39C Series FHD Curved Gaming Monitor, 75Hz, AMD FreeSync, ",
          linkAff: "https://amzn.to/3XQ8P3F",
        },
        {
          title:
            "Logitech MX Master 3S for Mac Wireless Bluetooth Mouse, Ultra-Fast Scrolling",
          linkAff: "https://amzn.to/4e9Jpnt",
        },
        {
          title:
            "Keychron K4 Hot swappable Wireless Bluetooth/USB Wired Mechanical Gaming Keyboard",
          linkAff: "https://amzn.to/3TFgIGJ",
        },
        {
          title: "Marshall Emberton II Portable Bluetooth Speaker, Cream",
          linkAff: "https://amzn.to/4e7mQzA",
        },
      ],
    },
    {
      imgLink: "/image_10.webp",
      imgCoverLink: "/10.png",
      listLinkAff: [
        {
          title:
            "SAMSUNG 49-Inch Odyssey G9 Series DQHD 1000R Curved Gaming Monitor, 1ms(GtG)",
          linkAff: "https://amzn.to/3TzByr2",
        },
      ],
    },
    {
      imgLink: "/image_11.webp",
      imgCoverLink: "/11.png",
      listLinkAff: [
        {
          title: "MSI G274, 27 Gaming Monitor, 1920 x 1080 (FHD)",
          linkAff: "https://amzn.to/3MTxNsv",
        },
        {
          title: "Logitech G Wireless Gaming Combo",
          linkAff: "https://amzn.to/3MTxYUH",
        },
        {
          title: "FIFINE XLR/USB Microphone with 3.5mm/6.35mm Headphones,",
          linkAff: "https://amzn.to/3ZvvF1P",
        },
        {
          title:
            "Logitech G PRO X Gaming Headset (2nd Generation) with Blue Yeti",
          linkAff: "https://amzn.to/3ZvvQKx",
        },
        {
          title:
            "8Bitdo Ultimate 2.4G Wireless Controller, Hall Effect Joystick Update",
          linkAff: "https://amzn.to/3XznXAX",
        },
      ],
    },
    {
      imgLink: "/image_12.webp",
      imgCoverLink: "/12.png",
      listLinkAff: [
        {
          title: "Yamaha HS3 Powered Studio Monitor in White, Pair (HS3 W)",
          linkAff: "https://amzn.to/3ZFYhVU",
        },
        {
          title:
            "Logitech MX Master 3S for Mac Wireless Bluetooth Mouse, Ultra-Fast Scrolling, Ergo",
          linkAff: "https://amzn.to/4eprSra",
        },
        {
          title: "Keychron K8 Tenkeyless Wireless Mechanical Keyboard for Mac",
          linkAff: "https://amzn.to/3XQ9mTd",
        },
        {
          title: "Apple Studio Display - Standard Glass",
          linkAff: "https://amzn.to/4gyRPpM",
        },
        {
          title:
            "Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling",
          linkAff: "https://amzn.to/3XTM6Ur",
        },
      ],
    },
    {
      imgLink: "/image_13.webp",
      imgCoverLink: "/13.png",
      listLinkAff: [
        {
          title: "Kensington iPad Docking Station",
          linkAff: "https://amzn.to/3XCz8sz",
        },
        {
          title:
            "Edifier MR4 Powered Studio Monitor Speakers with 7 Desktop Speaker Stands 1 Pair",
          linkAff: "https://amzn.to/4dfg3To",
        },
        {
          title:
            "HP E24 G5 23.8 Full HD LCD Monitor - 16:9-24 Class - in-Plane Switching (IPS) Technology",
          linkAff: "https://amzn.to/4ezfSTW",
        },
        {
          title:
            "Blue Yeti USB Microphone for PC, Mac, Gaming, Recording, Streaming, and Podcasting + Logitech StreamCam for Streaming and Content Creation",
          linkAff: "https://amzn.to/4eiDAUQ",
        },
      ],
    },
    {
      imgLink: "/image_14.webp",
      imgCoverLink: "/14.png",
      listLinkAff: [
        {
          title:
            "OUTFINE Heavy Duty Dual Motor Height Adjustable Standing Desk Electric Dual Motor Home Office Stand Up Computer",
          linkAff: "https://amzn.to/4dc9T6d",
        },
        {
          title: "Logitech MX Master 3S, Black",
          linkAff: "https://amzn.to/3Bqk3CY",
        },
        {
          title:
            "Logitech MX Mechanical Wireless Illuminated Performance Keyboard",
          linkAff: "https://amzn.to/4dgBsLT",
        },
        {
          title:
            "LG UltraWide QHD 34-Inch Computer Monitor 34WP65C-B, VA with HDR 10 Compatibility and AMD FreeSync Premium, Black",
          linkAff: "https://amzn.to/3zBkwSk",
        },
        {
          title: "Beats Solo 4 Wireless Headphones - Matte Black",
          linkAff: "https://amzn.to/3BaONIm",
        },
      ],
    },
    {
      imgLink: "/image_15.webp",
      imgCoverLink: "/15.png",
      listLinkAff: [
        {
          title: "LG C3 Series 42-Inch Class OLED evo 4K Processor Smart TV",
          linkAff: "https://amzn.to/47yYMmT",
        },
        {
          title: "Logitech MX Master 3S, Black",
          linkAff: "https://amzn.to/3XTMBhh",
        },
        {
          title:
            "Audioengine A2 White Bluetooth Speakers and DS1M Metal Stands",
          linkAff: "https://amzn.to/47AdslA",
        },
        {
          title: "Apple Mac Mini Desktop Computer",
          linkAff: "https://amzn.to/4eaR18Z",
        },
        {
          title:
            "Londo Top Grain Leather Extended Mouse Pad - Desk Mat (Black)",
          linkAff: "https://amzn.to/3XV3BUp",
        },
      ],
    },
    {
      imgLink: "/image_16.webp",
      imgCoverLink: "/16.png",
      listLinkAff: [
        {
          title:
            "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand",
          linkAff: "https://amzn.to/3zw3MMq",
        },
        {
          title: "Apple Magic Keyboard with Touch ID: Wireless",
          linkAff: "https://amzn.to/3zu42LM",
        },
        {
          title:
            "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling",
          linkAff: "https://amzn.to/3XE9bZM",
        },
        {
          title:
            "BenQ ScreenBar Monitor Light, LED Computer Monitor Lamp, Auto-Dimming, Hue Adjustment Features",
          linkAff: "https://amzn.to/3ztbQNU",
        },
        {
          title:
            "Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display,",
          linkAff: "https://amzn.to/3XBYF5j",
        },
      ],
    },
    {
      imgLink: "/image_17.webp",
      imgCoverLink: "/17.png",
      listLinkAff: [
        {
          title:
            "LG 38WN95C-W Monitor 38 21:9 Curved UltraWide QHD+ (3840 x 1600) Nanio IPS Display",
          linkAff: "https://amzn.to/47BLztk",
        },
        {
          title: "BenQ ScreenBar Monitor Light, LED Computer Monitor Lamp",
          linkAff: "https://amzn.to/3TCSJrA",
        },
        {
          title:
            "Logitech for Creators Blue Sona Active Dynamic XLR Broadcast Microphone for Streaming",
          linkAff: "https://amzn.to/3ZB6H16",
        },
        { title: "Apple Magic Trackpad", linkAff: "https://amzn.to/3TzHfFl" },
        {
          title: "Elgato Stream Deck MK.2 – Studio Controller",
          linkAff: "https://amzn.to/3zr0JoM",
        },
      ],
    },
    {
      imgLink: "/image_18.webp",
      imgCoverLink: "/18.png",
      listLinkAff: [
        {
          title: "LG Ultragear 4K UHD 32-Inch Gaming Monitor 32GQ750-B",
          linkAff: "https://amzn.to/3XDuz1v",
        },
        {
          title:
            "Razer Cobra Pro Wireless Gaming Mouse: 10 Customizable Controls",
          linkAff: "https://amzn.to/3XSDfCf",
        },
        {
          title:
            "Audioengine A2 White Bluetooth Speakers and DS1M Metal Stands",
          linkAff: "https://amzn.to/3TEErXD",
        },
        {
          title: "Azar Displays, 900945-WHT, 70 Piece Pegboard Organizer,",
          linkAff: "https://amzn.to/3XDvVce",
        },
        {
          title:
            "Razer BlackWidow V4 75% Mechanical Gaming Keyboard: Hot-Swappable Design - Compact & Durable - Orange Tactile Switches",
          linkAff: "https://amzn.to/4gO1t8r",
        },
      ],
    },
    {
      imgLink: "/image_19.webp",
      imgCoverLink: "/19.png",
      listLinkAff: [
        {
          title:
            "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand",
          linkAff: "https://amzn.to/4eckejV",
        },
        { title: "Apple 2021 MacBook Pro", linkAff: "https://amzn.to/4dfgRaS" },
        {
          title: "Logitech MX Master 3S, Black",
          linkAff: "https://amzn.to/4gzVYd1",
        },
        {
          title: "Edifier MR4 Powered Studio Monitor Speakers with SS5",
          linkAff: "https://amzn.to/3BhEHFx",
        },
        {
          title:
            "Logitech MX Mechanical Wireless Illuminated Performance Keyboard,",
          linkAff: "https://amzn.to/3TEWJrE",
        },
      ],
    },
    {
      imgLink: "/image_20.webp",
      imgCoverLink: "/20.png",
      listLinkAff: [
        {
          title: "VILVA Portable-Monitor-for-Laptop - 15.6",
          linkAff: "https://amzn.to/3ZAwuGK",
        },
        {
          title:
            "SAMSUNG 32-Inch Odyssey G55C Series QHD 1000R Curved Gaming Monitor, 1ms(MPRT), H",
          linkAff: "https://amzn.to/3TBYcPr",
        },
        {
          title:
            "Razer Orochi V2 Mobile Wireless Gaming Mouse: Ultra Lightweight - 2 Wireless Modes - Up to 950hrs Battery Life - Mechanical Mo",
          linkAff: "https://amzn.to/3XRCDNb",
        },
        {
          title:
            "BenQ ScreenBar Monitor Light, LED Computer Monitor Lamp, Auto-Dimming, Hue Adjustment Features, E-Reading USB Powered Monitor Lig",
          linkAff: "https://amzn.to/3BffFXy",
        },
      ],
    },
    {
      imgLink: "/image_21.webp",
      imgCoverLink: "/21.png",
      listLinkAff: [
        {
          title:
            "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand",
          linkAff: "https://amzn.to/47yInPj",
        },
        {
          title:
            "Apple Mac Mini Desktop Computer, M2 Chip with 8-Core CPU and 10-",
          linkAff: "https://amzn.to/3ZuKHVx",
        },
        {
          title:
            "Apple Magic Keyboard with Touch ID and Numeric Keypad: Wireless",
          linkAff: "https://amzn.to/4dezBaj",
        },
        {
          title: "Logitech MX Master 3S, Black",
          linkAff: "https://amzn.to/4diJC6u",
        },
        {
          title:
            "Aothia Large Dual Monitor Stand Riser, Solid Wood Desk Shelf with Eco Cork Legs for",
          linkAff: "https://amzn.to/4dmliR4",
        },
      ],
    },
    {
      imgLink: "/image_22.webp",
      imgCoverLink: "/22.png",
      listLinkAff: [
        {
          title:
            "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand",
          linkAff: "https://amzn.to/4eaTbW9",
        },
        {
          title: "Apple Mac Mini Desktop Co",
          linkAff: "https://amzn.to/3BnvJXa",
        },
        {
          title:
            "Apple Magic Keyboard with Touch ID and Numeric Keypad: Wireless, Bluetooth",
          linkAff: "https://amzn.to/3ZAxZVo",
        },
        {
          title:
            "Aothia Large Dual Monitor Stand Riser, Solid Wood Desk Shelf with Eco Cork Legs for Laptop C",
          linkAff: "https://amzn.to/4ddMC3T",
        },
      ],
    },
    {
      imgLink: "/image_23.webp",
      imgCoverLink: "/23.png",
      listLinkAff: [
        {
          title:
            "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand",
          linkAff: "https://amzn.to/3zu5JZE",
        },
        {
          title:
            "Apple 2023 Mac Mini Desktop Computer M2 chip with 8 core CPU and ",
          linkAff: "https://amzn.to/4dgf1X1",
        },
        {
          title:
            "Apple Magic Keyboard with Touch ID and Numeric Keypad: Wireless",
          linkAff: "https://amzn.to/3zr2Ade",
        },
        {
          title: "Logitech MX Master 3S, Black",
          linkAff: "https://amzn.to/3XDvMWB",
        },
        {
          title:
            "Aothia Large Dual Monitor Stand Riser, Solid Wood Desk Shelf with Eco Cork Legs for Laptop Computer/",
          linkAff: "https://amzn.to/4e9Lks3",
        },
      ],
    },
    {
      imgLink: "/image_24.webp",
      imgCoverLink: "/24.png",
      listLinkAff: ["link1", "link2"],
    },
  ];
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openModal = (imageCover: string, listLinkAff: any[]) => {
    setIsOpenModal(true);
    setImageSelected({ imageCover: imageCover, listLinkAff: listLinkAff });
  };
  return (
    <div className="main">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert image"
        src="/logo.jpg"
        alt="Next.js Logo"
        width={380}
        height={37}
        priority
      />
      <div className="wrap-title">
        <span className="title">DecorHomeVibe</span>
        <p>(Our website may contain affiliate links)</p>
      </div>
      <div className="wrap-social">
        <Link
          href={"https://www.instagram.com/Decor_home_vibes_1904/"}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href={"https://uk.pinterest.com/Decorhomevibe/"} target="_blank">
          <FontAwesomeIcon icon={faPinterest} />
        </Link>
      </div>
      <DropDown data={monitors} title="TOP MONITORS OF 2024" />
      <DropDown data={mouses} title="TOP MOUSE OF 2024" />
      <DropDown data={keyboards} title="TOP KEYBOARDS OF 2024" />
      <div className="max-w-[680px] w-full mt-4 px-2">
        <div className="grid grid-cols-3 gap-2">
          {listImgAff.map((item: any, index) => {
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
      <ModaImage
        isOpen={isOpenModal}
        closeModal={closeModal}
        imageSelected={imageSelected}
      />
    </div>
  );
}

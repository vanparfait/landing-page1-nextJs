import Image from "next/image";
import React from "react";
import bgImage from "../../../public/background.webp";
//import bgImage from "@/public/background.webp";

const BackgroundImage = () => {
  return (
    <Image
      src={bgImage}
      alt="background"
      placeholder="blur"
      fill
      sizes="100vw"
      className="object-cover z-[-1]"
    />
  );
};

export default BackgroundImage;

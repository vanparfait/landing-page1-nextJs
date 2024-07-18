import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo.png"}
        alt="Mediacy"
        width={36}
        height={36}
        priority
        className="cursor-pointer w-auto h-auto"
      />
    </div>
  );
};

export default Logo;

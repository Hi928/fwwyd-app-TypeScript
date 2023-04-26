import Image from "next/image";
import {
  footerListItems as listItems,
  footerImageItems as imageItems,
  footerSnsItems as snsItems,
} from "../../data/data";
import React from "react";

type Props = {
  name: string;
  copyRight: string;
};

type Image = {
  id: number;
  src: string;
  height: number;
  width: number;
  alt: string;
};

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className="bg-slate-800 flex flex-col items-center">
      <p className="hidden sm:block mt-6 text-white text-xl">
        {`CREATED BY ${props.name}`}
      </p>
      <ul className="text-white flex text-sm gap-4 flex-wrap justify-center sm:hidden">
        {listItems.map((item) => (
          <li key={item.id} className="w-1/3 py-2">
            {item.content}
          </li>
        ))}
      </ul>
      <Image
        priority
        src={imageItems.src}
        height={imageItems.height}
        width={imageItems.width}
        className="items-center mt-10"
        alt={imageItems.alt}
      />
      <div className="flex items-center gap-10 mt-8">
        {snsItems.map((item: Image) => (
          <Image
            priority
            key={item.id}
            src={item.src}
            height={item.height}
            width={item.width}
            className="items-center"
            alt={item.alt}
          />
        ))}
      </div>
      <p className="mt-8 text-white text-xs mb-6">{props.copyRight}</p>
    </footer>
  );
};

export default Footer;

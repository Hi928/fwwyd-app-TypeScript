import Image from "next/image";

type ContentItem = {
  id: number;
  content: string;
};

export const Navi = ({ listItems }) => {
  return (
    <>
      <div className="flex sm:items-center">
        <Image
          priority
          src="/images/logo.png"
          height={180}
          width={144}
          className="items-center"
          alt="ロゴ"
        />
      </div>
      <ul className="flex gap-12 sm:items-center sm:gap-8 sm:mr-4">
        {listItems.map((item: ContentItem) => (
          <li key={item.id} className="text-cyan-600">
            {item.content}
          </li>
        ))}
      </ul>
    </>
  );
};

import Image from "next/image";
import { aboutListItems as listItems } from "../../data/data";

type Props = {
  title: string;
  subTitle: string;
};

type Image = {
  id: number;
  src: string;
  height: number;
  width: number;
};

const About: React.FC<Props> = (props) => {
  return (
    <div className="bg-[url('/images/bg-about.png')] bg-cover bg-center">
      <h3 className="mt-8 py-4 px-4 text-2xl text-gray-700 text-center">
        {props.title}
        <span className="block text-green-700 ml-4 text-lg align-middle sm:inline">
          {props.subTitle}
        </span>
      </h3>
      <ul className="sm:flex flex-row justify-center items-center">
        {listItems.map((item) => (
          <li key={item.id} className="flex flex-col items-center mt-8">
            {item.images.map((image: Image) => (
              <Image
                key={image.id}
                priority
                src={image.src}
                height={image.height}
                width={image.width}
                alt=""
              />
            ))}
            <h4 className="my-2 py-4 px-4 text-2xl text-teal-700 text-center">
              {item.title}
            </h4>
            <p className="my-2 py-4 px-4">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;

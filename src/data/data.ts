import { ImageListItem, ListItem } from "../type/type";

export const aboutListItems: ListItem[] = [
  {
    id: 1,
    images: [
      { src: "/images/about-1.png", height: 184, width: 157, alt: "趣味" },
    ],
    title: "趣味",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
  },
  {
    id: 2,
    images: [
      {
        src: "/images/about-2.png",
        height: 206,
        width: 158,
        alt: "好きな食べ物",
      },
    ],
    title: "好きな食べ物",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
  },
  {
    id: 3,
    images: [
      { src: "/images/about-3.png", height: 245, width: 149, alt: "性格" },
    ],
    title: "性格",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
  },
];

export const footerListItems: ListItem[] = [
  { id: 1, content: "お問い合わせ" },
  { id: 2, content: "助成金について" },
  { id: 3, content: "特定商取引法に基づく表記" },
  { id: 4, content: "プライバシーポリシー" },
];

export const footerImageItems: ImageListItem = {
  id: 1,
  src: "/images/logo_white.png",
  height: 80,
  width: 100,
  alt: "ロゴ",
};

export const footerSnsItems: ImageListItem[] = [
  {
    id: 1,
    src: "/images/twitter.png",
    height: 24,
    width: 24,
    alt: "twitter",
  },
  {
    id: 2,
    src: "/images/facebook.png",
    height: 24,
    width: 24,
    alt: "facebook",
  },
];

export const futureListItems: ListItem[] = [
  {
    id: 1,
    images: [],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum incidunt accusamus ratione cumque tenetur quaerat laboriosam, optio deleniti fuga repellendus quidem, totam culpa asperiores rem cupiditate similique quod veritatis!",
  },
  ,
  {
    id: 2,
    images: [
      { src: "/images/future.png", height: 480, width: 251, alt: "future" },
    ],
    content: "",
  },
];

export const headerListItems: ListItem[] = [
  { id: 1, content: "ABOUT" },
  { id: 2, content: "SKILLS" },
  { id: 3, content: "VALUES" },
  { id: 4, content: "FUTURE" },
];

export const skillsListItems: ListItem[] = [
  {
    id: 1,
    images: [
      { src: "/images/skill.png", height: 535, width: 372, alt: "skill" },
    ],
    content: "",
  },
  {
    id: 2,
    images: [],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum incidunt accusamus ratione cumque tenetur quaerat laboriosam, optio deleniti fuga repellendus quidem, totam culpa asperiores rem cupiditate similique quod veritatis!",
  },
];

export const valueListItems: ListItem[] = [
  {
    id: 1,
    images: [
      { src: "/images/value1.png", height: 200, width: 200, alt: "value01" },
    ],
    title: "価値観01",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
  },
  {
    id: 2,
    images: [
      { src: "/images/value2.png", height: 200, width: 200, alt: "value02" },
    ],
    title: "価値観02",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
  },
  {
    id: 3,
    images: [
      { src: "/images/value3.png", height: 200, width: 200, alt: "value03" },
    ],
    title: "価値観03",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
  },
];

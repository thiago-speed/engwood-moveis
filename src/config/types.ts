export type MediaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  credit?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  place: string;
  office: string;
  blurb: string;
  body: string;
  image: MediaImage;
  images: MediaImage[];
};

export type MatterItem = {
  id: string;
  title: string;
  text: string;
  image: MediaImage;
};

import { NextSeo } from "next-seo";

interface Props {
  title?: string;
  description?: string;
  defaultTitle?: string;
}

export default function Head({ defaultTitle, title, description }: Props) {
  return (
    <NextSeo
      title={title}
      defaultTitle={defaultTitle}
      description={description}
      openGraph={{
        title: title,
        description: description,
      }}
    />
  );
}

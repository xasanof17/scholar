import { NextSeo } from "next-seo";

interface Props {
  title?: string;
  description?: string;
  defaultTitle?: string;
  key?: string;
}

export default function Meta({ title, description, defaultTitle, key }: Props) {
  return (
    <NextSeo
      title={title}
      defaultTitle={defaultTitle}
      description={description}
      key={key}
      openGraph={{
        type: "website",
        title: title,
        description: description,
        siteName: "https://scholar-roan.vercel.app",
        url: "https://scholar-roan.vercel.app",
      }}
      nofollow
      themeColor="#fff"
      // robotsProps={}
      // facebook={}
      // twitter={}
    />
  );
}

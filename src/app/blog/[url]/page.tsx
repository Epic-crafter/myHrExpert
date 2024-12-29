"use server";
import React from "react";
import Blogpage from "./component/blogpage";

const Page = ({ params }:any) => {
  return <Blogpage params={params} />;
};
export async function generateMetadata({ params }:any) {
  let blog = {
    title: "",
    description: "",
    keywords: "",
  };

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/metadata/blog/${params?.url}`
    );
    const data = await res.json();
    blog = data.blog.meta;
  } catch (error) {
    console.log(error);
  }

  return {
    title: `${blog?.title} - My hr expert`,
    description: blog?.description,
    openGraph: {
      title: ` ${blog?.title} -  My hr expert`,
      description: blog?.description,
      url: `${process.env.BASE_URL}/blog/${params.url}`,
    },
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.BASE_URL}/blog/${params.url}`,
    },
  };
}
export default Page;

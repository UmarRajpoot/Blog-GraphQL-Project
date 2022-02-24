import Head from "next/head";
import Image from "next/image";

import { getPosts } from "../services";

import { PostCard, Categories, PostWidget } from "../components";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  const post = [
    { title: "React Testing", excerpt: "Learn React Testing." },
    {
      title: "React Tailwind",
      excerpt: "Learn React with Tailwind and Hooks.",
    },
  ];

  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Blog CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-col-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

import styles from "./page.module.css";
import Prose from "@/components/prose/prose";
import ReactMarkdown from "react-markdown";
// import { post } from "@/jsdata/post";
// import post from "@/jsondata/post";
import * as Post from "@/mdxcontent/post.mdx";
import { CustomLink } from "@/components/customlink/customlink";
import { MDXImage } from "@/components/mdx-image/mdx-image";

export const metadata = {
  title: Post.meta.title,
  subtitle: Post.meta.subtitle,
};

const components = {
  a: CustomLink,
  img: MDXImage,
};

const content = `
# My Blog
This is a paragraph.

## Problem
- Low engagement
- High churn
`;

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Prose size="md">
        <h1>Hello</h1>
        <p>This is a test of the prose component.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <blockquote>This is a test of theblockquote component.</blockquote>
        <code>This is a test of the code component.</code>
      </Prose> */}
      {/* <Prose>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Prose> */}
      {/* <Prose>
        <Post />
      </Prose> */}

      {/* new stuff */}
      {/* <Prose
        header={{ title: "Title", subtitle: "Subtitle" }}
        image={{ src: "/globe.svg", alt: "Example" }}
        sections={[
          { title: "Problem", body: "Users were dropping off..." },
          { title: "Approach", body: "We simplified the onboarding..." },
        ]}
      /> */}
      {/* <Prose {...post} /> */}
      <Prose
        header={{
          title: Post.meta.title,
          subtitle: Post.meta.subtitle,
        }}
        image={{
          src: Post.meta.image,
          alt: Post.meta.title,
        }}
        sections={[]} // not needed anymore
      >
        {/* <Post.default /> */}
        <Post.default components={components} />
      </Prose>
    </div>
  );
}

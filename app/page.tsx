import Feed from "@components/Feed";

export default function HomePage() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-aource AI prompting tool for modern wo0rld to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
}

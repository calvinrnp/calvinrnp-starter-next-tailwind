import type { NextPage } from "next";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

const Home: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js + Tailwind Starter"
          description="A starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-xl">This is a starter website</h1>
    </Main>
  );
};

export default Home;

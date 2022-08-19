import React from "react";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title="About | Next.js + Tailwind Starter"
          description="A starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-xl">About</h1>
    </Main>
  );
};

export default About;

import React, { Component } from "react";
import QuoteModule from "@components/modules/quote";
import AboutHeader from "./Header";
import Hero from "./hero";
import HeroImage from "./hero/heroImage";
import StoryPanel from "./StoryPanel";
import MainStoryPanel from "./MainStoryPanel";
import { Container } from "./styles";

import StoryThumbnail from "public/assets/temp/story_thumbnail.png";
import MainStoryThumbnail from "public/assets/temp/story_thumbnail_main.png";

const AboutPage = ({ pageData, notifications }) => {
  const stories = [
    {
      id: 0,
      title: (
        <h4>
          Fibonacci.
          <br />
          Why we create.
        </h4>
      ),
      accentText: "A method to create",
      content:
        "<p>With what begins as a collection of random, disparate and often humble materials, the technique of terrazzo creation works to elevate the individual to create a collective beauty. It’s a synthesis of raw materials chosen to complement and highlight each other, all bound elegantly together then finished to form a complex union of lasting strength and durability. <br/><br/>It’s an age-old story of natural elements and human-influence combining to create more than the sum of its parts.<br/><br/>It was in recognising that terrazzo, far from being the end product, was actually a technique - a method to create, with infinite inherent possibilities -that inspired Founder and Creative Director Michael Karakolis. With his trained eye for design and passion for great architecture, he imagined a world where these ancient crafting traditions met with contemporary design aesthetics; where beautiful new terrazzo designs would inspire further creativity and make a significant contribution to the design world, current and future.  So, with an energetic entrepreneurial spirit and a deeply-entrenched/compelling/ desire to build a business for his family, Michael created Fibonacci</p>",
      thumbnail: StoryThumbnail,
    },
    {
      id: 1,
      title: <h4>LIKE NO OTHER</h4>,
      accentText: "A wholistic end-to-end process",
      content:
        "<p>Fibonacci, a proudly family-operated company, supplies terrazzo to more Australian projects than any other company across the residential, retail, hospitality, corporate and commercial sectors.<br/><br/>Each design is conceived by Michael Karakolis, then created together with select highly-trusted and specialised international manufacturing partners.  Each and every raw material is both sourced and quality checked.  And, understanding that timing is everything, Fibonacci made a game-changing move, curating a revolutionary inventory process to ensure that each and every tile and slab is available to ship immediately, with no lead times, and no minimum order quantities and no delays.<br/><br/>It’s a uniquely wholistic end-to-end process, and Michael’s vision for Fibonacci to become an integral part of many of the most creatively lauded and awarded projects, and to further inspire bespoke applications of the highest creative and aesthetic calibre, has been realised.<br/><br/>That’s why we are Like No Other</p>",
    },
  ];
  const mainStory = {
    title: <h4>Terrazzo and the environment</h4>,
    subTitle: <h4>Holistic • Sustainable • Considered</h4>,
    accentText: "A holistic, sustainable cycle",
    content:
      "<p>Fibonacci believes in a holistic, sustainable cycle, from go to whoa.<br/><br/>We control our supply chain and ensure our products comprise only up-cycled natural stone, cement and inorganic pigments that can be 100% recycled, usually as crushed rock fill for road and building construction. Our products are free of Volatile Organic Compounds  (VOC’s). Our unique planned inventory ensures that our products are always in stock, with no lead time, but it also saves up to 20% on wastage when compared to a ‘made-to-order’ production model. Our warehouse woodchips our pallets for use in gardens and public spaces. We only send samples on request, rather than cumbersome and frequently outdated full product libraries.<br/><br/>But most importantly… long term, terrazzo wears in, not out. </p>",
    thumbnail: MainStoryThumbnail,
  };

  return (
    <Container>
      <AboutHeader mode="dark" notifications={notifications} />
      {pageData?.ourStoryComponents?.length > 0 && pageData.ourStoryComponents.map((component, index) => {
          if(component.__typename === "ourStoryComponents_headingLeftTextRight_BlockType") {
            return (<Hero key={`component-${index}`} component={component} />)
          }
          if(component.__typename === "ourStoryComponents_heroImage_BlockType") {
            return (<HeroImage key={`component-${index}`} component={component} />)
          }
          if(component.__typename === "ourStoryComponents_quote_BlockType") {
            return (
              <QuoteModule key={`component-${index}`} source={component.subLine  }>
                ‘{component.heading}’
              </QuoteModule>
            )
          }
      })}
     
      {/* <Hero /> */}
      {stories.map((story) => (
        <StoryPanel key={story.id} story={story} />
      ))}
      <MainStoryPanel story={mainStory} />
     
    </Container>
  );
};

export default AboutPage;

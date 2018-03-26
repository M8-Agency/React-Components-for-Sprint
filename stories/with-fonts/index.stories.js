import React from "react";
import styled from "styled-components";
import { WithFonts } from "../../src";

const StyledDemo = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p {
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
  }

  h1,
  h2 {
    font-weight: 800;
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;

const WithFontsStory = () => {
  return (
    <div>
      <h1>{`<WithFonts />`} Component</h1>
      <p>
        The <strong>WithFonts</strong> wrapper component imports Sprint's CSS
        @font-faces and the appropriate font files to your React project. As you
        might imagine, these paragraphs are NOT wrapped by the {`<WithFonts />`}{" "}
        component.
      </p>
      <WithFonts>
        <p>
          Now, check out these pragraphs that are wrapped by the{" "}
          {`<WithFonts />`} component. The fonts are now working and they are
          already compressed and served from a CDN. <strong>Enjoy!</strong>
        </p>

        <p>Check out the different font weights and style examples below.</p>

        <hr />

        <StyledDemo>
          <h1>Heading H1</h1>

          <h2>Heading H2</h2>

          <h3>Heading H3</h3>

          <h4>Heading H4</h4>

          <h5>Heading H5</h5>

          <h6>Heading H6</h6>

          <h3>Paragraph</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            egestas eget magna eget venenatis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. <strong>Donec eget</strong> venenatis
            felis. Duis vehicula ante id turpis mattis iaculis eu quis sapien.
            Quisque cursus risus eu erat maximus posuere. Ut vehicula rhoncus
            felis, vel consequat orci scelerisque eget.{" "}
            <span style={{ fontWeight: 100 }}>
              Proin vitae lacus enim. Sed vitae porta ante, non sodales sapien.
            </span>{" "}
            Suspendisse vehicula eget erat efficitur semper.
          </p>

          <h3>Different font styles and weights</h3>
          <ul>
            <li style={{ fontWeight: 100, fontStyle: "normal" }}>
              Font weight 100, font style normal.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 500, fontStyle: "normal" }}>
              Font weight 500 (normal), font style normal.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 700, fontStyle: "normal" }}>
              Font weight 700 (bold), font style normal.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 800, fontStyle: "normal" }}>
              Font weight 800, font style normal.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 900, fontStyle: "normal" }}>
              Font weight 900, font style normal.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 100, fontStyle: "italic" }}>
              Font weight 100, font style italic.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 500, fontStyle: "italic" }}>
              Font weight 500 (normal), font style italic.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 700, fontStyle: "italic" }}>
              Font weight 700 (bold), font style italic.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 800, fontStyle: "italic" }}>
              Font weight 800, font style italic.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>

            <li style={{ fontWeight: 900, fontStyle: "italic" }}>
              Font weight 900, font style italic.{" "}
              <span style={{ textTransform: "uppercase" }}>
                And this is some uppercase text of the same weight and style.
              </span>
            </li>
          </ul>
        </StyledDemo>
      </WithFonts>
    </div>
  );
};

export default WithFontsStory;

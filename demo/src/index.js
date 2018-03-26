import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { WithFonts } from "../../src";

const StyledDemo = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p {
    margin-bottom: 1rem;
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

class Demo extends Component {
  render() {
    return (
      <WithFonts>
        <StyledDemo>
          <h1>Sprint React Web Components</h1>

          <h2>Text Examples</h2>

          <h3>Headings</h3>

          <ul>
            <li>
              <h1>Heading H1</h1>
            </li>
            <li>
              <h2>Heading H2</h2>
            </li>
            <li>
              <h3>Heading H3</h3>
            </li>
            <li>
              <h4>Heading H4</h4>
            </li>
            <li>
              <h5>Heading H5</h5>
            </li>
            <li>
              <h6>Heading H6</h6>
            </li>
          </ul>

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
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

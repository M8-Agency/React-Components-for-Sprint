import React, { Component } from "react";
import styled from "styled-components";

const CDN_URL = "https://m8-gsa-vxhdb1nikcdy49t.stackpathdns.com";
const FontWrapper = styled.div`
  
  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 100;
    font-style: normal;
    src: url("${CDN_URL}/fonts/sprint-sans-light.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-light.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-light.woff2")
        format("woff2"),
      url("${CDN_URL}/fonts/sprint-sans-light.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-light.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-light.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 100;
    font-style: italic;
    src: url("${CDN_URL}/fonts/sprint-sans-light-italic.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-light-italic.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-light-italic.woff2")
        format("woff2"),
      url("${CDN_URL}/fonts/sprint-sans-light-italic.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-light-italic.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-light-italic.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 400;
    font-style: normal;
    src: url("${CDN_URL}/fonts/sprint-sans-regular.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-regular.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-regular.woff2")
        format("woff2"),
      url("${CDN_URL}/fonts/sprint-sans-regular.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-regular.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-regular.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 400;
    font-style: italic;
    src: url("${CDN_URL}/fonts/sprint-sans-regular-italic.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-regular-italic.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-regular-italic.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-regular-italic.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-regular-italic.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 700;
    font-style: normal;
    src: url("${CDN_URL}/fonts/sprint-sans-medium.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-medium.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-medium.woff2")
        format("woff2"),
      url("${CDN_URL}/fonts/sprint-sans-medium.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-medium.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-medium.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 700;
    font-style: italic;
    src: url("${CDN_URL}/fonts/sprint-sans-medium-italic.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-medium-italic.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-medium-italic.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-medium-italic.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-medium-italic.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 800;
    font-style: normal;
    src: url("${CDN_URL}/fonts/sprint-sans-bold.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-bold.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-bold.woff2")
        format("woff2"),
      url("${CDN_URL}/fonts/sprint-sans-bold.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-bold.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-bold.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 800;
    font-style: italic;
    src: url("${CDN_URL}/fonts/sprint-sans-bold-italic.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-bold-italic.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-bold-italic.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-bold-italic.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-bold-italic.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 900;
    font-style: normal;
    src: url("${CDN_URL}/fonts/sprint-sans-black.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-black.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-black.woff2")
        format("woff2"),
      url("${CDN_URL}/fonts/sprint-sans-black.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-black.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-black.svg#svgFontName")
        format("svg");
  }

  @font-face {
    font-family: "Sprint Sans Web";
    font-weight: 900;
    font-style: italic;
    src: url("${CDN_URL}/fonts/sprint-sans-black-italic.eot");
    src: url("${CDN_URL}/fonts/sprint-sans-black-italic.eot?#iefix")
        format("embedded-opentype"),
      url("${CDN_URL}/fonts/sprint-sans-black-italic.woff")
        format("woff"),
      url("${CDN_URL}/fonts/sprint-sans-black-italic.ttf")
        format("truetype"),
      url("${CDN_URL}/fonts/sprint-sans-black-italic.svg#svgFontName")
        format("svg");
  }

  font-family: "Sprint Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const WithFonts = ({ children }) => {
  return <FontWrapper>{children}</FontWrapper>;
};
export default WithFonts;

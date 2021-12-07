import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./news.scss";

function NewsApp() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}
export default NewsApp;

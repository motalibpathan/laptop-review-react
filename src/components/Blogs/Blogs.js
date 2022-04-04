import React from "react";

const Blogs = () => {
  return (
    <div className="md:container mx-auto my-5 p-3">
      <h1 className="text-2xl font-bold">Question: What is Context API </h1>
      <p>
        Answer: React pass data by top down approach. To pass data from one
        component to another component we have to use props. The method to pass
        data from grand parents to parents to child component and so on it
        called props drilling. It is very hard to manage. By context api React
        app create efficiently a global variable. This global variable is can
        access from any component without passing via props. We can create
        context by calling React.createContext() and the we can access values by
        using useContext() function.
      </p>
      <h1 className="text-2xl font-bold mt-5">
        Question: What is Semantic Tag
      </h1>
      <p>
        Answer: HTML sematic tags are describe meanings of a tag. For example
        Header tag is used for Header of a HTML, Nav tag is for navigation
        items. There are many semantic tags are header,nav, section, aside,
        main, footer, article etc. Every tags are describe itself by their name.
        Semantic tags are much easier to read. For example different developers
        are write header different way, but if use semantic tag it is easier to
        read everyone.
      </p>
      <h1 className="text-2xl font-bold mt-5">
        Question: Different between Inline and Block elements
      </h1>
      <p>
        Answer: Block elements start with new line, Inline does not start with
        new line. Block element always takes full width of available space.
        Inline elements does not takes full width. Inline element do not have
        top and bottom margin. But Block element have top bottom margin. Example
        of Block elements are h1 - h6, div, p, li, ul, ol. Example of Inline
        elements are a, input, img, span, b, label.
      </p>
    </div>
  );
};

export default Blogs;

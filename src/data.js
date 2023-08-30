import htmlCss from "./html-css.jpg";
import bootstrap from "./bootstrap.jpg";
import javaScript from "./javaScript.jpg";
import react from "./react.jpg";
import python from "./python.jpg";

export const data = [
    {
        id: 1,
        course: "HTML/CSS",
        image: htmlCss,
        description:"HTML defines the content and the structure of a webpage, whereas CSS translates the display and the design of the HTML elements. As a result, an HTML can incorporate CSS code in its files, but CSS cannot contain HTML in its sheets.",
        showMore: false

    },
    {
        id: 2,
        course: "BOOTSTRAP",
        image: bootstrap,
        description:"Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. It includes predefined classes for easy layout options, as well as powerful mixins for generating more semantic layouts.",
        showMore: false
    },
    {
        id: 3,
        course: "JAVA SCRIPT",
        image: javaScript,
        description:"JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.",
        showMore: false
    },
    {
        id: 4,
        course: "REACT",
        image: react,
        description:"React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
        showMore: false
    },
    {
        id: 5,
        course: "PYTHON",
        image: python,
        description:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name 'Python' is a nod to the British comedy group Monty Python.",
        showMore: false
    }

]
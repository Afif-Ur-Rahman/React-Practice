const customReact = (element, root) => {
    const customDom = document.createElement(element.type);
    customDom.innerHTML = element.children;
    for (const prop in element.props) {
        if (prop === "children") continue;
        customDom.setAttribute(prop, element.props[prop])
    }

    root.appendChild(customDom);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to visit Google"
}

const root = document.getElementById("root");

customReact(reactElement, root);
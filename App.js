const content= React.createElement("div",{id:"content"}, [
        React.createElement("div",{id:"lines"}, [
            React.createElement("h1",{},"hello people"),
            React.createElement("h2",{},"hello my dear")
        ]),
        React.createElement("div",{id:"lines1"}, [
            React.createElement("h1",{},"hello people"),
            React.createElement("h2",{},"hello my dear")
        ]),
    ]
    );

    console.log(content);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
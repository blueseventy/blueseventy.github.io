class FooterEl extends Base {
    constructor(obj) {
      super();
      this.obj = obj;
    }

    render() {
      return new Center().items([
        new Text("Petr Vabrousek@2025").set({
          exact: "1em",
          font: "Arial",
          weight: "bold",
          //bold: true,
          color: this.obj?.color ?? "black", // 185339 optional chaining
          pad: [{ tb: "3rem" }]
        }),

         new Text("Made using NodalityJS by Filip Vabrousek").set({
          exact: "1em",
          font: "Arial",
          weight: "bold",
             pad: [{ a: "1rem" }],
          //bold: true,
          color: this.obj?.color ?? "black", // 185339 optional chaining
          
        }),

        new Link("nodalityjs.github.io").set({
          exact: "1em",
          font: "Arial",
          weight: "bold",
          color: "#3498db",
          text: "nodalityjs.github.io",
          url: "https://nodalityjs.github.io",
           pad: [{ a: "1rem" }, {b: "4rem"}],
           new: true
          //bold: true,
         
          
        })
      ])
    }
  }


  export {FooterEl};

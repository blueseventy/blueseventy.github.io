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
        })
      ])
    }
  }


  export {FooterEl};

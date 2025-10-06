
  class Search extends Base {
    constructor() {
      super();
      this.te = new TextField().set({
      type: "text",
      placeholder: "Search",
      arrayMargin: { sides: ["all"], value: "1rem" },
      });


      this.te.onChange((current) => {

     

  fetch("./products.json") // http://localhost:2000/products?cat=swimsuits
  .then(res => res.json())
  .then(data => {
   // alert(cat);
    // Flatten all products from all categories
      const cata = data.categories.map(p => p.products).flat(); //.filter(cato => cato.id.toLowerCase() === cat)[0];

    console.log("-----")
    console.log(cata);

    let value = this.te.render().value;

    let filter = cata.filter(el => el.name.toLowerCase().startsWith(value.toLowerCase()))
  
    console.log(filter);


   let els =  filter.map(el => 
      new Link(el.name).set({
        block: true,
        bold: true,
        url: `/detail?id=${el.id}`,
        mar: [{a: "1rem"}],
        hover: {
          color: "#3498db",
          animation: "0.3s ease-in-out"
        }
      })
    );

    console.log(els);

// 13:05:02 Works!!

document.querySelector("#results").innerHTML = "";
    new Wrapper().set({}).add(els).render("#results");
    // 132453 in Wrapper

   if (current.length === 0){
          document.querySelector("#results").innerHTML = "";
        }


      });
    });
    }

    render() {
      return new Wrapper().set({
        id: "oro",
        zIndex: 3,
        position: "absolute",
        background: "#ecf0f1",
        top: 0
      }).add([

        new Button("Close").set({
          fluidc: "S6",
          arrpad: { sides: ["all"], value: "1rem" },
          arrayMargin: { sides: ["all"], value: "1rem" },
          onTap: () => {
          //  alert("//")
          //  document.querySelector("#oro").style.display = "none";
          const oro = document.querySelector("#oro");
          if (oro) oro.remove();
        }
      }),

        this.te,

        new Wrapper().set({
          id: "results"
        }).add([
          new Text("Results").set({})
        ]),

         
      ]);
  }
}


export {Search}
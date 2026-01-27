
  class Search extends Base {
    constructor() {
      super();


      document.addEventListener("keydown", (evt) => {
       if (evt.key === "Escape" || evt.keyCode === 27){
       
  const oro = document.querySelector("#oro");
          if (oro) oro.remove();
        }
        
      })


      this.te = new TextField().set({
      type: "text",
      placeholder: "Hledat",
    
      arrayMargin: { sides: ["all"], value: "1rem" },
      exact: "2.2rem",
      radius: 16,
      maxWidth: "80%"
      })//.size("2.2rem").round(16); // 231633 


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
        exact: "1.7rem",
        url: `/detail.html?id=${el.id}`,
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

        return new FlexRow().set({
          position: "absolute",
          top: 0,
          id: "#oo",
          width: "100%"
        }).items([
new Wrapper().set({
        id: "oro",
        zIndex: 3,
     //  position: "absolute",
        background: "#cfcfcfff",
     //   top: 0,
        width: "80%",
        mar: [{t: "3rem"}],
        radius: "1rem",
        
      

           /*     shadow: {
        op: {
            name: "shadow",
            steps: 1,
            colors: ["#777777ff"],
            movements: ["0px"],
            radius: "26px"
        },
      }*/

        


    
      }).add([
        

  

 new Button("Close").set({
          fluidc: "S6",
          arrpad: { sides: ["all"], value: "1rem" },
          arrayMargin: { sides: ["left"], value: "auto" },
          onTap: () => {
          //  alert("//")
          //  document.querySelector("#oro").style.display = "none";
          const oro = document.querySelector("#oro");
          if (oro) oro.remove();
        }
      }),

      // new Spacer(true),


       

        this.te,

        new Wrapper().set({
          id: "results"
        }).add([
        ]),

         
      ])

        ]);

      
  }
}


export {Search}
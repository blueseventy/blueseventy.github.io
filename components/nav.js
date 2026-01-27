import {Search} from "./search.js";


const BASE = "bluseventy.github.io"; // was sls3.cz

let links = [
  {text: "Podkolenky", url: `https://${BASE}/products.html?cat=socks`},
  {text: "Lýtkové návleky", url: `https://${BASE}/products.html?cat=lytkove-navleky`},
  {text: "Triatlonové dresy", url: `https://${BASE}/products.html?cat=trisuits`},
  {text: "FX šortky", url: `https://${BASE}/products.html?cat=fx-sortky`},
  {text: "Sportovní opasek HippZip", url: `https://${BASE}/products.html?cat=hipzip`},
  {text: "Knihy", url: `https://${BASE}/products.html?cat=books`}
 // {text: "Triatlonové kombinézy", url: ""}
];
//http://localhost:2000/products?cat=wetsuits
// To link wrapper in dropdown: z-index: 9999px
class NavLink extends Base {
  constructor(obj) {
    super();
    this.text = obj.text;
    this.url = obj.url
  }

  render() {
    return new Link().set({
      text: this.text,
      bold: true,
      url: this.url,
      fluidc: "S6", // add exact
      hover: {
        color: "#c0392b"
      },

      resmar: [
      
          {
            breakpoint: "default",
            values: [{ lr: 10 }]
        },
         
        {
            breakpoint: "sm",
            values: [{ l: 20 }]
        },
      ]
    });

  }
}


const makeLinks = () =>
  links.map(el =>
    new Link(el.text).set({
      cursor: "hand",
      size: "S6",
      url: el.url,
      pad: [{ l: 10, r: 10, b: 12 }],
      font: "Arial",
      hover: {
        color: "#c0392b",
        // background: "#3498db" also works nicely!
      }
    })
  );


new Switcher().set({
  breakpoints: [
    {
      at: "0px", view: new MobileBar().set({
        background: "#ecf0f1",
        brand: new Image("img/sls3logo.png")
          .set({
            width: "100px",
            height: "auto"
          }),
        mar: [{ "a": 21 }],
        pad: undefined, // REMOVE FROM CODEGEN
        resmar: undefined,
        respad: undefined,
        radius: "1rem",
      }).add([
        new NavLink({
          text: "Home",
          url: "index.html",
          cursor: "hand"
        }).render(),


new Dropdown().set({
  behaviour: "mouseover",
  // pad: [{"a":40}],
  mar: [{"lr":"auto"}],
  breakpoint: "1200px",
  padding: "10px",
  border: "1px solid black",
  height: "auto"
}).add([
 new Link("Katalog").set({
  text: "Katalog",
  url: "categories.html",
    cursor: "hand",
    flex: true, // implement
    icon: {
        padLeft: "40px", // should be padRight 
        url: "https://cdn-icons-png.flaticon.com/512/60/60995.png"
    },
    size: "S6",
    flex: true,
    
    font: "Arial",
    align: "center",
    weight: "bold"
}),

new Wrapper()
  .set({ 
    display: "flex",
  flexDir: "column",
  mar: [
    {
      t: "10px"
    }
  ],
  radius: ".3rem"
})
  .add([...makeLinks()
 ])



 

]),


 new NavLink({
        text: "Team SLS3",
        url: "team-blueseventy.html"
    }).render(),

new NavLink({
        text: "Popis",
        url: "description.html"
    }).render(),

new NavLink({
        text: "Kontakt",
        url: "contact.html"
    }).render(),

    new Button("Hledat")
.set({
  align: "left",
  weight: "bold",
  width: "100px",
  exact: "1.3rem",
  pad: [{l:"20px"}]
})
.onTap(() => {
  new Search()
    .render()
    .render("#mount");

})

                    ]) }, 
{ at: "1200px", view: new DesktopBar()
.set({background:"#ecf0f1",
mar:[{a:21}],
maxHeight:"100px",
// error
//brand: new Image("https://sls3.weebly.com/uploads/4/0/5/5/40554337/659389662_orig.png"),
radius:"1rem"
}).add([
                 

/*
new Text("SLS3").set({
    size: "S6",
    font: "Helvetica"
})*///,

new Link().set({
  data: {
    options: {
      img: "img/sls3logo.png",
      url: "index.html",
      size: "80px"
    }
  }
})
/*
new Image("img/blue70logo.png").set({
  width: "100px"
})*/
,
new Spacer(undefined),

    new NavLink({
        text: "Home",
        url: "index.html"
    }).render(),

new Dropdown().set({
  behaviour: "mouseover",
  //pad: [{"a":40}],
  padding: "10px",
  border: "1px solid black",
  radius: "30px",
  width: "130px"
    
}).add([
 new Link("Katalog").set({
    text: "Katalog",
    url: "categories.html",
    cursor: "hand",
    flex: true, // update
    icon: {
         padLeft: "40px", 
        url: "https://cdn-icons-png.flaticon.com/512/60/60995.png"
    },
    size: "S6",
    pad: [
        {
            l: 10,
            r: 10
        }
    ],
    font: "Arial",
    align: "center",
    weight: "bold"
}),new Wrapper()
  .set({
  flexDir: "column",
  mar: [
    {
      t: "10px"
    }
  ],
  radius: ".3rem"
})
  .add([...makeLinks() ]/*[
...other
  ]*/)

]),

new NavLink({
        text: "Team SLS3",
        url: "team-sls3.html"
    }).render(),

new NavLink({
        text: "Popis",
        url: "description.html"
    }).render(),

new NavLink({
        text: "Kontakt",
        url: "contact.html"
    }).render(),

    new Button("Hledat") // 160327 works!!!! 06/10/25
.set({
  align: "left",
  weight: "bold",
  width: "100px",
  exact: "calc(1rem + 0.5vw)",
  pad: [{r:"15px"}]
})
.onTap(() => {
  new Search()
    .render()
    .render("#mount");

})
]) }, 

        ]
      }).render("#mount"); 
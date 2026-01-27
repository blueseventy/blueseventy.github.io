 class Blue70Title extends Base {
      constructor(text){
        super();
        this.text = text;
      }

      render(){
        return  new Text(this.text)
    .set({
        size: "S2",
        font: "Boldonse",
        pad: [{a: "3rem"}],
        respad: [
           {
            breakpoint: "default",
            values: [{ a: "2rem" }]
        },
        {
            breakpoint: "sm",
            values: [{ l: 20 }]
        },
        ]
      })
      }
    }


    export {Blue70Title}
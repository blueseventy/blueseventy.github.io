class Blue70Button extends Base {
  constructor(obj){
    super();
    this.obj = obj;
  }

  render(){
    return new Link().set({
                text: this.obj.text ?? "Více",
                background: "#dd3a0d",
                color: "white",
                url: this.obj.url, //`https://filipvabrousek.github.io/sls-beta/detail.html?id=${this.obj.id}`, //`./detail.html?id=${this.obj.id}`,
                fixMobileTap: true,
                hover: {
                  color: "#dd3a0d",
                  background: "white"
                },
                radius: "1rem",
                pad: [{lr: "2rem"}, {tb: "1rem"}],
                mar: [{b: "1rem"}],
                hide: this.obj.hide,
               // new: this.obj.new
              })
  }
}

// 2308
export { Blue70Button }
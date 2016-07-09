//Main Component that renders to index.js

class App extends React.Component{
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return (
      <div>
        Don't Forget About ME!
        <InputBox />
        <List />
      </div>
      )
  }

}

window.App = App;
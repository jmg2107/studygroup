//Main Component that renders to index.js

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      list : [],
      itemToAdd : ""
    }
  }

  submitItem (e) {
    e.preventDefault();
      console.log('e.target.value', e.target.value)
      postRequest('http://localhost:1337/api/list', {
        name : this.state.itemToAdd,
        description : 'so delicious',
        quantity : 10000 } );
  }

  onChange (e) {
    this.setState({
      itemToAdd : e.target.value
    })
  }

  render(){
    return (
      <div>
        Don't Forget About ME!
        <InputBox callback={ this.submitItem.bind(this) } itemToAdd={ this.state.itemToAdd } onChange = { this.onChange.bind(this) } />
        <List />
      </div>
      )
  }

}

var postRequest = function(api, data){
  $.post(api, {data: data, type: 'application/json' })
        .done ( () => {
          console.log("Hey fool, item submitted ", e.target.value);
        })
        .fail ( () => {
          console.log('Bummer, bro');
        });
};

window.postRequest = postRequest;

window.App = App;
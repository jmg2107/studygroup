//the input box for the grocery items at the
//top of the page

 var InputBox = (props) =>(

  <div className='inputBox'>
  <form onSubmit={ props.callback }>
    <input type='text' placeholder='get cho item' onChange={ props.onChange }value={ props.itemToAdd } />
    <input type='submit' />
  </form>
  </div>

)

window.InputBox = InputBox;
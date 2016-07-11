'use strict';

//the input box for the grocery items at the
//top of the page

var InputBox = function InputBox(props) {
  return React.createElement(
    'div',
    { className: 'inputBox' },
    React.createElement(
      'form',
      { onSubmit: props.callback },
      React.createElement('input', { type: 'text', placeholder: 'get cho item', onChange: props.onChange, value: props.itemToAdd }),
      React.createElement('input', { type: 'submit' })
    )
  );
};

window.InputBox = InputBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2lucHV0Qm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdDLElBQUksV0FBVyxTQUFYLFFBQVcsQ0FBQyxLQUFEO0FBQUEsU0FFZDtBQUFBO0FBQUEsTUFBSyxXQUFVLFVBQWY7QUFDQTtBQUFBO0FBQUEsUUFBTSxVQUFXLE1BQU0sUUFBdkI7QUFDRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxjQUEvQixFQUE4QyxVQUFXLE1BQU0sUUFBL0QsRUFBeUUsT0FBUSxNQUFNLFNBQXZGLEdBREY7QUFFRSxxQ0FBTyxNQUFLLFFBQVo7QUFGRjtBQURBLEdBRmM7QUFBQSxDQUFmOztBQVdELE9BQU8sUUFBUCxHQUFrQixRQUFsQiIsImZpbGUiOiJpbnB1dEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdGhlIGlucHV0IGJveCBmb3IgdGhlIGdyb2NlcnkgaXRlbXMgYXQgdGhlXG4vL3RvcCBvZiB0aGUgcGFnZVxuXG4gdmFyIElucHV0Qm94ID0gKHByb3BzKSA9PihcblxuICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRCb3gnPlxuICA8Zm9ybSBvblN1Ym1pdD17IHByb3BzLmNhbGxiYWNrIH0+XG4gICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdnZXQgY2hvIGl0ZW0nIG9uQ2hhbmdlPXsgcHJvcHMub25DaGFuZ2UgfXZhbHVlPXsgcHJvcHMuaXRlbVRvQWRkIH0gLz5cbiAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyAvPlxuICA8L2Zvcm0+XG4gIDwvZGl2PlxuXG4pXG5cbndpbmRvdy5JbnB1dEJveCA9IElucHV0Qm94OyJdfQ==
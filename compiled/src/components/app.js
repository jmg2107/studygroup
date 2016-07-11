'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Main Component that renders to index.js

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    _this.state = {
      list: [],
      itemToAdd: ""
    };
    return _this;
  }

  _createClass(App, [{
    key: 'submitItem',
    value: function submitItem(e) {
      e.preventDefault();
      console.log('e.target.value', e.target.value);
      postRequest('http://localhost:1337/api/list', {
        name: this.state.itemToAdd,
        description: 'so delicious',
        quantity: 10000 });
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        itemToAdd: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Don\'t Forget About ME!',
        React.createElement(InputBox, { callback: this.submitItem.bind(this), itemToAdd: this.state.itemToAdd, onChange: this.onChange.bind(this) }),
        React.createElement(List, null)
      );
    }
  }]);

  return App;
}(React.Component);

var postRequest = function postRequest(api, data) {
  $.post(api, { data: data, type: 'application/json' }).done(function () {
    console.log("Hey fool, item submitted ", e.target.value);
  }).fail(function () {
    console.log('Bummer, bro');
  });
};

window.postRequest = postRequest;

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRU0sRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU8sRUFESTtBQUVYLGlCQUFZO0FBRkQsS0FBYjtBQUZZO0FBTWI7Ozs7K0JBRVcsQyxFQUFHO0FBQ2IsUUFBRSxjQUFGO0FBQ0UsY0FBUSxHQUFSLENBQVksZ0JBQVosRUFBOEIsRUFBRSxNQUFGLENBQVMsS0FBdkM7QUFDQSxrQkFBWSxnQ0FBWixFQUE4QztBQUM1QyxjQUFPLEtBQUssS0FBTCxDQUFXLFNBRDBCO0FBRTVDLHFCQUFjLGNBRjhCO0FBRzVDLGtCQUFXLEtBSGlDLEVBQTlDO0FBSUg7Ozs2QkFFUyxDLEVBQUc7QUFDWCxXQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFZLEVBQUUsTUFBRixDQUFTO0FBRFQsT0FBZDtBQUdEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsNEJBQUMsUUFBRCxJQUFVLFVBQVcsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBQXJCLEVBQWtELFdBQVksS0FBSyxLQUFMLENBQVcsU0FBekUsRUFBcUYsVUFBYSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQWxHLEdBRkY7QUFHRSw0QkFBQyxJQUFEO0FBSEYsT0FERjtBQU9EOzs7O0VBaENlLE1BQU0sUzs7QUFvQ3hCLElBQUksY0FBYyxTQUFkLFdBQWMsQ0FBUyxHQUFULEVBQWMsSUFBZCxFQUFtQjtBQUNuQyxJQUFFLElBQUYsQ0FBTyxHQUFQLEVBQVksRUFBQyxNQUFNLElBQVAsRUFBYSxNQUFNLGtCQUFuQixFQUFaLEVBQ08sSUFEUCxDQUNjLFlBQU07QUFDWixZQUFRLEdBQVIsQ0FBWSwyQkFBWixFQUF5QyxFQUFFLE1BQUYsQ0FBUyxLQUFsRDtBQUNELEdBSFAsRUFJTyxJQUpQLENBSWMsWUFBTTtBQUNaLFlBQVEsR0FBUixDQUFZLGFBQVo7QUFDRCxHQU5QO0FBT0QsQ0FSRDs7QUFVQSxPQUFPLFdBQVAsR0FBcUIsV0FBckI7O0FBRUEsT0FBTyxHQUFQLEdBQWEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01haW4gQ29tcG9uZW50IHRoYXQgcmVuZGVycyB0byBpbmRleC5qc1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3QgOiBbXSxcbiAgICAgIGl0ZW1Ub0FkZCA6IFwiXCJcbiAgICB9XG4gIH1cblxuICBzdWJtaXRJdGVtIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlJywgZS50YXJnZXQudmFsdWUpXG4gICAgICBwb3N0UmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9saXN0Jywge1xuICAgICAgICBuYW1lIDogdGhpcy5zdGF0ZS5pdGVtVG9BZGQsXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ3NvIGRlbGljaW91cycsXG4gICAgICAgIHF1YW50aXR5IDogMTAwMDAgfSApO1xuICB9XG5cbiAgb25DaGFuZ2UgKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGl0ZW1Ub0FkZCA6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBEb24ndCBGb3JnZXQgQWJvdXQgTUUhXG4gICAgICAgIDxJbnB1dEJveCBjYWxsYmFjaz17IHRoaXMuc3VibWl0SXRlbS5iaW5kKHRoaXMpIH0gaXRlbVRvQWRkPXsgdGhpcy5zdGF0ZS5pdGVtVG9BZGQgfSBvbkNoYW5nZSA9IHsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH0gLz5cbiAgICAgICAgPExpc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxudmFyIHBvc3RSZXF1ZXN0ID0gZnVuY3Rpb24oYXBpLCBkYXRhKXtcbiAgJC5wb3N0KGFwaSwge2RhdGE6IGRhdGEsIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgICAuZG9uZSAoICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhleSBmb29sLCBpdGVtIHN1Ym1pdHRlZCBcIiwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCAoICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQnVtbWVyLCBicm8nKTtcbiAgICAgICAgfSk7XG59O1xuXG53aW5kb3cucG9zdFJlcXVlc3QgPSBwb3N0UmVxdWVzdDtcblxud2luZG93LkFwcCA9IEFwcDsiXX0=
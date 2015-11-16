(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/App.js":[function(require,module,exports){
'use strict';

var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      messages: Store.getMessages(),
      newMessage: ''
    };
  },
  componentWillMount: function componentWillMount() {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function componentWillUnmount() {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function changeState() {
    this.setState({
      messages: Store.getMessages()
    });
  },
  addMessage: function addMessage(event) {
    event.preventDefault();
    var input = this.refs.newMessage.getDOMNode();
    actions.addMessage(input.value);
    this.setState({
      newMessage: ''
    });
  },
  updateNewMessage: function updateNewMessage(event) {
    this.setState({
      newMessage: event.target.value
    });
  },
  renderMessages: function renderMessages(message) {
    return React.createElement(
      'div',
      null,
      message
    );
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      this.state.messages.map(this.renderMessages),
      React.createElement(
        'form',
        { onSubmit: this.addMessage },
        React.createElement('input', { ref: 'newMessage', type: 'text', value: this.state.newMessage, onChange: this.updateNewMessage })
      )
    );
  }

});

module.exports = App;

},{"./Store.js":"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/Store.js","./actions.js":"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/actions.js","react":"react"}],"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/Store.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');
var actions = require('./actions.js');

module.exports = flux.createStore({
  messages: [],
  actions: [actions.addMessage],
  addMessage: function addMessage(message) {
    this.messages.push(message);
    this.emitChange();
  },
  exports: {
    getMessages: function getMessages() {
      return this.messages;
    }
  }
});

},{"./actions.js":"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/actions.js","flux-react":"flux-react"}],"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/actions.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');

module.exports = flux.createActions(['addMessage']);

},{"flux-react":"flux-react"}],"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/main.js":[function(require,module,exports){
'use strict';

var React = require('react');
var App = require('./App.js');
// // var LikeButton = require('./LikeButton.js');
// var TodoList = require('./TodoList.js');

React.render(React.createElement(App, null), document.body);

// React.render(
//   <LikeButton />,
//   document.getElementById('example')
// );

// React.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'));

},{"./App.js":"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/App.js","react":"react"}]},{},["/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2VvcmdldG9vdGhtYW4vRG9jdW1lbnRzL29zeC9wcm9ncmFtbWluZy9jYW50YXRlX2RvdF9jby9jYW50YXRlLXJlYWN0L2FwcC9BcHAuanMiLCIvVXNlcnMvZ2VvcmdldG9vdGhtYW4vRG9jdW1lbnRzL29zeC9wcm9ncmFtbWluZy9jYW50YXRlX2RvdF9jby9jYW50YXRlLXJlYWN0L2FwcC9TdG9yZS5qcyIsIi9Vc2Vycy9nZW9yZ2V0b290aG1hbi9Eb2N1bWVudHMvb3N4L3Byb2dyYW1taW5nL2NhbnRhdGVfZG90X2NvL2NhbnRhdGUtcmVhY3QvYXBwL2FjdGlvbnMuanMiLCIvVXNlcnMvZ2VvcmdldG9vdGhtYW4vRG9jdW1lbnRzL29zeC9wcm9ncmFtbWluZy9jYW50YXRlX2RvdF9jby9jYW50YXRlLXJlYWN0L2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzFCLGlCQUFlLEVBQUUsMkJBQVk7QUFDM0IsV0FBTztBQUNMLGNBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQzdCLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7R0FDSDtBQUNELG9CQUFrQixFQUFFLDhCQUFZO0FBQzlCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDM0M7QUFDRCxzQkFBb0IsRUFBRSxnQ0FBWTtBQUNoQyxTQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzlDO0FBQ0QsYUFBVyxFQUFFLHVCQUFZO0FBQ3ZCLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixjQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRTtLQUM5QixDQUFDLENBQUM7R0FDSjtBQUNELFlBQVUsRUFBRSxvQkFBVSxLQUFLLEVBQUU7QUFDM0IsU0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLFFBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzlDLFdBQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixnQkFBVSxFQUFFLEVBQUU7S0FDZixDQUFDLENBQUM7R0FDSjtBQUNELGtCQUFnQixFQUFFLDBCQUFVLEtBQUssRUFBRTtBQUNqQyxRQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osZ0JBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7S0FDL0IsQ0FBQyxDQUFDO0dBQ0o7QUFDRCxnQkFBYyxFQUFFLHdCQUFVLE9BQU8sRUFBRTtBQUNqQyxXQUNFOzs7TUFDRyxPQUFPO0tBQ0osQ0FDTjtHQUNIOztBQUVGLFFBQU0sRUFBRSxrQkFBVztBQUNsQixXQUNDOzs7TUFDTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztNQUM3Qzs7VUFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQUFBQztRQUM5QiwrQkFBTyxHQUFHLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQUFBQyxHQUFFO09BQy9GO0tBQ0gsQ0FDUjtHQUNGOztDQUVELENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7QUN4RHJCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXRDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNoQyxVQUFRLEVBQUUsRUFBRTtBQUNaLFNBQU8sRUFBRSxDQUNQLE9BQU8sQ0FBQyxVQUFVLENBQ25CO0FBQ0QsWUFBVSxFQUFFLG9CQUFVLE9BQU8sRUFBRTtBQUM3QixRQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QixRQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7R0FDbkI7QUFDRCxTQUFPLEVBQUU7QUFDUCxlQUFXLEVBQUUsdUJBQVk7QUFDdkIsYUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCO0dBQ0Y7Q0FDRixDQUFDLENBQUM7Ozs7O0FDakJILElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFakMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQ2xDLFlBQVksQ0FDYixDQUFDLENBQUM7Ozs7O0FDSkgsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7OztBQUk5QixLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN0b3JlID0gcmVxdWlyZSgnLi9TdG9yZS5qcycpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBTdG9yZS5nZXRNZXNzYWdlcygpLFxuICAgICAgbmV3TWVzc2FnZTogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lc3NhZ2VzOiBTdG9yZS5nZXRNZXNzYWdlcygpXG4gICAgfSk7XG4gIH0sXG4gIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLm5ld01lc3NhZ2UuZ2V0RE9NTm9kZSgpO1xuICAgIGFjdGlvbnMuYWRkTWVzc2FnZShpbnB1dC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiAnJ1xuICAgIH0pO1xuICB9LFxuICB1cGRhdGVOZXdNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld01lc3NhZ2U6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICByZW5kZXJNZXNzYWdlczogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LCAgXG5cblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKHRoaXMucmVuZGVyTWVzc2FnZXMpfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNZXNzYWdlfT5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwibmV3TWVzc2FnZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWVzc2FnZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlTmV3TWVzc2FnZX0vPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlU3RvcmUoe1xuICBtZXNzYWdlczogW10sXG4gIGFjdGlvbnM6IFtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2VcbiAgXSxcbiAgYWRkTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH0sXG4gIGV4cG9ydHM6IHtcbiAgICBnZXRNZXNzYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gICAgfVxuICB9XG59KTtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdhZGRNZXNzYWdlJ1xuXSk7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpO1xuLy8gLy8gdmFyIExpa2VCdXR0b24gPSByZXF1aXJlKCcuL0xpa2VCdXR0b24uanMnKTtcbi8vIHZhciBUb2RvTGlzdCA9IHJlcXVpcmUoJy4vVG9kb0xpc3QuanMnKTtcblxuUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuYm9keSk7XG5cbi8vIFJlYWN0LnJlbmRlcihcbi8vICAgPExpa2VCdXR0b24gLz4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbi8vICk7XG5cbi8vIFJlYWN0LnJlbmRlcig8VG9kb0FwcCBpbml0SXRlbXM9e3RvZG9JdGVtc30vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=

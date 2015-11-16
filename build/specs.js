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

},{"flux-react":"flux-react"}],"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/specs/App-spec.js":[function(require,module,exports){
'use strict';

var App = require('./../app/App.js');
var TestUtils = require('react/addons').TestUtils;

describe("App", function () {

  it("should be wrapped with a div", function () {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });
});

},{"./../app/App.js":"/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/app/App.js","react/addons":"react/addons"}]},{},["/Users/georgetoothman/Documents/osx/programming/cantate_dot_co/cantate-react/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2VvcmdldG9vdGhtYW4vRG9jdW1lbnRzL29zeC9wcm9ncmFtbWluZy9jYW50YXRlX2RvdF9jby9jYW50YXRlLXJlYWN0L2FwcC9BcHAuanMiLCIvVXNlcnMvZ2VvcmdldG9vdGhtYW4vRG9jdW1lbnRzL29zeC9wcm9ncmFtbWluZy9jYW50YXRlX2RvdF9jby9jYW50YXRlLXJlYWN0L2FwcC9TdG9yZS5qcyIsIi9Vc2Vycy9nZW9yZ2V0b290aG1hbi9Eb2N1bWVudHMvb3N4L3Byb2dyYW1taW5nL2NhbnRhdGVfZG90X2NvL2NhbnRhdGUtcmVhY3QvYXBwL2FjdGlvbnMuanMiLCIvVXNlcnMvZ2VvcmdldG9vdGhtYW4vRG9jdW1lbnRzL29zeC9wcm9ncmFtbWluZy9jYW50YXRlX2RvdF9jby9jYW50YXRlLXJlYWN0L3NwZWNzL0FwcC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzFCLGlCQUFlLEVBQUUsMkJBQVk7QUFDM0IsV0FBTztBQUNMLGNBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQzdCLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7R0FDSDtBQUNELG9CQUFrQixFQUFFLDhCQUFZO0FBQzlCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDM0M7QUFDRCxzQkFBb0IsRUFBRSxnQ0FBWTtBQUNoQyxTQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdB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aWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUuanMnKTtcbnZhciBhY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zLmpzJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogU3RvcmUuZ2V0TWVzc2FnZXMoKSxcbiAgICAgIG5ld01lc3NhZ2U6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XG4gIH0sXG4gIGNoYW5nZVN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlczogU3RvcmUuZ2V0TWVzc2FnZXMoKVxuICAgIH0pO1xuICB9LFxuICBhZGRNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5uZXdNZXNzYWdlLmdldERPTU5vZGUoKTtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2UoaW5wdXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogJydcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlTmV3TWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyTWVzc2FnZXM6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSwgIFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCh0aGlzLnJlbmRlck1lc3NhZ2VzKX1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkTWVzc2FnZX0+XG4gICAgICAgICAgPGlucHV0IHJlZj1cIm5ld01lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01lc3NhZ2V9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU5ld01lc3NhZ2V9Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbWVzc2FnZXM6IFtdLFxuICBhY3Rpb25zOiBbXG4gICAgYWN0aW9ucy5hZGRNZXNzYWdlXG4gIF0sXG4gIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9LFxuICBleHBvcnRzOiB7XG4gICAgZ2V0TWVzc2FnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxufSk7XG4iLCJ2YXIgZmx1eCA9IHJlcXVpcmUoJ2ZsdXgtcmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnYWRkTWVzc2FnZSdcbl0pOyIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBUZXN0VXRpbHMgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKS5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIGJlIHdyYXBwZWQgd2l0aCBhIGRpdlwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChBcHAoKSk7XG4gICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gIH0pO1xuXG59KTtcbiJdfQ==

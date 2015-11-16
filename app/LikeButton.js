var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'Yes' : 'No';
    return (
      <p onClick={this.handleClick}>
        {text}
      </p>
    );
  }
});

module.exports = LikeButton;
var React = require('react');
var mui = require('material-ui');

var RaiseButton = mui.RaisedButton;

var Sample = React.createClass({
  render: function() {
    return (
      <RaiseButton label="Default" />
    );
  }
});

React.render(<Sample />, document.body);

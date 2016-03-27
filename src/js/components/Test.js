var React = require('react');

var Test = React.createClass({
  render: function(){
    return (
      <div className="well">
        <span>Properties Value:: {this.props.testVal}</span>
      </div>
    );
  }
});

module.exports = Test;

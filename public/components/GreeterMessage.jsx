var React = require('react');

var GreeterMessage = React.createClass({
  render: function(){
    var nome = this.props.nome;
    var msg = this.props.msg;
    return(
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1 className="panel-title">Ciao {nome}!</h1>
          </div>
          <div className="panel-body">
            <p>{msg}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GreeterMessage;

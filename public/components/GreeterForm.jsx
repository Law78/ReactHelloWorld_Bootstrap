var React = require('react');

var GreeterForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();

    var nomeRef = this.refs.nome;
    var msgRef = this.refs.msg;
    var nome = nomeRef.value;
    var msg = msgRef.value;
    var updates = {};

    if(nome.length > 0){
      updates.nome = nome;
      nome = '';
    }

    if(msg.length > 0){
      updates.msg = msg;
      msg = '';
    }

    this.props.onUpdates(updates);
  },

  render: function(){
    return(
      <div className="col-md-12">
        <form className="form-group" onSubmit={this.onFormSubmit} role="form">
          <label for="nome">Inserisci il nome: </label>
          <input className="form-control" type="text" placeholder="Inserisci il nome..." ref="nome"/>
          <br/>
          <label for="msg">Inserisci il messaggio: </label>
          <textarea className="form-control" placeholder="Aggiungi un messaggio..." ref="msg" />
          <br />
          <button className="btn btn-info">Invia</button>
        </form>
      </div>
    );
  }
});

module.exports = GreeterForm;

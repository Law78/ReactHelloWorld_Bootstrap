var React = require('react');
var GreeterMessage = require('./GreeterMessage.jsx');
var GreeterForm = require('./GreeterForm.jsx');

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      nome: 'React',
      msg: 'This is a default message!',
      nomeClass: 'valido',
      msgClass: 'valido'
    };
  },

  getInitialState: function(){
    return{
      nome: this.props.nome,
      msg: this.props.msg,
      nomeClass: this.props.nomeClass,
      msgClass: this.props.msgClass
    };
  },

  handleUpdates: function(updates){

    if(!updates){
      console.log('Chiamata Errata, manca l\'oggetto updates');
      return;
    }

    if(typeof updates.nome === 'string' && updates.nome.length > 0){
      this.setState({
        nome: updates.nome,
        nomeClass: 'valido'
      });
    } else {
      this.setState({
        nomeClass:'alert alert-danger'
      });
    }

    if(typeof updates.msg === 'string' && updates.msg.length >0){
      this.setState({
        msg: updates.msg,
        msgClass: 'valido'
      });
    } else {
      this.setState({
        msgClass:'alert alert-danger'
      });
    }

  },

  render: function(){
    // Assicurati di prendere lo stato e non la props.
    var nome = this.state.nome;
    var msg = this.state.msg;
    var nomeClass = this.state.nomeClass;
    var msgClass = this.state.msgClass;

    return(
      <div className="container">

        <div className="row">
          <GreeterMessage nome={nome} msg={msg}/>
        </div>
        <div className="row">
          <div className={"col-md-8 col-md-offset-2 "+nomeClass}>Inserisci un nome valido!</div>
          <div className={"col-md-8 col-md-offset-2 "+msgClass}>Inserisci un messaggio valido!</div>
          <GreeterForm onUpdates={this.handleUpdates} />
        </div>


      </div>

    )
  }
});

module.exports = Greeter;

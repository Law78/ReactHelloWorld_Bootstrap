var GreeterMessage = React.createClass({
  render: function(){
    var nome = this.props.nome;
    var msg = this.props.msg;
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h1 className="panel-title">Ciao {nome}!</h1>
        </div>
        <div className="panel-body">
          <p>{msg}</p>
        </div>
      </div>
    );
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();

    var nomeRef = this.refs.nome;
    var msgRef = this.refs.msg;
    var nome = nomeRef.value;
    var msg = msgRef.value;

    this.props.onNewName(nome);

    this.props.onNewMsg(msg);


    if(nome.length > 0 && msg.length > 0){
      this.refs.nome.value = '';
      this.refs.msg.value = '';
    }
  },

  render: function(){
    return(
      <div className="col-md-12">
        <form className="form-group" onSubmit={this.onFormSubmit} role="form">
          <label for="nome">Inserisci il nome: </label>
          <input className="form-control" type="text" placeholder="Inserisci il nome..." ref="nome"/>
          <br/>
          <label for="msg">Inserisci il messaggio: </label>
          <textarea className="form-control" ref="msg" />
          <br />
          <button className="btn btn-info">Invia</button>
        </form>
      </div>
    );
  }
});

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

  handleNewName: function(nome){

    if(typeof nome === 'string' && nome.length > 0){
      this.setState({
        nome,
        nomeClass:'valido'
      });
    } else {
      this.setState({
        nomeClass:'alert alert-danger'
      });
    }

  },

  handleNewMessage: function(msg){

    if(typeof msg === 'string' && msg.length > 0 ){
      this.setState({
        msg,
        msgClass: 'valido'
      });
    } else {
      this.setState({
        msgClass:'alert alert-danger'
      });
    }
  },

  render: function(){
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
          <GreeterForm onNewName={this.handleNewName} onNewMsg={this.handleNewMessage}/>
        </div>


      </div>

    )
  }
});

var nomeCompleto = 'Lorenzo Franceschini'
var msg = 'Mio Messaggio';

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app'));
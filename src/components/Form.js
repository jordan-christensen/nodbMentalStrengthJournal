import React from 'react';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      objective: "",
      plan: [``, ``, ``],
      strengths: [``, ``, ``],
      weakness: "",
      motiv: "",
      anx: "",
      conc: "",
      conf: "",
      dm: "",
      note: "",
      reviewed: false
    }
  }

  universalHandler = (e) => {
    if(e.target.id){
      const newVar = [...this.state[e.target.name]]
      newVar[e.target.id] = e.target.value
      this.setState({
        [e.target.name]: newVar
      })
    } else { 
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render(){
    return(
     <div className="form-wrapper">
      <form className="entry-form" onSubmit={e => {
        e.preventDefault()
        this.props.createEntry(e, this.state)
        this.setState({
          objective: "",
          plan: [``, ``, ``],
          strengths: [``, ``, ``],
          weakness: "",
          motiv: "",
          anx: "",
          conc: "",
          conf: "",
          dm: "",
          note: "",
          reviewed: false
        })}}>
        <img onClick={this.props.toggleForm} alt="delete" className="delete-icon delete-form" src={require('../images/delete-icon.svg')}/>
        <h1 className="form-title top-form-title-margin">OBJECTIVE</h1>  
        <input className="text-input"
          name="objective"
          value={this.state.objective}
          type="text"
          placeholder=""
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="form-title form-title-margins">PLAN</h1>  
        <input className="text-input"
          id={0}
          name="plan"
          value={this.state.plan[0]}
          type="text"
          placeholder="1."
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <input className="text-input"
          id={1}
          name="plan" 
          value={this.state.plan[1]}
          type="text"
          placeholder="2."
          onChange={(event) => this.universalHandler(event)}/>
        <br/>  
        <input className="text-input"
          id={2}
          name="plan"
          value={this.state.plan[2]}
          type="text"
          placeholder="3."
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="form-title form-title-margins">STRENGTHS</h1>    
        <input className="text-input"
          id={0}
          name="strengths"
          value={this.state.strengths[0]}
          type="text"
          placeholder="1."
          onChange={(event) => this.universalHandler(event)}/>
        <br/>  
        <input className="text-input"
          id={1}
          name="strengths"
          value={this.state.strengths[1]}
          type="text"
          placeholder="2."
          onChange={(event) => this.universalHandler(event)}/>
        <br/>  
        <input className="text-input"
          id={2} 
          name="strengths"
          value={this.state.strengths[2]}
          type="text"
          placeholder="3."
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="form-title form-title-margins">WEAKNESS</h1>    
        <input className="text-input"
          name="weakness"
          value={this.state.weakness}
          type="text"
          placeholder=""
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <br/>
        <h1 className="st-form-title form-title-margins ">MOTIVATION</h1>    
        <input className="stat-input"
          name="motiv"
          value={this.state.motiv}
          type="text"
          placeholder="0-10"
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="st-form-title form-title-margins">ANXIETY</h1>    
        <input className="stat-input"
          name="anx"
          value={this.state.anx}
          type="text"
          placeholder="0-10"
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="st-form-title form-title-margins">CONCENTRATION</h1>    
        <input className="stat-input"
          name="conc"
          value={this.state.conc}
          type="text"
          placeholder="0-10"
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="st-form-title form-title-margins">CONFIDENCE</h1>    
        <input className="stat-input"
          name="conf"
          value={this.state.conf}
          type="text"
          placeholder="0-10"
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <h1 className="st-form-title form-title-margins">DECISION MAKING</h1>    
        <input className="stat-input"
          name="dm"
          value={this.state.dm}
          type="text"
          placeholder="0-10"
          onChange={(event) => this.universalHandler(event)}/>
        <br/>
        <input className="note-input"
          name="note"
          value={this.state.note}
          type="text"
          placeholder="Notes"
          onChange={(event) => this.universalHandler(event)}/>
        <button className="publish-btn">PUBLISH ENTRY</button>
      </form>
    </div>
    )
  }
}

export default Form;
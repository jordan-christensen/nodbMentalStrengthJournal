import React from 'react';

const editIcon = require("../images/edit-icon.svg");
const deleteIcon = require("../images/delete-icon.svg");

const Entry = (props) => {
  return( 
    <div className="entry">

      <div className="entry-header">
        <h1 className="entry-moment">{props.entry.date} – {props.entry.time}</h1>
        <div className="icon-container">
          <img src={editIcon} className="edit-icon" alt="review" onClick={() => props.reviewEntry(props.entry.id)}/>
          <h1 className="entry-moment reviewed">{!props.entry.reviewed ? null : "REVIEWED"}</h1>
          <img src={deleteIcon} className="delete-icon" alt="delete" onClick={() => props.deleteEntry(props.entry.id)}/>
        </div>  
      </div>
      <div className="entry-body">
        <div className="text-container">
          <h1 className="entry-text h1">OBJECTIVE</h1>
          <p className="entry-text list single">{props.entry.objective}</p>
          <h1 className="entry-text h1">PLAN</h1>
          <p className="entry-text list top">{props.entry.plan[0]}</p>
          <p className="entry-text list middle">{props.entry.plan[1]}</p>
          <p className="entry-text list bottom">{props.entry.plan[2]}</p>
          <h1 className="entry-text h1">STRENGTHS</h1>
          <p className="entry-text list top">{props.entry.strengths[0]}</p>
          <p className="entry-text list middle">{props.entry.strengths[1]}</p>
          <p className="entry-text list bottom">{props.entry.strengths[2]}</p>
          <h1 className="entry-text h1">WEAKNESS</h1>
          <p className="entry-text list single list-bottom">{props.entry.weakness}</p>
        </div>
        <div className="stats-container bottom-corner">
            <div className="stat-bar" style={{width: (+props.entry.motiv * 10) + "%"}}>
              <h2 className="stat-title">MOTIVATION<br/>{+props.entry.motiv}</h2>
              <div className="bar-fill g1"></div>
            </div>
            <div className="stat-bar" style={{width: (+props.entry.anx * 10) + "%"}}>
              <h2 className="stat-title">ANXIETY<br/>{+props.entry.anx}</h2>
              <div className="bar-fill g2"></div>
            </div>
            <div className="stat-bar" style={{width: (+props.entry.conc * 10) + "%"}}>
              <h2 className="stat-title">CONCENTRATION<br/>{+props.entry.conc}</h2>
              <div className="bar-fill g3"></div>
            </div>
            <div className="stat-bar" style={{width: (+props.entry.conf * 10) + "%"}}>
              <h2 className="stat-title">CONFIDENCE<br/>{+props.entry.conf}</h2>
              <div className="bar-fill g4"></div>
            </div>
            <div className="stat-bar bottom-corner" style={{width: (+props.entry.dm * 10) + "%"}}>
              <h2 className="stat-title">DECISION MAKING<br/>{+props.entry.dm}</h2>
              <div className="bar-fill g5 bottom-corner"></div>
            </div>
        </div>
      </div>
      <h1 className="entry-text">{props.entry.note}</h1>
    </div>
  )
}

export default Entry
import React from 'react';

const Entry = (props) => {
  return <div className="entry">
    <h1 className="entry-moment">{props.entry.date} – {props.entry.time}</h1>
    <h1 className="entry-text">{props.entry.Entryobjective}</h1>
    <h1 className="entry-text">{props.entry.plan[0]}</h1>
    <h1 className="entry-text">{props.entry.plan[1]}</h1>
    <h1 className="entry-text">{props.entry.plan[2]}</h1>
    <h1 className="entry-text">{props.entry.strengths[0]}</h1>
    <h1 className="entry-text">{props.entry.strengths[1]}</h1>
    <h1 className="entry-text">{props.entry.strengths[2]}</h1>
    <h1 className="entry-text">{props.entry.weakness}</h1>
    <h1 className="entry-state">{props.entry.motiv}</h1>
    <h1 className="entry-state">{props.entry.anx}</h1>
    <h1 className="entry-state">{props.entry.conc}</h1>
    <h1 className="entry-state">{props.entry.conf}</h1>
    <h1 className="entry-state">{props.entry.dm}</h1>
    <h1 className="entry-text">{props.entry.note}</h1>
  </div>
}

export default Entry
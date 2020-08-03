import React from 'react';
import Entry from './Entry';

const Feed = (props) => {
  const journalMap = props.journal.map( entry => {
    return <Entry key={entry.id} entry={entry} reviewEntry={props.reviewEntry} deleteEntry={props.deleteEntry}/>
  })
  return <div className="feed-container">
    {journalMap}
  </div>
}

export default Feed;
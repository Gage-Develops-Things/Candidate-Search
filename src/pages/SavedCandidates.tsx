import CandidateTable from './CandidateTable';
import { useState, useEffect } from 'react'

const SavedCandidates = () => {
  let [candidates, setCandidates] = useState([])
  useEffect(() => {
    setCandidates(JSON.parse(localStorage.getItem('Saved Candidates')!))
  }, []);

  return (
<>
    <h1>Potential Candidates</h1>
    {candidates && candidates.length ? (
    <div className='candidate'>
      <CandidateTable candidates={candidates} setCandidates={setCandidates}/>
    </div>)
      : (
        <p>No Candidates to display!</p>
      )
  }</>
  );
};

export default SavedCandidates;

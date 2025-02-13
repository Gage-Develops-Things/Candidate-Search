import CandidateTable from './CandidateTable';

const SavedCandidates = () => {
 let candidates: [] = JSON.parse(localStorage.getItem('Saved Candidates')!)

  return (
<>
    <h1>Potential Candidates</h1>
    {candidates && candidates.length ? (
    <div className='candidate'>
      <CandidateTable candidates={candidates}/>
    </div>)
      : (
        <p>No Candidates to display!</p>
      )
  }</>
  );
};

export default SavedCandidates;

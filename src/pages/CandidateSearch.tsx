import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [getCandidates, setCandidates] = useState<any[]>([]);
  const [candidate, setCandidate] = useState<Candidate>({
    avatar_url: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    login: ''
  });
  const [index, setIndex] = useState(0)

    useEffect(() => {
      const myFunc = async () => {
      const data = await searchGithub()
    
      setCandidates(data)
      }
      myFunc();
      console.log(getCandidates)
    }, []);

    useEffect(() => {
      const myFunc = async () => {
        const data = await searchGithubUser(getCandidates[index].login)
      
        setCandidate(data)
        }
        myFunc();
    }, [getCandidates, index])



    // below unused block of code was my attempt to have the candidate search page not refresh every time the user clicks back to it.

    // const setLSIndex = () => {
    //   localStorage.setItem('Index', JSON.stringify(index+1))
    //   let newIndex = JSON.parse(localStorage.getItem('Index'));
    //   console.log(newIndex)
    //   return newIndex
    // }

     // allow user to cycle thru candidates.  track which candidate we are showing.  
     // send candidate to saved array, increment index
    const addCandidate = () =>{
      SavedCandidates.push(candidate)
      setIndex(index+1);
      localStorage.setItem('Saved Candidates', JSON.stringify(SavedCandidates));

    }

  return (
<>
    <h1>Candidate Search</h1>  
    <section>
    <div>
      <img src={candidate.avatar_url}></img>
      <h2>{candidate.name}</h2>
      <h3>{candidate.login}</h3>
      <p>Location: {candidate.location}</p>
      <p>email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <p>Bio: {candidate.bio}</p>
    </div>
    <button onClick={addCandidate}>+</button>
    <button onClick={() => setIndex(index+1)}>-</button>
  </section></>
  );
};

   let SavedCandidates: any = [];
export default CandidateSearch;
export default function CandidateTable(props:any){

  const deleteFromStorage = (candidateInfo: string) => {
    const filteredArray = props.candidates.filter((candidate: any) => candidate.login !== candidateInfo);
    localStorage.setItem('Saved Candidates', JSON.stringify(filteredArray));
    location.reload();
  };

    return (
        <table>
          <tbody>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Email</th>
          <th scope="col">Company</th>
          <th scope="col">Bio</th>
          <th scope="col">Reject</th>
        </tr>
        {props.candidates.map((candidate:any) => (
        <tr key={candidate.login}>
          <th scope="row"><img src={candidate.avatar_url}></img></th>
          <td>{candidate.name} <br></br>Username:{candidate.login}</td>
          <td>{candidate.location}</td>
          <td>{candidate.email}</td>
          <td>{candidate.company}</td>
          <td>{candidate.bio}</td>
          <td><button onClick={() => deleteFromStorage(candidate.login)}>-</button></td>
        </tr>
        ))}
        </tbody>
      </table>
    )
}

// button on click should delete from localStorage/ 
// maybe state if we choose to convert candidate array to state
// should also remove entry from table
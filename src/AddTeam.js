import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function AddTeam() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState(""); 
  const [brief, setBrief] = useState(""); 
  const [History, setHistory] = useState("");
  const [player, setPlayer] = useState("");
  const [homeground, setHomeground] = useState("");
  const [trailer, setTrailer] = useState("");
  const [id, setId] = useState("");

 
  const history = useHistory();



  const addTeam = () => {

    console.log("adding");
    const newTeam = {
      name,
      poster,
      summary,
      brief,
      History,
      player,
      homeground,
      trailer,
      id
    };
    console.log(newTeam);
    // setMovies([...Movies, newMovie]); 
      fetch("https://620f1911ec8b2ee283336fc9.mockapi.io/IPL",
      {
        method:"POST",
        body:JSON.stringify(newTeam),
        headers:{'Content-Type':'application/json'},
      })
      .then(() => history.push("/iplteams"))
  };
  return (

    <div className='add-team-form'>
     <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label='Enter the name'
        id="standard-basic"
        variant="standard" />

<TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label='Enter the poster'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label='Enter the summary'
        id="standard-basic"
        variant="standard" />

     

<TextField
        value={brief}
        onChange={(event) => setBrief(event.target.value)}
        label='Enter the brief'
        id="standard-basic"
        variant="standard" />

<TextField
        value={History}
        onChange={(event) => setHistory(event.target.value)}
        label='Enter the History'
        id="standard-basic"
        variant="standard" />


        <TextField
        value={player}
        onChange={(event) => setPlayer(event.target.value)}
        label='Enter the player'
        id="standard-basic"
        variant="standard" />


        <TextField
        value={homeground}
        onChange={(event) => setHomeground(event.target.value)}
        label='Enter the homeground'
        id="standard-basic"
        variant="standard" />


        <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label='Enter the trailer'
        id="standard-basic"
        variant="standard" />

<TextField
        value={id}
        onChange={(event) => setId(event.target.value)}
        label='Enter the id'
        id="standard-basic"
        variant="standard" />


      <Button onClick={addTeam} variant="outlined">AddMovie</Button>

    </div>

  );
}


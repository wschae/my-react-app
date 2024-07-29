import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  function handleLikeClick() {
    fetch('/api/like', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1
      })
    })
    .then((res)=>res.json())
    .then((data)=>setData({like:data.like, dislike:data.dislike}));
  }

  function handleDislikeClick() {
    fetch('/api/dislike', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1
      })
    })
    // .then((res)=>res.json())
    // .then((data)=>setData({like:data.like, dislike:data.dislike}));
    .then(()=>{window.location.reload();})
  }

  React.useEffect(()=>{
    fetch("/api/status")
    .then((res)=>res.json())
    .then((data) => setData({like:data.like, dislike:data.dislike}));
  }, []);

  return (
    <div>
    <p/>
    {!data ? "Loading..." : "like:" + data.like + ",dislike:" + data.dislike}
    <p/>
    <button onClick={handleLikeClick}>like</button>
    &nbsp;
    <button onClick={handleDislikeClick}>dislike</button>
    </div>
  );
}

export default App;

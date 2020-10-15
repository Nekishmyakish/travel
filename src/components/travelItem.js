import React from 'react';

export default function TravelItem() {
  const [like, setLike] = React.useState(0);
  return (
    <div className="App">
        <h3>Netflix</h3>        
        <p>Sunday mood: Watching time travel movies to find a way</p>
        <img src="" alt=""></img>
  <button className="like" onClick={()=> setLike(prevLike => prevLike + 1)}>Like {like}</button>
    </div>
  );
}

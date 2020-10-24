import React from 'react';
import Tweet from './Tweet'


const Tweets = (props) =>{


    const tweets = [{name:'mohit', tweet:'react urghh, i need coke'},
    {name:'misty',tweet:'hi i  am misty'},
    {name:'Maevee', tweet:'paau paauu  paaauuu!! '}];
    return(
        <section>
       {tweets.map(tweet =>(
           <Tweet name={tweet.name} tweet={tweet.tweet}/>
       ))}
      
    </section>
);
};
    
 export default Tweets;
import React from 'react';
 const Card =({name,email,id}) =>{
    //  const {name,email,id}=props;
     return(
         <div id='root' className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             {/* <h1>RoboFriends</h1> */} 
             <img alt='just a thing' src={`https://robohash.org/${id}`} />
             <div>
                 <h2>
                     {name}
                 </h2>
                 <p>{email}</p>
             </div>
         </div>
     );
 }
 export default Card;

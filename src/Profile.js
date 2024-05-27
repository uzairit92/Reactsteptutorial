// 18.04.2024
// LEc 18 - 


import React , { useState } from 'react'

function Profile() {
    const [loggedIn, setLoggedIn] = useState(3)
    
    //1,2,3
    return (
        <div>
               {loggedIn==1?
               <h1>Welcome user 1  </h1> 
               :loggedIn==2? <h1>Welcome user 2  </h1> 
               :<h1>Welcome Guest </h1>}  
        </div>
    )
}
// the above method is also called tarnary operator 
export default Profile;


//--------------
// LEc 18
// import React , { useState } from 'react'

// function Profile() {
//     const [loggedIn, setLoggedIn] = useState(true)
    
    
//     return (
//         <div>
//                {loggedIn? <h1>Welcome Anil </h1> : <h1>Welcome Guest </h1>}  
//         </div>
//     )
// }

// export default Profile;
// //--------------


// //
// import React , { useState } from 'react'

// function Profile() {
//     const [loggedIn, setLoggedIn] = useState(true)
//     if (loggedIn)
//     {
//     return (
//         <div>
//                 <h1>Welcome Anil </h1>
//         </div>
//     )
//     }
//     else 
//     {
//         return(
//             <div>
//                 <h1>Welcome Guest</h1>
//             </div>
//         )
//     }

// }
// export default Profile; 
// //


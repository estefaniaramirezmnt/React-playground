
import React, { useState } from 'react';
 
function ShowTextExample() {
 const [showText, setShowText] = useState(false);
 
 return (
   <div>
     <button
       type="button"
       onClick={() => setShowText(true)}
     >
       Mostrar Texto
     </button>
     {
       showText && '¡Se muestra el texto!'
     }
   </div>
 );
}
 
export default ShowTextExample;
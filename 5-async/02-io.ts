import { Magic } from "./magic";

const A = Magic.ioFunc('A')
const B = Magic.ioFunc('B')
const C = Magic.ioFunc('C')
console.log('use stuff', A, B, C)



/* sync
process ->>
A    : xx-------xA
B    :            xx-------xB
C    :                       xx----------xC
use  :                                     ABC
     : =======================================
*/


/* async
process ->>
A    : xx-------xA
B    :   xx-------xB
C    :     xx----------xC
use  :       ABC
        : ==================
*/


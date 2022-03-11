import { Magic } from "./magic"

const A = Magic.func('machine learning A')
const B = Magic.func('ML B')
const C = Magic.func('ML C')
console.log('use stuff', A, B, C)

/*
process ->>
ML      : xxxxxxxxxxA
ML2     :            xxxxxxxxxxB
ML3     :                       xxxxxxxxxxxxxC
use     :                                     ABC
        : =========================================
*/

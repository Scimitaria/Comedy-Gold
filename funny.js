funnies = [
    () => ![]&[]/{}.chingaTuMadre,
    () => typeof(![]&&[]/{}.null),
    () => typeof(![]&[]/{}.null),
    () => typeof(([]+typeof([].null))),
    () => ![]&&[]/{}.null,
    () => !!{}.null,
    () => [false/false, typeof(false/false)],
    () => false&&{}.null,
    () => [true == 1, true === 1],
    () => [Math.max(),Math.min()],
    () => 0.1 + 0.2 == 0.3,
    () => (!+[]+[]+![]).length,
    () => new Date(2026,0,365),
    () => new Date(2026,-1,1),
    () => ["0"==0, 0==[], "0"==[]],
    () => Boolean(new Boolean(false)), 
    () => new Boolean(Boolean(false)),
    () => /[A-z]/.test("\\"),
    () => [[]*[],[42,69]*[42,69]],
    () => [1,2,3].splice(-69,3),
    () => parseInt('fuck',16),
    () => parseInt('fuck',37),
    () => "Why am I a " + typeof + "",
    () => "3"-+-+-+"1"+"1"/"3"*"6"+"2",
    () => (![]+[])[+[]],
    () => (![]+[])[+!+[]],
    () => ([![]]+[][[]])[+!+[]+[+[]]],
    () => (![]+[])[!+[]+!+[]],
]

for (dumb of funnies) console.log(`${((dumb.toString()).slice(6)).padEnd(35)} => ${dumb()}`)

/*// use in conjunction with funnies.slice(0,-4) in for loop
const fail = (funnies.slice(-4).map(e=>e.toString().slice(6))).join('+')
console.log(`${fail} => ${eval(fail)}`)
*/

//Honorable mention... https://wtfjs.com/wtfs/2013-02-12-obfuscated-fibonacci
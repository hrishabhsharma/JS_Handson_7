let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } 
                     ]

        
                

// Output For Question No 1

Qno1 = document.getElementById("Q1")

let Ans1 = studentRecords.map((item)=>{
                return item.name.toUpperCase()
            })
console.log(Ans1)

Qno1.innerText += ` ${Ans1}`

// Output For Question No 2
Qno2 = document.getElementById("Q2")

let Ans2 = studentRecords.filter((item)=>{
    if(item.marks>50){
        return item
    }
})

console.log(Ans2)

// Qno2.innerText += ` ${Ans2[0].keys}`

// Output For Question No 3

Qno3 = document.getElementById("Q3")

let Ans3 = studentRecords.filter((item)=>{
    if(item.marks>50 && item.id>120){
        return item
    }
})
console.log(Ans3)

// Qno3.innerText += ``

// Output For Question No 4

Qno4 = document.getElementById("Q4")

let Ans4 = studentRecords.reduce((a , b)=>{
    return a + b.marks;
},0)
console.log(Ans4)

Qno4.innerText += `${Ans4}`

// Output For Question No 5

Qno5 = document.getElementById("Q5")

let Ans5 = studentRecords.filter((item)=>{
    if(item.marks>50){
        delete item.id;
        delete item.marks;
        return item
    }
})
let a = Ans5[0].name
let b = Ans5[1].name
console.log(a,b)

Qno5.innerText += ` ${a} ${b} `

// Output For Question No 6

Qno6 = document.getElementById("Q6")

let Ans6 = studentRecords.reduce((a1 , b1)=>{
    if(b1.id > 110){
        return  a1 += b1.id
    }
    else{
        b1.id = 0
        return a1 += b1.id
    }
},0)

console.log(Ans6)

Qno6.innerText += ` ${Ans6}`

// Output For Question No 7

Qno7 = document.getElementById("Q7")

// Qno7.innerText += ``

// Output For Question No 8

Qno8 = document.getElementById("Q8")

// Qno8.innerText += ``

## Assignment 011

# Question 1
type Score = {
    points: number
}

const score1: Score = { points: 20 }

const addFive = (s: Score) => {
    s.points = s.points + 5
}

addFive(score1)

Expected result:
score1.points

# Question 2
type Wallet = {
    balance: number
}

const wallet1: Wallet = { balance: 100 }

const wallet2 = wallet1

wallet2.balance = 150
Expected result:
wallet1.balance
wallet2.balance

# Question 3
type Item = {
    price: number
}

const item1: Item = { price: 40 }

const multiplyPrice = (i: Item) => {
    i.price = i.price * 2
}

multiplyPrice(item1)
Expected result:
item1.price

# Question 4
type Counter = {
    count: number
}

const counterA: Counter = { count: 10 }

const counterB = counterA
const counterC = counterB

counterC.count = counterC.count + 20
Expected result:
counterA.count
counterB.count
counterC.count

# Question 5
type Progress = {
    level: number
}

const progress1: Progress = { level: 5 }

const increaseLevel = (p: Progress) => {
    return p.level + 3
}

progress1.level = increaseLevel(progress1)
Expected result:
progress1.level

# Question 6
type Player = {
    score: number
    stage: number
}

const player1: Player = {
    score: 50,
    stage: 2
}

const getScore = (p: Player) => {
    return p.score
}

player1.stage = getScore(player1)
Expected result:
player1.score
player1.stage

# Question 7
type Bank = {
    money: number
}

const bank1: Bank = { money: 500 }

const deposit = (b: Bank) => {
    b.money = b.money + 200
}

deposit(bank1)
deposit(bank1)
Expected result:
bank1.money

# Question 8
type Product = {
    quantity: number
}

const product1: Product = { quantity: 15 }

const product2 = product1

product1.quantity = 30
Expected result:
product1.quantity
product2.quantity

# Question 9
type Data = {
    value: number
}

const data1: Data = { value: 12 }

const doubleValue = (d: Data) => {
    return d.value * 2
}

data1.value = doubleValue(data1)
Expected result:
data1.value

# Question 10
type Level = {
    step: number
}

const level1: Level = { step: 3 }

const level2 = level1

const increaseStep = (l: Level) => {
    l.step = l.step + 7
}

increaseStep(level2)
Expected result:
level1.step
level2.step

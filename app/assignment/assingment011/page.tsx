'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    type Score = {
        points: number
    }

    const score1: Score = {
        points: 20
    }

    const addFive = (s: Score) => {
        s.points = s.points + 5
    }

    addFive(score1) // 25

    // score1.points = 25

    type Wallet = {
        balance: number
    }

    const wallet1: Wallet = {
        balance: 100
    }

    const wallet2 = wallet1;

    wallet2.balance = 150

    // wallet1.balance // 150
    // wallet2.balance // 150

    type Counter = {
        count: number
    }

    const counterA: Counter = {
        count: 10
    }

    const counterB = counterA
    const counterC = counterB

    counterC.count = counterC.count + 20; // 30

    // counterA.count 30
    // counterB.count 30
    // counterC.count 30

    type Progress = {
        level: number
    }

    const progress1: Progress = {
        level: 5
    }

    const increaseLevel = (p: Progress) => {
        return p.level + 3;
    }

    progress1.level = increaseLevel(progress1) // 8 //progress1.level 8

    // progress1.level  = 8

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

    player1.stage = getScore(player1) // 50 // player1.stage = 50

    // player1.score  = 50
    // player1.stage = 50

    type Bank = {
        money: number
    }

    const bank1: Bank = {
        money: 500
    }

    const deposit = (b: Bank) => {
        b.money = b.money + 200
    }

    deposit(bank1) //banbk1.money = 700
    deposit(bank1) // bank1.money = 900

    // bank1.money = 900

    type Product = {
        quantity: number
    }

    const product1: Product = {
        quantity: 15
    }

    const product2 = product1

    product1.quantity = 30

    // product1.quantity = 30
    // product2.quantity = 30


    type Data = {
        value: number
    }

    const data1: Data = {
        value: 12
    }

    const doubleValue = (d: Data) => {
        return d.value * 2
    }

    data1.value = doubleValue(data1) // 24 // data1.value = 24

    // data1.value = 24

    type Level = {
        step: number
    }

    const level1: Level = {
        step: 3
    }

    const level2 = level1

    const increaseStep = (l: Level) => {
        l.step = l.step + 7
    }

    increaseStep(level2) //level2.step  = 10

    // level1.step  = 10
    // level2.step = 10


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Assignment 011
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}

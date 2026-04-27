'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    type Account = {
        security: string,
        emailUpdates?: boolean,
        disconnection?: boolean
    }

    type Notifications = {
        sound: boolean,
        vibrate?: boolean
    }

    type Theme = 'light' | 'dark';
    type FontSize = 'small' | 'medium' | 'big';

    type Chats = {
        theme: Theme,
        fontSize: FontSize
    }

    type Settings = {
        account: Account,
        notifications?: Notifications,
        chats: Chats
    }

    const userSettings: Settings = {
        account: {
            security: 'secured'
        },
        chats: {
            fontSize: 'medium',
            theme: 'light'
        }
    }

    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Nesting Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

                <div></div>
            </div>

        </div>
    );
    // JSX/TSX ends here
}

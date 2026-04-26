'use client'
import { Montserrat, } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {


    type Reference = {
        id: string,
        count: number,
        postId: string,
    }

    interface Like extends Reference {

    }

    type Follower = {
        id: string,
        name: string,
    }

    type Author = {
        id: string,
        name: string,
        email: string,
        followers: Follower[],
    }

    const rehab: Author = {
        email: 'rehab@gmail.com',
        id: 'uhqrweuy9wfe',
        name: 'Rehab',
        followers: [
            {
                id: 'asklbkjvdshl',
                name: 'adam'
            },
            {
                id: 'lkhkjrytiut',
                name: 'mustapha'
            },
        ]
    }

    type Post = {
        id: string,
        author: Author,
        content: string,
        img?: string
    }

    const firstPost: Post = {
        id: 'lhejbsdvm',
        author: rehab,
        content: "Our trip story is wonderful"
    }

    const firstPostLike: Like = {
        id: 'y23y2ryt',
        count: 2000, //2k
        postId: firstPost.id
    }

    const post = {
        id: 'kjkhfeoihfw',
        author: rehab,
        content: "Today's session was hectic"
    }

    const postEmpty = {

    } as Post; // not a post;

    const secondPost = post as Post;

    const secondPostLike: Like = {
        id: 'iuuiyiov',
        count: 1500, //1.5k
        postId: secondPost.id
    }

    const thirdPost: Post = postEmpty;

    const fourthPost: Post = firstPostLike as unknown as Post;


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
            Type Casting
            <div className="text-2xl text-black flex flex-col gap-1"></div>
        </div>
    );
    // JSX/TSX ends here
}

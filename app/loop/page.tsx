export default function Home() {
  // Loop
  // -for
  //for ([1] [2] [3]) {
  // Blok of Code
  //  }

  const myFrinds = ["rehab", "osama", "sara"];

  const onlyNames = [];
  for (let i = 0; i < myFrinds.length; i++) {
    if (typeof myFrinds[i] === "string") onlyNames.push(myFrinds[i]);
  }
  console.log(onlyNames);
  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-yellow flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-white text-transparent bg-clip-text  from-[green] to-[white]`}
      >
        Loop
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}

export default function Home() {
  // Loop
  // -for
  //for ([1] [2] [3]) {
  // Blok of Code
  //  }

  const start = 10;
  const end = 100;
  const exclude = 40;
  for (let i = start; i <= end; i = i + start) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }

  const start1 = 10;
  const end1 = 0;
  const stop1 = 3;

  for (let i = start1; i > end1; i--) {
    if (i < start1) {
      console.log(` 0${i}`);
    } else {
      console.log(i);
    }
    if (i === stop1) {
      break;
    }
  }

  const start2 = 1;
  const end2 = 6;
  const breaker2 = 2;

  // This Is Nested Loop But It Can Be Done With One Loop

  for (let i = start2; i <= end; i++) {
    console.log(i);
    for (let j = breaker2; j <= end2; j *= j) {
      console.log("-- " + j);
    }
  } // JSX/TSX starts here
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

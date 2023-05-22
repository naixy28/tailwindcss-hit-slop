import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handler = () => {
    console.log("click");
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center">
      {/* <button className="hover:opacity-70 active:text-red-600 border border-black p-4 hit-slop-10">
        Click Me
      </button> */}
      <p>
        Magna irure Lorem Lorem id sint nisi veniam nisi excepteur adipisicing
        officia sunt pariatur. Dolor quis aliquip minim aliqua cillum tempor
        officia aute nulla ad pariatur nisi ut. Ipsum in voluptate officia nulla
        qui nulla amet aute. Dolore labore tempor dolore ex commodo
        <span
          className="hit-slop-5 text-blue-600 active:text-red-600 relative"
          onClick={handler}
        >
          click me
        </span>{" "}
        nostrud ea in enim. Nostrud consequat adipisicing deserunt elit. Non
        minim aliqua proident sint sit magna amet exercitation ut. Commodo anim
        dolore velit adipisicing minim excepteur
        <span
          className="hit-slop-5 text-blue-600 active:text-red-600 relative"
          onClick={handler}
        >
          click me
        </span>{" "}
        sunt nulla sunt enim quis magna. Mollit laboris do occaecat labore
        deserunt qui laborum laboris et velit incididunt.
        <span
          className="hit-slop-5 text-blue-600 active:text-red-600 relative"
          onClick={handler}
        >
          click me
        </span>
        click me
      </p>
    </div>
  );
}

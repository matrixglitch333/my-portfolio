import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div
      className={`${inter.className} bg-red-500 h-screen grid place-items-center text-9xl text-black text-center`}
    >
      Hey there <br />
      this is the very beginning <br />
      of my portfolio site!
    </div>
  );
}

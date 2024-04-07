import Link from "next/link";
import { Inter } from "next/font/google";
import SvgComponent from "../script/rocket-launch";
const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <main
      className={`flex h-screen flex-col items-center p-24 bg-star-bg  ${inter.className}`} 
    >
      <div class="font-bold sm:text-7xl">Starship Delivery Co.</div>
      <div class="m-10 bg-stone-600 rounded">
        <ul class="list-none flex">
          <li class="p-5">
            <Link class="text-white hover:text-stone-400" href="/">
              Home
            </Link>
          </li>
          <li class="p-5">
            <Link class="text-white hover:text-stone-400" href="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div class="text-6xl py-20">About Us</div>
      <div class="text-center p-20">
        <p>
          We have been delivering in starships for 2,823 years throughout the galaxy! We get your packages to you at warp speed so they're always at your door on time, every time.
        </p>
        <br></br>
        <p>
          Our goal is simple: To create a speedy starship service that can fulfill the delivery needs of many planets. We achive that plan together through the stars!
        </p>
      </div>

      <div class="relative bottom-0">
        <SvgComponent className="h-20 w-20 text-stone-600" />
      </div>
    </main>
  );
}

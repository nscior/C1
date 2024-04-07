import Link from "next/link";
import { Inter } from "next/font/google";
import SvgComponent from "../script/rocket-launch";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center p-24 bg-star-bg  ${inter.className}`} 
    >

      <div class="font-bold sm:text-7xl">Starship Delivery Co.</div>

      <div class="m-10 bg-stone-600 rounded-lg">
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

      <div class="mx-auto max-w-7xl py-20 px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 dark:text-stone-400">
              Packages Shipped
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight dark:text-white sm:text-5xl">
              44 billion
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 dark:text-stone-400">
              Deliveries Per Day
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              34,892,683
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 dark:text-stone-400">
              New customers daily
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight dark:text-white sm:text-5xl">
              46,000
            </dd>
          </div>
        </dl>
      </div>

      <div class="relative bottom-0">
        <SvgComponent className="h-20 w-20 text-stone-600" />
      </div>

    </main>
  );
}


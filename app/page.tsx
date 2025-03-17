'use client'
//it is mandatory you add 'use client' in a component if it has a wagmi hook

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import { useAccount } from 'wagmi';

export default function Home() {

  const { address } = useAccount();

  return (
   <>
   <nav className="bg-gray-300 flex justify-between items-center py-4 px-10">
    <h1 className="text-3xl font-semibold">YourDapp</h1>
    <ul className="flex gap-x-10">
      <li>Home</li>
      <li>About</li>
      <li>Marketplace</li>
      <ConnectButton/>
      </ul>
   </nav>
      <div className="flex flex-col items-center justify-center p-80">
        <h1 className="text-4xl text-center font-semibold">
          A simple starter template for Web3 dApps using Next.js 15, Wagmi, RainbowKit, and Shadcn for styling. 
        </h1>
        <Button className='my-4'>Shadcn Button</Button>
        <p>Connected to wallet:</p> 
        { address ? <p>{address}</p> : <p>No wallet connected</p> }
      </div>
   </>
  );
}

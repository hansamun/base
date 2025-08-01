"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-blue-950 text-white font-body">
      {/* Header */}
      <header className="relative flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <nav className="w-full max-w-6xl flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/copper-dog-mascot.png"
              alt="Based Copper Logo"
              width={40}
              height={40}
              className="rounded-full md:w-12 md:h-12"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold font-heading">Based Copper</span>
              <span className="text-xs md:text-sm text-gray-400 font-body">COPPER TOKEN</span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-blue-300 transition-colors font-body">
              ABOUT
            </a>
            <a href="#tokenomics" className="text-white hover:text-blue-300 transition-colors font-body">
              TOKENOMICS
            </a>
            <a href="#how-to-buy" className="text-white hover:text-blue-300 transition-colors font-body">
              HOW TO BUY
            </a>
            <a href="#meme" className="text-white hover:text-blue-300 transition-colors font-body">
              MEMES
            </a>
            <a
              href="https://t.me/basedcopper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors font-body"
            >
              TELEGRAM
            </a>
            <a
              href="https://x.com/basedcopper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors font-body"
            >
              TWITTER
            </a>
            <a
              href="https://ape.store/base/0x3323ad1915c2f78233c2ceb32846f4781704fb3d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors font-body"
            >
              BUY $COPPER
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-300 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-blue-900 border-t border-blue-800 md:hidden z-50">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors font-body py-2 text-center"
              >
                ABOUT
              </a>
              <a
                href="#tokenomics"
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors font-body py-2 text-center"
              >
                TOKENOMICS
              </a>
              <a
                href="#how-to-buy"
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors font-body py-2 text-center"
              >
                HOW TO BUY
              </a>
              <a
                href="#meme"
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors font-body py-2 text-center"
              >
                MEMES
              </a>
              <a
                href="https://t.me/basedcopper"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors font-body py-2 text-center"
              >
                TELEGRAM
              </a>
              <a
                href="https://x.com/basedcopper"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors font-body py-2 text-center"
              >
                TWITTER
              </a>
              <a
                href="https://ape.store/base/0x3323ad1915c2f78233c2ceb32846f4781704fb3d"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg transition-colors font-body text-center mx-4"
              >
                BUY $COPPER
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950 opacity-90"></div>
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
          <Image
            src="/images/copper-dog-mascot.png"
            alt="Based Copper Mascot"
            width={150}
            height={150}
            className="mb-6 md:mb-8 rounded-full md:w-[200px] md:h-[200px]"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight uppercase font-heading leading-tight">
            MEET BASED COPPER
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-blue-200 px-4">The Sleepy Shiba Taking Over Base</p>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white text-sm mb-2 font-body">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-white animate-pulse" />
          </div>
        </div>
      </section>

      {/* 1. About Section */}
      <section id="about" className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-blue-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/copper-dog-mascot.png"
              alt="Based Copper Mascot"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full max-w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Who is $COPPER?</h2>
            <p className="text-gray-300 mb-4 leading-relaxed font-body text-sm md:text-base">
              Bonk refers to a series of comic-style memes in which meme characters such as Doge and Cheems get hit on
              the head with bats, hammers and other heavy objects, accompanied by "Bonk" sound effect and clipart. The
              original image that spawned the meme depicts a Shiba Inu, named Copper.
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-3 font-heading text-blue-300">Origin</h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-body text-sm md:text-base">
              On March 24th, 2016, Tumblr user didlo posted a photo of their Shiba Inu with the caption, "She ate a
              scorpion," depicting their dog named Copper with a swollen head and face from the sting.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed font-body text-sm md:text-base">
              Now, this legendary meme dog inspires <span className="font-bold text-white">$COPPER</span> - a meme token
              on Base Network. From viral internet fame to crypto stardom, Copper continues to bring joy and laughter to
              communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tokenomics Section */}
      <section id="tokenomics" className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-blue-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 font-heading">COPPER NOMICS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Card className="bg-blue-800 border-blue-700 text-white text-center p-4 md:p-6 flex flex-col items-center">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl font-bold font-heading">100% Liquidity Burnt</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body text-sm md:text-base">
                Liquidity tokens permanently removed from circulation, creating a stable trading environment for our
                sleepy Shiba.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-blue-800 border-blue-700 text-white text-center p-4 md:p-6 flex flex-col items-center">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl font-bold font-heading">1B Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body text-sm md:text-base">
                Fixed token supply with no possibility of inflation - just like Based Copper's chill attitude, it never
                changes.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-blue-800 border-blue-700 text-white text-center p-4 md:p-6 flex flex-col items-center">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl font-bold font-heading">Contract Renounced</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body text-sm md:text-base">
                Ownership relinquished - Based Copper belongs to the community now, just like a good boy should.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-blue-800 border-blue-700 text-white text-center p-4 md:p-6 flex flex-col items-center sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl font-bold font-heading">Zero % Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body text-sm md:text-base">
                Zero tax on buys and sells - Based Copper doesn't bite, he just wants everyone to prosper.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. How to Buy Section */}
      <section id="how-to-buy" className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-blue-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 font-heading">How to Buy $COPPER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="bg-blue-900 p-4 md:p-6 rounded-lg border border-blue-800">
              <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">1</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 font-heading">Get a Wallet</h3>
              <p className="text-gray-300 font-body text-sm md:text-base">
                Download MetaMask or any Base-compatible wallet
              </p>
            </div>
            <div className="bg-blue-900 p-4 md:p-6 rounded-lg border border-blue-800">
              <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">2</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 font-heading">Add Base Network</h3>
              <p className="text-gray-300 font-body text-sm md:text-base">Connect your wallet to Base Network</p>
            </div>
            <div className="bg-blue-900 p-4 md:p-6 rounded-lg border border-blue-800">
              <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">3</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 font-heading">Buy $COPPER</h3>
              <p className="text-gray-300 font-body text-sm md:text-base">Swap ETH for $COPPER on our DEX</p>
            </div>
          </div>
          <a
            href="https://ape.store/base/0x3323ad1915c2f78233c2ceb32846f4781704fb3d"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold transition-colors font-body inline-block"
          >
            BUY $COPPER NOW
          </a>
        </div>
      </section>

      {/* 4. Memes Gallery */}
      <section id="meme" className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-blue-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 font-heading">Meet Our Mascot</h2>
        <div className="max-w-7xl mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="relative group">
              <Image
                src="/images/copper-pool.jpeg"
                alt="Copper chilling on pool float"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src="/images/copper-business.jpeg"
                alt="Copper in business attire"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
            <div className="relative group sm:col-span-2 md:col-span-1">
              <Image
                src="/images/copper-rocket.jpeg"
                alt="Copper riding rocket to the moon"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="relative group">
              <Image
                src="/images/copper-car.jpeg"
                alt="Copper dogs in convertible car"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src="/images/copper-bathroom.jpeg"
                alt="Copper in bathroom with phone"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
            <div className="relative group sm:col-span-2 md:col-span-1">
              <Image
                src="/images/copper-diamond-hands.jpeg"
                alt="Copper with diamond hands gesture"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="relative group">
              <Image
                src="/images/copper-selfie.jpeg"
                alt="Copper dogs taking selfie with charts"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src="/images/copper-friends.jpeg"
                alt="Copper dogs friendship"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
            <div className="relative group sm:col-span-2 md:col-span-1">
              <Image
                src="/images/copper-chef.jpeg"
                alt="Copper as chef cooking money"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48 md:h-64 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Telegram Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-blue-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 font-heading">Join Our Telegram</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-body">
            Connect with the Based Copper community on Telegram! Get the latest updates, share memes, and chat with
            fellow holders.
          </p>
          <a
            href="https://t.me/basedcopper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors font-body"
          >
            <Image src="/images/telegram-icon.png" alt="Telegram" width={32} height={32} className="rounded" />
            <span>JOIN TELEGRAM</span>
          </a>
        </div>
      </section>

      {/* 6. Twitter Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-blue-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 font-heading">Follow Us on Twitter</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-body">
            Stay updated with the latest news, announcements, and memes from Based Copper. Follow us for real-time
            updates!
          </p>
          <a
            href="https://x.com/basedcopper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors font-body"
          >
            <Image src="/images/twitter-icon.png" alt="Twitter" width={32} height={32} className="rounded" />
            <span>FOLLOW TWITTER</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 text-center text-gray-500 text-xs md:text-sm font-body px-4 bg-blue-950">
        <p>&copy; {new Date().getFullYear()} Based Copper. All rights reserved. Good boy guaranteed.</p>
      </footer>
    </div>
  )
}

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div id="page-content" className="relative z-10 w-full px-4 mx-auto max-w-[1248px]">

        <div className="banner-bg relative -mx-4 sm:mx-0  sm:pt-0">
          <div
            className="relative overflow-hidden rounded-xl bg-layer4 bg-cover mx-4 aspect-[1.7] bg-repeat-x sm:mx-0 sm:aspect-[4.6]"
            style={{
              backgroundImage:
                "linear-gradient(261deg, rgb(50, 55, 56) 70.44%, rgb(96, 104, 105) 128.85%)",
            }}
          >
            <img
              className="absolute bottom-0 h-full -right-3 lg:right-0 lg:h-full"
              src="/assets/banner-DdSPdS9B.png"
              alt="banner"
            />
            <img
              className="absolute rounded-lg right-[2%] top-[50%] w-[5.3%] translate-y-[-50%]"
              src="/assets/icon.png"
              alt="icon"
            />
            <img
              className="absolute hidden -left-18 top-2 sm:block"
              width={354}
              height={360}
              src="/assets/banner_logo.png"
              alt="logo"
            />
            <div
              className="absolute top-0 flex h-full flex-col py-4 left-3 origin-top sm:left-[14%] sm:top-[6%] sm:h-auto sm:items-center sm:py-0 sm:text-center"
              style={{ transform: "scale(0.849315)" }}
            >
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">Stay Untamed</p>
              <div className="rounded-xl text-lg font-semibold p-0 sm:mt-4 sm:px-15 sm:py-3 sm:backdrop-blur-md sm:bg-[rgba(0,0,0,0.15)]">
                <div className="text-base font-semibold sm:text-lg">Sign Up & Get</div>
                <span className="text-xl font-extrabold sm:mt-1 sm:text-2xl">UP TO</span>
                <span className="text-xl font-extrabold ml-1 bg-gradient-to-r sm:text-2xl from-[#9FE871] to-[#24EE89] text-transparent bg-clip-text">
                  $20,000.00
                </span>
                <div className="text-base font-semibold leading-none sm:text-lg">in Casino or Sports</div>
              </div>
              <button
                type="button"
                className="button button-brand button-m h-10 border-solid mt-auto w-28 border-[2px] border-white_alpha20 sm:mt-5 sm:w-60 sm:border-none"
              >
                Join Now
              </button>
            </div>
          </div>
          <div class="px-4 sm:px-0"></div>
          <div class="mb-1.5 mt-2 flex items-center sm:mt-6 h-8">
            <div class="flex items-center text-base font-extrabold text-primary">
              <div class="relative mx-4 mr-2 h-2 w-2">
                <div class="absolute left-0 top-0 h-full w-full rounded-full bg-success z-10"></div>
                <div class="absolute left-0 top-0 h-full w-full rounded-full bg-success animate-ping"></div>
              </div>
              <div>Recent Big Wins</div>
              <div class="ml-2 hidden gap-2 lg:!flex"><button class="button button-m center h-auto flex-1 whitespace-nowrap rounded-none border-b-2 p-1 text-xs border-b-brand font-semibold text-primary" type="button">All</button><button class="button button-m center h-auto flex-1 whitespace-nowrap rounded-none border-b-2 p-1 text-xs border-b-transparent font-normal text-secondary" type="button">BC Originals</button><button class="button button-m center h-auto flex-1 whitespace-nowrap rounded-none border-b-2 p-1 text-xs border-b-transparent font-normal text-secondary" type="button">Slots</button><button class="button button-m center h-auto flex-1 whitespace-nowrap rounded-none border-b-2 p-1 text-xs border-b-transparent font-normal text-secondary" type="button">Live Casino</button></div>
            </div>
            <span class="ml-auto"></span>
          </div>
          <div class="overflow-hidden px-4 sm:rounded-xl sm:bg-layer3 sm:px-3">
            <div class="recent-big-win inline-flex items-center gap-3 sm:gap-3.5">
              <a href="/game-detail/1840083490711996733" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/b93fd320ad.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1,073.16K USDC</div>
                </div>
              </a>
              <a href="/game-detail/1840095238095410237" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/ef286e136b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>4.78 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839642125608849725" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/15029_Gates of Olympus 1000.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>471.33K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839552946758011707" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/15935_Sugar rush 1000.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-gold.png" /><span class="ellipsis -ml-0.5 text-xxs">Qeecvdzghtac</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>2,092 SOL</div>
                </div>
              </a>
              <a href="/game-detail/1839924734678117950" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/5314994f7d.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>3.108 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839637268523113277" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/9921f64dc5.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>2.983 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1840082204119606076" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/e12c9548-c513-4abd-8ed0-8a8dfb1d9f5b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>360.05K USDC</div>
                </div>
              </a>
              <a href="/game-detail/1840084473293229886" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/5fde44c780.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>349.96K USDC</div>
                </div>
              </a>
              <a href="/game-detail/1840006401556275261" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/1d331e117b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>316.12K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839901311708266812" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/13106_The Zeus vs Hades.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>279.4K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839641677663724861" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/40a57a956e.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">tg LUDOBRATAN</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>260.52K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1840090376350241597" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/8ab38e9c18.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1,198 SOL</div>
                </div>
              </a>
              <a href="/game-detail/1839772398148488508" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/a8f62b69c6.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-platinum.png" /><span class="ellipsis -ml-0.5 text-xxs">Bbagienjjuac</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>206.26K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839701356266559293" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/9b6f55e542.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">tg LUDOBRATAN</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>199.34K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1840072596618786110" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/d4d39acc68.jpg?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>197.56K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839718303094327358" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/2ff47b1091.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1.599 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839645286600383294" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/bd3689abc9.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1.49 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839546096900532545" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/f681b9b397.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>178.8K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839846508860043837" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/17041_Sugar Rush.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Swmmkerwkuac</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>942 SOL</div>
                </div>
              </a>
              <a href="/game-detail/1840005576728665405" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/a58ae3acf5.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>153.92K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1840083490711996733" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/b93fd320ad.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1,073.16K USDC</div>
                </div>
              </a>
              <a href="/game-detail/1840095238095410237" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/ef286e136b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>4.78 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839642125608849725" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/15029_Gates of Olympus 1000.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>471.33K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839552946758011707" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/15935_Sugar rush 1000.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-gold.png" /><span class="ellipsis -ml-0.5 text-xxs">Qeecvdzghtac</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>2,092 SOL</div>
                </div>
              </a>
              <a href="/game-detail/1839924734678117950" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/5314994f7d.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>3.108 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839637268523113277" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/9921f64dc5.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>2.983 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1840082204119606076" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/e12c9548-c513-4abd-8ed0-8a8dfb1d9f5b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>360.05K USDC</div>
                </div>
              </a>
              <a href="/game-detail/1840084473293229886" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/5fde44c780.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>349.96K USDC</div>
                </div>
              </a>
              <a href="/game-detail/1840006401556275261" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/1d331e117b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>316.12K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839901311708266812" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/13106_The Zeus vs Hades.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>279.4K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839641677663724861" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/40a57a956e.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">tg LUDOBRATAN</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>260.52K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1840090376350241597" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/8ab38e9c18.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1,198 SOL</div>
                </div>
              </a>
              <a href="/game-detail/1839772398148488508" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/a8f62b69c6.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-platinum.png" /><span class="ellipsis -ml-0.5 text-xxs">Bbagienjjuac</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>206.26K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839701356266559293" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/9b6f55e542.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">tg LUDOBRATAN</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>199.34K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1840072596618786110" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/d4d39acc68.jpg?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>197.56K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839718303094327358" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/2ff47b1091.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1.599 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839645286600383294" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/bd3689abc9.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>1.49 BTC</div>
                </div>
              </a>
              <a href="/game-detail/1839546096900532545" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/f681b9b397.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Hidden</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>178.8K USDT</div>
                </div>
              </a>
              <a href="/game-detail/1839846508860043837" class="sm:w-13 flex h-28 w-14 flex-none flex-col items-center text-xs hover:opacity-80 sm:h-[106px] inactive" link="">
                <div class="relative mb-1 w-full rounded-lg pt-[133%]"><img src="https://bc.imgix.net/game/image/17041_Sugar Rush.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="absolute left-0 top-0 w-full rounded-lg" /></div>
                <div class="w-[118%]">
                  <div class="flex items-center justify-center font-extrabold text-secondary"><img class="size-[0.875rem]" src="/assets/vip/badge-diamond.png" /><span class="ellipsis -ml-0.5 text-xxs">Swmmkerwkuac</span></div>
                  <div class="whitespace-nowrap text-nowrap text-center font-extrabold text-xxs" style={{ color: 'rgb(44, 217, 125)' }}>942 SOL</div>
                </div>
              </a>
              <div class="h-32 w-14">
                <div class="mt-2 h-18 rounded-lg bg-layer5 sm:bg-layer4"></div>
                <div class="mt-1 h-3 rounded bg-layer5 sm:bg-layer4"></div>
                <div class="mt-1 h-4 rounded-md bg-layer5 sm:bg-layer4"></div>
              </div>
            </div>
          </div>
          <div class="-mx-4 bg-layer2 p-4">
            <div class="flex w-full flex-col gap-2 items-stretch sm:mt-6 lg:!flex-row lg:!gap-3">
              <div class="flex gap-2 flex-3 lg:!gap-3">
                <button class="button button-m relative h-32 flex-1 overflow-hidden rounded-xl bg-layer4 font-extrabold center p-1.5 sm:h-[252px] sm:px-3 sm:py-5 col-span-2 col-start-1" type="button" style={{ backgroundImage: 'linear-gradient(to left, rgb(44, 80, 64), transparent 75%)' }}   onClick={() => navigate("/casino")}>
                  <img class="absolute right-0 top-0 h-[120%] sm:h-full" src="/assets/casino-D-4QWHdb.png" />
                  <div class="relative z-10 flex h-full flex-col flex-auto">
                    <div class="flex items-center">
                      <div class="color_icon_img casino" style={{ transform: 'scale(1)' }}></div>
                      <span class="text-sm ml-0.5 sm:text-2xl">CASINO</span>
                    </div>
                    <div class="hidden font-semibold text-secondary mb-1.5 mt-auto max-w-60 text-left lg:block">Dive into our in-house games, live casino and slots</div>
                  </div>
                </button>
                <button class="button button-m relative h-32 flex-1 overflow-hidden rounded-xl bg-layer4 font-extrabold center p-1.5 sm:h-[252px] sm:px-3 sm:py-5 col-span-2 col-start-1" type="button" style={{ backgroundImage: 'linear-gradient(to left, rgb(88, 46, 89), transparent 75%)' }}onClick={() => navigate("/sports")}>
                  <img class="absolute right-0 top-0 h-[120%] sm:h-full" src="/assets/sports_in-BiOOAtE4.png" />
                  <div class="relative z-10 flex h-full flex-col flex-auto">
                    <div class="flex items-center">
                      <div class="color_icon_img sports" style={{ transform: 'scale(1)' }}></div>
                      <span class="text-sm ml-0.5 sm:text-2xl">SPORTS</span>
                    </div>
                    <div class="hidden font-semibold text-secondary mb-1.5 mt-auto max-w-60 text-left lg:!block">Bet on Football, Cricket, NFL, eSports &amp; over 80 sports!</div>
                  </div>
                </button>
              </div>
              <div class="flex flex-wrap gap-2 flex-2 lg:!gap-3">
                <button class="button button-m relative h-24 flex-1 overflow-hidden rounded-xl bg-layer4 p-2 font-extrabold center sm:h-[120px] lg:min-w-[40%]" type="button" style={{ backgroundImage: 'linear-gradient(to left, rgb(66, 83, 48), transparent 75%)' }}>
                  <img class="absolute left-[50%] top-[5%] h-[70%] -translate-x-[50%] lg:top-0 lg:h-full lg:-translate-x-[10%]" src="/assets/lottery-DUgna72e.png" />
                  <div class="absolute hidden items-center left-2 top-2 lg:flex">
                    <div class="color_icon_img lottery" style={{ transform: 'scale(1)' }}></div>
                    <span class="text-lg font-extrabold ml-1">LOTTERY</span>
                  </div>
                  <div class="absolute left-0 block w-full text-center bottom-2 lg:hidden"><span class="text-sm font-extrabold">LOTTERY</span></div>
                </button>
                <button class="button button-m relative h-24 flex-1 overflow-hidden rounded-xl bg-layer4 p-2 font-extrabold center sm:h-[120px] lg:min-w-[40%]" type="button" style={{ backgroundImage: 'linear-gradient(to left, rgb(80, 65, 48), transparent 75%)' }}>
                  <img class="absolute left-[50%] top-[5%] h-[70%] -translate-x-[50%] lg:top-0 lg:h-full lg:-translate-x-[10%]" src="/assets/racing-B0zGAPWI.png" />
                  <div class="absolute hidden items-center left-2 top-2 lg:flex">
                    <div class="color_icon_img racing" style={{ transform: 'scale(1)' }}></div>
                    <span class="text-lg font-extrabold ml-1">RACING</span>
                  </div>
                  <div class="absolute left-0 block w-full text-center bottom-2 lg:hidden"><span class="text-sm font-extrabold">RACING</span></div>
                </button>
                <button class="button button-m relative h-24 flex-1 overflow-hidden rounded-xl bg-layer4 p-2 font-extrabold center sm:h-[120px] lg:min-w-[40%]" type="button" style={{ backgroundImage: 'linear-gradient(to left, rgb(45, 79, 49), transparent 75%)' }}>
                  <img class="absolute left-[50%] top-[5%] h-[70%] -translate-x-[50%] lg:top-0 lg:h-full lg:-translate-x-[10%]" src="/assets/updown-Dfy3kp4C.png" />
                  <div class="absolute hidden items-center left-2 top-2 lg:flex">
                    <div class="color_icon_img trading" style={{ transform: 'scale(1)' }}></div>
                    <span class="text-lg font-extrabold ml-1">UPDOWN</span>
                  </div>
                  <div class="absolute left-0 block w-full text-center bottom-2 lg:hidden"><span class="text-sm font-extrabold">UPDOWN</span></div>
                </button>
                <button class="button button-m relative h-24 flex-1 overflow-hidden rounded-xl bg-layer4 p-2 font-extrabold center sm:h-[120px] lg:min-w-[40%]" type="button" style={{ backgroundImage: 'linear-gradient(to left, rgb(71, 56, 111), transparent 75%)' }}>
                  <img class="absolute left-[50%] top-[5%] h-[70%] -translate-x-[50%] lg:top-0 lg:h-full lg:-translate-x-[10%]" src="/assets/bingo-BjkimYl0.png" />
                  <div class="absolute hidden items-center left-2 top-2 lg:flex">
                    <div class="color_icon_img bingo" style={{ transform: 'scale(1)' }}></div>
                    <span class="text-lg font-extrabold ml-1">BINGO</span>
                  </div>
                  <div class="absolute left-0 block w-full text-center bottom-2 lg:hidden"><span class="text-sm font-extrabold">BINGO</span></div>
                </button>
              </div>
            </div>
            <div class="mb-1.5 mt-2 flex items-center sm:mt-6 h-8">
              <div class="flex items-center text-base font-extrabold text-primary">BC Originals</div>
              <a href="/gamelist/brand" class="button ml-auto flex items-center rounded-lg bg-black_alpha5 font-extrabold dark:bg-layer5 h-8 px-2 inactive" link="">
                All
                <svg class="icon ml-1 size-4 rotate-180 text-secondary" viewBox="0 0 32 32">
                  <path d="M20.9717 9.59292L15.2482 15.3155L20.9717 21.0389L18.5143 23.4972L10.3325 15.3164L18.5143 7.1355L20.9717 9.59292Z" fill="#B9C4CC"></path>
                </svg>
              </a>
              <div class="ml-2 flex gap-x-1">
                <button disabled="" class="button button-second button-m size-8 bg-layer5" type="button">
                  <svg class="icon size-5" viewBox="0 0 32 32">
                    <path d="M20.9717 9.59292L15.2482 15.3155L20.9717 21.0389L18.5143 23.4972L10.3325 15.3164L18.5143 7.1355L20.9717 9.59292Z" fill="#B9C4CC"></path>
                  </svg>
                </button>
                <button class="button button-second button-m size-8 bg-layer5" type="button">
                  <svg class="icon size-5 rotate-180" viewBox="0 0 32 32">
                    <path d="M20.9717 9.59292L15.2482 15.3155L20.9717 21.0389L18.5143 23.4972L10.3325 15.3164L18.5143 7.1355L20.9717 9.59292Z" fill="#B9C4CC"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="grid smooth-scroll smooth-list snap-x relative snap-mandatory grid-flow-col overflow-x-scroll overflow-y-hidden scroll-smooth hide-scroll mx-0 gap-2 grid-col-3" style={{ '--grid-gap': '.5rem', '--grid-padding': '0px', '--aspect-ratio': '0.75' }}>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/ef286e136b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">452</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Limbo</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/f681b9b397.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">4142</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Crash</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/a8c618fcc0.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">230</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Plinko</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/8ab38e9c18.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">366</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Twist</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/c03402ef41.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">206</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Classic Dice</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/1d331e117b.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">160</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Keno</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg group">
                  <img src="https://bc.imgix.net/game/image/0714f55e15.png?_v=4&amp;auto=format&amp;dpr=1.5&amp;w=200" class="w-full" />
                  <div class="absolute flex h-5 items-center rounded-md right-1 bottom-1 bg-black_alpha20 px-1.5"><img class="mr-1 w-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD///+vv7+zvsKzvcD///+yv8Czv7////////////////+0vsH///+0v8L///+0v8L///////////+zvsGzvcKyvcK0vb+zv8Ozv7////+zvsH///9BsiEjAAAAG3RSTlMAvxC/gHBgIK8gEO/n35+Pj4BgUM+vcHBAQDB6axrrAAAAhUlEQVQoz4XOWRKEIAxF0ciMs23PZP/r7C5RIcTS83lfUQSuvceHHC3Log+LXhSDDCtJuwm7JxnaNNzJDyGT/2LzwZ68YEfxsz5pMECoraut0KV9AWONUkbAgdr7g6hdh3+Nu5GuG9x1OvUKCVevfcDCELtH5hs/4EO8YObDDIupKkxw4geB5Rgg/yXcwgAAAABJRU5ErkJggg==" /><span class="text-xs font-semibold text-[white]">130</span></div>
                  <div class="absolute left-0 top-0 h-full w-full cursor-pointer center bg-[#00000099] opacity-0 group-hover:opacity-100">
                    <div class="absolute left-0 top-0 flex w-full px-2 text-center font-extrabold leading-4 center h-[40%] text-[white]">Hash Dice</div>
                    <div class="flex h-9 w-9 rounded-full transition-all duration-300 center bg-white_alpha20 group-hover:scale-150">
                      <svg viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M23.011 14.463c1.055 0.753 1.055 2.321 0 3.075l-8.607 6.145c-1.25 0.893-2.986-0.001-2.986-1.537v-12.291c0-1.536 1.736-2.43 2.986-1.537l8.607 6.145z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative mb-5 flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-layer5"></div>
              </div>
              <div>
                <div class="relative mb-5 flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-layer5"></div>
              </div>
              <div>
                <div class="relative mb-5 flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-layer5"></div>
              </div>
            </div>

          </div>

        </div>


      </div>
    

    </div>


  );

};
export default Dashboard;

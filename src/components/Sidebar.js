import React, { useEffect, useState, useRef } from 'react';
import Api from '../Requests/Api';
// import { LogOut, Lock, User, Sidebar } from "lucide-react"; // Icons
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {


  return (
   <div className="sidebar">
        <div
            className="w-full hidden-scroll-bar absolute left-0 top-0 h-full w-60 transition-all overflow-y-auto !bg-layer3 duration-200">
            <div className="w-full overflow-hidden bg-layer2 pb-3 sm:bg-layer3 sm:p-4">
                <div className="bc-token-entry mb-2"><a href="/wallet/bc"
                        className="relative z-10 block rounded-lg text-primary inactive" link=""
                        style={{backgroundImage: 'radial-gradient(85.75% 170.25% at 0% 100%, rgba(35, 238, 136, 0.15) 0%, rgba(35, 238, 136, 0) 100%)', backgroundColor: 'var(--Sidebar-Unit_bg)'}}>
                        <div className="flex items-center rounded-lg px-2 py-2.5">
                            <div className="rounded-full center mr-1 size-9 shrink-0 py-1.5"><img className="h-full" alt="logo"
                                    src="./assets/logo/logo_small.png" style={{width: '30px',height: '30px'}}/></div>
                            <div className="flex-1">
                                <div className="flex items-center">
                                    <div
                                        className="mr-1 text-sm font-extrabold text-primary whitespace-nowrap leading-tight">
                                        BC Token</div>
                                    <div className="flex items-center text-sm font-semibold leading-tight text-brand"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 12 12" fill="none" className="mr-0.5">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.59417 6.3623L5.82021 3.61864L2.04626 6.3623V3.86866L5.82021 1.125L9.59417 3.86866V6.3623ZM9.59417 10.5599L5.82021 7.81621L2.04626 10.5599V8.06624L5.82021 5.32258L9.59417 8.06624V10.5599Z"
                                                fill="currentColor"></path>
                                        </svg><span className="text-xs">9.72%</span></div>
                                </div>
                                <div className="text-sm font-semibold text-primary leading-tight">$0.0088102</div>
                            </div>
                            <div className="bg-arrow rounded-md size-6 center btn-like"><svg
                                    className="icon rotate-180 transition-all fill-secondary !size-4.5" viewBox="0 0 32 32">
                                    <path
                                        d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                    </path>
                                </svg></div>
                        </div>
                    </a></div>
                <div className="rounded-lg mt-1" style={{background: 'var(--Sidebar-Unit_bg)'}}>
                    <div
                        className="toggle-link-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:p-0 toggle-link-item-open">
                        <a href="/casino" className="invisible pointer-events-none size-0 inactive" link=""></a>
                        <div className="flex-none center sm:size-10">
                            <div className="color_icon_img casino" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Casino</span><button
                            className="bg-arrow ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5"><svg
                                className="icon fill-secondary transition ease-out size-4.5 -rotate-90" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg></button>
                    </div>
                </div>
                <div className="rounded-lg mt-1" style={{background: 'var(--Sidebar-Unit_bg)'}}>
                    <div
                        className="toggle-link-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:p-0">
                        <a href="/sports" className="invisible pointer-events-none size-0 inactive" link=""></a>
                        <div className="flex-none center sm:size-10">
                            <div className="color_icon_img sports" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Sports</span><button
                            className="bg-arrow ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5"><svg
                                className="icon fill-secondary transition ease-out size-4.5 -rotate-90" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg></button>
                    </div>
                </div>
                <div className="rounded-lg mt-1" style={{background: 'var(--Sidebar-Unit_bg)'}}>
                    <div
                        className="toggle-link-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:p-0">
                        <a href="/lottery" className="invisible pointer-events-none size-0 inactive" link=""></a>
                        <div className="flex-none center sm:size-10">
                            <div className="color_icon_img lottery" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Lottery</span><button
                            className="bg-arrow ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5"><svg
                                className="icon fill-secondary transition ease-out size-4.5 -rotate-90" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg></button>
                    </div>
                </div>
                <div className="rounded-lg mt-1" style={{background: 'var(--Sidebar-Unit_bg)'}}>
                    <div
                        className="toggle-link-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:p-0">
                        <a href="/trading" className="invisible pointer-events-none size-0 inactive" link=""></a>
                        <div className="flex-none center sm:size-10">
                            <div className="color_icon_img trading" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Crypto
                            Trading</span><button
                            className="bg-arrow ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5"><svg
                                className="icon fill-secondary transition ease-out size-4.5 -rotate-90" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg></button>
                    </div>
                </div>
                <div className="rounded-lg mt-1" style={{background: 'var(--Sidebar-Unit_bg)'}}>
                    <div
                        className="toggle-link-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:p-0">
                        <a href="/promotions/promotion" className="invisible pointer-events-none size-0 inactive"
                            link=""></a>
                        <div className="flex-none center sm:size-10">
                            <div className="color_icon_img promotion" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Promotions</span><button
                            className="bg-arrow ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5"><svg
                                className="icon fill-secondary transition ease-out size-4.5 -rotate-90" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg></button>
                    </div>
                </div>
                <div className="sidebar_bg sidebar_bg_sp relative my-3 w-full rounded-lg px-0 pb-2 pt-1 sm:my-2 sm:py-1"><a
                        href="/vip-detail"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal vip_club" style={{transform: 'scale(0.75)'}}>
                            </div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold"><span
                                className="text-brand">VIP</span><span className="mx-1">Club</span></span>
                    </a><a href="/bonus-welcome"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal bonus" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Bonus</span>
                    </a><a href="/affiliate"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal affiliate" style={{transform: 'scale(0.75)'}}>
                            </div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Affiliate</span>
                    </a><a target="_blank" href="https://forum.bcgame40.com/"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal forum" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Forum</span><svg
                            className="icon size-4 flex-none text-secondary ml-1" viewBox="0 0 32 32">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M23.3137 24.1394C23.7671 24.1394 24.1367 23.7698 24.1367 23.3164V14.9523H26.6674V23.3332C26.6575 25.1742 25.1548 26.6663 23.3137 26.6663H8.6469C6.81269 26.6457 5.3313 25.1498 5.3313 23.3126V8.65263C5.34883 6.81918 6.84774 5.33398 8.685 5.33398H17.0452V7.86469H8.685C8.23159 7.86469 7.86201 8.23428 7.86201 8.68768V23.3164C7.86201 23.7698 8.23159 24.1394 8.685 24.1394H23.3137ZM19.1338 7.86469V5.33398H26.6681V12.8682H24.1373V9.65699L13.4758 20.3148L11.6873 18.5263L22.345 7.86469H19.1338Z">
                            </path>
                        </svg>
                    </a><a href="/help"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal fair" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Provably
                            Fair</span>
                    </a><a href="/responsible/faq"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal account" style={{transform: 'scale(0.75)'}}>
                            </div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Responsible
                            Gambling</span>
                    </a><a target="_blank" href="https://blog.BC.GAME/"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal blog" style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Blog</span><svg
                            className="icon size-4 flex-none text-secondary ml-1" viewBox="0 0 32 32">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M23.3137 24.1394C23.7671 24.1394 24.1367 23.7698 24.1367 23.3164V14.9523H26.6674V23.3332C26.6575 25.1742 25.1548 26.6663 23.3137 26.6663H8.6469C6.81269 26.6457 5.3313 25.1498 5.3313 23.3126V8.65263C5.34883 6.81918 6.84774 5.33398 8.685 5.33398H17.0452V7.86469H8.685C8.23159 7.86469 7.86201 8.23428 7.86201 8.68768V23.3164C7.86201 23.7698 8.23159 24.1394 8.685 24.1394H23.3137ZM19.1338 7.86469V5.33398H26.6681V12.8682H24.1373V9.65699L13.4758 20.3148L11.6873 18.5263L22.345 7.86469H19.1338Z">
                            </path>
                        </svg>
                    </a><a target="_blank" href="https://betting.BC.GAME/"
                        className="nav-link-item relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:mt-1 sm:h-10 sm:pl-0 sm:pr-2 inactive"
                        link="">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal betting_insights"
                                style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Sport
                            Betting Insights</span><svg className="icon size-4 flex-none text-secondary ml-1"
                            viewBox="0 0 32 32">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M23.3137 24.1394C23.7671 24.1394 24.1367 23.7698 24.1367 23.3164V14.9523H26.6674V23.3332C26.6575 25.1742 25.1548 26.6663 23.3137 26.6663H8.6469C6.81269 26.6457 5.3313 25.1498 5.3313 23.3126V8.65263C5.34883 6.81918 6.84774 5.33398 8.685 5.33398H17.0452V7.86469H8.685C8.23159 7.86469 7.86201 8.23428 7.86201 8.68768V23.3164C7.86201 23.7698 8.23159 24.1394 8.685 24.1394H23.3137ZM19.1338 7.86469V5.33398H26.6681V12.8682H24.1373V9.65699L13.4758 20.3148L11.6873 18.5263L22.345 7.86469H19.1338Z">
                            </path>
                        </svg>
                    </a></div>
                <div className="rounded-lg mt-1" style={{background: 'var(--Sidebar-Unit_bg)'}}>
                    <div
                        className="toggle-link-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:p-0">
                        <div className="flex-none center sm:size-10">
                            <div className="menu_icon_img menu_icon_img_normal sponsorships"
                                style={{transform: 'scale(0.75)'}}></div>
                        </div><span
                            className="ml-3 flex-1 overflow-hidden whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">Sponsorships</span><button
                            className="bg-arrow ml-auto flex size-6 items-center justify-center rounded-lg p-0 sm:mr-1.5"><svg
                                className="icon fill-secondary transition ease-out size-4.5 -rotate-90" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg></button>
                    </div>
                </div>
                <div
                    className="sidebar_bg side-nav-item flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-3 mt-3 h-11 sm:mt-1 sm:h-10 sm:p-0">
                    <div className="icon-wrap flex-none center sm:size-10"><svg className="icon text-secondary size-6"
                            viewBox="0 0 32 32">
                            <path
                                d="M12.0434 17.0183C12.9801 17.0183 13.7395 17.7778 13.7395 18.7145V25.3283C13.7395 26.265 12.9801 27.0244 12.0434 27.0244H10.2648C8.85937 27.0244 7.721 25.8852 7.721 24.4806V19.5629C7.721 18.1575 8.86019 17.0191 10.2648 17.0191H12.0434V17.0183ZM21.8077 17.0183C23.2132 17.0183 24.3515 18.1575 24.3515 19.5621V24.4798C24.3515 25.8852 23.2123 27.0236 21.8077 27.0236H20.0291C19.0925 27.0236 18.333 26.2641 18.333 25.3275V18.7136C18.333 17.777 19.0925 17.0175 20.0291 17.0175L21.8077 17.0183ZM15.9999 4.97559C22.6881 4.97559 28.1292 10.2983 28.2926 16.9261L28.2966 17.2331V22.2398C28.2966 22.9307 27.7348 23.4909 27.0415 23.4909C26.3915 23.4909 25.8574 22.9985 25.7929 22.368L25.7863 22.2398V17.2331C25.7863 11.845 21.4043 7.47772 15.9991 7.47772C10.6853 7.47772 6.36132 11.6988 6.21596 16.9603L6.21188 17.2331V22.2553C6.21188 22.9462 5.65004 23.5064 4.95673 23.5064C4.30669 23.5064 3.77262 23.014 3.70893 22.3835L3.70239 22.2553V17.2331C3.70239 10.4641 9.20807 4.9764 15.9991 4.9764L15.9999 4.97559Z">
                            </path>
                        </svg></div><span
                        className="ml-3 text-base font-extrabold text-primary whitespace-nowrap sm:ml-0 sm:text-sm sm:font-semibold">Live
                        Support</span>
                </div><a href="/events/app-download" className="inactive" link="">
                    <div className="flex cursor-pointer justify-between overflow-hidden rounded-lg bg-layer4 mt-3"
                        style={{backgroundImage: 'radial-gradient(circle at 400% 400%, rgb(35, 238, 136), transparent 92%)'}}>
                        <div className="p-4 sm:p-2.5 sm:pr-0">
                            <h3 className="text-base font-extrabold text-primary sm:text-sm">Application</h3>
                            <p className="text-sm text-secondary mt-1 text-wrap sm:text-xs">Unlock Fun with Exclusive
                                Features</p>
                        </div>
                        <div className="h-1 w-32 flex-none pr-5 pt-1 sm:w-20 sm:p-1"><img className="h-auto w-full" alt=""
                                src="./assets/pwa_d-DTsQCHPM.png"/></div>
                    </div>
                </a>
                <div className="mt-3 flex items-center justify-between gap-3 sm:mt-2 sm:flex-col sm:gap-0">
                    <div className="side-nav-item flex flex-1 cursor-pointer items-center overflow-hidden rounded-lg px-3 h-11 sm:h-10 sm:w-full sm:p-0"
                        style={{background: 'var(--Sidebar-Unit_bg)'}}>
                        <div className="icon-wrap flex-none center sm:size-10"><svg className="icon text-secondary"
                                viewBox="0 0 32 32">
                                <path
                                    d="M16 4C9.3726 4 4 9.3726 4 16C4 22.6274 9.3726 28 16 28C22.6274 28 28 22.6274 28 16C28 9.3726 22.6274 4 16 4ZM25.1671 12.0007C25.7022 13.2252 26.0008 14.578 26.0008 16.001C26.0008 17.424 25.7022 18.7768 25.1671 20.0013H20.6577C20.8782 18.7607 20.9984 17.412 20.9984 16.001C20.9984 14.59 20.8781 13.2413 20.6577 12.0007H25.1671ZM13.0018 16.001C13.0018 14.5641 13.112 13.2052 13.3125 12.0007H18.6857C18.8862 13.2052 18.9984 14.564 18.9984 16.001C18.9984 17.4381 18.8862 18.7969 18.6857 20.0014H13.3146C13.1142 18.7969 13.002 17.4381 13.002 16.001H13.0018ZM24.0007 10.0004H20.1927C19.7277 8.4392 19.0904 7.15453 18.3388 6.27668C20.6017 6.82169 22.6039 8.1385 24.0007 10.0004ZM16 7.00222C16.8878 7.00222 17.6875 8.16266 18.2367 10.0025H13.7634C14.3125 8.16073 15.1123 7.00222 16.0001 7.00222H16ZM13.6611 6.27879C12.9095 7.15458 12.2722 8.44329 11.8092 10.0025H8.0012C9.3974 8.14096 11.3989 6.82423 13.661 6.27879H13.6611ZM6.83291 12.0007H11.3423C11.1218 13.2413 11.0015 14.59 11.0015 16.001C11.0015 17.412 11.1219 18.7607 11.3423 20.0013H6.83286C6.28161 18.7398 5.99776 17.3777 5.99915 16.001C5.99915 14.578 6.29779 13.2252 6.83286 12.0007H6.83291ZM7.9994 22.0015H11.8074C12.2724 23.5627 12.9097 24.8474 13.6612 25.7253C11.3983 25.1802 9.3962 23.8634 7.9994 22.0015ZM16 24.9997C15.1122 24.9997 14.3125 23.8393 13.7633 21.9994H18.2366C17.6835 23.8412 16.8878 24.9997 15.9999 24.9997H16ZM18.3388 25.7233C19.0904 24.8475 19.7277 23.5588 20.1908 21.9995H23.9988C22.6025 23.8611 20.6011 25.1779 18.3389 25.7233H18.3388Z">
                                </path>
                            </svg></div><span
                            className="ml-3 whitespace-nowrap text-base font-extrabold text-primary sm:ml-0 sm:text-sm sm:font-semibold">English</span>
                        <div
                            className="bg-arrow ml-auto flex size-6 rotate-180 items-center justify-center rounded-lg sm:mr-1.5">
                            <svg className="icon size-4 text-secondary" viewBox="0 0 32 32">
                                <path
                                    d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className="mt-2 h-10 w-full cursor-pointer rounded-lg font-semibold p-0.5"
                        style={{background: 'var(--Sidebar-ModeSwitcher-bg)'}}>
                        <div className="relative flex h-9 w-full">
                            <div className="absolute top-0 h-9 rounded-lg bg-layer6 transition-all ease-out w-1/2"
                                style={{left: '0px'}}></div>
                            <div className="relative h-9 center w-1/2" id="toggle-theme"><svg
                                    className="icon flex-none h-4 w-4 text-primary" viewBox="0 0 32 32">
                                    <path
                                        d="M24.473 19.681c-5.725-0.724-10.216-5.2-10.957-10.856l-0.007-0.064c-0.052-0.428-0.082-0.923-0.082-1.426 0-0.74 0.065-1.466 0.19-2.17l-0.011 0.075c0.008-0.052 0.013-0.112 0.013-0.173 0-0.622-0.505-1.127-1.127-1.127-0.132 0-0.259 0.022-0.377 0.065l0.007-0.003c-4.684 1.861-7.934 6.353-7.934 11.605 0 6.878 5.576 12.454 12.454 12.454 4.777 0 8.926-2.69 11.015-6.637l0.032-0.067c0.076-0.147 0.122-0.321 0.122-0.506 0-0.614-0.498-1.112-1.112-1.112-0.022 0-0.044 0.001-0.066 0.002h0.003c-0.225 0.015-0.488 0.023-0.753 0.023-0.497 0-0.988-0.030-1.47-0.088l0.058 0.006z">
                                    </path>
                                </svg><span className="ml-1 text-primary">Dark</span></div>
                            <div className="relative h-9 center w-1/2"><svg className="icon flex-none h-4 w-4 text-quarterary"
                                    viewBox="0 0 32 32">
                                    <path
                                        d="M10.364 25.256c0.059 0.005 0.116 0.020 0.169 0.047l2.324 1.161c0.231 0.115 0.327 0.401 0.214 0.637-0.026 0.055-0.062 0.103-0.105 0.144l-2.579 2.397c-0.19 0.176-0.484 0.162-0.657-0.033-0.086-0.097-0.129-0.225-0.119-0.355l0.255-3.558c0.019-0.262 0.241-0.46 0.497-0.44zM22.088 25.523c0.026 0.055 0.041 0.113 0.046 0.174l0.255 3.558c0.019 0.262-0.174 0.491-0.43 0.51-0.127 0.009-0.252-0.035-0.346-0.122l-2.579-2.397c-0.19-0.176-0.204-0.478-0.032-0.673 0.040-0.045 0.087-0.081 0.141-0.108l2.324-1.161c0.231-0.115 0.509-0.018 0.622 0.22zM16 8.068c4.621 0 8.367 3.84 8.367 8.576s-3.747 8.575-8.368 8.575c-4.621 0-8.368-3.84-8.368-8.575s3.746-8.576 8.368-8.576h0.001zM26.547 17.309c0.058 0.014 0.113 0.039 0.16 0.073l2.858 2.036c0.211 0.151 0.263 0.447 0.116 0.663-0.073 0.107-0.185 0.179-0.311 0.198l-3.44 0.546c-0.254 0.041-0.491-0.137-0.531-0.398-0.009-0.060-0.007-0.121 0.006-0.18l0.582-2.582c0.058-0.257 0.307-0.416 0.558-0.357l0.001 0.002zM5.94 17.501c0.033 0.050 0.058 0.105 0.071 0.164l0.582 2.582c0.058 0.257-0.098 0.512-0.349 0.572-0.058 0.014-0.117 0.016-0.176 0.006l-3.44-0.546c-0.254-0.041-0.428-0.283-0.388-0.544 0.020-0.129 0.089-0.244 0.194-0.319l2.858-2.036c0.211-0.151 0.502-0.097 0.648 0.119zM27.106 7.828c0.038 0.125 0.023 0.259-0.038 0.373l-1.698 3.114c-0.125 0.23-0.408 0.312-0.632 0.184-0.051-0.030-0.097-0.069-0.134-0.116l-1.627-2.060c-0.161-0.204-0.131-0.504 0.069-0.67 0.046-0.038 0.099-0.066 0.155-0.085l3.325-1.055c0.245-0.078 0.505 0.063 0.582 0.314l-0.001 0.002zM5.477 7.514l3.325 1.055c0.245 0.078 0.383 0.344 0.306 0.596-0.017 0.058-0.046 0.112-0.083 0.159l-1.627 2.060c-0.161 0.204-0.454 0.236-0.654 0.070-0.046-0.038-0.085-0.085-0.114-0.137l-1.698-3.114c-0.125-0.23-0.045-0.52 0.179-0.648 0.111-0.064 0.242-0.078 0.364-0.039l0.001-0.002zM16.173 2.269c0.118 0.048 0.212 0.144 0.259 0.265l1.293 3.313c0.096 0.245-0.021 0.522-0.259 0.62-0.055 0.022-0.113 0.034-0.173 0.034h-2.585c-0.257 0-0.465-0.213-0.465-0.476 0-0.061 0.012-0.121 0.033-0.177l1.293-3.313c0.095-0.245 0.366-0.363 0.604-0.265z">
                                    </path>
                                </svg><span className="ml-1 text-quarterary">Light</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute top-0 h-full cursor-pointer left-full -ml-4 pl-4 select-none pointer-events-none w-[0px] bg-transparent"
            style={{transition: '0.2s'}}>
            <div className="hidden-scroll-bar h-full w-full px-2 py-3 overflow-y-auto select-none opacity-0"
                style={{boxShadow: 'rgba(0, 0, 0, 0.05) 4px 0px 8px 0px', background: 'var(--Sidebar-Unit_bg)'}}><a
                    href="/game/crash"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img crash" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Crash</span>
                </a><a href="/game/limbo"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img limbo" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Limbo</span>
                </a><a href="/game/plinko"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img plinko" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Plinko</span>
                </a><a href="/game/twist"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img twist" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Twist</span>
                </a><a href="/game/classic-dice"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img classicdice" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Classic Dice</span>
                </a><a href="/game/keno"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img keno" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Keno</span>
                </a><a href="/game/hash-dice"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img hashdice" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Hash Dice</span>
                </a><a href="/game/mines"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img mines" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Mines</span>
                </a><a href="/game/tower-legend"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img towerlegend" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Tower Legend</span>
                </a><a href="/game/ultimate-dice"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img ultimatedice" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Ultimate Dice</span>
                </a><a href="/game/cave"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img cave" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Cave Of Plunder</span>
                </a><a href="/game/wheel"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img wheel" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Wheel</span>
                </a><a href="/game/coinflip"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img coinflip" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">CoinFlip</span>
                </a><a href="/game/fast-crash"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img fast_crash" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Fast Crash</span>
                </a><a href="/game/hilo"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img hilo" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Hilo</span>
                </a><a href="/game/ring-of-fortune"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img ringoffortune" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Ring of Fortune</span>
                </a><a href="/game/jade"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img jade" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Jade</span>
                </a><a href="/game/roulette"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img roulette" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Roulette</span>
                </a><a href="/game/wukong-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img wukong" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">WUKONG</span>
                </a><a href="/game/fastparity"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img fastparity" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Fast Parity</span>
                </a><a href="/game/stellar-rush"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img stellar_rush" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Stellar Rush</span>
                </a><a href="/game/symbiote-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Symbiote</span>
                </a><a href="/game/roulette-multiplayer"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img roulettemultiplayer" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Roulette Multiplayer</span>
                </a><a href="/game/video-poker"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img videopoker" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Video Poker</span>
                </a><a href="/game/cursed-clown-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Cursed Clown</span>
                </a><a href="/game/bingo"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Bingo</span>
                </a><a href="/game/oriental-beauties"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img beauties" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Beauties</span>
                </a><a href="/game/sword"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img sword" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Espada salvadora</span>
                </a><a href="/game/deadliest-sea-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img deadliestsea" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Deadliest Sea</span>
                </a><a href="/game/blackjack"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img blackjack" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Blackjack</span>
                </a><a href="/game/sea-of-olympus-1000-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img sea_of_olympus_1000" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Sea of Olympus 1000</span>
                </a><a href="/game/double"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img double" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Double</span>
                </a><a href="/game/gold-of-olympus-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img gold_of_olympus" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Gold of Olympus</span>
                </a><a href="/game/fish-prawn-crab"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Fish Prawn Crab</span>
                </a><a href="/game/starshine-princess-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img starshine_princess" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">StarShine Princess</span>
                </a><a href="/game/arcane-portals-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img arcane_portals" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Misteryosong Portal</span>
                </a><a href="/game/golden-year-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img golden_year" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Golden Year</span>
                </a><a href="/game/sicbo-multiplayer"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Sicbo</span>
                </a><a href="/game/color"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img color_game" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Perya Color Game</span>
                </a><a href="/game/ghost-boo-nanza-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img ghost_boo_nanza" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Ghost Boo-nanza</span>
                </a><a href="/game/dragon-quest-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img dragonquest" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Dragon Quest</span>
                </a><a href="/game/sugar-fiesta-1000-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img sugar_fiesta_1000" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Sugar Fiesta 1000</span>
                </a><a href="/game/candy-fiesta-1000-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img sugar_fiesta_1000" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Candy Fiesta 1000</span>
                </a><a href="/game/wizard-s-academy-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img wizards_academy" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Wizard's Academy</span>
                </a><a href="/game/patti"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img teen_patti" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Patti</span>
                </a><a href="/game/baccarat"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img baccarat" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Baccarat</span>
                </a><a href="/game/samurai-clash-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img samurai_clash" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Samurai Clash</span>
                </a><a href="/game/reel-big-catch-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img reel_big_catch" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Wielki Połów</span>
                </a><a href="/game/baccarat-multiplayer"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img baccaratmultiplayer" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Baccarat Multiplayer</span>
                </a><a href="/game/cyberpunk-xxii-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Cyberpunk XXII</span>
                </a><a href="/game/keno-multiplayer"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img keno" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Keno Multiplayer</span>
                </a><a href="/game/jack-s-crypt-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img jacks_crypt" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Jack's Crypt</span>
                </a><a href="/game/cursed-doll-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img cursed_doll" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Cursed Doll</span>
                </a><a href="/game/john-wild-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img johnwild_default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">John Wild</span>
                </a><a href="/game/bc-poker"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img bc_poker" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">BC Poker</span>
                </a><a href="/game/magical-mine-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img magic_mine" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Magical Mine</span>
                </a><a href="/game/left-4-cash-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img left_4_cash" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Left 4 Cash</span>
                </a><a href="/game/lucky-ranch-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img lucky_ranch" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Lucky Ranch</span>
                </a><a href="/game/dragon-slayer-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img dragonslayer" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Dragon Slayer</span>
                </a><a href="/game/run-away-zombies-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img runaway_zombies" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Run Away! Zombies</span>
                </a><a href="/game/clash-cash-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img clash_cash" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Clash &amp; Cash</span>
                </a><a href="/game/doggy-miner-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img doggyminer" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Doggy Miner</span>
                </a><a href="/game/monster-hunter-by-bc-originals"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img monster_hunter" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Monster Hunter</span>
                </a><a href="/game/red-vs-green"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Red VS Green</span>
                </a><a href="/game/find-the-hole"
                    className="nav-link-item nav-link-item-game flex h-10 w-full items-center overflow-hidden rounded-lg mt-1 inactive"
                    link="">
                    <div className="relative flex-none center size-10">
                        <div className="game_icon_img default" style={{transform: 'scale(0.75)'}}></div>
                    </div><span className="ml-2 whitespace-nowrap font-semibold text-secondary">Find The Hole</span>
                </a></div>
        </div>
        <div className="absolute top-0 h-full cursor-pointer left-full -ml-4 pl-4 select-none pointer-events-none w-[0px] bg-transparent"
            style={{transition: 'width 0.2s', paddingTop: '0px'}}>
            <div className="hidden-scroll-bar h-auto w-full px-2 py-4 overflow-y-auto select-none opacity-0"
                style={{boxShadow: 'rgba(0, 0, 0, 0.05) 4px 0px 8px 0px', background: 'var(--Sidebar-Unit_bg)', borderRadius: '0px 12px 12px 0px'}}>
            </div>
        </div>
    </div>
    
  );
};

export default Sidebar;

import React, { useEffect, useState, useRef } from 'react';
import Api from '../Requests/Api';
import { LogOut, Lock, User } from "lucide-react"; // Icons
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);


    return (
        <div>
            <div className="page-header alpha-layer4 left-0 top-0 w-full fixed z-[99]" style={{ '--tw-bg-opacity': '1' }}>
                <div className="flex size-full items-center overflow-hidden px-4"><img alt="logo" className="h-8 w-auto"
                    src="/assets/logo/logo.png" />
                    <button onClick={() => setShowSignIn(true)}
                        className="button ml-auto h-10 rounded-lg px-4 text-base font-extrabold" type="button">Sign
                        In</button><button className="button button-brand h-10 rounded-lg px-4 text-base min-w-24"
                            type="button">Sign Up</button>
                </div>
            </div>
            <div></div>
            <div className="dialog-root">
                <div className="dialog-list"></div>
            </div>
            <div></div>
            <div className="pop-overlayer" style={{ backgroundColor: 'rgba(16, 18, 18, 0)', visibility: 'hidden' }}>
                <div className="absolute left-0 h-full z-10 pointer-events-auto" style={{ width: '23px' }}></div>
            </div>
            <div></div>
            <div></div>
            <img id="bcgamePixel"
                src="https://metrics.aimetric.net/tracking/segment?key=c5r5bft" alt="" style={{ display: 'none' }} /><img
                id="rtgBcgame"
                src="https://tracking.aimetric.net/pixel/bcgame-default.jpg?ts=1754553600000&amp;hostname=bc.co&amp;pathname=%2F&amp;referrer=https%3A%2F%2Fbc.co%2F&amp;userAgent=Mozilla_5.0__Linux__Android_6.0__Nexus_5_Build_MRA58N__AppleWebKit_537.36__KHTML__like_Gecko__Chrome_138.0.0.0_Mobile_Safari_537.36&amp;language=en-US&amp;timeZone=Asia%2FCalcutta&amp;userId=2d23596f-9eb8-49ea-87c9-4cb47b27ae02"
                alt="" style={{ display: 'none' }} />
            <div id="hcaptcha_container" style={{ display: 'none' }}><iframe aria-hidden="true"
                data-hcaptcha-widget-id="0mwagkxcknjh" data-hcaptcha-response=""
                src="https://newassets.hcaptcha.com/captcha/v1/35d74bd05c00419a145c74d0100baea37ccf26da/static/hcaptcha.html#frame=checkbox-invisible"
                style={{ display: 'none' }}></iframe><textarea id="h-captcha-response-0mwagkxcknjh" name="h-captcha-response"
                    style={{ display: 'none' }}></textarea></div>
            <div style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(215, 215, 215)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px', borderRadius: '4px', left: 'auto', top: '-10000px', zIndex: '-2147483648', position: 'absolute', pointerEvents: 'auto', transition: 'opacity 0.15s ease-out', opacity: '0', visibility: 'hidden' }}
                aria-hidden="true">
                <div style={{ position: 'relative', zIndex: '1' }}><iframe
                    src="https://newassets.hcaptcha.com/captcha/v1/35d74bd05c00419a145c74d0100baea37ccf26da/static/hcaptcha.html#frame=challenge&amp;id=0mwagkxcknjh&amp;host=bc.co&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;andint=off&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=cf0b9a27-82e3-42fb-bfec-562f8045e495&amp;size=invisible&amp;theme=light&amp;origin=https%3A%2F%2Fbc.co"
                    frameborder="0" scrolling="no"
                    allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
                    title="Main content of the hCaptcha challenge"
                    style={{ border: '0px', zIndex: '2000000000', position: 'relative' }}></iframe></div>
                <div
                    style={{ width: '100%', height: '100', position: 'fixed', pointerEvents: 'none', top: '0px', left: '0px', zIndex: '0', backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05' }}>
                </div>
                <div
                    style={{ borderWidth: '11px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: '1', right: '100%' }}>
                    <div
                        style={{ borderWidth: '10px', borderStyle: 'solid', borderColor: 'transparent rgb(255, 255, 255) transparent transparent', position: 'relative', top: '10px', zIndex: '1' }}>
                    </div>
                    <div
                        style={{ borderWidth: '11px', borderStyle: 'solid', borderColor: 'transparent rgb(215, 215, 215) transparent transparent', position: 'relative', top: '-11px', zIndex: '0' }}>
                    </div>
                </div>
            </div>
            {showSignIn && (
                <div class="dialog-root dialog-visible">
                    <div class="dialog-list dialog-l">
                        <div class="dialog-overlayer dialog-l" style={{'--scroll': '100%'}}>
                            <div class="dialog-item dialog-transparent-title w-full account-dialog">
                                <div class="scroll-y dialog-content">
                                    <div class="scroll-container">
                                        <div class=" flex-none">
                                            <div class=" pt-st relative h-60 box-content">
                                                <img alt="top-img" class="w-full overflow-hidden absolute bottom-2 left-0" src="/modules/account2/assets/bg_m-21c0cb9e.png"/>
                                                    <div class="w-full z-10 absolute left-0 bottom-44 flex items-center justify-between p-4 pb-5">
                                                        <img alt="logo" class="w-auto h-8" src="/assets/logo/logo.png"/>
                                                            <button class="button size-8 center bg-white_alpha5 rounded-lg" onClick={() => setShowSignIn(false)} type="button">
                                                                <svg class="icon fill-secondary" viewBox="0 0 32 32">
                                                                    <path d="M6.32321 9.23054L13.0927 16L6.32321 22.7694L9.23051 25.6767L15.9998 18.9074L22.7695 25.6771L25.6768 22.7698L18.9073 16.0004L25.6768 9.23095L22.7695 6.32365L16.0002 13.0929L9.23051 6.32324L6.32321 9.23054Z"></path>
                                                                </svg>
                                                            </button>
                                                    </div>
                                            </div>
                                            <div class="w-full flex-1 px-6 relative z-10">
                                                <p class="text-lg font-extrabold h-5 flex items-center">Sign In</p>
                                                <form>
                                                    <div class="input mt-4 bg-input_darken"><input required="" placeholder="Email / Phone Number"/></div>
                                                    <div class="input pr-2 bg-input_darken mt-3 bg-input_darken">
                                                        <input required="" type="password" placeholder="Password"/>
                                                            <div class="w-8 h-8 center cursor-pointer">
                                                                <svg class="icon w-6 h-6 text-tertiary" viewBox="0 0 32 32">
                                                                    <path fill-rule="evenodd" d="M2.667 16.003c0-2.522 5.968-8.08 13.333-8.08s13.333 5.453 13.333 8.08S23.365 24.077 16 24.077 2.667 18.525 2.667 16.003Zm13.326 5.942H16a5.94 5.94 0 0 0 5.941-5.94v-.008a5.948 5.948 0 1 0-5.948 5.948Zm.63-9.133a1.765 1.765 0 0 0-.274.94v.012A1.768 1.768 0 0 0 19.376 15l-.007-.023a3.195 3.195 0 1 1-3.021-2.159h.27l.005-.007Z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                    </div>
                                                    <div class="flex w-full justify-end"><a replace="true" href="/login/forgot" class="mt-4 font-extrabold text-secondary inactive" link=""><span>Forgot your password?</span></a></div>
                                                    <button submit="true" class="button button-brand w-full mt-6" type="submit"><span>Sign In</span></button>
                                                </form>
                                                <div class="flex flex-wrap items-center mt-6 min-h-6"><span class="mr-2">New to BC.GAME?</span><a replace="true" href="/login/regist" class="font-extrabold text-brand whitespace-normal break-words inactive" link="">Create account</a></div>
                                            </div>
                                            <div class="w-full px-6 pb-5 pt-8">
                                                <div class="w-full h-4 flex items-center">
                                                    <div class="flex-1 h-[1px] bg-third"></div>
                                                    <p class="mx-3 flex-none text-secondary">Log in directly with</p>
                                                    <div class="flex-1 h-[1px] bg-third"></div>
                                                </div>
                                                <button class="button w-full mt-3 -mb-3 h-10 border border-third" type="button">
                                                    <svg class="icon size-5 text-secondary" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94889 9.61874C10.8395 9.61774 11.6934 9.26349 12.3232 8.6337C12.953 8.00391 13.3073 7.15002 13.3083 6.25937V6.15906C13.3083 5.2681 12.9543 4.41363 12.3243 3.78362C11.6943 3.15362 10.8399 2.79968 9.94889 2.79968C9.05793 2.79968 8.20346 3.15362 7.57345 3.78362C6.94345 4.41363 6.58951 5.2681 6.58951 6.15906V6.25937C6.59052 7.15002 6.94477 8.00391 7.57456 8.6337C8.20435 9.26349 9.05823 9.61774 9.94889 9.61874ZM13.6497 17.3455C13.6754 17.4077 13.7063 17.4674 13.742 17.5241H3.40037C3.309 17.5241 3.21889 17.5028 3.13725 17.4617C3.0556 17.4207 2.98469 17.3611 2.93017 17.2878C2.87565 17.2145 2.83904 17.1294 2.82326 17.0394C2.80748 16.9494 2.81296 16.857 2.83928 16.7694L3.27846 15.3091C3.70969 13.8754 4.5914 12.6188 5.79289 11.7255C6.99438 10.8322 8.45171 10.3498 9.94889 10.3498C10.6103 10.3498 11.2639 10.444 11.8911 10.6261C11.8928 10.7443 11.9001 10.8627 11.913 10.9808C11.987 11.6559 12.2435 12.2982 12.6551 12.8384C12.9082 13.1706 13.214 13.4566 13.5587 13.6858V16.8885C13.5587 17.0453 13.5896 17.2006 13.6497 17.3455ZM18.1837 9.21199C18.4312 9.62371 18.5618 10.0951 18.5615 10.5755C18.5613 11.1904 18.3467 11.786 17.9546 12.2598C17.5625 12.7335 17.0175 13.0557 16.4135 13.1708V13.9537C16.4135 13.9757 16.4207 13.9971 16.434 14.0145L17.2632 15.1009C17.2787 15.1214 17.2859 15.147 17.2831 15.1725C17.2803 15.1981 17.2679 15.2216 17.2483 15.2382L16.4932 15.878C16.4828 15.8867 16.4744 15.8975 16.4684 15.9095C16.4623 15.9216 16.4587 15.9348 16.4579 15.9483C16.4571 15.9618 16.459 15.9753 16.4635 15.988C16.468 16.0007 16.4751 16.0124 16.4843 16.0224L17.2557 16.8593C17.2732 16.8783 17.2827 16.9033 17.2822 16.9292C17.2817 16.9551 17.2712 16.9797 17.2529 16.998L16.2028 18.0481C16.184 18.0669 16.1585 18.0775 16.1319 18.0775C16.1054 18.0775 16.0799 18.0669 16.0611 18.0481L14.9723 16.9593C14.963 16.95 14.9556 16.939 14.9506 16.9268C14.9455 16.9147 14.9429 16.9016 14.9429 16.8885V13.0306C14.4964 12.8534 14.1067 12.5578 13.8156 12.1756C13.5245 11.7935 13.343 11.3392 13.2907 10.8617C13.2384 10.3842 13.3172 9.90141 13.5187 9.46531C13.7201 9.0292 14.0367 8.65625 14.4342 8.38654C14.8317 8.11682 15.2952 7.96054 15.7749 7.93449C16.2546 7.90844 16.7323 8.01361 17.1567 8.2387C17.5811 8.46378 17.9362 8.80027 18.1837 9.21199ZM15.4777 10.4419C15.6081 10.529 15.7614 10.5755 15.9183 10.5755C16.0224 10.5755 16.1255 10.555 16.2217 10.5151C16.3179 10.4753 16.4053 10.4169 16.479 10.3432C16.5526 10.2696 16.611 10.1822 16.6509 10.086C16.6907 9.98975 16.7112 9.88663 16.7112 9.78249C16.7112 9.62565 16.6647 9.47233 16.5776 9.34193C16.4904 9.21152 16.3666 9.10988 16.2217 9.04986C16.0768 8.98985 15.9173 8.97414 15.7635 9.00474C15.6097 9.03534 15.4684 9.11087 15.3575 9.22178C15.2466 9.33268 15.1711 9.47398 15.1405 9.62781C15.1099 9.78163 15.1256 9.94108 15.1856 10.086C15.2456 10.2309 15.3473 10.3547 15.4777 10.4419Z"></path>
                                                    </svg>
                                                    <span class="text-primary ml-2 font-extrabold">Sign In with passkey</span>
                                                </button>
                                                <div class="third-group-wrap w-full mt-6 h-11 flex items-center justify-between">
                                                    <button class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary w-5 h-5" viewBox="0 0 32 32">
                                                            <path d="M21.14 10.407c-1.306-1.21-3.084-1.883-4.89-1.856-3.334 0-6.14 2.151-7.168 5.083l-4.223-3.173c2.167-4.168 6.557-6.804 11.391-6.804 3.167-0.027 6.223 1.103 8.529 3.2l-3.64 3.55z"></path>
                                                            <path d="M9.078 18.366c-0.528-1.533-0.528-3.2 0-4.733l-4.223-3.173c-1.806 3.496-1.806 7.611-0 11.080 2.167 4.168 6.557 6.804 11.391 6.804 3.436 0 6.319-1.097 8.429-2.97l0.017 0.013c2.417-2.179 3.806-5.352 3.806-9.090 0-0.834-0.083-1.694-0.222-2.501h-12.030v4.76h6.89c-0.278 1.533-1.194 2.877-2.555 3.738-1.139 0.753-2.612 1.183-4.334 1.183-3.334 0-6.14-2.178-7.168-5.082l-4.217 3.141 4.216-3.168z"></path>
                                                        </svg>
                                                    </button>
                                                    <button class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary size-5" viewBox="0 0 32 32">
                                                            <path d="M18.1236 14.3799L26.2298 5.16797H24.3096L17.268 13.1649L11.6481 5.16797H5.16455L13.6648 17.2619L5.16455 26.9208H7.08479L14.5161 18.474L20.4524 26.9208H26.936M8.0674 6.61816L10.7279 6.58362L24.3081 25.5747H21.3574"></path>
                                                            <path d="M18.1236 14.3799L26.2298 5.16797H24.3096L17.268 13.1649L11.6481 5.16797H5.16455L13.6648 17.2619L5.16455 26.9208H7.08479L14.5161 18.474L20.4524 26.9208H26.936L18.1236 14.3799ZM8.0674 6.61816L10.7279 6.58362L24.3081 25.5747H21.3574L8.0674 6.61816Z" stroke-width="0.5"></path>
                                                        </svg>
                                                    </button>
                                                    <button class="button size-10 rounded-lg border border-solid border-third p-0 relative overflow-hidden" type="button">
                                                        <svg class="icon text-secondary w-5 h-5 pointer-events-none select-none absolute left-2.5 top-2.5" viewBox="0 0 32 32">
                                                            <path d="M3.796 15.259l22.448-10.314c0.85-0.39 1.843 0.010 2.218 0.893 0.134 0.313 0.175 0.66 0.12 0.998l-3.013 18.616c-0.185 1.144-1.227 1.915-2.326 1.723-0.314-0.055-0.611-0.186-0.866-0.383l-7.592-5.849c-0.747-0.575-0.904-1.67-0.351-2.447 0.063-0.089 0.135-0.172 0.214-0.248l7.612-7.264c0.069-0.066 0.073-0.176 0.010-0.248-0.055-0.061-0.143-0.074-0.213-0.030l-11.551 7.44c-0.42 0.269-0.932 0.335-1.402 0.178l-5.244-1.759c-0.354-0.119-0.548-0.514-0.434-0.881 0.059-0.189 0.193-0.345 0.368-0.425l0 0z"></path>
                                                        </svg>
                                                        <iframe class="size-full" scrolling="no" src="https://check.bc-sso.com/api/account/open/telegram/login-iframe" style={{opacity: '0.01', colorScheme: 'light'}}></iframe>
                                                    </button>
                                                    <button id="mm_login" class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary w-5 h-5" viewBox="0 0 32 32">
                                                            <path d="M4.865 4.541c0.022-0.007 0.047-0.003 0.066 0.011l0.204 0.152 7.536 2.81c0.003-0.006 0.005-0.012 0.010-0.017 0.014-0.020 0.036-0.031 0.061-0.031h6.529c0.023 0 0.047 0.012 0.061 0.031 0.003 0.004 0.006 0.009 0.007 0.014l7.515-2.806 0.207-0.153c0.019-0.014 0.044-0.018 0.066-0.011 0.023 0.007 0.041 0.025 0.048 0.047l1.229 3.664c0.004 0.012 0.004 0.025 0.003 0.038l-0.814 3.898 0.476 0.359c0.018 0.014 0.029 0.036 0.029 0.058s-0.011 0.045-0.029 0.059l-0.698 0.532 0.524 0.405c0.018 0.013 0.028 0.033 0.029 0.055s-0.008 0.043-0.023 0.057l-0.707 0.645 0.41 0.295c0.018 0.012 0.028 0.030 0.030 0.051s-0.004 0.041-0.017 0.056l-1.095 1.273 1.689 5.201c0.008 0.022 0.004 0.047-0.010 0.066s-0.037 0.030-0.061 0.030h-0.022l-1.556 5.272-5.484-1.507-1.063 0.869-2.167 1.498h-3.704l-2.157-1.498-0.825-0.674-0.27-0.128c-0.021-0.009-0.034-0.027-0.040-0.048l-5.413 1.488-1.567-5.346 1.661-5.169c-0.014-0.004-0.026-0.012-0.034-0.023l-1.113-1.305c-0.014-0.016-0.019-0.036-0.017-0.056 0.001-0.020 0.012-0.039 0.029-0.051l0.411-0.295-0.708-0.645c-0.015-0.015-0.025-0.035-0.023-0.057 0-0.021 0.011-0.042 0.028-0.055l0.516-0.405-0.698-0.532c-0.019-0.014-0.030-0.036-0.029-0.059 0-0.023 0.011-0.045 0.029-0.059l0.484-0.359-0.812-3.898c-0.003-0.013-0.001-0.026 0.003-0.038l1.219-3.664c0.007-0.022 0.025-0.040 0.048-0.047zM11.317 9.789l-5.924-4.393-1.039 3.127 0.721 3.459c0.005 0.025-0.005 0.050-0.026 0.065l-0.39 0.29 0.613 0.467c0.016 0.012 0.026 0.031 0.026 0.051s-0.008 0.039-0.024 0.051l-0.461 0.362 0.626 0.57c0.015 0.013 0.022 0.032 0.021 0.052 0 0.020-0.011 0.037-0.027 0.049l-0.368 0.266 0.907 1.064 4.404-1.287 2.182-1.844 0.861-0.762-2.101-1.586zM26.020 15.262l0.914-1.063-0.368-0.265c-0.017-0.011-0.027-0.029-0.028-0.049s0.007-0.038 0.022-0.052l0.624-0.569-0.467-0.361c-0.016-0.012-0.026-0.031-0.024-0.051 0-0.020 0.009-0.039 0.026-0.051l0.613-0.467-0.384-0.289c-0.019-0.015-0.029-0.040-0.024-0.065l0.72-3.454-1.046-3.123-8.017 5.946 1.182 1.055 1.86 1.572 4.399 1.286zM14.554 20.22l-1.11-2.355-2.614 1.189c0.006 0.012 0.010 0.026 0.010 0.039l0.002 0.034 3.713 1.092zM14.4 23.065l-0.387 0.266c0.012 0.016 0.017 0.037 0.016 0.058l-0.262 2.313 0.156-0.149h4.122l0.271 0.239-0.284-2.33c-0.020 0.002-0.041-0.003-0.058-0.014l-0.505-0.347h-3.001c-0.028 0-0.053-0.014-0.069-0.035zM21.131 19.050l-2.564-1.166-1.049 2.196 0.004 0.028 3.609-1.057z"></path>
                                                        </svg>
                                                    </button>
                                                    <button id="wc_login" class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary w-5 h-5" viewBox="0 0 32 32">
                                                            <path d="M27.409 14.681l1.571 1.519c0.216 0.206 0.216 0.545 0 0.751l-7.076 6.859c-0.216 0.206-0.566 0.206-0.774 0l-5.022-4.87c-0.051-0.049-0.141-0.049-0.192 0l-5.022 4.87c-0.216 0.206-0.566 0.206-0.774 0l-7.101-6.859c-0.216-0.206-0.216-0.545 0-0.751l1.571-1.519c0.216-0.206 0.566-0.206 0.774 0l5.022 4.87c0.051 0.049 0.142 0.049 0.192 0l5.022-4.87c0.216-0.206 0.566-0.206 0.774 0l5.023 4.87c0.049 0.049 0.141 0.049 0.191 0l5.023-4.87c0.233-0.206 0.582-0.206 0.798 0zM8.243 11.149c4.282-4.152 11.234-4.152 15.516 0l0.516 0.504c0.215 0.206 0.215 0.545 0 0.751l-1.764 1.708c-0.108 0.107-0.282 0.107-0.39 0l-0.707-0.685c-2.994-2.897-7.833-2.897-10.827 0l-0.756 0.735c-0.108 0.107-0.283 0.107-0.392 0l-1.763-1.708c-0.216-0.206-0.216-0.545 0-0.751l0.566-0.553z"></path>
                                                        </svg>
                                                    </button>
                                                    <button class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary w-5 h-5" viewBox="0 0 32 32">
                                                            <path d="M16.003 3.535h-0.006c-6.873 0-12.462 5.591-12.462 12.465-0.004 2.625 0.827 5.184 2.373 7.306l-1.554 4.631 4.791-1.532c2.032 1.348 4.418 2.065 6.858 2.060 6.873 0 12.462-5.592 12.462-12.465s-5.589-12.465-12.462-12.465zM23.256 21.137c-0.301 0.849-1.494 1.553-2.446 1.759-0.651 0.139-1.502 0.249-4.366-0.938-3.663-1.518-6.022-5.24-6.206-5.482-0.176-0.241-1.48-1.971-1.48-3.76s0.908-2.66 1.275-3.034c0.301-0.307 0.798-0.447 1.275-0.447 0.154 0 0.293 0.008 0.418 0.014 0.366 0.016 0.55 0.037 0.791 0.615 0.301 0.725 1.033 2.513 1.12 2.697 0.089 0.184 0.178 0.433 0.053 0.675-0.117 0.249-0.22 0.36-0.404 0.572s-0.358 0.374-0.542 0.601c-0.168 0.198-0.358 0.41-0.146 0.776 0.212 0.358 0.944 1.554 2.023 2.513 1.392 1.239 2.52 1.634 2.923 1.803 0.301 0.125 0.659 0.095 0.879-0.139 0.279-0.301 0.623-0.799 0.974-1.29 0.249-0.352 0.564-0.396 0.894-0.271 0.337 0.117 2.117 0.997 2.484 1.18 0.366 0.184 0.608 0.271 0.697 0.425 0.087 0.154 0.087 0.879-0.213 1.73z"></path>
                                                        </svg>
                                                    </button>
                                                    <button class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary" viewBox="0 0 32 32">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 8.03577C21.078 8.03577 24.6666 10.9831 24.6666 14.606C24.6666 16.0559 24.1116 17.3617 22.9522 18.6484C21.2738 20.6035 17.5205 22.9848 16.6665 23.349C15.8368 23.7029 15.9326 23.1497 15.9706 22.9305C15.9717 22.9242 15.9727 22.9182 15.9737 22.9125C15.9939 22.7908 16.0878 22.2195 16.0878 22.2195C16.1148 22.0128 16.1427 21.6921 16.062 21.4874C15.9723 21.262 15.6177 21.145 15.3572 21.0882C11.5127 20.5739 8.66663 17.8539 8.66663 14.606C8.66663 10.9831 12.2557 8.03577 16.6665 8.03577ZM12.1638 15.8054H13.6886C13.7746 15.8054 13.8441 15.8759 13.8441 15.9629V16.5301C13.8441 16.6171 13.7746 16.6878 13.6886 16.6878H11.4467C11.3605 16.6878 11.2911 16.6157 11.2911 16.5301V13.007C11.2911 12.9201 11.3608 12.8495 11.4469 12.8495H12.0082C12.0941 12.8495 12.1638 12.9201 12.1638 13.007V15.8054ZM15.0411 12.8497H14.48C14.3939 12.8497 14.324 12.9202 14.324 13.0069V16.5306C14.324 16.6174 14.3939 16.6878 14.48 16.6878H15.0411C15.1271 16.6878 15.1969 16.6174 15.1969 16.5306V13.0069C15.1969 12.9202 15.1271 12.8497 15.0411 12.8497ZM18.9036 12.8497H18.3424C18.2564 12.8497 18.1866 12.9202 18.1866 13.0069V15.1003L16.5892 12.9196C16.5597 12.8748 16.5118 12.8526 16.4595 12.8497H15.8985C15.8125 12.8497 15.7425 12.9202 15.7425 13.0069V16.5306C15.7425 16.6174 15.8125 16.6878 15.8985 16.6878H16.4595C16.5457 16.6878 16.6154 16.6174 16.6154 16.5306V14.4378L18.2149 16.6213C18.2436 16.6624 18.2923 16.6878 18.3424 16.6878H18.9036C18.9898 16.6878 19.0594 16.6174 19.0594 16.5306V13.0069C19.0594 12.9202 18.9898 12.8497 18.9036 12.8497ZM22.0025 13.7319C22.0885 13.7319 22.158 13.6615 22.158 13.5744V13.0072C22.158 12.9202 22.0885 12.8495 22.0025 12.8495H19.7608C19.6747 12.8495 19.605 12.9215 19.605 13.007V16.5303C19.605 16.6156 19.6745 16.6878 19.7605 16.6878H22.0025C22.0885 16.6878 22.158 16.6171 22.158 16.5303V15.9629C22.158 15.8761 22.0885 15.8054 22.0025 15.8054H20.4779V15.2098H22.0025C22.0885 15.2098 22.158 15.1393 22.158 15.0523V14.485C22.158 14.3981 22.0885 14.3274 22.0025 14.3274H20.4779V13.7319H22.0025Z"></path>
                                                        </svg>
                                                    </button>
                                                    <button class="button size-10 rounded-lg border border-solid border-third p-0" type="button">
                                                        <svg class="icon text-secondary ml-1" viewBox="0 0 32 32">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87673 18.8551C7.8738 22.1277 10.9168 24.5105 14.5154 24.5105C18.9251 24.5105 22.4999 20.9357 22.4999 16.526C22.4999 12.1163 18.9251 8.5415 14.5154 8.5415C10.2841 8.5415 6.82156 11.8334 6.5481 15.9955C6.54927 15.9975 6.55044 15.9995 6.55161 16.0014C6.55165 16.0007 6.55168 16.0003 6.55168 16.0003L10.8421 17.7686C10.9594 17.6892 11.0847 17.6223 11.2159 17.569C11.5173 17.445 11.8347 17.3893 12.1511 17.4038L14.1048 14.5656L14.104 14.5261H14.1015C14.1015 12.8509 15.4621 11.4885 17.1344 11.4885C18.8099 11.492 20.1673 12.8509 20.1673 14.5261C20.1673 16.2014 18.8074 17.5652 17.1344 17.5652L17.0658 17.564L14.2729 19.5614C14.281 19.8741 14.2228 20.1849 14.1023 20.4736C13.8763 21.0155 13.4444 21.4455 12.9016 21.6692C12.3588 21.8929 11.7493 21.8921 11.2071 21.6668C10.518 21.3798 10.0489 20.783 9.89918 20.1023L6.87673 18.8551ZM11.401 21.1992C12.2711 21.5617 13.2721 21.1508 13.6349 20.2775H13.6329C13.8081 19.8568 13.8091 19.3909 13.6354 18.9685C13.4618 18.5461 13.1374 18.2157 12.7132 18.0403C12.2945 17.8664 11.8469 17.8714 11.4532 18.0211L12.4762 18.444C12.7843 18.5728 13.0287 18.8185 13.1557 19.1274C13.2827 19.4362 13.282 19.7828 13.1536 20.0911C13.0902 20.2436 12.9974 20.3822 12.8804 20.4989C12.7634 20.6156 12.6246 20.708 12.4719 20.771C12.3192 20.834 12.1555 20.8663 11.9903 20.8661C11.8251 20.8658 11.6616 20.833 11.5091 20.7695L10.5217 20.3603C10.702 20.7383 11.0149 21.0369 11.401 21.1992ZM15.7086 15.9562C16.0874 16.3356 16.601 16.5495 17.1371 16.5509C17.6733 16.5496 18.1871 16.3358 18.5659 15.9564C18.9448 15.5769 19.1578 15.0628 19.1582 14.5266C19.1576 13.9905 18.9446 13.4765 18.5658 13.0972C18.1869 12.7179 17.6732 12.5041 17.1371 12.5028C16.6011 12.5043 16.0875 12.7181 15.7088 13.0974C15.3301 13.4767 15.1171 13.9906 15.1166 14.5266C15.117 15.0627 15.3299 15.5768 15.7086 15.9562ZM16.0668 13.449C15.7823 13.7341 15.6227 14.1206 15.6231 14.5234C15.6229 14.9261 15.7823 15.3125 16.0668 15.5976C16.3513 15.8826 16.7374 16.0431 17.1401 16.0437C17.543 16.0433 17.9292 15.8829 18.2139 15.5978C18.4986 15.3127 18.6584 14.9263 18.6582 14.5234C18.6582 13.6838 17.9773 13.0026 17.1401 13.0026C16.7373 13.0032 16.3513 13.1638 16.0668 13.449Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Header;

import {
    k as t,
    O as C,
    v as d,
    G as N,
    n as z,
    Q as A,
    m as L,
    B as P,
    Y as p,
    aj as K,
    r as D,
    E as J,
    y as r,
    H as M,
    a4 as $
} from "./vendor-DYV1gSPf.js";
import {
    k as _,
    e as l,
    b as X,
    u as f,
    a1 as Q,
    a2 as I,
    d as G,
    am as q,
    W as ee,
    T as ae
} from "./common-Byjxyxqw.js";
import {
    t as a,
    m as w,
    n as x,
    o as Z,
    a as le
} from "./index-BSHcnsSF.js";
var ne = d("<div data-anj-image-size=48 data-anj-image-type=basic-small>");
const y = ["stage.bc.game", "bc.game", "bc.ai", "blaze.game", "bc.casino", "hash.game", "bcgame.ph", "bcga.me", "bc.co", "bc.online", "bc.fun", "bc.app", "bcgame.ai", "bcgame.im", "bcgame.top", "bc.me", "rollwithcoco.com", "luckybc888.com", "boost999.com", "gotomoon.app", "bcigra.site", "bcigra.com", "bcstavka.com"],
    B = {
        "bc.game": "1a51fbcd-8303-4c01-bd14-16a27a6ee1c2",
        "bckm.top": "a1bf2528-ad5d-4d6c-9159-015b2e3823e3",
        "blaze.game": "a589a7d3-d549-4ec1-bda0-20eebdce359f",
        "cocobeast.com": "64f72f60-bcac-47c5-9452-7f248d3495ff",
        "fastrun100.top": "5797d186-6f5b-44ab-aaed-a11e6d838d60",
        "greenmoon.top": "f6fce074-5370-456f-84f1-ecdaf9457e30",
        "winnerinlife.top": "8c7f24d4-356e-46be-bd48-e5649d8e9c28",
        "redgreenyellow.top": "299b4b2f-46c6-44b0-9402-8f0ca9dda2e8",
        "keepflying.top": "f4751991-8d59-4f87-8263-22ef04076b88",
        "hash.game": "603a4528-1575-4128-8d8c-ce17228fe50d",
        "bc.fun": "281c7f31-0c4b-42d1-9191-eb9c5c3025fc",
        "bcgame.lu": "488787bb-14ab-45fe-8c07-75c5b8331959",
        "bcgame.nz": "4ed2c309-ff09-45b5-8424-47f4d5580fa2",
        "bcgame.sk": "3813ed7c-a143-4e6f-97ad-ddac10f207ac",
        "bcgame.st": "c625f889-fe87-440e-a59b-32a24f347062",
        "bcgame.top": "1b18c6a5-0d61-4369-abb8-904a3e9d1bf9",
        "bc.poker": "8408fd4f-8520-4dbb-be49-56a44d744fef"
    },
    v = () => {
        const e = B[l.host] || B["bc.game"];
        return C(() => {
            (async () => f.loadScript(`https://${e}.snippet.anjouangaming.org/anj-seal.js`).then(() => {
                try {
                    const m = `${e}`.replace(/-/g, "_");
                    window[`anj_${m}`].init()
                } catch (m) {
                    console.error(m)
                }
            }))()
        }), (() => {
            var n = ne();
            return N(n, "id", `anj-${e}`), N(n, "data-anj-seal-id", e), n
        })()
    },
    c = {
        bc: () => ({
            icon: "",
            iconRender: () => t(v, {}),
            label: "",
            announcements: [a("__ENV_HOST__ is operated by Twocent Technology Limited, a limited liability company registered in Belize with company registration number 41939, with registered address at Sea Urchin Street #2, San Pedro, Ambergris Caye, Belize. __ENV_HOST__ is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-202410011-FI1."), a("__ENV_HOST__ has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.")]
        }),
        bcng: () => ({
            icon: x().bcbet,
            licenseLink: "https://nlrc-gov.ng/sports-betting-permit/",
            label: "",
            announcements: [a("__ENV_HOST__ is operated by Blockdance Africa Limited, company registered address: 22 Kumasi Street, Wuse 2, Abuja, Amac, FCT, Nigeria."), a("__ENV_HOST__ is licensed and authorized by the Government of Nigeria's National Lottery Regulatory Commission to operate BCBET.NG under a National Sports Betting Permit no. 2005793, issued on 1st December 2023 and valid until 31st July 2028.")]
        }),
        license87: () => ({
            icon: "",
            label: "",
            announcements: []
        }),
        bckm: () => ({
            icon: "",
            iconRender: () => t(v, {}),
            label: "",
            announcements: [a("__ENV_HOST__ is operated by Twocent Technology Limited, a limited liability company registered in Belize with company registration number 000041939, with registered address at Sea Urchin Street, San Pedro, Ambergris Caye, Belize. __ENV_HOST__ is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-202410011-FI1. __ENV_HOST__ has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.")]
        }),
        bcke: () => ({
            icon: x().bclb,
            label: "BCLB",
            announcements: [a("This platform is only for people over the age of 18 years. Betting can be addictive, please bet responsibly. __ENV_HOST__ is a trading name of Blockdance Africa Limited, a company registered under the laws of Kenya. The provider of this website is licensed by BCLB (Betting Control and Licensing Board of Kenya) under the Betting, Lotteries and Gaming Act, Cap 131, Laws of Kenya under License number: 0000573. All rights reserved.")]
        }),
        esportsbr: () => ({
            icon: "",
            label: "",
            announcements: [{
                html: 'Ao acessar, continuar a utilizar ou a navegar neste site, você aceita que utilizemos certos cookies de navegador necessários com o objetivo de melhorar a sua experiência como usuário. A BCSports Play Studio apenas utiliza cookies que melhoram a sua experiência e não interferem em sua privacidade. Por favor, consulte a nossa Política de Cookies para mais informações sobre a forma como utilizamos cookies e como pode desativar ou gerenciar os mesmos, caso queira. Este site está protegido por reCAPTCHA e a <a class="text-brand underline cursor-pointer" href="/help/privacy">Política de Privacidade</a> e os <a class="text-brand underline cursor-pointer" href="/help/terms-service">Termos e Condições</a> são aplicados.'
            }, "DPO: privacidade@bcsports.com"]
        }),
        bcall: () => ({
            icon: "",
            label: "",
            licenseLink: "",
            announcements: []
        }),
        bcmx: () => ({
            icon: "",
            label: "",
            licenseLink: "",
            announcements: [a("__ENV_HOST__ is operated in Mexico by PRODUCCIONES MOVILES S.A DE C.V, holder of permit DGAJS/SCEVF/P-06/2005-Ter in union of UNOCAPALI LA PAZ OPERADORA S.A DE C.V. in accordance with offices DGJS/1580/2021 and DGJS/DCRCA/2921/2021."), a("__ENV_HOST__ is managed by PUBLIPLAY MEXICO, S.A. of C.V. (reg no.: N-2024037717), a company registered in Mexico City, with address, Calle 39 Poniente No. 3515, Piso 5, Oficina 01, Colonia Las Ánimas, C.P. 72400, Puebla, Puebla, México.")]
        })
    },
    oe = () => X.darken ? w.logo87Footer : w.logo87FooterLight,
    V = () => X.darken ? _.assets(l.inActive ? "/logo/logo_festival.png" : "/logo/logo.png") : _.assets(l.inActive ? "/logo/logo_w_festival.png" : "/logo/logo_w.png"),
    R = () => {
        const {
            isUsHost: e
        } = f.getHostType(l.host);
        return e ? ["A Multi-Award-Winning Social Casino for Americans BCGAME.US proudly serves players across the United States, offering an engaging and entertaining social casino experience. With a player-first approach, we prioritize our American community, ensuring a fun and immersive environment designed for endless enjoyment.", "No purchase is necessary to enter or win sweepstakes on BCGAME.US. By accessing and using BCGAME.US, you confirm that you are in the United States and agree to be legally bound by our Terms of Service."] : location.pathname === "/events/mining/twitter" ? [a("The ultimate crypto gaming destination, trusted by millions worldwide. We bring bold entertainment, cutting-edge experiences, and a thriving community together for non-stop thrills. Play, win, and stay untamed."), a("Your use of and access to __ENV_HOST__ signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy"), a("Crypto trading is not gaming by definition, therefore it is not covered by our gaming license.")] : [a("The ultimate crypto gaming destination, trusted by millions worldwide. We bring bold entertainment, cutting-edge experiences, and a thriving community together for non-stop thrills. Play, win, and stay untamed."), a("Your use of and access to __ENV_HOST__ signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy"), a("Crypto trading is not gambling by definition, therefore it is not covered by our gaming license.")]
    },
    T = () => `1BTC=${Q.printCurrency(new I(1),"BTC",{target:G.setting.enableLocaleCurrency?G.setting.localeCurrencyName:"USDFIAT"})}`,
    b = e => `${a("Copyright")} ©${l.serverTime.getFullYear()}
    ${e}
    ${a("ALL RIGHTS RESERVED")}.  
    `,
    j = {
        esportsbr: {
            license: c.esportsbr,
            logo: V,
            brandAnnouncements: () => [a("__ENV_HOST__ is a community-based casino that offers their players the best online casino experience possible!")],
            copyright: () => "COPYRIGHT ©2025 BCSports Play Studio - TODOS OS DIREITOS RESERVADOS."
        },
        bcall: {
            license: c.bcall,
            logo: V,
            brandAnnouncements: R,
            copyright: () => b(y.includes(l.host) ? "BLOCKDANCE B.V." : l.host.toUpperCase()) + T()
        },
        bc: {
            license: c.bc,
            logo: V,
            brandAnnouncements: R,
            copyright: () => b("Twocent Technology Limited") + T()
        },
        bcng: {
            license: c.bcng,
            logo: V,
            brandAnnouncements: () => [a("Your use of and access to __ENV_HOST__ signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy")],
            copyright: () => b("BlockDance Africa Limited")
        },
        bcke: {
            license: c.bcke,
            logo: V,
            brandAnnouncements: () => [a("__ENV_HOST__ is a community-based casino that offers their players the best online casino experience possible!")],
            copyright: () => b(l.host.toUpperCase()) + T()
        },
        bckm: {
            license: c.bckm,
            logo: V,
            brandAnnouncements: R,
            copyright: () => b("Twocent Technologies Limited") + T()
        },
        bcmx: {
            license: c.bcmx,
            logo: V,
            brandAnnouncements: R,
            copyright: () => b(y.includes(l.host) ? "BLOCKDANCE B.V." : l.host.toUpperCase()) + T()
        },
        87: {
            logo: oe,
            brandAnnouncements: () => [a("__ENV_HOST__ is a multi-award winning crypto casino. With a player-centric approach, __ENV_HOST__ is able to satisfy millions of gamblers across the globe.87.com has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience.")],
            license: c.license87,
            copyright: () => b("") + T()
        }
    },
    te = {
        "bc.ai": "ZXlKcGRpSTZJbGhTZUZsT1NHTk5hV2QwYjBSVlkzaHZTVVpTVDJjOVBTSXNJblpoYkhWbElqb2ljU3RaTVZsU00waHJia0ZSVUhoaFlqaG1hMUV3WnowOUlpd2liV0ZqSWpvaU16ZGpOVEk0T0dGak1XRmpaREpqWXpObU56ZGxZalV6TmpZd1lXWXpOVFkxWVRNNU9ERmhZelE0WVdRMlpXTTROMk5tTjJJM1lURXpPVFZsTURrNFlpSXNJblJoWnlJNklpSjk=",
        "blaze.game": "ZXlKcGRpSTZJa0k1Y2xsTk1tUnBia3BOVkRKek5qVkZTSFZqWmxFOVBTSXNJblpoYkhWbElqb2lkWEZ6VWxGcVkzaEJNVEJxWjFaaFZ6aFVjbUZKZHowOUlpd2liV0ZqSWpvaU9UYzRZelkzT0Rrd1pXRTFaREZtTXpZeE1EZGxOemhpTUdNeE1UUTJabUppWW1NME5EQXhZMlkyWWpBM09USmtNemRrTW1Wa1l6azVZamd5WmpKbU15SXNJblJoWnlJNklpSjk=",
        "bc.casino": "ZXlKcGRpSTZJa2x1ZEdjMVFuUTFVRzF4VERWUWJYRXpXakZaU0VFOVBTSXNJblpoYkhWbElqb2llV3BKZFhsTlRtTkJXbkZoUWpGUE9IWnZha3hpUVQwOUlpd2liV0ZqSWpvaVltVTNNVEZtTjJRek1qVXhOemt6WldVeFpHWXlNVGxtTURVM1pqSTVNemd3WldGbFpUSmtZamszTWpGa01tSTJORFU0WWpNME9EYzRNMk0zTlRJd05DSXNJblJoWnlJNklpSjk=",
        "hash.game": "ZXlKcGRpSTZJa0p0V213cmRFRlFWVkJRVkhsalkyWkZVVU42TDBFOVBTSXNJblpoYkhWbElqb2lVVlZ3YWl0d1MzQjJUMjVYUjB4Sk9FNUhWSEpwUVQwOUlpd2liV0ZqSWpvaVlqbGlOV0k0WmpBMU9XSmhObUZqTkdZeU1qVmpaR1EyWlRNM09EVXhOV0poT1RoaVkyRTVZbVE0TUdaall6STFOakZsTmpGaE1EbGhNRE5oWVdJd1lpSXNJblJoWnlJNklpSjk=",
        "bcgame.ph": "ZXlKcGRpSTZJbEJHYUZOalFpczFWVEkwTDBSR01saHBSakpXWlVFOVBTSXNJblpoYkhWbElqb2lVbGw0SzA5alZqTnlUMGhwYW5CTWJFUm1RMUpqVVQwOUlpd2liV0ZqSWpvaU9UUmlaRGRrT1RSak1XUm1NbU14WmpFMk5UTTVaakJtTmprMk1qQmhObUV3TldRNVpEa3lObUptT0RFelpHWmtabUprTWpNMU9HUTFZekkyWmpSaFlpSXNJblJoWnlJNklpSjk=",
        "bcga.me": "ZXlKcGRpSTZJbmRSY2xGYVozRnpUaTg1WkhkSVRXbFlOakZaVmtFOVBTSXNJblpoYkhWbElqb2lSVWgxSzI1dWVFOWFhV2cxVFdsRlNXSlNlbWg1ZHowOUlpd2liV0ZqSWpvaVpXWmhNbVppTW1JMFltVmlaVEEyTldabVlqUXdaV1F5WkdVNU5XTTFNV0l3Wm1GalpUazFOR000WXpjMlpEbGhaV05rWVRjek5XUXdOVEUxWm1ZM015SXNJblJoWnlJNklpSjk=",
        "bc.co": "ZXlKcGRpSTZJaTg1VDJzd1NVd3dTR1pNYkdaS01UWlpOWE5JTTJjOVBTSXNJblpoYkhWbElqb2lZMmh0WTA5dVYySm5OMlZVTWpWaFVsYzBXbTFYUVQwOUlpd2liV0ZqSWpvaU1EVmtNVGhoWWpnMU9EVXdNR0l4TmpFNFkyUXlaVEUwWW1ZMFlUUmxNRE5qTXpRd1pEQTVaakF5WW1GaVpUUm1OakEyTTJGbU1UZzFZemt6TlRVd09DSXNJblJoWnlJNklpSjk=",
        "boost999.com": "ZXlKcGRpSTZJbEV5TkVaMmNGbGpObEpNWjFSMk1sSjNRVlpUYUVFOVBTSXNJblpoYkhWbElqb2lVRWhJV21ZdlZrVk1PV05NUjBKMk1sVjRZVGxPWnowOUlpd2liV0ZqSWpvaVptRTNNR1UzTkdJeVpHVXpZalE0TURBME4ySmtOekkxTW1NMFlqRXpObU13WW1VNE5UZzJObVk1TW1VMU1XRmtZMlU0TWpoaE9XWm1abVk0WW1WaE55SXNJblJoWnlJNklpSjk=",
        "gotomoon.app": "ZXlKcGRpSTZJall6TTAxcldGVlNaRVJUU1ZVMlNpOHZaVlprYkdjOVBTSXNJblpoYkhWbElqb2lhSFphZEdNdlVuSTFMMlEwVWxKS1dtTkVVMGxVUVQwOUlpd2liV0ZqSWpvaU16SmhZamxoTURsa09UVXpaV1EzT1dSbFpEVmpPR05qT0RSaU1tTXhZek0zWWpjek1qazNOalZpTUdVMVpETTBOR1psWlRGak5UazBNVFUwTnpBNE55SXNJblJoWnlJNklpSjk=",
        "bcigra.site": "ZXlKcGRpSTZJbTlLVnpCME56STNWVWhOY1c5aldFWnBOVFpSTlVFOVBTSXNJblpoYkhWbElqb2lTWFZqVm5oeU5URTNXbWxEYURKYVRucGFiM0ExUVQwOUlpd2liV0ZqSWpvaU16ZGlaRGcxTUdaaE5tTTNaamRoTjJZM01qWXhOMlJqTUdNeU1qa3hZbU0wTUdRME0yWmpNalJsTVRKaVpqRXlZVE0wTjJRd1pqQTRaR0UxTmpreVpTSXNJblJoWnlJNklpSjk=",
        "bcigra.in": "ZXlKcGRpSTZJbE0zVWk5RFUzSk5UMFI0VlRFdmVGUlNTWEl5UmxFOVBTSXNJblpoYkhWbElqb2lWalJYVmtaaU1WaFJXVlV5UW5sWk4xRTJSVWxXUVQwOUlpd2liV0ZqSWpvaU9Ua3hZVGcwTkRNMVptWmpNMkpoTmpSallURXhPR0V5TkRNMU1HWTFNemMzTURsbU1XUmxNakZrTUdWalpEaGlOMlk1TkRJNE9URmxaalpsTldJM1pDSXNJblJoWnlJNklpSjk=",
        "bcstavka.game": "ZXlKcGRpSTZJbk0xUVVGTU1EQk5hMDlZZEdWTWNucHpRWGx0WlZFOVBTSXNJblpoYkhWbElqb2lUblJIUWtsRmVUUlBTbkJsVlV4RFlXWm5RM2t6UVQwOUlpd2liV0ZqSWpvaU4yVTJNVFZoTURCbU9HVm1OamRqTkRnM05XVmlPVFJpTmprd05UZGpPV0l5TkdReE16STJaR015Wm1GaVlXUXpORGd5T0daalpqUmtObVk1T0RRMlppSXNJblJoWnlJNklpSjk=",
        "bcame.ai": "ZXlKcGRpSTZJbXcyYVhVdmJERk9kamRKUkRGVEwyUk1PREp6Vm1jOVBTSXNJblpoYkhWbElqb2lRMVJhYjFSNFMyaDZOMk5xTUc0NU9UTmtVa0ZhWnowOUlpd2liV0ZqSWpvaVpXWTJPVGc0WkdFellXRTNZMlppWmpGbU5ERXpObUkzWVRFMlpUbGhaamt3TWprNVptVmpNVE0yTWpZeU9UbGhOVGc1WkdFME9XWXhZems0WlRsalpTSXNJblJoWnlJNklpSjk=",
        "bcigra.com": "ZXlKcGRpSTZJbWRsZDFwNFNFMHhTVUY2UkdwMVVTdHNZMGxRZEZFOVBTSXNJblpoYkhWbElqb2lNbU0zU201clJVRkVZbWgyV1dsS1pFUnRXbk42VVQwOUlpd2liV0ZqSWpvaVpEZGpObUZrWldFek5XTXhaV0U0WldVeE9XVXpOR1JtTm1Jd1pEaG1aR0poWXpFMVpUQTFZamsyTURRME5tRm1aRGt5WXpVeU9XVTRabVl5TW1FeE1pSXNJblJoWnlJNklpSjk=",
        "bcstavka.com": "ZXlKcGRpSTZJblZLVVM5WldWSnBRMWRvUVhkVVdUVXlkMVV4Ym5jOVBTSXNJblpoYkhWbElqb2lkMjVZYjBwaGFsWjBlRkU0TlRneVdFbE9NR2hJUVQwOUlpd2liV0ZqSWpvaU5HRmtOREUyWkRFeU1EWXlaR0l5WW1ZNU1UUmlOemd5WVRVNU1HSmlNVEExWmpOallqUXdNemN3TldJek56WmpabUZpWWpsbVltVmpaVGxrWmpGak9DSXNJblJoWnlJNklpSjk=",
        "bc.online": "ZXlKcGRpSTZJbGx6YkVOSWRsWmFZbGw0V1ZKVU1FNWFUVXNyTVhjOVBTSXNJblpoYkhWbElqb2lUblpUYjFoelRpdHpXV3MxVjBsRmExVjJWMGxxZHowOUlpd2liV0ZqSWpvaU5qRTFNakpoWkdNeE5EbGtaamswTkdJNVpETXdZemMxTURFNVpqVXpNV1E1WXpCaE5qSmxZMkV4WXpWaFpqZGhaREl3WXpFNE9URTNNekl4TkRNMk5DSXNJblJoWnlJNklpSjk=",
        "bc.game": "ZXlKcGRpSTZJbFY1ZUZkWU5FbDRURFJuWkVvMWVGaGpaR2RMUTBFOVBTSXNJblpoYkhWbElqb2lhVVZDTm10RlpHTkxSelY2U21oSVFVaE5kMFJ5VVQwOUlpd2liV0ZqSWpvaVptTXdPVEJoTTJVeU5HWTVOREZoWXpWbE56RTBabUZsTUdOaU5qVXpOemd3WTJVMU5XTXpNVE01TTJNNU9HSXlNREE1WWpFNU1UVmpOamhsT0dabFpTSXNJblJoWnlJNklpSjk=",
        "bc.fun": "ZXlKcGRpSTZJalZPZGk5S2NTdDJhM1pXY21aclNrNTBOMEZLVWtFOVBTSXNJblpoYkhWbElqb2lTM1JaTkRaT1ozRTVZMnRTSzA0MU1uZDFTRXBKWnowOUlpd2liV0ZqSWpvaVlXRTFZelpsWVRJMllXWTNPR1EyTjJFNU16UmtNV00xTnpJNFpHVXdOekJrTXpCaVlUZ3haRFkzWXpreE4yUmtZalV5TXprMFlUVmpNakF4TUdJMFlTSXNJblJoWnlJNklpSjk=",
        "bc.app": "ZXlKcGRpSTZJazVWYzNSM1JHRTJhaTkxUzJRdlNEWnFiV3Q1VldjOVBTSXNJblpoYkhWbElqb2lTblZRWkhWUlIwMW1ha1ExVEhoaFRtVk5ZWGRWVVQwOUlpd2liV0ZqSWpvaVpUY3lNRE5sTWpGbVpEYzJORGRtTlRZMlpHRm1Zek0zWldRellqSTFOMkV5TVRZMFpHVTFOekl4WlRWaVpUWXdPVEExWWprM05UaGtZakZtTkRVeVl5SXNJblJoWnlJNklpSjk=",
        "bcgame.ai": "ZXlKcGRpSTZJak40VW5VMlVFVnhiSGxZTjAxcVdYYzRSV2xXVFVFOVBTSXNJblpoYkhWbElqb2ljMk4xWldSRFpsVklUVkZ5WkdJMlFXUm5USEUyVVQwOUlpd2liV0ZqSWpvaU9ERTFZekV4WVdRek5UTXpNVEprT0dVeU5tVTBabUUwTkRGaE5UVmhOakJrWWpFMlptUXhOelJpTmprell6QTNNVEl5TkdWbE5UZG1aRFpsTlRneFppSXNJblJoWnlJNklpSjk=",
        "bcgame.im": "ZXlKcGRpSTZJbTl2VG1sVmNVMTRRa3N2U0VWcVQxVnRibUpwY1VFOVBTSXNJblpoYkhWbElqb2lXV3BuWmtFMGJrbExUSG9yYnpKT1JEaEdkM1ptZHowOUlpd2liV0ZqSWpvaU1HUTVNRFkyTXpCbU16TXpNV0ptWW1FMk5qTTROMlZqWVdabU56QmtaRGRqWldRNU9HWmhNamN4TURZeE5qVmpaREE0TURCbU5qbGxabU01TmpCa015SXNJblJoWnlJNklpSjk=",
        "bcgame.top": "ZXlKcGRpSTZJbUV3WVc1TVJUQm9jSE5MVUZCUlJuUXlPRXhsTVVFOVBTSXNJblpoYkhWbElqb2laMk4wV2xocVYyWk1hVTF0UlVVdlVISldPSGN3VVQwOUlpd2liV0ZqSWpvaU16SXdOakEzWVRFNE16UmlaVEV6WXprMVpXTTVZMkV4WW1NMVpqRmtOMkV4TnpFeE4yWTNPVGhsT1RNd1pEWXpNRE01TlRsbFpURmxNVEpsTldRM01DSXNJblJoWnlJNklpSjk=",
        "bc.me": "ZXlKcGRpSTZJalJNY2pZeGFsWklTbk5KV21WMk1FOXpkblJPVUZFOVBTSXNJblpoYkhWbElqb2libFl6VFd4UGJFeFNNRVV5UkRaTlZUUjBlbkJTVVQwOUlpd2liV0ZqSWpvaU16YzRPR1EzTURnMFpUUmtaRGxpTnpJNE5XRTJNMlkwWkRVMk1USXlabUkzTWpBM01HRTBOVGhrWmpOaVpEQXdOR1ExWWpsbE9XUmxZemMwWmpBM1pDSXNJblJoWnlJNklpSjk=",
        "rollwithcoco.com": "ZXlKcGRpSTZJalpHY0Rob04zVnhSV1ZaT1ROWEszaGlSa3hCT1djOVBTSXNJblpoYkhWbElqb2lVSEJ1Y1hGYVNuaG5TMVYxUjBWcVRGVTFVMlo2U3paWFZqVTJWVk5xYVdkTU4zZHpkV3RrYlhVd1JUMGlMQ0p0WVdNaU9pSmtNakF3TkRJNFkyWmhNakV4Tm1VME5HTmhOVEUwTjJFMlpHWm1aRFEzTTJZNU9USTRaRFpsTkRaallXVmtObVF6WkROa01tRmxZVEkxTmpjMFlXVTBJaXdpZEdGbklqb2lJbjA9",
        "luckybc888.com": "ZXlKcGRpSTZJbVZyZVVwTFlVa3JNRGN5VmxsU1VWSnhNeXN6TDJjOVBTSXNJblpoYkhWbElqb2lVbTVKV0RSVlNVMURNR1poYVRocE5qYzJiMHR1ZHowOUlpd2liV0ZqSWpvaU5HSTVNV0pqWVRBNFltTm1NR1JqTUdRek56TTNOVEl3TWprMVpHRTVOakU1WVRNM05tRmxaR1F5TURRME1tSTRZVFExWm1VMk1HRTRaVEkxTmprMVlTSXNJblJoWnlJNklpSjk="
    },
    h = Object.assign({}, f.getHostType(l.host), {
        isTokenHost: Object.keys(te).includes(l.host) || l.isDevHost || l.isDev
    }),
    se = {
        "bcsports.game": "support@bcsports.com",
        "bcbet.ng": "feedback@bcgame.ke",
        "bcgame.ke": "feedback@bcgame.ke",
        "bzjogos.com": "support@bzjogos.com",
        "cocoforyou.top": "support@bzjogos.com"
    },
    re = {
        "bcsports.game": "+55 11 96389-0808"
    },
    ie = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i,
    ge = e => ie.test(e),
    g = (e, n) => `<${n}>${e}</${n}>`,
    ce = e => {
        function n(i) {
            return l.langs[i] ? .[1] ? ? i
        }
        return Object.keys(Z).find(i => i.indexOf(n(e)) >= 0) || Object.keys(Z).find(i => i.indexOf(n("en")) >= 0)
    },
    pe = {
        feedbackBlock: {
            load: async () => h.isUsHost ? [g(a("Social Crypto Casinos"), "h2"), g(a("It is safe to say that these platforms have gained significant popularity since they entered the market. There’s no shortage of options, and now halfway through the 2020's, there are hundreds to choose from — it's just a matter of personal preference."), "p"), g(a("Players are always looking for something new to enhance the gaming experience, making it more enjoyable and accessible. Because there is No Purchase Necessary, these platforms allow players to focus on the excitement of the games themselves, bringing entertainment to the forefront."), "p")].join("") : h.isKenyaHost ? [g(a("Help Us Improve Your Experience"), "h2"), g(a("If you are experiencing any issues or have any feedback for us, please leave your message here, and our team will work on addressing it."), "p")].join("") : (await Z[ce(X.lang)]()).replace(/__BC_HOST__/g, n => l.host),
            meta: {
                showMore: !h.isKenyaHost && !h.isNgHost && !h.isUsHost,
                feedbackEmail: se[l.host] ? ? l.FEEDBACK,
                phone: re[l.host] ? ? ""
            }
        },
        linksBlock: {
            meta: {
                announcementHost: y
            }
        },
        copyrightBlock: {
            load: () => {
                const e = q.license;
                return j[e] ? ? j.bcall
            }
        }
    };
var Ve = d("<img class=h-12>"),
    be = d('<a target=_blank rel="noopener noreferrer"href=https://cwallet.com/ class=ml-1>Cwallet'),
    S = d("<p>"),
    de = d('<span class="solid mt-8 text-center border-t border-third pb-2 pt-8">'),
    me = d('<div class="flex flex-col justify-center font-semibold text-secondary max-w-300 pt-8 text-xs"><div class="grid px-4 grid-cols-2 grid-rows-2 gap-x-8 gap-y-3"><div class="flex items-center min-h-15"><img class=h-8 alt></div><div class="flex min-h-15"></div><div class="flex flex-col gap-y-4"></div><div>'),
    Te = d('<div class="flex flex-col gap-y-2">');
const ke = e => !!(typeof e == "object" && e && "html" in e),
    Re = () => {
        const [e] = z(() => q.license, pe.copyrightBlock.load), n = A(), m = L(() => ["/wallet/swap"].includes(n.pathname)), i = P(() => t(p, {
            get when() {
                return e() ? .license()
            },
            children: o => t(p, {
                get when() {
                    return o().iconRender
                },
                get fallback() {
                    return t(p, {
                        get when() {
                            return o().icon || o().label
                        },
                        get children() {
                            return t(K, D(() => o().licenseLink ? {
                                href: o().licenseLink,
                                target: "_blank"
                            } : {}, {
                                class: "flex flex-col items-center h-auto min-w-[3.75rem] flex-shrink-0 gap-y-1",
                                get component() {
                                    return o().licenseLink ? ee : "div"
                                },
                                get children() {
                                    return [t(p, {
                                        get when() {
                                            return o().icon
                                        },
                                        get children() {
                                            var k = Ve();
                                            return J(() => N(k, "src", o().icon)), k
                                        }
                                    }), t(p, {
                                        get when() {
                                            return o().label
                                        },
                                        get children() {
                                            return o().label
                                        }
                                    })]
                                }
                            }))
                        }
                    })
                },
                get children() {
                    return o().iconRender()
                }
            })
        }));
        return (() => {
            var o = me(),
                k = o.firstChild,
                F = k.firstChild,
                Y = F.firstChild,
                O = F.nextSibling,
                u = O.nextSibling,
                H = u.nextSibling;
            return k.style.setProperty("grid-template-rows", "1fr"), r(O, i), r(u, t(M, {
                get each() {
                    return e() ? .brandAnnouncements()
                },
                children: s => (() => {
                    var U = S();
                    return r(U, s), U
                })()
            }), null), r(u, t(p, {
                get when() {
                    return m()
                },
                get children() {
                    var s = S();
                    return r(s, t(le, {
                        i18nKey: "trans.mainpage.footer.desc.new3",
                        get children() {
                            return ["__ENV_SITE__.swap service is offered by our partner", be(), "."]
                        }
                    })), s
                }
            }), null), r(H, t(p, {
                get when() {
                    return e() ? .license()
                },
                children: s => (() => {
                    var U = Te();
                    return r(U, t(M, {
                        get each() {
                            return s().announcements
                        },
                        children: E => t(ae, {
                            get when() {
                                return ke(E)
                            },
                            get fallback() {
                                return (() => {
                                    var W = S();
                                    return r(W, E), W
                                })()
                            },
                            get children() {
                                var W = S();
                                return J(() => W.innerHTML = E.html), W
                            }
                        })
                    })), U
                })()
            })), r(o, t($, {
                fallback: s => (console.error(s, "error"), null),
                get children() {
                    var s = de();
                    return r(s, () => e() ? .copyright()), s
                }
            }), null), J(() => N(Y, "src", e() ? .logo())), o
        })()
    };
export {
    Re as C, pe as H, h, ge as i
};
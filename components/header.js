import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

const navBarCategories = [
    {
        name: ["企業", "貸款"],
        path: "/enterprise"
    }, {
        name: ["房屋、", "土地貸款"],
        path: "/real_estate"
    }, {
        name: ["汽機車", "貸款"],
        path: "/vehicle"
    }, {
        name: ["營業車", "貸款"],
        path: "/company_car"
    }, {
        name: ["藝術品、", "股權融資"],
        path: "/art_and_stock"
    }, {
        name: ["公司現金", "增資"],
        path: "/cash"
    }, {
        name: ["負責人", "債務整合"],
        path: "/debt"
    }
]

export default function Header() {
    const [hideMenu, setHideMenu] = useState(true)
    // const window_width = useRef(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleWindowResize = event => {
            // window_width.current = window.innerWidth;
            setWindowWidth(window.innerWidth);
        }
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [])

    return (
        <header className="">
            <div
                className={"bg-custom-1 flex flex-col md:flex-row justify-end text-white text-md md:text-2xl py-3 px-5 md:space-x-2 space-x-0"}>
                <div className="flex flex-row justify-end">
                    線上留言貸款評估
                </div>
                <div className="flex flex-row justify-end">
                    或來電 0800-888-039
                </div>
            </div>
            <div className="md:px-8 px-1 py-4 flex items-centers justify-between">
                <div className="relative h-12 md:h-28 aspect-banner">
                    <Image
                        src="/logo-rect.png"
                        priority
                        layout="fill"
                        alt="Tailwind CSS logo"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className={"flex flex-row space-x-3 text-md md:text-lg"}>
                        <div className="flex flex-col justify-center font-bold">
                            加 Line 立即聯繫
                        </div>
                        <svg className={"w-12 h-12 bg-[#00C300] fill-white p-2 rounded-xl"} role="img"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><title>LINE</title>
                            <path
                                d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={"border-y-2 border-custom-3 py-2"}>
                <div className={"bg-custom-3 text-xl py-2 px-2 flex md:flex-col flex-row justify-between"}>
                    <div className="flex md:flex-row flex-col justify-evenly">
                        {navBarCategories.map(item => (
                            <Link key={item.name} href={item.path} passHref>
                                <div
                                    className={`cursor-pointer hover:shadow-lg py-1 px-3 rounded-lg font-bold flex lg:flex-row md:flex-col flex-row ${((windowWidth < 768) && hideMenu) && "hidden"}`}>
                                    {item.name.map(thing => (
                                        <div key={thing}>
                                            {thing}
                                        </div>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div hidden={windowWidth > 768}>
                        <button onClick={() => {
                            setHideMenu(!hideMenu)
                        }} className="hover:shadow-md px-3 py-0.5 rounded-lg">
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

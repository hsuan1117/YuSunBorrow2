import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";

export function NavBarItemLink({name, path, router}) {
    return (
        <div className={router.pathname === path ? "bg-gray-200 px-2 rounded-lg" : ""}>
            <Link href={path}>{name}</Link>
        </div>
    )
}

export default function Header() {
    const router = useRouter()
    return (
        <header className="">
            <div className={"bg-cyan-600 text-right text-white text-2xl py-4 pr-2"}>
                線上留言貸款評估 或來電 0800-000-000
            </div>
            <div className={"px-2 py-4 flex items-centers justify-between"}>
                <Image
                    src="/logo-rect.png"
                    width={400}
                    height={90}
                    priority
                    alt="Tailwind CSS logo"
                />
                <div className={"flex items-center gap-2 text-lg"}>
                    加 Line 立即聯繫
                    <svg className={"w-12 h-12 bg-[#00C300] fill-white p-2 rounded-xl"} role="img" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"><title>LINE</title>
                        <path
                            d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                </div>
            </div>
            <div className={"border-y border-cyan-400 py-2"}>
                <div className={"flex flex-row justify-end bg-sky-300 text-xl gap-2 py-2 pr-2"}>
                    <NavBarItemLink name={"企業貸款"} path={"/enterprise"} router={router}/>
                    <NavBarItemLink name={"房屋、土地貸款"} path={"/house"} router={router}/>
                    <NavBarItemLink name={"汽機車貸款"} path={"/car"} router={router}/>
                    <NavBarItemLink name={"營業車貸款"} path={"/business"} router={router}/>
                    <NavBarItemLink name={"藝術品"} path={"/art"} router={router}/>
                    <NavBarItemLink name={"股權融資"} path={"/stock"} router={router}/>
                    <NavBarItemLink name={"負責人債務整合"} path={"/person"} router={router}/>
                </div>
            </div>
        </header>
    );
}

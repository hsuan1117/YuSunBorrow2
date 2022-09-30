export default function Articles() {
    return (
        <div className={"flex flex-col px-8 py-2 mt-16"}>
            <h2 className={"text-2xl"}>貸款老師傅-「貸款實話實說」文章專區</h2>
            <div className={"border-t-2 border-cyan-500 pt-12 flex flex-row gap-6 mt-4 px-8 justify-center items-stretch"}>
                <div className={"bg-[rgb(53,113,146)] px-16 py-8"}>
                    <div className={"bg-white hover:bg-[rgb(236,242,244)] cursor-pointer flex rounded-xl px-3 py-2"}>
                        <div></div>
                        <div className={"flex flex-col"}>
                            <div className={"text-2xl"}>企業貸款有哪些?銀行為何晴天送傘,雨天收傘</div>
                            <div className={"text-sm"} >2022.02.02</div>
                            <div className={"text-sm"} >#企業貸款</div>
                        </div>
                    </div>

                    <div className={"underline text-white w-full text-right mt-4"}>更多文章</div>
                </div>
            </div>
        </div>
    )
}
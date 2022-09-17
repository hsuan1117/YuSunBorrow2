import Image from "next/image";

export default function IndexPage() {
    return (
        <div className="flex flex-col bg-white">
            <div className={"flex flex-col px-8 py-2 border-x border-cyan-500"}>
                <h2 className={"text-2xl"}>為何大家貸款都找玉山貸款？</h2>
                <h5 className={"text-lg"}>5萬到5億，專屬對應的服務團隊</h5>

                <div className={"border-t-2 border-cyan-500 pt-12 mt-2 gap-8 grid grid-cols-2"}>
                    <div className={"relative"}>
                        <div className={"absolute -top-6 -left-6 w-32 h-32"}>
                            <Image src={"https://i.pravatar.cc/300"} className={"rounded-full"} layout={"fill"}/>
                        </div>
                        <div className={"bg-cyan-500 text-white text-right py-4 text-xl pr-2"}
                        >受理案件規模： 1000萬~5億
                        </div>
                        <div className={"flex border-x-2 border-b-2 border-cyan-500 items-end p-4"}>
                            <div className={"w-1/3 text-lg"}>企業金融<br/>張經理</div>
                            <div className={"w-2/3 self-start"}>
                                學歷:清大管科系<br/>
                                經歷:<br/>
                                中租迪和企業貸款組7年<br/>
                                富邦商金處ARM 5年<br/>
                                專⻑:企業貸款、應收帳款融資<br/>
                                票據借款<br/>
                            </div>
                        </div>
                    </div>
                    <div className={"relative"}>
                        <div className={"absolute -top-6 -left-6 w-32 h-32"}>
                            <Image src={"https://i.pravatar.cc/300"} className={"rounded-full"} layout={"fill"}/>
                        </div>
                        <div className={"bg-cyan-500 text-white text-right py-4 text-xl pr-2"}>
                            受理案件規模:小於2億
                        </div>
                        <div className={"flex border-x-2 border-b-2 border-cyan-500 items-end p-4"}>
                            <div className={"w-1/3 text-lg"}>土地房屋融資
                                <br/>黃副理
                            </div>
                            <div className={"w-2/3 self-start"}>
                                學歷:逢甲土地管理系<br/>
                                經歷:<br/>
                                富邦銀行房屋貸款專員8年<br/>
                                專⻑:<br/>
                                房屋、土地、二胎融資<br/>
                            </div>
                        </div>
                    </div>
                    <div className={"relative"}>
                        <div className={"absolute -top-6 -left-6 w-32 h-32"}>
                            <Image src={"https://i.pravatar.cc/300"} className={"rounded-full"} layout={"fill"}/>
                        </div>
                        <div className={"bg-cyan-500 text-white text-right py-4 text-xl pr-2"}>
                            受理案件規模:5萬〜300萬
                        </div>
                        <div className={"flex border-x-2 border-b-2 border-cyan-500 items-end p-4"}>
                            <div className={"w-1/3 text-lg"}>汽機車融資<br/>
                                林經理
                            </div>
                            <div className={"w-2/3 self-start"}>
                                學歷:淡江財金系<br/>
                                經歷:<br/>
                                中租迪和汽車貸款專員5年<br/>
                                專⻑:<br/>
                                機車貸款、汽車貸款、商用車<br/>
                                (遊覽車、貨車、其他營業用車貸)<br/>
                            </div>
                        </div>
                    </div>
                    <div className={"relative"}>
                        <div className={"absolute -top-6 -left-6 w-32 h-32"}>
                            <Image src={"https://i.pravatar.cc/300"} className={"rounded-full"} layout={"fill"}/>
                        </div>
                        <div className={"bg-cyan-500 text-white text-right py-4 text-xl pr-2"}>
                            受理案件規模:50萬〜1,000萬
                        </div>
                        <div className={"flex border-x-2 border-b-2 border-cyan-500 items-end p-4"}>
                            <div className={"w-1/3 text-lg"}>
                                租賃融資<br/>
                                廖經理
                            </div>
                            <div className={"w-2/3 self-start"}>
                                學歷:東吳經濟系<br/>
                                經歷:<br/>
                                中租微企組<br/>
                                玉山海外企業金融組<br/>
                                中信ARM<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

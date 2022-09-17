import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from "@components/Testimonial";
export default function IndexPage() {
    return (
        <div className="flex flex-col bg-white">
            <div className={"flex flex-col px-8 py-2 border-x border-cyan-500  mt-6"}>
                <h2 className={"text-2xl"}>為何大家貸款都找玉山貸款？</h2>
                <h5 className={"text-lg"}>5萬到5億，專屬對應的服務團隊</h5>

                <div className={"border-t-2 border-cyan-500 pt-12 mt-2 gap-8 grid grid-cols-1 md:grid-cols-2"}>
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
            <div className={"flex flex-col px-8 py-2 border-x border-cyan-500 mt-16"}>
                <h2 className={"text-2xl"}>為何大家貸款前,都先找玉山貸款免費諮詢?</h2>
                <h5 className={"text-lg"}>累積20年銀行資料庫透過AI演算法+貸款審查老師傅幫您把關</h5>

                <div className={"border-t-2 border-cyan-500 pt-12 mt-2"}>
                    <div className={"flex w-full justify-around"}>
                        <div className={"w-1/2 flex flex-col items-center"}>
                            <div className={"w-32 h-32 bg-cyan-500 rounded-full"}></div>
                            <div className={"text-4xl font-bold text-center my-2"}>
                                AI幫你選方案
                            </div>
                            <div className={"text-center"}>
                                <span className={"font-bold"}>20年銀行資料+AI演算法,協助您度過難關</span><br/>
                                業界唯一,20年跨及商業銀行、租賃公司、⺠間<br/>
                                金融業者的審核資料,加上我們資料科學家發展的<br/>
                                AI機器人,協助您找出最合適的融資方案。<br/>
                            </div>
                        </div>
                        <div className={"w-1/2 flex flex-col items-center"}>
                            <div className={"w-32 h-32 bg-red-700 rounded-full"}></div>
                            <div className={"text-4xl font-bold text-center my-2"}>
                                貸款老師傅最後把關
                            </div>
                            <div className={"text-center"}>
                                <span className={"font-bold"}>個金、企金、租賃審核經驗的團隊最後把關</span><br/>
                                業界僅見,我們邀集不同金融領域,包含個人金<br/>
                                融、企業金融、租賃公司審核人員成為我們的貸款<br/>
                                老師傅,做最後貸款送件的把關,幫您成功申貸。<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col px-8 pt-2 pb-32 border-x border-cyan-500 mt-16"}>
                <h2 className={"text-2xl"}>為何大家都找玉山貸款融資?</h2>
                <h5 className={"text-lg"}>我們的客戶親身見證:沒有過不了的關,只有你沒找玉山。</h5>

                <div className={"border-t-2 border-cyan-500 pt-12 mt-2"}>
                    <Testimonial content={"「不是營收超過5億,你在銀行就輕鬆過關,公司架構沒整理\n" +
                        "                            好,一直用海外子公司收款,不小心就求救無門,這時候\n" +
                        "                            公司基本支出那麼大,現金缺口多少我都算不出來,也不敢\n" +
                        "                            算,是張經理幫我做了超過30頁的簡報,安排金融機構與分\n" +
                        "                            行簡報,安排整體的融資方案,才度過難關。」"} title={"「外幣OBU+應收帳款融資+廠房融資+藝術品融資\n" +
                        "                            超過3億」"} name={"顏先生,台北, 62歲, 多間公司負責人"}/>

                    <Testimonial
                        title={` 「建案蓋到一半要變更,營造協力廠要款,工資要漲,能動用,還好找了玉山貸款融資幫忙。」`}
                        name={"陳先生,台中, 建商/甲級營造廠老闆"}
                        content={` 「沒有上市櫃的小建商,資金不夠雄厚,人脈又沒有支援,那就一
                            定要認識玉山貸款融資,一開始也只是問問,後來前前後後配合
                            了超過五個建案,三個標案。」`}/>

                    <Testimonial
                        title={`「原來已經私設的房屋還能貸款500萬!」`}
                        name={"王小姐,台北, 商號負責人"}
                        content={`「被錢追著跑一輩子了,只有玉山貸款融資知道怎麼幫我解
                            決,怎麼說?私設房屋要增貸,我問遍銀行也無解,我看
                            只有玉山貸款融資的黃副理有方案。」`}/>

                    <Testimonial
                        title={` 「客戶開票135天,你以為公司負責人那麼好當?」`}
                        name={"程先生,新北, 工廠老闆"}
                        content={` 「銀行照本宣科,⺠間將本求利。偏偏我小工廠只有20個員
                            工,幾次遲繳就把我當作信用不良,連房屋貸款都無法增
                            貸,銀行看不上眼,客戶票期⻑不給貼現,⺠間利率高,
                            員工薪水得照付,最後玉山融資的廖經理2天就幫我想到解
                            套方案,沒有過不了的關,只因為你沒找玉山。」`}/>

                    <Testimonial
                        title={`「SOHO,沒薪資證明,沒勞保還是過了銀行這關。」`}
                        name={" 許小姐,苗栗, SOHO族"}
                        content={` 「接案子過日子的市井小⺠很多,總是會有急須用錢的意
                            外發生,這時候自己跑銀行,你以為他會理你?你沒辦法佐
                            證自己有在工作,就算有金流證明,可能也不覺得你以後能
                            持續維持,所以SOHO是金融機構的次等公⺠,玉山林經理
                            有同理心,只有她很快幫我解決。」`}/>
                </div>
            </div>
        </div>
    );
}

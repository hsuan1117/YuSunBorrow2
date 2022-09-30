import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from "@components/Testimonial";
export default function IndexPage() {
    return (
        <div className="flex flex-col bg-white border-x border-cyan-500  pb-32">
            <div className={"flex flex-col px-8 py-2  mt-6"}>
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
                    <div className={"flex flex-col md:flex-row w-full justify-around gap-2"}>
                        <div className={"md:w-1/2 flex flex-col items-center"}>
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
                        <div className={"md:w-1/2 flex flex-col items-center"}>
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

            <div className={"flex flex-col px-8 pt-2 mt-16"}>
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

            <div className={"flex flex-col px-8 py-2 mt-16"}>
                <h2 className={"text-2xl"}>留、申、撥,快速簡單拿到資金!</h2>
                <div className={"border-t-2 border-cyan-500 pt-12 flex flex-col gap-3 mt-4"}>
                    <div className={"flex flex-col md:flex-row gap-1"}>
                        <div className={"text-white text-2xl bg-cyan-500 rounded-full w-12 h-12 inline-flex items-center justify-center"}>留</div>
                        <div className={"inline-flex items-center px-2 border-2 border-cyan-500 rounded-xl w-full"}>留言或來電0800-000-000,諮詢或像朋友一樣聊聊天,花您不到三分鐘,免費解決您三天也想不出結果的資金問題!</div>
                    </div>
                    <div className={"flex flex-col md:flex-row gap-1"}>
                        <div className={"text-white text-2xl bg-cyan-500 rounded-full w-12 h-12 inline-flex items-center justify-center"}>申</div>
                        <div className={"inline-flex items-center px-2 border-2 border-cyan-500 rounded-xl w-full"}>申請貸款前,我們透過累積20年的數據資料庫,比對申請條件,AI程式+專業審查人員幫您找出超高核准率的方案。</div>
                    </div>
                    <div className={"flex flex-col md:flex-row gap-1"}>
                        <div className={"text-white text-2xl bg-cyan-500 rounded-full w-12 h-12 inline-flex items-center justify-center"}>撥</div>
                        <div className={"inline-flex items-center px-2 border-2 border-cyan-500 rounded-xl w-full"}>撥款前我們會再次確定您滿意撥貸條件,行員對保後您就可以拿到資金!</div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col px-8 py-2 mt-16"}>
                <h2 className={"text-2xl"}>玉山融資貸款三大保證</h2>
                <div className={"border-t-2 border-cyan-500 pt-12 flex flex-col md:flex-row gap-6 mt-4 px-8 justify-between items-stretch"}>
                    <div className={"flex flex-col items-start gap-1 md:w-1/3"}>
                        <div className={"text-2xl inline-flex items-center justify-center px-4"}>3HR內回覆</div>
                        <div className={"text-2xl inline-flex items-center justify-center px-4"}>解決問題比你更急</div>
                        <div className={"border-2 border-cyan-500 shadow-md shadow-cyan-800 h-full p-4 mt-2"}>留 言 或 來 電 0800-
                            000-000,我們保證
                            在最短時間,建議您
                            解決方案。</div>
                    </div>
                    <div className={"flex flex-col items-start gap-1 md:w-1/3"}>
                        <div className={"text-2xl inline-flex items-center justify-center px-4"}>業界最多元-</div>
                        <div className={"text-2xl inline-flex items-center justify-center px-4"}>客製化融資方案</div>
                        <div className={"border-2 border-cyan-500 shadow-md shadow-cyan-800 h-full p-4 mt-2"}>各種動產、不動產,
                            公司股票質押、藝術
                            品、設備機器、應收
                            帳款、業界有的我們
                            都有,業界沒有的我
                            們也能提供。</div>
                    </div>
                    <div className={"flex flex-col items-start gap-1 md:w-1/3"}>
                        <div className={"text-2xl inline-flex items-center justify-center px-4"}>爭取最低利率-</div>
                        <div className={"text-2xl inline-flex items-center justify-center px-4"}>是玉山融資使命</div>
                        <div className={"border-2 border-cyan-500 shadow-md shadow-cyan-800 h-full p-4 mt-2"}>其他業務以利率設算
                            佣金,金融機構或貸
                            款專員有墊高客戶借
                            款成本的誘因。玉山
                            融資的制度不以利率
                            高低發佣,全員一致
                            協助客戶降低利率。</div>
                    </div>
                </div>
            </div>


            <div className={"flex flex-col px-8 py-2 mt-16"}>
                <h2 className={"text-2xl"}>玉山融資貸款-立即留言免費諮詢</h2>
                <div className={"border-t-2 border-cyan-500 pt-12 flex flex-col md:flex-row justify-around gap-3 mt-4"}>
                    <div className={"flex flex-col bg-amber-50 border-2 border-cyan-500 p-12 gap-4"}>
                        <input type={"text"} placeholder={"姓名(必填)"} className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                        <input type={"text"} placeholder={"聯絡電話(必填)"} pattern={"09\d{8}"} className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                        <input type={"text"} placeholder={"LINE ID"} className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                        <input type={"email"} placeholder={"E-MAIL"} className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                        <div>
                            <input type={"text"} placeholder={"可聯絡時間"} className={"border border-gray-700 bg-gray-100 px-3 py-2 w-full"}/>
                            <div>(未填寫則以平日上班時段為主)</div>
                        </div>

                        <div>
                            <div className={"bg-cyan-600 text-white text-center text-2xl px-2 py-3"}>送出申請</div>
                            <div>送出表示同意本網站隱私權政策</div>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"text-4xl mb-4 flex items-center gap-2"}><div className={"w-12 h-12 rounded-full inline-flex justify-center items-center border border-cyan-600 text-cyan-600"}>!</div>玉山融資貸款-防止詐騙提醒</div>
                        <div className={"flex flex-col bg-amber-50 border-8 p-4 border-cyan-600 gap-4"}>
                            <div className={"text-2xl"}>已逾10年的玉山融資貸不會主動:</div>
                            <div className={"flex w-full items-center gap-4"}>
                                <div className={"px-4 inline-flex justify-center items-center bg-cyan-600 text-white text-4xl font-bold rounded-full"}>1</div>
                                <div className={"h-full"}>近期發生許多冒用「玉山融資貸款」名義,透過Telegram Telegram或大量發送簡訊,我們不會以任
                                    何名義,包含美化銀行餘額名義,主動要求客
                                    戶提供金融帳號、網銀密碼、及信用卡資料,
                                    如果您有遇到,請撥165反詐騙電話查詢。</div>
                            </div>
                            <div className={"flex w-full items-center gap-4"}>
                                <div className={"px-4 inline-flex justify-center items-center bg-cyan-600 text-white text-4xl font-bold rounded-full"}>2</div>
                                <div className={"h-full"}>玉山融資貸款在業界超過10年,累積數萬名
                                    貸款客戶,我們沒有配合其他投資公司舉辦
                                    投資說明會,亦不會請您上P2P貸款平台申
                                    請,如您是我們的舊客戶,可以與原本的專
                                    員服務,或是來電0800-000-000 0800-000-000洽詢。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    );
}

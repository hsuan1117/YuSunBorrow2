import axios from "../lib/axios";
import Articles from "@components/articles";

export default function EnterprisePage({posts}) {
    return (
        <><div className="flex flex-col bg-white border-x border-cyan-500  pb-32">
            <div className={"flex flex-col px-8 py-2  mt-6"}>
                <h2 className={"text-2xl"}>玉山貸款融資-企業貸款</h2>
                <h5 className={"text-lg"}>我們的企業金融服務團隊可以爲你做什麽?</h5>

                <div className={"border-t-2 border-cyan-500 pt-12 mt-2 gap-2 grid grid-cols-1"}>
                    <div className={"flex gap-4 items-center"}>
                        <div className={"text-cyan-500 text-4xl"}>
                            ➤
                        </div>
                        <div>
                            <div className={"text-2xl"}>
                                企業無擔保貸款
                            </div>
                            <div className={"text-lg"}>
                                有報401,一年以上就可以申辦,微企、中小企業的週轉金,我們專業團隊
                                幫您評估額度。
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-4 items-center"}>
                        <div className={"text-cyan-500 text-4xl"}>
                            ➤
                        </div>
                        <div>
                            <div className={"mt-4 text-2xl"}>
                                原物料分期付款、廠房、資產出售回租
                            </div>
                            <div className={"text-lg"}>
                                進貨資金不足怎麼辦?添購機器設備,資金不足怎麼辦?
                                協助您處理原物料購買、並協助您分期攤還。
                                企業主採用此方案可免除一次付清的壓力,還可以依還款能力自行選擇適當期間
                                與金額分期企業主也可以將已購入的標的物(資產、設備)出售回租,以取得資金。
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-4 items-center"}>
                        <div className={"text-cyan-500 text-4xl"}>
                            ➤
                        </div>
                        <div>
                            <div className={"mt-4 text-2xl"}>
                                應收帳款融資Factoring
                            </div>
                            <div className={"text-lg"}>
                                客戶票期⻑,海外倉客戶點交後才付款?我們可以協助您解決融資問題。
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-4 items-center"}>
                        <div className={"text-cyan-500 text-4xl"}>
                            ➤
                        </div>
                        <div>
                            <div className={"mt-4 text-2xl"}>
                                資金調度建議
                            </div>
                            <div className={"text-lg"}>
                                集團子公司間的資金調度、海外企業但在台灣沒有公司但想借錢,負責人個人借款。
                                營運資金(Working Capital)不足,財務需要建議,我們免費提供諮詢。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <Articles posts={posts}/></>
    );
}

export async function getStaticProps() {
    const {data: posts} = await axios.get('/wp/v2/posts')
    return {
        props: {
            posts
        }
    }
}
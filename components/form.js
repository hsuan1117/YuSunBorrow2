export default function Form() {
    return (

        <div className={"flex flex-col px-8 py-2 mt-16"}>
            <h2 className={"text-2xl"}>玉山融資貸款-立即留言免費諮詢</h2>
            <div className={"border-t-2 border-cyan-500 pt-12 flex flex-col md:flex-row justify-around gap-3 mt-4"}>
                <div className={"flex flex-col bg-amber-50 border-2 border-cyan-500 p-12 gap-4"}>
                    <input type={"text"} placeholder={"姓名(必填)"}
                           className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                    <input type={"text"} placeholder={"聯絡電話(必填)"} pattern={"09\d{8}"}
                           className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                    <input type={"text"} placeholder={"LINE ID"}
                           className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                    <input type={"email"} placeholder={"E-MAIL"}
                           className={"border border-gray-700 bg-gray-100 px-3 py-2"}/>
                    <div>
                        <input type={"text"} placeholder={"可聯絡時間"}
                               className={"border border-gray-700 bg-gray-100 px-3 py-2 w-full"}/>
                        <div>(未填寫則以平日上班時段為主)</div>
                    </div>

                    <div>
                        <div className={"bg-cyan-600 text-white text-center text-2xl px-2 py-3"}>送出申請</div>
                        <div>送出表示同意本網站隱私權政策</div>
                    </div>
                </div>
                <div className={""}>
                    <div className={"text-4xl mb-4 flex items-center gap-2"}>
                        <div
                            className={"w-12 h-12 rounded-full inline-flex justify-center items-center border border-cyan-600 text-cyan-600"}>!
                        </div>
                        玉山融資貸款-防止詐騙提醒
                    </div>
                    <div className={"flex flex-col bg-amber-50 border-8 p-4 border-cyan-600 gap-4"}>
                        <div className={"text-2xl"}>已逾10年的玉山融資貸不會主動:</div>
                        <div className={"flex w-full items-center gap-4"}>
                            <div
                                className={"px-4 inline-flex justify-center items-center bg-cyan-600 text-white text-4xl font-bold rounded-full"}>1
                            </div>
                            <div className={"h-full"}>近期發生許多冒用「玉山融資貸款」名義,透過Telegram
                                Telegram或大量發送簡訊,我們不會以任
                                何名義,包含美化銀行餘額名義,主動要求客
                                戶提供金融帳號、網銀密碼、及信用卡資料,
                                如果您有遇到,請撥165反詐騙電話查詢。
                            </div>
                        </div>
                        <div className={"flex w-full items-center gap-4"}>
                            <div
                                className={"px-4 inline-flex justify-center items-center bg-cyan-600 text-white text-4xl font-bold rounded-full"}>2
                            </div>
                            <div className={"h-full"}>玉山融資貸款在業界超過10年,累積數萬名
                                貸款客戶,我們沒有配合其他投資公司舉辦
                                投資說明會,亦不會請您上P2P貸款平台申
                                請,如您是我們的舊客戶,可以與原本的專
                                員服務,或是來電0800-000-000 0800-000-000洽詢。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
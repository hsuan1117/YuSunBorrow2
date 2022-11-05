import axios from "../lib/axios";
import Articles from "@components/articles";

export default function Company_car({posts}) {
    return (
        <>
            <div className="flex flex-col bg-white border-x border-cyan-500  pb-32">
                <div className={"flex flex-col px-8 py-2  mt-6"}>
                    <h2 className={"text-2xl"}>玉山貸款融資-如何申辦營業車貸款?</h2>
                    <h5 className={"text-lg"}>我們的營業車貸款服務團隊可以爲你做什麽?</h5>

                    <div className={"border-t-2 border-cyan-500 pt-12 mt-2 gap-2 grid grid-cols-1"}>
                        <div className={"flex gap-4 items-center"}>
                            <div className={"text-cyan-500 text-4xl"}>
                                ➤
                            </div>
                            <div>
                                <div className={"text-2xl"}>
                                    營業車新車貸款
                                </div>
                                <div className={"text-lg"}>
                                    企業營業車貸洽談、營業車保險。
                                </div>
                            </div>
                        </div>
                        <div className={"flex gap-4 items-center"}>
                            <div className={"text-cyan-500 text-4xl"}>
                                ➤
                            </div>
                            <div>
                                <div className={"mt-4 text-2xl"}>
                                    營業車二胎、轉增貸降低月付金幫頭家做好準備
                                </div>
                                <div className={"text-lg"}>
                                    營業車二胎貸款,迅速撥款。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Articles posts={posts}/>
        </>
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
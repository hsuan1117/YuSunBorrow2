import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from "@components/Testimonial";

export default function Art() {
    return (
        <div className="flex flex-col bg-white border-x border-cyan-500  pb-32">
            <div className={"flex flex-col px-8 py-2  mt-6"}>
                <h2 className={"text-2xl"}>玉山貸款融資-藝術品、股權可以融資嗎?</h2>
                <h5 className={"text-lg"}>業界可以的,我們都有,業界不行的,貸款老師傅幫你</h5>

                <div className={"border-t-2 border-cyan-500 pt-12 mt-2 gap-2 grid grid-cols-1"}>
                    <div className={"flex gap-4 items-center"}>
                        <div className={"text-cyan-500 text-4xl"}>
                            ➤
                        </div>
                        <div>
                            <div className={"text-2xl"}>
                                藝術品融資
                            </div>
                            <div className={"text-lg"}>
                                藝術品現值5,000萬以上者,可以來電洽詢
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-4 items-center"}>
                        <div className={"text-cyan-500 text-4xl"}>
                            ➤
                        </div>
                        <div>
                            <div className={"mt-4 text-2xl"}>
                                公司股權融資、股票融資
                            </div>
                            <div className={"text-lg"}>
                                你是公司負責人,但急需資金擴張,又不希望影響財報?
                                我們評估後,迅速撥款。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

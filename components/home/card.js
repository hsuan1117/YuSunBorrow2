import Image from "next/image"

export default function homeCard({props}) {
    return (
        <div className="relative bg-custom-1 h-56">
            {/* Image */}
            <div className="relative md:w-32 w-24 aspect-square absolute -top-5 -left-5 z-50">
                <Image
                    src={props.img}
                    alt={`${props.img}'s photo`}
                    layout="fill"
                    className="rounded-full"/>
            </div>
            {/* Blue Header*/}
            <div className="absolute top-3 right-5 text-white md:text-base text-xs">
                受理案件規模：{props.money}
            </div>
            {/* White Content */}
            <div
                className="absolute bottom-2 right-2 w-full h-44 bg-white border-x-custom-2 border-b-custom-2 border-t-0 border-4 flex flex-row">
                {/* title */}
                <div className="flex flex-col justify-end w-[35%] pl-3 pb-2 font-bold md:text-base text-[13px]">
                    {props.position}<br/>
                    {props.name}
                </div>
                {/* Things */}
                <div className="flex flex-col w-[65%] justify-center md:text-base text-sm">
                    學歷：{props.edu}<br/>
                    經歷：<br/>
                    {props.exp.map(item => (
                        <div key={item} className="pl-3">
                            {item}
                            <br/>
                        </div>
                    ))}
                    {props.talent && <>專⻑：<br/>{props.talent}<br/></>}
                </div>
            </div>
        </div>
    )
}

export function Home_Card({props}) {
    return (
        <div className="relative">
            <div className={"absolute -top-6 -left-6 w-32 h-32"}>
                <Image src={props.img}
                       className={"rounded-full"}
                       layout="fill"
                       alt={`${props.name}`}
                />
            </div>
            <div className={"bg-cyan-500 text-white text-right py-4 text-xl pr-2"}>
                受理案件規模： {props.money}
            </div>
            <div className={"flex border-x-2 border-b-2 border-cyan-500 items-end p-4 h-48"}>
                <div className={"w-1/3 text-lg"}>

                </div>
                <div className={"w-2/3 self-start"}>


                </div>
            </div>
        </div>
    )
}
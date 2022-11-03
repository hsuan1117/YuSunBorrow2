import Image from "next/image"

export default function Home_Card({props}) {
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
                    {props.position}<br/>
                    {props.name}
                </div>
                <div className={"w-2/3 self-start"}>
                    學歷：{props.edu}<br/>
                    經歷：<br/>
                    {props.exp.map(item => (
                        <div key={item} className="pl-3">
                            {item}
                            <br/>
                        </div>
                    ))}
                    {props.talent && <>專⻑：{props.talent}<br/></>}

                </div>
            </div>
        </div>
    )
}
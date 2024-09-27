import Image from "next/image"

const DevImg = () => {
  return (
    <div className="w-[500px] h-[500px] bg-no-repeat relative bg-bottom">
      <Image src="/hero/myChar.png" fill priority alt=""/>
    </div>
  )
}

export default DevImg
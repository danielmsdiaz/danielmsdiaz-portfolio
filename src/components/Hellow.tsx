import Image from "next/image"

const Hellow = () => {
  return (
    <div className="w-[600px] h-[500px] bg-no-repeat relative bg-bottom">
      <Image unoptimized src="/hero/hellow.gif" fill priority alt="" sizes="100%"/>
    </div>
  )
}

export default Hellow
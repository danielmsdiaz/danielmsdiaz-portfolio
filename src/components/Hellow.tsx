import Image from "next/image"

const Hellow = () => {
  return (
    <div className="w-[600px] h-[500px] bg-no-repeat relative bg-bottom">
      <Image src="/hero/hellow.gif" fill priority alt=""/>
    </div>
  )
}

export default Hellow
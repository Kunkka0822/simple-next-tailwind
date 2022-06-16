export default function Home() {
  return (
    <div className='w-full p-10 flex flex-row justify-center items-center'>
      <div className='w-80 h-80 ml-32'>
        <img src="./static/images/main.jpg" />
      </div>
      <div className='grid grid-cols-2 m-auto'>
        <div className="flex flex-col text-center m-4 p-4 pt-8 font-Skranji rounded-2xl overflow-hidden w-[350px] h-[200px] bg-[#BBFFA5]">
            <div><p className="text-2xl">PDF</p></div>
            <div className="flex-1 flex justify-center text-lg pt-6">
                <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST </p>
            </div>
        </div>
        <div className="flex flex-col text-center m-4 p-4 pt-8 font-Skranji rounded-2xl overflow-hidden w-[350px] h-[200px] bg-[#297FFF]">
            <div><p className="text-2xl">SCAN AUDII</p></div>
            <div className="flex-1 flex justify-center text-lg pt-6">
                <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST </p>
            </div>
        </div>
        <div className="flex flex-col text-center m-4 p-4 pt-8 font-Skranji rounded-2xl overflow-hidden w-[350px] h-[200px] bg-[#FF55A7]">
            <div><p className="text-2xl">EXCEPTION</p></div>
            <div className="flex-1 flex justify-center text-lg pt-6">
                <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST </p>
            </div>
        </div>
        <div className="flex flex-col text-center m-4 p-4 pt-8 font-Skranji rounded-2xl overflow-hidden w-[350px] h-[200px] bg-[#7755FF]">
            <div><p className="text-2xl">API</p></div>
            <div className="flex-1 flex justify-center text-lg pt-6">
                <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST </p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

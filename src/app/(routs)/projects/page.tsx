import Navbar from "@/components/Navbar"

const Projects = () => {
    return (
      <div >
        <Navbar />

       <h1 className='font-sans text-[40px] font-bold text-red-900 p-5 m-10  bg-green-500 rounded-2xl'>PROJECTS :-</h1>
      <div className='font-mono text-[20px] font-bold p-10 m-10  bg-blue-500 border-1 leading-tight rounded-2xl'>
          <ol className="list-inside list-decimal">
            <li>Student Managment System<span className="text-mono italic text-[15px] text-green-900">{`           (The Typescript based app)`}</span></li>
            <li>Simple CLI Calculator<span className="text-mono italic text-[15px] text-green-900">{`  (The Typescript based app)`}</span></li>
            <li>Zakat Calculation<span className="text-mono italic text-[15px] text-green-900">{`  (The Typescript based app)`}</span></li>
          </ol>
        </div>
    
       </div>
    )
  }
  export default Projects
  
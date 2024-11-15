import Navbar from "@/components/Navbar"

const Projects = () => {
    return (
      <div >
        <Navbar />

       <h1 className='font-sans text-[40px] font-bold text-red-900 p-5 m-10  bg-green-500 rounded-2xl'>MY SKILLS :-</h1>
      <div className='font-mono text-[20px] font-bold p-5 m-10  bg-blue-500 border-1 leading-tight rounded-2xl'>
        <h2 className="font-mono text-[20px] font-bold text-red-900">Education</h2>
          <ol className="list-inside list-decimal">
            <li>Matric From Sindh Technical Board</li>
            <li>Inter From Board of Intermediate Educa,on Karachi.</li>
            <li>B. Com From Govt. Degree College Karachi.</li>
          </ol>
          <h2 className="font-mono text-[20px] font-bold text-red-900">My Skills</h2>
          <ol className="list-inside list-decimal">
            <li>M.S. Office <span className="text-mono italic text-[15px] text-green-900">(The Mentor Computer Centre)</span></li>
            <li>Computerized Accouning<span className="text-mono italic text-[15px] text-green-900">(The Memon Industrial Technical Instiute)</span></li>
          </ol>
          <h2 className="font-mono text-[20px] font-bold text-red-900">Extra Skills</h2>
          <ol className="list-inside list-decimal">
            <li>Currently completing  Governor Sindh IT Course</li>
          </ol>
        </div>
    
       </div>
    )
  }
  export default Projects
  
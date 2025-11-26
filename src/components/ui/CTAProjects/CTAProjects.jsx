import './style.css'

const CTAProjects = () => {
  return (
    <button 
        className='btn-wiggly arrow-btn font-mono'
        onClick={() => {
          document.querySelector("#Projects").scrollIntoView({ behavior: "smooth" });
        }}
    >
      <span className='label'>
        Proyectos!
      </span>
      <span className="circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 7"><path fill="white" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"/></svg>
      </span>
    </button>
  )
}


export default CTAProjects
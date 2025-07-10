

export function HeadingH1({headingH1, className}) {

  return (
    <div className= {`py-1 font-bold lg:text-8xl text-[var(--deepColor)] capitalize text-5xl  ${className}`} >
      {headingH1}
    </div>
  )
}

export function HeadingH2({headingH2, className}) {
  return (
    <div className= {`py-1 font-bold lg:text-4xl text-[var(--deepColor)] capitalize text-xl  ${className}`} >
      {headingH2}
    </div>
  )
}

export function HeadingH3({headingH3, className}) {
  return (
    <div className= {`tracking-widest italic text-[15px] text-[var(--deepColor)] capitalize  ${className}`} >
      {headingH3}
    </div>
  )
}


export function Para({para, className}) {
  return (
    <div className= {`py-1 my-1 text-[15px]  text-[var(--deepColor)]  ${className}`} >
      {para}
    </div>
  )
}




export function Btn({btn, icon, className}) {
  return (
    <div className= {`btn h-9 rounded bg-[var(--deepColor)]
     text-white font-normal cursor-pointer hover:text-white  ${className}`} >
      <button>{btn}</button>
      {icon && <span className="text-base animate-pulse">{icon}</span>}
    </div>
  )
}




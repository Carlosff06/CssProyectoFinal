import React from 'react'

const Header = ({ tab, setTab }) => {
  return (
    <header className='border-b border-slate-950 mb-4'>
      <nav className='max-w-[60%] m-auto'>
        <ul className='flex justify-around text-gray02 [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer'>
          <li 
            className={tab==='day'?'current':''}
            onClick={e=>setTab('day')}
          >Dia</li>
          <li
            className={tab==='week'?'current':''}
            onClick={e=>setTab('week')}
          >Semana</li>
          <li
            className={tab==='month'?'current':''}
            onClick={e=>setTab('month')}
          >Mes</li>
          <li
            className={tab==='year'?'current':''}
            onClick={e=>setTab('year')}
          >Año</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
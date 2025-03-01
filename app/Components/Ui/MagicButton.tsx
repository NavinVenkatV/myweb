import React from 'react'

function MagicButton({
    title, handleClick, icon, otherClasses, position
} : {
    title : string,
    handleClick? : ()=>void,
    icon?: React.ReactNode,
    otherClasses?: string,
    position?: string
}) {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] w-full md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position == 'right' && icon}
            </span>
        </button>
    </div>
  )
}

export default MagicButton

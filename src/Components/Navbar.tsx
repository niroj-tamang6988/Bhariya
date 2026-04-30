import { NavbarDetails } from "../Config/data.ts"


//parent component
type NavbarProps = {
    activeModule: string;
    onSelect: (module: string) => void;
}


//child component
function Navbar ( {activeModule, onSelect }: NavbarProps){




    return(
        <>
        <header className="fixed top-0 w-full bg-[rgba(11,11,12,0.9)] backdrop-blur-[10px] border-b border-[rgba(212,175,55,0.2)] z-[1000] px-8 py-4">
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4 relative">

           {/* logo */}
        <div className="inline-flex items-center gap-3 font-[Poppins] text-2xl font-bold text-[#D4AF37] no-underline">
            <a href="#" className="hover:text-yellow-400">Bhariyaa </a>
            </div>

            <div className=" flex gap-5 item-center pr-20 ">
            {/* Links */}
           {NavbarDetails.map((nav) => (

            <button 
                key={nav}
                type="button"
                onClick={() => onSelect(nav)}
                className={`text-[15px] px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 
                     ${ activeModule === nav ? "text-yellow-400" : "text-white"  //making yellow if active module is....
                }`}
            >
                {nav}
            </button>
           ))}
           </div>
        </nav>
        </header>
        
        </>
    )
}

export default Navbar
type RegisterProps = {
    onSwitch: () => void
}

function Register({ onSwitch }: RegisterProps) {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label className="text-[#A1A1AA] text-sm">Full Name</label>
                <input type="text" placeholder="Enter your full name" required
                    className="px-3 py-2 bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[#A1A1AA] text-sm">Email</label>
                <input type="email" placeholder="Enter your email" required
                    className="px-3 py-2 bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[#A1A1AA] text-sm">Password</label>
                <input type="password" placeholder="Create a password" required
                    className="px-3 py-2 bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"/>
            </div>
            <button type="submit" className="bg-[#D4AF37] text-[#0B0B0C] py-2 rounded-lg font-semibold hover:bg-[#B8952A] transition-colors duration-300">
                Create Account
            </button>
            <p className="text-center text-[#A1A1AA] text-sm">
                Already have an account? <span onClick={onSwitch} className="text-[#D4AF37] cursor-pointer">Sign in</span>
            </p>
        </form>
    )
}

export default Register

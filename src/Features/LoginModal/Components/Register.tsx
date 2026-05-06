type RegisterProps = {
    onSwitch: () => void
}

function Register({ onSwitch }: RegisterProps) {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label className=" text-sm">Email or Mobile Number</label>
                <input type="text" placeholder="Enter your email or mobile number" required
                    className="px-3 py-2 bg-white border border-[#D4AF37]/30 rounded-lg  focus:outline-none focus:border-[#D4AF37]"/>
            </div>
            <div className="flex flex-col gap-1">
                <label className=" text-sm">Create Password</label>
                <input type="email" placeholder="Create a strong password" required
                    className="px-3 py-2 bg-white border border-[#D4AF37]/30 rounded-lg  focus:outline-none focus:border-[#D4AF37]"/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm">Confirm Password</label>
                <input type="password" placeholder="Confirm your password" required
                    className="px-3 py-2 bg-white border border-[#D4AF37]/30 rounded-lg  focus:outline-none "/>
            </div>
            <button type="submit" className="bg-[#ffbf00] text-[#0B0B0C] py-2 rounded-lg font-semibold hover:bg-[#B8952A] transition-colors duration-300">
                Create Account
            </button>
            <p className="text-center  text-sm">
                Already have an account? <span onClick={onSwitch} className="text-[#D4AF37] cursor-pointer">Sign in</span>
            </p>
        </form>
    )
}

export default Register

function CreditCard() {
    return (
        <div className="relative w-full max-w-105 aspect-[1.6/1] rounded-2xl bg-linear-to-br from-[#1e2f52] to-[#3a4a6b] p-4 sm:p-6 text-white shadow-xl">

            {/* decorative circles */}
            <div className="absolute -right-16 -top-16 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-white/5" />

            {/* top row */}
            <div className="flex items-start justify-between">
                {/* chip */}
                <div className="h-8 w-12 sm:h-10 sm:w-14 rounded bg-yellow-400" />

                {/* card icon */}
                <div className="h-5 w-8 sm:h-6 sm:w-10 rounded border-2 border-white/80" />
            </div>

            {/* card number */}
            <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3 text-base sm:text-lg tracking-widest">
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
            </div>

            {/* bottom row */}
            <div className="mt-auto flex items-end justify-between">
                <div>
                    <p className="text-[10px] sm:text-xs opacity-70">
                        CARDHOLDER NAME
                    </p>
                    <p className="text-xs sm:text-sm">
                        YOUR NAME
                    </p>
                </div>

                <div className="text-xs sm:text-sm">
                    MM/YY
                </div>
            </div>
        </div>
    )
}

export default CreditCard

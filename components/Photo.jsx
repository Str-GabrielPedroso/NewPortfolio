"use client";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.3, ease: "easeInOut"}}}
            >
                <div className="w-[200px] h-[200px] xl:w-[360px] xl:h-[360px]">
                    <img
                        src="/assets/profile.png"
                        className="rounded-full border-4 border-primary outline outline-4 outline-accent grayscale-30"
                    />
                </div>
            </div>
        </div>
    )
}

export default Photo;
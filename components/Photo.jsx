"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.3, ease: "easeInOut"}}}
            >
                <div className="w-[200px] h-[200px] xl:w-[360px] xl:h-[360px]">
                    <Image
                        src="/assets/profile.png"
                        overrideSrc="/override.png"
                        priority
                        quality={100}
                        fill
                        className="rounded-full border-4 border-primary outline outline-4 outline-accent grayscale-30"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Photo;
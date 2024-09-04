"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {

    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.3, ease: "easeInOut" } }}
            >
                <div className="w-[200px] h-[200px] xl:w-[360px] xl:h-[360px]">
                    <Image
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGXPHNwyOr2EA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707069540766?e=1730937600&v=beta&t=JGsMbo3BkrjiyjBNysukcqpVE9iUDQidyvf6RsN7E5M"
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
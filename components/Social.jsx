import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/Str-GabrielPedroso"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/gabriel-pedroso-de-almeida-6b7888143/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/gaah_pedroso/"
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Social;
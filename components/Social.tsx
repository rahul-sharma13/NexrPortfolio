import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials: { icon: JSX.Element, path: string }[] = [
    { icon: <FaGithub />, path: "https://github.com/rahul-sharma13" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rahul-sharma-a21916226/" },
    { icon: <FaTwitter />, path: "https://twitter.com/Kraken_3102" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/rahul-sharma13/" },
]

type SocialProps = {
    containerStyles : string,
    iconStyles: string
}

const Social = ({containerStyles, iconStyles} : SocialProps) => {
return (
    <div className={containerStyles}>
            {socials.map((item: { icon: JSX.Element, path: string }, index: number) => {
                    return <Link key={index} href={item.path} className={iconStyles}>
                            {item.icon}
                    </Link>
            })}
    </div>
)
}

export default Social
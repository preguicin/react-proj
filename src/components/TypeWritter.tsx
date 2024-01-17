import { useEffect, useState } from "react";

interface TypeWritterProps {
    text: string;
    speed: number;
}

const TypeWritter: React.FC<TypeWritterProps> = ({text, speed}) => {
    const [displayedText, setDisplayedText] = useState("");
    
    useEffect(() => {
        let currentIndex = 0;
        
        const intervalId =  setInterval(() => {
            if(currentIndex < text.length){
                setDisplayedText(text.substring(0, currentIndex + 1));
                currentIndex++;
            }else{
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <>
            <span>{displayedText}</span>
        </>
    );
}


export default TypeWritter;
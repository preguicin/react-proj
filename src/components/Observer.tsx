import { useGlobalContext } from "./GlobalContex";
import React, { useEffect, useMemo } from "react";


function setUpSectionName(id: string){
    return id.charAt(0).toUpperCase() + id.slice(1, id.length);
}


const Observer: React.FC = () => {
    const {setActiveSection, introRef, aboutRef, projectsRef } = useGlobalContext();

    
    const observedRefs = useMemo(() => [introRef, aboutRef, projectsRef], [introRef, aboutRef, projectsRef]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for(const ent of entries){
                    if(ent.isIntersecting){
                        console.log(setUpSectionName(ent.target.id))
                        setActiveSection(setUpSectionName(ent.target.id));
                    }
                }
            },
            {
             root: null,
             rootMargin: "0px",
             threshold: 0.5
            }
        );

        for(const ref of observedRefs){
            if(ref.current){
                observer.observe(ref.current);
            }
        }

        return () => {
            for(const ref of observedRefs){
                if(ref.current){
                    observer.unobserve(ref.current);
                }
            }
            observer.disconnect();
        }

    }, [observedRefs, setActiveSection]);

    return ( 
        <>
        </>
    );
}

export default Observer;
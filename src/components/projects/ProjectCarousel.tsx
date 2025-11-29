import React, { useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    const [enableAutoplay, setEnableAutoplay] = useState(false);

    useEffect(() => {
        // ✅ Activa autoplay solo si la pantalla es >= 768px
        const checkScreenSize = () => {
            setEnableAutoplay(window.innerWidth >= 768);
        };

        checkScreenSize(); // correr una vez
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Configuración del plugin (solo se crea si aplica)
    const autoplay = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
        })
    );

    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    dragFree: false,
                    inViewThreshold: 0.5,
                    duration: 25,
                }}
                // 👇 solo aplica el plugin si la pantalla es grande
                plugins={enableAutoplay ? [autoplay.current] : []}
                onMouseLeave={() => enableAutoplay && autoplay.current.reset()}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {projects.map((project) => (
                        <CarouselItem
                            key={project.id}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <ProjectCard project={project} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="flex justify-center gap-4 mt-8">
                    <CarouselPrevious className="relative inset-auto left-0 right-0 translate-x-0 translate-y-0 bg-primary hover:bg-primary/80 text-primary-foreground" />
                    <CarouselNext className="relative inset-auto left-0 right-0 translate-x-0 translate-y-0 bg-primary hover:bg-primary/80 text-primary-foreground" />
                </div>
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;

import { useEffect, useMemo, useState } from "react";
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
        const desktop = window.matchMedia("(min-width: 768px)");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateAutoplay = () => {
            setEnableAutoplay(desktop.matches && !reducedMotion.matches);
        };

        updateAutoplay();
        desktop.addEventListener("change", updateAutoplay);
        reducedMotion.addEventListener("change", updateAutoplay);
        return () => {
            desktop.removeEventListener("change", updateAutoplay);
            reducedMotion.removeEventListener("change", updateAutoplay);
        };
    }, []);

    const autoplay = useMemo(
        () => enableAutoplay ? Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
        }) : null,
        [enableAutoplay]
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
                plugins={autoplay ? [autoplay] : []}
                onMouseLeave={() => autoplay?.reset()}
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

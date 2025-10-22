'use client';
import { Book } from "@/types/types";
import {useEffect, useState} from "react";
import SliderControl from "@/app/(storefront)/components/Sliders/SliderControl";
import SliderItem from "@/app/(storefront)/components/Sliders/SliderItem";
import SliderDots from "@/app/(storefront)/components/Sliders/SliderDots";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface BestSellingSliderProps {
    books: Book[];
}

export default function BestSellingSlider({ books }: BestSellingSliderProps) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoSwipeInterval = 5000;

    const prev = () =>
    {
        setCurrent((c) => (c - 1 + books.length) % books.length);
        setDirection(-1);
    }
    const next = () => {
        setCurrent((c) => (c + 1) % books.length);
        setDirection(1);
    }

    useEffect(() => {
        if (isPaused) return;
        const timer = setTimeout(() => {
            next();
        }, autoSwipeInterval);

        return () => clearTimeout(timer); // clear and restart every slide change
    }, [current, isPaused]);

    const variants: Variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 150 : -150,
            opacity: 0,
        }),
        center: (dir: number) => ({
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        }),
        exit: (dir: number) => ({
            x: dir > 0 ? -150 : 150,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeIn" },
        }),
    };

    return (
        <div
            onMouseEnter={()  => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={'relative flex flex-col items-center w-screen px-24'}>
            <div className={'flex w-full overflow-hidden px-4 items-center justify-between'}>
                <SliderControl direction="left" onClick={prev} />
                <AnimatePresence custom={direction} mode={"popLayout"}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full flex justify-center"
                    >
                        <SliderItem book={books[current]} />
                    </motion.div>
                </AnimatePresence>
                <SliderControl direction="right" onClick={next}/>
            </div>
            <SliderDots count={books.length} active={current} setActive={setCurrent}/>
        </div>
    )
}
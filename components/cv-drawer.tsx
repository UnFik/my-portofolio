"use client";

import { motion, AnimatePresence, useDragControls, PanInfo } from "framer-motion";
import { X, Download, Paperclip } from "lucide-react";
import { useEffect, useState } from "react";

interface CVDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVDrawer = ({ isOpen, onClose }: CVDrawerProps) => {
    const [isFull, setIsFull] = useState(false);
    const controls = useDragControls();

    // Prevent scrolling when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleDragEnd = (event: any, info: PanInfo) => {
        const offset = info.offset.y;
        const velocity = info.velocity.y;

        // Dragged up (negative y)
        if (offset < -50 || velocity < -500) {
            setIsFull(true);
        }
        // Dragged down (positive y)
        else if (offset > 50 || velocity > 500) {
            if (isFull) {
                setIsFull(false);
            } else {
                onClose();
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer Container */}
                    <motion.div
                        drag="y"
                        dragControls={controls}
                        dragListener={false}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        initial={{ y: "100%" }}
                        animate={{ y: isFull ? "0%" : "10%" }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-x-0 bottom-0 z-50 h-[100dvh] flex justify-center pointer-events-none"
                    >
                        {/* Exam Board / Clipboard */}
                        <div className="relative w-full max-w-4xl h-full bg-[#8B5E3C] rounded-t-3xl shadow-2xl pointer-events-auto flex flex-col items-center pt-16 px-2 sm:px-6 pb-0 overflow-hidden border-t-8 border-[#6F4E37]">

                            {/* The Clip (Metal part) */}
                            <div
                                onPointerDown={(e) => controls.start(e)}
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-14 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl shadow-xl z-20 flex items-center justify-center border-b-4 border-gray-500 cursor-grab active:cursor-grabbing touch-none"
                            >
                                <div className="w-28 h-4 bg-black/20 rounded-full shadow-inner" />
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors z-30"
                            >
                                <X size={24} />
                            </button>

                            {/* Paper / Content Area */}
                            <div className="w-full h-full bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.1)] rounded-t-lg relative overflow-hidden flex flex-col">
                                {/* Header Actions */}
                                <div
                                    onPointerDown={(e) => controls.start(e)}
                                    className="flex justify-between items-center p-4 border-b bg-gray-50 cursor-grab active:cursor-grabbing touch-none"
                                >
                                    <h2 className="text-gray-800 font-bold text-lg flex items-center gap-2">
                                        <Paperclip className="w-5 h-5 text-gray-500" />
                                        Curriculum Vitae
                                    </h2>
                                    <a
                                        href="/file/Fikri Ilham Arifin-CV.pdf"
                                        download
                                        className="flex items-center gap-2 text-sm font-medium text-white bg-[#8B5E3C] hover:bg-[#6F4E37] px-4 py-2 rounded-md transition-colors"
                                    >
                                        <Download size={16} />
                                        Download PDF
                                    </a>
                                </div>

                                {/* PDF Viewer */}
                                <div className="flex-1 w-full h-full bg-gray-100 overflow-y-auto p-0 sm:p-4">
                                    <iframe
                                        src="/file/Fikri Ilham Arifin-CV.pdf"
                                        className="w-full h-full min-h-[500px] rounded shadow-sm bg-white"
                                        title="CV"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

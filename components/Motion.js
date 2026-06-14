'use client';
import { motion } from 'framer-motion';
export { motion };
export const fadeUp={initial:{opacity:0,y:22,filter:'blur(8px)'},whileInView:{opacity:1,y:0,filter:'blur(0px)'},viewport:{once:true,margin:'-80px'},transition:{duration:.7,ease:[.22,1,.36,1]}};

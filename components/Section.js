'use client';
import { motion, fadeUp } from './Motion';
export function Section({eyebrow,title,children,className=''}){return <motion.section {...fadeUp} className={`mx-auto max-w-7xl px-4 py-16 ${className}`}><div className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-6"><div><p className="font-mono text-xs uppercase tracking-[.35em] text-muted">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-.04em] md:text-5xl">{title}</h2></div></div>{children}</motion.section>}

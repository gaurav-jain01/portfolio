import { createContext, useContext, useState } from 'react';
import { motion, MotionConfig, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

const MotionPreferences = createContext({ reduced: false });
export const useMotionPreferences = () => useContext(MotionPreferences);

export function MotionProvider({ children }) {
  const systemReduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const reduced = Boolean(systemReduced || paused);
  return (
    <MotionPreferences.Provider value={{ reduced, paused, systemReduced, toggle: () => setPaused(value => !value) }}>
      <MotionConfig reducedMotion={reduced ? 'always' : 'never'} transition={{ duration: reduced ? 0 : 0.5 }}>
        <div data-motion={reduced ? 'off' : 'on'}>{children}</div>
      </MotionConfig>
    </MotionPreferences.Provider>
  );
}

export function Reveal({ children, className = '', delay = 0 }) {
  const { reduced } = useMotionPreferences();
  return (
    <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function MagneticLink({ children, className = '', ...props }) {
  const { reduced } = useMotionPreferences();
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.a {...props} className={className} style={{ x: reduced ? 0 : x, y: reduced ? 0 : y }}
      onPointerMove={event => {
        if (reduced || event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.13);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.2);
      }} onPointerLeave={reset} onBlur={reset} whileTap={reduced ? undefined : { scale: 0.97 }}>
      {children}
    </motion.a>
  );
}

export function Tilt({ children, className = '' }) {
  const { reduced } = useMotionPreferences();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerX, { stiffness: 140, damping: 20 });
  const rotateY = useSpring(pointerY, { stiffness: 140, damping: 20 });
  return (
    <motion.div className={className} style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformPerspective: 1000 }}
      onPointerMove={event => {
        if (reduced || event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 8);
        pointerY.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
      }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      {children}
    </motion.div>
  );
}

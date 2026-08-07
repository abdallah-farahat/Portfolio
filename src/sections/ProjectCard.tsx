import { motion, useTransform, type MotionValue } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import type { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export default function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  // Each card shrinks while the following cards slide over it
  const start = index / totalCards;
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div
      className="h-[85vh] sm:h-screen flex items-start sm:items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, top: `${index * 26}px` }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 mt-20 sm:mt-0"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="relative z-20 cursor-pointer">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom row - image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
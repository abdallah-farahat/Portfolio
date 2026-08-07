import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit relative" style={{ overflowX: 'clip' }}>
      {/* مؤشر الماوس المخصص للموقع */}
      <CustomCursor />
      
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
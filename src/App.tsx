import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  ChevronRight,
  Star,
  Zap,
  Plus,
  Minus,
  Info,
  Menu,
  X,
  Instagram
} from 'lucide-react';
import { SPEAKERS, SCHEDULE, TESTIMONIALS, PROMISES, Speaker, DaySchedule } from './types';

const SocialProofBar = () => {
  const [index, setIndex] = useState(0);
  const messages = [
    "Ingressos LIBERADOS"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brand-accent text-brand-primary py-1.5 px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center relative overflow-hidden h-8 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const StickyPurchaseBar = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden p-4 bg-brand-primary border-t border-white/10">
    <a
      href="#planos"
      className="w-full py-4 bg-brand-accent text-brand-primary font-bold text-center block uppercase tracking-widest"
    >
      Garantir Minha Vaga
    </a>
  </div>
);

const Countdown = ({ compact = false }: { compact?: boolean }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const targetDate = new Date('2026-05-15T09:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (compact) {
    return (
      <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20">
        <Clock size={12} className="text-brand-accent" />
        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent">
          <span>{timeLeft.days}D</span>
          <span>{timeLeft.hours}H</span>
          <span>{timeLeft.minutes}M</span>
        </div>
      </div>
    );
  }

  return (
        <div className="flex gap-1 md:gap-4">
          {[
            { label: 'Dias', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
          ].map((item, i) => (
            <div key={i} className="text-center w-12 h-12 md:w-20 md:h-20 border border-brand-accent/20 flex flex-col items-center justify-center bg-brand-accent/5">
              <div className="text-sm md:text-2xl font-display font-bold text-brand-accent mb-0.5 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[6px] md:text-[9px] font-bold uppercase tracking-widest text-brand-lavender/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-20 text-center">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-brand-accent font-display text-sm tracking-[0.3em] mb-4 block uppercase"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-7xl font-display font-bold leading-tight text-brand-lavender max-w-4xl mx-auto"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      className="h-1 bg-brand-accent mx-auto mt-8"
    />
  </div>
);

const Banner = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full py-3 bg-brand-accent text-brand-primary text-center font-display font-bold text-sm tracking-widest overflow-hidden relative uppercase ${className}`}>
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="whitespace-nowrap flex gap-12"
    >
      {Array(10).fill(0).map((_, i) => (
        <span key={i} className="flex items-center gap-4">
          {children} <Star size={14} className="fill-brand-primary" />
        </span>
      ))}
    </motion.div>
  </div>
);

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 glass-card overflow-hidden">
      <motion.button 
        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center font-display font-bold text-lg text-left transition-colors"
      >
        {q}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus size={20} className="text-brand-accent" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-brand-lavender/60 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SpeakerModal = ({ speaker, isOpen, onClose }: { speaker: Speaker; isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-brand-primary border border-white/10 overflow-hidden glass-card max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-brand-accent text-brand-primary hover:bg-brand-lavender transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[3/4] md:aspect-auto h-full overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-brand-accent text-sm font-bold tracking-[0.3em] mb-4 uppercase">{speaker.role}</p>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-lavender">{speaker.name}</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-brand-accent text-[10px] font-bold tracking-widest mb-2 uppercase">Especialidade</p>
                    <p className="text-xl text-brand-lavender font-medium leading-tight">{speaker.lecture}</p>
                  </div>
                  
                  <div>
                    <p className="text-brand-accent text-[10px] font-bold tracking-widest mb-2 uppercase">Currículo</p>
                    <p className="text-brand-lavender/70 leading-relaxed text-lg">
                      {speaker.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 text-xs font-bold text-brand-accent uppercase tracking-widest">Referência Nacional</div>
                    <div className="px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 text-xs font-bold text-brand-accent uppercase tracking-widest">Master Trainer</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#cronograma"
                      onClick={onClose}
                      className="flex-1 px-6 py-4 bg-brand-accent text-brand-primary font-bold text-sm uppercase tracking-widest text-center flex items-center justify-center gap-2"
                    >
                      Ver Palestras <ArrowRight size={16} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#cronograma"
                      onClick={onClose}
                      className="flex-1 px-6 py-4 border border-brand-accent text-brand-accent font-bold text-sm uppercase tracking-widest text-center flex items-center justify-center gap-2"
                    >
                      Ver Workshops <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative bg-brand-accent/5 border border-white/5 overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
          <img 
            src={speaker.image} 
            alt={speaker.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-500 bg-gradient-to-t from-brand-primary to-transparent">
          <p className="text-brand-accent text-xs font-bold tracking-widest mb-2 uppercase">{speaker.role}</p>
          <h3 className="text-3xl font-display font-bold mb-4 text-brand-lavender">{speaker.name}</h3>
          
          <motion.button 
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-brand-accent text-sm font-bold hover:text-brand-beige transition-colors group/btn"
          >
            <Plus size={16} />
            Ver currículo completo
            <ChevronRight size={14} />
          </motion.button>
        </div>
      </motion.div>
      <SpeakerModal speaker={speaker} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/5543999955954?text=Olá! Gostaria de saber mais sobre o Edição Pilates.";

  return (
    <div className="min-h-screen bg-brand-primary overflow-x-hidden text-brand-lavender selection:bg-brand-accent selection:text-brand-primary">
      <StickyPurchaseBar />
      {/* Background Grid & Animated Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent/5 animate-gradient-slow" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-beige/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="fixed top-0 w-full z-[100]">
        <SocialProofBar />
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full z-60 border-b border-white/5 bg-brand-primary/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="font-display font-bold text-2xl md:text-3xl tracking-tighter group cursor-pointer">
              <img src="/logo-completo.svg" alt="Edição Pilates" className="h-8 md:h-10" />
            </div>
            <Countdown compact />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12 text-sm font-bold tracking-widest">
            {['palestrantes', 'cronograma', 'planos', 'faq'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-brand-accent transition-all duration-300 uppercase relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand-accent text-brand-primary font-bold rounded-none hover:shadow-[0_0_30px_rgba(203,255,137,0.4)] transition-all uppercase"
            >
              inscrever-se
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-accent hover:text-brand-lavender transition-colors"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-brand-primary border-b border-white/10 p-8 space-y-8 backdrop-blur-2xl"
            >
              {['palestrantes', 'cronograma', 'planos', 'faq'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl font-display font-bold hover:text-brand-accent transition-colors uppercase"
                >
                  {item}
                </a>
              ))}
              <motion.a 
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                className="block w-full py-5 bg-brand-accent text-brand-primary font-bold text-center text-lg uppercase"
              >
                inscrever-se agora
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-20 md:pt-80 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/efeito-pilates-4.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="flex flex-col items-center gap-8 mb-12">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-2 border border-brand-accent/20 text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase bg-brand-accent/5 backdrop-blur-sm"
              >
                Experiência de Excelência
              </motion.span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight text-brand-lavender">
                A Evolução <br />
                <span className="text-brand-lavender">do Movimento</span>
              </h1>
            </div>

            <div className="flex justify-center mb-16">
              <div className="bg-white/[0.02] border border-white/5 p-6 glass-card max-w-sm w-full backdrop-blur-2xl relative group flex flex-col items-center">
                <div className="absolute -inset-0.5 bg-brand-accent/20 blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-full flex flex-col items-center">
                  <p className="text-[8px] font-bold tracking-[0.4em] text-brand-accent/60 uppercase mb-4 text-center">O evento começa em</p>
                  <Countdown />
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-brand-lavender/50 font-light leading-relaxed mb-12">
                Três dias de imersão profunda com as maiores referências do Pilates nacional. 
                Onde a técnica encontra a ciência em um ambiente de alto padrão.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#planos"
                  className="px-16 py-6 bg-brand-accent text-brand-primary font-bold text-sm tracking-[0.2em] flex items-center justify-center gap-4 group hover:shadow-[0_20px_40px_rgba(203,255,137,0.2)] transition-all uppercase"
                >
                  Garantir minha vaga
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.a>
                <span className="text-brand-lavender/30 text-[10px] font-bold tracking-[0.3em] flex items-center gap-3 uppercase">
                  <MapPin size={14} className="text-brand-accent" /> Londrina, PR
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-brand-accent/[0.03] rounded-full pointer-events-none"
        />
      </section>

      <Banner className="bg-brand-accent text-brand-primary border-y border-white/5">
        Inscreva-se agora e ganhe acesso ao kit digital exclusivo • Pilates clássico • Biomecânica • Performance
      </Banner>

      {/* About Section - Mission (Premium Version) */}
      <section id="sobre" className="relative py-40 md:py-72 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/edicao-pilates-foto3.jpeg" 
            alt="Pilates Professional Environment" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto 1 */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-20"
              >
                <span className="text-brand-accent font-display text-[10px] tracking-[0.4em] uppercase mb-6 block">O Evento</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-brand-lavender mb-8">
                  Pra quem busca <br /> o <span className="text-brand-accent">topo</span>
                </h2>
                <p className="text-lg text-brand-lavender/60 leading-relaxed">
                  A <span className="text-brand-accent font-bold">Edição Pilates</span> não é apenas mais um evento técnico. É um manifesto para profissionais que se recusam a ser medíocres.
                </p>
              </motion.div>
            </div>

            {/* Foto (Central com Eixo Z) */}
            <div className="lg:col-span-4 relative flex justify-center items-center py-20 lg:py-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 w-full aspect-[3/4] max-w-[320px] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src="/edicao-pilates-foto12.jpeg" 
                  alt="Pilates Professional" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
              </motion.div>

              {/* Elemento Animado em Looping */}
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -z-10 w-[140%] h-[140%] border border-brand-accent/10 rounded-full flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-brand-accent rounded-full absolute top-0" />
              </motion.div>
              
              {/* Floating Card (Eixo Z) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -right-10 lg:-right-20 z-30 p-8 bg-brand-accent text-brand-primary font-display font-bold text-xl max-w-[200px] shadow-2xl"
              >
                Excelência em cada detalhe.
              </motion.div>
            </div>

            {/* Texto 2 */}
            <div className="lg:col-span-4 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-xl md:text-2xl text-brand-lavender font-light leading-relaxed">
                  Nosso objetivo é fundir a <span className="text-brand-beige font-medium">tradição do método</span> com a <span className="text-brand-beige font-medium">ciência do movimento moderno</span>.
                </p>
                <div className="h-px w-20 bg-brand-accent/40" />
                <p className="text-brand-lavender/50 leading-relaxed">
                  Entregamos ferramentas práticas e estratégicas para você dominar o mercado e se posicionar como uma autoridade de alto valor.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises Section (Redesigned) */}
      <section className="relative py-40 md:py-64 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/efeito-pilates-1.png" 
            alt="Pilates Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-transparent" />
        </div>
        
        {/* Rotating Seal Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-2 border-dashed border-brand-accent rounded-full flex items-center justify-center"
          >
            <div className="w-[80%] h-[80%] border border-brand-accent rounded-full" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              A Jornada da Excelência
            </div>

            <p className="text-3xl md:text-5xl font-display font-bold leading-tight text-brand-lavender">
              Uma experiência desenhada para sua <span className="text-brand-accent">transformação técnica</span>, garantindo o <span className="text-brand-accent">reconhecimento</span> que você merece dentro de uma <span className="text-brand-accent">comunidade forte</span> e exclusiva.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-12">
              {[
                { label: 'Transformação' },
                { label: 'Reconhecimento' },
                { label: 'Comunidade' },
                { label: 'Networking' },
                { label: 'Autoridade' },
                { label: 'Performance' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender/40 group-hover:text-brand-accent transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Audience */}
      <section className="py-24 md:py-40 px-6 bg-brand-primary border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-accent mb-6">Um evento pensado para profissionais como você</h3>
              <p className="text-brand-lavender/60 leading-relaxed text-lg">
                O evento promete unir dois públicos em sintonia: profissionais capacitados e experimentados no mercado a um público de profissionais que buscam por inteligência de mercado, gerar autoridade e buscam conhecimento aplicável. Essa troca acontecerá em um formato de imersão de 3 dias. Se você é um destes, este evento foi feito para você.
              </p>
              <div className="h-1 w-20 bg-brand-accent mt-8 mx-auto lg:mx-0" />
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Fisioterapeutas", desc: "Que buscam protocolos de reabilitação baseados em evidência e movimento." },
                { title: "Educadores Físicos", desc: "Focados em performance, condicionamento e biomecânica aplicada." },
                { title: "Donos de Estúdio", desc: "Que desejam elevar o padrão técnico e comercial de seus negócios." },
                { title: "Estudantes", desc: "Que querem começar a carreira bebendo direto da fonte das maiores referências." },
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/10 glass-card hover:border-brand-accent/30 transition-all duration-500 group">
                  <div className="w-10 h-10 bg-brand-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-brand-accent" size={20} />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-2 text-brand-lavender group-hover:text-brand-accent transition-colors">{item.title}</h4>
                  <p className="text-sm text-brand-lavender/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Image Banner */}
      <section className="w-full h-[30vh] md:h-[50vh] overflow-hidden relative">
        <img 
          src="/efeito-pilates-3.png" 
          alt="Pilates Objectives Banner" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* About Section - Objectives */}
      <section className="py-32 md:py-56 px-6 bg-brand-primary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/4 w-full h-full bg-brand-accent rounded-full blur-[150px]"
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <SectionTitle subtitle="Objetivos">O Que Você Vai Conquistar</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {[
              { title: "Domínio Técnico", desc: "Aprenda a biomecânica real por trás de cada exercício e como adaptá-la para cada aluno.", icon: CheckCircle2 },
              { title: "Networking de Elite", desc: "Conecte-se com os maiores nomes do Pilates e crie oportunidades reais de carreira.", icon: MessageCircle },
              { title: "Diferenciação", desc: "Saia do evento com um selo de excelência que o posiciona no topo do mercado.", icon: Info },
            ].map((obj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative group"
              >
                <div className="mb-10 relative">
                  <div className="w-24 h-24 bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center relative z-10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500">
                    <obj.icon size={40} />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border border-brand-accent/10 -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                </div>
                <h4 className="text-3xl font-display font-bold mb-6 text-brand-lavender group-hover:text-brand-accent transition-colors uppercase tracking-tight">{obj.title}</h4>
                <p className="text-brand-lavender/60 leading-relaxed text-lg">{obj.desc}</p>
                
                {/* Visual Graphic Element */}
                <div className="mt-8 h-1 w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, delay: i * 0.3 }}
                    className="h-full w-full bg-brand-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Pilares do Movimento */}
      <section className="py-32 md:py-56 px-6 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/[0.01] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-brand-accent rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-accent/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <SectionTitle subtitle="essência">Os Pilares do Movimento</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { image: "/edicao-pilates-foto9.jpeg", title: "Conexão", desc: "A integração total entre mente e corpo." },
              { image: "/edicao-pilates-foto16.jpeg", title: "Equilíbrio", desc: "A harmonia entre força e flexibilidade." },
              { image: "/edicao-pilates-foto1.jpeg", title: "Evolução", desc: "O aprimoramento constante da técnica." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[3/4] overflow-hidden border border-white/10"
              >
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-3xl font-display font-bold text-brand-lavender mb-2 uppercase tracking-widest">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-lavender/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="palestrantes" className="py-40 md:py-64 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-white/[0.01] whitespace-nowrap pointer-events-none uppercase select-none">
          Expertise • Expertise • Expertise
        </div>
        <div className="max-w-7xl mx-auto relative">
          <SectionTitle subtitle="Expertise">Palestrantes Confirmadas</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {SPEAKERS.map((speaker, index) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-24 md:py-40 px-6 bg-brand-accent/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Workshops e palestras">Desenvolvimento e Crescimento Profissional</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker, i) => (
              <React.Fragment key={i}>
                {/* Workshop Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-brand-primary border border-white/10 overflow-hidden glass-card"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                    src={i === 0 ? "/edicao-pilates-foto10.jpeg" : i === 1 ? "/edicao-pilates-foto12.jpeg" : "/edicao-pilates-foto16.jpeg"}
                    alt={speaker.workshop}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                    <div className="absolute inset-0 bg-brand-primary/40" />
                    <div className="absolute top-4 left-4 bg-brand-accent text-brand-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      Workshop Prático
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-display font-bold mb-4 text-brand-lavender group-hover:text-brand-accent transition-colors">
                      {speaker.workshop}
                    </h4>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-accent/30">
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">Ministrado por</p>
                        <p className="text-sm font-medium text-brand-lavender/60">{speaker.name}</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-lavender/50 leading-relaxed mb-8">
                      Uma imersão prática focada em resultados imediatos e domínio de ferramentas avançadas.
                    </p>
                  </div>
                </motion.div>

                {/* Lecture Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 3) * 0.1 }}
                  className="group relative bg-brand-primary border border-white/10 overflow-hidden glass-card"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                    src={i === 0 ? "/edicao-pilates-foto1.jpeg" : i === 1 ? "/edicao-pilates-foto9.jpeg" : "/edicao-pilates-foto12.jpeg"}
                    alt={speaker.lecture}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                    <div className="absolute inset-0 bg-brand-primary/40" />
                    <div className="absolute top-4 left-4 bg-brand-accent text-brand-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      Palestra Magna
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-display font-bold mb-4 text-brand-lavender group-hover:text-brand-accent transition-colors">
                      {speaker.lecture}
                    </h4>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-accent/30">
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">Apresentado por</p>
                        <p className="text-sm font-medium text-brand-lavender/60">{speaker.name}</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-lavender/50 leading-relaxed mb-8">
                      Insights estratégicos e visão de futuro para elevar seu posicionamento no mercado.
                    </p>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="cronograma" className="py-24 px-6 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <SectionTitle subtitle="Programação">Cronograma do Evento</SectionTitle>

          <div className="grid grid-cols-3 gap-2 mb-12 justify-center">
            {SCHEDULE.map((day, index) => {
              const dayNumber = day.date.split(' ')[0];
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveDay(index)}
                  className={`w-20 h-20 font-display transition-all relative overflow-hidden group flex flex-col items-center justify-center ${
                    activeDay === index 
                      ? 'bg-brand-accent text-brand-primary' 
                      : 'bg-white/5 text-brand-lavender/60 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl font-bold leading-none mb-1 relative z-10">{dayNumber}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-60 relative z-10">{day.label}</span>
                  {activeDay === index && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-brand-accent -z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              {SCHEDULE[activeDay].items.map((item, idx) => (
                <motion.div 
                  key={`${activeDay}-${idx}`}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex flex-col sm:flex-row gap-6 p-6 border border-white/5 transition-all duration-300 glass-card group"
                >
                  <div className="flex sm:flex-col items-center justify-center min-w-[100px] sm:border-r border-white/10 gap-2">
                    <span className="font-display font-bold text-2xl tracking-tighter">{item.time}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 uppercase ${
                        item.type === 'palestra' ? 'bg-brand-accent/20 text-brand-accent' :
                        item.type === 'workshop' ? 'bg-brand-accent/10 text-brand-lavender' :
                        'bg-white/10 text-brand-lavender/40'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-bold group-hover:text-brand-accent transition-colors">{item.title}</h4>
                    {item.speaker && (
                      <p className="text-brand-lavender/40 text-xs font-medium mt-1">
                        Com {item.speaker}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <div className="sticky top-32 p-12 border border-brand-accent/20 bg-brand-accent/5 overflow-hidden">
                <img src="/icone.svg" className="absolute -top-10 -right-10 text-brand-accent w-64 h-64 rotate-12 opacity-10" alt="Icone" />
                <h3 className="text-3xl font-display font-bold mb-8 relative uppercase tracking-tight">Destaques do Dia</h3>
                <ul className="space-y-8 relative">
                  {SCHEDULE[activeDay].highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-5">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-brand-accent" />
                      </div>
                      <p className="text-brand-lavender/70 leading-relaxed">{highlight}</p>
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink}
                  className="mt-12 w-full py-4 px-6 bg-brand-accent text-brand-primary font-bold text-center block uppercase tracking-widest hover:shadow-[0_0_20px_rgba(203,255,137,0.3)] transition-all"
                >
                  Quero me tornar uma autoridade
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Banner className="bg-brand-accent text-brand-primary">
        Últimas vagas para o ingresso VIP • Almoço exclusivo • Kit premium • Networking de elite
      </Banner>

      {/* Testimonials Section */}
      <section className="py-32 md:py-56 bg-brand-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <SectionTitle subtitle="Depoimentos">Quem Já Viveu a Experiência</SectionTitle>
        </div>

        <div className="space-y-6">
          {/* Row 1 - Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, -1920] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[400px] p-6 sm:p-8 bg-brand-accent/[0.03] border border-white/5 glass-card shrink-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/20">
                      <span className="text-brand-accent font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="whitespace-normal">
                      <h4 className="font-display font-bold text-brand-lavender">{testimonial.name}</h4>
                      <p className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-brand-lavender/60 text-sm leading-relaxed italic whitespace-normal">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [-1920, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].reverse().map((testimonial, i) => (
                <div 
                  key={i}
                  className="w-[280px] sm:w-[400px] p-6 sm:p-8 bg-brand-accent/[0.03] border border-white/5 glass-card shrink-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/20">
                      <span className="text-brand-accent font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="whitespace-normal">
                      <h4 className="font-display font-bold text-brand-lavender">{testimonial.name}</h4>
                      <p className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-brand-lavender/60 text-sm leading-relaxed italic whitespace-normal">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 md:py-40 px-6 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center mb-16 text-center">
            <SectionTitle subtitle="Investimento">Escolha seu acesso</SectionTitle>
            <div className="px-6 py-2 border border-brand-accent text-brand-accent font-display font-bold text-sm uppercase tracking-[0.2em] -mt-8">
              Lote 01 - Lançamento
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Regular Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 border border-white/10 glass-card flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">Ingresso Comum</h3>
                <p className="text-brand-lavender/40 text-sm">Acesso completo aos 3 dias de evento</p>
              </div>
              
              <div className="mb-8">
                <span className="text-brand-lavender/40 line-through text-lg">R$ 1.199</span>
                <div className="flex items-baseline">
                  <span className="text-5xl font-display font-bold">R$ 989</span>
                  <span className="text-brand-lavender/40 ml-2">à vista</span>
                </div>
                <p className="text-brand-accent text-sm mt-2">ou 12x de R$ 99,90</p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-sm text-brand-lavender/70">
                  <CheckCircle2 size={18} className="text-brand-accent" /> Acesso a todas as palestras
                </li>
                <li className="flex items-center gap-3 text-sm text-brand-lavender/70">
                  <CheckCircle2 size={18} className="text-brand-accent" /> Participação nos workshops
                </li>
                <li className="flex items-center gap-3 text-sm text-brand-lavender/70">
                  <CheckCircle2 size={18} className="text-brand-accent" /> Certificado digital
                </li>
              </ul>

              <motion.a 
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border border-white/20 hover:bg-brand-accent hover:text-brand-primary transition-all text-center font-bold tracking-widest hover:shadow-[0_0_20px_rgba(203,255,137,0.1)] uppercase"
              >
                Selecionar Plano
              </motion.a>
            </motion.div>

            {/* Duplo Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 border-2 border-brand-accent bg-brand-accent/5 relative overflow-hidden flex flex-col group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
              
              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-display font-bold">Ingresso Duplo</h3>
                  <Star size={20} className="text-brand-accent fill-brand-accent" />
                </div>
                <p className="text-brand-lavender/40 text-sm">Desconto especial comprando 2 ingressos</p>
              </div>
              
              <div className="mb-8 relative z-10">
                <div className="flex items-baseline">
                  <span className="text-2xl font-display font-bold text-brand-accent">Consulte condições</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow relative z-10">
                <li className="flex items-center gap-3 text-sm text-brand-lavender/70">
                  <CheckCircle2 size={18} className="text-brand-accent" /> Tudo do ingresso comum (x2)
                </li>
                <li className="flex items-center gap-3 text-sm text-brand-lavender/70 font-bold">
                  <CheckCircle2 size={18} className="text-brand-accent" /> Assento nas primeiras fileiras
                </li>
              </ul>

              <motion.a 
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-brand-accent text-brand-primary hover:bg-brand-accent/80 transition-all text-center font-bold tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(203,255,137,0.3)] uppercase relative z-10"
              >
                Quero o Duplo <ChevronRight size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 md:py-48 px-6 bg-brand-primary border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="FAQ">Perguntas Frequentes</SectionTitle>
          <div className="space-y-6">
            {[
              { q: "O evento oferece certificado?", a: "Sim, todos os participantes receberão um certificado digital de 24 horas complementares, válido em todo o território nacional." },
              { q: "Onde será realizado o evento?", a: "O evento acontecerá no Anfiteatro da Unimed, na Gleba Palhano em Londrina - PR, um espaço moderno e confortável." },
              { q: "Posso parcelar o ingresso?", a: "Sim, oferecemos parcelamento em até 12x no cartão de crédito através da nossa plataforma segura de pagamentos." },
              { q: "O almoço está incluso?", a: "O almoço está incluso apenas para os ingressos VIP e Elite Experience. Para o ingresso comum, oferecemos coffee breaks de alta qualidade." },
              { q: "Existe desconto para grupos?", a: "Sim! Garanta um incrível desconto comprando 2 ingressos juntos, oferecemos condições especiais. Entre em contato via WhatsApp para saber mais." },
            ].map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle subtitle="contato">Ainda tem Dúvidas?</SectionTitle>
            <p className="text-xl text-brand-lavender/60 mb-12">
              Nossa equipe está pronta para te atender e tirar todas as suas dúvidas sobre o evento, 
              hospedagem e formas de pagamento.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#25D366] text-white font-bold text-xl rounded-none hover:bg-white hover:text-[#25D366] transition-all group hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] uppercase"
            >
              <MessageCircle size={28} />
              Falar no WhatsApp
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section id="localizacao" className="py-24 px-6 bg-brand-accent/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Localização">Como Chegar</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 border border-white/10 glass-card">
                <h4 className="text-brand-accent font-display font-bold mb-2 uppercase">Endereço</h4>
                <p className="text-brand-lavender/70">Anfiteatro da Unimed, Gleba Palhano<br />Londrina - PR</p>
              </div>
              <div className="p-6 border border-white/10 glass-card">
                <h4 className="text-brand-accent font-display font-bold mb-2 uppercase">Hospedagem</h4>
                <p className="text-brand-lavender/70">Temos parcerias com hotéis próximos para garantir tarifas exclusivas aos congressistas.</p>
              </div>
            </div>
            <div className="lg:col-span-2 aspect-video border border-white/10 overflow-hidden grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.823456789012!2d-51.1890123!3d-23.3345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43567890abcd%3A0x1234567890abcdef!2sUnimed%20Londrina%20-%20Sede%20Administrativa!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-brand-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
            <div className="space-y-6">
              <img src="/logo-completo.svg" alt="Edição Pilates" className="h-12" />
              <p className="text-brand-lavender/40 text-sm leading-relaxed max-w-xs">
                O maior encontro de profissionais de Pilates do Sul do Brasil. Técnica, ciência e networking de alto nível.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-brand-accent font-display font-bold text-sm uppercase tracking-widest">Informações Legais</h4>
              <p className="text-[10px] text-brand-lavender/30 leading-relaxed uppercase tracking-wider">
                A organização reserva-se o direito de realizar correções de informações, preços e disponibilidade sem aviso prévio. Os palestrantes confirmados podem sofrer alterações por motivos de força maior. Todas as transações são protegidas por criptografia de ponta a ponta.
              </p>
            </div>

            <div className="flex md:justify-end gap-6">
              <motion.a 
                whileHover={{ scale: 1.1, color: "#cbff89" }}
                href="https://www.instagram.com/edicaopilates/" 
                className="text-brand-lavender/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, color: "#25D366" }}
                href={whatsappLink} 
                className="text-brand-lavender/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </motion.a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-brand-lavender/20 text-[10px] uppercase tracking-[0.2em]">
              © 2026 Edição Pilates. Todos os direitos reservados.
            </div>
            <div className="text-brand-lavender/20 text-[10px] uppercase tracking-[0.2em]">
              Desenvolvido para profissionais de elite.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

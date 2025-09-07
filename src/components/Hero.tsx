import { Phone, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Diyetisyen
              <br />
              <span className="text-primary-light">Ayşe Kaya</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-4 font-medium">
              Klinik Beslenme Uzmanı
            </p>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              10 yıllık deneyimle sağlıklı yaşam tarzınızı desteklemek, 
              kişiselleştirilmiş beslenme planları ile hedeflerinize ulaşmanızı sağlamak için buradayım.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-cta text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Randevu Al
              </Button>
              <Button variant="outline" size="lg" className="btn-outline-cta text-lg px-8 py-4 !text-white !border-white hover:!bg-white hover:!text-primary">
                <Download className="w-5 h-5 mr-2" />
                CV İndir
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80">Mutlu Danışan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-white/80">Yıl Deneyim</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/80">Başarı Oranı</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-card">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary-light to-primary overflow-hidden">
                  {/* Placeholder for professional photo */}
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-6xl font-light">AK</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-light/30 rounded-full backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { GraduationCap, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Eğitim",
      description: "Hacettepe Üniversitesi Beslenme ve Diyetetik Bölümü mezunu, yüksek lisans tamamladı."
    },
    {
      icon: Award,
      title: "Sertifikalar",
      description: "Sporcu Beslenmesi, Çocuk Beslenmesi ve Klinik Beslenme sertifikaları."
    },
    {
      icon: Users,
      title: "Deneyim",
      description: "500'den fazla danışana bireysel beslenme programı hazırlama deneyimi."
    },
    {
      icon: Heart,
      title: "Uzmanlık",
      description: "Obezite, diyabet, kalp hastalıkları ve sporcu beslenmesi konularında uzman."
    }
  ];

  const timeline = [
    {
      year: "2024 - Günümüz",
      title: "Klinik Beslenme Uzmanı",
      description: "Özel pratikte bireysel danışmanlık ve online beslenme koçluğu."
    },
    {
      year: "2020 - 2024",
      title: "Hastane Diyetisyeni",
      description: "Acıbadem Hastanesi'nde klinik beslenme uzmanı olarak görev aldı."
    },
    {
      year: "2018 - 2020",
      title: "Yüksek Lisans",
      description: "İstanbul Üniversitesi'nde Beslenme Bilimleri alanında yüksek lisans."
    },
    {
      year: "2014 - 2018",
      title: "Lisans Eğitimi",
      description: "Hacettepe Üniversitesi Beslenme ve Diyetetik Bölümü."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hakkımda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sağlıklı yaşam konusundaki tutkum ve bilimsel yaklaşımımla, 
            her danışanıma özel çözümler sunarak onların yaşam kalitesini artırmayı hedefliyorum.
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <Card className="card-professional max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Merhaba! Ben Diyetisyen Ayşe Kaya. 10 yılı aşkın süredir beslenme ve sağlıklı yaşam alanında 
                çalışıyorum. Hacettepe Üniversitesi Beslenme ve Diyetetik Bölümü'nden mezun olduktan sonra, 
                İstanbul Üniversitesi'nde yüksek lisansımı tamamladım.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Beslenme planlarımı hazırlarken sadece kiloları değil, danışanlarımın yaşam tarzını, 
                alışkanlıklarını ve hedeflerini de göz önünde bulundururum. Amacım, sürdürülebilir 
                ve sağlıklı yaşam tarzı değişiklikleri yaratmaktır.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Uzmanlık alanlarım arasında obezite tedavisi, diyabet yönetimi, sporcu beslenmesi 
                ve çocuk beslenmesi yer alıyor. Her yaştan danışana hitap eden kişiselleştirilmiş 
                programlar hazırlıyorum.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Uzmanlık Alanları
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-professional hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Kariyer Yolculuğu
          </h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <div className="text-lg font-semibold text-primary">
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-1.5 relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30"></div>
                  )}
                </div>
                <div className="flex-1 pl-8">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
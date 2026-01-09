import { Scale, Dumbbell, Baby, Globe, Heart, Users, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Kilo Yönetimi",
      description: "Sağlıklı kilo verme ve kilo alma programları. Metabolizmanızı hızlandıran, sürdürülebilir beslenme planları.",
      features: ["Kişiselleştirilmiş beslenme planı", "Haftalık takip", "Metabolizma analizi", "Yaşam tarzı koçluğu"]
    },
    {
      icon: Dumbbell,
      title: "Sporcu Beslenmesi",
      description: "Performansınızı artıran, antrenman öncesi ve sonrası beslenme stratejileri. Profesyonel sporcu desteği.",
      features: ["Antrenman bazlı beslenme", "Takviye önerileri", "Performans analizi", "Yarışma hazırlığı"]
    },
    {
      icon: Baby,
      title: "Çocuk Beslenmesi",
      description: "0-18 yaş arası çocuklar için büyüme ve gelişimi destekleyen sağlıklı beslenme programları.",
      features: ["Yaş gruplarına özel menüler", "Büyüme takibi", "Aile eğitimi", "Beslenme alışkanlıkları"]
    },
    {
      icon: Heart,
      title: "Hastalık Yönetimi",
      description: "Diyabet, hipertansiyon, kalp hastalıkları gibi kronik hastalıklarda tıbbi beslenme tedavisi.",
      features: ["Tıbbi beslenme tedavisi", "Doktor koordinasyonu", "Laboratuvar takibi", "İlaç-besin etkileşimi"]
    },
    {
      icon: Globe,
      title: "Online Danışmanlık",
      description: "Dünyanın her yerinden erişebileceğiniz online beslenme danışmanlığı ve sürekli destek.",
      features: ["Video görüşme", "WhatsApp desteği", "Dijital beslenme planı", "7/24 erişim"]
    },
    {
      icon: Users,
      title: "Grup Eğitimleri",
      description: "Kurumsal beslenme eğitimleri, seminerler ve grup danışmanlıkları. Toplumsal sağlık programları.",
      features: ["Kurumsal eğitimler", "Seminer organizasyonu", "Grup danışmanlığı", "Sağlık taramaları"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hizmetlerim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Her yaştan danışanıma özel, bilimsel temelli beslenme programları hazırlıyor,
            sağlıklı yaşam tarzı alışkanlıkları kazanmanızda size rehberlik ediyorum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-professional hover:shadow-card transition-all duration-300 group h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full btn-outline-cta">
                  Detayları Gör
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Hangi Hizmete İhtiyacınız Var?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Size en uygun beslenme programını belirlemek için ücretsiz ön değerlendirme
            randevusu alabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp İletişim
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
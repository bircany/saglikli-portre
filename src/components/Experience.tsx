import { Download, Award, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      period: "2024 - Günümüz",
      title: "Klinik Beslenme Uzmanı - Özel Pratik",
      description: "Kişiselleştirilmiş beslenme danışmanlığı ve online koçluk hizmetleri. 500+ başarılı danışan.",
      responsibilities: [
        "Bireysel beslenme planları hazırlama",
        "Online danışmanlık platformu yönetimi",
        "Grup eğitimleri ve seminerler",
        "Kurumsal beslenme danışmanlığı"
      ]
    },
    {
      period: "2020 - 2024",
      title: "Klinik Diyetisyen - Acıbadem Hastanesi",
      description: "Yatan hasta takibi, tıbbi beslenme tedavisi ve multidisipliner hasta bakımı.",
      responsibilities: [
        "Hastane içi beslenme protokolleri",
        "Tıbbi beslenme tedavisi planları",
        "Hasta ve hasta yakını eğitimleri",
        "Klinik araştırma projeleri"
      ]
    },
    {
      period: "2018 - 2020",
      title: "Araştırma Görevlisi - İstanbul Üniversitesi",
      description: "Yüksek lisans eğitimi ve beslenme bilimi araştırmaları.",
      responsibilities: [
        "Akademik araştırma projeleri",
        "Lisans öğrencilerine ders verme",
        "Bilimsel yayın çalışmaları",
        "Konferans ve seminer katılımları"
      ]
    }
  ];

  const certifications = [
    "Klinik Beslenme Sertifikası - Türk Diyetisyenler Derneği",
    "Sporcu Beslenmesi Uzmanlık Sertifikası - ISSN",
    "Çocuk Beslenmesi Sertifikası - ESPGHAN",
    "Diyabet Eğitimcisi Sertifikası - Türkiye Endokrinoloji Derneği",
    "Online Danışmanlık Sertifikası - ICF",
    "Beslenme Koçluğu Sertifikası - NASM"
  ];

  const publications = [
    "Obez Çocuklarda Beslenme Alışkanlıklarının Değerlendirilmesi - Pediatri Dergisi, 2023",
    "Sporcu Beslenmesinde Protein Gereksinimlerinin Analizi - Spor Bilimleri Dergisi, 2022",
    "Diyabetik Hastalarda Karbonhidrat Sayımının Etkinliği - Endokrinoloji Dergisi, 2021"
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Deneyim & Referanslar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            10 yıllık profesyonel deneyimim boyunca edindiğim bilgi birikimi 
            ve uzman sertifikalarımla size en iyi hizmeti sunuyorum.
          </p>
        </div>

        {/* CV Download CTA */}
        <div className="text-center mb-16">
          <Card className="card-professional max-w-lg mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Detaylı CV'mi İndirin
              </h3>
              <p className="text-muted-foreground mb-6">
                Tam eğitim geçmişim, deneyimim ve referanslarım için detaylı CV'mi inceleyebilirsiniz.
              </p>
              <Button size="lg" className="btn-cta">
                <Download className="w-5 h-5 mr-2" />
                PDF Olarak İndir
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Mesleki Deneyim
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <Badge variant="secondary" className="w-fit mb-2 md:mb-0">
                      <Target className="w-4 h-4 mr-2" />
                      {exp.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {resp}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Certifications */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Sertifikalar & Uzmanlıklar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publications */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Bilimsel Yayınlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <p className="text-foreground leading-relaxed">{pub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <div className="flex items-center text-primary mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Araştırma İstatistikleri</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-foreground">15+</div>
                    <div className="text-muted-foreground">Bilimsel Makale</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">25+</div>
                    <div className="text-muted-foreground">Konferans Katılımı</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
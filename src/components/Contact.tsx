import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 532 123 4567",
      description: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@aysekaya.com",
      description: "24 saat içinde yanıt"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Nişantaşı, İstanbul",
      description: "Teşvikiye Cad. No:45 Kat:3"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Hafta içi: 09:00 - 18:00",
      description: "Cumartesi: 10:00 - 16:00"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Randevu Talebi: ${formData.service || 'Genel'}`;
    const body = `Ad: ${formData.firstName}
Soyad: ${formData.lastName}
Email: ${formData.email}
Telefon: ${formData.phone}
Hizmet: ${formData.service}

Mesaj:
${formData.message}`;

    window.location.href = `mailto:info@aysekaya.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            İletişim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sağlıklı yaşam yolculuğunuza başlamak için benimle iletişime geçin.
            Size en uygun beslenme programını birlikte oluşturalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Randevu Talep Formu
              </CardTitle>
              <p className="text-muted-foreground">
                Formu doldurun, 24 saat içinde size dönüş yapalım.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ad</Label>
                    <Input
                      id="firstName"
                      placeholder="Adınız"
                      required
                      className="mt-1"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input
                      id="lastName"
                      placeholder="Soyadınız"
                      required
                      className="mt-1"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    required
                    className="mt-1"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+90 5xx xxx xx xx"
                    required
                    className="mt-1"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="service">İlgilendiğiniz Hizmet</Label>
                  <select
                    id="service"
                    className="mt-1 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Bir hizmet seçin</option>
                    <option value="kilo-yonetimi">Kilo Yönetimi</option>
                    <option value="sporcu-beslenmesi">Sporcu Beslenmesi</option>
                    <option value="cocuk-beslenmesi">Çocuk Beslenmesi</option>
                    <option value="hastalik-yonetimi">Hastalık Yönetimi</option>
                    <option value="online-danisman">Online Danışmanlık</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    placeholder="Durumunuz ve hedefleriniz hakkında kısaca bilgi verin..."
                    rows={4}
                    className="mt-1"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-cta">
                  <Send className="w-5 h-5 mr-2" />
                  Randevu Talep Et
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Hızlı İletişim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a href="tel:+905321234567" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Hemen Ara</div>
                        <div className="text-sm text-muted-foreground">+90 532 123 4567</div>
                      </div>
                    </Button>
                  </a>

                  <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Anında mesajlaş</div>
                      </div>
                    </Button>
                  </a>

                  <a href="mailto:info@aysekaya.com" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">E-posta Gönder</div>
                        <div className="text-sm text-muted-foreground">info@aysekaya.com</div>
                      </div>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Location - Full Width */}
        <div className="mt-12">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Ofis Konumu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[21/9] w-full bg-muted rounded-xl relative overflow-hidden group mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.810574744765!2d28.985091764359055!3d41.04505977929705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zTmnFn2FudGHFn8SxLCDFnmTFn2xpL8Sxc3RhbmJ1bA!5e0!3m2!1str!2str!4v1709907604620!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  title="Ofis Konumu"
                ></iframe>
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground mb-1">
                  Nişantaşı Beslenme Merkezi
                </p>
                <p className="text-muted-foreground text-sm">
                  Teşvikiye Cad. No:45 Kat:3<br />
                  Nişantaşı, İstanbul 34365
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Sağlıklı Yaşama İlk Adım
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hedeflerinize ulaşmak için kişiselleştirilmiş beslenme planınızı
            oluşturmaya bugün başlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905321234567">
              <Button size="lg" className="btn-cta">
                <Phone className="w-5 h-5 mr-2" />
                Ücretsiz Konsültasyon
              </Button>
            </a>
            <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Randevu
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
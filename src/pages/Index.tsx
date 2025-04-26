import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Coffee, Award, ThumbsUp, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" 
            alt="Coffee shop" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
              Ваше время.<br />Ваш кофе.
            </h1>
            <p className={`text-xl md:text-2xl mb-8 text-muted-foreground ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              Погрузитесь в мир изысканного кофе, где каждая чашка — это момент, принадлежащий только вам.
            </p>
            <div className={`flex flex-wrap gap-4 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
              <Button size="lg" className="hover-scale">
                Забронировать стол
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Наше меню
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
            <Card className="hover-scale border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Coffee className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Лучшие зерна</h3>
                <p className="text-muted-foreground">Мы отбираем только премиальные сорта кофе со всего мира</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Мастерство бариста</h3>
                <p className="text-muted-foreground">Наши бариста — профессионалы с многолетним опытом</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Уютная атмосфера</h3>
                <p className="text-muted-foreground">Место, где время замедляется, позволяя насладиться моментом</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Блог о кофе</h2>
            <Link to="/blog" className="text-primary flex items-center gap-1 story-link">
              Все статьи <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            <Link to="/article/1" className="group">
              <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Coffee brewing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Coffee className="h-4 w-4" />
                    <span>Приготовление</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">Как приготовить идеальный кофе дома</h3>
                  <p className="text-muted-foreground line-clamp-2">Раскрываем секреты правильного помола, температуры воды и времени экстракции.</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/article/2" className="group">
              <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Coffee beans" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Coffee className="h-4 w-4" />
                    <span>Зёрна</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">Виды кофейных зёрен и их особенности</h3>
                  <p className="text-muted-foreground line-clamp-2">Арабика, робуста и другие сорта: разбираемся в чем разница и что выбрать.</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/article/3" className="group">
              <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551610290-e153ec567dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Coffee art" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Советы</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">Искусство латте-арт: первые шаги</h3>
                  <p className="text-muted-foreground line-clamp-2">Научитесь создавать красивые узоры на кофе с нашим пошаговым руководством.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Coffee pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Присоединяйтесь к YourTime клубу</h2>
            <p className="text-lg mb-8 text-muted-foreground animate-fade-in">
              Подпишитесь и получайте специальные предложения, новости о свежих сортах кофе и приглашения на дегустации.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-4 py-3 rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary flex-grow max-w-md"
              />
              <Button className="hover-scale">Подписаться</Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

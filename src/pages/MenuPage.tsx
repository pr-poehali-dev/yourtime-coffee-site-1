
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Coffee, 
  UtensilsCrossed, 
  Sandwich, 
  Wine, 
  Bookmark, 
  Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  image?: string;
  preparationTime?: string;
  allergens?: string[];
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  
  const menuItems: MenuItem[] = [
    // Coffee
    {
      id: 1,
      name: 'Эспрессо',
      description: 'Насыщенный кофе с плотной кремовой текстурой',
      price: 150,
      category: 'coffee',
      preparationTime: '2 мин'
    },
    {
      id: 2,
      name: 'Американо',
      description: 'Эспрессо, разбавленный горячей водой',
      price: 170,
      category: 'coffee',
      isPopular: true,
      preparationTime: '3 мин'
    },
    {
      id: 3,
      name: 'Капучино',
      description: 'Эспрессо с паровым молоком и нежной молочной пеной',
      price: 230,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      preparationTime: '4 мин'
    },
    {
      id: 4,
      name: 'Латте',
      description: 'Эспрессо с большим количеством молока и тонким слоем пены',
      price: 250,
      category: 'coffee',
      isPopular: true,
      preparationTime: '4 мин'
    },
    {
      id: 5,
      name: 'Флэт Уайт',
      description: 'Двойной эспрессо с бархатным молоком',
      price: 270,
      category: 'coffee',
      isNew: true,
      preparationTime: '4 мин'
    },
    // Food
    {
      id: 6,
      name: 'Круассан классический',
      description: 'Хрустящий слоеный круассан с маслом',
      price: 180,
      category: 'food',
      allergens: ['глютен', 'молоко'],
    },
    {
      id: 7,
      name: 'Сэндвич с курицей и авокадо',
      description: 'Свежий микс с зеленью, томатами и соусом',
      price: 390,
      category: 'food',
      isPopular: true,
      allergens: ['глютен']
    },
    {
      id: 8,
      name: 'Салат с киноа и овощами',
      description: 'Легкий и питательный салат с авокадо и кедровыми орешками',
      price: 420,
      category: 'food',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    // Desserts
    {
      id: 9,
      name: 'Чизкейк',
      description: 'Классический чизкейк с ягодным соусом',
      price: 320,
      category: 'desserts',
      isPopular: true,
      allergens: ['молоко', 'яйца']
    },
    {
      id: 10,
      name: 'Тирамису',
      description: 'Итальянский десерт с кофейным вкусом и маскарпоне',
      price: 350,
      category: 'desserts',
      allergens: ['глютен', 'молоко', 'яйца'],
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    // Drinks
    {
      id: 11,
      name: 'Матча Латте',
      description: 'Напиток из церемониального чая матча с молоком',
      price: 290,
      category: 'drinks',
      isNew: true
    },
    {
      id: 12,
      name: 'Смузи ягодный',
      description: 'Освежающий смузи из сезонных ягод',
      price: 310,
      category: 'drinks',
      isPopular: true
    }
  ];
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  const categories = [
    { id: 'coffee', name: 'Кофе', icon: <Coffee className="h-4 w-4" /> },
    { id: 'food', name: 'Еда', icon: <Sandwich className="h-4 w-4" /> },
    { id: 'desserts', name: 'Десерты', icon: <UtensilsCrossed className="h-4 w-4" /> },
    { id: 'drinks', name: 'Напитки', icon: <Wine className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Меню YourTime</h1>
            <p className="text-lg text-muted-foreground">
              Насладитесь нашим кофе, приготовленным с любовью, и вкусными сопутствующими блюдами
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="flex items-center gap-2 justify-center menu-category-button"
                data-active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
              {filteredItems.map(item => (
                <Card key={item.id} className="overflow-hidden menu-item">
                  <CardContent className="p-0">
                    {item.image && (
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <div className="text-lg font-bold">{item.price} ₽</div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-3">
                        {item.isNew && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                            Новинка
                          </Badge>
                        )}
                        {item.isPopular && (
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300">
                            <Bookmark className="h-3 w-3 mr-1" />
                            Популярное
                          </Badge>
                        )}
                        {item.preparationTime && (
                          <span className="text-xs flex items-center text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.preparationTime}
                          </span>
                        )}
                      </div>
                      
                      {item.allergens && item.allergens.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-border">
                          <p className="text-xs text-muted-foreground">
                            Аллергены: {item.allergens.join(', ')}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Separator className="mb-8" />
            
            <h2 className="text-2xl font-bold text-center mb-6">Специальное предложение</h2>
            
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Комбо завтрак" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="self-start mb-3 bg-primary">Выгодно</Badge>
                  <h3 className="text-2xl font-bold mb-3">Комбо "Бодрое утро"</h3>
                  <p className="text-muted-foreground mb-4">
                    Капучино + круассан с джемом + свежевыжатый апельсиновый сок
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-bold">450 ₽</span>
                    <span className="text-muted-foreground line-through">570 ₽</span>
                  </div>
                  <Button className="self-start button-hover">Заказать</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuPage;

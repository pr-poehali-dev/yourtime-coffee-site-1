
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Coffee, ShoppingBag, ShoppingCart, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  weight?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Колумбия Супремо',
      category: 'coffee',
      price: 890,
      weight: '250 г',
      image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Яркий, сбалансированный кофе с нотками карамели и цитрусовых.',
      isNew: true
    },
    {
      id: 2,
      name: 'Эфиопия Иргачеффе',
      category: 'coffee',
      price: 950,
      weight: '250 г',
      image: 'https://images.unsplash.com/photo-1559525839-d11829178c0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Кофе с цветочными нотами и легкой кислинкой ягод.',
      isBestseller: true
    },
    {
      id: 3,
      name: 'Бразилия Сантос',
      category: 'coffee',
      price: 750,
      weight: '250 г',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Классический кофе с ореховыми нотами и низкой кислотностью.'
    },
    {
      id: 4,
      name: 'Керамическая кружка',
      category: 'accessories',
      price: 650,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Оригинальная керамическая кружка YourTime, объем 350 мл.'
    },
    {
      id: 5,
      name: 'Аэропресс',
      category: 'accessories',
      price: 2900,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Удобный способ заваривания кофе, идеален для путешествий.',
      isBestseller: true
    },
    {
      id: 6,
      name: 'Ручная кофемолка',
      category: 'accessories',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Кофемолка с керамическими жерновами для идеального помола.'
    }
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const coffeeProducts = filteredProducts.filter(product => product.category === 'coffee');
  const accessoryProducts = filteredProducts.filter(product => product.category === 'accessories');

  const handleAddToCart = (productId: number, productName: string) => {
    toast({
      title: "Добавлено в корзину",
      description: `${productName} добавлен в вашу корзину`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Каталог YourTime</h1>
            <p className="text-lg text-muted-foreground">
              Выберите лучшие кофейные зерна и аксессуары для приготовления идеального кофе
            </p>
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Поиск по товарам..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2 button-hover">
                <Filter className="h-4 w-4" />
                Фильтры
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="all" className="menu-category-button">Все товары</TabsTrigger>
                <TabsTrigger value="coffee" className="menu-category-button">Кофе</TabsTrigger>
                <TabsTrigger value="accessories" className="menu-category-button">Аксессуары</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                {filteredProducts.map((product) => (
                  <CatalogItem 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="coffee">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                {coffeeProducts.map((product) => (
                  <CatalogItem 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="accessories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                {accessoryProducts.map((product) => (
                  <CatalogItem 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const CatalogItem = ({ 
  product, 
  onAddToCart 
}: { 
  product: Product; 
  onAddToCart: (id: number, name: string) => void;
}) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg catalog-item">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover catalog-item-image"
        />
        {product.isNew && (
          <Badge className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600">Новинка</Badge>
        )}
        {product.isBestseller && (
          <Badge className="absolute top-3 left-3 bg-amber-500 hover:bg-amber-600">Хит продаж</Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {product.category === 'coffee' ? (
              <Coffee className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm text-muted-foreground">
              {product.category === 'coffee' ? 'Кофе' : 'Аксессуары'}
            </span>
          </div>
          {product.weight && (
            <span className="text-sm font-medium">{product.weight}</span>
          )}
        </div>
        <h3 className="text-xl font-medium mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
        <div className="text-lg font-bold">{product.price} ₽</div>
        <Button 
          size="sm" 
          className="gap-2 catalog-add-button"
          onClick={() => onAddToCart(product.id, product.name)}
        >
          <ShoppingCart className="h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogPage;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Coffee, ThumbsUp, Users, Search, FilterX } from 'lucide-react';

// Данные блога
const blogPosts = [
  {
    id: 1,
    title: 'Как приготовить идеальный кофе дома',
    category: 'Приготовление',
    icon: Coffee,
    excerpt: 'Раскрываем секреты правильного помола, температуры воды и времени экстракции для приготовления идеального кофе в домашних условиях.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '21 апреля 2025'
  },
  {
    id: 2,
    title: 'Виды кофейных зёрен и их особенности',
    category: 'Зёрна',
    icon: Coffee,
    excerpt: 'Арабика, робуста и другие сорта: разбираемся в чем разница и что выбрать для разных способов приготовления кофе.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '18 апреля 2025'
  },
  {
    id: 3,
    title: 'Искусство латте-арт: первые шаги',
    category: 'Советы',
    icon: ThumbsUp,
    excerpt: 'Научитесь создавать красивые узоры на кофе с нашим пошаговым руководством для начинающих бариста и любителей.',
    image: 'https://images.unsplash.com/photo-1551610290-e153ec567dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '15 апреля 2025'
  },
  {
    id: 4,
    title: 'Кофейная культура разных стран',
    category: 'Культура',
    icon: Users,
    excerpt: 'Путешествие по миру кофейных традиций: от итальянского эспрессо до вьетнамского кофе с яичным желтком.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '10 апреля 2025'
  },
  {
    id: 5,
    title: 'Выбираем кофемолку: руководство для новичков',
    category: 'Оборудование',
    icon: Coffee,
    excerpt: 'Какую кофемолку выбрать для дома? Сравниваем жерновые и ножевые модели, а также их влияние на вкус кофе.',
    image: 'https://images.unsplash.com/photo-1516224498413-84ecf3a1c87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '5 апреля 2025'
  },
  {
    id: 6,
    title: 'Альтернативные способы заваривания кофе',
    category: 'Приготовление',
    icon: Coffee,
    excerpt: 'Пуровер, аэропресс, кемекс, сифон: разбираемся в современных методах заваривания и их особенностях.',
    image: 'https://images.unsplash.com/photo-1510591509097-4d09718648f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '1 апреля 2025'
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterPosts(term, activeCategory);
  };

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
    filterPosts(searchTerm, category);
  };

  const filterPosts = (term: string, category: string | null) => {
    let filtered = blogPosts;
    
    // Filter by search term
    if (term) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    // Filter by category
    if (category) {
      filtered = filtered.filter(post => post.category === category);
    }
    
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">Блог о кофе</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              Истории, советы и исследования о мире кофе — от экспертов YourTime
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-10 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Поиск статей..."
                className="pl-10 py-6 text-base"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-10 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeCategory === null ? "default" : "outline"}
                onClick={() => handleCategoryFilter(null)}
                className="hover-scale"
              >
                Все
              </Button>
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryFilter(category)}
                  className="hover-scale"
                >
                  {category}
                </Button>
              ))}
              {activeCategory && (
                <Button 
                  variant="ghost" 
                  className="ml-auto text-muted-foreground"
                  onClick={() => handleCategoryFilter(null)}
                >
                  <FilterX className="h-4 w-4 mr-2" />
                  Сбросить фильтр
                </Button>
              )}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-8 stagger">
                {filteredPosts.map(post => (
                  <Link key={post.id} to={`/article/${post.id}`} className="block group">
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="aspect-video md:aspect-square relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6 md:col-span-2 flex flex-col justify-center">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <post.icon className="h-4 w-4" />
                            <span>{post.category}</span>
                            <span className="text-muted-foreground/50">•</span>
                            <span>{post.date}</span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <span className="text-primary font-medium flex items-center mt-auto story-link w-fit">
                            Читать статью
                          </span>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-medium mb-2">Статьи не найдены</h3>
                <p className="text-muted-foreground mb-6">Попробуйте изменить параметры поиска</p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setActiveCategory(null);
                  setFilteredPosts(blogPosts);
                }}>
                  Показать все статьи
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;

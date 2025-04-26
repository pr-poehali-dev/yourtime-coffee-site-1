import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Coffee, 
  ThumbsUp, 
  Users, 
  ArrowLeft, 
  Facebook, 
  Twitter, 
  Linkedin,
  Clock
} from 'lucide-react';

// Данные для статей
const articles = [
  {
    id: '1',
    title: 'Как приготовить идеальный кофе дома',
    subtitle: 'Секреты идеального помола, температуры и времени экстракции',
    category: 'Приготовление',
    icon: Coffee,
    coverImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '21 апреля 2025',
    readTime: '7 минут чтения',
    authorName: 'Иван Кофеев',
    authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Приготовление идеального кофе дома — настоящее искусство, но с правильными знаниями каждый может значительно улучшить качество своего домашнего напитка. В этой статье мы рассмотрим основные принципы, которые помогут вам раскрыть весь потенциал кофейных зерен.'
      },
      {
        type: 'heading',
        text: 'Выбор правильного помола'
      },
      {
        type: 'paragraph',
        text: 'Степень помола — один из самых важных факторов, влияющих на вкус кофе. Для разных способов приготовления требуется разный помол:'
      },
      {
        type: 'list',
        items: [
          'Эспрессо — очень мелкий помол',
          'Аэропресс — средний помол',
          'Пуровер — средне-крупный помол',
          'Френч-пресс — крупный помол'
        ]
      },
      {
        type: 'paragraph',
        text: 'Если помол слишком мелкий для выбранного метода, кофе будет горьким из-за переэкстракции. Если слишком крупный — кислым и водянистым из-за недоэкстракции.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1516224498413-84ecf3a1c87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        caption: 'Разная степень помола для различных способов приготовления'
      },
      {
        type: 'heading',
        text: 'Температура воды'
      },
      {
        type: 'paragraph',
        text: 'Оптимальная температура воды для заваривания кофе составляет 90-96°C. Слишком горячая вода (кипяток 100°C) может придать кофе горечь, а слишком холодная не позволит экстрагировать все вкусовые вещества.'
      },
      {
        type: 'tip',
        text: 'После закипания воды подождите около 30 секунд перед заваркой для достижения идеальной температуры.'
      },
      {
        type: 'heading',
        text: 'Время экстракции'
      },
      {
        type: 'paragraph',
        text: 'Время контакта воды с кофе напрямую влияет на конечный вкус. Ориентировочное время для разных методов:'
      },
      {
        type: 'list',
        items: [
          'Эспрессо: 25-30 секунд',
          'Аэропресс: 60-90 секунд',
          'Пуровер: 2,5-3 минуты',
          'Френч-пресс: 4 минуты'
        ]
      },
      {
        type: 'paragraph',
        text: 'Контролируя время экстракции, вы можете настроить вкус под свои предпочтения. Более длительная экстракция дает более насыщенный, но потенциально более горький вкус.'
      },
      {
        type: 'heading',
        text: 'Качество воды'
      },
      {
        type: 'paragraph',
        text: 'Вода составляет более 98% вашей чашки кофе, поэтому ее качество критически важно. Используйте фильтрованную воду средней жесткости. Слишком мягкая вода дает плоский вкус, а слишком жесткая подавляет тонкие нотки и может привести к накипи в оборудовании.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1510591509097-4d09718648f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        caption: 'Процесс заваривания кофе методом пуровер'
      },
      {
        type: 'heading',
        text: 'Соотношение кофе и воды'
      },
      {
        type: 'paragraph',
        text: 'Для большинства методов заваривания рекомендуется соотношение 1:15-1:18 (1 часть кофе на 15-18 частей воды). Это эквивалентно примерно 60-70 граммам кофе на 1 литр воды. Начните с этого базового соотношения и корректируйте в зависимости от ваших предпочтений.'
      },
      {
        type: 'tip',
        text: 'Используйте кухонные весы для точного измерения кофе и воды — это значительно повысит стабильность результатов.'
      },
      {
        type: 'heading',
        text: 'Заключение'
      },
      {
        type: 'paragraph',
        text: 'Приготовление отличного кофе дома — это сочетание искусства и науки. Экспериментируйте с разными сортами зерен, степенью обжарки и методами приготовления, чтобы найти идеальную комбинацию для вашего вкуса. Помните, что самый важный фактор — использование свежеобжаренных качественных зерен, которые вы перемалываете непосредственно перед приготовлением.'
      }
    ],
    relatedArticles: [2, 3, 5]
  },
  {
    id: '2',
    title: 'Виды кофейных зёрен и их особенности',
    subtitle: 'Путеводитель по сортам кофе: от арабики до робусты',
    category: 'Зёрна',
    icon: Coffee,
    coverImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '18 апреля 2025',
    readTime: '8 минут чтения',
    authorName: 'Анна Зерновая',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'В мире существует более 100 видов растений рода Coffea, но лишь несколько из них используются для производства кофе, который мы пьем каждый день. В этой статье мы рассмотрим основные виды кофейных зерен, их характеристики и различия во вкусе.'
      },
      {
        type: 'heading',
        text: 'Арабика (Coffea Arabica)'
      },
      {
        type: 'paragraph',
        text: 'Арабика составляет около 60-70% мирового производства кофе и считается более качественным и сложным по вкусу сортом. Вот ее основные характеристики:'
      },
      {
        type: 'list',
        items: [
          'Выращивается на высоте 600-2000 метров над уровнем моря',
          'Содержит меньше кофеина (0.8-1.4%)',
          'Имеет более сложный вкусовой профиль с фруктовыми, цветочными и ягодными нотами',
          'Более высокое содержание сахаров и липидов',
          'Более подвержена болезням и вредителям'
        ]
      },
      {
        type: 'paragraph',
        text: 'Среди наиболее известных разновидностей арабики — типика, бурбон, гейша, катурра и пакамара. Каждая имеет свои уникальные характеристики и вкусовой профиль.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        caption: 'Зерна арабики отличаются более плоской и продолговатой формой'
      },
      {
        type: 'heading',
        text: 'Робуста (Coffea Canephora)'
      },
      {
        type: 'paragraph',
        text: 'Робуста — второй по популярности вид кофе, составляющий около 30-40% мирового производства. Характеристики робусты:'
      },
      {
        type: 'list',
        items: [
          'Выращивается на высоте до 600 метров над уровнем моря',
          'Содержит в 2 раза больше кофеина (1.7-4%)',
          'Имеет более простой, часто землистый и ореховый вкус с выраженной горчинкой',
          'Более устойчива к болезням и вредителям',
          'Дает более плотную и стойкую крему в эспрессо'
        ]
      },
      {
        type: 'paragraph',
        text: 'Робуста часто используется в эспрессо-смесях для придания напитку тела, крепости и характерной горчинки. Высококачественная робуста может иметь интересные шоколадные и ореховые ноты.'
      },
      {
        type: 'tip',
        text: 'Многие итальянские эспрессо-смеси содержат 10-20% робусты для создания более плотного напитка с устойчивой кремой.'
      },
      {
        type: 'heading',
        text: 'Либерика (Coffea Liberica)'
      },
      {
        type: 'paragraph',
        text: 'Либерика составляет менее 2% мирового производства кофе и отличается от других видов следующими характеристиками:'
      },
      {
        type: 'list',
        items: [
          'Очень крупные зерна, примерно в 2 раза больше арабики',
          'Древесный, часто дымный вкус с цветочными нотами',
          'Выращивается преимущественно в Западной Африке и Юго-Восточной Азии',
          'Более устойчива к засухе и болезням'
        ]
      },
      {
        type: 'paragraph',
        text: 'Этот вид кофе особенно популярен в Малайзии и на Филиппинах, где его ценят за уникальный вкусовой профиль.'
      },
      {
        type: 'heading',
        text: 'Эксцельса (Coffea Excelsa)'
      },
      {
        type: 'paragraph',
        text: 'Иногда классифицируется как разновидность либерики, эксцельса отличается следующими характеристиками:'
      },
      {
        type: 'list',
        items: [
          'Фруктовый, терпкий вкус с нотами темных ягод',
          'Высокое содержание хлорогеновой кислоты',
          'Выращивается в основном в Африке',
          'Составляет менее 1% мирового производства'
        ]
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1559941903-88f18a9786e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        caption: 'Различные виды кофейных зерен имеют разный размер, форму и цвет'
      },
      {
        type: 'heading',
        text: 'Как выбрать подходящий для вас кофе'
      },
      {
        type: 'paragraph',
        text: 'При выборе кофе важно учитывать не только вид зерен, но и другие факторы:'
      },
      {
        type: 'list',
        items: [
          'Степень обжарки: светлая обжарка подчеркивает кислотность и фруктовые ноты, темная — горчинку и шоколадные нотки',
          'Метод обработки: сухая, мытая или полумытая обработка влияет на вкусовой профиль',
          'Регион происхождения: каждый регион придает кофе свои характерные ноты',
          'Способ приготовления: для эспрессо подходят одни сорта, для фильтр-кофе — другие'
        ]
      },
      {
        type: 'tip',
        text: 'Начните с дегустации кофе из разных регионов, приготовленного разными способами, чтобы определить свои предпочтения.'
      },
      {
        type: 'heading',
        text: 'Заключение'
      },
      {
        type: 'paragraph',
        text: 'Мир кофе невероятно разнообразен, и каждый вид зерен имеет свои уникальные характеристики. Арабика порадует любителей сложных, многогранных вкусов, робуста — тех, кто ценит крепость и насыщенность. Экспериментируйте с разными сортами и смесями, чтобы найти свой идеальный кофе.'
      }
    ],
    relatedArticles: [1, 5, 6]
  }
];

// Компоненты для отображения разных типов контента
const ContentRenderer = ({ content }: { content: any[] }) => {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return <p key={index} className="text-lg leading-relaxed">{item.text}</p>;
          case 'heading':
            return <h2 key={index} className="text-2xl font-bold mt-10 mb-4">{item.text}</h2>;
          case 'list':
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {item.items.map((listItem: string, listIndex: number) => (
                  <li key={listIndex} className="text-lg">{listItem}</li>
                ))}
              </ul>
            );
          case 'image':
            return (
              <figure key={index} className="my-8">
                <img 
                  src={item.url} 
                  alt={item.caption || 'Иллюстрация'}
                  className="w-full rounded-lg shadow-lg animate-scale-in" 
                />
                {item.caption && (
                  <figcaption className="text-center text-muted-foreground mt-2 text-sm italic">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          case 'tip':
            return (
              <div key={index} className="bg-accent p-4 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-medium flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  Совет: {item.text}
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
            <p className="text-lg text-muted-foreground mb-8">
              К сожалению, запрашиваемая статья не существует
            </p>
            <Link to="/blog">
              <Button size="lg">Вернуться к блогу</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = article.icon;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="pt-24 pb-16 flex-grow">
        <article className="max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-fade-in">
            <Link to="/blog" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Назад к блогу
            </Link>
          </div>
          
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-primary mb-3">
              <IconComponent className="h-4 w-4" />
              <span>{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.subtitle}</p>
          </div>
          
          <div className="flex items-center justify-between mb-10 animate-fade-in">
            <div className="flex items-center gap-3">
              <img 
                src={article.authorImage} 
                alt={article.authorName} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{article.authorName}</div>
                <div className="text-sm text-muted-foreground">{article.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <div className="mb-10 animate-fade-in">
            <div className="aspect-[21/9] relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute -left-20 top-0">
              <div className="sticky top-40 flex flex-col gap-3">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Facebook className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                </Button>
              </div>
            </div>
            
            <div className="article-content animate-fade-in">
              <ContentRenderer content={article.content} />
            </div>
            
            <div className="lg:hidden flex justify-center gap-4 mt-10">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </article>
        
        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 mt-16">
            <h2 className="text-2xl font-bold mb-8">Похожие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
              {article.relatedArticles.map(relatedId => {
                const relatedArticle = articles.find(a => a.id === relatedId.toString());
                if (!relatedArticle) return null;
                
                return (
                  <Link key={relatedArticle.id} to={`/article/${relatedArticle.id}`} className="group">
                    <div className="overflow-hidden rounded-lg shadow-md h-full hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={relatedArticle.coverImage} 
                          alt={relatedArticle.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <relatedArticle.icon className="h-3 w-3" />
                          <span>{relatedArticle.category}</span>
                        </div>
                        <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{relatedArticle.title}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;

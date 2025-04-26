import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">YourTime</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Место, где время принадлежит вам. Наслаждайтесь моментом с чашкой идеального кофе.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/article/1" className="text-muted-foreground hover:text-primary transition-colors">
                  Приготовление кофе
                </Link>
              </li>
              <li>
                <Link to="/article/2" className="text-muted-foreground hover:text-primary transition-colors">
                  Виды кофейных зерен
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  ул. Кофейная, д. 42, Москва, Россия
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground text-sm">
                  +7 (999) 123-45-67
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground text-sm">
                  info@yourtime.coffee
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YourTime Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

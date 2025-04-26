
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Coffee, Clock, Menu, X, ShoppingBag, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <div className="relative">
            <Coffee className="h-8 w-8 text-primary animate-float" />
            <Clock className="h-5 w-5 text-primary absolute -bottom-1 -right-1 animate-float" style={{animationDelay: '0.5s'}} />
          </div>
          <span className="text-xl font-bold">YourTime</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block animate-fade-in">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>О кофе</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <div className="p-4">
                      <h3 className="text-sm font-medium leading-none mb-2 text-primary">Узнайте больше о кофе</h3>
                      <p className="text-sm text-muted-foreground mb-2">Откройте для себя искусство кофе с нашими статьями</p>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <Link to="/article/1" className="group block p-3 rounded-md hover:bg-secondary">
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">Приготовление кофе</h4>
                          <p className="text-xs text-muted-foreground">Техники и секреты</p>
                        </Link>
                        <Link to="/article/2" className="group block p-3 rounded-md hover:bg-secondary">
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">Виды кофейных зерен</h4>
                          <p className="text-xs text-muted-foreground">От арабики до робусты</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/menu">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "nav-link-animation")}>
                    <Utensils className="h-4 w-4 mr-1" />
                    Меню
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/catalog">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "nav-link-animation")}>
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Каталог
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "nav-link-animation")}>
                    Блог
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden button-pulse"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="animate-spin-once" /> : <Menu className="animate-wiggle" />}
        </Button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background z-40 animate-fade-in">
            <nav className="container mx-auto px-4 py-8">
              <ul className="space-y-6 stagger">
                <li>
                  <Link 
                    to="/" 
                    className="text-lg font-medium block py-2 hover:text-primary mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/menu" 
                    className="text-lg font-medium block py-2 hover:text-primary mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Utensils className="h-5 w-5 mr-2 inline" />
                    Меню
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/catalog" 
                    className="text-lg font-medium block py-2 hover:text-primary mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2 inline" />
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/article/1" 
                    className="text-lg font-medium block py-2 hover:text-primary mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Приготовление кофе
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/article/2" 
                    className="text-lg font-medium block py-2 hover:text-primary mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Виды кофейных зерен
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-lg font-medium block py-2 hover:text-primary mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Блог
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

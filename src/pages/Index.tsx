import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-primary">НИТАНЕЦ</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('philosophy')} className="text-foreground/80 hover:text-primary transition-colors">
              Философия
            </button>
            <button onClick={() => scrollToSection('stages')} className="text-foreground/80 hover:text-primary transition-colors">
              Этапы
            </button>
            <button onClick={() => scrollToSection('science')} className="text-foreground/80 hover:text-primary transition-colors">
              Наука
            </button>
            <button onClick={() => scrollToSection('community')} className="text-foreground/80 hover:text-primary transition-colors">
              Сообщество
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('join')}
            className="bg-primary hover:bg-primary/90"
          >
            Присоединиться
          </Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/f68d0bdc-f840-4997-a823-8d1af16c07b4/files/57363d14-3fa7-4fce-96b2-f7d044b5b93e.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-6 drop-shadow-lg">
            НИТАНЕЦ
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto font-light">
            Симфония тела, духа, сознания и природы
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Синтез танца, йоги, медитации и боевых искусств для целостного развития
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('philosophy')}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            Узнать больше
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="philosophy" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
            Философия Нитанца
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">Гармония</h4>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Баланс и целостность на всех уровнях: гармония с собой, с окружающими и с природой. 
                  Единство тела, разума и духа.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Sparkles" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">Красота</h4>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  «Красота преобразит мир!» — созидание красоты в каждом моменте: в движении, 
                  в мыслях, в отношениях и в пространстве вокруг.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="TreePine" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">Единство с природой</h4>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Осознание себя частью природной экосистемы. Глубокая забота о природе, 
                  уважение ко всем формам жизни.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">Самопознание</h4>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Глубокое понимание своих эмоций, мыслей, желаний и мотивов. 
                  Непрерывный процесс исследования своей внутренней вселенной.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-3xl text-primary/90 italic leading-relaxed">
              «Живи, как танцуешь, и танцуй, как живёшь»
            </blockquote>
          </div>
        </div>
      </section>

      <section id="stages" className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/f68d0bdc-f840-4997-a823-8d1af16c07b4/files/7b5eed0b-6076-447d-bb24-0557cfe97c6d.jpg')` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="font-serif text-5xl font-bold text-center text-primary mb-16">
            5 этапов трансформации
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                num: '01',
                title: 'Подготовка',
                subtitle: 'Пробуждение телесного храма',
                description: 'Растирание, прохлопывание всего тела, активация энергетических центров и подготовка к практике.',
                icon: 'Hand'
              },
              {
                num: '02',
                title: 'Разминка',
                subtitle: 'Настройка тела и сознания',
                description: 'Упражнения по разминке суставов, растяжке сухожилий под красивую музыку.',
                icon: 'Activity'
              },
              {
                num: '03',
                title: 'Динамический Нитанец',
                subtitle: 'Активация внутреннего источника',
                description: 'Импровизация с элементами танца, боевых искусств и гимнастики для разогрева и прокачки выносливости.',
                icon: 'Flame'
              },
              {
                num: '04',
                title: 'Нитанец-медитация',
                subtitle: 'Творение реальности через движение',
                description: 'Свободное интуитивное движение, где каждая конечность — кисточка, рисующая картину реальности.',
                icon: 'Sparkles'
              },
              {
                num: '05',
                title: 'Созерцание',
                subtitle: 'Программирование и самогипноз',
                description: 'Наблюдение за состоянием, формирование позитивных программ и наслаждение ощущениями.',
                icon: 'Eye'
              }
            ].map((stage, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Icon name={stage.icon as any} className="text-primary-foreground" size={28} />
                      </div>
                      <div className="font-serif text-4xl font-bold text-primary/30 mt-2 text-center">
                        {stage.num}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-serif text-2xl font-semibold text-primary mb-1">
                        {stage.title}
                      </h4>
                      <p className="text-secondary font-medium mb-3 italic">
                        {stage.subtitle}
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="science" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-5xl font-bold text-center text-primary mb-8">
            Научное обоснование
          </h3>
          <p className="text-center text-foreground/80 text-lg mb-16 max-w-3xl mx-auto">
            Современные исследования подтверждают: Нитанец — это целостная система перепрограммирования организма
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Brain" className="text-primary" size={36} />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Нейрофизиология
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Перезагрузка мозга через синхронизацию полушарий
                </p>
                <ul className="text-left space-y-2 text-sm text-foreground/70">
                  <li>✓ Усиление альфа-ритмов на 20–30%</li>
                  <li>✓ Стимуляция нейропластичности</li>
                  <li>✓ Активация творческих зон</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="HeartPulse" className="text-primary" size={36} />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Физиология
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Оздоровление тела на клеточном уровне
                </p>
                <ul className="text-left space-y-2 text-sm text-foreground/70">
                  <li>✓ Снижение кортизола на 25%</li>
                  <li>✓ Активация лимфосистемы</li>
                  <li>✓ Увеличение гибкости на 30%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Smile" className="text-primary" size={36} />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Психология
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Гармонизация сознания и эмоций
                </p>
                <ul className="text-left space-y-2 text-sm text-foreground/70">
                  <li>✓ Снятие эмоциональных блоков</li>
                  <li>✓ Развитие креативности</li>
                  <li>✓ Повышение осознанности</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/f68d0bdc-f840-4997-a823-8d1af16c07b4/files/a6cdf7ec-7e65-4e80-809d-f70deba03ced.jpg')` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="font-serif text-5xl font-bold text-center text-primary mb-8">
            Сообщество Нитания
          </h3>
          <p className="text-center text-foreground/80 text-xl mb-16 max-w-3xl mx-auto italic">
            «Мы — не страна на карте, а состояние сознания на карте человеческой эволюции»
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-primary mb-4">Видение на 3000-летие</h4>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <Icon name="Globe" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Сообщества нитанцев в каждой стране</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="GraduationCap" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Школы Нитанца в каждой образовательной системе</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Building2" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Храмы движения в каждом городе</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="TreePine" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Заповедники Нитании по всей планете</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-primary mb-4">Ценности</h4>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">☘️</span>
                        <span>Свобода быть собой</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">☘️</span>
                        <span>Любовь к себе и миру</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">☘️</span>
                        <span>Созидание красоты</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">☘️</span>
                        <span>Целостное исцеление</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-primary/20">
                  <blockquote className="font-serif text-xl text-center text-primary/90 italic leading-relaxed">
                    «Преображая себя, мы преображаем мир. Ваша трансформация — ваш главный вклад в создание прекрасного будущего»
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="join" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-5xl font-bold mb-6">
            Станьте частью движения
          </h3>
          <p className="text-xl mb-4 max-w-2xl mx-auto opacity-90">
            Экспериментальный практикум — 7-дневное глубокое погружение
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-80">
            Первая группа под руководством автора метода. Уникальный шанс стать со-творцом традиции.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://t.me/nitanec" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 gap-2">
                <Icon name="Send" size={20} />
                Telegram-канал
              </Button>
            </a>
            <a 
              href="https://t.me/crypatma" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Написать автору
              </Button>
            </a>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <h4 className="font-serif text-2xl font-semibold mb-4">Что вы получаете:</h4>
                <ul className="grid md:grid-cols-2 gap-4 text-left">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="mt-1 flex-shrink-0" size={20} />
                    <span>7-дневное погружение в практику</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="mt-1 flex-shrink-0" size={20} />
                    <span>Персональные рекомендации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="mt-1 flex-shrink-0" size={20} />
                    <span>Теоретические материалы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="mt-1 flex-shrink-0" size={20} />
                    <span>Закрытое сообщество</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-2xl text-primary mb-2">НИТАНЕЦ</p>
          <p className="text-foreground/60 text-sm">
            © 2024 Нитанец. Практика осознанного движения и саморазвития
          </p>
          <p className="text-foreground/60 text-sm mt-2">
            Основано 1 октября 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

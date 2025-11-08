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
        scrollY > 50 ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-primary">НИТАНЕЦ</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('story')} className="text-foreground/80 hover:text-primary transition-colors">
              История
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="text-foreground/80 hover:text-primary transition-colors">
              Философия
            </button>
            <button onClick={() => scrollToSection('practice')} className="text-foreground/80 hover:text-primary transition-colors">
              Практика
            </button>
            <button onClick={() => scrollToSection('science')} className="text-foreground/80 hover:text-primary transition-colors">
              Наука
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-foreground/80 hover:text-primary transition-colors">
              Видение
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('join')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Присоединиться
          </Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/f68d0bdc-f840-4997-a823-8d1af16c07b4/files/8dae130d-2159-475f-bdb9-415efce3c0d8.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="font-serif text-7xl md:text-9xl font-bold text-primary mb-6 drop-shadow-2xl">
            НИТАНЕЦ
          </h2>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-6 max-w-4xl mx-auto font-light italic">
            Видимая музыка души, где каждое движение — слово в поэме самопознания
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
            Квинтэссенция 20-летнего опыта саморазвития. Синтез танца, йоги, медитации и боевых искусств
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('story')}
            className="bg-primary hover:bg-primary/90 text-lg px-10 py-7"
          >
            Узнать мою историю
            <Icon name="ArrowDown" className="ml-2" size={22} />
          </Button>
        </div>
      </section>

      <section id="story" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-6xl font-bold text-center text-primary mb-8 animate-fade-in">
            От личного пути к глобальному движению
          </h3>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-3xl mx-auto italic">
            История создания Нитанца
          </p>
          
          <div className="max-w-5xl mx-auto space-y-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in">
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Calendar" className="text-primary" size={36} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl font-semibold text-primary mb-4">
                      Переломный момент — 40 лет
                    </h4>
                    <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                      На определённом этапе своего жизненного пути, когда уже серьёзно приходится задумываться 
                      о поддержании здоровья — не только физического, но также интеллектуального, эмоционального 
                      и духовного — после многочисленных уроков по жизни я осознал исключительную важность 
                      всецелого здоровья.
                    </p>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      Испытывая глубокую потребность в гармоничном саморазвитии и творческом самовыражении, 
                      <strong className="text-primary"> 1 октября 2024 года</strong> ко мне пришла идея Нитанца.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon name="Sparkles" className="text-secondary" size={36} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl font-semibold text-primary mb-4">
                      Синтез 20 лет опыта
                    </h4>
                    <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                      За 20 лет саморазвития я прошел через множество школ: от древних практик йоги до современных 
                      методов телесной терапии, от дисциплины боевых искусств до свободы физической активности, 
                      от глубины медитации до социальной проявленности.
                    </p>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      Каждая из этих систем открывала мне определенный аспект человеческого потенциала, 
                      но ни одна не предлагала того целостного синтеза, которого я интуитивно искал.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Lightbulb" className="text-accent" size={36} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl font-semibold text-primary mb-4">
                      Момент озарения
                    </h4>
                    <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                      Находясь в поиске творческого самовыражения, метода дальнейшего саморазвития и одновременно 
                      нового вида физической активности, ко мне пришла идея соединить все самые лучшие 
                      телесно-ориентированные практики и наложить на музыку в окружении природы.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-primary/90 my-6">
                      «Истинная практика должна быть подобна живому организму — единому, целостному, дышащему»
                    </blockquote>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      Так родился Нитанец — одновременно и танец, и йога, и боевое искусство, и медитация. 
                      Это не просто очередная методика, а живая, развивающаяся система целостного развития.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/f68d0bdc-f840-4997-a823-8d1af16c07b4/files/e8266edb-8edb-441e-9318-cf3faf5cb299.jpg')` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="font-serif text-6xl font-bold text-center text-primary mb-8">
            Философия Нитанца
          </h3>
          <p className="text-center text-2xl text-foreground/80 mb-4 italic">
            Кодекс Новой Цивилизации
          </p>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            10 столпов, на которых строится вся наша практика и жизнь
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: 'Bird',
                title: 'СВОБОДА',
                description: 'Базовая ценность. Свобода быть собой во всей своей полноте и уникальности. Свобода самовыражения через движение, свобода от внутренних ограничений, страхов и навязанных шаблонов.',
                color: 'primary'
              },
              {
                icon: 'Heart',
                title: 'ЛЮБОВЬ',
                description: 'Фундаментальная сила, которая все объединяет. Любовь к себе (принятие и забота), любовь к другим (эмпатия и доброта) и глубинная любовь к природе как к живому организму.',
                color: 'secondary'
              },
              {
                icon: 'Scale',
                title: 'ГАРМОНИЯ',
                description: 'Состояние баланса и целостности на всех уровнях: гармония с собой (единство тела, разума и духа), гармония с окружающими и гармония с природой.',
                color: 'accent'
              },
              {
                icon: 'Sparkles',
                title: 'КРАСОТА',
                description: '«Красота преобразит мир» — это активное действие. Созидание красоты в каждом моменте: в движении, в мыслях, в отношениях и в пространстве вокруг себя.',
                color: 'primary'
              },
              {
                icon: 'Paintbrush',
                title: 'СОЗИДАНИЕ',
                description: 'Наша энергия направлена не на потребление, а на творение. Создание нового и прекрасного — будь то произведение искусства, проект или собственная жизнь.',
                color: 'secondary'
              },
              {
                icon: 'Eye',
                title: 'САМОПОЗНАНИЕ',
                description: 'Путь наружу начинается изнутри. Глубокое понимание своих истинных эмоций, мыслей, желаний и мотивов. Непрерывный процесс исследования своей внутренней вселенной.',
                color: 'accent'
              },
              {
                icon: 'Palette',
                title: 'ТВОРЧЕСТВО',
                description: 'Творческий потенциал как неотъемлемое право и природный дар каждого человека. Нитанец — инструмент для его пробуждения, где танец становится формой самовыражения.',
                color: 'primary'
              },
              {
                icon: 'Star',
                title: 'ДУХОВНОСТЬ',
                description: 'Стремление за пределы повседневности. Развитие духовного потенциала, поиск связи с высшим — будь то универсальный разум, космос или глубинная сущность бытия.',
                color: 'secondary'
              },
              {
                icon: 'HeartPulse',
                title: 'ЦЕЛОСТНОЕ ИСЦЕЛЕНИЕ',
                description: 'Исцеление — это восстановление целостности. Самоисцеление на всех уровнях (физическом, эмоциональном, ментальном) и распространение этого эффекта на окружающий мир.',
                color: 'accent'
              },
              {
                icon: 'TreePine',
                title: 'ЕДИНСТВО С ПРИРОДОЙ',
                description: 'Осознание себя частью природной экосистемы, а не ее хозяевами. Глубокая забота о природе, уважение ко всем формам жизни и жизнь в экологическом балансе.',
                color: 'primary'
              }
            ].map((value, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 rounded-full bg-${value.color}/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon name={value.icon as any} className={`text-${value.color}`} size={32} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-primary mb-3">
                        {value.title}
                      </h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 max-w-5xl mx-auto text-center">
            <blockquote className="font-serif text-4xl text-primary/90 italic leading-relaxed">
              «Живи, как танцуешь, и танцуй, как живёшь»
            </blockquote>
            <p className="text-lg text-muted-foreground mt-6">Ключевой тезис Нитанца</p>
          </div>
        </div>
      </section>

      <section id="practice" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-6xl font-bold text-center text-primary mb-8">
            5 этапов трансформации
          </h3>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Путь от пробуждения тела до программирования реальности
          </p>
          
          <div className="max-w-5xl mx-auto space-y-10">
            {[
              {
                num: '01',
                title: 'Подготовка',
                subtitle: 'Пробуждение телесного храма',
                description: 'Глубокое погружение в диалог с собственным телом. Растирание, прохлопывание, активация энергетических центров. Стимуляция соматосенсорной коры головного мозга, создание ритмического резонанса между различными частями тела.',
                icon: 'Hand',
                details: ['Растираем ладони и всё тело', 'Прохлопываем как после холодного душа', 'Позволяем телу двигаться интуитивно', 'Движемся в разные стороны']
              },
              {
                num: '02',
                title: 'Разминка',
                subtitle: 'Настройка тела и сознания',
                description: 'Под красивую музыку выполняются упражнения по разминке суставов, растяжке сухожилий. Плавные вращения последовательно прорабатывают всё тело, увеличивая подвижность и снимая мышечные блоки.',
                icon: 'Activity',
                details: ['Разминка всех суставов', 'Растяжка сухожилий', 'Интуитивные потягушки', 'Музыка как проводник']
              },
              {
                num: '03',
                title: 'Динамический Нитанец',
                subtitle: 'Активация внутреннего источника',
                description: 'Импровизация с элементами танца, боевых искусств и гимнастики. Цель — разогреть лимфу, разогнать кровь, прокачать выносливость. Умеренная нагрузка до появления испарины, активация терморегуляции.',
                icon: 'Flame',
                details: ['Свободная импровизация', 'Элементы танца и боевых искусств', 'Активация лимфы и кровообращения', 'Работа по силам с небольшим напряжением']
              },
              {
                num: '04',
                title: 'Нитанец-медитация',
                subtitle: 'Творение реальности через движение',
                description: 'Свободное интуитивное движение под медленную музыку. Каждая конечность — кисточка с разноцветными красками, которыми мы рисуем картину своей реальности. Активация правого полушария, креативности и творческих зон мозга.',
                icon: 'Sparkles',
                details: ['Отпускаем тело в свободное движение', 'Представляем кисточки на конечностях', 'Рисуем картину новой реальности', 'Творческое самовыражение']
              },
              {
                num: '05',
                title: 'Созерцание',
                subtitle: 'Программирование и самогипноз',
                description: 'В тишине или под медитативную музыку наблюдаем и фиксируем состояние. Осознанная рефлексия изменений на всех уровнях. Формируем позитивные программы, наслаждаемся ощущениями в теле и сознании.',
                icon: 'Eye',
                details: ['Наблюдение за состоянием', 'Формирование позитивных программ', 'Самогипноз и программирование', 'Наслаждение ощущениями']
              }
            ].map((stage, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-10">
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <Icon name={stage.icon as any} className="text-primary-foreground" size={40} />
                      </div>
                      <div className="font-serif text-5xl font-bold text-primary/30">
                        {stage.num}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-serif text-3xl font-semibold text-primary mb-2">
                        {stage.title}
                      </h4>
                      <p className="text-secondary font-medium text-xl mb-4 italic">
                        {stage.subtitle}
                      </p>
                      <p className="text-foreground/80 leading-relaxed text-lg mb-5">
                        {stage.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {stage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                            <span className="text-foreground/70 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="science" className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/f68d0bdc-f840-4997-a823-8d1af16c07b4/files/8c0d4d56-2823-4bef-8e9c-92b6ddf39a63.jpg')` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="font-serif text-6xl font-bold text-center text-primary mb-8">
            Научное обоснование
          </h3>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            Современные исследования подтверждают: Нитанец — это целостная система перепрограммирования организма
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
            {[
              {
                icon: 'Brain',
                title: 'Нейрофизиология',
                subtitle: 'Перезагрузка мозга',
                points: [
                  'Синхронизация полушарий',
                  'Усиление альфа-ритмов на 20–30%',
                  'Стимуляция нейропластичности',
                  'Активация творческих зон',
                  'Новые нейронные связи'
                ]
              },
              {
                icon: 'HeartPulse',
                title: 'Физиология',
                subtitle: 'Оздоровление тела',
                points: [
                  'Снижение кортизола на 25%',
                  'Увеличение серотонина и дофамина',
                  'Активация лимфосистемы',
                  'Увеличение гибкости на 25–30%',
                  'Детоксикация через движение'
                ]
              },
              {
                icon: 'Smile',
                title: 'Психология',
                subtitle: 'Гармонизация сознания',
                points: [
                  'Снятие эмоциональных блоков',
                  'Развитие креативного мышления',
                  'Повышение осознанности',
                  'Гармонизация эмоций',
                  'Свободное выражение себя'
                ]
              }
            ].map((science, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <Icon name={science.icon as any} className="text-primary-foreground" size={44} />
                  </div>
                  <h4 className="font-serif text-3xl font-semibold text-primary mb-2">
                    {science.title}
                  </h4>
                  <p className="text-secondary font-medium text-lg mb-6 italic">
                    {science.subtitle}
                  </p>
                  <ul className="text-left space-y-3">
                    {science.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-accent/5">
            <CardContent className="p-10 text-center">
              <Icon name="Award" className="text-secondary mx-auto mb-6" size={56} />
              <h4 className="font-serif text-3xl font-bold text-primary mb-4">
                Целостная трансформация
              </h4>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Нитанец создает оптимальные условия для запуска естественных механизмов саморегуляции 
                и исцеления, превращая движение в мощный инструмент личной трансформации на всех 
                уровнях: физическом, эмоциональном, ментальном и духовном.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="vision" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-6xl font-bold text-center text-primary mb-8">
            Видение будущего
          </h3>
          <p className="text-center text-3xl text-foreground/90 mb-6 italic max-w-4xl mx-auto">
            «Нитания — не страна на карте, а состояние сознания на карте человеческой эволюции»
          </p>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Сообщество третьего тысячелетия — путь к 3000-летию
          </p>
          
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-12">
                <h4 className="font-serif text-4xl font-bold text-center text-primary mb-12">
                  Концепция развития на тысячелетия
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: 'Globe',
                      title: 'Нитанцы в каждой стране',
                      description: 'Сообщество людей как послы нового сознания, воплощающих и транслирующих ценности гармонии, красоты и единства'
                    },
                    {
                      icon: 'GraduationCap',
                      title: 'Школы Нитанца',
                      description: 'Интеграция практики в каждую образовательную систему для воспитания целостного мышления и креативности с детства'
                    },
                    {
                      icon: 'Building2',
                      title: 'Храмы Движения',
                      description: 'Специальные пространства в каждом городе, где каждый может восстановить связь с собой и другими через практику'
                    },
                    {
                      icon: 'TreePine',
                      title: 'Заповедники Нитании',
                      description: 'Охраняемые природные территории по всей планете — порталы в иное состояние для глубокой практики и восстановления'
                    }
                  ].map((vision, index) => (
                    <div key={index} className="flex gap-5 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name={vision.icon as any} className="text-primary-foreground" size={28} />
                      </div>
                      <div>
                        <h5 className="font-serif text-2xl font-semibold text-primary mb-2">
                          {vision.title}
                        </h5>
                        <p className="text-foreground/80 leading-relaxed">
                          {vision.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              { icon: 'Heart', title: 'Сердцекратия', desc: 'Новая форма управления мудростью и заботой' },
              { icon: 'Sparkles', title: 'Экономика Созидания', desc: 'От потребления к развитию сознания' },
              { icon: 'BookOpen', title: 'Образование', desc: 'Раскрытие врожденных талантов' },
              { icon: 'Palette', title: 'Искусство', desc: 'Каждое действие — акт творчества' }
            ].map((principle, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all animate-scale-in hover-scale" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={principle.icon as any} className="text-accent" size={28} />
                  </div>
                  <h5 className="font-serif text-xl font-semibold text-primary mb-2">
                    {principle.title}
                  </h5>
                  <p className="text-foreground/70 text-sm">
                    {principle.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-3xl text-primary/90 italic leading-relaxed mb-6">
              «Преображая себя, мы преображаем мир. Ваша трансформация — ваш главный вклад 
              в создание прекрасного будущего»
            </p>
            <p className="text-lg text-muted-foreground">Манифест Нитанцев</p>
          </blockquote>
        </div>
      </section>

      <section id="join" className="py-24 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="font-serif text-6xl font-bold mb-6">
            Экспериментальный практикум
          </h3>
          <p className="text-2xl mb-4 max-w-3xl mx-auto opacity-95 font-light">
            АЛХИМИЯ СВОБОДНОГО ДВИЖЕНИЯ
          </p>
          <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
            7-дневное глубокое погружение в философию и практику Нитанца
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-85">
            Первая группа под моим личным руководством как автора метода. 
            Уникальный шанс стать со-творцом традиции и частью истории.
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-primary-foreground/95 border-2 border-primary-foreground/20">
              <CardContent className="p-10">
                <h4 className="font-serif text-3xl font-semibold text-primary mb-6">Что вы получаете:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Ежедневные занятия под моим руководством',
                    'Персональные рекомендации и обратная связь',
                    'Глубокие теоретические материалы',
                    'Закрытое сообщество единомышленников',
                    'Практики для самостоятельного развития',
                    'Шанс стать со-творцом традиции',
                    'Опыт личной трансформации',
                    'Инициация в состояние жизни'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 text-left">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={22} />
                      <span className="text-foreground/90 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-primary/20">
                  <p className="text-xl text-foreground/80 mb-2">
                    <strong className="text-primary">Участие:</strong> за добровольное пожертвование (любая сумма от сердца)
                  </p>
                  <p className="text-lg text-foreground/70">
                    Для членов клуба «Проявление» — включено
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://t.me/nitanec" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-xl px-10 py-7 gap-3 hover-scale">
                <Icon name="Send" size={24} />
                Telegram-канал
              </Button>
            </a>
            <a 
              href="https://t.me/crypatma" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-xl px-10 py-7 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-scale">
                <Icon name="MessageCircle" size={24} />
                Написать автору
              </Button>
            </a>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-serif italic mb-4">
              3 шага для вступления:
            </p>
            <ol className="text-left space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">1.</span>
                <span>Подпишитесь на Telegram-канал: <a href="https://t.me/nitanec" className="underline">@nitanec</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">2.</span>
                <span>Напишите слово «Нитанец» в личные сообщения: <a href="https://t.me/crypatma" className="underline">@crypatma</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">3.</span>
                <span>Получите инструкции и доступ к группе, чтобы начать свой путь</span>
              </li>
            </ol>
          </div>

          <div className="mt-16 pt-12 border-t border-primary-foreground/20">
            <blockquote className="font-serif text-3xl italic leading-relaxed max-w-4xl mx-auto">
              «Это не просто курс. Это начало путешествия домой — к себе настоящему. 
              Это шанс стать частью сообщества, которое помнит: истинная красота способна преобразить мир»
            </blockquote>
          </div>
        </div>
      </section>

      <footer className="bg-background py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-serif text-2xl font-bold text-primary mb-3">НИТАНЕЦ</h5>
              <p className="text-foreground/70 leading-relaxed">
                Квинтэссенция 20-летнего опыта саморазвития. Симфония тела, духа, сознания и природы.
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-primary mb-3">Основано</h6>
              <p className="text-foreground/70">1 октября 2024 года</p>
              <p className="text-foreground/70 mt-2 italic">Автор метода и основатель сообщества</p>
            </div>
            <div>
              <h6 className="font-semibold text-primary mb-3">Связь</h6>
              <div className="space-y-2">
                <a href="https://t.me/nitanec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Icon name="Send" size={18} />
                  Telegram-канал
                </a>
                <a href="https://t.me/crypatma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={18} />
                  Написать автору
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-primary/20">
            <p className="text-foreground/60 text-sm">
              © 2024 Нитанец. Практика осознанного движения и целостного развития
            </p>
            <p className="text-foreground/50 text-sm mt-2 italic">
              «Красота преобразит мир!» — Кредо Нитанца
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

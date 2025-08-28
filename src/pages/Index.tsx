import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-montserrat font-semibold text-foreground">
              Артём Щербинин
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">Экспертиза</a>
              <a href="#methodology" className="text-muted-foreground hover:text-primary transition-colors">Методология</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Опыт</a>
              <a href="#cooperation" className="text-muted-foreground hover:text-primary transition-colors">Сотрудничество</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/f858dd3e-3a4f-4634-8741-961982f5decc.png" 
              alt="Артём Щербинин"
              className="w-33 h-33 mx-auto mb-6 border-4 border-primary/26 object-cover rounded-full"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Артём Щербинин
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Специалист по построению стратегии, операционному управлению и организационному развитию
          </p>
          <div className="bg-card border rounded-2xl p-8 mb-12">
            <p className="text-lg text-card-foreground leading-relaxed">
              Работаю с собственниками и руководителями компаний, которым необходимо систематизировать бизнес, 
              повысить эффективность и выстроить устойчивую операционную модель.
            </p>
          </div>
          <Button size="lg" className="font-medium">
            <Icon name="MessageCircle" size={20} />
            Обсудить проект
          </Button>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12">
            Сфера экспертизы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "TrendingUp", title: "Стратегическое планирование и анализ", desc: "Разработка долгосрочных стратегий развития" },
              { icon: "Settings", title: "Построение и оптимизация бизнес-процессов", desc: "Автоматизация и улучшение рабочих процессов" },
              { icon: "Truck", title: "Управление производством и логистикой", desc: "Оптимизация производственных циклов" },
              { icon: "FileText", title: "Разработка регламентов, KPI и систем контроля", desc: "Создание системы показателей эффективности" },
              { icon: "Users", title: "Создание HR-инфраструктуры", desc: "Рекрутинг, онбординг, карьерная лестница, ИПР" },
              { icon: "Heart", title: "Формирование корпоративной культуры", desc: "Развитие внутренних коммуникаций" },
              { icon: "ArrowUp", title: "Вывод убыточных подразделений на прибыльность", desc: "Реструктуризация и оптимизация затрат" },
              { icon: "BarChart3", title: "Data-driven подход к принятию решений", desc: "Аналитика и метрики для управления" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} className="text-accent-foreground" />
                  </div>
                  <CardTitle className="font-montserrat text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              <strong>Отрасли:</strong> производство (мебель, дома, окна, модульные конструкции), 
              здравоохранение, строительство, B2B-услуги
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12">
            Методология
          </h3>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Работаю по модели «Стратегия — Операционка — Организация»
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Strategic Level */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Target" size={32} className="text-primary-foreground" />
                </div>
                <CardTitle className="font-montserrat text-2xl">1. Стратегический уровень</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Анализ прибыли и построение Формул</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Декомпозиция выручки</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Позиционирование по RDB и EST</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Диагностика потребностей клиента (JTBD) и карта его пути (CJM)</span>
                </div>
              </CardContent>
            </Card>

            {/* Operational Level */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Cog" size={32} className="text-accent-foreground" />
                </div>
                <CardTitle className="font-montserrat text-2xl">2. Операционный уровень</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1" />
                  <span className="text-sm">Внедрение стандартизации на основе лучшего опыта</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1" />
                  <span className="text-sm">Применение метода "прогрессивного джипега" (© Артемий Лебедев)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1" />
                  <span className="text-sm">Визуализация потока (Kanban), равномерность загрузки (heijunka)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1" />
                  <span className="text-sm">Цикл PDCA для непрерывного улучшения</span>
                </div>
              </CardContent>
            </Card>

            {/* Organizational Level */}
            <Card className="bg-gradient-to-br from-secondary/30 to-secondary/10">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Building" size={32} className="text-secondary-foreground" />
                </div>
                <CardTitle className="font-montserrat text-2xl">3. Организационный уровень</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Построение HR-процессов с нуля: от рекрутинга до развития</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Разработка системы индивидуальных планов (ИПР)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Формирование языка и смысловых рамок для команды</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                  <span className="text-sm">Упрощение коммуникаций и документации</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12">
            Опыт работы
          </h3>
          <div className="space-y-8">
            {[
              {
                title: "Стоматологическая клиника",
                period: "2022–2025",
                achievements: [
                  "Построил с нуля зуботехническую лабораторию: команда, процессы, оцинковка, вывод на прибыль",
                  "За 6 месяцев создал HR-отдел: рекрутинг, онбординг, система корпоративной культуры",
                  "Внедрил систему обучения и адаптации для 300 ассистентов: онлайн-курс, карьерная лестница, ИПР",
                  "Операционный консалтинг, разработка стратегии, запуск новой клиники с нуля"
                ]
              },
              {
                title: "Производство модульных домов",
                period: "2021–2022",
                achievements: [
                  "Реорганизовал производство, выстроил регламенты, оптимизировал логистику",
                  "Повысил эффективность сборки и сократил простои"
                ]
              },
              {
                title: "Строительная компания (деревянные дома)",
                period: "2020–2021",
                achievements: [
                  "Внедрил систему контроля качества",
                  "Оптимизировал процессы между бригадами",
                  "Построил систему коммуникации и отчетности"
                ]
              },
              {
                title: "Компания по установке оконных систем",
                period: "2019–2020",
                achievements: [
                  "Выстроил процессы монтажа и обслуживания",
                  "Внедрил CRM и систему напоминаний",
                  "Снизил количество рекламаций"
                ]
              },
              {
                title: "Производство мебели премиум-класса",
                period: "2018–2019",
                achievements: [
                  "Оптимизировал цепочку поставок",
                  "Перестроил цех",
                  "Упростил коммуникацию с клиентами"
                ]
              }
            ].map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montserrat text-xl">{experience.title}</CardTitle>
                    <Badge variant="secondary">{experience.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Section */}
      <section id="cooperation" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12">
            Форматы сотрудничества
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Clock", title: "Консультационные проекты", desc: "от 4 до 12 недель" },
              { icon: "Building2", title: "Построение подразделений с нуля", desc: "Полный цикл создания отделов" },
              { icon: "Search", title: "Аудит и реорганизация текущих процессов", desc: "Анализ и оптимизация" },
              { icon: "FileCheck", title: "Разработка и внедрение регламентов", desc: "Документирование процессов" },
              { icon: "Rocket", title: "Поддержка в запуске новых направлений", desc: "Сопровождение новых проектов" }
            ].map((format, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={format.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat">{format.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{format.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-6">
                Образование
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="GraduationCap" size={20} className="text-primary mt-1" />
                  <span>Стоматолог, клинический специалист</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="GraduationCap" size={20} className="text-primary mt-1" />
                  <span>Магистр нанотехнологий и наноматериалов</span>
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-6">
                Контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <a href="tel:89644394369" className="hover:text-primary transition-colors">
                    +7 (964) 439-43-69
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <a href="mailto:Art.Shcherbinin@yandex.ru" className="hover:text-primary transition-colors">
                    Art.Shcherbinin@yandex.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <a href="https://t.me/Art_and_group" className="hover:text-primary transition-colors">
                    @Art_and_group
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground p-8">
              <h4 className="text-2xl font-montserrat font-bold mb-4">
                Готовы систематизировать ваш бизнес?
              </h4>
              <p className="mb-6 opacity-90">
                Давайте обсудим, как я могу помочь повысить эффективность вашей компании
              </p>
              <Button variant="secondary" size="lg" className="font-medium">
                <Icon name="MessageCircle" size={20} />
                Написать в Telegram
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Артём Щербинин. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
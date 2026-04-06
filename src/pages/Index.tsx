import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Можно ли заниматься при грыже или протрузии?",
    a: "Да — именно для этого курс и создан. Все упражнения имеют безопасные варианты для людей с грыжами и протрузиями. Перед началом мы рекомендуем проконсультироваться с врачом и сообщить Светлане о вашем диагнозе — она поможет выбрать подходящий уровень.",
  },
  {
    q: "Я никогда не занималась физкультурой. Справлюсь?",
    a: "Обязательно. Курс начинается с самых простых движений — лёжа, без нагрузки на позвоночник. Первый блок специально рассчитан на тех, кто начинает с нуля. Многие ученики Светланы говорят, что это первый формат, который им удалось выдержать до конца.",
  },
  {
    q: "Сколько времени нужно уделять занятиям?",
    a: "15–30 минут в день, 3–5 раз в неделю. Упражнения можно делать дома, без тренажёров и специального коврика. В бонусном блоке есть отдельный утренний комплекс на 15 минут.",
  },
  {
    q: "Будет ли больно? Мне страшно навредить себе.",
    a: "Боли быть не должно — это главный принцип курса. Если какое-то упражнение вызывает дискомфорт, всегда есть более мягкий вариант. Светлана объясняет, что чувствовать «правильно», а что — сигнал остановиться.",
  },
  {
    q: "Как долго ждать результата?",
    a: "Большинство учеников замечают снижение утренней скованности и боли уже через 2–3 недели. Устойчивый результат — формирование мышечного корсета и профилактика рецидивов — происходит к 5–6 неделе.",
  },
  {
    q: "Что если я пропущу занятие или отстану?",
    a: "Ничего страшного. Все материалы остаются у вас — можно возвращаться в удобном темпе. Куратор поддерживает на протяжении всего курса и помогает не потеряться.",
  },
];

function FaqBlock() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden transition-all"
          style={{ border: open === i ? "1.5px solid rgba(181,97,74,0.3)" : "1.5px solid rgba(181,97,74,0.12)", backgroundColor: open === i ? "rgba(250,246,240,1)" : "rgba(250,246,240,0.7)", boxShadow: open === i ? "0 6px 24px rgba(181,97,74,0.10)" : "none" }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-display text-xl" style={{ color: "var(--warm-brown)" }}>{item.q}</span>
            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: open === i ? "var(--terracotta)" : "var(--soft-peach)" }}>
              <Icon name={open === i ? "Minus" : "Plus"} size={16} style={{ color: open === i ? "var(--warm-cream)" : "var(--terracotta)" }} />
            </span>
          </button>
          {open === i && (
            <div className="px-7 pb-6">
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.8 }}>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", level: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--warm-cream)" }}>

      {/* НАВИГАЦИЯ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ backgroundColor: "rgba(250,246,240,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(181,97,74,0.12)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-display text-xl font-medium" style={{ color: "var(--terracotta)" }}>
            Светлана Конькова
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[["#problem", "Проблема"], ["#how", "Как помогает ЛФК"], ["#program", "Программа"], ["#results", "Результаты"], ["#about", "Об авторе"], ["#signup", "Записаться"]].map(([href, label]) => (
              <a key={href} href={href} className="text-base font-body transition-colors" style={{ color: "var(--warm-brown)", opacity: 0.8 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--terracotta)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--warm-brown)")}
              >{label}</a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--terracotta)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 px-2">
            {[["#problem", "Проблема"], ["#how", "Как помогает ЛФК"], ["#program", "Программа"], ["#results", "Результаты"], ["#about", "Об авторе"], ["#signup", "Записаться"]].map(([href, label]) => (
              <a key={href} href={href} className="text-base font-body py-1" style={{ color: "var(--warm-brown)" }} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ГЕРОЙ */}
      <section className="relative min-h-screen flex items-center overflow-hidden texture-bg pt-20">
        <div className="absolute top-10 right-0 w-96 h-96 watercolor-blob animate-float opacity-40" style={{ background: "radial-gradient(ellipse, rgba(242,221,208,0.9) 0%, rgba(232,196,180,0.6) 40%, transparent 70%)" }} />
        <div className="absolute bottom-20 left-0 w-80 h-80 watercolor-blob-2 animate-float delay-300 opacity-30" style={{ background: "radial-gradient(ellipse, rgba(216,228,208,0.9) 0%, rgba(154,181,138,0.5) 40%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 watercolor-blob opacity-20 animate-float delay-500" style={{ background: "radial-gradient(ellipse, rgba(212,145,126,0.6) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-body mb-6" style={{ backgroundColor: "var(--sage-light)", color: "var(--warm-brown)" }}>
              <Icon name="Leaf" size={14} />
              Лечебная физкультура для позвоночника
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "var(--warm-brown)" }}>
              Верни себе<br />
              <span className="gradient-text italic">лёгкость движения</span>
            </h1>
            <p className="font-body text-xl leading-relaxed mb-8" style={{ color: "var(--warm-brown)", opacity: 0.75 }}>
              Авторский курс ЛФК — мягко, системно, без боли.<br />
              Адаптирован для грыж, протрузий и остеохондроза.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#signup" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-body font-medium text-lg transition-all hover:shadow-lg hover:scale-105 whitespace-nowrap"
                style={{ backgroundColor: "var(--terracotta)", color: "var(--warm-cream)" }}>
                Записаться на курс
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#program" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-body font-medium text-lg transition-all border whitespace-nowrap"
                style={{ borderColor: "var(--dusty-rose)", color: "var(--terracotta)" }}>
                Смотреть программу
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              {[["150+", "учеников прошли курс"], ["87%", "отмечают снижение боли"], ["12", "лет практики"]].map(([num, text]) => (
                <div key={num} className="text-center">
                  <div className="font-display text-2xl font-semibold" style={{ color: "var(--terracotta)" }}>{num}</div>
                  <div className="font-body text-base mt-1" style={{ color: "var(--warm-brown)", opacity: 0.7 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fade-in delay-400">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 watercolor-blob" style={{ background: "radial-gradient(ellipse at 40% 40%, var(--soft-peach) 0%, var(--blush) 50%, rgba(216,228,208,0.6) 80%, transparent 100%)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl mb-2" style={{ color: "var(--terracotta)", opacity: 0.3 }}>🌿</div>
                  <div className="font-display text-5xl italic" style={{ color: "var(--warm-brown)", opacity: 0.6 }}>ЛФК</div>
                  <div className="font-body text-base mt-2" style={{ color: "var(--warm-brown)", opacity: 0.5 }}>оздоровление позвоночника</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="font-body text-sm" style={{ color: "var(--warm-brown)", opacity: 0.5 }}>листайте вниз</div>
          <Icon name="ChevronDown" size={16} style={{ color: "var(--dusty-rose)" }} />
        </div>
      </section>

      {/* ПРОБЛЕМА */}
      <section id="problem" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 80% 50%, var(--soft-peach) 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="font-body text-base uppercase tracking-widest mb-4" style={{ color: "var(--dusty-rose)" }}>Реальность</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--warm-brown)" }}>
              Боль в спине — это не<br /><span className="italic gradient-text">«само пройдёт»</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "Users", stat: "80%", text: "взрослых людей хотя бы раз страдали от боли в спине", color: "var(--dusty-rose)" },
              { icon: "TrendingUp", stat: "в 2 раза", text: "выросло число обращений с грыжами и протрузиями за 10 лет", color: "var(--terracotta)" },
              { icon: "Clock", stat: "7 лет", text: "в среднем проходит, прежде чем человек начинает лечиться правильно", color: "var(--sage)" },
            ].map(({ icon, stat, text, color }) => (
              <div key={stat} className="card-hover rounded-3xl p-8 text-center" style={{ backgroundColor: "rgba(250,246,240,0.8)", border: "1px solid rgba(181,97,74,0.12)", boxShadow: "0 4px 24px rgba(181,97,74,0.08)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${color}22` }}>
                  <Icon name={icon} size={24} style={{ color }} />
                </div>
                <div className="font-display text-4xl font-semibold mb-3" style={{ color }}>{stat}</div>
                <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.75 }}>{text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, var(--soft-peach) 0%, var(--blush) 100%)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl mb-6" style={{ color: "var(--warm-brown)" }}>Узнаёте себя?</h3>
                <div className="space-y-4">
                  {["Боль или скованность после сна или долгого сидения", "Прострелы в пояснице, онемение в руках или ногах", "Врачи говорят «жить можно, но…»", "Боитесь навредить упражнениями — и поэтому не делаете ничего"].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--terracotta)" }}>
                        <Icon name="Check" size={12} style={{ color: "var(--warm-cream)" }} />
                      </div>
                      <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl italic mb-4" style={{ color: "var(--terracotta)", opacity: 0.4 }}>«</div>
                <p className="font-display text-2xl italic leading-relaxed" style={{ color: "var(--warm-brown)" }}>
                  Правильное движение лечит лучше, чем его отсутствие. Важно знать — какое именно.
                </p>
                <p className="font-body text-base mt-4" style={{ color: "var(--dusty-rose)" }}>— Светлана Конькова</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КАК ПОМОГАЕТ ЛФК */}
      <section id="how" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 watercolor-blob opacity-20" style={{ background: "radial-gradient(ellipse, var(--sage-light) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest mb-4" style={{ color: "var(--sage)" }}>Механизм восстановления</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--warm-brown)" }}>
              Как ЛФК<br /><span className="italic gradient-text">восстанавливает</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "Shield", title: "Снимает мышечный спазм", desc: "Специальные упражнения расслабляют перенапряжённые мышцы — именно они удерживают боль даже при грыже.", num: "01" },
              { icon: "Zap", title: "Восстанавливает кровоток", desc: "Питание межпозвонковых дисков зависит от движения. Без него диски «сохнут» и разрушаются.", num: "02" },
              { icon: "ArrowUpRight", title: "Формирует мышечный корсет", desc: "Сильные глубокие мышцы держат позвоночник — это лучшая профилактика грыж и рецидивов.", num: "03" },
              { icon: "Heart", title: "Безопасно при диагнозах", desc: "Каждое упражнение адаптировано. Есть варианты для грыж, протрузий, остеохондроза и начинающих.", num: "04" },
            ].map(({ icon, title, desc, num }) => (
              <div key={num} className="card-hover rounded-3xl p-8 flex gap-6" style={{ backgroundColor: "rgba(250,246,240,0.9)", border: "1px solid rgba(181,97,74,0.10)", boxShadow: "0 4px 20px rgba(181,97,74,0.06)" }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--soft-peach)" }}>
                    <Icon name={icon} size={22} style={{ color: "var(--terracotta)" }} />
                  </div>
                </div>
                <div>
                  <div className="font-display text-base mb-1" style={{ color: "var(--dusty-rose)" }}>{num}</div>
                  <h3 className="font-display text-xl mb-2" style={{ color: "var(--warm-brown)" }}>{title}</h3>
                  <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.72 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(216,228,208,0.5) 0%, rgba(154,181,138,0.2) 100%)", border: "1px solid rgba(154,181,138,0.3)" }}>
            <h3 className="font-display text-2xl mb-6 text-center" style={{ color: "var(--warm-brown)" }}>Три уровня сложности в каждом занятии</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { level: "Начинающий", emoji: "🌱", desc: "Нет опыта, хочу начать бережно и безопасно", tag: "нет противопоказаний" },
                { level: "С ограничениями", emoji: "🌿", desc: "Есть диагноз: грыжа, протрузия, остеохондроз", tag: "адаптировано" },
                { level: "Поддерживающий", emoji: "🌳", desc: "Уже занимаюсь, хочу системность и прогресс", tag: "для практикующих" },
              ].map(({ level, emoji, desc, tag }) => (
                <div key={level} className="text-center p-6 rounded-2xl" style={{ backgroundColor: "rgba(250,246,240,0.7)" }}>
                  <div className="text-3xl mb-3">{emoji}</div>
                  <div className="font-display text-lg mb-2" style={{ color: "var(--warm-brown)" }}>{level}</div>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "var(--warm-brown)", opacity: 0.7 }}>{desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full font-body text-sm" style={{ backgroundColor: "var(--sage-light)", color: "var(--warm-brown)" }}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ПРОГРАММА КУРСА */}
      <section id="program" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-80 h-80 watercolor-blob opacity-25" style={{ background: "radial-gradient(ellipse, var(--blush) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest mb-4" style={{ color: "var(--dusty-rose)" }}>Содержание</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--warm-brown)" }}>Программа курса</h2>
            <p className="font-body mt-4 text-base" style={{ color: "var(--warm-brown)", opacity: 0.65 }}>6 недель — от первого упражнения до устойчивого результата</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { week: "Блок 1", title: "Диагностика и основы", duration: "1–2 неделя", topics: ["Анализ вашего состояния", "Безопасная активация мышц", "Дыхательные практики", "Начальный комплекс"], color: "var(--soft-peach)" },
              { week: "Блок 2", title: "Снятие боли", duration: "2–3 неделя", topics: ["Работа с мышечным спазмом", "Упражнения лёжа", "Миофасциальный релиз", "Расслабляющие практики"], color: "var(--blush)" },
              { week: "Блок 3", title: "Восстановление", duration: "3–4 неделя", topics: ["Мобилизация позвоночника", "Упражнения сидя", "Осанка и выравнивание", "Адаптация к диагнозу"], color: "var(--sage-light)" },
              { week: "Блок 4", title: "Укрепление", duration: "4–5 неделя", topics: ["Глубокие мышцы кора", "Упражнения стоя", "Баланс и координация", "Нагрузка без риска"], color: "var(--soft-peach)" },
              { week: "Блок 5", title: "Стабилизация", duration: "5–6 неделя", topics: ["Формирование корсета", "Функциональные движения", "Профилактика рецидивов", "Закрепление навыков"], color: "var(--blush)" },
              { week: "Бонус", title: "Самостоятельная практика", duration: "постоянно", topics: ["Утренний 15-мин комплекс", "Упражнения в офисе", "Экстренная помощь при боли", "Поддержка куратора"], color: "var(--sage-light)" },
            ].map(({ week, title, duration, topics, color }) => (
              <div key={week} className="card-hover rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(181,97,74,0.10)", boxShadow: "0 4px 20px rgba(181,97,74,0.06)" }}>
                <div className="h-2" style={{ backgroundColor: color }} />
                <div className="p-6" style={{ backgroundColor: "rgba(250,246,240,0.95)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: "var(--dusty-rose)" }}>{week}</div>
                      <h3 className="font-display text-xl" style={{ color: "var(--warm-brown)" }}>{title}</h3>
                    </div>
                    <span className="font-body text-xs px-3 py-1 rounded-full" style={{ backgroundColor: color, color: "var(--warm-brown)" }}>{duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {topics.map(t => (
                      <li key={t} className="flex items-center gap-2 font-body text-base" style={{ color: "var(--warm-brown)", opacity: 0.78 }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--terracotta)" }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТЫ */}
      <section id="results" className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--warm-cream) 0%, var(--soft-peach) 50%, var(--warm-cream) 100%)" }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>Истории учеников</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--warm-brown)" }}>
              Результаты<br /><span className="italic gradient-text">и трансформация</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Марина, 42 года", result: "Грыжа L4-L5", before: "Не могла долго сидеть за компьютером, боль после 20 минут", after: "Работаю 4–5 часов без дискомфорта. Грыжа не исчезла, но жизнь вернулась.", initials: "М" },
              { name: "Сергей, 55 лет", result: "Остеохондроз шейного отдела", before: "Головные боли, онемение в руках по утрам", after: "Головные боли ушли через 3 недели. Онемение — редко и слабее.", initials: "С" },
              { name: "Ольга, 38 лет", result: "Протрузии + сколиоз", before: "Боялась вообще заниматься — страшно навредить", after: "Наконец нашла безопасный формат. Хожу прямее, спина устаёт меньше.", initials: "О" },
            ].map(({ name, result, before, after, initials }) => (
              <div key={name} className="card-hover rounded-3xl p-8" style={{ backgroundColor: "rgba(250,246,240,0.95)", border: "1px solid rgba(181,97,74,0.12)", boxShadow: "0 4px 24px rgba(181,97,74,0.08)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display text-xl" style={{ backgroundColor: "var(--blush)", color: "var(--terracotta)" }}>{initials}</div>
                  <div>
                    <div className="font-display text-base" style={{ color: "var(--warm-brown)" }}>{name}</div>
                    <div className="font-body text-sm" style={{ color: "var(--dusty-rose)" }}>{result}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "rgba(212,145,126,0.1)" }}>
                    <div className="font-body text-xs uppercase tracking-wider mb-2" style={{ color: "var(--dusty-rose)" }}>До курса</div>
                    <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.8 }}>{before}</p>
                  </div>
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "rgba(154,181,138,0.15)" }}>
                    <div className="font-body text-xs uppercase tracking-wider mb-2" style={{ color: "var(--sage)" }}>После курса</div>
                    <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.8 }}>{after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "150+", label: "учеников прошли курс" },
              { num: "87%", label: "снизили интенсивность боли" },
              { num: "6 нед", label: "до устойчивого результата" },
              { num: "12", label: "лет авторской практики" },
            ].map(({ num, label }) => (
              <div key={num} className="text-center py-8 rounded-3xl" style={{ backgroundColor: "rgba(250,246,240,0.7)", border: "1px solid rgba(181,97,74,0.1)" }}>
                <div className="font-display text-4xl font-semibold mb-2 gradient-text">{num}</div>
                <div className="font-body text-sm leading-snug" style={{ color: "var(--warm-brown)", opacity: 0.7 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОБ АВТОРЕ */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 opacity-20 watercolor-blob-2" style={{ background: "radial-gradient(ellipse, var(--sage-light) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Фото автора */}
            <div className="relative flex justify-center">
              <div className="relative w-72 md:w-80" style={{ aspectRatio: "3/4" }}>
                {/* Акварельный фон за фото */}
                <div className="absolute -inset-4 watercolor-blob opacity-60" style={{ background: "linear-gradient(135deg, var(--soft-peach) 0%, var(--blush) 50%, var(--sage-light) 100%)" }} />
                <img
                  src="https://cdn.poehali.dev/projects/ce4a157d-5ad6-400e-b3ce-c5c306802806/bucket/41c574ed-3a2d-4673-b121-cc96b9efcae0.jpg"
                  alt="Светлана Конькова — инструктор ЛФК"
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-lg"
                  style={{ objectPosition: "top center" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-2 md:-right-6 px-4 py-3 rounded-2xl shadow-lg z-20" style={{ backgroundColor: "var(--warm-cream)", border: "1px solid rgba(181,97,74,0.15)" }}>
                <div className="font-display text-lg" style={{ color: "var(--terracotta)" }}>150+</div>
                <div className="font-body text-sm" style={{ color: "var(--warm-brown)", opacity: 0.7 }}>учеников</div>
              </div>
            </div>

            <div>
              <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "var(--dusty-rose)" }}>Об авторе</p>
              <h2 className="font-display text-4xl mb-2" style={{ color: "var(--warm-brown)" }}>Светлана Конькова</h2>
              <p className="font-body text-base mb-6" style={{ color: "var(--terracotta)" }}>Специалист по физической культуре, инструктор ЛФК</p>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "var(--warm-brown)", opacity: 0.78 }}>
                Помогаю людям вернуть лёгкость движения — мягко и безопасно. Знаю, как страшно начинать, когда есть диагноз, и как важно делать это правильно.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "var(--warm-brown)", opacity: 0.78 }}>
                Специализируюсь на работе с грыжами позвоночника, протрузиями и остеохондрозом. Каждое упражнение в курсе адаптировано под реальные ограничения и проверено на практике.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Специалист по физической культуре", "Инструктор ЛФК", "150+ учеников прошли курс", "Безопасный подход при диагнозах"].map(credential => (
                  <div key={credential} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--sage-light)" }}>
                      <Icon name="Check" size={12} style={{ color: "var(--sage)" }} />
                    </div>
                    <span className="font-body text-base leading-snug" style={{ color: "var(--warm-brown)" }}>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ФОРМА ЗАПИСИ */}
      <section id="signup" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--soft-peach) 0%, var(--blush) 50%, rgba(216,228,208,0.4) 100%)" }} />
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(250,246,240,0.8) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>Начните сейчас</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--warm-brown)" }}>
              Запишитесь<br /><span className="italic gradient-text">на курс</span>
            </h2>
            <p className="font-body text-base" style={{ color: "var(--warm-brown)", opacity: 0.72 }}>
              Оставьте заявку — Светлана свяжется с вами и подберёт подходящий уровень
            </p>
          </div>

          <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: "rgba(250,246,240,0.95)", boxShadow: "0 20px 60px rgba(181,97,74,0.15)" }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--sage-light)" }}>
                  <Icon name="Check" size={28} style={{ color: "var(--sage)" }} />
                </div>
                <h3 className="font-display text-3xl mb-3" style={{ color: "var(--warm-brown)" }}>Заявка принята!</h3>
                <p className="font-body text-base" style={{ color: "var(--warm-brown)", opacity: 0.72 }}>Светлана свяжется с вами в ближайшее время 🌿</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-base mb-2" style={{ color: "var(--warm-brown)" }}>Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Как вас зовут?"
                      className="w-full px-4 py-3 rounded-2xl font-body text-base outline-none transition-all"
                      style={{ backgroundColor: "var(--soft-peach)", border: "1.5px solid transparent", color: "var(--warm-brown)" }}
                      onFocus={e => (e.target.style.borderColor = "var(--dusty-rose)")}
                      onBlur={e => (e.target.style.borderColor = "transparent")}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-base mb-2" style={{ color: "var(--warm-brown)" }}>Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-2xl font-body text-base outline-none transition-all"
                      style={{ backgroundColor: "var(--soft-peach)", border: "1.5px solid transparent", color: "var(--warm-brown)" }}
                      onFocus={e => (e.target.style.borderColor = "var(--dusty-rose)")}
                      onBlur={e => (e.target.style.borderColor = "transparent")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-base mb-2" style={{ color: "var(--warm-brown)" }}>Ваш уровень подготовки</label>
                  <select
                    value={formData.level}
                    onChange={e => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl font-body text-base outline-none transition-all"
                    style={{ backgroundColor: "var(--soft-peach)", border: "1.5px solid transparent", color: "var(--warm-brown)" }}
                    onFocus={e => (e.target.style.borderColor = "var(--dusty-rose)")}
                    onBlur={e => (e.target.style.borderColor = "transparent")}
                  >
                    <option value="">Выберите вариант</option>
                    <option value="beginner">Новичок — впервые занимаюсь</option>
                    <option value="diagnosis">Есть диагноз (грыжа, протрузия, остеохондроз)</option>
                    <option value="moderate">Занимаюсь периодически</option>
                    <option value="regular">Практикую регулярно</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-body font-medium text-lg transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.99]"
                  style={{ backgroundColor: "var(--terracotta)", color: "var(--warm-cream)" }}
                >
                  Записаться на курс
                </button>
                <p className="text-center font-body text-sm" style={{ color: "var(--warm-brown)", opacity: 0.55 }}>
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ */}
      <section id="faq" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 20% 60%, var(--sage-light) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, var(--soft-peach) 0%, transparent 50%)" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="font-body text-base uppercase tracking-widest mb-4" style={{ color: "var(--dusty-rose)" }}>Отвечаем честно</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--warm-brown)" }}>
              Часто задаваемые<br /><span className="italic gradient-text">вопросы</span>
            </h2>
          </div>
          <FaqBlock />
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="font-display text-2xl mb-2" style={{ color: "var(--terracotta)" }}>Светлана Конькова</div>
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.7 }}>
                Реабилитолог, инструктор ЛФК.<br />12 лет восстанавливаю позвоночник.
              </p>
            </div>
            <div>
              <div className="font-body text-xs uppercase tracking-wider mb-4" style={{ color: "var(--dusty-rose)" }}>Контакты</div>
              <div className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (___) ___-__-__", label: "Телефон" },
                  { icon: "Mail", text: "info@example.com", label: "Email" },
                  { icon: "MessageCircle", text: "WhatsApp / Telegram", label: "Мессенджеры" },
                ].map(({ icon, text, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--soft-peach)" }}>
                      <Icon name={icon} size={14} style={{ color: "var(--terracotta)" }} />
                    </div>
                    <div>
                      <div className="font-body text-sm" style={{ color: "var(--warm-brown)", opacity: 0.55 }}>{label}</div>
                      <div className="font-body text-base" style={{ color: "var(--warm-brown)" }}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-body text-xs uppercase tracking-wider mb-4" style={{ color: "var(--dusty-rose)" }}>Соцсети</div>
              <div className="flex gap-3">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "Youtube", label: "YouTube" },
                  { icon: "Send", label: "Telegram" },
                ].map(({ icon, label }) => (
                  <a key={label} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "var(--soft-peach)", color: "var(--terracotta)" }}>
                    <Icon name={icon} size={18} />
                  </a>
                ))}
              </div>
              <p className="font-body text-sm mt-4 leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.6 }}>
                Подписывайтесь — там бесплатные упражнения и советы каждую неделю
              </p>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(181,97,74,0.15)" }}>
            <p className="font-body text-sm" style={{ color: "var(--warm-brown)", opacity: 0.5 }}>
              © 2026 Школа ушу Светланы Коньковой. Все права защищены.
            </p>
            <a href="#" className="font-body text-sm" style={{ color: "var(--warm-brown)", opacity: 0.5 }}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
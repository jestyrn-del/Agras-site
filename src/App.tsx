import './App.css'
import { useState } from 'react'

const products = [
  { name: 'HD 580', model: 'AGR 40', tank: '70 л', flow: '40 л/мин', badge: 'Хит продаж' },
  { name: 'HD 580', model: 'AGR 30', tank: '50 л', flow: '30 л/мин', badge: 'В наличии' },
  { name: 'HD 580', model: 'AGR 20', tank: '30 л', flow: '20 л/мин', badge: 'Компактный' },
  { name: 'HD 580', model: 'AGR 40 PRO', tank: '70 л', flow: '40 л/мин', badge: 'Для больших площадей' },
  { name: 'HD 580', model: 'AGR 30 PRO', tank: '50 л', flow: '30 л/мин', badge: 'Популярный' },
  { name: 'HD 580', model: 'AGR 20 PRO', tank: '30 л', flow: '20 л/мин', badge: 'Для садов' },
  { name: 'HD 580', model: 'AGR 40 X', tank: '70 л', flow: '40 л/мин', badge: 'Новая модель' },
  { name: 'HD 580', model: 'AGR 30 X', tank: '50 л', flow: '30 л/мин', badge: 'Универсальный' },
]

const directions = [
  ['Внедрение под ключ', 'Аудит полей, подбор конфигурации, поставка, регистрация, обучение и сервис. Один договор, один ответственный.', 'Как проходит проект'],
  ['Агродроны Аграс', 'Опрыскивание, внесение удобрений и аэросъёмка. Подберём технику под площадь и культуры.', 'Смотреть модели'],
  ['Прицепные комплекты', 'Собственное производство: перевозка, хранение, растворный узел, генератор и площадка для пилота.', 'Собрать комплект'],
  ['Сервис 24/7', 'Круглосуточный приём заявок, выезд инженера по SLA, склад запчастей и подменный борт.', 'Условия сервиса'],
  ['Компоненты и запчасти', 'Аккумуляторы, форсунки, насосы, генераторы, пропеллеры и распылители со склада и под заказ.', 'Каталог запчастей'],
  ['Обучение пилотов', 'Теория и практика на вашей технике. На выходе сертифицированный пилот, готовый к самостоятельной работе.', 'Программа курса'],
]

const problems = [
  ['Купили дрон — летать некому', 'Обучаем пилота вашего хозяйства или предоставляем своего оператора на сезон.'],
  ['Борт встал в разгар обработки', 'Сервис 24/7: приём заявки круглосуточно, выезд инженера и подменный дрон на время ремонта.'],
  ['Не проходит по бюджету и бухгалтерии', 'Работаем с НДС, оформляем лизинг и готовим документы для субсидии.'],
  ['Дрон есть, а летать нельзя', 'Ставим на учёт в Росавиации, оформляем разрешения и ведём полётную документацию.'],
]

const processSteps = [
  ['Аудит', '1–3 дня', 'Смотрим площади, культуры и рельеф. Считаем окупаемость по вашим цифрам.', 'Расчёт и рекомендация по комплектации'],
  ['Подбор и КП', '2–5 дней', 'Подбираем решение под задачу и бюджет. Показываем варианты от минимального до оптимального.', 'Предложение с ценой и сроками'],
  ['Поставка и оформление', '2–5 дней', 'Подготавливаем технику и документы, передаём прицепной комплекс.', 'Борт готов к вылету'],
  ['Обучение пилота', '5–10 дней', 'Теория, наземные проверки и практика на вашем поле с вашими препаратами.', 'Пилот с сертификатом'],
  ['Сервисное сопровождение', 'Постоянно', 'Плановое ТО, склад запчастей, круглосуточная линия и подменный борт.', 'Техника работает весь сезон'],
]

const cases = [
  ['Регион • 5 га', 'Хозяйство, регион', 'Обрабатывали наземным опрыскивателем: много проходов и потери от вытаптывания. Взяли дрон с прицепом и обучили своего пилота.'],
  ['Сад • сервис 24/7', 'Хозяйство, регион, сад', 'Техника не заходила в междурядья после дождя. Подобрали модель и сервисный контракт для своевременных обработок.'],
  ['Сервисная компания', 'Сервисная компания, регион', 'Взяли четыре борта и два прицепа для работы на сторону. Комплекс помогает планировать загрузку и сезонные работы.'],
]

const documents = [
  'Свидетельство ИНН/ОГРН',
  'Дилерские сертификаты',
  'Сертификаты на прицепы',
  'Образец договора оказания услуг',
  'Гарантийные обязательства',
]

const quizOptions = [
  ['Купить агродрон', 'Прицепной комплект', 'Сервис и ремонт', 'Обучение пилота', 'Запчасти и компоненты', 'Внедрение под ключ'],
  ['Зерновые', 'Пропашные культуры', 'Сады и виноградники', 'Картофель и овощи'],
  ['До 500 га', '500–1 500 га', '1 500–3 000 га', 'Более 3 000 га'],
  ['1–2 обработки', '3–4 обработки', '5 и более'],
  ['Свой опрыскиватель', 'Есть пилот', 'Ничего из перечисленного'],
  ['В ближайший месяц', 'В этом сезоне', 'Пока изучаю варианты'],
  ['По телефону', 'В мессенджере', 'По электронной почте'],
]

const quizQuestions = [
  'Какие услуги или товары вас интересуют?',
  'Какие культуры обрабатываете?',
  'Какова площадь хозяйства?',
  'Сколько обработок проводите за сезон?',
  'Какая техника и команда уже есть?',
  'Когда планируете начать?',
  'Как с вами удобнее связаться?',
]

const navLinks = [
  ['Оборудование', '#models'], ['Сервис', '#directions'], ['Обучение пилотов', '#directions'],
  ['Кейсы и результаты', '#cases'], ['О компании', '#team'], ['Контакты', '#contacts'],
]

function SectionTitle({ kicker, children, description }: { kicker?: string; children: string; description?: string }) {
  return (
    <div className="section-title">
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Аграс, на главную">
        <span className="brand-symbol">А</span>
        <span className="brand-copy"><strong>АГРАС</strong><small>агродроны для вашего бизнеса</small></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Открыть меню" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Основная навигация">
        {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="social-link" href="https://t.me/" aria-label="Telegram">tg</a>
        <a className="social-link max-link" href="https://max.ru/" aria-label="MAX">m</a>
        <a className="header-cta" href="#callback">Связаться <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}

function DroneIllustration() {
  return (
    <div className="drone-art" role="img" aria-label="Иллюстрация сельскохозяйственного дрона">
      <div className="drone-frame"><i /><i /><i /><i /><b /></div>
      <div className="drone-tank" />
      <div className="drone-leg leg-left" />
      <div className="drone-leg leg-right" />
      <div className="drone-shadow" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-backdrop" />
      <Header />
      <div className="hero-content">
        <p className="hero-overline">Внедряем агродроны под ключ — от подбора до сервиса 24/7</p>
        <div className="hero-title-wrap">
          <h1><span>АГРО</span><span>ТЕХ<sup>®</sup></span></h1>
          <div className="hero-caption">АГРОДРОНЫ<br />ДЛЯ ВАШЕГО<br />БИЗНЕСА</div>
        </div>
        <div className="hero-bottom">
          <div className="hero-buttons">
            <a className="button button-lime" href="#callback">Получить консультацию <span aria-hidden="true">↗</span></a>
            <a className="button button-dark" href="#models">В каталог <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">Подбор техники, прицепы собственного производства, обучение и поддержка в сезон.</div>
        </div>
      </div>
      <div className="hero-drone"><DroneIllustration /></div>
      <div className="hero-scroll"><span /> листайте вниз</div>
    </section>
  )
}

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  return (
    <article className="product-card">
      <div className="product-topline"><span>{product.name}</span><span>{product.model}</span></div>
      <div className={`product-image product-image-${index % 4}`}><DroneIllustration /><span className="product-badge">{product.badge}</span></div>
      <div className="product-specs">
        <span>Объём бака <b>{product.tank}</b></span>
        <span>Максимальный вылив <b>{product.flow}</b></span>
        <span>Цена с НДС <b>По запросу</b></span>
      </div>
      <div className="product-actions"><a className="button button-pale" href="#callback">Подробнее</a><a className="button button-lime" href="#callback">Оставить заявку</a></div>
    </article>
  )
}

function Models() {
  const [showAll, setShowAll] = useState(false)
  const visibleProducts = showAll ? products : products.slice(0, 4)
  return (
    <section className="section-band models-section" id="models">
      <div className="content-wrap">
        <SectionTitle kicker="Подберём под вашу задачу">ТОП моделей</SectionTitle>
        <div className="product-grid">{visibleProducts.map((product, index) => <ProductCard key={product.model} product={product} index={index} />)}</div>
        <button className="button button-dark show-all" type="button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Свернуть каталог' : 'Все модели'} <span aria-hidden="true">{showAll ? '↑' : '↓'}</span></button>
      </div>
    </section>
  )
}

function FieldMap() {
  return (
    <section className="field-section" id="results">
      <div className="content-wrap field-content">
        <div className="field-stats">
          {[["N", 'хозяйств', 'работают на нашей технике'], ['N', 'гектар', 'обработано за сезон'], ['N', 'лет', 'на рынке агротехники'], ['N', 'часов', 'среднее время выезда сервиса'], ['N', 'позиций', 'ходовых запчастей на складе']].map(([value, title, caption]) => (
            <div className="stat-tile" key={title}><strong>{value}</strong><b>{title}</b><span>{caption}</span></div>
          ))}
        </div>
        <div className="field-map" aria-label="Карта проектов Аграс">
          <div className="map-river" /><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" />
          {['pin-a', 'pin-b', 'pin-c', 'pin-d', 'pin-e', 'pin-f', 'pin-g'].map((pin, index) => <span className={`map-pin ${pin}`} key={pin} title={`Проект ${index + 1}`} />)}
          <div className="map-tooltip"><strong>Регионы присутствия</strong><span>Техника работает в хозяйствах по всей России</span></div>
          <span className="map-label">карта проектов</span>
        </div>
      </div>
    </section>
  )
}

function Directions() {
  return (
    <section className="section-band directions-section" id="directions">
      <div className="content-wrap">
        <SectionTitle kicker="От выбора борта до поддержки в сезон" description="Которые закрывают весь цикл — от выбора борта до ремонта в разгар сезона.">Шесть направлений</SectionTitle>
        <div className="direction-grid">
          {directions.map(([title, text, action], index) => <article className={`direction-card direction-${index + 1}`} key={title}>
            <span className="direction-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href={index === 1 ? '#models' : '#callback'}>{action}<span aria-hidden="true"> ↗</span></a>
          </article>)}
        </div>
      </div>
    </section>
  )
}

function Situations() {
  return (
    <section className="situations-section" id="situations">
      <div className="content-wrap situations-content">
        <SectionTitle kicker="Решения для сезонных задач" description="У нас есть регламент на каждый этап работы.">Четыре ситуации, из-за которых агродрон простаивает</SectionTitle>
        <div className="problem-solution-head"><span>Проблема</span><span>Решение</span></div>
        <div className="problem-grid">
          {problems.map(([problem, solution]) => <article className="problem-row" key={problem}><p>{problem}</p><p>{solution}</p></article>)}
        </div>
      </div>
    </section>
  )
}

function Trailer() {
  const trailers = [['Базовый', '1 борт', 'Для небольших площадей и работы в одиночку.'], ['Стандарт', '2 борта', 'Растворный узел, генератор, площадка пилота.'], ['Максимум', '4 борта', 'Для сервисных бригад и крупных хозяйств.']]
  return (
    <section className="section-band trailer-section" id="trailers">
      <div className="content-wrap">
        <SectionTitle kicker="Собственное производство" description="Стандартный комплекс перевозит и хранит два агродрона. Делаем варианты на один и на четыре.">Прицепные комплекты</SectionTitle>
        <div className="trailer-grid"><p className="trailer-intro">Мы не перепродаём чужие прицепы — варим и собираем свои. Поэтому меняем конфигурацию под вашу задачу: число бортов, растворный узел, генератор или площадка пилота на крыше.</p>
          {trailers.map(([name, count, text], index) => <article className="trailer-card" key={name}><span className="trailer-number">0{index + 1}</span><h3>{name}<br />{count}</h3><p>{text}</p><a href="#callback">Подробнее <span aria-hidden="true">↗</span></a></article>)}
        </div>
      </div>
    </section>
  )
}

function Quiz() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const isComplete = step === quizQuestions.length
  return (
    <section className="quiz-section" id="quiz">
      <div className="content-wrap">
        <SectionTitle kicker="Подбор за пару минут" description="Ответьте на несколько вопросов — подготовим персональную рекомендацию.">Подберём решение под ваши цели за 7 вопросов</SectionTitle>
        <div className="quiz-panel">
          {isComplete ? <div className="quiz-complete"><span className="quiz-progress">Готово</span><h3>Спасибо, решение уже почти готово</h3><p>Оставьте контакты в форме ниже, и специалист свяжется с вами для уточнения деталей.</p><a className="button button-lime" href="#callback">Оставить контакты <span aria-hidden="true">↓</span></a></div> : <>
            <div className="quiz-heading"><span className="quiz-progress">{step + 1}<i>/7</i></span><div><span className="section-kicker">Вопрос {step + 1}</span><h3>{quizQuestions[step]}</h3></div></div>
            <div className="quiz-options">{quizOptions[step].map((option) => <label className={selected.includes(option) ? 'quiz-option is-selected' : 'quiz-option'} key={option}><input type="checkbox" checked={selected.includes(option)} onChange={(event) => setSelected(event.target.checked ? [...selected, option] : selected.filter((item) => item !== option))} /><span className="checkmark" />{option}</label>)}</div>
            <div className="quiz-footer"><a href="#callback">Задать вопрос без анкеты</a><button type="button" className="button button-lime" onClick={() => { setStep(step + 1); setSelected([]) }}>Дальше <span aria-hidden="true">→</span></button></div>
          </>}
        </div>
      </div>
    </section>
  )
}

function Calculator() {
  const [hectares, setHectares] = useState(3000)
  const [selectedCrops, setSelectedCrops] = useState(['Зерновые', 'Пропашные'])
  const [contractorCost, setContractorCost] = useState('')
  const [droneCost, setDroneCost] = useState('')
  const costDifference = Number(contractorCost) - Number(droneCost)
  const hasCosts = contractorCost !== '' && droneCost !== ''
  const estimatedSaving = Math.round(hectares * costDifference)
  return (
    <section className="calculator-section" id="calculator">
      <div className="content-wrap">
        <SectionTitle kicker="Расчёт для вашего хозяйства">Посчитайте, за сколько окупится ваш агродрон</SectionTitle>
        <div className="calculator-layout">
          <div className="calculator-controls">
            <label className="control-label" htmlFor="area-range"><span>Площадь обработки за сезон, га</span><strong>{hectares.toLocaleString('ru-RU')} га</strong></label>
            <input id="area-range" className="area-range" type="range" min="100" max="5000" step="100" value={hectares} onChange={(event) => setHectares(Number(event.target.value))} />
            <div className="range-labels"><span>100</span><span>5 000</span></div>
            <fieldset className="crop-field"><legend>Культуры</legend>{['Зерновые', 'Пропашные', 'Сады', 'Овощи'].map((crop) => <label key={crop}><input type="checkbox" checked={selectedCrops.includes(crop)} onChange={(event) => setSelectedCrops(event.target.checked ? [...selectedCrops, crop] : selectedCrops.filter((item) => item !== crop))} />{crop}</label>)}</fieldset>
            <label className="text-input-label">Подрядчик, ₽/га<input type="number" placeholder="Введите стоимость" min="0" value={contractorCost} onChange={(event) => setContractorCost(event.target.value)} /></label>
            <label className="text-input-label">Свой дрон, ₽/га<input type="number" placeholder="Введите стоимость" min="0" value={droneCost} onChange={(event) => setDroneCost(event.target.value)} /></label>
            <fieldset className="crop-field"><legend>Что уже есть</legend>{['Ничего, обрабатываем подрядчиком', 'Свой опрыскиватель и механик', 'Есть пилот, нужен только борт'].map((option, index) => <label key={option}><input type="radio" name="equipment" defaultChecked={index === 0} />{option}</label>)}</fieldset>
          </div>
          <aside className="calculator-result"><span className="section-kicker">Предварительный результат</span><h3>{!hasCosts ? 'Введите стоимость обработки' : costDifference > 0 ? 'Потенциальная экономия за сезон' : costDifference < 0 ? 'Дополнительные затраты относительно подрядчика' : 'Разницы по затратам нет'}</h3><strong className="saving-value">{hasCosts ? `${estimatedSaving > 0 ? '+' : ''}${estimatedSaving.toLocaleString('ru-RU')} ₽` : '—'}</strong><p>{hasCosts ? `Расчёт для ${hectares.toLocaleString('ru-RU')} га по разнице введённых затрат на гектар. Выбранные культуры: ${selectedCrops.length ? selectedCrops.join(', ') : 'не выбраны'}.` : 'Укажите стоимость обработки подрядчиком и собственным дроном за гектар. Расчёт не включает стоимость покупки техники и зависит от вашей комплектации.'}</p><a className="button button-lime" href="#callback">Получить точный расчёт <span aria-hidden="true">↗</span></a><small>Оценка по введённым данным, не является коммерческим предложением.</small></aside>
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="section-band steps-section" id="steps">
      <div className="content-wrap">
        <SectionTitle kicker="Понятный путь к первому вылету" description="От заявки до первого вылета — обычно несколько недель.">Как проходит внедрение полного цикла</SectionTitle>
        <div className="steps-grid">{processSteps.map(([title, duration, text, result], index) => <article className="step-item" key={title}><span className="step-number">{index + 1}</span><div><div className="step-title"><h3>{title}</h3><span>{duration}</span></div><p>{text}</p><strong>Результат:</strong><span>{result}</span></div></article>)}</div>
        <div className="steps-actions"><a className="button button-lime" href="#callback">Запросить расчёт</a><a className="button button-dark" href="#documents">Документы и условия</a></div>
      </div>
    </section>
  )
}

function Cases() {
  return (
    <section className="section-band cases-section" id="cases">
      <div className="content-wrap"><SectionTitle kicker="Практика, а не обещания" description="Примеры задач, которые решаем вместе с клиентами.">Как это работает у наших клиентов</SectionTitle>
        <div className="cases-grid">{cases.map(([label, title, text], index) => <article className="case-card" key={title}><div className={`case-visual case-visual-${index}`}><span>{label}</span><div className="field-lines" /><b>{['↗ +32%', '24/7', '4 борта'][index]}</b></div><div className="case-copy"><span className="case-category">{['Пропашные • 5 га', 'Сад • сервис', 'Сервисная компания'][index]}</span><h3>{title}</h3><p>{text}</p><a href="#callback">Подробнее <span aria-hidden="true">↗</span></a></div></article>)}</div>
      </div>
    </section>
  )
}

function Partners() {
  const partners = ['Поставщики техники', 'Лизинговые компании', 'Сервисные центры', 'Агросервисы', 'Учебные площадки', 'Сельхозпроизводители']
  return <section className="partners-section" id="partners"><div className="content-wrap"><SectionTitle kicker="Работаем вместе">Наши партнёры</SectionTitle><div className="partner-grid">{partners.map((partner, index) => <div className="partner-mark" key={partner}><span>0{index + 1}</span><strong>{partner}</strong></div>)}</div></div></section>
}

function Team() {
  const roles = [['Подбор и расчёт', 'Экономика и комплектация'], ['Сервисный инженер', 'Диагностика и выезд'], ['Пилот-инструктор', 'Обучение и практика'], ['Специалист по документам', 'Регистрация и разрешения']]
  return <section className="section-band team-section" id="team"><div className="content-wrap"><SectionTitle kicker="Люди, которые отвечают за результат">Команда Аграс</SectionTitle><div className="team-grid">{roles.map(([role, description], index) => <article className="team-card" key={role}><div className={`team-portrait portrait-${index}`}><span>{['А', 'И', 'П', 'Д'][index]}</span></div><h3>{role}</h3><p>{description}</p></article>)}</div></div></section>
}

function Blog() {
  const articles = [
    ['Документы • 7 мин', 'Регистрация агродрона в Росавиации: пошагово', 'Что подготовить заранее и сколько времени занимают основные этапы.'],
    ['Выбор техники • 5 мин', 'Как подобрать агродрон под площадь и культуру', 'Разбираем важные параметры бака, производительности и комплектации.'],
    ['Сервис • 6 мин', 'Как подготовить технику к сезону обработок', 'Чек-лист технического обслуживания перед первым вылетом.'],
  ]
  return <section className="blog-section" id="blog"><div className="content-wrap"><SectionTitle kicker="Полезное для хозяйства">Блог</SectionTitle><div className="blog-grid">{articles.map(([category, title, text], index) => <article className="blog-card" key={title}><div className={`blog-visual blog-visual-${index}`}><span>{['01', '02', '03'][index]}</span><div className="field-lines" /></div><div className="blog-copy"><span>{category}</span><h3>{title}</h3><p>{text}</p><a href="#callback">Читать <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
}

function Documents() {
  return <section className="documents-section" id="documents"><div className="content-wrap"><SectionTitle kicker="Открытая информация">Документы</SectionTitle><div className="document-list">{documents.map((document) => <a href="#callback" key={document}><span>{document}</span><small>PDF</small><span className="download-icon" aria-hidden="true">↓</span></a>)}</div></div></section>
}

function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false)
  return sent ? <p className="form-success" role="status">Заявка подготовлена. Спасибо! Мы свяжемся с вами.</p> : <form className={compact ? 'contact-form compact-form' : 'contact-form'} onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
    <label className="sr-only" htmlFor={compact ? 'name-compact' : 'name'}>Ваше имя</label><input id={compact ? 'name-compact' : 'name'} name="name" placeholder="Ваше имя" required />
    <label className="sr-only" htmlFor={compact ? 'contact-compact' : 'contact'}>Телефон или e-mail</label><input id={compact ? 'contact-compact' : 'contact'} name="contact" placeholder="Телефон или e-mail" required />
    {!compact && <div className="form-row"><input name="area" type="number" min="1" placeholder="Площадь, га" /><select name="region" defaultValue=""><option value="" disabled>Регион</option><option>Центральный</option><option>Южный</option><option>Приволжский</option><option>Другой регион</option></select></div>}
    <label className="consent"><input type="checkbox" required /><span>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.</span></label>
    <button className="button button-lime" type="submit">{compact ? 'Связаться со мной' : 'Запросить расчёт'} <span aria-hidden="true">↗</span></button>
  </form>
}

function Callback() {
  return <section className="callback-section" id="callback"><div className="content-wrap callback-layout"><div><span className="section-kicker">Заявка на консультацию</span><h2>Пришлём расчёт по вашим площадям</h2><p>Заполните несколько полей — подготовим комплектацию, стоимость и срок окупаемости.</p><div className="callback-contacts"><a href="https://t.me/">Telegram ↗</a><a href="https://max.ru/">MAX ↗</a></div></div><ContactForm /></div></section>
}

function Footer() {
  return <footer className="site-footer" id="contacts"><div className="content-wrap"><div className="footer-main"><div className="footer-about"><a className="brand" href="#home"><span className="brand-symbol">А</span><span className="brand-copy"><strong>АГРАС</strong><small>агродроны для вашего бизнеса</small></span></a><p>Внедрение агродронов под ключ: подбор, прицепные комплекты, обучение пилотов и сервис 24/7.</p></div><div className="footer-column"><strong>Оборудование</strong><a href="#models">Агродроны</a><a href="#trailers">Прицепные комплексы</a><a href="#directions">Компоненты и запчасти</a><a href="#callback">Лизинг</a></div><div className="footer-column"><strong>Услуги</strong><a href="#directions">Сервис 24/7</a><a href="#directions">Обучение пилотов</a><a href="#steps">Внедрение под ключ</a><a href="#calculator">Калькулятор</a></div><div className="footer-column"><strong>Компания</strong><a href="#team">О нас</a><a href="#cases">Кейсы</a><a href="#blog">Блог</a><a href="#documents">Документы</a></div><div className="footer-details"><strong>Контакты</strong><a href="#callback">Оставить заявку</a><a href="https://t.me/">Telegram</a><a href="https://max.ru/">MAX</a><span>Работаем по всей России</span></div></div><div className="footer-bottom"><span>© 2026 Аграс. Все права защищены.</span><a href="#documents">Политика конфиденциальности</a><a href="#documents">Политика обработки персональных данных</a><span>Сайт не является публичной офертой</span></div></div></footer>
}

function App() {
  return <main className="page"><Hero /><Models /><FieldMap /><Directions /><Situations /><Trailer /><Quiz /><Steps /><Calculator /><Cases /><Partners /><Team /><Blog /><Documents /><Callback /><Footer /></main>
}

export default App
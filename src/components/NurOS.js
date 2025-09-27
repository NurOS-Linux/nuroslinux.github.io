import React, { useState, useEffect } from 'react';
import '../styles/NurOS.css';

const NurOS = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Эффект для подсветки активного раздела в навигации
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = '#' + section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === current) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Эффект для анимации градиента в герой-секции
    useEffect(() => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            hero.style.backgroundPosition = `${x}% ${y}%`;
        };

        hero.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setIsMenuActive(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const teamMembers = [
        { name: "AnmiTaliDev", role: "Основатель, тимлид", skills: "" },
        { name: "Ruzen", role: "Разработчик установщика и Tulpar", skills: "C#, C++, Haskell, Python" },
        { name: "Meigoc", role: "Разработчик, Maintainer проекта Tulpar-server", skills: "Java, Python, C++" },
        { name: "chelik002", role: "Разработчик, Дизайнер", skills: "Python" },
        { name: "CosmoBlade", role: "Разработчик, Дизайнер", skills: "C++, Python, Go, JS, C" },
        { name: "Isnt", role: "Разработчик, Разработчик NeoInit", skills: "Zig, Rust, C" },
        { name: "TheMomer", role: "Разработчик, Дизайнер обоев", skills: "Python, Go, Lua" },
        { name: "Space", role: "Разработчик, Разработчик Aether Apps", skills: "Python, C#" },
        { name: "Rav1non", role: "Разработчик, Сборка пакетов", skills: "Python, Java" },
        { name: "got/gotrt", role: "Сетевое программирование, devops и langdev", skills: "Go, OCaml, C" },
        { name: "girisato", role: "Дизайнер", skills: "" }
    ];

    const features = [
        { title: "Независимость", description: "Не основан на других дистрибутивах, обеспечивая полный контроль над системой." },
        { title: "Формат APG", description: "Собственный формат пакетов с быстрой установкой и полной поддержкой зависимостей." },
        { title: "Современность", description: "Чистый интерфейс с интуитивно понятными инструментами настройки системы." },
        { title: "Сообщество", description: "Активная поддержка через форумы и социальные сети." }
    ];

    return (
        <div className="nuros-app">
            <header>
                <div className="container">
                    <div className="logo">
                        <h1>NurOS</h1>
                        <p className="tagline">Juldyz</p>
                    </div>
                    <nav className={isMenuActive ? 'active' : ''}>
                        <ul>
                            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Главная</a></li>
                            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>О проекте</a></li>
                            <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Возможности</a></li>
                            <li><a href="#download" onClick={(e) => handleNavClick(e, '#download')}>Скачать</a></li>
                            <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')}>Команда</a></li>
                            <li><a href="#community" onClick={(e) => handleNavClick(e, '#community')}>Сообщество</a></li>
                        </ul>
                    </nav>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            <section id="home" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h2 className="glowing-title">NurOS "Juldyz"</h2>
                        <p className="glowing-subtitle">Независимый Linux дистрибутив</p>
                        <div className="cta-buttons">
                            <a href="#download" className="btn glowing-btn" onClick={(e) => handleNavClick(e, '#download')}>Скачать</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">О проекте</h2>
                    <div className="about-content">
                        <p>NurOS — независимый Linux дистрибутив, разработанный в Казахстане. Создан для обеспечения высокой скорости, безопасности и доступности. Наша цель — создать открытую и мощную операционную систему для разработчиков и обычных пользователей.</p>
                        <p>Название "Juldyz" (Звезда на казахском) символизирует наш яркий путь к новым высотам в экосистеме Linux.</p>
                    </div>
                </div>
            </section>

            <section id="features" className="features">
                <div className="container">
                    <h2 className="section-title">Возможности</h2>
                    <div className="feature-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="requirements" className="requirements">
                <div className="container">
                    <h2 className="section-title">Системные требования</h2>
                    <div className="requirements-content">
                        <div className="requirement-item">
                            <strong>Процессор:</strong> 
                            <span>≥1 ядро, рекомендуется 2</span>
                        </div>
                        <div className="requirement-item">
                            <strong>Оперативная память:</strong> 
                            <span>≥2ГБ (рекомендуется 4ГБ)</span>
                        </div>
                        <div className="requirement-item">
                            <strong>Дисковое пространство:</strong> 
                            <span>≥15ГБ свободного места</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="download" className="download">
                <div className="container">
                    <h2 className="section-title">Скачать</h2>
                    <div className="download-options">
                        <a href="https://t.me/nuros_ru/754" className="btn">Скачать NurOS</a>
                        <p className="download-note">Примечание: rootfs необходимо монтировать самостоятельно</p>
                    </div>
                </div>
            </section>

            <section id="team" className="team">
                <div className="container">
                    <h2 className="section-title">Команда</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                                {member.skills && <p className="skills">{member.skills}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="community" className="community">
                <div className="container">
                    <h2 className="section-title">Сообщество</h2>
                    <div className="community-content">
                        <p>Присоединяйтесь к нашему сообществу разработчиков и пользователей.</p>
                        <div className="community-links">
                            <a href="https://github.com/nuros-linux" className="btn">GitHub</a>
                            <a href="https://forum.nuros.org/" className="btn">Форум</a>
                            <a href="https://t.me/nurosru_chat" className="btn">Чат</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title">Стань нашим разработчиком!</h2>
                    <div className="contact-content">
                        <p>Свяжитесь с нами для того чтобы стать нашим разработчиком.</p>
                        <p>Заполнить анкету: <a href="https://become.nuros.org/" className="btn">Анкета</a></p>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="footer-content">
                        <p>NurOS © 2025. Лицензия GNU AGPL v3.</p>
                        <p><a href="https://nuros.org">nuros.org</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NurOS;
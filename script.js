// Espera o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todas as funcionalidades do site
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initFormSubmission();
    addNavHoverEffects();
    addDecorativeElements();
    
    // Inicializa a nova seção de estratégia
    initEstrategiaSection();
    
    // Ativa animações iniciais
    setTimeout(animateOnScroll, 100);
});

// Inicialização da seção de estratégia
function initEstrategiaSection() {
    // Adiciona animações às etapas quando entram no viewport
    const stepCards = document.querySelectorAll('.step-card');
    
    // Inicializa as opacidades
    stepCards.forEach((card, index) => {
        // Adiciona class para animação
        card.classList.add('animate-on-scroll');
        
        // Configura delay de animação
        card.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Adiciona animação nos conectores
    const connectors = document.querySelectorAll('.step-connector');
    connectors.forEach(connector => {
        connector.classList.add('animate-on-scroll');
    });
    
    // Adiciona animação nos elementos decorativos
    const decorElements = document.querySelectorAll('.estrategia-decor-camera, .estrategia-decor-grid, .estrategia-decor-circles');
    decorElements.forEach(elem => {
        elem.classList.add('animate-on-scroll');
    });
    
    // Animação para o botão CTA
    const cta = document.querySelector('.estrategia-cta');
    if (cta) {
        cta.classList.add('animate-on-scroll');
        cta.style.transitionDelay = '0.6s';
    }
}

// Configuração da navegação mobile
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    // Evento de clique no ícone hamburger
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Adiciona estilo ao hamburger quando clicado
    if (hamburger) {
        const lines = hamburger.querySelectorAll('div');
        hamburger.addEventListener('click', function() {
            if (hamburger.classList.contains('toggle')) {
                lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Fecha o menu quando clicar em um link
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (hamburger && hamburger.classList.contains('toggle')) {
                    hamburger.click();
                }
            }
        });
    });
}

// Adiciona efeito hover na navegação
function addNavHoverEffects() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        // Verifica se já existe um elemento de linha
        if (!link.querySelector('.nav-hover-line')) {
            // Cria o elemento de linha para o efeito hover
            const hoverLine = document.createElement('span');
            hoverLine.className = 'nav-hover-line';
            
            // Adiciona a linha ao link
            link.appendChild(hoverLine);
        }
        
        // Adiciona eventos de mouse se ainda não existirem
        if (!link.hasEventListener) {
            link.hasEventListener = true;
            
            link.addEventListener('mouseenter', function() {
                const hoverLine = this.querySelector('.nav-hover-line');
                if (hoverLine) hoverLine.style.width = '100%';
            });
            
            link.addEventListener('mouseleave', function() {
                const hoverLine = this.querySelector('.nav-hover-line');
                if (hoverLine) hoverLine.style.width = '0';
            });
        }
    });
}

// Rolagem suave para âncoras
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calcula o offset com base no cabeçalho fixo
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animações de rolagem
function initScrollAnimations() {
    // Adiciona classe 'scrolled' ao header quando rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 0);
        }
        
        // Animação de elementos ao rolar
        animateOnScroll();
    });
}

// Anima elementos quando entram na viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('animated');
        }
    });
    
    // Animação específica para os cartões de estratégia quando visíveis
    const strategySectionEl = document.querySelector('.estrategia');
    if (strategySectionEl) {
        const strategySectionTop = strategySectionEl.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (strategySectionTop < windowHeight * 0.5) {
            setTimeout(() => {
                document.querySelectorAll('.step-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                });
                
                document.querySelectorAll('.step-connector').forEach((connector, index) => {
                    setTimeout(() => {
                        connector.classList.add('visible');
                    }, (index + 1) * 200);
                });
            }, 200);
        }
    }
}

// Evento de envio do formulário
function initFormSubmission() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const button = document.querySelector('button[type="submit"]');
            if (button) {
                button.innerHTML = 'Enviando...';
                button.disabled = true;
            }
            
            // O formulário será enviado normalmente para o FormSubmit
            // Este código apenas muda o botão para feedback visual
        });
    }
}

// Adiciona elementos visuais decorativos
function addDecorativeElements() {
    // Verifica se já existe container de elementos decorativos
    if (!document.querySelector('.visual-decorations')) {
        // Cria container para elementos decorativos
        const decorContainer = document.createElement('div');
        decorContainer.className = 'visual-decorations';
        document.body.appendChild(decorContainer);
        
        // Adiciona formas geométricas similares à proposta
        const shapes = [
            { type: 'circle', size: 100, posX: '5%', posY: '15%', color: '#f3ff00', opacity: 0.1 },
            { type: 'circle', size: 150, posX: '90%', posY: '70%', color: '#f3ff00', opacity: 0.05 },
            { type: 'line', width: 80, height: 3, posX: '15%', posY: '40%', color: '#f3ff00', opacity: 0.1, rotate: 45 },
            { type: 'line', width: 120, height: 3, posX: '80%', posY: '20%', color: '#f3ff00', opacity: 0.1, rotate: -30 },
            { type: 'grid', size: 150, posX: '85%', posY: '85%', color: '#f3ff00', opacity: 0.05 }
        ];
        
        // Cria e posiciona cada forma
        shapes.forEach(shape => {
            const el = document.createElement('div');
            el.className = `decor-element decor-${shape.type}`;
            
            // Estilos base
            el.style.position = 'absolute';
            el.style.zIndex = '-1';
            el.style.left = shape.posX;
            el.style.top = shape.posY;
            
            // Estilos específicos por tipo
            if (shape.type === 'circle') {
                el.style.width = `${shape.size}px`;
                el.style.height = `${shape.size}px`;
                el.style.borderRadius = '50%';
                el.style.backgroundColor = shape.color;
                el.style.opacity = shape.opacity;
            } 
            else if (shape.type === 'line') {
                el.style.width = `${shape.width}px`;
                el.style.height = `${shape.height}px`;
                el.style.backgroundColor = shape.color;
                el.style.opacity = shape.opacity;
                el.style.transform = `rotate(${shape.rotate}deg)`;
            }
            else if (shape.type === 'grid') {
                el.style.width = `${shape.size}px`;
                el.style.height = `${shape.size}px`;
                el.style.backgroundImage = `linear-gradient(${shape.color} 1px, transparent 1px), 
                                          linear-gradient(90deg, ${shape.color} 1px, transparent 1px)`;
                el.style.backgroundSize = '15px 15px';
                el.style.opacity = shape.opacity;
            }
            
            // Adiciona elemento ao container
            decorContainer.appendChild(el);
        });
        
        // Adiciona classe accent-text aos elementos que devem ter destaque
        const headings = document.querySelectorAll('.service-info h3, .client-name, .stat-number, .contact-info h4');
        headings.forEach(heading => {
            heading.classList.add('accent-text');
        });
    }
    
    // Adiciona classe de animação para elementos que devem animar ao rolar
    const animateElements = document.querySelectorAll('.service-card, .resultado-card, .testimonial, .portfolio-item');
    animateElements.forEach((el, index) => {
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
            // Adiciona delay progressivo para animação em cascata
            el.style.transitionDelay = `${index * 0.1}s`;
        }
    });
}

// Função auxiliar para verificar se elemento está visível
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}
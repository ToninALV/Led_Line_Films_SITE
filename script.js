// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

document.querySelector('form').addEventListener('submit', function(e) {
    const button = document.querySelector('button[type="submit"]');
    button.innerHTML = 'Enviando...';
    button.disabled = true;
    
    // O formulário será enviado normalmente para o FormSubmit
    // Este código apenas muda o botão para feedback visual
});

// Script para funcionalidades da página de agradecimento

// Você pode descomentar o código abaixo se quiser implementar
// um redirecionamento automático após alguns segundos


document.addEventListener('DOMContentLoaded', function() {
    // Configurações
    const redirectSeconds = 10;      // Tempo em segundos para redirecionar
    const redirectUrl = 'index.html'; // URL para redirecionamento
    
    // Criar elemento de contagem regressiva
    let secondsRemaining = redirectSeconds;
    const countdownElement = document.createElement('p');
    countdownElement.innerHTML = `Você será redirecionado para a página inicial em <span class="highlight">${secondsRemaining}</span> segundos...`;
    document.querySelector('.thank-you-card').appendChild(countdownElement);
    
    // Iniciar contagem regressiva
    const countdown = setInterval(() => {
        secondsRemaining--;
        countdownElement.innerHTML = `Você será redirecionado para a página inicial em <span class="highlight">${secondsRemaining}</span> segundos...`;
        
        if (secondsRemaining <= 0) {
            clearInterval(countdown);
            window.location.href = redirectUrl;
        }
    }, 1000);
});


// Animação adicional para o ícone de sucesso (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const successIcon = document.querySelector('.fa-check-circle');
    
    // Pequena animação para o ícone de sucesso
    if (successIcon) {
        successIcon.style.transform = 'scale(0.5)';
        successIcon.style.opacity = '0';
        
        setTimeout(() => {
            successIcon.style.transition = 'all 0.5s ease';
            successIcon.style.transform = 'scale(1)';
            successIcon.style.opacity = '1';
        }, 300);
    }
});
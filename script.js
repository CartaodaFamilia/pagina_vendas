// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua Public Key do EmailJS
})();

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coletar dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const consent = document.getElementById('consent').checked;
    
    // Validação
    if (!name || !email || !whatsapp || !consent) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Mostrar loading
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // 1. Enviar para o EmailJS
    const templateParams = {
        name: name,
        email: email,
        whatsapp: whatsapp,
        to_email: 'tiprimefamilia@gmail.com'
    };
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            
            // 2. Enviar para o WhatsApp
            const phoneNumber = '5519920038486';
            const message = `✅ NOVO LEAD - Cartão da Família Soulidari\n\n👤 Nome: ${name}\n📧 E-mail: ${email}\n📱 WhatsApp: ${whatsapp}\n\n💡 Lead captado via site`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Mensagem de sucesso
            alert('🎉 Formulário enviado com sucesso! Entraremos em contato em breve.');
            
            // Limpar formulário
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            console.error('Erro ao enviar e-mail:', error);
            
            // Mesmo se o email falhar, enviar para WhatsApp
            const phoneNumber = '5519920038486';
            const message = `✅ NOVO LEAD - Cartão da Família Soulidari\n\n👤 Nome: ${name}\n📧 E-mail: ${email}\n📱 WhatsApp: ${whatsapp}\n\n💡 Lead captado via site\n⚠️ E-mail falhou, verificar manualmente`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappURL, '_blank');
            alert('✅ Dados enviados para o WhatsApp! Entraremos em contato em breve.');
            
            document.getElementById('contactForm').reset();
        })
        .finally(function() {
            // Restaurar botão
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.benefit-card, .testimonial-card, .plan-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Sticky header effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

console.log('Cartão da Família Soulidari - Website loaded successfully!');
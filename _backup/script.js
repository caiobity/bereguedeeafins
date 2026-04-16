/* ========================================
   BEREGUEDÊ & AFINS - JavaScript
   ======================================== */

// --- Navbar scroll effect ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Mobile menu toggle ---
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// --- Countdown Timer ---
function updateCountdown() {
    const eventDate = new Date('2026-06-14T22:00:00-03:00');
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// --- FAQ Toggle ---
function toggleFaq(button) {
    const item = button.closest('.faq__item');
    const wasActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));

    // Toggle clicked
    if (!wasActive) {
        item.classList.add('active');
    }
}

// --- Quantity Control ---
function changeQty(type, delta) {
    const input = document.getElementById('qty-' + type);
    let value = parseInt(input.value) + delta;
    if (value < 1) value = 1;
    if (value > 10) value = 10;
    input.value = value;
}

// --- Checkout State ---
let checkoutData = {
    tipo: '',
    preco: 0,
    quantidade: 0
};

// --- Open Checkout Modal ---
function comprarIngresso(tipo, preco) {
    const qty = parseInt(document.getElementById('qty-' + tipo).value);
    const total = preco * qty;

    checkoutData = { tipo, preco, quantidade: qty };

    const nomes = {
        pista: 'Pista',
        camarote: 'Camarote',
        premium: 'Premium'
    };

    // Fill summary
    document.getElementById('modal-resumo').innerHTML = `
        <p><span>Ingresso:</span> <strong>${nomes[tipo]}</strong></p>
        <p><span>Valor unitário:</span> <strong>R$ ${preco.toFixed(2)}</strong></p>
        <p><span>Quantidade:</span> <strong>${qty}</strong></p>
    `;

    document.getElementById('modal-total').innerHTML = `
        <span>Total:</span>
        <span>R$ ${total.toFixed(2)}</span>
    `;

    updateParcelasOptions(total);
    document.getElementById('modal-checkout').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateParcelasOptions(total) {
    const select = document.getElementById('parcelas');
    select.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
        const valor = (total / i).toFixed(2);
        const label = i === 1 ? `1x de R$ ${valor} (sem juros)` : `${i}x de R$ ${valor} (sem juros)`;
        select.innerHTML += `<option value="${i}">${label}</option>`;
    }
}

// --- Close Modals ---
function fecharModal() {
    document.getElementById('modal-checkout').classList.remove('active');
    document.body.style.overflow = '';
}

function fecharModalSucesso() {
    document.getElementById('modal-sucesso').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(overlay => {
            overlay.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// --- Payment Method Toggle ---
document.querySelectorAll('input[name="metodo"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const cardFields = document.getElementById('card-fields');
        const btnText = document.getElementById('btn-pagar-text');

        if (this.value === 'cartao') {
            cardFields.style.display = 'block';
            btnText.textContent = 'Pagar com Cartão';
        } else {
            cardFields.style.display = 'none';
            if (this.value === 'pix') {
                btnText.textContent = 'Pagar com PIX';
            } else {
                btnText.textContent = 'Gerar Boleto';
            }
        }
    });
});

// --- Input Masks ---
document.getElementById('cpf').addEventListener('input', function (e) {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 9) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (v.length > 6) {
        v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (v.length > 3) {
        v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    e.target.value = v;
});

document.getElementById('telefone').addEventListener('input', function (e) {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) {
        v = v.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
    } else if (v.length > 2) {
        v = v.replace(/(\d{2})(\d{1,5})/, '($1) $2');
    }
    e.target.value = v;
});

const cardNumberInput = document.getElementById('card-number');
if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function (e) {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 16) v = v.slice(0, 16);
        v = v.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = v;
    });
}

const cardExpiryInput = document.getElementById('card-expiry');
if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', function (e) {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 4) v = v.slice(0, 4);
        if (v.length > 2) {
            v = v.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        }
        e.target.value = v;
    });
}

// --- Form Submission (Mercado Pago Integration) ---
document.getElementById('form-checkout').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const metodo = document.querySelector('input[name="metodo"]:checked').value;

    // Validation
    if (!nome || !email || !cpf || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (cpf.replace(/\D/g, '').length !== 11) {
        alert('CPF inválido. Digite os 11 dígitos.');
        return;
    }

    // Card validation
    if (metodo === 'cartao') {
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvv = document.getElementById('card-cvv').value;
        const cardHolder = document.getElementById('card-holder').value.trim();

        if (!cardNumber || !cardExpiry || !cardCvv || !cardHolder) {
            alert('Por favor, preencha todos os dados do cartão.');
            return;
        }

        if (cardNumber.length < 13) {
            alert('Número do cartão inválido.');
            return;
        }
    }

    // Show loading
    const btnText = document.getElementById('btn-pagar-text');
    const btnSpinner = document.getElementById('btn-spinner');
    const btnPagar = document.getElementById('btn-pagar');

    btnText.style.display = 'none';
    btnSpinner.style.display = 'block';
    btnPagar.disabled = true;

    try {
        // ====================================================
        // INTEGRAÇÃO COM MERCADO PAGO
        // ====================================================
        // Para produção, substitua pela sua PUBLIC_KEY do Mercado Pago
        // e configure o backend para processar os pagamentos.
        //
        // 1. Crie uma conta no Mercado Pago (https://www.mercadopago.com.br)
        // 2. Obtenha suas credenciais em:
        //    https://www.mercadopago.com.br/developers/panel/app
        // 3. Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública
        // 4. Configure um backend (Node.js/PHP/Python) para criar
        //    a preferência de pagamento e processar via API do MP
        // ====================================================

        const total = checkoutData.preco * checkoutData.quantidade;
        const nomes = { pista: 'Pista', camarote: 'Camarote', premium: 'Premium' };

        // Simulação do payload que seria enviado ao backend
        const paymentPayload = {
            item: {
                title: `Ingresso ${nomes[checkoutData.tipo]} - Bereguedê & Afins`,
                quantity: checkoutData.quantidade,
                unit_price: checkoutData.preco,
                currency_id: 'BRL'
            },
            payer: {
                name: nome,
                email: email,
                identification: {
                    type: 'CPF',
                    number: cpf.replace(/\D/g, '')
                },
                phone: telefone.replace(/\D/g, '')
            },
            payment_method: metodo,
            total_amount: total
        };

        console.log('Payload de pagamento:', paymentPayload);

        // ====================================================
        // EXEMPLO DE INTEGRAÇÃO COM BACKEND:
        //
        // const response = await fetch('/api/create-payment', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(paymentPayload)
        // });
        // const data = await response.json();
        //
        // if (data.init_point) {
        //     // Redireciona para o checkout do Mercado Pago
        //     window.location.href = data.init_point;
        // }
        // ====================================================

        // Simulação de processamento (remover em produção)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Sucesso - fechar modal de checkout e abrir modal de sucesso
        fecharModal();

        const detalhes = document.getElementById('sucesso-detalhes');
        detalhes.innerHTML = `
            <p><strong>Ingresso:</strong> ${nomes[checkoutData.tipo]}</p>
            <p><strong>Quantidade:</strong> ${checkoutData.quantidade}</p>
            <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
            <p><strong>Pagamento:</strong> ${metodo === 'pix' ? 'PIX' : metodo === 'cartao' ? 'Cartão de Crédito' : 'Boleto'}</p>
            <p><strong>E-mail:</strong> ${email}</p>
        `;

        document.getElementById('modal-sucesso').classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset form
        document.getElementById('form-checkout').reset();
        document.querySelector('input[name="metodo"][value="pix"]').checked = true;
        document.getElementById('card-fields').style.display = 'none';
        document.getElementById('btn-pagar-text').textContent = 'Pagar com PIX';

    } catch (error) {
        console.error('Erro no pagamento:', error);
        alert('Erro ao processar o pagamento. Tente novamente.');
    } finally {
        btnText.style.display = 'inline';
        btnSpinner.style.display = 'none';
        btnPagar.disabled = false;
    }
});

// --- Scroll Animations (Intersection Observer) ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.sobre__card, .atracoes__card, .ingressos__card, .local__detail, .faq__item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// CSS class for animated elements
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

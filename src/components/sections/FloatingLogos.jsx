"use client";

import { useEffect, useRef } from "react";

// Posições iniciais em % do container, tamanho em px, opacidade e rotação fixa.
// Distribuídas pela tela evitando o centro (onde fica a logo principal).
const LOGOS = [
  // Topo
  { left: 3,  top: 5,   size: 110, opacity: 0.18, rotate: -12 },
  { left: 12, top: 22,  size: 55,  opacity: 0.10, rotate: 4   },
  { left: 18, top: 15,  size: 70,  opacity: 0.13, rotate: 8   },
  { left: 25, top: 8,   size: 50,  opacity: 0.10, rotate: -2  },
  { left: 30, top: 4,   size: 60,  opacity: 0.11, rotate: -6  },
  { left: 42, top: 12,  size: 55,  opacity: 0.10, rotate: 15  },
  { left: 50, top: 22,  size: 50,  opacity: 0.09, rotate: -8  },
  { left: 56, top: 6,   size: 65,  opacity: 0.11, rotate: 5   },
  { left: 64, top: 14,  size: 55,  opacity: 0.10, rotate: -16 },
  { left: 70, top: 16,  size: 75,  opacity: 0.13, rotate: -10 },
  { left: 78, top: 8,   size: 50,  opacity: 0.10, rotate: 7   },
  { left: 87, top: 5,   size: 95,  opacity: 0.16, rotate: 14  },

  // Laterais (meio vertical)
  { left: 2,  top: 38,  size: 130, opacity: 0.14, rotate: -18 },
  { left: 14, top: 46,  size: 65,  opacity: 0.10, rotate: 10  },
  { left: 22, top: 56,  size: 55,  opacity: 0.10, rotate: -12 },
  { left: 30, top: 42,  size: 60,  opacity: 0.11, rotate: 6   },
  { left: 36, top: 30,  size: 50,  opacity: 0.09, rotate: 18  },
  { left: 44, top: 52,  size: 55,  opacity: 0.10, rotate: -10 },
  { left: 54, top: 38,  size: 50,  opacity: 0.09, rotate: 5   },
  { left: 62, top: 64,  size: 50,  opacity: 0.09, rotate: -14 },
  { left: 68, top: 48,  size: 60,  opacity: 0.10, rotate: 12  },
  { left: 76, top: 58,  size: 55,  opacity: 0.10, rotate: -7  },
  { left: 82, top: 34,  size: 65,  opacity: 0.10, rotate: -14 },
  { left: 88, top: 48,  size: 120, opacity: 0.15, rotate: 15  },

  // Base
  { left: 4,  top: 76,  size: 95,  opacity: 0.16, rotate: 20  },
  { left: 14, top: 68,  size: 55,  opacity: 0.10, rotate: -4  },
  { left: 20, top: 88,  size: 60,  opacity: 0.12, rotate: -8  },
  { left: 30, top: 75,  size: 50,  opacity: 0.10, rotate: 10  },
  { left: 38, top: 80,  size: 55,  opacity: 0.10, rotate: 12  },
  { left: 46, top: 92,  size: 55,  opacity: 0.10, rotate: -16 },
  { left: 56, top: 90,  size: 55,  opacity: 0.10, rotate: -6  },
  { left: 64, top: 72,  size: 50,  opacity: 0.10, rotate: 8   },
  { left: 72, top: 80,  size: 65,  opacity: 0.12, rotate: 16  },
  { left: 80, top: 90,  size: 50,  opacity: 0.10, rotate: -10 },
  { left: 86, top: 76,  size: 105, opacity: 0.17, rotate: -10 },
];

// Velocidade base em px por segundo — fluxo contínuo, estilo chuva
const BASE_SPEED = 40;
const SPEED_VARIATION = 30;
// Velocidade mínima em CADA eixo — evita logos que parecem parados
// (ângulos próximos de 0/π/π/2/3π/2 zeram um dos eixos)
const MIN_AXIS_SPEED = 18;
// Quanto o logo sai da tela antes de reaparecer do outro lado (transição suave)
const WRAP_BUFFER = 40;

export default function FloatingLogos() {
  const containerRef = useRef(null);
  const imgsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const imgs = imgsRef.current.filter(Boolean);
    if (imgs.length === 0) return;

    let bounds = { w: 0, h: 0 };
    const states = [];

    function initStates() {
      const containerRect = container.getBoundingClientRect();
      bounds = { w: containerRect.width, h: containerRect.height };

      states.length = 0;
      for (const img of imgs) {
        const rect = img.getBoundingClientRect();
        const speed = BASE_SPEED + Math.random() * SPEED_VARIATION;
        // Ângulo aleatório — direções variadas (horizontal, vertical, diagonal)
        const angle = Math.random() * Math.PI * 2;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        // Garante movimento mínimo em cada eixo para nenhum logo parecer parado
        if (Math.abs(vx) < MIN_AXIS_SPEED) {
          vx = (vx < 0 ? -1 : 1) * MIN_AXIS_SPEED;
        }
        if (Math.abs(vy) < MIN_AXIS_SPEED) {
          vy = (vy < 0 ? -1 : 1) * MIN_AXIS_SPEED;
        }
        states.push({
          img,
          x: rect.left - containerRect.left,
          y: rect.top - containerRect.top,
          w: rect.width,
          h: rect.height,
          vx,
          vy,
          rotate: parseFloat(img.dataset.rotate) || 0,
        });
      }

      // Limpa o posicionamento via CSS — daqui em diante só transform
      for (const s of states) {
        s.img.style.left = "0px";
        s.img.style.top = "0px";
        s.img.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.rotate}deg)`;
      }
    }

    const resizeObs = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect();
      bounds = { w: rect.width, h: rect.height };
    });
    resizeObs.observe(container);

    initStates();

    let lastTime = performance.now();
    let rafId;

    function tick(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      for (const s of states) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // Wrap-around horizontal: sai pela direita → entra pela esquerda (e vice-versa)
        if (s.x > bounds.w + WRAP_BUFFER) {
          s.x = -s.w - WRAP_BUFFER;
        } else if (s.x + s.w < -WRAP_BUFFER) {
          s.x = bounds.w + WRAP_BUFFER;
        }

        // Wrap-around vertical: sai por baixo → entra por cima (e vice-versa)
        if (s.y > bounds.h + WRAP_BUFFER) {
          s.y = -s.h - WRAP_BUFFER;
        } else if (s.y + s.h < -WRAP_BUFFER) {
          s.y = bounds.h + WRAP_BUFFER;
        }

        s.img.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.rotate}deg)`;
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObs.disconnect();
    };
  }, []);

  // Container ocupa toda a section. Logos saem pelas bordas e reentram pelo lado oposto.
  // O header (com bg-white blur) e a onda pink no fundo "engolem" os logos quando estão saindo
  // ou aparecendo — dá a sensação de chuva que vem de fora da tela.
  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {LOGOS.map((logo, i) => (
        <img
          ref={(el) => {
            imgsRef.current[i] = el;
          }}
          key={i}
          src="/logo.png"
          alt=""
          aria-hidden="true"
          loading="eager"
          data-rotate={logo.rotate}
          className="absolute"
          style={{
            left: `${logo.left}%`,
            top: `${logo.top}%`,
            width: `${logo.size}px`,
            opacity: logo.opacity,
            transform: `rotate(${logo.rotate}deg)`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

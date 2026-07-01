import { createFileRoute } from "@tanstack/react-router";
import { } from "react";
import heroImg from "@/assets/organic-care-hero.png";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Leaf,
  Sparkles,
  Star,
  Clock,
  HandCoins,
  PackageCheck,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function useCountdown(minutes: number) {
  const [sec, setSec] = useState(minutes * 60);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function CTA({ label = "QUERO MEU ORGANIC SIER" }: { label?: string }) {
  return (
    <a
      href="#pedido"
      className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-base sm:text-lg font-extrabold uppercase tracking-wide hover:scale-[1.02] transition-transform"
    >
      <HandCoins className="h-5 w-5" />
      {label}
      <ChevronRight className="h-5 w-5" />
    </a>
  );
}

function PaymentBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-success/15 text-success px-4 py-2 text-sm font-bold border border-success/30">
      <ShieldCheck className="h-4 w-4" />
      PAGUE SOMENTE AO RECEBER EM CASA
    </div>
  );
}

function LandingPage() {
  const timer = useCountdown(14);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Product translucent background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImg})`,
          opacity: 0.06,
          filter: "blur(2px)",
        }}
      />
      {/* Top bar */}
      <div className="bg-hero text-primary-foreground text-center py-2 px-4 text-xs sm:text-sm font-semibold">
        🚚 FRETE GRÁTIS PARA TODO O BRASIL • 💵 PAGAMENTO SOMENTE NA ENTREGA
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-[0.06]" />
        <div className="container mx-auto px-4 py-10 sm:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <PaymentBadge />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Cabelos <span className="text-primary">fortes, brilhantes</span> e sem quebra em{" "}
                <span className="text-secondary">30 dias</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                O tratamento <strong>Organic Sier</strong> combina óleos naturais e ativos
                nutritivos para <strong>reconstruir seus fios de dentro pra fora</strong> — sem
                química agressiva, sem promessa vazia.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 text-sm bg-muted rounded-full px-3 py-1.5">
                  <Leaf className="h-4 w-4 text-secondary" /> 100% Natural
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-muted rounded-full px-3 py-1.5">
                  <BadgeCheck className="h-4 w-4 text-secondary" /> Aprovado ANVISA
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-muted rounded-full px-3 py-1.5">
                  <Sparkles className="h-4 w-4 text-secondary" /> Resultado visível
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <CTA />
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                    ))}
                    <span className="font-bold ml-1">4.9</span>
                  </div>
                  <span>+37.842 clientes satisfeitas</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-green-gradient rounded-full blur-3xl opacity-30" />
              <img
                src={heroImg}
                alt="Organic Sier - Tratamento capilar natural"
                className="relative w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-muted/40">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: HandCoins, t: "Pague na Entrega", s: "Zero risco pra você" },
            { icon: Truck, t: "Frete Grátis", s: "Todo o Brasil" },
            { icon: ShieldCheck, t: "Garantia 30 dias", s: "Ou seu dinheiro de volta" },
            { icon: PackageCheck, t: "Envio em 24h", s: "Direto pra sua casa" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex flex-col items-center gap-1">
              <Icon className="h-7 w-7 text-primary" />
              <div className="font-bold text-sm">{t}</div>
              <div className="text-xs text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Já se olhou no espelho e sentiu <span className="text-destructive">vergonha</span> do
            seu cabelo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Queda constante, pontas duplas, fios opacos, sem volume, sem vida… E não importa quantos
            produtos caros você já testou — o resultado nunca dura.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {["Queda excessiva", "Fios ressecados", "Falta de brilho"].map((p) => (
              <div
                key={p}
                className="rounded-xl border border-destructive/30 bg-destructive/5 py-4 px-3 font-semibold text-destructive"
              >
                ✗ {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / benefits */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <span className="text-secondary font-bold uppercase text-sm tracking-wider">
              A solução definitiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Conheça o poder do <span className="text-primary">Organic Sier</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma fórmula rica em óleos vegetais, biotina e queratina vegetal que age nos 3
              principais problemas capilares.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Brilho intenso",
                desc: "Fios reflexivos e sedosos desde a primeira aplicação.",
              },
              {
                icon: Leaf,
                title: "Fortalecimento real",
                desc: "Reduz a queda em até 87% em apenas 30 dias de uso.",
              },
              {
                icon: HeartHandshake,
                title: "Crescimento acelerado",
                desc: "Estimula o couro cabeludo para fios mais longos e saudáveis.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-green-gradient flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Milhares de mulheres já <span className="text-primary">transformaram</span> seus
            cabelos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Juliana S.",
                city: "São Paulo, SP",
                text: "Em 3 semanas meu cabelo parou de cair. Nunca vi resultado assim! E o melhor: paguei só quando chegou.",
              },
              {
                name: "Camila R.",
                city: "Rio de Janeiro, RJ",
                text: "Comprei desconfiada, mas como o pagamento é na entrega me arrisquei. Hoje uso todos os dias, meu cabelo brilha!",
              },
              {
                name: "Fernanda M.",
                city: "Belo Horizonte, MG",
                text: "Meu cabelo cresceu 4 dedos em 2 meses! Estou apaixonada. Já indiquei pra toda a família.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-soft)]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">"{t.text}"</p>
                <div className="text-sm">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment on delivery highlight */}
      <section className="py-16 sm:py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <HandCoins className="h-16 w-16 mx-auto text-cta" />
          <h2 className="text-3xl sm:text-5xl font-black">
            Você paga <u className="decoration-cta">SOMENTE</u> quando o produto chegar na sua
            porta.
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Sem risco. Sem cartão. Sem pré-pagamento. Recebeu, gostou, pagou. Simples assim.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
            {[
              { n: "1", t: "Faça seu pedido", d: "Sem pagar nada agora" },
              { n: "2", t: "Receba em casa", d: "Envio em até 24h úteis" },
              { n: "3", t: "Pague ao entregador", d: "Dinheiro, PIX ou cartão" },
            ].map((s) => (
              <div key={s.n} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 border border-primary-foreground/20">
                <div className="text-4xl font-black text-cta mb-2">{s.n}</div>
                <div className="font-bold">{s.t}</div>
                <div className="text-sm opacity-80">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="pedido" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-3xl border-2 border-primary/30 shadow-[var(--shadow-soft)] overflow-hidden">
            <div className="bg-green-gradient text-primary-foreground text-center py-3 font-bold uppercase text-sm tracking-wider">
              🔥 Oferta por tempo limitado — expira em {timer}
            </div>

            <div className="p-6 sm:p-10 space-y-6 text-center">
              <div className="flex items-center justify-center gap-2 text-cta font-bold">
                <Clock className="h-5 w-5" /> Últimas unidades em estoque
              </div>

              <img src={heroImg} alt="Organic Sier" className="w-56 mx-auto" />

              <h3 className="text-2xl sm:text-3xl font-black">
                Kit Organic Sier — Tratamento Completo
              </h3>

              <div className="space-y-1">
                <div className="text-muted-foreground line-through">De R$ 297,00</div>
                <div className="text-5xl sm:text-6xl font-black text-primary">
                  R$ 97<span className="text-2xl">,00</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ou 3x de R$ 32,33 sem juros (na entrega)
                </div>
              </div>

              <ul className="text-left max-w-md mx-auto space-y-2">
                {[
                  "1x Organic Sier Máscara Reconstrutora",
                  "1x Sérum Fortalecedor",
                  "Frete GRÁTIS para todo o Brasil",
                  "Garantia de 30 dias ou seu dinheiro de volta",
                  "Pagamento SOMENTE na entrega",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-success mt-0.5 shrink-0" />
                    <span className="text-sm">{i}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-lg font-extrabold uppercase tracking-wide w-full sm:w-auto"
              >
                QUERO GARANTIR O MEU — PAGAR NA ENTREGA
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-success" />
                Compra 100% segura • Você não paga nada agora
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center mb-6">
              <PaymentBadge />
              <h3 className="text-2xl font-black mt-4">Preencha para receber em casa</h3>
              <p className="text-sm text-muted-foreground">Sem cartão. Sem pré-pagamento.</p>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Pedido recebido! Em breve entraremos em contato para confirmar a entrega.");
              }}
            >
              {[
                { label: "Nome completo", type: "text", ph: "Seu nome" },
                { label: "WhatsApp", type: "tel", ph: "(00) 00000-0000" },
                { label: "Endereço de entrega", type: "text", ph: "Rua, número, bairro" },
                { label: "Cidade / Estado", type: "text", ph: "Cidade - UF" },
                { label: "CEP", type: "text", ph: "00000-000" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold mb-1">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="btn-cta w-full rounded-full px-6 py-4 text-base font-extrabold uppercase"
              >
                CONFIRMAR PEDIDO • PAGAR NA ENTREGA
              </button>
              <p className="text-xs text-center text-muted-foreground">
                🔒 Seus dados estão seguros. Você paga apenas quando receber o produto em casa.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Como funciona o pagamento na entrega?",
                a: "Você faz seu pedido sem pagar nada. Quando o entregador chegar em sua casa com o produto, você paga em dinheiro, PIX ou cartão. Simples e sem risco.",
              },
              {
                q: "Quanto tempo demora para chegar?",
                a: "O envio é feito em até 24h úteis. A entrega leva de 3 a 7 dias úteis dependendo da sua região.",
              },
              {
                q: "E se eu não gostar do produto?",
                a: "Você tem 30 dias de garantia. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.",
              },
              {
                q: "O produto é natural mesmo?",
                a: "Sim! Organic Sier é formulado com óleos vegetais, biotina e queratina vegetal. Sem parabenos e sem sulfatos agressivos.",
              },
              {
                q: "Preciso usar por quanto tempo para ver resultado?",
                a: "A maioria das clientes percebe brilho e maciez já na primeira semana. Resultados de queda e crescimento entre 30 e 60 dias.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="bg-card border border-border rounded-xl p-5 group"
              >
                <summary className="cursor-pointer font-bold flex items-center justify-between">
                  {f.q}
                  <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTA label="QUERO PAGAR SÓ NA ENTREGA" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hero text-primary-foreground py-10">
        <div className="container mx-auto px-4 text-center space-y-2">
          <div className="font-black text-xl">Organic Sier</div>
          <p className="text-sm opacity-80 max-w-md mx-auto">
            Tratamento capilar natural. Pagamento somente na entrega. Frete grátis para todo o
            Brasil.
          </p>
          <p className="text-xs opacity-60 pt-4">
            © {new Date().getFullYear()} Organic Sier. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-card/95 backdrop-blur border-t border-border p-3">
        <a
          href="#pedido"
          className="btn-cta flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase w-full"
        >
          <HandCoins className="h-4 w-4" /> Pagar na Entrega
        </a>
      </div>
    </div>
  );
}

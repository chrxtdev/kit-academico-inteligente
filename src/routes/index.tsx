import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit de Sobrevivência Acadêmica | Guias e prompts de IA" },
      {
        name: "description",
        content:
          "Pacote de guias e prompts prontos pra usar IA nos trabalhos da faculdade sem entregar texto genérico. Oito peças, direto ao ponto.",
      },
      { property: "og:title", content: "Kit de Sobrevivência Acadêmica" },
      {
        property: "og:description",
        content:
          "Guias e prompts prontos pra usar IA nos trabalhos da faculdade sem entregar texto raso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pecas = [
  {
    titulo: "Guia prático de IA para trabalhos acadêmicos",
    linha:
      "Como pedir ajuda certa pra IA sem cair em texto genérico, o paradoxo do contexto, comparativo honesto entre as ferramentas e como evitar fonte inventada.",
  },
  {
    titulo: "Cheat sheet de prompts prontos",
    linha:
      "Comandos pra colar: estrutura de trabalho, resumo, entender texto difícil, resenha crítica, revisão de citação, referência bibliográfica, apresentação de seminário, pesquisa de campo, e o comando anti-robô pra tirar a cara de texto de IA.",
  },
  {
    titulo: "Checklist de formatação ABNT",
    linha: "Uma página só pra conferir espaçamento, margem e recuo de citação antes de entregar.",
  },
  {
    titulo: "Template Word em ABNT",
    linha: "Arquivo do Word já formatado com capa, folha de rosto e sumário. Só digitar por cima.",
  },
  {
    titulo: "Guia de slides de seminário",
    linha:
      "Comando pra transformar o trabalho em roteiro de apresentação, separando o que fica escrito na tela do que você fala.",
  },
  {
    titulo: "Estudo de caso",
    linha: "Simulação mostrando os comandos em sequência, do início ao fim de um trabalho.",
  },
];

const faq = [
  {
    p: "Isso é trapaça?",
    r: "Não. O kit é feito pra você pensar e escrever melhor com ajuda da IA, não pra ela escrever por você. Os prompts de revisão inclusive existem pra derrubar texto preguiçoso.",
  },
  {
    p: "Serve pra qualquer curso?",
    r: "Serve. Os guias são sobre método de leitura, escrita e argumento — funciona em humanas, exatas ou saúde.",
  },
  {
    p: "Funciona com qual IA?",
    r: "Qualquer chat de texto: ChatGPT, Gemini, Claude. Os prompts são escritos em português e não dependem de plano pago.",
  },
  {
    p: "Como recebo?",
    r: "Depois da compra chega um e-mail com o link. É download direto, sem plataforma de curso e sem prazo de acesso.",
  },
];

const cartoes = [
  { rot: -8, x: -46, y: 16, label: "Guia de leitura rápida", delay: "0.05s" },
  { rot: 5, x: -12, y: 4, label: "Prompts de esqueleto", delay: "0.15s" },
  { rot: -3, x: 22, y: 26, label: "Revisão crítica", delay: "0.25s" },
  { rot: 9, x: 54, y: 8, label: "Checklist de entrega", delay: "0.35s" },
];

const precoBase = 14.99;
const precoBump = 5.8;

function Index() {
  const [comBump, setComBump] = useState(false);
  const total = comBump ? precoBase + precoBump : precoBase;

  return (
    <main className="min-h-screen bg-background">
      {/* Herói */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
          <div className="deal-in">
            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight md:text-6xl">
              Você não escreve mal.
              <br />
              Você está pedindo
              <br />
              a coisa errada pra IA.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              O Kit de Sobrevivência Acadêmica é um pacote de oito guias e prompts prontos pra
              você usar IA nos trabalhos da faculdade e ainda entregar algo que parece seu.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#preco"
                className="inline-flex items-center bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Quero meu kit
              </a>
              <span className="text-sm text-muted-foreground">
                Download imediato · R$ 14,99
              </span>
            </div>
          </div>

          {/* Pilha de papéis */}
          <div className="relative h-[360px] md:h-[420px]" aria-hidden="true">
            {cartoes.map((c) => (
              <div
                key={c.label}
                className="deal-in paper-sheet absolute left-1/2 top-1/2 w-56 md:w-64"
                style={{
                  ["--deal-rot" as string]: `${c.rot}deg`,
                  animationDelay: c.delay,
                  marginLeft: `${c.x}px`,
                  marginTop: `${c.y}px`,
                  transform: `translate(-50%, -50%) rotate(${c.rot}deg)`,
                }}
              >
                <div className="border-b border-paper-line px-5 py-3 font-display text-base">
                  {c.label}
                </div>
                <div className="space-y-2 px-5 py-5">
                  {[92, 78, 96, 60, 84].map((w, i) => (
                    <div
                      key={i}
                      className="h-[6px] bg-paper-line"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="border-y border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            O problema não é usar IA. É pedir pra ela fazer tudo.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Você cola o tema, pede "faça um trabalho sobre isso" e recebe quatro páginas que
              soam bem e não dizem nada. Frase redonda, zero argumento, exemplo que não existe,
              referência inventada.
            </p>
            <p>
              O professor percebe na segunda linha. Não porque descobriu a IA, mas porque o texto
              não tem ninguém dentro dele.
            </p>
            <p className="text-foreground">
              O kit inverte a ordem: você pensa, a IA aperta. Não o contrário.
            </p>
          </div>
        </div>
      </section>

      {/* Índice das 8 peças */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl">O que tem dentro</h2>
        <ol className="mt-10">
          {pecas.map((p, i) => (
            <li
              key={p.titulo}
              className="flex items-baseline gap-4 border-b border-border/50 py-5 first:border-t first:border-border/50"
            >
              <span className="w-6 shrink-0 font-display text-sm text-muted-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl">{p.titulo}</h3>
                <p className="mt-1 text-base text-muted-foreground">{p.linha}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Preço */}
      <section id="preco" className="px-6 pb-20">
        <div className="paper-sheet mx-auto max-w-3xl px-8 py-12 md:px-14">
          <h2 className="font-display text-3xl md:text-4xl">Quanto custa</h2>
          <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-2">
            <span className="font-display text-6xl leading-none text-primary">
              R$ {total.toFixed(2).replace(".", ",")}
            </span>
            <span className="pb-2 text-base text-neutral-600">pagamento único</span>
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-700">
            De R$ 30,99 por R$ 14,99 enquanto durar o lote promocional.
          </p>

          <label className="mt-8 flex cursor-pointer items-start gap-4 rounded-lg border border-border/70 p-4 transition-colors hover:border-border">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-primary"
              checked={comBump}
              onChange={(e) => setComBump(e.target.checked)}
            />
            <span className="text-base leading-snug text-neutral-800">
              Quero adicionar o miniguia bônus: como usar o NotebookLM pra resumir textos pesados e
              gerar testes de revisão antes da prova, por mais R$ 5,80.
            </span>
          </label>

          <a
            href="#comprar"
            className="mt-8 inline-flex items-center bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Quero meu kit — R$ {total.toFixed(2).replace(".", ",")}
          </a>
        </div>
      </section>

      {/* Garantia */}
      <section className="border-y border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-2xl md:text-3xl">Se não servir, devolve</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Você tem 7 dias pra abrir tudo, testar nos seus trabalhos e decidir. Se achar que não
            valeu, responde o e-mail da compra pedindo reembolso e o dinheiro volta integral. Sem
            formulário, sem perguntar por quê.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-display text-2xl md:text-3xl">Perguntas</h2>
        <dl className="mt-8 space-y-8">
          {faq.map((f) => (
            <div key={f.p}>
              <dt className="font-display text-xl">{f.p}</dt>
              <dd className="mt-2 text-base leading-relaxed text-muted-foreground">{f.r}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Rodapé CTA */}
      <footer id="comprar" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            Próximo trabalho, do jeito certo.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oito peças, download na hora, R$ 14,99 enquanto durar o lote promocional.
          </p>
          <a
            href="#comprar"
            className="mt-8 inline-flex items-center bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Quero meu kit
          </a>
          <p className="mt-12 text-sm text-muted-foreground">
            Kit de Sobrevivência Acadêmica · feito pra quem quer entregar trabalho com cara de
            próprio.
          </p>
        </div>
      </footer>
    </main>
  );
}

import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, HeartPulse, Sparkles, Stethoscope, ArrowRight, Layers } from 'lucide-react';
import { useTina, tinaField } from 'tinacms/dist/react';
import screeningData from '../content/pages/screening-circle.json';

type QuizAnswer = 'A' | 'B' | null;
type QuizQuestion = { prompt: string; a: string; b: string; aLabel?: string; bLabel?: string };

const ScreeningCircle: React.FC = () => {
  const { data } = useTina({
    query: `{
      screening(relativePath: "screening-circle.json") {
        tagline
        title
        subtitle
        pathwayALabel
        pathwayATag
        pathwayBLabel
        pathwayBTag
        pathwayA {
          title
          description
          features
        }
        pathwayB {
          title
          description
          features
        }
        quiz {
          badge
          title
          resetLabel
          incompleteText
          recommendationLabel
          ctaLabel
          ctaPath
          defaultResult {
            title
            description
          }
          usaResult {
            title
            description
          }
          ancientResult {
            title
            description
          }
          questions {
            prompt
            a
            b
            aLabel
            bLabel
          }
        }
      }
    }`,
    variables: { relativePath: "screening-circle.json" },
    data: { screening: screeningData },
  });

  const { tagline, title, subtitle, pathwayA, pathwayB, quiz, pathwayALabel, pathwayATag, pathwayBLabel, pathwayBTag } = data.screening;
  const questions: QuizQuestion[] = quiz?.questions || [];
  const [answers, setAnswers] = useState<QuizAnswer[]>(() => questions.map(() => null));
  React.useEffect(() => {
    setAnswers(questions.map(() => null));
  }, [questions.length]);

  const { aCount, bCount, resultType, recommendation } = useMemo(() => {
    const aCount = answers.filter((a) => a === 'A').length;
    const bCount = answers.filter((a) => a === 'B').length;

    let resultType: 'USA' | 'ANCIENT' | 'MIXED' = 'MIXED';
    let recommendation = {
      title: quiz?.defaultResult?.title || 'Bridge Both (The Full Circle Map)',
      desc: quiz?.defaultResult?.description || 'Your preferences show a balanced interest in both clinical rigor and ancient wisdom. We recommend our signature Bridge protocol.',
      icon: <Layers size={40} className="text-accent-orange" />
    };

    if (aCount >= 4) {
      resultType = 'USA';
      recommendation = {
        title: quiz?.usaResult?.title || 'The USA Protocol',
        desc: quiz?.usaResult?.description || 'You value data, evidence, and clinical metrics. We recommend starting with our high-standard Western diagnostic screening.',
        icon: <Stethoscope size={40} className="text-blue-500" />
      };
    } else if (bCount >= 4) {
      resultType = 'ANCIENT';
      recommendation = {
        title: quiz?.ancientResult?.title || 'The Ancient Protocol',
        desc: quiz?.ancientResult?.description || 'You are deeply aligned with energetic and holistic roots. We recommend starting with a Nadi Scan and Aura analysis.',
        icon: <Sparkles size={40} className="text-accent-orange" />
      };
    }

    return { aCount, bCount, resultType, recommendation };
  }, [answers]);

  const allAnswered = answers.every(Boolean);

  const setAnswer = (index: number, value: Exclude<QuizAnswer, null>) => {
    setAnswers((prev) => prev.map((a, i) => (i === index ? value : a)));
  };

  const reset = () => setAnswers(questions.map(() => null));

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span data-tina-field={tinaField(data.screening, 'tagline')} className="uppercase tracking-widest font-black text-xs text-accent-orange mb-3 block">
            {tagline}
          </span>
          <h1 data-tina-field={tinaField(data.screening, 'title')} className="font-display text-5xl md:text-8xl text-dark-brown mt-4 mb-6 leading-tight">{title}</h1>
          <p data-tina-field={tinaField(data.screening, 'subtitle')} className="max-w-3xl mx-auto text-dark-brown/70 font-serif italic text-xl md:text-2xl leading-relaxed">
            {subtitle}
          </p>
        </header>

        {/* PATHWAY DESCRIPTION CARDS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Pathway A */}
          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-dark-brown/5 shadow-lg group">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Stethoscope size={32} />
              </div>
              <div data-tina-field={tinaField(pathwayA)}>
                <p data-tina-field={tinaField(data.screening, 'pathwayALabel')} className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">{pathwayALabel}</p>
                <h2 data-tina-field={tinaField(pathwayA, 'title')} className="font-display text-4xl text-dark-brown">{pathwayA.title}</h2>
                <p data-tina-field={tinaField(data.screening, 'pathwayATag')} className="text-xs text-accent-orange font-black uppercase tracking-widest mt-1">{pathwayATag}</p>
              </div>
            </div>
            <p data-tina-field={tinaField(pathwayA, 'description')} className="text-dark-brown/70 text-lg leading-relaxed mb-10">
              {pathwayA.description}
            </p>
            <div data-tina-field={tinaField(pathwayA, 'features')} className="space-y-6 text-dark-brown/60 text-sm">
               {pathwayA.features && pathwayA.features.map((f: string, i: number) => (
                 <div key={i} className="flex gap-4"><HeartPulse size={18} className="text-accent-orange shrink-0" /> <span>{f}</span></div>
               ))}
            </div>
          </div>

          {/* Pathway B */}
          <div className="bg-bronze-dark text-cream rounded-[3rem] p-10 md:p-14 border border-bronze-dark shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="flex items-center gap-6 mb-10 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <div data-tina-field={tinaField(pathwayB)}>
                <p data-tina-field={tinaField(data.screening, 'pathwayBLabel')} className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-1">{pathwayBLabel}</p>
                <h2 data-tina-field={tinaField(pathwayB, 'title')} className="font-display text-4xl text-white">{pathwayB.title}</h2>
                <p data-tina-field={tinaField(data.screening, 'pathwayBTag')} className="text-xs text-accent-orange font-black uppercase tracking-widest mt-1">{pathwayBTag}</p>
              </div>
            </div>
            <p data-tina-field={tinaField(pathwayB, 'description')} className="text-cream/70 text-lg leading-relaxed mb-10 italic font-serif">
              {pathwayB.description}
            </p>
            <div data-tina-field={tinaField(pathwayB, 'features')} className="space-y-6 text-cream/60 text-sm relative z-10">
               {pathwayB.features && pathwayB.features.map((f: string, i: number) => (
                 <div key={i} className="flex gap-4"><Sparkles size={18} className="text-accent-orange shrink-0" /> <span>{f}</span></div>
               ))}
            </div>
          </div>
        </section>

        {/* QUIZ SECTION */}
        <section className="bg-white rounded-[4rem] shadow-xl p-8 md:p-20 border border-dark-brown/5 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 relative z-10">
            <div>
              <span data-tina-field={tinaField(quiz, 'badge')} className="uppercase tracking-widest font-black text-xs text-accent-orange mb-4 block">{quiz?.badge}</span>
              <h2 data-tina-field={tinaField(quiz, 'title')} className="font-display text-5xl md:text-6xl text-dark-brown leading-tight">{quiz?.title}</h2>
            </div>
            <button onClick={reset} className="px-8 py-3 rounded-full border border-dark-brown/10 text-[10px] font-black uppercase tracking-widest text-dark-brown/40 hover:text-accent-orange transition-all">{quiz?.resetLabel}</button>
          </div>

          <div data-tina-field={tinaField(quiz, 'questions')} className="space-y-12 relative z-10 mb-20">
            {questions.map((q, index) => (
              <div key={index} className="border-b border-dark-brown/5 pb-12 last:border-0">
                <p className="font-display text-3xl text-dark-brown mb-8"><span className="text-accent-orange mr-4 font-sans text-xl font-black">0{index + 1}</span> {q.prompt}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['A', 'B'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setAnswer(index, type as 'A' | 'B')}
                      className={`text-left p-8 rounded-3xl border-2 transition-all duration-300 ${answers[index] === type ? 'border-accent-orange bg-accent-orange/5' : 'border-dark-brown/5 hover:bg-cream/20'}`}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-dark-brown/20">{type === 'A' ? (q.aLabel || 'Clinical') : (q.bLabel || 'Holistic')}</span>
                        {answers[index] === type && <div className="w-3 h-3 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,126,95,0.5)]" />}
                      </div>
                      <p className="text-lg text-dark-brown/70 leading-relaxed">{type === 'A' ? q.a : q.b}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DYNAMIC RESULTS SECTION */}
          {allAnswered && (
            <div className="rounded-[3rem] bg-bronze-dark text-cream p-10 md:p-16 relative overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-700">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12">
                <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  {recommendation.icon}
                </div>
                <div className="flex-grow">
                  <p data-tina-field={tinaField(quiz, 'recommendationLabel')} className="text-[10px] uppercase tracking-widest font-black text-accent-orange mb-2">{quiz?.recommendationLabel}</p>
                  <h3 className="font-display text-4xl md:text-5xl mb-4 text-white uppercase tracking-tighter">{recommendation.title}</h3>
                  <p className="text-cream/70 text-lg font-serif italic max-w-2xl">{recommendation.desc}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={quiz?.ctaPath || "/appointment"} className="px-10 py-6 rounded-full bg-cream text-bronze-dark text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-orange hover:text-white transition-all text-center shadow-xl transform hover:-translate-y-1">{quiz?.ctaLabel}</Link>
                </div>
              </div>
            </div>
          )}
          {!allAnswered && (
            <div className="text-center py-10 border-2 border-dashed border-dark-brown/10 rounded-[3rem]">
              <p data-tina-field={tinaField(quiz, 'incompleteText')} className="text-dark-brown/40 uppercase tracking-[0.2em] font-black text-xs">{quiz?.incompleteText}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ScreeningCircle;

import React from 'react';
import { Activity, Droplets, Heart, ClipboardList, Clock, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea, ReferenceLine } from 'recharts';

const HealthGuidelines: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Clinical References</span>
          <h1 className="font-display text-5xl md:text-7xl text-dark-brown mt-4 mb-6">Health Guidelines</h1>
          <p className="max-w-3xl mx-auto text-xl text-dark-brown/70 font-serif italic">
            Evidence-based references for blood pressure, kidney function, and diagnostic values.
          </p>
        </div>

        {/* Blood Pressure Staging - Main Table */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
              <Heart size={24} />
            </div>
            <h2 className="font-display text-4xl text-dark-brown">Hypertension Disease Staging</h2>
          </div>

          <div className="bg-white rounded-[3rem] border border-dark-brown/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-dark-brown text-cream">
                    <th className="text-left p-4 font-display text-lg">BP (mmHg) Grading</th>
                    <th className="text-left p-4 font-display text-lg">Stage 1<br /><span className="text-xs font-normal">(Uncomplicated)</span></th>
                    <th className="text-left p-4 font-display text-lg">Stage 2<br /><span className="text-xs font-normal">(Asymptomatic Disease)</span></th>
                    <th className="text-left p-4 font-display text-lg">Stage 3<br /><span className="text-xs font-normal">(Established Disease)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {/* High Normal */}
                  <tr className="border-b border-dark-brown/5">
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-black uppercase">High Normal</span>
                      <p className="mt-2 font-bold text-dark-brown">SBP 130-139<br />DBP 85-89</p>
                    </td>
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-bold">Low Risk</span></td>
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-bold">Low Risk</span></td>
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-bold">Low Risk</span></td>
                  </tr>

                  {/* Grade 1 */}
                  <tr className="border-b border-dark-brown/5 bg-orange-50/50">
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-black uppercase">Grade 1</span>
                      <p className="mt-2 font-bold text-dark-brown">SBP 140-159<br />DBP 90-99</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-bold">Low Risk</span>
                      <p className="text-xs text-dark-brown/50 mt-1">No other risk factors</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded text-xs font-bold">Moderate Risk</span>
                      <p className="text-xs text-dark-brown/50 mt-1">1-2 risk factors</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-300 text-orange-900 rounded text-xs font-bold">Moderate-High</span>
                      <p className="text-xs text-dark-brown/50 mt-1">≥3 risk factors</p>
                    </td>
                  </tr>

                  {/* Grade 2 */}
                  <tr className="border-b border-dark-brown/5 bg-red-50/50">
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-black uppercase">Grade 2</span>
                      <p className="mt-2 font-bold text-dark-brown">SBP 160-179<br />DBP 100-109</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded text-xs font-bold">Moderate</span>
                      <p className="text-xs text-dark-brown/50 mt-1">1-2 risk factors</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-300 text-orange-900 rounded text-xs font-bold">Moderate-High</span>
                      <p className="text-xs text-dark-brown/50 mt-1">≥3 risk factors</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-red-400 text-white rounded text-xs font-bold">High Risk</span>
                      <p className="text-xs text-dark-brown/50 mt-1">Any risk level</p>
                    </td>
                  </tr>

                  {/* Grade 3 */}
                  <tr className="bg-red-100/50">
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-red-200 text-red-900 rounded-full text-xs font-black uppercase">Grade 3</span>
                      <p className="mt-2 font-bold text-dark-brown">SBP ≥180<br />or DBP ≥110</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-300 text-orange-900 rounded text-xs font-bold">Moderate-High</span>
                      <p className="text-xs text-dark-brown/50 mt-1">No other risk factors</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-red-400 text-white rounded text-xs font-bold">High Risk</span>
                      <p className="text-xs text-dark-brown/50 mt-1">1-2 risk factors</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-4 py-1 bg-red-700 text-white rounded text-xs font-bold">Very High</span>
                      <p className="text-xs text-dark-brown/50 mt-1">Any risk level</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage Definitions */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-3xl p-8 border-l-4 border-blue-500">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">Stage 1</span>
              <p className="font-display text-2xl text-dark-brown mt-2 mb-4">Uncomplicated</p>
              <ul className="text-sm text-dark-brown/70 space-y-2">
                <li>• No other risk factors</li>
                <li>• 1-2 risk factors</li>
                <li>• ≥3 risk factors</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-3xl p-8 border-l-4 border-purple-500">
              <span className="text-xs font-black uppercase tracking-widest text-purple-600">Stage 2</span>
              <p className="font-display text-2xl text-dark-brown mt-2 mb-4">Asymptomatic Disease</p>
              <ul className="text-sm text-dark-brown/70 space-y-2">
                <li>• HMOD</li>
                <li>• CKD grade 3</li>
                <li>• Diabetes without organ damage</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-3xl p-8 border-l-4 border-red-600">
              <span className="text-xs font-black uppercase tracking-widest text-red-600">Stage 3</span>
              <p className="font-display text-2xl text-dark-brown mt-2 mb-4">Established Disease</p>
              <ul className="text-sm text-dark-brown/70 space-y-2">
                <li>• Established CVD</li>
                <li>• CKD grade ≥4</li>
                <li>• Diabetes with organ damage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CKD Treatment Guidelines */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Activity size={24} />
            </div>
            <h2 className="font-display text-4xl text-dark-brown">Chronic Kidney Disease - Treatment Guidelines</h2>
          </div>

          <p className="text-dark-brown/60 mb-8 text-sm">
            References that support recommendations are summarized in Online Data Supplements 37 and 38 and Systematic Review Report.
          </p>

          <div className="bg-white rounded-[3rem] border border-dark-brown/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-dark-brown text-cream">
                    <th className="text-left p-4 font-display text-lg">COR</th>
                    <th className="text-left p-4 font-display text-lg">LOE</th>
                    <th className="text-left p-4 font-display text-lg">Recommendations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-brown/5 bg-green-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-green-500 text-white rounded text-xs font-black">I</span></td>
                    <td className="p-4"><span className="inline-block px-2 py-1 bg-gray-100 text-dark-brown rounded text-xs font-bold">SBP: B-RSR<br />DBP: C-EO</span></td>
                    <td className="p-4">
                      <p className="font-bold text-dark-brown">1. Adults with hypertension and CKD should be treated to a BP goal of less than 130/80 mmHg (1-6).</p>
                    </td>
                  </tr>
                  <tr className="border-b border-dark-brown/5 bg-blue-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-blue-500 text-white rounded text-xs font-black">IIa</span></td>
                    <td className="p-4"><span className="inline-block px-2 py-1 bg-gray-100 text-dark-brown rounded text-xs font-bold">B-R</span></td>
                    <td className="p-4">
                      <p className="font-bold text-dark-brown">2. In adults with hypertension and CKD (stage 3 or higher or stage 1 or 2 with albuminuria [≥300 mg/d, or ≥300 mg/g albumin-to-creatinine ratio or the equivalent in the first morning void]), treatment with an ACE inhibitor is reasonable to slow kidney disease progression (3, 7-12).</p>
                    </td>
                  </tr>
                  <tr className="bg-purple-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-purple-500 text-white rounded text-xs font-black">IIb</span></td>
                    <td className="p-4"><span className="inline-block px-2 py-1 bg-gray-100 text-dark-brown rounded text-xs font-bold">C-EO</span></td>
                    <td className="p-4">
                      <p className="font-bold text-dark-brown">3. In adults with hypertension and CKD (stage 3 or higher or stage 1 or 2 with albuminuria [≥300 mg/d, or ≥300 mg/g albumin-to-creatinine ratio in the first morning void]) (7, 8), treatment with an ARB may be reasonable if an ACE inhibitor is not tolerated.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Urine Color Chart */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Droplets size={24} />
            </div>
            <h2 className="font-display text-4xl text-dark-brown">Different Urine Colors and Their Causes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Clear */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-transparent border-2 border-gray-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-transparent"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Clear urine</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">The person is consuming excess water and needs to reduce his water consumption.</p>
            </div>

            {/* Pale Yellow */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-yellow-200 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-300"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Pale yellow or amber</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">Healthy urine</p>
            </div>

            {/* Pink or Red */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-pink-400 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Pink or red</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">Presence of blood in the urine due to urinary tract infections kidney stones, tumors, cysts, and prostate gland enlargement. Foods like beets, rhubarb, and blackberries can be the reason. Medications used to treat tuberculosis, like Rifampin, can turn the urine red.</p>
            </div>

            {/* Orange */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-400 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Orange</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">Medications like Sulfasalazine and Phenazopyridine can turn the urine orange. Dehydration and problems in the liver can be the causes of orange urine.</p>
            </div>

            {/* Blue or Green */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-teal-400 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-teal-500"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Blue or green</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">Methylene blue dye and medications like indomethacin, Metoclapramide, and Cimetidine can turn the urine blue or green.</p>
            </div>

            {/* Dark Brown */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-800 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-amber-900"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Dark brown</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">Medications like Chloroquine, Primaquine, and Metronidazole can turn the urine dark brown. Foods like fava beans and aloe change the urine color to brown. Muscle injury due to strenuous exercise can turn the urine cola-colored or pink.</p>
            </div>

            {/* Cloudy */}
            <div className="bg-white rounded-3xl border border-dark-brown/5 shadow-sm p-6 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-dark-brown">Cloudy urine</p>
                </div>
              </div>
              <p className="text-dark-brown/70 text-sm">Dehydration, urinary tract infection, chronic kidney disease, and kidney stones are some of the causes of cloudy urine.</p>
            </div>
          </div>
        </section>

        {/* BP Measurement Protocol */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <ClipboardList size={24} />
            </div>
            <h2 className="font-display text-4xl text-dark-brown">BP Measurement Protocol</h2>
          </div>

          <div className="bg-white rounded-[3rem] border border-dark-brown/5 shadow-sm overflow-hidden">

            {/* 1. Pre-Measurement Checklist (The Blue Box) */}
            <div className="bg-blue-50/50 p-8 border-b border-blue-100">
              <h3 className="font-display text-2xl text-blue-900 mb-4">1. Environment & Preparation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-blue-800 text-sm font-bold">
                <div className="flex items-center gap-2"><span>•</span> Quiet room</div>
                <div className="flex items-center gap-2"><span>•</span> No smoking/caffeine (30min)</div>
                <div className="flex items-center gap-2"><span>•</span> Empty bladder</div>
                <div className="flex items-center gap-2"><span>•</span> Relax {'>'} 5 min</div>
              </div>
            </div>

            {/* 2. The Diagram & Positioning Rule */}
            <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Illustration */}
              <div className="relative flex justify-center">
                <svg viewBox="0 0 550 480" className="w-full h-auto max-w-md" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                      <feOffset dx="2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.2" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Floor Line */}
                  <line x1="50" y1="450" x2="500" y2="450" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />

                  {/* Table */}
                  <rect x="380" y="270" width="150" height="10" fill="#D1D5DB" />
                  <rect x="400" y="280" width="15" height="170" fill="#9CA3AF" />

                  {/* Chair */}
                  <g fill="#4B5563">
                    <rect x="230" y="320" width="80" height="15" rx="4" />
                    <rect x="220" y="220" width="15" height="110" rx="4" />
                    <rect x="265" y="335" width="10" height="80" />
                    <path d="M270,415 L230,450" stroke="#4B5563" strokeWidth="8" strokeLinecap="round" />
                    <path d="M270,415 L310,450" stroke="#4B5563" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="230" cy="450" r="5" />
                    <circle cx="310" cy="450" r="5" />
                    <rect x="215" y="220" width="25" height="100" rx="5" fill="#374151" />
                  </g>

                  {/* Person */}
                  <g opacity="0.9">
                    <path d="M300,320 L360,320 L375,450 L400,450" fill="none" stroke="#E5E7EB" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M280,330 L275,180" fill="none" stroke="#E5E7EB" strokeWidth="48" strokeLinecap="round" />
                    <circle cx="280" cy="130" r="32" fill="#E5E7EB" />
                    <path d="M280,180 Q320,260 360,260 L460,260" fill="none" stroke="#E5E7EB" strokeWidth="38" strokeLinecap="round" />
                  </g>

                  {/* Cuff */}
                  <path d="M315,200 L355,240" stroke="#2563EB" strokeWidth="38" strokeLinecap="butt" transform="rotate(-15 335 220)" opacity="0.9" />
                  <path d="M345,230 Q400,280 480,260" fill="none" stroke="#3B82F6" strokeWidth="3" />

                  {/* Monitor */}
                  <g transform="translate(480, 230)">
                    <rect x="0" y="0" width="60" height="40" rx="6" fill="white" stroke="#9CA3AF" strokeWidth="1" filter="url(#shadow)" />
                    <rect x="5" y="5" width="50" height="25" fill="#EFF6FF" />
                    <text x="30" y="22" textAnchor="middle" fontSize="10" fill="#1E3A8A" fontFamily="monospace" fontWeight="bold">120/80</text>
                  </g>
                </svg>
              </div>

              {/* Positioning Rules */}
              <div className="space-y-10">
                <div>
                  <h3 className="font-display text-2xl text-dark-brown mb-4">2. Patient Positioning</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-cream text-dark-brown flex items-center justify-center text-sm font-black border border-dark-brown/10 group-hover:bg-accent-orange group-hover:text-white transition-colors">A</div>
                      <div className="text-dark-brown/80 text-base pt-1"><strong>Back Supported</strong> on a chair.</div>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-cream text-dark-brown flex items-center justify-center text-sm font-black border border-dark-brown/10 group-hover:bg-accent-orange group-hover:text-white transition-colors">B</div>
                      <div className="text-dark-brown/80 text-base pt-1"><strong>Feet Flat</strong> on the floor.</div>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-cream text-dark-brown flex items-center justify-center text-sm font-black border border-dark-brown/10 group-hover:bg-accent-orange group-hover:text-white transition-colors">C</div>
                      <div className="text-dark-brown/80 text-base pt-1"><strong>Arm Bare & Resting</strong> at mid-sternum level on a table.</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-dark-brown mb-4">3. Measurement Technique</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-cream text-dark-brown flex items-center justify-center text-sm font-black border border-dark-brown/10 group-hover:bg-accent-orange group-hover:text-white transition-colors">D</div>
                      <div className="text-dark-brown/80 text-base pt-1"><strong>Correct Cuff Size</strong> (Small, Usual, Large).</div>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-cream text-dark-brown flex items-center justify-center text-sm font-black border border-dark-brown/10 group-hover:bg-accent-orange group-hover:text-white transition-colors">E</div>
                      <div className="text-dark-brown/80 text-base pt-1"><strong>No Talking</strong> during rest period and measurement.</div>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-cream text-dark-brown flex items-center justify-center text-sm font-black border border-dark-brown/10 group-hover:bg-accent-orange group-hover:text-white transition-colors">F</div>
                      <div className="text-dark-brown/80 text-base pt-1">Use <strong>Validated Device</strong> (oscillometric or manual).</div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Quote Footer */}
            <div className="bg-dark-brown/5 p-8 text-center border-t border-dark-brown/5">
              <p className="font-serif italic text-dark-brown/60 text-lg md:text-xl leading-relaxed">"The measurement of blood pressure is likely the clinical procedure of greatest importance that is performed in the sloppiest manner"</p>
              <p className="font-black text-xs uppercase tracking-widest text-dark-brown mt-4">— Norm Kaplan</p>
            </div>
          </div>
        </section>

        {/* ABPM Diagnostic Thresholds */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <h2 className="font-display text-4xl text-dark-brown">Diagnostic Thresholds</h2>
          </div>

          <p className="text-dark-brown/70 mb-8 text-lg">
            Corresponding Values of SBP/DBP for Clinic, HBPM, Daytime, Nighttime, and 24-Hour ABPM Measurements
          </p>

          <div className="bg-white rounded-[3rem] border border-dark-brown/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-dark-brown text-cream">
                    <th className="text-left p-4 font-display text-lg">Classification</th>
                    <th className="text-left p-4 font-display text-lg">Clinic</th>
                    <th className="text-left p-4 font-display text-lg">HBPM</th>
                    <th className="text-left p-4 font-display text-lg">Daytime ABPM</th>
                    <th className="text-left p-4 font-display text-lg">Nighttime ABPM</th>
                    <th className="text-left p-4 font-display text-lg">24-Hour ABPM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-brown/5 bg-green-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-black uppercase">Optimal</span></td>
                    <td className="p-4 font-bold text-dark-brown">120/80</td>
                    <td className="p-4 font-bold text-dark-brown">120/80</td>
                    <td className="p-4 font-bold text-dark-brown">120/80</td>
                    <td className="p-4 font-bold text-dark-brown">100/65</td>
                    <td className="p-4 font-bold text-dark-brown">115/75</td>
                  </tr>
                  <tr className="border-b border-dark-brown/5">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-black uppercase">Normal</span></td>
                    <td className="p-4 font-bold text-dark-brown">130/80</td>
                    <td className="p-4 font-bold text-dark-brown">130/80</td>
                    <td className="p-4 font-bold text-dark-brown">130/80</td>
                    <td className="p-4 font-bold text-dark-brown">110/65</td>
                    <td className="p-4 font-bold text-dark-brown">125/75</td>
                  </tr>
                  <tr className="border-b border-dark-brown/5 bg-yellow-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded text-xs font-black uppercase">High Normal</span></td>
                    <td className="p-4 font-bold text-dark-brown">140/90</td>
                    <td className="p-4 font-bold text-dark-brown">135/85</td>
                    <td className="p-4 font-bold text-dark-brown">135/85</td>
                    <td className="p-4 font-bold text-dark-brown">120/70</td>
                    <td className="p-4 font-bold text-dark-brown">130/80</td>
                  </tr>
                  <tr className="border-b border-dark-brown/5 bg-orange-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-orange-200 text-orange-900 rounded text-xs font-black uppercase">Grade 1 HTN</span></td>
                    <td className="p-4 font-bold text-dark-brown">160/100</td>
                    <td className="p-4 font-bold text-dark-brown">145/90</td>
                    <td className="p-4 font-bold text-dark-brown">145/90</td>
                    <td className="p-4 font-bold text-dark-brown">140/85</td>
                    <td className="p-4 font-bold text-dark-brown">145/90</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="p-4"><span className="inline-block px-3 py-1 bg-red-200 text-red-900 rounded text-xs font-black uppercase">Grade 2-3 HTN</span></td>
                    <td className="p-4 font-bold text-dark-brown">≥180/110</td>
                    <td className="p-4 font-bold text-dark-brown">≥160/100</td>
                    <td className="p-4 font-bold text-dark-brown">≥160/100</td>
                    <td className="p-4 font-bold text-dark-brown">≥140/90</td>
                    <td className="p-4 font-bold text-dark-brown">≥150/95</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-dark-brown/60 mt-6 text-sm">
            ABPM indicates ambulatory blood pressure monitoring; BP, blood pressure; DBP, diastolic blood pressure; HBPM, home blood pressure monitoring; and SBP, systolic blood pressure.
          </p>
        </section>

        {/* More sections to follow... */}

        {/* Nocturnal Dipping Pattern */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
              <Activity size={24} />
            </div>
            <h2 className="font-display text-4xl text-dark-brown">Nocturnal Blood Pressure Pattern</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Graph Side */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] border border-dark-brown/5 shadow-sm p-8 relative overflow-hidden">
              <h3 className="font-display text-2xl text-dark-brown mb-6">Circadian Rhythm of BP</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bpData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                      dataKey="time"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#4B5563', fontSize: 12 }}
                      interval={2}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#4B5563', fontSize: 12 }}
                      domain={[0, 200]}
                      ticks={[0, 40, 80, 120, 160, 200]}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />

                    {/* Reference Area for Sleep */}
                    <ReferenceArea x1="22" x2="06" y1={0} y2={200} fill="#14B8A6" fillOpacity="0.1" />

                    {/* Threshold Lines (Dashed) */}
                    {/* Day SBP Limit ~135 */}
                    <ReferenceLine y={135} stroke="#9CA3AF" strokeDasharray="3 3" label={{ position: 'right', value: 'Day SBP limit', fontSize: 10, fill: '#9CA3AF' }} />

                    {/* Night SBP Limit ~120 */}
                    <ReferenceLine y={120} stroke="#EF4444" strokeDasharray="3 3" label={{ position: 'right', value: 'Night SBP limit', fontSize: 10, fill: '#EF4444' }} />

                    {/* Day DBP Limit ~85 */}
                    <ReferenceLine y={85} stroke="#9CA3AF" strokeDasharray="3 3" />

                    {/* Night DBP Limit ~70 */}
                    <ReferenceLine y={70} stroke="#EF4444" strokeDasharray="3 3" />

                    <Line
                      type="monotone"
                      dataKey="sbp"
                      name="Systolic BP"
                      stroke="#0D9488"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="dbp"
                      name="Diastolic BP"
                      stroke="#EA580C"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Sleep Period (22:00 - 06:00)
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-dark-brown/5 shadow-sm">
                <h4 className="font-display text-xl text-dark-brown mb-3">Normal BP Pattern</h4>
                <p className="text-dark-brown/70 text-sm leading-relaxed">
                  A normal physiological response involves a decrease of around <strong className="text-teal-600">10%-20%</strong> in blood pressure at night-time (during sleep).
                </p>
              </div>

              <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100">
                <h4 className="font-display text-xl text-red-900 mb-3">Non-Dipping</h4>
                <p className="text-red-800/80 text-sm leading-relaxed mb-4">
                  Absence of nocturnal BP fall of at least 10%.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-2 items-start">
                    <span className="bg-red-200 text-red-800 text-[10px] items-center justify-center flex w-5 h-5 rounded-full shrink-0 font-bold">!</span>
                    <p className="text-xs text-red-800/70"><strong>High Risk Groups:</strong> Black patients, DM, CKD, Salt-sensitive hypertensive patients.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-dark-brown/5 shadow-sm">
                <h4 className="font-display text-xl text-dark-brown mb-3">Significance</h4>
                <ul className="space-y-2 text-sm text-dark-brown/70">
                  <li className="flex gap-2">
                    <span className="text-accent-orange">•</span>
                    <span>Risk factor for LVH, heart failure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-orange">•</span>
                    <span>Risk factor for decline in GFR, ESRD, and death in CKD</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                <h4 className="font-display text-xl text-blue-900 mb-3">TIME Trial Evidence</h4>
                <p className="text-blue-800/70 text-sm leading-relaxed mb-2">
                  No strong evidence that evening dosing reduces CV events.
                </p>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                  • Similar CV event rates (Morning vs Evening)
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Data for the graph
const bpData = [
  { time: '12', sbp: 120, dbp: 80 },
  { time: '13', sbp: 135, dbp: 85 },
  { time: '14', sbp: 130, dbp: 86 },
  { time: '15', sbp: 135, dbp: 90 },
  { time: '16', sbp: 155, dbp: 95 },
  { time: '17', sbp: 140, dbp: 88 },
  { time: '18', sbp: 138, dbp: 92 },
  { time: '19', sbp: 135, dbp: 85 },
  { time: '20', sbp: 145, dbp: 92 },
  { time: '21', sbp: 142, dbp: 90 },
  { time: '22', sbp: 125, dbp: 78 }, // Sleep starts
  { time: '23', sbp: 110, dbp: 72 },
  { time: '24', sbp: 105, dbp: 70 },
  { time: '01', sbp: 108, dbp: 73 },
  { time: '02', sbp: 105, dbp: 68 },
  { time: '03', sbp: 110, dbp: 70 },
  { time: '04', sbp: 108, dbp: 72 },
  { time: '05', sbp: 112, dbp: 75 },
  { time: '06', sbp: 118, dbp: 78 }, // Sleep ends
  { time: '07', sbp: 155, dbp: 95 }, // Morning surge
  { time: '08', sbp: 165, dbp: 105 },
  { time: '09', sbp: 160, dbp: 100 },
  { time: '10', sbp: 165, dbp: 102 },
  { time: '11', sbp: 160, dbp: 98 },
  { time: '12', sbp: 155, dbp: 95 },
];

export default HealthGuidelines;

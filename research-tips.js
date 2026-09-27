const AL_RESEARCH_TIPS={
  analytical:[
    {source:'Harvard Business School Online',title:'Treat uncertainty as part of the decision',body:'HBS Business Analytics explicitly teaches sampling, bias, variation, hypothesis testing, and the cost of decision errors. When a problem is ambiguous, do not ask only “what moved?” Ask how confident you are, what evidence could be biased, and what mistake would be costly.',url:'https://online.hbs.edu/courses/business-analytics'},
    {source:'Harvard Business School',title:'The facts are only the starting point',body:'The HBS case method puts you in a decision-maker role with incomplete information. The aim is to analyse, choose a course of action, and justify it—not to wait for perfect certainty.',url:'https://www.hbs.edu/mba/academic-experience/the-case-method'}
  ],
  quant:[
    {source:'Harvard Business School Online',title:'Numbers should change a decision',body:'HBS Business Analytics emphasises data visualisation, descriptive statistics, uncertainty, prediction, and A/B testing in business decisions. A calculation is incomplete until you say what the number implies.',url:'https://online.hbs.edu/courses/business-analytics'},
    {source:'Oxford Saïd',title:'Business fluency also includes finance',body:'Oxford’s MBA core includes Analytics, Accounting, and Business Finance. For strategy and operations interviews, it is useful to connect metrics to revenue, margin, cash flow, investment, and value creation.',url:'https://www.sbs.ox.ac.uk/programmes/mbas/oxford-mba/academic-curriculum/core-courses-and-electives'},
    {source:'Harvard Business School',title:'Know the economic language behind the metric',body:'HBS requires finance and financial reporting because managerial decisions depend on understanding value, risk, investment, and financial statements. Treat this as a useful extension beyond interview maths.',url:'https://www.hbs.edu/faculty/units/finance/Pages/curriculum.aspx'}
  ],
  product:[
    {source:'Harvard Business School',title:'Customer value and business value belong together',body:'HBS Marketing teaches customer needs alongside product, channels, communication, pricing, and profitability. A strong product answer should connect the user problem to a sustainable business outcome.',url:'https://www.hbs.edu/faculty/units/marketing/Pages/curriculum.aspx'},
    {source:'Harvard Business School',title:'Product decisions sit inside an operating system',body:'HBS Technology & Operations Management covers process analysis, product development, technology, and operations strategy. When proposing a feature, ask what process, dependency, or operating constraint must also change.',url:'https://www.hbs.edu/faculty/units/tom/Pages/curriculum.aspx'}
  ],
  strategy:[
    {source:'Harvard Business School',title:'Strategy is an integrative choice',body:'HBS Strategy emphasises competitive advantage, customer value, industry dynamics, comparative costs, and the ability to integrate multiple analytical tools. Avoid treating strategy as a list of initiatives.',url:'https://www.hbs.edu/faculty/units/strategy/Pages/curriculum.aspx'},
    {source:'Oxford Saïd',title:'Defend the recommendation with evidence',body:'Oxford’s Strategy course explicitly focuses on critically applying frameworks, evaluating strategic options, and formulating and defending arguments using theory and evidence.',url:'https://www.sbs.ox.ac.uk/programmes/mbas/oxford-mba/academic-curriculum/core-courses-and-electives'}
  ],
  growth:[
    {source:'Harvard Business School',title:'Growth is not only acquisition',body:'HBS Marketing frames growth through customer needs, product, channels, communication, pricing, and profitability. Diagnose the system before defaulting to “get more users.”',url:'https://www.hbs.edu/faculty/units/marketing/Pages/curriculum.aspx'},
    {source:'Oxford Saïd',title:'Connect growth to analytics and economics',body:'Oxford’s MBA combines marketing, analytics, firms and markets, strategy, and finance. A growth recommendation is stronger when it explains who grows, why, at what cost, and whether the economics remain attractive.',url:'https://www.sbs.ox.ac.uk/programmes/mbas/oxford-mba/academic-curriculum/core-courses-and-electives'}
  ],
  leadership:[
    {source:'Harvard Business School',title:'Show influence, not just collaboration',body:'HBS Leadership and Organizational Behavior focuses on teams, culture, performance, networks, and relationships with peers and seniors over whom a manager has no formal authority. In interviews, make your influence mechanism visible.',url:'https://www.hbs.edu/faculty/units/ob/Pages/curriculum.aspx'},
    {source:'Oxford Saïd',title:'There may be no single right answer',body:'Oxford Organisational Behaviour notes that complex organisational questions often do not have one definitive answer; the skill is sharpening judgment about what works in context.',url:'https://www.sbs.ox.ac.uk/programmes/mbas/oxford-mba/academic-curriculum/core-courses-and-electives'},
    {source:'Harvard Business School',title:'Negotiation is a separate skill worth practising',body:'HBS offers dedicated negotiation coursework. For senior product and strategy roles, practise interests, alternatives, influence, and value creation—not only stakeholder communication.',url:'https://www.hbs.edu/faculty/units/nom/Pages/curriculum.aspx'}
  ],
  cases:[
    {source:'Harvard Business School',title:'Decide with incomplete information',body:'The HBS case method deliberately withholds perfect information. You analyse what is available, make a recommendation, debate alternatives, and reflect afterwards. That is very close to the reasoning muscle this track is trying to build.',url:'https://www.hbs.edu/mba/academic-experience/the-case-method'},
    {source:'Harvard Business School',title:'Reflection is part of the method',body:'HBS describes reflection after case discussion as part of learning. After each case here, ask: What assumption changed? What evidence mattered most? What would I do differently next time?',url:'https://www.hbs.edu/mba/academic-experience/the-case-method'}
  ],
  communication:[
    {source:'Oxford Saïd',title:'A recommendation should be defensible',body:'Oxford Strategy emphasises formulating and defending arguments using theory and evidence. Good communication is not only concise—it makes the reasoning and evidence behind the conclusion easy to inspect.',url:'https://www.sbs.ox.ac.uk/programmes/mbas/oxford-mba/academic-curriculum/core-courses-and-electives'},
    {source:'Harvard Business School',title:'Expect your view to change under challenge',body:'In HBS case discussions, students compare perspectives and may change their thinking. Practise stating a view clearly while also naming what evidence would make you revise it.',url:'https://www.hbs.edu/mba/academic-experience/the-case-method'}
  ]
};

const AL_CURRICULUM_INSIGHTS=[
  {title:'Decision-making with incomplete information',body:'Do not wait for perfect certainty. Strong business reasoning means making a defensible decision with the evidence available, while stating assumptions and risks.',source:'Harvard Business School case method'},
  {title:'Statistics and uncertainty matter',body:'Go beyond arithmetic. Sampling, bias, variation, confidence, hypothesis testing, and error trade-offs help you judge whether a signal is trustworthy enough to act on.',source:'Harvard Business School Online — Business Analytics'},
  {title:'Finance fluency strengthens strategy',body:'You should be comfortable connecting product and strategy choices to revenue, margin, cash flow, investment, ROI, and basic value creation. You do not need to become an accountant.',source:'Oxford Saïd MBA core + HBS Finance'},
  {title:'Negotiation deserves its own practice',body:'Senior roles often require influence without authority. Practise interests, alternatives, trade-offs, stakeholder incentives, and value creation—not just communication style.',source:'Harvard Business School — Negotiation'},
  {title:'Reflection is part of learning',body:'After difficult cases, ask what assumption changed, what evidence mattered most, where your reasoning was weak, and what you would do differently next time.',source:'Harvard Business School case method'},
  {title:'Strategy should integrate multiple lenses',body:'Customer value, competitive dynamics, economics, capabilities, and operating constraints should come together in one coherent choice rather than separate framework boxes.',source:'Harvard Business School Strategy + Oxford Saïd Strategy'}
];

function alResearchRail(){
  const m=modules[state.module];
  if(!m)return;
  const page=document.querySelector('#app .page');
  const content=page&&page.querySelector('.content');
  if(!page||!content||page.querySelector('.al-research-rail'))return;
  page.classList.add('al-with-research');
  const tips=AL_RESEARCH_TIPS[m.track]||AL_RESEARCH_TIPS.analytical;
  const aside=document.createElement('aside');
  aside.className='al-research-rail';
  aside.innerHTML=`${tips.map(t=>`<article class="al-research-tip"><span class="al-source">${t.source}</span><h4>${t.title}</h4><p>${t.body}</p><a href="${t.url}" target="_blank" rel="noopener noreferrer">View source ↗</a></article>`).join('')}<div class="al-gap-card"><div class="miniLabel">CURRICULUM CHECK</div><strong>What top business curricula reinforce</strong><p>These are the extra ideas worth keeping in your head while you work through the 45 modules.</p>${AL_CURRICULUM_INSIGHTS.map(x=>`<div class="al-curriculum-insight"><b>${x.title}</b><p>${x.body}</p><span>${x.source}</span></div>`).join('')}</div>`;
  page.appendChild(aside);
}
const AL_BASE_LESSON=lesson;
lesson=function(){AL_BASE_LESSON();alResearchRail();};

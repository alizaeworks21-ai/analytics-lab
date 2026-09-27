const AL_GLOSSARY={
  'zero-result rate':'The percentage of searches that return no results. Example: 90 empty searches out of 1,000 searches = 9%.',
  'conversion rate':'The percentage of people who complete the target action. Example: 320 purchases from 10,000 searches = 3.2%.',
  'activation':'The moment a new user reaches an early behaviour that predicts they received real value from the product.',
  'retention':'The percentage of users who continue to use the product or return after a defined period.',
  'churn':'The percentage of customers or users who stop using or paying for a product during a period.',
  'take rate':'The percentage of transaction value a marketplace or platform keeps as revenue.',
  'CAC':'Customer acquisition cost: total sales and marketing spend divided by new customers acquired.',
  'LTV':'Lifetime value: the estimated economic value a customer contributes over the relationship.',
  'ARPU':'Average revenue per user over a defined period.',
  'margin':'Revenue left after subtracting a defined set of costs. Always clarify whether you mean gross, contribution, or operating margin.',
  'cohort':'A group of users who share a starting event or characteristic, such as users who signed up in the same week.',
  'AOV':'Average order value: total order revenue divided by number of orders.',
  'funnel':'A sequence of steps users move through, such as visit → signup → activation → purchase.',
  'hypothesis':'A testable explanation or prediction that can be supported or rejected with evidence.',
  'leading indicator':'A metric that tends to move before the final outcome and can give an early signal.',
  'lagging indicator':'A metric that confirms an outcome after it has happened, such as realised revenue or churn.',
  'baseline':'The starting level used for comparison before a change or experiment.',
  'statistical significance':'Evidence that an observed experiment difference is unlikely to be explained by random variation alone.',
  'north star metric':'A high-level metric intended to reflect the core value users receive from a product.',
  'market share':'A company’s sales or volume as a percentage of the total relevant market.',
  'unit economics':'The revenue and direct costs associated with one customer, order, transaction, or other business unit.'
};
function alEsc(s){return String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function alGloss(text){let out=String(text??'');Object.entries(AL_GLOSSARY).sort((a,b)=>b[0].length-a[0].length).forEach(([term,def])=>{let re=new RegExp('\\b'+term.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')+'\\b','gi');out=out.replace(re,m=>`<span class="al-term" data-term="${alEsc(term)}" data-def="${alEsc(def)}" tabindex="0">${m}<span class="al-info">i</span></span>`)});return out}
function alBindTerms(){document.querySelectorAll('.al-term').forEach(el=>{const show=e=>{e.stopPropagation();e.preventDefault();let old=document.getElementById('alTermPop');if(old)old.remove();let pop=document.createElement('div');pop.id='alTermPop';pop.className='al-term-pop';pop.innerHTML=`<button class="al-pop-close" aria-label="Close">×</button><div class="miniLabel">${alEsc(el.dataset.term)}</div><div>${alEsc(el.dataset.def)}</div>`;document.body.appendChild(pop);pop.querySelector('button').onclick=()=>pop.remove()};el.addEventListener('click',show);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')show(e)})})}
function alTrackExplain(track,c){let lead={
 analytical:'This keeps the diagnosis tied to the actual decision instead of letting a vague symptom drive the analysis.',
 quant:'This tells you what should be calculated, what the denominator is, and how the number changes the business decision.',
 product:'This connects the user problem to evidence, a product choice, and a measurable outcome instead of feature brainstorming.',
 strategy:'This forces a real choice between alternatives and makes the trade-off visible.',
 growth:'This helps locate the constrained part of the growth system before choosing a tactic.',
 leadership:'This makes your judgment visible: what tension existed, what you chose, and what changed because of it.',
 cases:'This gives the case a logical branch to follow instead of producing a list of disconnected ideas.',
 communication:'This makes the conclusion easy to follow and keeps detail in service of the decision.'
};return `${lead[track]||lead.analytical} The key idea here is: ${c}`}
function alCompare(m,g){let model=m.case.model||[],good=model[0]||m.concepts[0]||m.desc,bad=g.mistakes[0];return `<div class="al-compare"><div class="al-side al-bad"><div class="miniLabel">WEAK APPROACH</div><strong>${alGloss(bad)}</strong><p>This sounds active, but it risks solving the wrong problem or using evidence without a clear decision in mind.</p></div><div class="al-side al-good"><div class="miniLabel">STRONGER APPROACH</div><strong>${alGloss(good)}</strong><p>This creates a clear basis for the next analytical step and makes the reasoning easier to test.</p></div></div>`}
function alVisual(m){let title=(m.title||'').toLowerCase();if(title.includes('problem fram'))return `<div class="al-visual"><div class="miniLabel">VISUAL EXAMPLE · SEARCH PROBLEM</div><div class="al-metrics"><div><strong>10,000</strong><span>searches</span></div><div><strong>9%</strong><span>${alGloss('zero-result rate')}</span></div><div><strong>38%</strong><span>result → click</span></div><div><strong>3.2%</strong><span>${alGloss('conversion rate')}</span></div></div><div class="al-arrow-flow"><span>“Search is bad”</span><b>→</b><span>Which user?</span><b>→</b><span>Which metric?</span><b>→</b><span>Which time period?</span><b>→</b><span>What decision?</span></div><p class="al-caption">The same complaint can point to very different problems. A 9% zero-result rate suggests coverage/query issues; a 38% result-to-click rate may instead suggest relevance or presentation issues.</p></div>`;
 if(m.track==='growth')return `<div class="al-visual"><div class="miniLabel">FUNNEL EXAMPLE</div><div class="al-funnel"><div style="--w:100%"><b>10,000</b><span>Visits</span></div><div style="--w:72%"><b>7,200</b><span>Signups</span></div><div style="--w:44%"><b>4,400</b><span>Activated</span></div><div style="--w:27%"><b>2,700</b><span>Retained</span></div></div><p class="al-caption">Do not optimise the top of the funnel automatically. The biggest loss may happen later.</p></div>`;
 if(m.track==='quant')return `<div class="al-visual"><div class="miniLabel">NUMBERS → INTERPRETATION</div><div class="al-number-row"><span>1,000 users</span><b>→</b><span>680 complete step A</span><b>→</b><span>540 complete step B</span></div><div class="al-bars"><i style="width:68%">68%</i><i style="width:54%">54%</i></div><p class="al-caption">The useful part is not only calculating 68% and 54%; it is identifying where the loss occurs and what decision that changes.</p></div>`;
 let flows={product:['User problem','Evidence','Trade-off','Decision','Metric'],strategy:['Objective','Drivers','Alternatives','Trade-off','Choice'],leadership:['Tension','Your decision','Influence','Action','Impact'],cases:['Clarify','Structure','Analyse','Prioritise','S synthesise'],communication:['Answer first','Evidence','Implication','Risk','Next step'],analytical:['Symptom','Frame','Drivers','Evidence','Decision']};let xs=flows[m.track]||flows.analytical;return `<div class="al-visual"><div class="miniLabel">MENTAL MAP</div><div class="al-arrow-flow">${xs.map((x,i)=>`${i?'<b>→</b>':''}<span>${x}</span>`).join('')}</div><p class="al-caption">Use the sequence as a memory cue. The point is not to recite it mechanically; it keeps the reasoning in the right order.</p></div>`}
function alRationaleList(q,selected){if(!q[4])return '';return `<div class="al-rationales"><div class="miniLabel">WHY EACH OPTION WORKS OR FAILS</div>${q[1].map((o,i)=>`<div class="al-rationale ${i===q[2]?'is-right':''} ${i===selected&&i!==q[2]?'is-picked-wrong':''}"><b>${String.fromCharCode(65+i)}.</b><span>${alGloss(q[4][i]||'')}</span></div>`).join('')}</div>`}
function quizBank(id){let m=modules[id],g=trackGuidance(m.track),c=m.concepts||[],model=m.case.model||[],first=model[0]||m.case.hint||c[0],second=model[1]||c[1]||'inspect the largest visible metric movement',third=model[2]||c[2]||'compare the strongest alternative';let q=[];
 q.push([`Which opening is strongest for <strong>${alGloss(m.title)}</strong>?`,[
   first,
   `Begin with “${second}” and define the objective only if the data looks ambiguous.`,
   `Use “${third}” as the working objective because it is more concrete than the original prompt.`,
   `Accept the stakeholder’s proposed solution as the problem statement, then measure whether it works.`
 ],0,`The strongest opening reduces ambiguity before committing to a diagnostic path. It makes the objective and reasoning testable.`,[
   `Strongest because it establishes the basis for the analysis before narrowing prematurely.`,
   `Plausible, but it jumps one step ahead: a useful diagnostic step can still be aimed at the wrong objective.`,
   `Concrete does not automatically mean correct. A later analytical step should not silently become the objective.`,
   `This creates confirmation bias: you are evaluating a solution before establishing whether it addresses the real problem.`
 ]]);
 q.push([`You are given this scenario:<br><br><em>${alGloss(m.case.prompt)}</em><br><br>What is the strongest <strong>first move</strong>?`,[
   first,
   second,
   third,
   `Benchmark the closest competitor first so you know what “good” should look like.`
 ],0,`A strong first move creates a sound basis for everything that follows. A later step may be useful, but useful is not the same as first.`,[
   `Best first move because it clarifies the analytical target before diagnosis or solutioning.`,
   `Often a good second step, but it assumes the problem has already been framed correctly.`,
   `Potentially valuable later, but it narrows the analysis before the objective and scope are secure.`,
   `Benchmarking can add context, but competitors may optimise for different users, economics, or goals.`
 ]]);
 q.push([`Which sequence is most defensible under interview pressure?`,[
   `${first} → ${second} → ${third}`,
   `${second} → ${first} → ${third}`,
   `${third} → ${second} → ${first}`,
   `Recommendation → supporting metric → problem definition`
 ],0,`The sequence matters because each step should reduce uncertainty for the next one. Reversing the order makes later reasoning rest on untested assumptions.`,[
   `Correct: it moves from foundation to diagnosis to deeper analysis.`,
   `Tempting because ${second} may feel concrete, but the foundation is being established after analysis has already begun.`,
   `This starts narrow and works backwards, increasing the risk of confirmation bias.`,
   `This is recommendation-first without evidence-first reasoning; it can sound confident while being analytically weak.`
 ]]);
 q.push([`Which evidence approach is strongest?`,[
   `Choose data that directly tests the objective for the relevant segment and time period, then compare it with a meaningful ${alGloss('baseline')}.`,
   `Start with the overall average because aggregate metrics are less noisy than segmented metrics.`,
   `Use the most recent period only, because older data may no longer reflect current behaviour.`,
   `Prioritise qualitative feedback first because it explains why users behave the way they do.`
 ],0,`Evidence is useful when it can distinguish between explanations. Segment, time period and baseline determine whether a movement is actually meaningful.`,[
   `Strong: it connects evidence to the question and creates a comparison that can support or reject a hypothesis.`,
   `Aggregates can hide a problem isolated to one user group, geography, device, or funnel stage.`,
   `Recency matters, but a single period without comparison tells you little about direction or abnormality.`,
   `Qualitative evidence is valuable for mechanisms, but by itself may not tell you the size, prevalence, or business impact.`
 ]]);
 q.push([`Which response contains the most important analytical failure?`,[
   g.mistakes[0],
   `State your main assumption explicitly and say what evidence would change your mind.`,
   `Choose one priority and explain the trade-off rather than listing every possible action.`,
   `Update the hypothesis when the evidence contradicts your initial view.`
 ],0,`${g.mistakes[0]} weakens the chain of reasoning because the answer can appear structured while still solving the wrong thing.`,[
   `This is the failure: it breaks the logic before later analysis can rescue it.`,
   `This is good practice because it makes uncertainty inspectable instead of hiding it.`,
   `This is good prioritisation: a decision requires choosing, not simply enumerating.`,
   `This is strong analytical behaviour because evidence should be allowed to change the conclusion.`
 ]]);return q}
function lesson(){let m=modules[state.module],g=trackGuidance(m.track),model=m.case.model||[];state.view='train';app.innerHTML=`<section class="page"><div class="crumb"><button id="backM">${tracks[m.track].name}</button> / Lesson</div><div class="content"><div class="ey">LESSON · ${alGloss(m.title)}</div><h2>${alGloss(m.desc)}</h2>${planBar(0)}<div class="deep al-intro"><h3>What this skill actually means</h3><p>${alGloss(g.why)}</p><p><strong>In simple terms:</strong> ${alGloss(m.concepts[0]||m.desc)}</p></div>${alVisual(m)}${alCompare(m,g)}<h3>Core ideas</h3>${m.concepts.map((c,i)=>`<div class="concept al-concept"><div class="al-concept-num">${i+1}</div><div><strong>${alGloss(c)}</strong><p>${alGloss(alTrackExplain(m.track,c))}</p>${model[i]?`<div class="al-inline-example"><span>See it in practice</span>${alGloss(model[i])}</div>`:''}</div></div>`).join('')}<div class="formula"><div class="miniLabel">MENTAL MODEL</div>${alGloss(m.formula)}</div><div class="example al-worked"><strong>Worked example</strong><p>${alGloss(m.example)}</p></div><div class="deep"><h3>How this appears in a real interview</h3><div class="scenarioCard"><div class="miniLabel">EXAMPLE INTERVIEW QUESTION</div>${alGloss(m.case.prompt)}</div><p>You are <strong>not</strong> expected to solve this yet. First identify what the interviewer is really testing and which analytical step should come first.</p>${model[0]?`<div class="interviewSay"><div class="miniLabel">A STRONG START MIGHT SOUND LIKE</div>“${alGloss(model[0])}”<br><br><span class="subtle">Notice why this is only the start: the next step should test or narrow the reasoning.</span></div>`:''}</div><div class="deep"><h3>Common mistakes</h3><div class="mistakes">${g.mistakes.map(x=>`<div class="mistake">${alGloss(x)}</div>`).join('')}</div></div><div class="actions"><span class="tiny">Look for the logic, not a memorised sentence.</span><button class="btn" id="toQuiz">Start practice →</button></div></div></section>`;document.getElementById('backM').onclick=()=>{state.stage=null;state.track=m.track;render()};document.getElementById('toQuiz').onclick=()=>{p(state.module).lesson=true;save();state.stage='quiz';state.qi=0;state.selected=null;state.quizCorrect=0;state.quizAnswered=0;render()};alBindTerms()}
function quiz(){let m=modules[state.module],bank=quizBank(state.module),q=bank[state.qi];if(!q){state.stage='review';return render()}state.view='train';state.selected=null;app.innerHTML=`<section class="page"><div class="crumb"><button id="qBack">${alGloss(m.title)}</button> / Practice</div><div class="content"><div class="progressDots">${bank.map((_,i)=>`<i class="${i<=state.qi?'on':''}"></i>`).join('')}</div><div class="ey">MULTIPLE-CHOICE PRACTICE · ${state.qi+1} OF ${bank.length}</div><div class="q">${q[0]}</div><div class="choices">${q[1].map((o,i)=>`<button class="choice" data-c="${i}"><span class="al-choice-letter">${String.fromCharCode(65+i)}</span><span>${alGloss(o)}</span></button>`).join('')}</div><div class="ex hide" id="ex"></div><div class="actions"><span class="tiny">The distractors are intentionally plausible. Compare the reasoning, not just the wording.</span><button class="btn hide" id="cont">${state.qi===bank.length-1?'Review lesson →':'Next question →'}</button></div></div></section>`;document.getElementById('qBack').onclick=()=>{state.stage='lesson';state.selected=null;render()};let locked=false;document.querySelectorAll('[data-c]').forEach(b=>b.onclick=e=>{if(e.target.closest('.al-term'))return;if(locked)return;locked=true;state.selected=+b.dataset.c;document.querySelectorAll('[data-c]').forEach((z,i)=>{z.disabled=true;if(i===q[2])z.classList.add('correct');else if(i===state.selected)z.classList.add('wrong')});let ok=state.selected===q[2];state.quizAnswered++;if(ok)state.quizCorrect++;let score=Math.round(state.quizCorrect/state.quizAnswered*100);if(state.qi===bank.length-1)p(state.module).quiz=Math.max(p(state.module).quiz,score);save();let ex=document.getElementById('ex');ex.classList.remove('hide');ex.innerHTML=`<strong>${ok?'Correct.':'Not quite.'}</strong><p>${alGloss(q[3])}</p>${alRationaleList(q,state.selected)}<div class="tiny">Current score: ${state.quizCorrect}/${state.quizAnswered}. The explanation is the learning step.</div>`;document.getElementById('cont').classList.remove('hide');alBindTerms()});document.getElementById('cont').onclick=()=>{state.qi++;state.selected=null;render()};alBindTerms()}

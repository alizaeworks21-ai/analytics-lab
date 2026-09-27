const AL_SIMPLE_EXAMPLES={
 analytical:[
  ['Search','A manager says “search is bad.” Before fixing anything, ask: bad for whom, in which market, and measured how?'],
  ['Checkout','Orders fell this week. First check whether fewer people started checkout, more people abandoned it, or payments failed.'],
  ['Delivery','Customers complain about slow delivery. Split the problem: is packing slow, courier pickup late, or travel time longer?'],
  ['Onboarding','New users are dropping off. Instead of saying “improve onboarding,” find the exact step where they leave.']
 ],
 quant:[
  ['Conversion','1,000 people visit, 80 buy. Conversion is 8%. If last month it was 10%, the useful question is why it fell by 2 percentage points.'],
  ['Margin','A product sells for €100 and directly costs €60. Gross margin is €40 before other costs.'],
  ['A/B test','Version A converts at 8.0% and B at 8.4%. That looks better, but you still need enough data to know whether the difference is real or noise.'],
  ['Retention','100 users sign up in January. If 35 are still active in April, 3‑month retention is 35%.']
 ],
 product:[
  ['Banking app','Users keep abandoning card verification. The product question is not “what feature should we build?” but “what is stopping them from completing verification?”'],
  ['Booking app','People search hotels but rarely book. Maybe prices feel high, filters are weak, or trust is low. Each cause leads to a different product change.'],
  ['Notifications','More notifications may increase opens but also increase opt-outs. A product choice has both benefit and cost.'],
  ['Checkout','A one-click checkout sounds attractive, but first confirm that checkout friction is actually the main reason people leave.']
 ],
 strategy:[
  ['Market entry','A company can enter France, Germany, or Spain. Strategy means choosing where to play and why—not listing all three as good options.'],
  ['Pricing','Lower prices may grow users but shrink margin. The decision depends on whether extra volume creates more value than the lost margin.'],
  ['Build vs partner','Building gives more control; partnering may be faster. Strategy is choosing based on the goal and constraints.'],
  ['Competition','A competitor copies your feature. The strategic question is whether that feature was truly your advantage or just one visible part of it.']
 ],
 growth:[
  ['Acquisition','Buying more ads is pointless if most new users leave after day one. Fix the leaky part before pouring in more traffic.'],
  ['Referral','A referral loop only works if people already like the product enough to recommend it.'],
  ['Monetisation','Raising price may increase revenue per customer but also increase churn. Look at the whole system.'],
  ['Activation','If 10,000 sign up but only 2,000 reach the first valuable action, activation may matter more than acquisition.']
 ],
 leadership:[
  ['No authority','Engineering disagrees with your priority. You cannot simply order them; you need evidence, trade-offs, and a reason they can support.'],
  ['Conflict','Sales wants a custom feature, product wants a scalable solution. Leadership means making the tension explicit and helping the group decide.'],
  ['Stakeholders','A senior leader wants speed while legal wants caution. Show how you balanced both instead of saying you “aligned stakeholders.”'],
  ['Negotiation','Two teams both need the same engineer. Find each side’s real need and trade timing, scope, or support rather than arguing positions.']
 ],
 cases:[
  ['Profit drop','Profit fell. Break it into revenue and cost first. Then go deeper only where the evidence points.'],
  ['Market size','Estimate coffee shops in Munich by population, likely customers, visits, and capacity instead of guessing one big number.'],
  ['New product','Before recommending launch, check customer demand, economics, capability, competition, and risk.'],
  ['Operations','Delivery times doubled. Separate demand spikes, staffing, warehouse delays, and courier capacity before choosing a fix.']
 ],
 communication:[
  ['Executive answer','Instead of five minutes of background, start with: “I would prioritise X because of A and B; the main risk is C.”'],
  ['Data story','Do not read every number. Point to the one change that matters and explain what decision it affects.'],
  ['Trade-off','Say what you chose, what you gave up, and why. That is clearer than listing every option.'],
  ['Uncertainty','You can say “My current view is X, but I would change it if Y data shows the opposite.”']
 ]
};
function alPickExample(track,c){let arr=AL_SIMPLE_EXAMPLES[track]||AL_SIMPLE_EXAMPLES.analytical;let s=String(c||'');let n=0;for(let i=0;i<s.length;i++)n=(n+s.charCodeAt(i))%997;return arr[n%arr.length]}
function alTrackExplain(track,c){const ex=alPickExample(track,c);const simple={
 analytical:'Start by making the problem specific. Do not solve a vague sentence.',
 quant:'Use the number to answer a question. A calculation by itself is not the answer.',
 product:'Start with what the user is struggling with, then decide what product change could help.',
 strategy:'Strategy means choosing between real options and accepting the trade-off.',
 growth:'Growth is a chain. Find the weak link before choosing a tactic.',
 leadership:'Show what was difficult, what you did, and how you got people moving in the same direction.',
 cases:'Break the big question into smaller questions, then follow the evidence.',
 communication:'Say the answer clearly first, then give the few reasons that support it.'
};return `${simple[track]||simple.analytical} Example: ${ex[1]}`}
function alCompare(m,g){const track=m.track,ex=(AL_SIMPLE_EXAMPLES[track]||AL_SIMPLE_EXAMPLES.analytical);const a=ex[0],b=ex[1]||ex[0];let weak=g.mistakes[0],good=(m.case.model||[])[0]||m.concepts[0]||m.desc;return `<div class="al-compare"><div class="al-side al-bad"><div class="miniLabel">EASY TRAP</div><strong>${alGloss(weak)}</strong><p>Example: ${alGloss(a[1])}</p></div><div class="al-side al-good"><div class="miniLabel">BETTER MOVE</div><strong>${alGloss(good)}</strong><p>Another example: ${alGloss(b[1])}</p></div></div>`}
function alSketch(title,body){return `<div class="al-sketch-card"><div class="miniLabel">${title}</div>${body}</div>`}
function alVisual(m){const t=m.track,title=(m.title||'').toLowerCase();
 if(title.includes('problem fram')) return alSketch('SKETCH · WHAT “BAD” CAN REALLY MEAN',`<svg class="al-sketch" viewBox="0 0 760 330" role="img" aria-label="A manager says search is bad, then the problem is split into user, metric, time and cause"><defs><filter id="rough"><feTurbulence baseFrequency="0.02" numOctaves="2" seed="3" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.3"/></filter></defs><g filter="url(#rough)" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="92" cy="98" r="30"/><path d="M92 128v78M58 164h68M92 206l-34 55M92 206l36 55"/><rect x="142" y="55" width="205" height="78" rx="18"/><path d="M142 112l-25 18 9-28"/><circle cx="456" cy="118" r="54"/><path d="M493 157l60 61"/><path d="M392 250h280M430 250v-35M515 250v-35M600 250v-35"/></g><g class="al-sketch-text"><text x="175" y="88">“Search is bad.”</text><text x="175" y="112">Fix it.</text><text x="410" y="205">LOOK CLOSER</text><text x="400" y="285">WHO?</text><text x="485" y="285">WHAT?</text><text x="575" y="285">WHEN?</text></g></svg><div class="al-sketch-examples"><div><b>Example A</b><span>Only new users struggle → maybe they do not understand the search language.</span></div><div><b>Example B</b><span>Searches work, but clicks are low → maybe results are irrelevant.</span></div><div><b>Example C</b><span>Clicks are fine, purchases fall → search may not be the real problem at all.</span></div></div>`);
 if(t==='growth') return alSketch('SKETCH · A LEAKY GROWTH BUCKET',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M260 65h250l-35 180H300z"/><path d="M330 112h150M315 160h165M305 208h155"/><path d="M215 42c55 0 95 14 130 42"/><path d="M475 160c35 18 46 45 72 55"/><path d="M475 208c44 15 55 42 82 52"/></g><g class="al-sketch-text"><text x="120" y="35">MORE TRAFFIC</text><text x="353" y="105">SIGNUPS</text><text x="345" y="153">ACTIVATION</text><text x="350" y="201">RETENTION</text><text x="548" y="220">LEAK</text><text x="560" y="265">LEAK</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>10,000 people sign up, but only 2,000 reach the first useful action. Buying more ads mostly creates more drop-off.</span></div></div>`);
 if(t==='strategy') return alSketch('SKETCH · STRATEGY IS A FORK IN THE ROAD',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M370 300v-95M370 205c0-70-120-58-170-125M370 205c0-70 120-58 170-125"/><path d="M170 80l35 2-10 32M570 80l-35 2 10 32"/><circle cx="370" cy="180" r="22"/></g><g class="al-sketch-text"><text x="118" y="55">OPTION A</text><text x="535" y="55">OPTION B</text><text x="326" y="325">CHOOSE</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>Build in-house: slower, more control. Partner: faster, less control. A strategy answer chooses based on the goal.</span></div></div>`);
 if(t==='product') return alSketch('SKETCH · FROM USER PAIN TO PRODUCT CHOICE',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><circle cx="95" cy="115" r="28"/><path d="M95 143v85M60 175h70M95 228l-30 55M95 228l35 55"/><rect x="180" y="62" width="160" height="95" rx="18"/><path d="M180 130l-30 18 10-30"/><rect x="430" y="65" width="145" height="205" rx="22"/><circle cx="502" cy="238" r="7"/><path d="M350 155h55M395 145l14 10-14 10"/></g><g class="al-sketch-text"><text x="205" y="100">“I keep</text><text x="205" y="125">getting stuck.”</text><text x="455" y="112">PRODUCT</text><text x="462" y="140">CHANGE</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>If users fail identity verification, first learn why. A clearer explanation and a new feature are very different fixes.</span></div></div>`);
 if(t==='leadership') return alSketch('SKETCH · INFLUENCE WITHOUT AUTHORITY',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><circle cx="145" cy="110" r="28"/><circle cx="610" cy="110" r="28"/><path d="M145 138v90M610 138v90M110 170h70M575 170h70M145 228l-35 55M145 228l35 55M610 228l-35 55M610 228l35 55"/><path d="M225 190c85-80 225-80 310 0"/><path d="M245 205c80 45 190 45 270 0"/></g><g class="al-sketch-text"><text x="82" y="75">PRODUCT</text><text x="566" y="75">ENGINEERING</text><text x="320" y="132">EVIDENCE</text><text x="325" y="250">TRADE-OFF</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>You cannot order another team to agree. Show the user impact, the cost of delay, and what you are willing to trade.</span></div></div>`);
 if(t==='quant') return alSketch('SKETCH · A NUMBER NEEDS A COMPARISON',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M110 265h520M150 265v-95h100v95M330 265v-135h100v135M510 265v-185h100v185"/><path d="M110 95c140-35 295-25 520-50"/></g><g class="al-sketch-text"><text x="168" y="155">54%</text><text x="350" y="115">68%</text><text x="530" y="65">82%</text><text x="125" y="305">PAST</text><text x="335" y="305">NOW</text><text x="520" y="305">TARGET</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>68% sounds meaningless alone. Compared with 82% last month or a 75% target, it suddenly tells you something.</span></div></div>`);
 if(t==='communication') return alSketch('SKETCH · SAY THE ANSWER FIRST',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M120 140l170-55v150l-170-55zM290 115l85-25v140l-85-25M165 190l25 90h55l-20-72"/><path d="M430 105h220M430 155h180M430 205h130"/></g><g class="al-sketch-text"><text x="442" y="92">1. ANSWER</text><text x="442" y="142">2. REASONS</text><text x="442" y="192">3. RISK / NEXT STEP</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>“I would prioritise retention first. It is where the largest drop occurs, and fixing it improves the value of future acquisition.”</span></div></div>`);
 return alSketch('SKETCH · FOLLOW THE EVIDENCE',`<svg class="al-sketch" viewBox="0 0 760 330"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><circle cx="165" cy="115" r="52"/><path d="M203 153l80 80"/><circle cx="385" cy="95" r="18"/><circle cx="525" cy="175" r="18"/><circle cx="390" cy="255" r="18"/><path d="M280 205l90-95M280 215l220-35M280 225l90 25"/></g><g class="al-sketch-text"><text x="110" y="45">QUESTION</text><text x="330" y="72">CAUSE A</text><text x="500" y="145">CAUSE B</text><text x="335" y="300">CAUSE C</text></g></svg><div class="al-sketch-examples"><div><b>Example</b><span>Profit fell. Check revenue and cost first. If revenue is stable, stop investigating demand and go deeper into costs.</span></div></div>`)
}

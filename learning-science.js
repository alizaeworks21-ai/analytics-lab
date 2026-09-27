function alInjectLearningScience(){
  const m=modules[state.module];
  const content=document.querySelector('#app .page .content');
  if(!m||!content||content.querySelector('.al-learning-strip'))return;
  const firstDeep=content.querySelector('.al-intro')||content.querySelector('.deep');
  const strip=document.createElement('div');
  strip.className='al-learning-strip';
  strip.innerHTML=`<div class="miniLabel">HOW THIS LESSON IS DESIGNED TO STICK</div><h3>Learn it in more than one way</h3><div class="al-memory-legend"><span class="define">1 · DEFINE</span><span class="analyse">2 · ANALYSE</span><span class="decide">3 · DECIDE</span><span class="risk">4 · WATCH OUT</span></div><div class="al-learning-methods"><div class="al-learning-method"><b>Visual + words</b><span>Use the diagram and explanation together instead of memorising a sentence.</span></div><div class="al-learning-method"><b>Worked example</b><span>See one strong reasoning path before being asked to solve independently.</span></div><div class="al-learning-method"><b>Retrieval</b><span>Try to recall the idea before revealing the answer below.</span></div><div class="al-learning-method"><b>Contrast</b><span>Compare a plausible weak approach with a stronger one so the difference is memorable.</span></div></div>`;
  if(firstDeep)firstDeep.insertAdjacentElement('afterend',strip);

  const actions=content.querySelector('.actions');
  if(actions){
    const concepts=(m.concepts||[]).slice(0,3);
    const recall=document.createElement('div');
    recall.className='al-recall';
    recall.innerHTML=`<div class="miniLabel">20-SECOND RETRIEVAL CHECK</div><h3>Close the loop before practice</h3><p>Without scrolling up, what are the first ${concepts.length||2} ideas you would use if this appeared in an interview?</p><button class="ghost" type="button" id="alRevealRecall">Reveal cues</button><div class="al-recall-answer hide" id="alRecallAnswer">${concepts.map((x,i)=>`<b>${i+1}.</b> ${alGloss(x)}`).join('<br>')}</div>`;
    actions.insertAdjacentElement('beforebegin',recall);
    const btn=recall.querySelector('#alRevealRecall');
    const ans=recall.querySelector('#alRecallAnswer');
    btn.onclick=()=>{ans.classList.remove('hide');btn.textContent='Cues revealed';btn.disabled=true;alBindTerms();};
  }
  alBindTerms();
}
const AL_SCIENCE_LESSON=lesson;
lesson=function(){AL_SCIENCE_LESSON();alInjectLearningScience();};

if(typeof review==='function'){
  const AL_SCIENCE_REVIEW=review;
  review=function(){AL_SCIENCE_REVIEW();const c=document.querySelector('#app .content');if(!c||c.querySelector('.al-review-plan'))return;const card=document.createElement('div');card.className='al-review-plan';card.innerHTML=`<strong>Memory plan</strong><ol><li><b>Now:</b> explain the mental model once without looking.</li><li><b>Tomorrow:</b> reopen this module and answer one scenario from memory.</li><li><b>In 3–7 days:</b> mix this topic with another module instead of reviewing it alone.</li></ol>`;const actions=c.querySelector('.actions');if(actions)actions.insertAdjacentElement('beforebegin',card);};
}

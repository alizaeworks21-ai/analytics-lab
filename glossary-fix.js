// Prevent glossary terms from being wrapped more than once or inserted inside HTML attributes.
(function(){
  const terms=Object.entries(AL_GLOSSARY).sort((a,b)=>b[0].length-a[0].length);

  function glossPlainText(value){
    let out=String(value??'');
    terms.forEach(([term,def])=>{
      const escaped=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      const re=new RegExp('\\b'+escaped+'\\b','gi');
      out=out.replace(re,m=>`<span class="al-term" data-term="${alEsc(term)}" data-def="${alEsc(def)}" tabindex="0">${m}<span class="al-info">i</span></span>`);
    });
    return out;
  }

  alGloss=function(text){
    const raw=String(text??'');
    if(!raw)return raw;

    // Parse the string so replacements happen only in visible text nodes.
    // Existing glossary spans are skipped, which makes this safe to call repeatedly.
    const tpl=document.createElement('template');
    tpl.innerHTML=raw;
    const walker=document.createTreeWalker(tpl.content,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);

    nodes.forEach(node=>{
      const parent=node.parentElement;
      if(parent&&parent.closest('.al-term'))return;
      const rendered=glossPlainText(node.nodeValue);
      if(rendered===node.nodeValue)return;
      const holder=document.createElement('span');
      holder.innerHTML=rendered;
      node.replaceWith(...holder.childNodes);
    });
    return tpl.innerHTML;
  };
})();

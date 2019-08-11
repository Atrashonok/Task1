
if(process.argv.length<3)console.log('');else{let e=process.argv.slice(2),l=e.reduce((e,l)=>e.length<=l.length?e:l),o=l.length;e:for(let r=o;r>=0;r--)for(let s=0;s<=o-r;s++){let o=l.substring(s,s+r);if(e.every(e=>~e.indexOf(o))){console.log(o);break e}}}


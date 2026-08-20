const questions=[
{t:'Ежелгі Қазақстан',q:'Андрон мәдениеті негізінен қай дәуірге жатады?',a:['Қола дәуірі','Темір дәуірі','Тас дәуірі','Орта ғасыр'],c:0},
{t:'Ежелгі Қазақстан',q:'Сақтардың әйгілі патшайымы кім?',a:['Томирис','Бопай','Айғаным','Домалақ ана'],c:0},
{t:'Ежелгі Қазақстан',q:'«Алтын адам» алғаш рет қай жерден табылды?',a:['Есік қорғанынан','Берелден','Отырардан','Түркістаннан'],c:0},
{t:'Түрік дәуірі',q:'Түрік қағанаты қай жылы құрылды?',a:['552 ж.','603 ж.','704 ж.','751 ж.'],c:0},
{t:'Түрік дәуірі',q:'Батыс Түрік қағанатының орталығы болған қала?',a:['Суяб','Баласағұн','Отырар','Сығанақ'],c:0},
{t:'Түрік дәуірі',q:'Қазақ жеріндегі көне түркі жазба ескерткіштері қай жазумен жазылды?',a:['Орхон-Енисей','Араб','Латын','Кирилл'],c:0},
{t:'Қазақ хандығы',q:'Қазақ хандығын құрған хандар?',a:['Керей мен Жәнібек','Қасым мен Хақназар','Тәуке мен Абылай','Есім мен Тәуекел'],c:0},
{t:'Қазақ хандығы',q:'Қазақ хандығының құрылған уақыты?',a:['1465–1466 жж.','1511–1512 жж.','1598–1599 жж.','1711–1712 жж.'],c:0},
{t:'Қазақ хандығы',q:'«Қасым ханның қасқа жолы» кімнің тұсында жасалды?',a:['Қасым хан','Есім хан','Тәуке хан','Абылай хан'],c:0},
{t:'Қазақ хандығы',q:'«Жеті жарғы» заңдар жинағы қай ханның тұсында жасалды?',a:['Тәуке хан','Қасым хан','Есім хан','Кенесары хан'],c:0},
{t:'XVIII–XIX ғасырлар',q:'Абылай ханның шын есімі?',a:['Әбілмансұр','Абылай','Уәли','Әбілқайыр'],c:0},
{t:'XVIII–XIX ғасырлар',q:'Кіші жүздің Ресей бодандығын қабылдауы қай жылы басталды?',a:['1731 ж.','1723 ж.','1740 ж.','1756 ж.'],c:0},
{t:'XVIII–XIX ғасырлар',q:'Сырым Датұлы бастаған көтеріліс қай жылдары болды?',a:['1783–1797 жж.','1836–1838 жж.','1916 ж.','1822–1824 жж.'],c:0},
{t:'XX ғасыр',q:'1916 жылғы ұлт-азаттық көтерілістің басты себептерінің бірі?',a:['25 маусым жарлығы','Жаңа экономикалық саясат','Ұжымдастыру','Тың игеру'],c:0},
{t:'XX ғасыр',q:'Алаш партиясы қай жылы құрылды?',a:['1917 ж.','1905 ж.','1920 ж.','1937 ж.'],c:0},
{t:'XX ғасыр',q:'Қазақстан тәуелсіздігін қашан жариялады?',a:['1991 жылғы 16 желтоқсан','1990 жылғы 25 қазан','1992 жылғы 4 маусым','1993 жылғы 15 қараша'],c:0},
{t:'Тәуелсіз Қазақстан',q:'Қазақстан Республикасының ұлттық валютасы теңге қашан енгізілді?',a:['1993 жылғы 15 қараша','1991 жылғы 16 желтоқсан','1992 жылғы 4 маусым','1995 жылғы 30 тамыз'],c:0},
{t:'Тәуелсіз Қазақстан',q:'Қазақстанның қазіргі Конституциясы қай жылы қабылданды?',a:['1995 ж.','1991 ж.','1993 ж.','1998 ж.'],c:0},
{t:'Тәуелсіз Қазақстан',q:'Қазақстанның мемлекеттік рәміздері туралы Конституциялық заң қай жылы қабылданды?',a:['2007 ж.','1992 ж.','1995 ж.','1991 ж.'],c:0},
{t:'Тәуелсіз Қазақстан',q:'Қазақстан астанасы Алматыдан Ақмолаға қай жылы көшірілді?',a:['1997 ж.','1995 ж.','1998 ж.','2000 ж.'],c:0}
];
const topics=[['🏺','Ежелгі Қазақстан','Сақтар, ғұндар, археологиялық мәдениеттер'],['⚔️','Түрік дәуірі','Түрік қағанаттары және орта ғасыр'],['👑','Қазақ хандығы','Хандар, заңдар, сыртқы саясат'],['🛡️','XVIII–XIX ғасырлар','Жоңғар шапқыншылығы, отарлау, көтерілістер'],['🏭','XX ғасыр','Алаш, кеңестік кезең, тәуелсіздікке дейін'],['🇰🇿','Тәуелсіз Қазақстан','1991 жылдан қазіргі кезеңге дейін']];
let quiz=[],index=0,score=0,selected=null,timerId=null,time=900,mistakes=[];
const $=id=>document.getElementById(id);
function renderTopics(){ $('topics').innerHTML=topics.map((x,i)=>`<div class="topic" onclick="startQuiz('${i}')"><div class="topic-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('') }
function startQuiz(type){clearInterval(timerId);selected=null;score=0;index=0;mistakes=[];time=900;quiz=type==='mixed'?[...questions].sort(()=>Math.random()-.5).slice(0,10):questions.filter(q=>q.t===topics[type][1]);if(!quiz.length)return; $('homeView').classList.add('hidden');$('resultView').classList.add('hidden');$('quizView').classList.remove('hidden');renderQuestion();timerId=setInterval(()=>{time--;updateTimer();if(time<=0){clearInterval(timerId);finishQuiz()}},1000);window.scrollTo({top:0,behavior:'smooth'})}
function renderQuestion(){const q=quiz[index];selected=null;$('qTopic').textContent=q.t;$('qNumber').textContent=`${index+1} / ${quiz.length}`;$('questionText').textContent=q.q;$('answers').innerHTML=q.a.map((a,i)=>`<button class="answer" onclick="choose(${i})">${String.fromCharCode(65+i)}. ${a}</button>`).join('');$('nextBtn').disabled=true;$('nextBtn').textContent=index===quiz.length-1?'Аяқтау':'Келесі сұрақ →';$('progressBar').style.width=`${index/quiz.length*100}%`}
function choose(i){if(selected!==null)return;selected=i;$('nextBtn').disabled=false;document.querySelectorAll('.answer')[i].classList.add('selected')}
function nextQuestion(){const q=quiz[index];if(selected===q.c)score++;else mistakes.push({q:q.q,correct:q.a[q.c],given:q.a[selected]});index++;if(index<quiz.length)renderQuestion();else finishQuiz()}
function finishQuiz(){clearInterval(timerId);$('progressBar').style.width='100%';$('quizView').classList.add('hidden');$('resultView').classList.remove('hidden');const pct=Math.round(score/quiz.length*100);let best=Number(localStorage.getItem('bestScore')||0);if(pct>best)localStorage.setItem('bestScore',pct);localStorage.setItem('testsDone',Number(localStorage.getItem('testsDone')||0)+1);$('resultScore').textContent=pct+'%';$('resultTitle').textContent=pct>=90?'Керемет нәтиже!':pct>=70?'Жақсы нәтиже!':'Әлі де дайындалайық!';$('resultText').textContent=`${quiz.length} сұрақтың ${score}-ына дұрыс жауап бердіңіз.`;$('resultIcon').textContent=pct>=90?'🏆':pct>=70?'👏':'📚';$('mistakes').innerHTML=mistakes.length?`<h3>Қате жауаптар</h3>`+mistakes.map(m=>`<div class="mistake"><b>${m.q}</b><span>Сіздің жауабыңыз: ${m.given||'таңдалмады'}</span><br><span>Дұрыс жауап: <strong>${m.correct}</strong></span></div>`).join(''):'<h3>🎉 Қате жауап жоқ!</h3>';updateStats();window.scrollTo({top:0,behavior:'smooth'})}
function updateTimer(){const m=String(Math.floor(time/60)).padStart(2,'0'),s=String(time%60).padStart(2,'0');$('timer').textContent=`${m}:${s}`}
function updateStats(){$('bestScore').textContent=(localStorage.getItem('bestScore')||0)+'%';$('testsDone').textContent=localStorage.getItem('testsDone')||0}
function showHome(){clearInterval(timerId);$('quizView').classList.add('hidden');$('resultView').classList.add('hidden');$('homeView').classList.remove('hidden');updateStats();window.scrollTo({top:0,behavior:'smooth'})}
$('themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('dark',document.body.classList.contains('dark'))};
if(localStorage.getItem('dark')==='true')document.body.classList.add('dark');renderTopics();updateStats();

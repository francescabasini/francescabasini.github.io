import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Sun, Moon, Mail, Github, Linkedin, FileText, ArrowUpRight} from 'lucide-react';
import './style.css';

const projects = [
  {title:'Research project',category:'Mathematical modelling',description:'Add a short description and a project image here.',tags:['Modelling','Research']},
  {title:'Statistical inference',category:'Computational statistics',description:'Replace this example with your own project and links.',tags:['Bayesian methods','Statistics']},
  {title:'Interdisciplinary project',category:'Applied mathematics',description:'Showcase your research or collaborative work here.',tags:['Networks','Applications']}
];
const news = [
  {date:'2026',text:'Add your latest research, professional news, or announcement.'},
  {date:'2025',text:'Add another recent update here.'}
];
function App(){
 const [theme,setTheme]=useState(()=>localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
 const [page,setPage]=useState(()=>{const redirected=sessionStorage.getItem('redirect');sessionStorage.removeItem('redirect');return (redirected||location.pathname).startsWith('/projects')?'projects':'about'});
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme)},[theme]);
 useEffect(()=>{const handler=()=>setPage(location.pathname.startsWith('/projects')?'projects':'about');window.addEventListener('popstate',handler);return()=>window.removeEventListener('popstate',handler)},[]);
 const navigate=(p)=>{history.pushState({},'',p==='about'?'/':'/projects/');setPage(p);window.scrollTo(0,0)};
 return <div className="shell">
   <header><button className="brand" onClick={()=>navigate('about')}>Francesca Basini<span className="brand-dot">.</span></button><nav aria-label="Main navigation"><button className={page==='about'?'active':''} onClick={()=>navigate('about')}>Home / About</button><button className={page==='projects'?'active':''} onClick={()=>navigate('projects')}>Projects</button><button className="theme-toggle" onClick={()=>setTheme(theme==='light'?'dark':'light')} aria-label={'Switch to '+(theme==='light'?'night':'day')+' mode'}>{theme==='light'?<Moon size={18}/>:<Sun size={18}/>}</button></nav></header>
   {page==='about'?<main><section className="intro"><aside className="profile"><img src="/profile.jpg" alt="Francesca Basini"/><div className="socials"><a href="mailto:Francesca.Basini@warwick.ac.uk" aria-label="Email"><Mail/></a><a href="https://github.com/francescabasini" aria-label="GitHub"><Github/></a><a href="https://www.linkedin.com/in/francesca-basini-788b71a0/" aria-label="LinkedIn"><Linkedin/></a></div><div className="profile-caption">Contact & profiles</div></aside><div className="bio"><p className="eyebrow">ABOUT ME</p><h1>Francesca Basini</h1><p className="affiliation">Mathematics · Statistics · Computational Research</p><p>I am a researcher interested in mathematical and statistical methods for understanding complex systems, with applications in biology and beyond.</p><p>My research interests include likelihood-free inference, Bayesian statistics, dynamical systems, network modelling, and neural networks.</p><p className="note">Biography adapted from the original 2023 website. Please update your current position and affiliation before publishing.</p></div></section><section className="news"><div className="section-title"><span className="eyebrow">UPDATES</span><h2>News</h2></div>{news.map((n,i)=><div className="news-row" key={i}><time>{n.date}</time><p>{n.text}</p></div>)}</section></main>:<main className="projects-page"><p className="eyebrow">SELECTED WORK</p><h1>Projects</h1><p className="projects-lead">A selection of research and technical projects. Replace these sample entries with your own work.</p><div className="projects-grid">{projects.map((p,i)=><article className="project" key={i}><div className={'project-art art-'+i}><span>{String(i+1).padStart(2,'0')}</span></div><div className="project-body"><p className="eyebrow">{p.category}</p><h2>{p.title} <ArrowUpRight size={19}/></h2><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></main>}
   <footer><span>© {new Date().getFullYear()} Francesca Basini</span><span>Built with React · Hosted on GitHub Pages</span></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);

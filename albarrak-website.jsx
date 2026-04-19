import { useState, useEffect } from "react";

const S = {
  en: {
    nav: {about:"About",experience:"Career",media:"Speaking",publications:"Research",governance:"Governance",contact:"Contact"},
    hero: {title:"Dr. Mansour Saleh Albarrak",subtitle:"Finance & Governance Leader",creds:"PhD Finance · Cert IoD · Harvard · MIT · Oxford",tag:"Bridging academic rigor with executive leadership to build financially sustainable institutions."},
    about: {title:"About",p1:"Experienced academic and executive leader with 15+ years across finance, governance, and public sector strategy. Dr. Albarrak brings a rare combination of deep academic expertise and hands-on operational finance — having served as Dean of a business college, Financial Consultant to a university president, and financial leader of an industrial group with over 500 employees.",p2:"At Saudi Electronic University, he led more than 30 financial work streams for the University President, including building financial models, authoring the university's Investment Policy Statement, establishing investment committee governance, conducting tuition revenue analysis, selecting external auditors, and presenting financial strategy to the Ministry of Finance. He also served on the university's audit, investment, budget, and privatization committees — touching every pillar of the CFO function across governance roles.",p3:"At Albarrak Industrial Group, he led the selection and implementation of an ERP system (Odoo) from contract through to financial statement production, managed cash flow operations, implemented payment controls, and drove manufacturing cost optimization — demonstrating the operational finance capability that complements his strategic expertise.",p4:"Educated at the University of Plymouth (PhD in Finance), the University of Exeter (MSc), and King Fahd University of Petroleum and Minerals (BSc), with executive education from Harvard, MIT, and Oxford. He holds a Certificate in Company Direction from the Institute of Directors (IoD) and has published over 10 peer-reviewed articles in capital structure, FinTech, and financial literacy.",p5:"Committed to strengthening evidence-based financial governance, institutional sustainability, and cross-sector collaboration — particularly in higher education, government entities, and Vision 2030 initiatives.",stats:[{v:"15+",l:"Years Experience"},{v:"10+",l:"Publications"},{v:"30+",l:"Financial Work Streams"},{v:"12+",l:"Board & Committee Roles"}]},
    exp: {title:"Career",roles:[
      {p:"2023 – Present",r:"Financial & Strategic Consultant",o:"Albarrak Industrial Group",d:"Leading financial transformation and strategic direction for a 500-employee industrial group. Scope includes ERP selection and implementation (Odoo), cash flow management and AP/AR optimization, financial controls and payment policy design, manufacturing cost optimization, business development strategy, and operational restructuring."},
      {p:"2022 – 2024",r:"Financial Consultant to University President",o:"Saudi Electronic University",d:"Led 30+ financial work streams: financial modeling, investment policy, tuition revenue strategy, auditor selection, Ministry of Finance presentations, and privatization charter."},
      {p:"2018 – 2023",r:"Dean, College of Administrative & Financial Sciences",o:"Saudi Electronic University",d:"Academic and financial management. Member of University Council, Higher Advisory Committee, and multiple strategic committees."},
      {p:"2015 – 2020",r:"Head of Finance Department",o:"Saudi Electronic University",d:"Led the finance department — curriculum development, faculty recruitment, and departmental budget management. Built the department's academic and operational foundation."},
      {p:"2015 – Present",r:"Assistant Professor of Finance",o:"Saudi Electronic University",d:"Research in capital structure, FinTech, venture capital, and financial literacy. Published 10+ peer-reviewed articles."}
    ]},
    edu: {title:"Education",degs:[{d:"PhD Finance",s:"University of Plymouth, UK",y:"2015"},{d:"MSc Money & Banking",s:"University of Exeter, UK",y:"2010"},{d:"BSc Marketing",s:"KFUPM",y:"2008"}],exec:["Harvard — Managing Yourself & Leading Others","MIT — People Analytics","Oxford — FinTech Programme","Center for Governance — Advanced Director Program","Center for Governance — Board Director Readiness","LBTC London — Strategic Leadership"]},
    media: {title:"Speaking & Media",items:[
      {type:"TV",title:"Future Investment Initiative (FII)",venue:"Al Ekhbariya TV",year:"2022",desc:"Live TV interview discussing investment agreements and their impact on quality of life in the Kingdom."},
      {type:"STAGE",title:"Road Map to FinTech Solutions",venue:"Step Saudi 2022, Riyadh",year:"2022",desc:"Panelist on the Fintech & Future stage alongside industry leaders from across the ecosystem."},
      {type:"TALK",title:"FinTech Ecosystem in Saudi Arabia",venue:"FinTech Saudi (Official Channel)",year:"2021",desc:"Full 57-minute workshop presentation on the Saudi FinTech landscape and ecosystem.",link:"https://www.youtube.com/watch?v=P88dVbIJolc"},
      {type:"PANEL",title:"Scientific Research in Finance & Accounting — Challenges & Solutions",venue:"Saudi Financials Association",year:"2021",desc:"Panelist alongside deans from Umm Al-Qura University and King Saud University."},
      {type:"HOST",title:"Citizenship Values and National Development",venue:"Saudi Electronic University",year:"~2022",desc:"Moderated panel hosting Former Minister of Culture & Information Dr. Abdulaziz Alkhedheiri, with SEU President Prof. Lilac Al-Safadi in attendance."},
      {type:"HOST",title:"How FinTech Helped Fight COVID-19",venue:"Saudi Electronic University",year:"2020",desc:"Moderated webinar featuring UniGulf Financial and HungerStation executives."},
      {type:"TALK",title:"FinTech Ecosystem & Applications in Saudi Arabia",venue:"Najran University (Guest Lecture)",year:"2022",desc:"Invited lecture for the Graduate Studies & Scientific Research division."}
    ]},
    pubs: {title:"Selected Publications",papers:[
      {y:"2024",t:"Financial literacy among working adults: The case of Saudi Arabia",j:"Quantitative Finance and Economics"},
      {y:"2023",t:"Financial literacy, demographic factors and overconfidence of Saudi investors",j:"Finance Research Letters"},
      {y:"2023",t:"Saudi Vision 2030: Entrepreneurial Orientation Toward E-Businesses",j:"Education Research International"},
      {y:"2022",t:"Financial literacy of investors — A bibliometric analysis",j:"Intl Journal of Financial Studies"},
      {y:"2021",t:"FinTech: Ecosystem, opportunities and challenges in Saudi Arabia",j:"Journal of Risk and Financial Management"}
    ]},
    gov: {title:"Board & Committee Roles",cur:[
      {r:"Member, Audit Committee",o:"Ballor Industrial Company",s:"2023"},
      {r:"Member, Audit Committee",o:"Albarrak Industrial Group",s:"2023"},
      {r:"Member, Board of Advisors",o:"INCUAPP",s:"2023"}
    ],past:["Head of Audit Committee — SEU","Member of Investment Committee — SEU","Member of Budget Committee — SEU","Member of University Council — SEU","Member of Higher Advisory Committee — SEU","Member of Privatization Committee — SEU"]},
    proj: {title:"Key Projects",items:[
      {n:"Investment Policy Statement",c:"Saudi Electronic University",d:"Authored the university's IPS and investment committee governance."},
      {n:"IPS Consultant",c:"Fund for Martyrs & Wounded",d:"Developed investment policy for the national fund."},
      {n:"ERP Implementation",c:"Albarrak Industrial Group",d:"Selected Odoo, managed contract and deployment to financial statements."},
      {n:"PPP Feasibility Study",c:"Saudi Electronic University",d:"Led public-private partnership feasibility analysis."},
      {n:"Financial Sustainability Strategy",c:"Saudi Electronic University (Strategic Plan 2021-2025)",d:"Led the financial sustainability workstream — revenue diversification, cost optimization, and long-term financial viability modeling."}
    ]},
    cta: {title:"Get in Touch",desc:"Interested in exploring strategic collaborations in higher education, governance, and institutional finance.",book:"Book a Meeting",resume:"Download Resume",email:"m.albarrak@seu.edu.sa",phone:"0505894049",loc:"Saudi Arabia"}
  },
  ar: {
    nav: {about:"نبذة",experience:"الخبرات",media:"المشاركات",publications:"الأبحاث",governance:"الحوكمة",contact:"التواصل"},
    hero: {title:"د. منصور صالح البراك",subtitle:"قيادي في المالية والحوكمة",creds:"دكتوراه في المالية · IoD · هارفارد · MIT · أكسفورد",tag:"دمج الدقة الأكاديمية مع القيادة التنفيذية لبناء مؤسسات مستدامة مالياً"},
    about: {title:"نبذة",p1:"قيادي أكاديمي وتنفيذي بخبرة تزيد عن 15 عاماً في المالية والحوكمة واستراتيجية القطاع العام. يجمع د. البراك بين الخبرة الأكاديمية العميقة والمالية التشغيلية العملية — حيث شغل منصب عميد كلية إدارة الأعمال ومستشار مالي لرئيس جامعة وقيادي مالي لمجموعة صناعية تضم أكثر من 500 موظف.",p2:"في الجامعة السعودية الإلكترونية، قاد أكثر من 30 مسار عمل مالي لرئيس الجامعة شملت بناء النماذج المالية وإعداد وثيقة سياسة الاستثمار وتأسيس حوكمة لجنة الاستثمار وتحليل إيرادات الرسوم واختيار المراجع الخارجي وتقديم الاستراتيجية المالية لوزارة المالية. كما عمل في لجان المراجعة والاستثمار والميزانية والتخصيص بالجامعة.",p3:"في مجموعة البراك الصناعية، قاد اختيار وتطبيق نظام ERP (Odoo) من التعاقد حتى إنتاج القوائم المالية، وأدار عمليات التدفقات النقدية وطبّق ضوابط الدفع وقاد تحسين تكاليف التصنيع.",p4:"حاصل على الدكتوراه في المالية من جامعة بليموث والماجستير من جامعة إكستر والبكالوريوس من جامعة الملك فهد للبترول والمعادن، مع برامج تنفيذية من هارفارد وMIT وأكسفورد. يحمل شهادة إدارة الشركات من معهد المديرين (IoD) ونشر أكثر من 10 أبحاث محكّمة في هيكل رأس المال والتقنية المالية والثقافة المالية.",p5:"ملتزم بتعزيز الحوكمة المالية المبنية على الأدلة والاستدامة المؤسسية والتعاون بين القطاعات — خاصة في التعليم العالي والجهات الحكومية ومبادرات رؤية 2030.",stats:[{v:"+15",l:"سنوات الخبرة"},{v:"+10",l:"أبحاث منشورة"},{v:"+30",l:"مسارات عمل مالية"},{v:"+12",l:"عضويات لجان"}]},
    exp: {title:"المسيرة المهنية",roles:[
      {p:"2023 – الآن",r:"مستشار مالي واستراتيجي",o:"مجموعة البراك الصناعية",d:"قيادة التحول المالي والتوجه الاستراتيجي لمجموعة صناعية تضم أكثر من 500 موظف. يشمل نطاق العمل: اختيار وتطبيق نظام ERP (Odoo)، إدارة التدفقات النقدية وتحسين الذمم الدائنة والمدينة، تصميم ضوابط الدفع والرقابة المالية، تحسين تكاليف التصنيع، استراتيجية تطوير الأعمال، وإعادة الهيكلة التشغيلية."},
      {p:"2022 – 2024",r:"مستشار مالي لرئيس الجامعة",o:"الجامعة السعودية الإلكترونية",d:"قاد أكثر من 30 مسار عمل مالي شملت النمذجة المالية وسياسة الاستثمار واستراتيجية الرسوم."},
      {p:"2018 – 2023",r:"عميد كلية العلوم الإدارية والمالية",o:"الجامعة السعودية الإلكترونية",d:"قيادة الإدارة الأكاديمية والمالية. عضو مجلس الجامعة واللجنة الاستشارية العليا."},
      {p:"2015 – 2020",r:"رئيس قسم المالية",o:"الجامعة السعودية الإلكترونية",d:"قيادة قسم المالية — تطوير المناهج واستقطاب أعضاء هيئة التدريس وإدارة ميزانية القسم."},
      {p:"2015 – الآن",r:"أستاذ مساعد في المالية",o:"الجامعة السعودية الإلكترونية",d:"التدريس والبحث في هيكل رأس المال والتقنية المالية. نشر أكثر من 10 أبحاث محكّمة."}
    ]},
    edu: {title:"التعليم",degs:[{d:"دكتوراه في المالية",s:"جامعة بليموث، المملكة المتحدة",y:"2015"},{d:"ماجستير النقود والبنوك",s:"جامعة إكستر، المملكة المتحدة",y:"2010"},{d:"بكالوريوس التسويق",s:"جامعة الملك فهد للبترول والمعادن",y:"2008"}],exec:["إدارة الذات وقيادة الآخرين — هارفارد","تحليلات الأفراد — MIT","برنامج أكسفورد للتقنية المالية","برنامج المدير المتقدم — مركز الحوكمة","جاهزية عضو مجلس الإدارة — مركز الحوكمة","القيادة الاستراتيجية — LBTC لندن"]},
    media: {title:"المشاركات الإعلامية",items:[
      {type:"TV",title:"مبادرة مستقبل الاستثمار (FII)",venue:"قناة الإخبارية",year:"2022",desc:"مقابلة تلفزيونية حول اتفاقيات الاستثمار وأثرها على جودة الحياة في المملكة."},
      {type:"STAGE",title:"خارطة طريق حلول التقنية المالية",venue:"Step Saudi 2022، الرياض",year:"2022",desc:"متحدث على منصة التقنية المالية والمستقبل."},
      {type:"TALK",title:"منظومة التقنية المالية في السعودية",venue:"فنتك السعودية (القناة الرسمية)",year:"2021",desc:"ورشة عمل مدتها 57 دقيقة حول منظومة التقنية المالية السعودية.",link:"https://www.youtube.com/watch?v=P88dVbIJolc"},
      {type:"PANEL",title:"واقع البحث العلمي في المالية والمحاسبة — التحديات والحلول",venue:"جمعية الماليون السعوديون",year:"2021",desc:"متحدث مع عمداء من جامعة أم القرى وجامعة الملك سعود."},
      {type:"HOST",title:"تعزيز قيم المواطنة وأثرها في التنمية",venue:"الجامعة السعودية الإلكترونية",year:"~2022",desc:"إدارة حلقة نقاش مع معالي وزير الثقافة والإعلام السابق د. عبدالعزيز الخضيري."},
      {type:"HOST",title:"كيف ساعدت التقنية المالية في محاربة كورونا",venue:"الجامعة السعودية الإلكترونية",year:"2020",desc:"إدارة ندوة إلكترونية مع مسؤولين من يوني قلف وهنقرستيشن."},
      {type:"TALK",title:"منظومة وتطبيقات التقنية المالية في السعودية",venue:"جامعة نجران (محاضرة ضيف)",year:"2022",desc:"محاضرة مدعوة لوكالة الدراسات العليا والبحث العلمي."}
    ]},
    pubs: {title:"أبحاث مختارة",papers:[
      {y:"2024",t:"الثقافة المالية بين البالغين العاملين: حالة السعودية",j:"Quantitative Finance and Economics"},
      {y:"2023",t:"العلاقة بين الثقافة المالية والثقة المفرطة لدى المستثمرين السعوديين",j:"Finance Research Letters"},
      {y:"2023",t:"التنمية المستدامة ورؤية 2030: التوجه الريادي للطلاب",j:"Education Research International"},
      {y:"2022",t:"دراسة الثقافة المالية للمستثمرين — تحليل ببليومتري",j:"Intl Journal of Financial Studies"},
      {y:"2021",t:"التقنية المالية: المنظومة والفرص والتحديات في السعودية",j:"Journal of Risk and Financial Management"}
    ]},
    gov: {title:"عضويات المجالس واللجان",cur:[
      {r:"عضو لجنة المراجعة",o:"شركة بالور الصناعية",s:"2023"},
      {r:"عضو لجنة المراجعة",o:"مجموعة البراك الصناعية",s:"2023"},
      {r:"عضو المجلس الاستشاري",o:"INCUAPP",s:"2023"}
    ],past:["رئيس لجنة المراجعة — الجامعة السعودية الإلكترونية","عضو لجنة الاستثمار — الجامعة السعودية الإلكترونية","عضو لجنة الميزانية — الجامعة السعودية الإلكترونية","عضو مجلس الجامعة — الجامعة السعودية الإلكترونية","عضو لجنة التخصيص — الجامعة السعودية الإلكترونية","عضو لجنة التخطيط الاستراتيجي — الجامعة السعودية الإلكترونية"]},
    proj: {title:"مشاريع رئيسية",items:[
      {n:"سياسة الاستثمار",c:"الجامعة السعودية الإلكترونية",d:"إعداد وثيقة سياسة الاستثمار وحوكمة لجنة الاستثمار."},
      {n:"مستشار سياسة الاستثمار",c:"صندوق الشهيد والجريح والأسير والمفقود",d:"إعداد وثيقة سياسة الاستثمار للصندوق الوطني."},
      {n:"تطبيق نظام ERP",c:"مجموعة البراك الصناعية",d:"اختيار نظام Odoo وإدارة العقد والتخصيص والتطبيق."},
      {n:"دراسة جدوى الشراكة",c:"الجامعة السعودية الإلكترونية",d:"قيادة دراسة جدوى الشراكة بين القطاعين العام والخاص."},
      {n:"استراتيجية الاستدامة المالية",c:"الجامعة السعودية الإلكترونية (الخطة الاستراتيجية 2021-2025)",d:"قيادة محور الاستدامة المالية — تنويع الإيرادات وتحسين التكاليف ونمذجة الجدوى المالية طويلة المدى."}
    ]},
    cta: {title:"تواصل معي",desc:"مهتم باستكشاف شراكات استراتيجية في التعليم العالي والحوكمة والمالية المؤسسية.",book:"احجز موعداً",resume:"تحميل السيرة الذاتية",email:"m.albarrak@seu.edu.sa",phone:"0505894049",loc:"المملكة العربية السعودية"}
  }
};

const typeBadge = {TV:"📺",STAGE:"🎤",TALK:"🎓",PANEL:"💬",HOST:"🎙️"};

export default function Site() {
  const [lang, setLang] = useState("en");
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState("hero");
  const t = S[lang];
  const ar = lang === "ar";
  const sf = ar ? "'Noto Kufi Arabic',sans-serif" : "'Cormorant Garamond','Georgia',serif";
  const bf = ar ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans','Helvetica',sans-serif";

  useEffect(() => {
    const h = () => {
      setScrollY(window.scrollY);
      for (const id of ["contact","governance","publications","media","experience","about","hero"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

  const Section = ({id,bg,children}) => <section id={id} style={{background:bg||"transparent",padding:"90px 40px"}}><div style={{maxWidth:1200,margin:"0 auto"}}>{children}</div></section>;
  const Gold = () => <div style={{width:60,height:2,background:"linear-gradient(90deg,#C8A456,#E8C878)",marginBottom:24}}/>;
  const H2 = ({children}) => <h2 style={{fontFamily:sf,fontSize:34,fontWeight:700,color:"#1B2A4A",marginBottom:36}}>{children}</h2>;

  return (
    <div dir={ar?"rtl":"ltr"} style={{fontFamily:sf,background:"#FAFAF8",color:"#1a1a2e",minHeight:"100vh"}}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <style>{`*{margin:0;padding:0;box-sizing:border-box}::selection{background:#1B2A4A;color:#fff}.nl{cursor:pointer;transition:color .3s}.nl:hover{color:#C8A456!important}.cd{transition:transform .3s,box-shadow .3s}.cd:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(27,42,74,.1)}.lb{cursor:pointer;transition:all .3s;border:1px solid rgba(255,255,255,.3)}.lb:hover{background:rgba(255,255,255,.15)}.pr{transition:background .3s}.pr:hover{background:rgba(200,164,86,.06)}a{color:#C8A456;text-decoration:none}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.sc{animation:fl 6s ease-in-out infinite}.sc:nth-child(2){animation-delay:1.5s}.sc:nth-child(3){animation-delay:3s}.sc:nth-child(4){animation-delay:4.5s}.social-icon{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid rgba(200,164,86,.4);transition:all .3s;color:#C8A456}.social-icon:hover{background:#C8A456;color:#fff;border-color:#C8A456}.cta-btn{display:inline-block;padding:12px 28px;border-radius:6px;font-size:14px;font-weight:600;transition:all .3s;cursor:pointer;text-align:center}.cta-btn:hover{transform:translateY(-2px)}@media(max-width:768px){.hg{flex-direction:column!important;text-align:center}.g2{grid-template-columns:1fr!important}.g4{grid-template-columns:1fr 1fr!important}.sp{padding:60px 20px!important}.nvl{display:none!important}}`}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrollY>50?"rgba(27,42,74,.97)":"transparent",backdropFilter:scrollY>50?"blur(12px)":"none",transition:"all .4s",padding:"0 40px",borderBottom:scrollY>50?"1px solid rgba(200,164,86,.15)":"none"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
          <span style={{fontFamily:sf,fontWeight:700,fontSize:18,color:"#fff",letterSpacing:ar?0:1}}>{ar?"البراك":"ALBARRAK"}</span>
          <div className="nvl" style={{display:"flex",gap:24,alignItems:"center"}}>
            {Object.entries(t.nav).map(([k,v])=><span key={k} className="nl" onClick={()=>go(k)} style={{fontFamily:bf,fontSize:12,fontWeight:500,color:active===k?"#C8A456":"rgba(255,255,255,.7)",textTransform:ar?"none":"uppercase",letterSpacing:ar?0:1.5}}>{v}</span>)}
            <button className="lb" onClick={()=>setLang(l=>l==="en"?"ar":"en")} style={{background:"transparent",color:"#fff",padding:"4px 14px",borderRadius:4,fontFamily:lang==="en"?"'Noto Kufi Arabic'":"'DM Sans'",fontSize:12,fontWeight:600}}>{lang==="en"?"العربية":"English"}</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{background:"linear-gradient(145deg,#1B2A4A 0%,#0F1B33 60%,#1a2744 100%)",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,right:0,width:"40%",height:"100%",background:"linear-gradient(135deg,rgba(200,164,86,.08) 0%,transparent 70%)",clipPath:"polygon(30% 0,100% 0,100% 100%,0% 100%)"}}/>
        <div style={{position:"absolute",bottom:0,left:0,width:"100%",height:1,background:"linear-gradient(90deg,transparent,#C8A456,transparent)"}}/>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"120px 40px",position:"relative",zIndex:2,width:"100%"}}>
          <div className="hg" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:60,flexDirection:ar?"row-reverse":"row"}}>
            <div style={{flex:1}}>
              <div style={{marginBottom:16}}><span style={{fontFamily:bf,fontSize:11,fontWeight:600,color:"#C8A456",textTransform:"uppercase",letterSpacing:4}}>{ar?"المالية · الحوكمة · الاستراتيجية":"FINANCE · GOVERNANCE · STRATEGY"}</span></div>
              <h1 style={{fontFamily:sf,fontSize:ar?42:50,fontWeight:700,color:"#fff",lineHeight:1.15,marginBottom:12}}>{t.hero.title}</h1>
              <p style={{fontFamily:bf,fontSize:ar?20:22,fontWeight:500,color:"#C8A456",marginBottom:14}}>{t.hero.subtitle}</p>
              <p style={{fontFamily:bf,fontSize:13,color:"rgba(255,255,255,.5)",letterSpacing:1,marginBottom:28}}>{t.hero.creds}</p>
              <p style={{fontFamily:sf,fontSize:ar?16:19,color:"rgba(255,255,255,.7)",maxWidth:520,lineHeight:1.7,fontStyle:ar?"normal":"italic",marginBottom:32}}>{t.hero.tag}</p>
              {/* Social Links */}
              <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
                <a href="https://x.com/AlbarrakMansour" target="_blank" rel="noopener noreferrer" className="social-icon" title="X / Twitter">𝕏</a>
                <a href="https://linkedin.com/in/AlbarrakM" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">in</a>
                <a href="https://scholar.google.com/citations?user=OX9r9X0AAAAJ" target="_blank" rel="noopener noreferrer" className="social-icon" title="Google Scholar" style={{fontSize:14}}>G</a>
                <span style={{width:1,height:24,background:"rgba(255,255,255,.15)",margin:"0 8px"}}/>
                <a href="#CALENDLY_URL" className="cta-btn" style={{fontFamily:bf,background:"transparent",color:"#C8A456",border:"1px solid rgba(200,164,86,.4)"}}>{t.cta.book}</a>
                <a href="#RESUME_PDF" className="cta-btn" style={{fontFamily:bf,background:"#C8A456",color:"#1B2A4A",border:"1px solid #C8A456"}}>{t.cta.resume}</a>
              </div>
            </div>
            <div style={{flexShrink:0}}>
              <div style={{width:250,height:250,borderRadius:"50%",border:"3px solid rgba(200,164,86,.4)",boxShadow:"0 20px 60px rgba(0,0,0,.3)",background:"linear-gradient(135deg,#2a3f6b,#1B2A4A)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontFamily:sf,fontSize:64,fontWeight:700,color:"rgba(200,164,86,.5)"}}>{ar?"م":"MA"}</span>
              </div>
              <p style={{fontFamily:bf,fontSize:9,color:"rgba(255,255,255,.25)",textAlign:"center",marginTop:10}}>Add headshot photo URL when deploying</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about"><Gold/><H2>{t.about.title}</H2>
        <div style={{fontFamily:bf,fontSize:15,lineHeight:1.9,color:"#3a3a5a",maxWidth:800}}>
          <p style={{marginBottom:14}}>{t.about.p1}</p><p style={{marginBottom:14}}>{t.about.p2}</p><p style={{marginBottom:14}}>{t.about.p3}</p><p style={{marginBottom:14}}>{t.about.p4}</p><p style={{marginBottom:36}}>{t.about.p5}</p>
        </div>
        <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
          {t.about.stats.map((h,i)=><div key={i} className="sc" style={{background:"#fff",borderRadius:8,padding:"24px 16px",textAlign:"center",boxShadow:"0 4px 20px rgba(27,42,74,.06)",borderTop:"3px solid #C8A456"}}>
            <div style={{fontFamily:sf,fontSize:34,fontWeight:700,color:"#1B2A4A"}}>{h.v}</div>
            <div style={{fontFamily:bf,fontSize:11,color:"#6B7280",marginTop:6,textTransform:ar?"none":"uppercase",letterSpacing:ar?0:1}}>{h.l}</div>
          </div>)}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" bg="#fff"><Gold/><H2>{t.exp.title}</H2>
        {t.exp.roles.map((r,i)=><div key={i} style={{display:"grid",gridTemplateColumns:ar?"1fr 130px":"130px 1fr",gap:28,padding:"24px 0",borderBottom:i<3?"1px solid #E5E7EB":"none"}}>
          <div style={{fontFamily:bf,fontSize:13,color:"#6B7280",fontWeight:500,order:ar?1:0}}>{r.p}</div>
          <div>
            <h3 style={{fontFamily:bf,fontSize:16,fontWeight:700,color:"#1B2A4A",marginBottom:4}}>{r.r}</h3>
            <p style={{fontFamily:bf,fontSize:13,color:"#C8A456",fontWeight:600,marginBottom:8}}>{r.o}</p>
            <p style={{fontFamily:bf,fontSize:13,color:"#4a4a6a",lineHeight:1.7}}>{r.d}</p>
          </div>
        </div>)}
        <div style={{marginTop:50}}><Gold/><H2>{t.edu.title}</H2>
          <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
            <div>{t.edu.degs.map((d,i)=><div key={i} style={{marginBottom:18,paddingBottom:18,borderBottom:i<2?"1px solid #E5E7EB":"none"}}>
              <div style={{fontFamily:bf,fontSize:15,fontWeight:700,color:"#1B2A4A"}}>{d.d}</div>
              <div style={{fontFamily:bf,fontSize:12,color:"#6B7280"}}>{d.s} — {d.y}</div>
            </div>)}</div>
            <div>
              <div style={{fontFamily:bf,fontSize:12,fontWeight:600,color:"#C8A456",textTransform:ar?"none":"uppercase",letterSpacing:ar?0:1.5,marginBottom:14}}>{ar?"البرامج التنفيذية":"EXECUTIVE EDUCATION"}</div>
              {t.edu.exec.map((e,i)=><div key={i} style={{fontFamily:bf,fontSize:12,color:"#4a4a6a",marginBottom:8,lineHeight:1.6}}>{e}</div>)}
            </div>
          </div>
        </div>
      </Section>

      {/* MEDIA & SPEAKING */}
      <Section id="media"><Gold/><H2>{t.media.title}</H2>
        <div style={{display:"grid",gap:16}}>
          {t.media.items.map((m,i)=><div key={i} className="cd" style={{background:"#fff",borderRadius:8,padding:"20px 24px",border:"1px solid #E5E7EB",display:"grid",gridTemplateColumns:ar?"1fr 60px":"60px 1fr",gap:20}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center",fontSize:28,order:ar?1:0}}>{typeBadge[m.type]}</div>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4,flexWrap:"wrap"}}>
                <span style={{fontFamily:bf,fontSize:15,fontWeight:700,color:"#1B2A4A"}}>{m.title}</span>
                <span style={{fontFamily:bf,fontSize:10,color:"#fff",background:"#1B2A4A",padding:"2px 8px",borderRadius:3,fontWeight:600}}>{m.type}</span>
              </div>
              <div style={{fontFamily:bf,fontSize:13,color:"#C8A456",fontWeight:600,marginBottom:6}}>{m.venue} — {m.year}</div>
              <div style={{fontFamily:bf,fontSize:13,color:"#4a4a6a",lineHeight:1.6}}>{m.desc}</div>
              {m.link && <a href={m.link} target="_blank" rel="noopener noreferrer" style={{fontFamily:bf,fontSize:12,color:"#C8A456",marginTop:8,display:"inline-block"}}>{ar?"شاهد على يوتيوب ←":"Watch on YouTube →"}</a>}
            </div>
          </div>)}
        </div>
      </Section>

      {/* PUBLICATIONS */}
      <Section id="publications" bg="#fff"><Gold/><H2>{t.pubs.title}</H2>
        {t.pubs.papers.map((p,i)=><div key={i} className="pr" style={{display:"grid",gridTemplateColumns:ar?"1fr 55px":"55px 1fr",gap:16,padding:"16px 12px",borderBottom:"1px solid #E5E7EB",borderRadius:4}}>
          <div style={{fontFamily:bf,fontSize:13,fontWeight:700,color:"#C8A456",order:ar?1:0}}>{p.y}</div>
          <div>
            <div style={{fontFamily:bf,fontSize:14,fontWeight:600,color:"#1B2A4A",marginBottom:3,lineHeight:1.5}}>{p.t}</div>
            <div style={{fontFamily:bf,fontSize:11,color:"#6B7280",fontStyle:"italic"}}>{p.j}</div>
          </div>
        </div>)}
      </Section>

      {/* GOVERNANCE */}
      <Section id="governance"><Gold/><H2>{t.gov.title}</H2>
        <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
          <div>
            <div style={{fontFamily:bf,fontSize:12,fontWeight:600,color:"#C8A456",textTransform:ar?"none":"uppercase",letterSpacing:ar?0:1.5,marginBottom:18}}>{ar?"الأدوار الحالية":"CURRENT ROLES"}</div>
            {t.gov.cur.map((c,i)=><div key={i} className="cd" style={{background:"#fff",borderRadius:8,padding:"14px 18px",marginBottom:10,borderInlineStart:"3px solid #C8A456"}}>
              <div style={{fontFamily:bf,fontSize:13,fontWeight:700,color:"#1B2A4A"}}>{c.r}</div>
              <div style={{fontFamily:bf,fontSize:11,color:"#6B7280"}}>{c.o} — {ar?"منذ":"Since"} {c.s}</div>
            </div>)}
          </div>
          <div>
            <div style={{fontFamily:bf,fontSize:12,fontWeight:600,color:"#C8A456",textTransform:ar?"none":"uppercase",letterSpacing:ar?0:1.5,marginBottom:18}}>{ar?"الأدوار السابقة":"PREVIOUS ROLES"}</div>
            {t.gov.past.map((p,i)=><div key={i} style={{fontFamily:bf,fontSize:12,color:"#4a4a6a",marginBottom:10,lineHeight:1.6,paddingInlineStart:14,borderInlineStart:"1px solid #E5E7EB"}}>{p}</div>)}
          </div>
        </div>
        <div style={{marginTop:50}}><Gold/><H2>{t.proj.title}</H2>
          <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {t.proj.items.map((p,i)=><div key={i} className="cd" style={{background:"#fff",borderRadius:8,padding:20,border:"1px solid #E5E7EB"}}>
              <div style={{fontFamily:bf,fontSize:14,fontWeight:700,color:"#1B2A4A",marginBottom:3}}>{p.n}</div>
              <div style={{fontFamily:bf,fontSize:11,color:"#C8A456",fontWeight:600,marginBottom:8}}>{p.c}</div>
              <div style={{fontFamily:bf,fontSize:12,color:"#4a4a6a",lineHeight:1.7}}>{p.d}</div>
            </div>)}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" style={{background:"linear-gradient(145deg,#1B2A4A,#0F1B33)",padding:"90px 40px"}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <Gold/>
          <H2><span style={{color:"#fff"}}>{t.cta.title}</span></H2>
          <p style={{fontFamily:bf,fontSize:15,color:"rgba(255,255,255,.6)",marginBottom:40,lineHeight:1.8}}>{t.cta.desc}</p>
          <div style={{display:"flex",gap:16,justifyContent:"center",marginBottom:36,flexWrap:"wrap"}}>
            <a href="#CALENDLY_URL" className="cta-btn" style={{fontFamily:bf,background:"#C8A456",color:"#1B2A4A",border:"1px solid #C8A456",fontSize:15}}>{t.cta.book}</a>
            <a href="#RESUME_PDF" className="cta-btn" style={{fontFamily:bf,background:"transparent",color:"#C8A456",border:"1px solid rgba(200,164,86,.4)",fontSize:15}}>{t.cta.resume}</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12,alignItems:"center"}}>
            <a href={"mailto:"+t.cta.email} style={{fontFamily:bf,fontSize:16,color:"#C8A456",fontWeight:600}}>{t.cta.email}</a>
            <span style={{fontFamily:bf,fontSize:14,color:"rgba(255,255,255,.5)"}}>{t.cta.phone}</span>
            <span style={{fontFamily:bf,fontSize:14,color:"rgba(255,255,255,.5)"}}>{t.cta.loc}</span>
            <div style={{display:"flex",gap:12,marginTop:12}}>
              <a href="https://x.com/AlbarrakMansour" target="_blank" rel="noopener noreferrer" className="social-icon">𝕏</a>
              <a href="https://linkedin.com/in/AlbarrakM" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
              <a href="https://scholar.google.com/citations?user=OX9r9X0AAAAJ" target="_blank" rel="noopener noreferrer" className="social-icon" style={{fontSize:14}}>G</a>
            </div>
          </div>
        </div>
      </section>
      <footer style={{background:"#0a1225",padding:"18px 40px",textAlign:"center"}}><span style={{fontFamily:bf,fontSize:10,color:"rgba(255,255,255,.2)"}}>© 2026 Dr. Mansour Albarrak</span></footer>
    </div>
  );
}

const milestones = {
  turing: {
    year: "1950", category: "Foundations", title: "The Turing Test",
    summary: "Alan Turing proposed a test of whether a machine could imitate human conversation.",
    what: "Alan Turing published Computing Machinery and Intelligence, proposing the Turing Test to see if a machine could imitate human conversation.",
    why: "It shifted the goal of AI from trying to build a conscious brain to simply building a machine that behaves intelligently.",
    subfield: "Foundations",
    impact: "It created the blueprint for modern chatbots and framed the public debate on AI for the next 70 years.",
    sources: [["The Turing Archive – Computing Machinery and Intelligence", "https://www.turingarchive.org/"]]
  },
  dartmouth: {
    year: "1956", category: "Foundations", title: "The Birth of AI (Dartmouth)",
    summary: "The Dartmouth Summer Project coined the term \u201cArtificial Intelligence.\u201d",
    what: "John McCarthy and other researchers held the Dartmouth Summer Project and officially coined the term \u201cArtificial Intelligence.\u201d",
    why: "It gathered the founding minds of the field and established AI as a formal, funded scientific discipline.",
    subfield: "Foundations",
    impact: "It kickstarted decades of research that would eventually lead to intelligent systems used in healthcare, finance, and education.",
    sources: [["Dartmouth – The Dartmouth Summer Research Project proposal", "https://www.dartmouth.edu/"]]
  },
  logictheorist: {
    year: "1956", category: "Symbolic AI", title: "Logic Theorist",
    summary: "Newell and Simon built an early program that could prove mathematical theorems.",
    what: "Allen Newell and Herbert Simon developed the Logic Theorist, an early program that could prove mathematical theorems.",
    why: "It proved that computers could do more than just crunch numbers\u2014they could manipulate symbols and perform logical reasoning.",
    subfield: "Symbolic AI",
    impact: "It laid the groundwork for automated reasoning and rule-based expert systems that dominated early AI.",
    sources: []
  },
  eliza: {
    year: "1966", category: "Symbolic AI", title: "ELIZA",
    summary: "Joseph Weizenbaum created a chatbot that simulated a psychotherapist.",
    what: "Joseph Weizenbaum created ELIZA, a chatbot that simulated a psychotherapist using simple pattern-matching.",
    why: "It revealed the \u201cELIZA effect\u201d\u2014how easily humans project emotions and understanding onto machines that don't actually have them.",
    subfield: "Natural Language Processing (NLP)",
    impact: "It sparked the field of human-computer interaction and paved the way for virtual assistants.",
    sources: [["MIT – Joseph Weizenbaum and ELIZA", "https://web.mit.edu/"]]
  },
  winters: {
    year: "1974\u20131993", category: "Foundations", title: "The AI Winters",
    summary: "Funding and interest in AI collapsed twice when early promises went unfulfilled.",
    what: "Funding and interest in AI collapsed twice (1974\u20131980 and 1987\u20131993) because early promises went unfulfilled.",
    why: "It taught the industry that overpromising leads to severe funding droughts and loss of trust.",
    subfield: "AI History",
    impact: "The failures forced researchers to focus on practical, realistic applications rather than science fiction dreams.",
    sources: [["Encyclopedia Britannica – Artificial intelligence history", "https://www.britannica.com/technology/artificial-intelligence"]]
  },
  expert: {
    year: "1980s", category: "Symbolic AI", title: "Expert Systems (R1)",
    summary: "Rule-based expert systems like R1 delivered commercial value in specialised tasks.",
    what: "AI programs called \u201cExpert Systems\u201d became widely used to solve specialized problems using predefined rules (like the R1 system).",
    why: "It proved that AI could provide massive commercial value by automating tasks that previously required human experts.",
    subfield: "Symbolic AI",
    impact: "R1 reportedly saved Digital Equipment Corporation $25 million a year, proving AI could be a massive business asset.",
    sources: [["Computer History Museum – Expert systems history", "https://computerhistory.org/"]]
  },
  deepblue: {
    year: "1997", category: "Machine Learning", title: "Deep Blue",
    summary: "IBM's Deep Blue defeated world chess champion Garry Kasparov.",
    what: "IBM's Deep Blue supercomputer defeated world chess champion Garry Kasparov.",
    why: "It proved that machines could out-calculate humans in highly complex, strategic domains.",
    subfield: "Search Algorithms / Game AI",
    impact: "It drew worldwide attention to AI, showing the public that computers could outperform human experts.",
    sources: [["IBM – Deep Blue", "https://www.ibm.com/history/deep-blue"]]
  },
  darpa: {
    year: "2004\u20132007", category: "Machine Learning", title: "DARPA Grand Challenges",
    summary: "DARPA competitions pushed teams to build vehicles that drive themselves.",
    what: "DARPA organized competitions where teams built autonomous vehicles to navigate off-road and city courses without human control.",
    why: "It pushed researchers to develop AI that could perceive physical environments and make real-time decisions.",
    subfield: "Robotics / Computer Vision",
    impact: "It laid the direct foundation for the self-driving cars and advanced robotics we are developing today.",
    sources: []
  },
  netflix: {
    year: "2006\u20132009", category: "Machine Learning", title: "The Netflix Prize",
    summary: "Netflix offered $1 million to improve its movie recommendation algorithm.",
    what: "Netflix launched a $1 million competition for researchers to improve its movie recommendation algorithm by 10%.",
    why: "It proved that machine learning could accurately predict human preferences using large datasets.",
    subfield: "Machine Learning / Recommendation Systems",
    impact: "It created the personalized recommendation engines we use every day on streaming platforms, social media, and online shopping.",
    sources: []
  },
  imagenet: {
    year: "2009", category: "Machine Learning", title: "ImageNet",
    summary: "A massive labeled image database that fueled the deep learning boom.",
    what: "Fei-Fei Li and her team introduced ImageNet, a massive database of millions of labeled images organized into categories.",
    why: "It provided the massive amounts of data required to train early computer vision systems, sparking the deep learning boom.",
    subfield: "Computer Vision",
    impact: "It directly advanced image recognition technology, leading to medical image analysis, facial recognition, and autonomous vehicle perception.",
    sources: [["ImageNet – About the project", "https://www.image-net.org/"]]
  },
  watson: {
    year: "2011", category: "Machine Learning", title: "IBM Watson (Jeopardy!)",
    summary: "IBM's Watson defeated two human champions on the quiz show Jeopardy!",
    what: "IBM's Watson competed on the TV quiz show Jeopardy! and defeated two human champions.",
    why: "It demonstrated that AI could understand complex natural language, process wordplay, and retrieve precise answers instantly.",
    subfield: "Natural Language Processing (NLP)",
    impact: "It increased interest in applying AI to business decision support, healthcare information analysis, and customer service.",
    sources: []
  },
  deeplearning: {
    year: "2010s", category: "Machine Learning", title: "The Deep Learning Revolution",
    summary: "Multi-layer neural networks became the dominant approach in AI.",
    what: "Deep Learning (neural networks with multiple layers) became the dominant approach in AI, powered by larger datasets and increased GPU computing power.",
    why: "It drastically improved the capabilities of AI in image recognition, speech recognition, and language processing.",
    subfield: "Machine Learning / Deep Learning",
    impact: "It powers the technologies we rely on today, including voice assistants, facial recognition, medical imaging, and self-driving cars.",
    sources: []
  },
  gan: {
    year: "2014", category: "Generative AI & LLMs", title: "Generative Adversarial Networks (GANs)",
    summary: "Ian Goodfellow introduced two competing networks that create realistic artificial data.",
    what: "Ian Goodfellow introduced GANs, a system where two neural networks (a Generator and a Discriminator) compete to create highly realistic artificial data.",
    why: "It unlocked the ability for machines to create new, highly realistic images and media, rather than just analyzing existing data.",
    subfield: "Generative AI / Deep Learning",
    impact: "It revolutionized creative design, photo restoration, image enhancement, and the generation of synthetic data for training.",
    sources: [["NeurIPS – Generative Adversarial Nets", "https://papers.nips.cc/paper/5423-generative-adversarial-nets"]]
  },
  transformer: {
    year: "2017", category: "Generative AI & LLMs", title: "The Transformer Architecture",
    summary: "Google researchers introduced the attention-based architecture behind modern language models.",
    what: "Google researchers published \u201cAttention Is All You Need,\u201d introducing the Transformer architecture built on an attention mechanism.",
    why: "It let models weigh the most relevant words in a sentence, making them far better at understanding context\u2014and it became the foundation of every major language model.",
    subfield: "Deep Learning / Large Language Models (LLMs)",
    impact: "Within five years, it powered assistants that draft emails, write code, translate languages, and summarize documents, reshaping knowledge work.",
    sources: [["NeurIPS – Attention Is All You Need", "https://papers.nips.cc/paper/7181-attention-is-all-you-need"]]
  },
  chatgpt: {
    year: "2022", category: "Generative AI & LLMs", title: "ChatGPT",
    summary: "OpenAI launched ChatGPT, making conversational generative AI widely accessible.",
    what: "OpenAI publicly launched ChatGPT on November 30, 2022, making conversational generative AI widely accessible to the public.",
    why: "It democratized AI, putting powerful generative capabilities directly into the hands of everyday users for the first time.",
    subfield: "Generative AI / NLP",
    impact: "People immediately began using conversational AI for learning, writing, research, brainstorming, customer support, and programming.",
    sources: [["OpenAI – Introducing ChatGPT", "https://openai.com/index/chatgpt/"]]
  },
  agi: {
    year: "Future", category: "Future AI", title: "Artificial General Intelligence (AGI)",
    summary: "AGI is a theoretical form of AI that could perform tasks across all domains.",
    what: "Researchers are currently pursuing AGI, a theoretical form of AI that could learn, reason, and perform tasks across all domains, rather than just specialized ones.",
    why: "It represents the ultimate long-term goal of AI research\u2014creating a machine with human-level (or surpassing) general intelligence.",
    subfield: "Future AI / Cognitive Computing",
    impact: "If achieved, AGI could completely transform scientific research, education, healthcare, and engineering, though its effects remain uncertain.",
    sources: [["Stanford Encyclopedia of Philosophy – Artificial Intelligence", "https://plato.stanford.edu/entries/artificial-intelligence/"]]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const item = milestones[id];

if (!item) {
  document.querySelector("#detail-card").innerHTML = `
    <div class="not-found">
      <p class="eyebrow">MILESTONE NOT FOUND</p>
      <h1>We couldn't find that event.</h1>
      <p class="detail-summary">Return to the pyramid and choose a milestone from the timeline.</p>
      <a class="primary-link" href="index.html#timeline">Back to the timeline</a>
    </div>`;
} else {
  document.title = `${item.title} | AI Timeline Pyramid`;
  document.querySelector("#detail-year").textContent = item.year;
  document.querySelector("#detail-category").textContent = item.category;
  document.querySelector("#detail-title").textContent = item.title;
  document.querySelector("#detail-summary").textContent = item.summary;
  document.querySelector("#detail-what").textContent = item.what;
  document.querySelector("#detail-why").textContent = item.why;
  document.querySelector("#detail-subfield").textContent = item.subfield;
  document.querySelector("#detail-impact").textContent = item.impact;

  const sourceList = document.querySelector("#detail-sources");
  const sources = item.sources || [];
  if (sources.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No sources listed yet.";
    sourceList.appendChild(li);
  } else {
    sources.forEach(([label, url]) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = url;
      link.textContent = label;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      li.appendChild(link);
      sourceList.appendChild(li);
    });
  }
}
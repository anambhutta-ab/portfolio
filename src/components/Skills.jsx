import { useContext } from 'react'
import { motion } from 'framer-motion'
import DataStreamContext from './DataStreamContext'
import SectionHeading from './SectionHeading'

const skillClusters = [
    {
        title: 'AI/ML',
        skills: [
            'Retrieval-Augmented Generation (RAG)',
            'Large Language Models (LLMs)',
            'Embeddings',
            'Vector Databases',
            'LangChain',
            'Supervised Learning',
            'CNNs',
            'Transfer Learning',
            'Transformers'
        ],
    },
    {
        title: 'Backend & APIs',
        skills: ['Python', 'FastAPI', 'REST APIs', 'Data processing', 'Chunking', 'Vector search', 'pytest'],
    },
    {
        title: 'Frontend & Deployment',
        skills: [
            'React',
            'Vite',
            'Responsive UI',
            'Git',
            'Docker',
            'Vercel',
            'Render'
        ],
    },
]

function Skills() {
    const { activeSkill, selectedSkill, setHoveredSkill, setSelectedSkill } = useContext(DataStreamContext)

    return (
        <section className="portfolio-section py-24" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <SectionHeading eyebrow="02 / Skills">Tools I use to build</SectionHeading>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {skillClusters.map((cluster) => (
                        <motion.article
                            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 transition-colors"
                            key={cluster.title}
                            whileHover={{ y: -6, boxShadow: '0 12px 36px rgba(0, 133, 140, 0.12)', borderColor: 'rgba(0, 133, 140, 0.45)' }}
                            transition={{ duration: 0.1, ease: 'easeOut' }}
                        >
                            <h3 className="text-lg font-semibold text-zinc-100">{cluster.title}</h3>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {cluster.skills.map((skill) => (
                                    <li key={skill}>
                                        <button
                                            aria-pressed={selectedSkill === skill}
                                            className={`skill-node rounded-full border px-3 py-1.5 text-left text-sm transition-colors ${activeSkill === skill ? 'is-active' : ''}`}
                                            onBlur={() => setHoveredSkill(null)}
                                            onClick={() => setSelectedSkill((selected) => selected === skill ? null : skill)}
                                            onFocus={() => setHoveredSkill(skill)}
                                            onMouseEnter={() => setHoveredSkill(skill)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                            type="button"
                                        >
                                            {skill}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Skills

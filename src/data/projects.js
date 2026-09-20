const projects = [
  {
    id: 'rag-printing-consultant',
    title: 'RAG Printing Consultant Chatbot',
    description: 'Document-grounded chatbot that answers printing and material questions from business docs and FAQs.',
    stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React'],
    liveUrl: null,
    githubUrl: null,
    caseStudyPath: '/projects/rag-printing-consultant',
    image: '/RAG%20printing%20chatbot.png',
  },
  {
    id: 'medical-skin-disease-qa-assistant',
    title: 'Medical Skin-Disease Question Answering Assistant',
    description: 'Integrated the Groq API with a Llama model for low-latency, informational responses to skin-disease-related user queries. Designed domain-specific prompts and response constraints to improve relevance and maintain a clear response scope.',
    stack: ['Python', 'Groq API', 'Llama', 'Flutter'],
    liveUrl: null,
    githubUrl: null,
    caseStudyPath: '/projects/medical-skin-disease-qa-assistant',
    image: '/llm.jpeg',
  },
  {
    id: 'skin-disease-detection',
    title: 'Skin Disease Detection Application',
    description: 'Fine-tuned pretrained ResNet50, EfficientNetB3, and MobileNet models for skin disease classification, achieving up to 93% validation accuracy. Developed a FastAPI inference endpoint for real-time image-based predictions.',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'NumPy', 'Scikit-learn', 'FastAPI'],
    liveUrl: null,
    githubUrl: null,
    caseStudyPath: '/projects/skin-disease-detection',
    image: '/analysis%20result%20ss.jpeg',
  },
  {
    id: 'react-ai-website',
    title: 'React Frontend for AI Website',
    description: 'Responsive React UI integrated with AI backend services.',
    stack: ['React', 'Vite', 'Tailwind', 'REST APIs'],
    liveUrl: null,
    githubUrl: null,
    caseStudyPath: '/projects/react-ai-website',
    image: '/react%20website%20frontend.png',
  },
]

export default projects

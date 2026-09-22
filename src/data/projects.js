const projects = [
  {
    id: 'rag-printing-consultant',
    title: 'RAG Printing Consultant Chatbot',
    description:
      'Document-grounded chatbot that answers printing and material questions from business docs and FAQs.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'React'],
    liveUrl: 'https://communicareptg.vercel.app/',
    githubUrl: 'https://github.com/anambhutta-ab/printing-website-v2/tree/main/src/printing_rag_bot',
    caseStudyPath: '/projects/rag-printing-consultant',
    image: '/RAG%20printing%20chatbot.png',
    caseStudy: {
      problem: [
        'Printing consultants spend significant time answering recurring questions about terminology and materials.',
        'The goal was to provide fast, document-grounded answers through a simple web app for non-technical staff.',
        'The knowledge base needed to stay current as business documents changed.',
      ],
      role: [
        'Designed the end-to-end RAG architecture and defined the target user workflow.',
        'Built the FastAPI backend, React chat interface, and LLM integration.',
        'Implemented document ingestion, chunking, embeddings, retrieval, and source-aware responses.',
        'Wrote tests for core utilities and API endpoints, then deployed and iterated on the full stack.',
      ],
      architecture: [
        'React provides the chat interface where users ask questions and view sourced answers.',
        'FastAPI ingests PDFs, text, and FAQs, then splits content into metadata-aware chunks.',
        'Embeddings are stored in Qdrant for similarity search and relevant context retrieval.',
        'The backend builds a grounded prompt, calls the LLM, and returns the answer to the React client.',
      ],
      decisions: [
        'Used RAG instead of fine-tuning so the knowledge base can be updated without retraining a model.',
        'Added chunk overlap to preserve context while keeping retrieval precise.',
        'Selected Qdrant for lightweight Python integration and single-tenant similarity search.',
        'Used FastAPI for validation, async support, and automatic OpenAPI documentation.',
      ],
      challenges: [
        'Reduced context-limit issues by retrieving only the most relevant document sections.',
        'Improved answer quality by tuning chunk size, overlap, source references, and prompt constraints.',
        'Kept ingestion efficient by generating embeddings offline instead of during every user query.',
      ],
      results: [
        'Answers detailed printing and material questions directly from business documents and FAQs.',
        'Reduces manual searching and helps staff reserve consultant calls for complex requests.',
        'Provides a reusable foundation for document question-answering systems in other domains.',
      ],
      nextSteps: [
        'Add an evaluation harness with test questions and human-graded answers to measure accuracy and improve retrieval.',
        'Introduce caching and async processing to reduce response times under load.',
        'Support multi-tenant setups so different businesses can have isolated document stores.',
        'Enhance the UI with source previews, feedback buttons, and analytics on common questions and failure cases.',
        'Explore hybrid search (keyword + semantic) to improve results for specific technical terms.',
      ],
    },
  },
  {
    id: 'medical-skin-disease-qa-assistant',
    title: 'Medical Skin-Disease Question Answering Assistant',
    description: 'Mobile chatbot that gives instant, easy-to-understand guidance on skin conditions, including relief methods and precautions, while clearly advising users to consult a doctor for diagnosis and treatment. \n\n*This was a part of a Deep Learning based Skin Disease Detection Application, which provided diagnosis to user by analyzing a picture of lesion provided by the user.',

    stack: ['Python', 'Groq API', 'Llama', 'Flutter'],
    liveUrl: null,
    githubUrl: null,
    caseStudyPath: '/projects/medical-skin-disease-qa-assistant',
    image: '/llm.jpeg',
    caseStudy: {
      problem: [
        'People searching for skin guidance often encounter information that is confusing, overly technical, or unsafe.',
        'The assistant provides plain-language explanations, general relief methods, and precautions before a clinical visit.',
        'It clearly avoids diagnosis and treatment claims and directs users to qualified medical professionals.',
      ],
      role: [
        'Built the Python backend and integrated the Groq API with a Llama model.',
        'Designed domain-specific prompts and response constraints for safe informational guidance.',
        'Built the Flutter mobile chat interface and connected it to the backend.',
        'Tested the experience end-to-end and refined prompts for clarity, safety, and response structure.',
      ],
      architecture: [
        'Flutter provides a mobile chat interface for questions about skin symptoms and conditions.',
        'The Python backend builds a constrained prompt and sends it to Llama through the Groq API.',
        'The response focuses on plain-language explanations, general precautions, and safety reminders.',
        'The backend returns the answer to Flutter, which displays it with appropriate disclaimers.',
      ],
      decisions: [
        'Selected Llama through Groq for low-latency, cost-effective mobile responses.',
        'Focused prompts on general information and precautions rather than prescriptions.',
        'Added constraints to avoid definitive diagnoses, medication recommendations, and unsafe emergency guidance.',
      ],
      challenges: [
        'Balanced helpful answers with strict medical-safety requirements.',
        'Improved clarity by iterating on prompt wording and response structure.',
        'Managed mobile latency with fast inference and a simple request flow.',
      ],
      results: [
        'Generates clear answers to common skin-disease questions in about 1.5 seconds on average.',
        'Provides practical relief tips and precautions while reinforcing professional consultation.',
        'User testing indicated that the guidance was clear, useful, and appropriately cautious.',
      ],
      nextSteps: [
        'Incorporate clinician-reviewed content or further ground responses with Retrieval-Augmented Generation (RAG).',
        'Add conversation history for follow-up questions and more contextual guidance.',
        'Improve escalation logic by detecting potentially serious symptoms and urging immediate medical attention.',
        'Add multilingual support and links to trusted health resources for deeper reading.',
      ],
    },
  },
  {
    id: 'skin-disease-detection',
    title: 'Skin Disease Detection Application',
    description: 'Fine-tuned pretrained ResNet50, EfficientNetB3, and EfficientNetB2 models for skin disease classification, achieving up to 95% validation accuracy. Developed a FastAPI inference endpoint for real-time image-based predictions.',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'NumPy', 'Scikit-learn', 'FastAPI'],
    liveUrl: null,
    githubUrl: null,
    caseStudyPath: '/projects/skin-disease-detection',
    image: '/analysis%20result%20ss.jpeg',
    caseStudy: {
      problem: [
        'A number of population does not have access to dermatologists, leading to delayed diagnosis and treatment.',
        'Users need a fast initial skin-disease classification from an uploaded image.',
        'The model must handle visual variation while producing consistent predictions.',
      ],
      role: [
        'Prepared the dataset and fine-tuned pretrained computer-vision models.',
        'Compared model performance, evaluated predictions, and built the inference API.',
      ],
      architecture: [
        'User uploads image using their mobile camera into the Flutter mobile application with active internet connection.',
        'FastAPI accepts the uploaded image and passes it through the preprocessing pipeline.',
        'Inference is run on binary classification models and a structured prediction response is returned.',
        'The response is added to a diagnosis report along with a GRADCAM++ image, final prediction and its confidence score.',
        'The downloadable PDF report is sent back to the user for their reference and further action.',
        'The API is designed for real-time integration with a user-facing application.',
      ],
      decisions: [
        'Compared eight CNN models to select the best one for each disease based on their performance on the validation set and computational efficiency. ',
        'Each disease model was selected due to its ability to handle the specific visual characteristics of that disease, as well as its overall accuracy and speed.',
        'Used consistent preprocessing and validation metrics to compare model performance.',
        'Applied threshold optimization to balance sensitivity and specificity for each disease model.'
      ],
      challenges: [
        'Addressed dataset variation and overfitting through transfer learning and regularization.',
        'Considered inference speed and deployment constraints when evaluating candidate models.',
        'Ensured model interpretability and explainability through techniques like Grad-CAM++ to visualize model attention and decision-making process.',
      ],
      results: [
        'Fine-tuned models to achieve up to 95% validation accuracy during model evaluation.',
        'Delivered a FastAPI inference endpoint for real-time image-based predictions.',
        'Predictions took around 2 seconds on average, providing users with quick feedback on their skin condition.',
        'User feedback indicates that the system provides a structured diagnosis report with visual explanations, aiding users in understanding the model\'s predictions and next steps for seeking medical advice.',
      ],
      nextSteps: [
        'Expand the dataset and improve calibration.',
        'Add explainability and model monitoring.',
        'Add clinical validation and user feedback loops to improve model performance and reliability.',
        'Add dermatologist-in-the-loop feedback for continuous improvement and validation of the model predictions.',
        'Add dermatologist consultation feature for users to connect with dermatologists for further evaluation and treatment recommendations.',
      ],
    },
  },
  {
    id: 'react-ai-website',
    title: 'React Frontend for AI Website',
    description: 'Responsive React Website integrated with AI backend services. The project is made for a Printing Consultant business to provide answers to printing and material questions from business documents and FAQs. The website is designed to be user-friendly and accessible across desktop and mobile devices.',
    stack: ['React', 'Vite', 'Tailwind', 'REST APIs'],
    liveUrl: 'https://communicareptg.vercel.app/',
    githubUrl: 'https://github.com/anambhutta-ab/printing-website-v2/tree/main/src/printing_rag_bot',
    caseStudyPath: '/projects/react-ai-website',
    image: '/react%20website%20frontend.png',
    caseStudy: {
      problem: [
        'AI products need responsive interfaces that make model-powered workflows easy to understand.',
        'The experience should remain clear and usable across desktop and mobile devices.',
      ],
      role: [
        'Built the React component structure and responsive interface.',
        'Integrated frontend workflows with AI backend services and handled loading and error states.',
        'Focused on accessible interaction patterns and a maintainable Vite-based setup.',
      ],
      architecture: [
        'React components organize the main product views and reusable interface elements.',
        'The frontend sends requests to backend AI services and renders results progressively.',
        'Loading, error, and responsive states keep the workflow understandable during requests.',
      ],
      decisions: [
        'Used React and Vite for a fast development workflow and component-based UI.',
        'Used Tailwind utilities to keep responsive styling consistent across views.',
        'Kept the API boundary explicit so frontend and AI service responsibilities remain separate.',
      ],
      challenges: [
        'Made asynchronous AI requests understandable through clear loading and error feedback.',
        'Adjusted layouts and interaction states for smaller screens and different device sizes.',
      ],
      results: [
        'Delivered a responsive React interface for AI-powered workflows.',
        'Created a reusable frontend foundation for connecting user actions to backend model services.',
      ],
      nextSteps: [
        'Add richer feedback states and authentication.',
        'Introduce analytics and expand testing coverage.',
        'Improve progressive enhancement for a wider range of devices and network conditions.',
      ],
    },
  },
]

export default projects

export const portfolioData = {
  personal: {
    name: "Yug Sayja",
    title: "Machine Learning Engineer",
    claim: "I build high-performance machine learning models, deep learning architectures, and low-latency inference solutions that solve complex real-world challenges.",
    cta: "Invite Yug Sayja for a Machine Learning Engineer internship or entry-level role.",
    email: import.meta.env.VITE_CONTACT_EMAIL || "yugsayja@gmail.com",
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/sayja-yug",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/yug-sayja-435a45382",
    resumeUrl: import.meta.env.VITE_RESUME_URL || "/resume.pdf",
    location: import.meta.env.VITE_LOCATION || "India",
    summary: "Machine Learning Engineer specializing in deep learning architecture design, model optimization, multimodal AI systems, and low-latency edge/cloud inference (PyTorch, ONNX Runtime, TensorRT, FastAPI, Docker). Experienced in training complex neural networks and building production ML pipelines.",
    careerGoals: "Driven to join an innovative AI team as a Machine Learning Engineering Intern or Entry-Level Machine Learning Engineer, building scalable production models and accelerating deep neural networks from research to deployment.",
  },
  
  projects: [
    {
      id: "swasthya-care",
      isLead: true,
      title: "SwasthyaCare",
      subtitle: "AI-Driven Primary Healthcare Diagnostics & Triage Platform",
      shortDescription: "Multimodal healthcare assistant combining MobileNetV3 visual triage with a quantized clinical NLP transformer for diagnostic triage and offline edge execution.",
      problem: "Primary healthcare clinics in underserved areas lack specialized diagnostic equipment and immediate access to specialist advice, leading to delayed treatment.",
      dataset: {
        name: "Curated Healthcare Visual Triage & Clinical Text Records",
        samples: "18,500 annotated clinical interaction logs and diagnostic images",
        preprocessing: "Text tokenization, lemmatization, background subtraction, and image resizing.",
      },
      model: {
        architecture: "MobileNetV3-Large (Visual Triage) + DistilBERT (Symptom NLP Classification)",
        lossFunction: "Categorical Cross-Entropy + Focal Loss (gamma=2.0)",
        optimization: "AdamW Optimizer (lr=2e-5) with linear learning rate warmup",
        framework: "PyTorch, Transformers, ONNX Runtime, FastAPI",
      },
      results: [
        { label: "Top-1 Accuracy", value: "88.7%", description: "Multi-class diagnostic triage accuracy" },
        { label: "Macro F1-Score", value: "0.864", description: "Balanced performance across triage priority levels" },
        { label: "Model Weight Size", value: "18.4 MB", description: "Quantized ONNX format for local execution" },
        { label: "Offline Latency", value: "120 ms", description: "Execution time on standard ARM v8 CPU" },
      ],
      methodology: [
        "Built a lightweight feature fusion layer combining text embeddings from patient symptom logs with visual feature embeddings from MobileNetV3.",
        "Converted the multimodal pipeline to ONNX Runtime format to enable offline execution on Android tablet hardware without internet connectivity.",
        "Containerized the deployment pipeline using Docker and FastAPI for quick integration into local web dashboards.",
      ],
      evaluationMetrics: [
        { metric: "Top-1 Accuracy", score: "88.7%" },
        { metric: "Macro F1-Score", score: "0.864" },
        { metric: "Triage Precision", score: "89.1%" },
        { metric: "Inference Memory Usage", score: "142 MB RAM" },
      ],
      screenshots: [
        { title: "System Architecture Diagram", description: "Multimodal fusion of visual and textual clinical inputs", type: "Architecture" },
        { title: "Diagnostic Triage Interface", description: "Clean UI displaying risk priority score and diagnostic confidence", type: "UI Interface" },
      ],
      githubUrl: "https://github.com/sayja-yug",
      demoUrl: "https://github.com/sayja-yug",
      lessonsLearned: [
        "Deployability in low-resource environments requires strict offline capability. ONNX Runtime CPU optimization enabled 4x faster execution than raw PyTorch CPU inference.",
        "Focal Loss significantly improved prediction accuracy on critical high-urgency cases that were underrepresented in the dataset.",
      ],
    },
    {
      id: "smart-shiksha",
      isLead: false,
      title: "Smart Shiksha",
      subtitle: "Real-time Machine Learning Document Digitisation Platform",
      shortDescription: "Real-time visual learning application powered by YOLOv8-nano and lightweight OCR running in-browser via WebAssembly.",
      problem: "Converting physical handwritten educational content and whiteboard notes into structured digital formats in real time requires low-latency machine learning that can run locally on low-cost devices.",
      dataset: {
        name: "Custom Educational Visual & Handwriting Annotations",
        samples: "22,000 annotated images of handwritten notes, chalkboards, and educational diagrams",
        preprocessing: "Perspective transformation, adaptive thresholding, binarization, bounding box normalization.",
      },
      model: {
        architecture: "YOLOv8-Nano backbone for region detection + Custom Lightweight CNN OCR for character decoding",
        lossFunction: "CIoU Loss + Distribution Focal Loss (DFL) + CTC Loss (OCR)",
        optimization: "SGD with Momentum (0.937) and Cosine Annealing",
        framework: "PyTorch, Ultralytics, OpenCV, ONNX WebAssembly",
      },
      results: [
        { label: "mAP@0.5", value: "0.915", description: "Bounding box detection for text & diagram regions" },
        { label: "OCR Accuracy", value: "93.4%", description: "Character-level accuracy on handwritten Gujarati/English notes" },
        { label: "Browser FPS", value: "34 FPS", description: "Real-time WebAssembly inference on standard web browser" },
      ],
      methodology: [
        "Trained YOLOv8-nano on custom dataset using extreme data augmentation (Mosaic, MixUp, Random Perspective).",
        "Exported model to ONNX FP16 and INT8 formats; deployed using ONNX Runtime Web with WebGL/WebGPU backend acceleration.",
        "Implemented real-time canvas drawing overlay for immediate visual feedback of recognized text and bounding regions.",
      ],
      evaluationMetrics: [
        { metric: "mAP@0.5 (Object Detection)", score: "0.915" },
        { metric: "mAP@0.5:0.95", score: "0.742" },
        { metric: "Character Recognition Rate (CRR)", score: "93.4%" },
        { metric: "Frame Rate (WebGPU)", score: "34 FPS" },
      ],
      screenshots: [
        { title: "Real-time Boundary Detection", description: "Bounding boxes outlining document corners and handwritten paragraphs", type: "Detection Artifact" },
        { title: "Browser In-Memory Execution", description: "Live ONNX WebAssembly performance telemetry bar", type: "System Metrics" },
      ],
      githubUrl: "https://github.com/sayja-yug",
      demoUrl: "https://github.com/sayja-yug",
      lessonsLearned: [
        "Quantization-aware training (QAT) preserved 99.1% of baseline mAP while reducing memory footprint by 74%, enabling smooth browser execution.",
        "Perspective correction preprocessing improved downstream OCR accuracy by over 14% on angled smartphone photos.",
      ],
    },
  ],

  experience: [
    {
      role: "Machine Learning Engineering Intern",
      company: "FlyRank AI",
      location: "Remote / India",
      period: "Internship",
      type: "AI & Machine Learning Focus",
      highlights: [
        "Engineered end-to-end machine learning and automated data processing pipelines for production feature extraction.",
        "Optimized deep learning inference scripts by migrating PyTorch models to ONNX Runtime, achieving a 30% reduction in end-to-end processing latency.",
        "Collaborated closely with senior ML engineers on dataset curation, annotation validation, hyperparameter tuning, and experiment tracking.",
        "Implemented automated data preprocessing scripts that streamlined raw data transformation and quality verification steps.",
      ],
      techStack: ["PyTorch", "ONNX Runtime", "Python", "Git", "Docker", "FastAPI"],
    },
  ],

  skills: {
    categories: [
      {
        name: "Machine Learning & Deep Learning",
        skills: [
          { name: "Neural Network Architectures", detail: "ResNet, MobileNetV3, DistilBERT, Transformers" },
          { name: "Object Detection & Recognition", detail: "YOLOv8, Lightweight CNN, Feature Extraction" },
          { name: "Explainable AI (XAI)", detail: "Grad-CAM, Layer-CAM, Feature Mapping" },
          { name: "Data Processing", detail: "Albumentations, OpenCV, NumPy, Scikit-Learn" },
        ],
      },
      {
        name: "Machine Learning Frameworks & Optimization",
        skills: [
          { name: "Core Frameworks", detail: "PyTorch 2.x, TensorFlow 2.x, Scikit-Learn" },
          { name: "Data Science & Analysis", detail: "NumPy, Pandas, SciPy, Matplotlib, Seaborn" },
          { name: "Optimization & Quantization", detail: "ONNX, PyTorch PTQ/QAT, TensorRT" },
        ],
      },
      {
        name: "MLOps, Tools & Workflow",
        skills: [
          { name: "Version Control & Containers", detail: "Git, GitHub, Docker" },
          { name: "Development Environments", detail: "Kaggle, Google Colab, Jupyter, Linux / Bash" },
          { name: "Web & API Integration", detail: "FastAPI, Vite, React.js, WebAssembly" },
        ],
      },
    ],
  },

  education: [
    {
      degree: "Bachelor of Technology / Science in Computer Engineering / AI",
      institution: "Technical University / University",
      period: "Relevant Coursework & Focus",
      highlights: [
        "Specialized in Machine Learning, Deep Learning, Data Structures & Algorithms, and Linear Algebra.",
        "Consistently built hands-on machine learning projects focused on healthcare and educational accessibility.",
      ],
    },
  ],

  certificates: [
    {
      id: "ibm-ml",
      title: "IBM Machine Learning Specialization",
      issuer: "IBM / Coursera",
      date: "Verified Certification",
      skills: ["Supervised Learning", "Deep Learning", "Time Series", "Unsupervised Learning"],
      credentialUrl: "https://coursera.org",
      badgeText: "IBM Certified",
    },
    {
      id: "coursera-cv",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI / Coursera",
      date: "Verified Certification",
      skills: ["Convolutional Neural Networks", "Sequence Models", "Transfer Learning"],
      credentialUrl: "https://coursera.org",
      badgeText: "Verified",
    },
    {
      id: "flyrank-cert",
      title: "FlyRank AI Engineering Certification",
      issuer: "FlyRank AI",
      date: "Verified Certification",
      skills: ["Production Machine Learning", "Model Latency Optimization", "ML Pipelines"],
      credentialUrl: "https://flyrank.ai",
      badgeText: "FlyRank Certified",
    },
  ],
};

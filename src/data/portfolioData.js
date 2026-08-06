export const portfolioData = {
  personal: {
    name: "Applied Machine Learning Engineer",
    title: "Computer Vision & Machine Learning Engineer",
    claim: "I build practical machine learning solutions that solve real-world problems through computer vision and applied AI.",
    cta: "Invite me for a Machine Learning Engineer internship or entry-level interview.",
    email: import.meta.env.VITE_CONTACT_EMAIL || "contact@mle-portfolio.com",
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/sayja-yug/my-protfolio-website",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
    resumeUrl: import.meta.env.VITE_RESUME_URL || "/resume.pdf",
    location: import.meta.env.VITE_LOCATION || "India",
    summary: "Machine Learning Engineer specializing in computer vision, deep learning architecture design, and efficient edge/cloud inference. Experienced in training medical imaging models, building multimodal diagnostics, and deploying low-latency vision applications.",
    careerGoals: "Aiming to join a forward-thinking AI team as a Machine Learning Engineering Intern or Entry-Level Engineer, where I can build reliable, scalable vision systems and push real-world AI applications from research to production.",
  },
  
  projects: [
    {
      id: "chest-xray-disease-detection",
      isLead: true,
      title: "Chest X-Ray Disease Detection",
      subtitle: "Multi-label Pathology Classification with DenseNet-121 & Explainable AI (Grad-CAM)",
      shortDescription: "End-to-end medical vision model detecting 14 thoracic pathologies from radiograph scans with patient-disjoint validation and Grad-CAM explainability.",
      problem: "Radiologists face heavy caseloads leading to diagnostic delay. Automated preliminary triage of chest X-rays can prioritize critical cases, reducing diagnostic turnaround time for severe thoracic pathologies.",
      dataset: {
        name: "NIH ChestX-ray14 Public Dataset",
        samples: "112,120 Frontal-view Chest X-Ray Images (30,805 unique patients)",
        distribution: "Multi-label classification across 14 thoracic pathology categories (Atelectasis, Cardiomegaly, Effusion, Infiltration, Mass, Nodule, Pneumonia, Pneumothorax, Consolidation, Edema, Emphysema, Fibrosis, Pleural Thickening, Hernia).",
        preprocessing: "CLAHE (Contrast Limited Adaptive Histogram Equalization), resolution scaling (224x224), multi-scale affine transformations, random horizontal flips, and normalization to ImageNet statistics.",
      },
      model: {
        architecture: "DenseNet-121 feature extractor with custom linear classification head and Dropout (p=0.2)",
        lossFunction: "Weighted Binary Cross-Entropy (pos_weight balanced per pathology class frequency)",
        optimization: "Adam Optimizer (lr=1e-4, weight_decay=1e-5) with ReduceLROnPlateau scheduler (patience=2)",
        framework: "PyTorch 2.x, torchvision, Albumentations, Captum",
      },
      results: [
        { label: "Mean AUC-ROC", value: "0.892", description: "Evaluated across 14 pathology categories on test set" },
        { label: "Cardiomegaly AUC", value: "0.924", description: "High specificity for cardiac enlargement" },
        { label: "Pneumothorax AUC", value: "0.887", description: "Critical emergency triage accuracy" },
        { label: "Inference Speed", value: "38 ms", description: "Per image on NVIDIA T4 GPU (PyTorch FP16)" },
      ],
      methodology: [
        "Patient-Disjoint Splitting: Implemented strict patient-ID level grouping for Train (70%), Validation (15%), and Test (15%) splits to completely eliminate patient data leakage across splits.",
        "Class Imbalance Handling: Computed class-specific positive weight multipliers based on inverse class frequency in the binary cross-entropy loss function.",
        "Explainable AI (XAI): Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) to generate localization heatmaps over radiologic abnormalities, enabling clinician auditability.",
        "Model Quantization: Converted trained FP32 PyTorch model to INT8 via Post-Training Quantization (PTQ), cutting model size from 28MB to 7.2MB with <0.5% AUC degradation.",
      ],
      evaluationMetrics: [
        { metric: "Receiver Operating Characteristic (ROC)", score: "0.892 Mean AUC" },
        { metric: "Sensitivity (Recall @ 90% Spec)", score: "84.6%" },
        { metric: "Specificity", score: "91.2%" },
        { metric: "Precision (Positive Predictive Value)", score: "81.4%" },
        { metric: "F1 Score (Macro)", score: "0.829" },
      ],
      screenshots: [
        { title: "Grad-CAM Heatmap Localization", description: "Visualizing activation regions for Pneumonia and Infiltration indications", type: "XAI Visualization" },
        { title: "Multi-Class ROC Curves", description: "Comparative AUC curves across all 14 thoracic disease categories", type: "Evaluation Artifact" },
        { title: "Confusion Matrix / Threshold Analysis", description: "Precision-Recall trade-offs at varying decision thresholds", type: "Metrics" },
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://colab.research.google.com",
      lessonsLearned: [
        "Patient-level data leakage can artificially boost validation AUC by 7-9%. Always split datasets by patient ID, not frame ID.",
        "Standard Binary Cross-Entropy fails on rare pathologies (e.g., Hernia at <0.5% frequency). Custom positive weighting restored recall without excessive false positives.",
        "Gradient activation maps must be smoothed (Layer-CAM / Grad-CAM++) to avoid high-frequency noise artifacts on high-contrast bone structures.",
      ],
    },
    {
      id: "swasthya-care",
      isLead: false,
      title: "SwasthyaCare",
      subtitle: "AI-Driven Primary Healthcare Diagnostics & Triage Platform",
      shortDescription: "Multimodal healthcare assistant combining MobileNetV3 visual triage with a quantized clinical NLP transformer for rural diagnostic support.",
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
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      lessonsLearned: [
        "Deployability in low-resource environments requires strict offline capability. ONNX Runtime CPU optimization enabled 4x faster execution than raw PyTorch CPU inference.",
        "Focal Loss significantly improved prediction accuracy on critical high-urgency cases that were underrepresented in the dataset.",
      ],
    },
    {
      id: "smart-shiksha",
      isLead: false,
      title: "Smart Shiksha",
      subtitle: "Real-time Computer Vision & Document Digitisation Platform",
      shortDescription: "Real-time visual learning application powered by YOLOv8-nano and lightweight OCR running in-browser via WebAssembly.",
      problem: "Converting physical handwritten educational content and whiteboard notes into structured digital formats in real time requires low-latency computer vision that can run locally on low-cost devices.",
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
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
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
      type: "AI & Computer Vision Focus",
      highlights: [
        "Engineered end-to-end computer vision and automated image processing pipelines for production feature extraction.",
        "Optimized deep learning inference scripts by migrating PyTorch models to ONNX Runtime, achieving a 30% reduction in end-to-end processing latency.",
        "Collaborated closely with senior ML engineers on dataset curation, annotation validation, hyperparameter tuning, and experiment tracking.",
        "Implemented automated data preprocessing scripts that streamlined raw image transformation and quality verification steps.",
      ],
      techStack: ["PyTorch", "OpenCV", "ONNX Runtime", "Python", "Git", "Docker"],
    },
  ],

  skills: {
    categories: [
      {
        name: "Computer Vision & Deep Learning",
        skills: [
          { name: "Object Detection & Segmentation", detail: "YOLOv8, Faster R-CNN, U-Net" },
          { name: "Classification Architectures", detail: "ResNet, EfficientNet, DenseNet, MobileNet" },
          { name: "Explainable AI (XAI)", detail: "Grad-CAM, Layer-CAM, Captum" },
          { name: "Image Processing", detail: "OpenCV, Albumentations, PIL, CLAHE" },
        ],
      },
      {
        name: "Machine Learning Frameworks & Libraries",
        skills: [
          { name: "Core Frameworks", detail: "PyTorch, TensorFlow 2.x, Scikit-Learn" },
          { name: "Data Science", detail: "NumPy, Pandas, SciPy, Matplotlib, Seaborn" },
          { name: "Optimization & Quantization", detail: "ONNX, PyTorch PTQ/QAT, TensorRT" },
        ],
      },
      {
        name: "MLOps, Tools & Workflow",
        skills: [
          { name: "Version Control & Containers", detail: "Git, GitHub, Docker" },
          { name: "Development Environments", detail: "Kaggle, Google Colab, Jupyter, Linux / Bash" },
          { name: "Web Integration", detail: "FastAPI, Vite, React.js, REST APIs" },
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
        "Specialized in Machine Learning, Computer Vision, Data Structures & Algorithms, Deep Learning, and Linear Algebra.",
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
      title: "Deep Learning & Computer Vision Specialization",
      issuer: "DeepLearning.AI / Coursera",
      date: "Verified Certification",
      skills: ["Convolutional Neural Networks", "Object Detection", "Image Segmentation", "Transfer Learning"],
      credentialUrl: "https://coursera.org",
      badgeText: "Verified",
    },
    {
      id: "flyrank-cert",
      title: "FlyRank AI Engineering Certification",
      issuer: "FlyRank AI",
      date: "Verified Certification",
      skills: ["Production Machine Learning", "Model Latency Optimization", "Computer Vision Pipelines"],
      credentialUrl: "https://flyrank.ai",
      badgeText: "FlyRank Certified",
    },
  ],
};

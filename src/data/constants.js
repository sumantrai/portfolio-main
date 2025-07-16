export const Bio = {
  name: "Sumant Rai",
  roles: ["Staff Software Engineer", "Java Developer", "Solution Architect", "Tech Lead"],
  description:
    "Seasoned Staff Software Engineer with 10+ years of experience in designing and delivering scalable, cloud-native applications using Java, Spring Boot, and modern DevOps practices on AWS and Azure. Adept in microservices architecture, distributed systems, and performance optimization with strong leadership in Agile environments. Proven track record across Retail, FinTech, Government, and Supply Chain domains. Certified AWS Architect and Oracle Java Developer.",
  github: "",
  resume:
    "https://drive.google.com/file/d/1HuO8_ramDP9U_9mS8tqaBPeK16SudXPY/view?usp=drive_link",
  linkedin: "www.linkedin.com/in/sumant-rai-he-him-his-723a8978",
  insta: "",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java 8", image: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Java 17", image: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Java 21", image: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Python", image: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
      { name: "gRPC", image: "https://grpc.io/img/logos/grpc-icon.svg" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
      { name: "Spring WebFlux", image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
      { name: "Hibernate", image: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" },
      { name: "Quarkus", image: "https://design.jboss.org/quarkus/logo/final/quarkus_icon_rgb_256px_default.png" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", image: "https://a0.awsstatic.com/main/images/logos/aws_logo.png" },
      { name: "Azure", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
      { name: "Docker", image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
      { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
      { name: "Terraform", image: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
      { name: "GitHub Actions", image: "https://docs.github.com/assets/cb-20363/images/help/settings/actions-icon.png" },
      { name: "ArgoCD", image: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png" },
      { name: "Jenkins", image: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Oracle", image: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
      { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
      { name: "DynamoDB", image: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/images/ddb-console-dashboard.png" },
      { name: "Cassandra", image: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" },
      { name: "Couchbase", image: "https://www.vectorlogo.zone/logos/couchbase/couchbase-icon.svg" },
    ],
  },
  {
    title: "Monitoring & QA",
    skills: [
      { name: "Splunk", image: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg" },
      { name: "SignalFX", image: "https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg" },
      { name: "ELK Stack", image: "https://upload.wikimedia.org/wikipedia/commons/3/38/ELK_stack_logo.png" },
      { name: "JUnit 5", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JUnit_5_Banner.png/440px-JUnit_5_Banner.png" },
      { name: "Mockito", image: "https://avatars.githubusercontent.com/u/7997161?s=280&v=4" },
      { name: "WireMock", image: "https://avatars.githubusercontent.com/u/18554349?s=200&v=4" },
      { name: "Cucumber", image: "https://cucumber.io/images/cucumber-logo.svg" },
      { name: "SonarQube", image: "https://www.vectorlogo.zone/logos/sonarsource/sonarsource-icon.svg" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Staff Software Engineer",
    company: "Tesco Technology",
    date: "Jul 2024 – Present",
    desc: "Architected and delivered real-time ML-based pricing systems. Built reactive microservices with Spring WebFlux. Integrated enterprise-wide pricing synchronization and orchestrated CI/CD pipelines with GitHub Actions.",
    skills: ["Java 21", "Spring WebFlux", "Azure", "ArgoCD", "GitHub Actions", "CI/CD", "BigData"],
  },
  {
    id: 1,
    role: "Lead Software Engineer",
    company: "Nike Technology",
    date: "Feb 2021 – Jul 2024",
    desc: "Unified payment logic and transitioned legacy services to cloud-native. Built secure distributed transaction systems and migrated tax/invoice modules for global scale.",
    skills: ["Java 17", "Spring Boot", "Microservices", "AWS", "Kubernetes", "Docker", "Distributed Systems"],
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Walmart Labs",
    date: "Jan 2019 – Feb 2021",
    desc: "Developed subscription and registry services. Enhanced order management by integrating with fraud systems and publishing data to ODS for analytics.",
    skills: ["Java 8", "Spring Boot", "Kafka", "Splunk", "Docker", "Jenkins"],
  },
  {
    id: 3,
    role: "Technology Consultant",
    company: "Deloitte Digital (USI)",
    date: "Apr 2017 – Dec 2018",
    desc: "Built ticketing and identity microservices. Delivered IoT-based manufacturing solutions using RFID, OpenCV, and ThingWorx.",
    skills: ["Java", "Spring Boot", "MongoDB", "AWS", "OpenCV", "RFID", "IoT"],
  },
  {
    id: 4,
    role: "Software Developer",
    company: "Hindustan Unilever",
    date: "Jul 2014 – Apr 2017",
    desc: "Developed B2B RS Unify solution including sales reporting and claim modules. Integrated Jasper Reports and POI for document generation.",
    skills: ["Java", "J2EE", "Oracle", "Jasper Reports", "Apache POI"],
  },
];

export const education = [
  {
    id: 0,
    school: "Pondicherry Central University",
    date: "2011 - 2014",
    desc: "MCA - Master of Computer Applications",
    degree: "Master's Degree",
  },
  {
    id: 1,
    school: "Udai Pratap College, Varanasi",
    date: "2007 - 2010",
    desc: "B.Sc in Mathematics, Statistics & Information Science",
    degree: "Bachelor's Degree",
  },
];

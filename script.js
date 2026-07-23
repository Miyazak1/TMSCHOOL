const courses = [
  {
    code: "MHF4U",
    name: "Advanced Functions",
    grade: "12",
    subject: "Mathematics",
    pathway: "University",
    prerequisite: "MCR3U or equivalent",
    summary: "Builds on prior function skills through polynomial, rational, logarithmic, and trigonometric functions.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "MCV4U",
    name: "Calculus and Vectors",
    grade: "12",
    subject: "Mathematics",
    pathway: "University",
    prerequisite: "MHF4U",
    summary: "Introduces rates of change, derivatives, vectors, and applications for science, engineering, economics, and business pathways.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "MDM4U",
    name: "Mathematics of Data Management",
    grade: "12",
    subject: "Mathematics",
    pathway: "University",
    prerequisite: "MCR3U or MCF3M",
    summary: "Develops skills in data organization, probability, statistics, and investigative projects.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "MAP4C",
    name: "Foundations for College Mathematics",
    grade: "12",
    subject: "Mathematics",
    pathway: "College",
    prerequisite: "MBF3C or MCF3M",
    summary: "Uses practical applications to prepare students for college programs, skilled trades, health sciences, and business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "MCT4C",
    name: "Mathematics for College Technology",
    grade: "12",
    subject: "Mathematics",
    pathway: "College",
    prerequisite: "MCF3M or MCR3U",
    summary: "Covers functions, expressions, and multi-step problem solving for college technology programs.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "ENG4U",
    name: "English",
    grade: "12",
    subject: "English",
    pathway: "University",
    prerequisite: "ENG3U",
    summary: "Strengthens literacy, communication, critical thinking, literature analysis, and academic writing.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "SBI4U",
    name: "Biology",
    grade: "12",
    subject: "Science",
    pathway: "University",
    prerequisite: "SBI3U",
    summary: "Studies biological systems, evolution, genetics, anatomy, and population dynamics for university pathways.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "SCH4U",
    name: "Chemistry",
    grade: "12",
    subject: "Science",
    pathway: "University",
    prerequisite: "SCH3U",
    summary: "Explores organic chemistry, structures, energy changes, equilibrium, electrochemistry, and chemical systems.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "SPH4U",
    name: "Physics",
    grade: "12",
    subject: "Science",
    pathway: "University",
    prerequisite: "SPH3U",
    summary: "Develops understanding of dynamics, energy, waves, fields, light, and modern physics applications.",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "ICS4U",
    name: "Computer Science",
    grade: "12",
    subject: "Computer Science",
    pathway: "University",
    prerequisite: "ICS3U recommended",
    summary: "Builds programming, algorithmic thinking, software design, and computer science problem-solving skills.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "BBB4M",
    name: "International Business Fundamentals",
    grade: "12",
    subject: "Business",
    pathway: "University/College",
    prerequisite: "None",
    summary: "Introduces international trade, global markets, business ethics, and cross-cultural business strategy.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "OLC4O",
    name: "Ontario Secondary School Literacy Course",
    grade: "12",
    subject: "English",
    pathway: "Open",
    prerequisite: "Eligibility based on literacy requirement",
    summary: "Helps students meet the Ontario secondary school literacy requirement through reading and writing skills.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
  },
];

const faqs = [
  {
    question: "Do you offer OSSD credit courses?",
    answer: "Yes. The site is structured around Ontario high school credit pathways for students planning OSSD completion, prerequisites, or academic upgrading.",
  },
  {
    question: "Which grades are supported?",
    answer: "The first version focuses on Grade 9-12 online courses, with a strong emphasis on Grade 11 and Grade 12 prerequisite planning.",
  },
  {
    question: "Can international students study online?",
    answer: "Yes. International students can inquire about online course options, time zone fit, course planning, and documents needed for academic assessment.",
  },
  {
    question: "Are courses synchronous or asynchronous?",
    answer: "The learning model can support live online classes, asynchronous coursework, scheduled teacher support, tutoring, and independent study formats.",
  },
  {
    question: "How do I choose the right course?",
    answer: "Start with your current grade, completed prerequisites, target program, and timeline. An advisor can help match courses to your pathway.",
  },
  {
    question: "Where can I ask about tuition?",
    answer: "Call or email admissions directly. Tuition details should be confirmed by the school before they are published on the website.",
  },
];

const selectors = {
  grid: document.querySelector("#course-grid"),
  grade: document.querySelector("#grade-filter"),
  subject: document.querySelector("#subject-filter"),
  pathway: document.querySelector("#pathway-filter"),
  resultCount: document.querySelector("#course-result-count"),
  menuToggle: document.querySelector(".menu-toggle"),
  navLinks: document.querySelector("#nav-links"),
  faqList: document.querySelector("#faq-list"),
  modal: document.querySelector("#course-modal"),
};

function uniqueValues(key) {
  return [...new Set(courses.map((course) => course[key]))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function fillFilter(select, values) {
  if (!select) return;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function getFilteredCourses() {
  return courses.filter((course) => {
    const gradeValue = selectors.grade?.value || "all";
    const subjectValue = selectors.subject?.value || "all";
    const pathwayValue = selectors.pathway?.value || "all";
    const gradeMatch = gradeValue === "all" || course.grade === gradeValue;
    const subjectMatch = subjectValue === "all" || course.subject === subjectValue;
    const pathwayMatch = pathwayValue === "all" || course.pathway === pathwayValue;
    return gradeMatch && subjectMatch && pathwayMatch;
  });
}

function renderCourses() {
  if (!selectors.grid) return;
  const filteredCourses = getFilteredCourses();
  selectors.grid.innerHTML = "";

  if (selectors.resultCount) {
    selectors.resultCount.textContent = `Showing ${filteredCourses.length} ${filteredCourses.length === 1 ? "course" : "courses"}`;
  }

  filteredCourses.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-thumb" style="background-image: linear-gradient(180deg, rgba(5, 29, 54, 0.04), rgba(5, 29, 54, 0.72)), url('${course.image}')">
        <span class="course-code">${course.code}</span>
        <span class="course-subject">${course.subject}</span>
      </div>
      <div class="course-body">
        <h3>${course.name}</h3>
        <div class="course-meta">
          <span>Grade ${course.grade}</span>
          <span>${course.pathway}</span>
        </div>
        <p>${course.summary}</p>
        <button class="button" type="button" data-course="${course.code}">Course Details</button>
      </div>
    `;
    selectors.grid.append(card);
  });

  if (!filteredCourses.length) {
    selectors.grid.innerHTML = '<p class="notice">No courses match these filters. Try a different grade, subject, or pathway.</p>';
  }
}

function openCourseModal(code) {
  if (!selectors.modal) return;
  const course = courses.find((item) => item.code === code);
  if (!course) return;

  document.querySelector("#modal-code").textContent = course.code;
  document.querySelector("#modal-title").textContent = course.name;
  document.querySelector("#modal-summary").textContent = course.summary;
  document.querySelector("#modal-grade").textContent = `Grade ${course.grade}`;
  document.querySelector("#modal-subject").textContent = course.subject;
  document.querySelector("#modal-pathway").textContent = course.pathway;
  document.querySelector("#modal-prerequisite").textContent = course.prerequisite;
  document.querySelector("#modal-contact").href = "contact.html";

  if (typeof selectors.modal.showModal === "function") {
    selectors.modal.showModal();
  }
}

function renderFaqs() {
  if (!selectors.faqList) return;
  selectors.faqList.innerHTML = "";
  faqs.forEach((faq, index) => {
    const item = document.createElement("article");
    item.className = `faq-item${index === 0 ? " open" : ""}`;
    item.innerHTML = `
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        ${faq.question}
        <span aria-hidden="true">${index === 0 ? "-" : "+"}</span>
      </button>
      <div class="faq-answer">${faq.answer}</div>
    `;
    selectors.faqList.append(item);
  });
}

fillFilter(selectors.grade, uniqueValues("grade"));
fillFilter(selectors.subject, uniqueValues("subject"));
fillFilter(selectors.pathway, uniqueValues("pathway"));
renderCourses();
renderFaqs();

[selectors.grade, selectors.subject, selectors.pathway].forEach((select) => {
  select?.addEventListener("change", renderCourses);
});

selectors.grid?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course]");
  if (button) {
    openCourseModal(button.dataset.course);
  }
});

document.querySelector(".modal-close")?.addEventListener("click", () => {
  selectors.modal.close();
});

selectors.faqList?.addEventListener("click", (event) => {
  const button = event.target.closest(".faq-question");
  if (!button) return;
  const item = button.closest(".faq-item");
  const isOpen = item.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
  const icon = button.querySelector("span");
  if (icon) {
    icon.textContent = isOpen ? "-" : "+";
  }
});

selectors.menuToggle?.addEventListener("click", () => {
  const expanded = selectors.menuToggle.getAttribute("aria-expanded") === "true";
  selectors.menuToggle.setAttribute("aria-expanded", String(!expanded));
  selectors.navLinks.classList.toggle("open", !expanded);
});

selectors.navLinks?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    selectors.menuToggle.setAttribute("aria-expanded", "false");
    selectors.navLinks.classList.remove("open");
  }
});

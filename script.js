// script.js

// Subjects by Course and Year Level
const courseSubjects = {
    ICT: {
        "1st Year": ["(GE 1) Purposive Communication (Unit 3)", 
                     "(GE 2) Reading In Philippine history (Unit 3)",
                     "(GE 3) Mathematics in the Modern World (Unit 3)",
                     "(GE 4) Art Appreciation (Unit 3)", 
                     "(GE 5) Understanding the Self (Unit 3)",
                     "(GE 6) Gender and Society (Unit 3)", 
                     "(GE 7) Philippine Popular Culture (Unit 3)",
                     "(IA 1) Introduction to Industrial Arts Part 1 (Unit 3)", 
                     "(PE 1) PATHFIT 1 (Unit 2)", 
                     "(NSTP 1) Civic Welfare Training Service 1 (Unit 3)",
                     "TOTAL UNITS 29"],
  
        "2nd Year": ["(ProfED 1) Technology for Teaching & Learning 1 (Unit 3)",
                     "(Profed 2) Foundation of Special & Inclusive Education (Unit 3)", 
                     "(ProfEd 3) Facilitating Learner-Centered Teaching the Learner-Centered Approaches with Emphasis on Trainers Methodology 1 (Unit 3)",
                     "(ProfEd 4) The Child & Adolescent Learner & Learning Principles (Unit 3)",
                     "(ICT 3) Computer System Servicing (Unit 3)", 
                     "(ICT 4) Troubleshooting Technique (Unit 3)",
                     "(AF 1) Agri-Fishery Part 1 (Unit 3)",
                     "(ICT 1) Introduction to ICT Specialiations 1 (Unit 3)",
                     "(PE 3) PATHFIT 3 (Unit 2)",
                     "TOTAL UNITS 26"],
  
        "3rd Year": ["(ProfED 8) assessment in Learning 1 (Unit 3)", 
                     "(ProfED 9) The Teacher & the Community, School Culture & Organizational Leadership with Focus on Philippine TVET System (Unit 30", 
                     "(ICT 6) Video Presentation (Unit 3)",
                     "(ICT 7) Print Production (Unit 3)",
                     "(ICT 8) Web Creation (Unit 3)",
                     "(HE 10) Entrepreneurship (Unit 3)",
                     "(ICT 9) Call Center Basic (Unit 3)",
                     "TOTAL UNIT 21"],
                      
        "4th Year": ["(FS 1) Field Study 1 (Unit 3)",
                     "(FS 2) Feild Study 2 (Unit 3)", 
                     "(RS 2) Undergraduate Thesis/Research Paper (Unit 3)",
                     "TOTAL UNITS 9"],
      },
        
      HE: {
        "1st Year": ["(GE 1) Purposive Communication (Unit 3)", 
                     "(GE 2) Reading In Philippine history (Unit 3)",
                     "(GE 3) Mathematics in the Modern World (Unit 3)",
                     "(GE 4) Art Appreciation (Unit 3)", 
                     "(GE 5) Understanding the Self (Unit 3)",
                     "(GE 6) Gender and Society (Unit 3)", 
                     "(GE 7) Philippine Popular Culture (Unit 3)",
                     "(IA 1) Introduction to Industrial Arts Part 1 (Unit 3)", 
                     "(PE 1) PATHFIT 1 (Unit 2)", 
                     "(NSTP 1) Civic Welfare Training Service 1 (Unit 3)",
                     "TOTAL UNITS 29"],
  
        "2nd Year": ["(ProfED 1) Technology for Teaching & Learning 1 (Unit 3)",
                     "(Profed 2) Foundation of Special & Inclusive Education (Unit 3)", 
                     "(ProfEd 3) Facilitating Learner-Centered Teaching the Learner-Centered Approaches with Emphasis on Trainers Methodology 1 (Unit 3)",
                     "(ProfEd 4) The Child & Adolescent Learner & Learning Principles (Unit 3)",
                     "(HE 3) Consumer Education (Unit 3)", 
                     "(HE 4) Household Management (Unit 3)",
                     "(AF 1) Agri-Fishery Part 1 (Unit 3)",
                     "(ICT 1) Introduction to ICT Specialiations 1 (Unit 3)",
                     "(PE 3) PATHFIT 3 (Unit 2)",
                     "TOTAL UNITS 26"],
  
        "3rd Year": ["(ProfED 8) assessment in Learning 1 (Unit 3)", 
                     "(ProfED 9) The Teacher & the Community, School Culture & Organizational Leadership with Focus on Philippine TVET System (Unit 30", 
                     "(HE 7) Principles of Food Preparation (Unit 3)",
                     "(HE 8) Clothing Selection Purchase & Care (Unit 3)",
                     "(HE 9) Arts in Daily Living (Unit 3)",
                     "(HE 10) Entrepreneurship (Unit 3)",
                     "(HE 11) Food & Nutrition (Unit 3)",
                     "TOTAL UNIT 21"],
  
        "4th Year": ["(FS 1) Field Study 1 (Unit 3)",
                     "(FS 2) Feild Study 2 (Unit 3)", 
                     "(RS 2) Undergraduate Thesis/Research Paper (Unit 3)",
                     "TOTAL UNITS 9"],
      },
       
      IA: {
        "1st Year": ["(GE 1) Purposive Communication (Unit 3)", 
                     "(GE 2) Reading In Philippine history (Unit 3)",
                     "(GE 3) Mathematics in the Modern World (Unit 3)",
                     "(GE 4) Art Appreciation (Unit 3)", 
                     "(GE 5) Understanding the Self (Unit 3)",
                     "(GE 6) Gender and Society (Unit 3)", 
                     "(GE 7) Philippine Popular Culture (Unit 3)",
                     "(IA 1) Introduction to Industrial Arts Part 1 (Unit 3)", 
                     "(PE 1) PATHFIT 1 (Unit 2)", 
                     "(NSTP 1) Civic Welfare Training Service 1 (Unit 3)",
                     "TOTAL UNITS 29"],
  
        "2nd Year": ["(ProfED 1) Technology for Teaching & Learning 1 (Unit 3)",
                     "(Profed 2) Foundation of Special & Inclusive Education (Unit 3)", 
                     "(ProfEd 3) Facilitating Learner-Centered Teaching the Learner-Centered Approaches with Emphasis on Trainers Methodology 1 (Unit 3)",
                     "(ProfEd 4) The Child & Adolescent Learner & Learning Principles (Unit 3)",
                     "(IA 3) Fundamentals of Automotive Technology (Unit 3)", 
                     "(IA 4) Applied Automotive Technology (Unit 3)",
                     "(AF 1) Agri-Fishery Part 1 (Unit 3)",
                     "(ICT 1) Introduction to ICT Specialiations 1 (Unit 3)",
                     "(PE 3) PATHFIT 3 (Unit 2)",
                     "TOTAL UNITS 26"],
  
        "3rd Year": ["(ProfED 8) assessment in Learning 1 (Unit 3)", 
                     "(ProfED 9) The Teacher & the Community, School Culture & Organizational Leadership with Focus on Philippine TVET System (Unit 30", 
                     "(IA 6) Civil Technology (Unit 3)",
                     "(IA 7) Fundamentals of Electronic Technology (Unit 3)",
                     "(IA 8) Fundamentals of Electrical Technology (Unit 3)",
                     "(HE 10) Entrepreneurship (Unit 3)",
                     "(IA 9) Metal Works (Unit 3)",
                     "TOTAL UNIT 21"],
  
        "4th Year": ["(FS 1) Field Study 1 (Unit 3)",
                     "(FS 2) Feild Study 2 (Unit 3)", 
                     "(RS 2) Undergraduate Thesis/Research Paper (Unit 3)",
                     "TOTAL UNITS 9"],
      },
      BSED: {
        "1st Year": ["(GE 1) Purposive Communication (Unit 3)", 
                     "(GE 2) Reading In Philippine history (Unit 3)",
                     "(GE 3) Mathematics in the Modern World (Unit 3)",
                     "(GE 4) Art Appreciation (Unit 3)", 
                     "(GE 5) Understanding the Self (Unit 3)",
                     "(GE 6) Gender and Society (Unit 3)", 
                     "(GE 7) Philippine Popular Culture (Unit 3)",
                     "(MATH 1) History of Mathematics (Unit 3)", 
                     "(PE 1) PATHFIT 1 (Unit 2)", 
                     "(NSTP 1) Civic Welfare Training Service 1 (Unit 3)",
                     "TOTAL UNITS 29"],
  
        "2nd Year": ["(ProfED 1) Technology for Teaching & Learning 1 (Unit 3)",
                     "(Profed 2) Foundation of Special & Inclusive Education (Unit 3)", 
                     "(ProfEd 3) Facilitating Learner-Centered Teaching the Learner-Centered Approaches with Emphasis on Trainers Methodology 1 (Unit 3)",
                     "(ProfEd 4) The Child & Adolescent Learner & Learning Principles (Unit 3)",
                     "(MATH 5) Logic & Set Theory (Unit 3)", 
                     "(MATH 6) Elementary Statistics & Probability (Unit 3)",
                     "(MATH 7) Calculus 1 w/Analytic Geometry (Unit 4)",
                     "(PE 3) PATHFIT 3 (Unit 2)",
                     "TOTAL UNITS 24"],
  
        "3rd Year": ["(ProfED 8) assessment in Learning 1 (Unit 3)", 
                     "(ProfED 9) The Teacher & the Community, School Culture & Organizational Leadership with Focus on Philippine TVET System (Unit 30", 
                     "(MATH 12) Principles & Strategies In Teaching Mathematics (Unit 3)",
                     "(MATH 13) Calculus 3 (Unit 3)",
                     "(MATH 14) Linear Algebra (Unit 3)",
                     "(MATH 15) Advanced Statistics (Unit 3)",
                     "TOTAL UNIT 18"],
  
        "4th Year": ["(FS 1) Field Study 1 (Unit 3)",
                     "(FS 2) Feild Study 2 (Unit 3)",
                     "TOTAL UNITS 6"],
      },
  
      BEED: {
        "1st Year": ["(GE 1) Purposive Communication (Unit 3)", 
                     "(GE 2) Reading In Philippine history (Unit 3)", 
                     "(GE 3) Mathematics in the Modern World (Unit 3)",
                     "(GE 4) Art Appreciation (Unit 3)", 
                     "(GE 5) Understanding the Self (Unit 3)",
                     "(GE 6) Gender and Society (Unit 3)", 
                     "(GE 7) Philippine Popular Culture (Unit 3)",
                     "(EDUC 1) Teaching Math in the Primary Grades (Unit 3)", 
                     "(PE 1) PATHFIT 1 (Unit 2)", 
                     "(NSTP 1) Civic Welfare Training Service 1 (Unit 3)",
                     "TOTAL UNITS 29"],
  
        "2nd Year": ["(ProfED 1) Technology for Teaching & Learning 1 (Unit 3)",
                     "(Profed 2) Foundation of Special & Inclusive Education (Unit 3)", 
                     "(ProfEd 3) Facilitating Learner-Centered Teaching the Learner-Centered Approaches with Emphasis on Trainers Methodology 1 (Unit 3)",
                     "(ProfEd 4) The Child & Adolescent Learner & Learning Principles (Unit 3)",
                     "(EDUC 5) Teaching Math in the Intermediate Grades (Unit 3)", 
                     "(EDUC 6) Edukasyong Pantahanan at Pangkabuhayan (Unit 3)",
                     "(EDUC 7) Pagtuturo and Filipino sa Elementary (II) Panitikan ng pilipinas (Unit 3)",
                     "(PE 3) PATHFIT 3 (Unit 2)",
                     "TOTAL UNITS 23"],
  
        "3rd Year": ["(ProfED 8) assessment in Learning 1 (Unit 3)", 
                     "(ProfED 9) The Teacher & the Community, School Culture & Organizational Leadership with Focus on Philippine TVET System (Unit 30", 
                     "(EDUC 11) Teaching English in the Elementary Grades Through Literature (Unit 3)",
                     "(EDUC 12) Teaching Science in Elementary Grades (Biology and Chemistry) (Unit 3)",
                     "(EDUC 13) Teaching PE and Health in the Elementary Grades (Unit 3)",
                     "(EDUC 14) Teaching Social Student in the Elementary Grades (Culture & Geography) (Unit 3)",
                     "TOTAL UNIT 18"],
  
        "4th Year": ["(FS 1) Field Study 1 (Unit 3)",
                     "(FS 2) Feild Study 2 (Unit 3)",
                     "TOTAL UNITS 6"],
      },
    };

// Event Listener for Course and Year Level
document.getElementById("course").addEventListener("change", updateSubjects);
document.getElementById("yearLevel").addEventListener("change", updateSubjects);

// Function to Update Subjects List Based on Course and Year Level
function updateSubjects() {
  const course = document.getElementById("course").value;
  const yearLevel = document.getElementById("yearLevel").value;
  const subjectsContainer = document.getElementById("subjectsContainer");

  // Clear previous subjects
  subjectsContainer.innerHTML = "";

  if (course && yearLevel && courseSubjects[course][yearLevel]) {
    const ul = document.createElement("ul");
    courseSubjects[course][yearLevel].forEach(subject => {
      const li = document.createElement("li");
      li.textContent = subject;
      ul.appendChild(li);
    });
    subjectsContainer.appendChild(ul);
  } else {
    subjectsContainer.textContent = "Select a course and year level to see the subjects.";
  }

  // Update displayed data whenever course or year level is changed
  printData();
}

// Function to Collect and Display All Form Data
function printData() {
    // Collect form data
    const studentId = document.getElementById("studentId").value;
    const lastName = document.getElementById("lastName").value;
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;
    const gender = document.getElementById("gender").value;
    const civilStatus = document.getElementById("civilStatus").value;
    const birthday = document.getElementById("birthday").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const yearLevel = document.getElementById("yearLevel").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
  
    // Prepare the subjects
    const subjects = document.getElementById("subjectsContainer").getElementsByTagName("li");
    const subjectList = [];
    for (let i = 0; i < subjects.length; i++) {
      subjectList.push(subjects[i].textContent);
    }
  
    // Prepare HTML to display
    const formData = `
  
    <h4> Republic of the Philippines <br>
    SENATOR NINOY AQUINO COLLEGE FOUNDATION<br>
    Cataluña St., Kulaman, Senator Ninoy Aquino, Sultan Kudarat <br>
         College Department <br>
         Registration Form
   </h4>
<hr>
      <ul>
        <li><strong>Student ID Number:</strong> ${studentId}</li>
        <li><strong>Full Name:</strong> ${firstName} ${middleName} ${lastName}</li>
        <li><strong>Address:</strong> ${address}</li>
        <li><strong>Contact:</strong> ${contact}</li>
        <li><strong>Gender:</strong> ${gender}</li>
        <li><strong>Civil Status:</strong> ${civilStatus}</li>
        <li><strong>Birthday:</strong> ${birthday}</li>
        <li><strong>Age:</strong> ${age}</li>
        <li><strong>Course:</strong> ${course}</li>
        <li><strong>Year Level:</strong> ${yearLevel}</li>
        <li><strong>Father's Name:</strong> ${fatherName}</li>
        <li><strong>Mother's Maiden Name:</strong> ${motherName}</li>
        <li><strong>Contact:</strong> ${contact}</li>
        <li><strong>Subjects:</strong></li>
        <ul>
          ${subjectList.map(subject => `<li>${subject}</li>`).join('')}
        </ul>
        <hr>
        <br> <p> MA. FE P. SINADJAN   <br>  School Registrar</p> 
        <hr> 
        <br> <P>  EVELYN P. CORPUZ  <br> School Cashier</P>
      </ul>
    `;
  
    // Display the data in a section below the form
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = formData;
  }
  
// Event listener for Print button
document.getElementById("printButton").addEventListener("click", function () {
  const resultContainer = document.getElementById("resultContainer").innerHTML;
  const printWindow = window.open('', '', 'height=500, width=800');
  printWindow.document.write('<html><head><title>Enrollment Form</title></head><body>');
  printWindow.document.write(resultContainer);
  printWindow.document.write('</body></html>');
  printWindow.document.close(); 
  printWindow.print();
});

// Automatically update data when form fields are filled
document.getElementById("enrollmentForm").addEventListener("input", printData);


// Function to Download Form as PDF
function downloadAsPDF() {
    const studentId = document.getElementById("studentId").value;
    const lastName = document.getElementById("lastName").value;
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;
    const gender = document.getElementById("gender").value;
    const civilStatus = document.getElementById("civilStatus").value;
    const birthday = document.getElementById("birthday").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const yearLevel = document.getElementById("yearLevel").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
  
    // Prepare the subjects
    const subjects = document.getElementById("subjectsContainer").getElementsByTagName("li");
    const subjectList = [];
    for (let i = 0; i < subjects.length; i++) {
      subjectList.push(subjects[i].textContent);
    }
  
    // Initialize jsPDF
    const { jsPDF } = window.jspdf; // Ensure jsPDF is loaded
    const doc = new jsPDF();
  
    // Add Content to the PDF
    doc.setFontSize(12);
    doc.text("SENATOR NINOY AQUINO COLLEGE FOUNDATION", 10, 10);
    doc.text(`Student ID: ${studentId}`, 10, 20);
    doc.text(`Full Name: ${firstName} ${middleName} ${lastName}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    doc.text(`Contact No: ${contact}`, 10, 50);
    doc.text(`Gender: ${gender}`, 10, 60);
    doc.text(`Civil Status: ${civilStatus}`, 10, 70);
    doc.text(`Birthday: ${birthday}`, 10, 80);
    doc.text(`Age: ${age}`, 10, 90);
    doc.text(`Course: ${course}`, 10, 100);
    doc.text(`Year Level: ${yearLevel}`, 10, 110);
    doc.text(`Father's Name: ${fatherName}`, 10, 120);
    doc.text(`Mother's Maiden Name: ${motherName}`, 10, 130);
    doc.text("Subjects:", 10, 140);
  
    let yOffset = 150;
    subjectList.forEach((subject, index) => {
      doc.text(`${index + 1}. ${subject}`, 15, yOffset);
      yOffset += 10;
    });
  
    // Save the PDF
    doc.save("Pre-Enrollment_Form.pdf");
  }
  
  // Add Event Listener for Download Button
  document.getElementById("downloadButton").addEventListener("click", downloadAsPDF);
  

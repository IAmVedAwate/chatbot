const { NlpManager } = require('node-nlp'); // Import the NlpManager

const manager = new NlpManager({ languages: ['en'] });

const trainingData = [  
    { type: "offer",input: 'What courses does SciAstra offer?', output: 'We offer courses in PCMB subjects for exams like IAT, NEST, JEE, NEET, and more.' },
    { type: "test",input: 'How can I prepare for the IAT exam?', output: 'SciAstra provides comprehensive courses to prepare for the IAT exam.' },
    { type: "scholarships",input: 'Tell me about the scholarships at SciAstra.', output: 'We offer full scholarships of up to Rs. 4 Lakhs for eligible students.' },
    { type: "classes",input: 'Does SciAstra provide live classes?', output: 'Yes, we offer live and recorded classes for our students.' },
    { type: "other",input: 'Can I get help with doubt sessions?', output: 'Absolutely! We conduct doubt sessions to clarify your queries.' },
    { type: "other",input: 'What are the benefits of studying at SciAstra?', output: 'You can expect top international Ph.D. placements after completing our courses.' },
    { type: "classes",input: 'How do I connect with mentors at SciAstra?', output: 'We provide instant chat options for you to connect with our mentors.' },
    { type: "offer",input: 'Does SciAstra offer emotional support to students?', output: 'Yes, we provide personal and emotional support to all our students.' },
    { type: "classes",input: 'Tell me about the interaction sessions at SciAstra.', output: 'We conduct interactive discussions and sessions for better learning.' },
    { type: "test",input: 'What mock tests does SciAstra provide?', output: 'We offer mock tests based on the latest practice patterns for a real-time experience.' },
    { type: "test",input: 'Can I get a full analysis report after the mock tests?', output: 'Yes, we provide a detailed analysis report after each mock test.' },
    { type: "scholarships",input: 'How can I apply for SciAstra scholarships?', output: 'You can apply for scholarships during the admission process.' },
    { type: "scholarships",input: 'What is the eligibility for scholarships at SciAstra?', output: 'Students meeting certain criteria can apply for our scholarships.' },
    { type: "purpose",input: 'Tell me about the facilities available for students at SciAstra.', output: 'We provide state-of-the-art facilities for an enriching learning experience.' },
    { type: "other",input: 'Does SciAstra have courses for board exams?', output: 'Yes, we offer courses to help students prepare for board exams.' },
    { type: "price",input: 'How can I enroll at SciAstra?', output: 'You can enroll through our website or by contacting our admissions team.' },
    { type: "duration",input: 'What is the duration of the courses at SciAstra?', output: 'The duration varies based on the course you choose.' },
    { type: "classes",input: 'Tell me about the faculty at SciAstra.', output: 'We have experienced and dedicated faculty members guiding our students.' },
    { type: "classes",input: 'What are the different modes of learning at SciAstra?', output: 'We offer both live classes and access to recorded sessions.' },
    {
        type: "purpose",input: 'What services does SciAstra provide?',
        output: 'SciAstra offers a wide array of services catering to aspiring students. Our primary focus includes providing comprehensive courses in PCMB subjects aimed at preparing students for various competitive exams such as IAT, NEST, JEE, NEET, among others. Additionally, we extend scholarships and mentor support to ensure a holistic learning experience.'
    },
    {
        type: "classes",input: 'Details about mentor support?',
        output: 'At SciAstra, our mentor support system is designed to provide students with personalized guidance and academic assistance. Through our platform, students have direct access to experienced mentors who offer insights, clarification of doubts, and academic advice. Our mentors are committed to fostering a supportive learning environment for all enrolled students.'
    },
    {
        type: "purpose",input: 'Can you explain the purpose?',
        output: "Our curriculum revolves around an in-depth focus on PCMB subjects, tailored specifically for competitive exams. It's structured to cover fundamental concepts, advanced topics, and practical applications necessary for exam preparation. We incorporate real-time experiences, interactive sessions, and comprehensive study materials to ensure students are well-equipped for their exams."
    },
    {
        type: "price",input: 'Tell me about the pricing.',
        output: 'SciAstra takes pride in offering courses with minimal or zero fees. We believe in making quality education accessible to all, hence our courses are designed with affordability in mind. Additionally, eligible students can avail themselves of our full scholarships, covering additional expenses and ensuring financial ease.'
    },
    {
        type: "scholarships",input: 'Are there any additional fees?',
        output: 'We maintain transparency in our fee structure; there are no hidden charges or unexpected additional fees beyond the course fees. The scholarships offered by SciAstra comprehensively cover various expenses, providing students with a hassle-free learning experience.'
    },
    {
        type: "scholarships",input: 'Scholarship criteria?',
        output: 'The eligibility criteria for scholarships at SciAstra are primarily based on academic performance and specific eligibility parameters. We aim to reward and support deserving students, encouraging them to excel academically.'
    },
    {
        type: "offer",input: 'Different course types available?',
        output: "At SciAstra, we offer a diverse range of preparatory courses specifically designed for various competitive exams. Whether you're targeting IAT, NEST, JEE, NEET, or other exams, our courses are tailored to meet the specific requirements and ensure comprehensive preparation."
    },
    {
        type: "purpose",input: 'Any special features in the curriculum?',
        output: 'Our curriculum goes beyond traditional teaching methods. It integrates real-time experiences, fostering practical learning environments. Moreover, interactive sessions, doubt resolution, and comprehensive study resources are core components, enhancing the overall learning journey.'
    },
    {
        type: "classes",input: 'How are the courses structured?',
        output: 'Our courses are meticulously structured to cover the entire syllabus, emphasizing conceptual clarity and extensive practice. We follow a comprehensive approach, including lectures, practice sessions, mock tests, and personalized doubt resolution, ensuring students are well-prepared for their exams.'
    },
    {
        type: "price",input: 'Can you explain the enrollment process?',
        output: 'Enrolling at SciAstra is a simple and user-friendly process. Interested individuals can easily navigate our website to find detailed information about courses, eligibility, and the enrollment procedure. Once satisfied, enrollment can be completed online through our platform.'
    },
    {
        type: "offer",input: 'Courses offered?',
        output: 'SciAstra offers a diverse range of courses focusing on PCMB subjects, meticulously designed to prepare students for a multitude of exams such as IAT, NEST, JEE, NEET, and more. Our curriculum is tailored to provide comprehensive coverage of essential subjects and exam patterns.'
    },
    {
        type: "IAT",input: 'IAT exam preparation?',
        output: 'SciAstra provides comprehensive and specialized courses explicitly designed to equip students with the necessary skills and knowledge required for excelling in the IAT exam. Our courses include thorough study materials, practice tests, and expert guidance.'
    },
    {
        type: "scholarships",input: 'Scholarships at SciAstra?',
        output: 'SciAstra offers full scholarships up to Rs. 4 Lakhs for eligible students. These scholarships aim to support and encourage deserving candidates to pursue their academic goals without financial constraints.'
    },
    {
        type: "classes",input: 'Live classes?',
        output: 'Our learning platform provides students with access to both live and recorded classes. Live classes allow for real-time interaction with instructors, while recorded sessions ensure flexibility in learning, enabling students to revisit lessons at their convenience.'
    },
    {
        type: "classes",input: 'Doubt sessions?',
        output: 'SciAstra hosts regular doubt resolution sessions to address students\' queries and concerns. These sessions are conducted by experienced educators, fostering a conducive learning environment and ensuring clarity of concepts.'
    },
    {
        type: "other",input: 'Benefits of studying?',
        output: 'Studying at SciAstra opens doors to top-tier international Ph.D. placements, offering students exceptional opportunities to further their academic careers and excel in their chosen fields.'
    },
    {
        type: "classes",input: 'Connect with mentors?',
        output: 'We facilitate instant chat options, enabling students to connect with mentors for personalized academic guidance and support. Our experienced mentors are dedicated to nurturing students\' academic growth.'
    },
    {
        type: "other",input: 'Emotional support?',
        output: 'SciAstra recognizes the importance of holistic development; hence, we offer personalized emotional support to students, ensuring their well-being and providing assistance during their academic journey.'
    },
    {
        type: "classes",input: 'Interaction sessions?',
        output: 'Interactive discussions and sessions are integral to SciAstra\'s teaching methodology. These sessions encourage active participation, fostering collaborative learning and promoting a deeper understanding of subjects.'
    },
    {
        type: "test",input: 'Mock tests?',
        output: 'SciAstra conducts mock tests based on the latest patterns and syllabus. These tests simulate real exam scenarios, aiding students in assessing their preparedness and identifying areas for improvement.'
    },
    {
        type: "test",input: 'Analysis report after tests?',
        output: 'Following mock tests, SciAstra provides detailed analysis reports. These reports offer insights into students\' performance, strengths, weaknesses, and personalized recommendations for enhancement.'
    },
    {
        type: "scholarships",input: 'Scholarship application?',
        output: 'Students can apply for scholarships during the admission process. SciAstra ensures a transparent and straightforward application procedure, allowing eligible candidates to avail themselves of financial support.'
    },
    {
        type: "scholarships",input: 'Eligibility for scholarships?',
        output: 'Scholarship eligibility at SciAstra is based on specific criteria related to academic performance, financial need, and other relevant parameters. We aim to assist and encourage deserving candidates.'
    },
    {
        type: "offer",input: 'Facilities for students?',
        output: 'SciAstra is equipped with state-of-the-art facilities conducive to learning. Our infrastructure includes modern classrooms, libraries, and additional resources to support students\' academic endeavors.'
    },
    {
        type: "offer",input: 'Courses for board exams?',
        output: 'SciAstra offers specialized preparation courses designed to assist students in preparing for board exams. These courses focus on comprehensive syllabus coverage and strategic preparation methods.'
    },
    {
        type: "price",input: 'Fee for interaction sessions?',
        output: 'The fee for interaction sessions is conveniently included in the overall course fees. Students can access these sessions without incurring any additional charges.'
    },
    {
        type: "price",input: 'Enrollment process?',
        output: 'Enrolling at SciAstra is hassle-free; candidates can easily enroll online through our website or by contacting our admissions team directly. Our user-friendly process ensures a smooth enrollment experience.'
    },
    {
        type: "duration",input: 'Course duration?',
        output: 'The course duration at SciAstra varies based on the specific course chosen by the student. Our courses are structured to cover the syllabus comprehensively while ensuring a conducive learning pace.'
    },
    {
        type: "classes",input: 'Faculty at SciAstra?',
        output: 'SciAstra boasts an exceptional faculty comprising experienced and dedicated educators. Our faculty members are committed to providing high-quality education and academic guidance to our students.'
    },
    {
        type: "other",input: 'Modes of learning?',
        output: 'At SciAstra, students can engage in live sessions conducted by instructors or access recorded sessions at their convenience. Both modes ensure flexibility and a personalized learning experience.'
    },
    {
        type: "greeting",
        input: "Hello",
        output: "Hello! How can I assist you today?"
    },
    {
        type: "greeting",
        input: "Hi",
        output: "Hi there! How can I help you?"
    },
    {
        type: "greeting",
        input: "Hey",
        output: "Hey! What can I do for you?"
    },
    {
        type: "greeting",
        input: "How are you?",
        output: "I'm a chatbot, so I'm here to assist you. How can I help?"
    },
    {
        type: "greeting",
        input: "Good morning",
        output: "Good morning! What do you need assistance with today?"
    },
    {
        type: "greeting",
        input: "Good afternoon",
        output: "Good afternoon! How can I assist you?"
    },
    {
        type: "greeting",
        input: "Good evening",
        output: "Good evening! What can I help you with?"
    },
    {
        type: "greeting",
        input: "Hey there",
        output: "Hey! I'm here to help. What do you need?"
    },
    {
        type: "greeting",
        input: "Hola",
        output: "Hola! How can I assist you today?"
    },
    {
        type: "farewell",
        input: "Goodbye",
        output: "Goodbye! Feel free to return if you have more questions."
    },
    {
        type: "farewell",
        input: "Bye",
        output: "Bye! Have a great day!"
    },
    {
        type: "farewell",
        input: "See you later",
        output: "See you later! If you need further assistance, don't hesitate to ask."
    },
    {
        type: "farewell",
        input: "Take care",
        output: "Take care! Feel free to reach out if you need help."
    },
    {
        type: "farewell",
        input: "Later",
        output: "Later! If you have more questions, I'll be here to help."
    },
    {
        type: "farewell",
        input: "Bye-bye",
        output: "Bye-bye! If you need assistance, don't hesitate to return."
    },
    {
        type: "farewell",
        input: "Until we meet again",
        output: "Until we meet again! If you need help, I'll be available."
    }

];


// Training the NLP model with the provided data
trainingData.forEach(item => {
    manager.addDocument('en', item.input, item.type);
    manager.addAnswer('en', item.type, item.output);
});


manager.train(); // Train the model

manager.save('model.nlp', (err) => {
    if (err) {
        console.error('Error while saving model:', err);
    } else {
        console.log('Model saved successfully.');
    }
});

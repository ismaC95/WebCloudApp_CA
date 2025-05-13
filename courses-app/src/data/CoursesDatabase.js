const rawCourses = [
    {
        "id": 2,
        "title": "Advanced Facebook Ads Strategies",
        "description": "Master Facebook ads for high-converting campaigns.",
        "price": "12.99",
        "originalPrice": "29.99",
        "rating": 4.7,
        "no_reviews": 452,
        "duration": "3-6 Hours",
        "modules": 12,
        "level": "Intermediate",
        "image": "/Course_images/marketing2.jpeg",
        "category": "Marketing",
        "intro_video": "https://www.youtube.com/embed/svY6FMr9wJA?si=Tj5xEr97Uv4ukzfv",
        "long_description": "This course explores advanced facebook ads strategies in detail, equipping learners with practical tThis course explores advanced facebook ads strategies in detail, equipping learners with practical This course explores advanced facebook ads strategies in detail, equipping learners with practical ",
        "instructor_id": 9,
        "learning": [
          "Craft compelling ad copy for campaigns",
          "Target audiences using data analytics",
          "Set up and optimize Facebook ad sets",
          "Measure performance with real-time metrics"
        ],
        "modules_list": [
          "Facebook Business Manager Overview",
          "Creating Your First Campaign",
          "Audience Targeting Strategies",
          "Split Testing for Ads",
          "Remarketing Techniques",
          "Analyzing Campaign Results"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 3,
        "title": "SEO Optimization Crash Course",
        "description": "Learn how to optimize websites for Google search rankings.",
        "price": 9.99,
        "originalPrice": 24.99,
        "rating": 3.7,
        "no_reviews": 612,
        "duration": "0-1 Hour",
        "modules": 5,
        "level": "Beginner",
        "image": "/Course_images/marketing3.png",
        "category": "Marketing",
        "intro_video": "https://www.youtube.com/embed/SqcY0GlETPk?si=yfd23PJXSe_4o2Mk",
        "long_description": "This course explores seo optimization crash course in detail, equipping learners with practical tool",
        "instructor_id": 19,
        "learning": [
          "Craft compelling ad copy for campaigns",
          "Target audiences using data analytics",
          "Set up and optimize Facebook ad sets",
          "Measure performance with real-time metrics"
        ],
        "modules_list": [
          "Introduction to SEO",
          "Keyword Research Techniques",
          "On-Page Optimization",
          "Technical SEO Fundamentals",
          "Building Backlinks"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 4,
        "title": "HR Management Essentials",
        "description": "Fundamentals of human resources for new managers.",
        "price": 14.99,
        "originalPrice": 34.99,
        "rating": 4.5,
        "no_reviews": 390,
        "duration": "3-6 Hours",
        "modules": 10,
        "level": "Intermediate",
        "image": "/Course_images/hr1.png",
        "category": "HR",
        "intro_video": "https://www.youtube.com/watch?v=F1kY9ywfFVg",
        "long_description": "This course explores hr management essentials in detail, equipping learners with practical tools and",
        "instructor_id": 17,
        "learning": [
          "Understand modern HR practices",
          "Handle recruitment and selection",
          "Apply performance management techniques",
          "Navigate labor laws and compliance"
        ],
        "modules_list": [
          "HR Management Principles",
          "Recruitment and Selection",
          "Employee Engagement",
          "Compensation Strategies",
          "HR Analytics"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 5,
        "title": "Recruitment and Talent Acquisition",
        "description": "Learn best practices in hiring and retaining top talent.",
        "price": "Free",
        "originalPrice": 14.99,
        "rating": 4.3,
        "no_reviews": 278,
        "duration": "1-3 Hours",
        "modules": 7,
        "level": "Beginner",
        "image": "/Course_images/hr2.png",
        "category": "HR",
        "intro_video": "https://www.youtube.com/watch?v=F1kY9ywfFVg",
        "long_description": "This course explores recruitment and talent acquisition in detail, equipping learners with practical",
        "instructor_id": 7,
        "learning": [
          "Understand modern HR practices",
          "Handle recruitment and selection",
          "Apply performance management techniques",
          "Navigate labor laws and compliance"
        ],
        "modules_list": [
          "HR Management Principles",
          "Recruitment and Selection",
          "Employee Engagement",
          "Compensation Strategies",
          "HR Analytics"
        ],
        "paymentType": "Free"
      },
      {
        "id": 6,
        "title": "Finance for Non-Finance Professionals",
        "description": "Understand financial basics even without a finance background.",
        "price": 19.99,
        "originalPrice": "",
        "rating": 4.8,
        "no_reviews": 743,
        "duration": "3-6 Hours",
        "modules": 15,
        "level": "Intermediate",
        "image": "/Course_images/finance1.png",
        "category": "Finance",
        "intro_video": "https://www.youtube.com/watch?v=I0YgDT7fBqI",
        "long_description": "This course explores finance for non-finance professionals in detail, equipping learners with practi",
        "instructor_id": 3,
        "learning": [
          "Read and interpret financial statements",
          "Build and manage budgets",
          "Understand investment fundamentals",
          "Perform cost-benefit analysis"
        ],
        "modules_list": [
          "Intro to Financial Accounting",
          "Budgeting Basics",
          "Understanding Balance Sheets",
          "Forecasting Techniques",
          "Using Excel for Finance",
          "Evaluating ROI"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 7,
        "title": "Budgeting and Forecasting Fundamentals",
        "description": "Master budgeting techniques for businesses and startups.",
        "price": 7.99,
        "originalPrice": 21.99,
        "rating": 4.5,
        "no_reviews": 331,
        "duration": "1-3 Hours",
        "modules": 6,
        "level": "Beginner",
        "image": "/Course_images/finance2.png",
        "category": "Finance",
        "intro_video": "https://www.youtube.com/watch?v=I0YgDT7fBqI",
        "long_description": "This course explores budgeting and forecasting fundamentals in detail, equipping learners with pract",
        "instructor_id": 20,
        "learning": [
          "Read and interpret financial statements",
          "Build and manage budgets",
          "Understand investment fundamentals",
          "Perform cost-benefit analysis"
        ],
        "modules_list": [
          "Intro to Financial Accounting",
          "Budgeting Basics",
          "Understanding Balance Sheets",
          "Forecasting Techniques",
          "Using Excel for Finance",
          "Evaluating ROI"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 8,
        "title": "Investment Analysis and Portfolio Management",
        "description": "Learn how to analyze investments and manage portfolios effectively.",
        "price": 24.99,
        "originalPrice": 49.99,
        "rating": 4.9,
        "no_reviews": 654,
        "duration": "+6 Hours",
        "modules": 20,
        "level": "Advanced",
        "image": "/Course_images/finance3.png",
        "category": "Finance",
        "intro_video": "https://www.youtube.com/watch?v=vjVazr3xdns",
        "long_description": "This course explores investment analysis and portfolio management in detail, equipping learners with",
        "instructor_id": 17,
        "learning": [
          "Read and interpret financial statements",
          "Build and manage budgets",
          "Understand investment fundamentals",
          "Perform cost-benefit analysis"
        ],
        "modules_list": [
          "Intro to Financial Accounting",
          "Budgeting Basics",
          "Understanding Balance Sheets",
          "Forecasting Techniques",
          "Using Excel for Finance",
          "Evaluating ROI"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 9,
        "title": "Full Stack Web Development Bootcamp",
        "description": "Become a full stack web developer from scratch.",
        "price": 29.99,
        "originalPrice": 79.99,
        "rating": 4.7,
        "no_reviews": 1023,
        "duration": "+6 Hours",
        "modules": 35,
        "level": "Beginner",
        "image": "/Course_images/dev1.png",
        "category": "Software Development",
        "intro_video": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        "long_description": "This course explores full stack web development bootcamp in detail, equipping learners with practica",
        "instructor_id": 17,
        "learning": [
          "Develop responsive web applications",
          "Understand full-stack architecture",
          "Manage REST APIs with Express",
          "Write maintainable code with JavaScript"
        ],
        "modules_list": [
          "HTML, CSS, and JS Fundamentals",
          "Building UIs with React",
          "Server-side with Node.js",
          "Connecting to Databases",
          "Deploying Web Apps"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 10,
        "title": "ReactJS Advanced Patterns",
        "description": "Level up your React skills with real-world patterns.",
        "price": 17.99,
        "originalPrice": 39.99,
        "rating": 4.8,
        "no_reviews": 498,
        "duration": "3-6 Hours",
        "modules": 14,
        "level": "Advanced",
        "image": "/Course_images/dev2.png",
        "category": "Software Development",
        "intro_video": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        "long_description": "This course explores reactjs advanced patterns in detail, equipping learners with practical tools an",
        "instructor_id": 7,
        "learning": [
          "Develop responsive web applications",
          "Understand full-stack architecture",
          "Manage REST APIs with Express",
          "Write maintainable code with JavaScript"
        ],
        "modules_list": [
          "HTML, CSS, and JS Fundamentals",
          "Building UIs with React",
          "Server-side with Node.js",
          "Connecting to Databases",
          "Deploying Web Apps"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 11,
        "title": "Python Programming for Beginners",
        "description": "A gentle introduction to Python programming.",
        "price": "Free",
        "originalPrice": 19.99,
        "rating": 4.5,
        "no_reviews": 932,
        "duration": "1-3 Hours",
        "modules": 10,
        "level": "Beginner",
        "image": "/Course_images/dev3.png",
        "category": "Software Development",
        "intro_video": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        "long_description": "This course explores python programming for beginners in detail, equipping learners with practical t",
        "instructor_id": 9,
        "learning": [
          "Develop responsive web applications",
          "Understand full-stack architecture",
          "Manage REST APIs with Express",
          "Write maintainable code with JavaScript"
        ],
        "modules_list": [
          "Getting Started with Python",
          "Variables and Data Types",
          "Control Structures",
          "Functions and Modules",
          "Basic Projects in Python"
        ],
        "paymentType": "Free"
      },
      {
        "id": 12,
        "title": "SQL Masterclass: From Basics to Advanced",
        "description": "Master SQL databases for data analysis and web apps.",
        "price": 15.99,
        "originalPrice": 35.99,
        "rating": 4.6,
        "no_reviews": 821,
        "duration": "3-6 Hours",
        "modules": 18,
        "level": "Intermediate",
        "image": "/Course_images/data1.png",
        "category": "Data Analytics",
        "intro_video": "https://www.youtube.com/watch?v=nKxLfUrkLE8",
        "long_description": "This course explores sql masterclass: from basics to advanced in detail, equipping learners with pra",
        "instructor_id": 3,
        "learning": [
          "Analyze datasets with SQL and Python",
          "Visualize data with charts and dashboards",
          "Interpret KPIs and business metrics",
          "Use data to drive business decisions"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 13,
        "title": "Excel for Data Analysis",
        "description": "Use Microsoft Excel to perform real-world data analysis.",
        "price": 8.99,
        "originalPrice": 19.99,
        "rating": 4.4,
        "no_reviews": 713,
        "duration": "1-3 Hours",
        "modules": 9,
        "level": "Beginner",
        "image": "/Course_images/data2.png",
        "category": "Data Analytics",
        "intro_video": "https://www.youtube.com/watch?v=nKxLfUrkLE8",
        "long_description": "This course explores excel for data analysis in detail, equipping learners with practical tools and ",
        "instructor_id": 14,
        "learning": [
          "Analyze datasets with SQL and Python",
          "Visualize data with charts and dashboards",
          "Interpret KPIs and business metrics",
          "Use data to drive business decisions"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 14,
        "title": "Introduction to Power BI",
        "description": "Visualize and analyze data using Microsoft Power BI.",
        "price": 11.99,
        "originalPrice": 29.99,
        "rating": 4.7,
        "no_reviews": 489,
        "duration": "3-6 Hours",
        "modules": 13,
        "level": "Intermediate",
        "image": "/Course_images/data3.png",
        "category": "Data Analytics",
        "intro_video": "https://www.youtube.com/watch?v=nKxLfUrkLE8",
        "long_description": "This course explores introduction to power bi in detail, equipping learners with practical tools and",
        "instructor_id": 20,
        "learning": [
          "Analyze datasets with SQL and Python",
          "Visualize data with charts and dashboards",
          "Interpret KPIs and business metrics",
          "Use data to drive business decisions"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 15,
        "title": "Data Visualization with Tableau",
        "description": "Create beautiful dashboards and visualizations with Tableau.",
        "price": "Free",
        "originalPrice": 14.99,
        "rating": 4.5,
        "no_reviews": 577,
        "duration": "1-3 Hours",
        "modules": 7,
        "level": "Beginner",
        "image": "/Course_images/data4.png",
        "category": "Data Analytics",
        "intro_video": "https://www.youtube.com/watch?v=ua-CiDNNj30",
        "long_description": "This course explores data visualization with tableau in detail, equipping learners with practical to",
        "instructor_id": 17,
        "learning": [
          "Analyze datasets with SQL and Python",
          "Visualize data with charts and dashboards",
          "Interpret KPIs and business metrics",
          "Use data to drive business decisions"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Free"
      },
      {
        "id": 16,
        "title": "Mastering Sales Techniques",
        "description": "Close more deals with modern sales techniques.",
        "price": 9.99,
        "originalPrice": 24.99,
        "rating": 4.6,
        "no_reviews": 369,
        "duration": "1-3 Hours",
        "modules": 8,
        "level": "Intermediate",
        "image": "/Course_images/sales1.png",
        "category": "Sales & Customer Success",
        "intro_video": "https://www.youtube.com/watch?v=Q6W7Jg1iaEk",
        "long_description": "This course explores mastering sales techniques in detail, equipping learners with practical tools a",
        "instructor_id": 9,
        "learning": [
          "Build strong customer relationships",
          "Utilize CRM systems effectively",
          "Create sales funnels that convert",
          "Negotiate and close deals efficiently"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 17,
        "title": "Customer Success Foundations",
        "description": "Build lasting customer relationships and drive loyalty.",
        "price": "Free",
        "originalPrice": 17.99,
        "rating": 4.3,
        "no_reviews": 245,
        "duration": "0-1 Hour",
        "modules": 4,
        "level": "Beginner",
        "image": "/Course_images/sales2.png",
        "category": "Sales & Customer Success",
        "intro_video": "https://www.youtube.com/watch?v=Q6W7Jg1iaEk",
        "long_description": "This course explores customer success foundations in detail, equipping learners with practical tools",
        "instructor_id": 3,
        "learning": [
          "Build strong customer relationships",
          "Utilize CRM systems effectively",
          "Create sales funnels that convert",
          "Negotiate and close deals efficiently"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Free"
      },
      {
        "id": 18,
        "title": "B2B Sales Strategies",
        "description": "Win large accounts with proven B2B sales methods.",
        "price": 14.99,
        "originalPrice": 34.99,
        "rating": 4.7,
        "no_reviews": 412,
        "duration": "3-6 Hours",
        "modules": 11,
        "level": "Intermediate",
        "image": "/Course_images/sales3.png",
        "category": "Sales & Customer Success",
        "intro_video": "https://www.youtube.com/watch?v=DhFZzGZg7VA",
        "long_description": "This course explores b2b sales strategies in detail, equipping learners with practical tools and con",
        "instructor_id": 7,
        "learning": [
          "Build strong customer relationships",
          "Utilize CRM systems effectively",
          "Create sales funnels that convert",
          "Negotiate and close deals efficiently"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 19,
        "title": "Cold Email Mastery",
        "description": "How to write emails that get responses and sales.",
        "price": 7.99,
        "originalPrice": 19.99,
        "rating": 4.4,
        "no_reviews": 321,
        "duration": "0-1 Hour",
        "modules": 5,
        "level": "Beginner",
        "image": "/Course_images/sales4.png",
        "category": "Sales & Customer Success",
        "intro_video": "https://www.youtube.com/watch?v=sT6aap5aRvI",
        "long_description": "This course explores cold email mastery in detail, equipping learners with practical tools and conce",
        "instructor_id": 11,
        "learning": [
          "Build strong customer relationships",
          "Utilize CRM systems effectively",
          "Create sales funnels that convert",
          "Negotiate and close deals efficiently"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 20,
        "title": "Agile Project Management for HR Teams",
        "description": "Use Agile methodologies in human resources operations.",
        "price": 12.99,
        "originalPrice": 27.99,
        "rating": 4.5,
        "no_reviews": 210,
        "duration": "1-3 Hours",
        "modules": 6,
        "level": "Intermediate",
        "image": "/Course_images/hr3.png",
        "category": "HR",
        "intro_video": "https://www.youtube.com/watch?v=JvuM37AlrE0",
        "long_description": "This course explores agile project management for hr teams in detail, equipping learners with practi",
        "instructor_id": 5,
        "learning": [
          "Understand modern HR practices",
          "Handle recruitment and selection",
          "Apply performance management techniques",
          "Navigate labor laws and compliance"
        ],
        "modules_list": [
          "HR Management Principles",
          "Recruitment and Selection",
          "Employee Engagement",
          "Compensation Strategies",
          "HR Analytics"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 21,
        "title": "Understanding Financial Statements",
        "description": "Learn how to read and analyze balance sheets and income statements.",
        "price": 9.99,
        "originalPrice": 19.99,
        "rating": 4.4,
        "no_reviews": 372,
        "duration": "1-3 Hours",
        "modules": 8,
        "level": "Beginner",
        "image": "/Course_images/finance4.png",
        "category": "Finance",
        "intro_video": "https://www.youtube.com/watch?v=I0YgDT7fBqI",
        "long_description": "This course explores understanding financial statements in detail, equipping learners with practical",
        "instructor_id": 18,
        "learning": [
          "Read and interpret financial statements",
          "Build and manage budgets",
          "Understand investment fundamentals",
          "Perform cost-benefit analysis"
        ],
        "modules_list": [
          "Intro to Financial Accounting",
          "Budgeting Basics",
          "Understanding Balance Sheets",
          "Forecasting Techniques",
          "Using Excel for Finance",
          "Evaluating ROI"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 22,
        "title": "Building REST APIs with Node.js",
        "description": "Learn to create APIs from scratch using Express and Node.",
        "price": 19.99,
        "originalPrice": 49.99,
        "rating": 4.8,
        "no_reviews": 899,
        "duration": "3-6 Hours",
        "modules": 15,
        "level": "Intermediate",
        "image": "/Course_images/dev4.png",
        "category": "Technology",
        "intro_video": "https://www.youtube.com/watch?v=rJesac0_Ftw",
        "long_description": "This course explores building rest apis with node.js in detail, equipping learners with practical to",
        "instructor_id": 18,
        "learning": [
          "Develop responsive web applications",
          "Understand full-stack architecture",
          "Manage REST APIs with Express",
          "Write maintainable code with JavaScript"
        ],
        "modules_list": [
          "HTML, CSS, and JS Fundamentals",
          "Building UIs with React",
          "Server-side with Node.js",
          "Connecting to Databases",
          "Deploying Web Apps"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 23,
        "title": "Marketing Analytics Essentials",
        "description": "Measure and optimize your marketing campaigns with data.",
        "price": 14.99,
        "originalPrice": 29.99,
        "rating": 4.5,
        "no_reviews": 541,
        "duration": "1-3 Hours",
        "modules": 10,
        "level": "Intermediate",
        "image": "/Course_images/marketing4.png",
        "category": "Marketing",
        "intro_video": "https://www.youtube.com/watch?v=qSqVVswa420",
        "long_description": "This course explores marketing analytics essentials in detail, equipping learners with practical too",
        "instructor_id": 5,
        "learning": [
          "Craft compelling ad copy for campaigns",
          "Target audiences using data analytics",
          "Set up and optimize Facebook ad sets",
          "Measure performance with real-time metrics"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 24,
        "title": "Data Science for Beginners",
        "description": "An introduction to key data science concepts and Python libraries.",
        "price": "Free",
        "originalPrice": 24.99,
        "rating": 4.7,
        "no_reviews": 1021,
        "duration": "3-6 Hours",
        "modules": 17,
        "level": "Beginner",
        "image": "/Course_images/data5.png",
        "category": "Data Analytics",
        "intro_video": "https://www.youtube.com/watch?v=ua-CiDNNj30",
        "long_description": "This course explores data science for beginners in detail, equipping learners with practical tools a",
        "instructor_id": 3,
        "learning": [
          "Analyze datasets with SQL and Python",
          "Visualize data with charts and dashboards",
          "Interpret KPIs and business metrics",
          "Use data to drive business decisions"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Free"
      },
      {
        "id": 25,
        "title": "Negotiation Skills for Sales Professionals",
        "description": "Negotiate better deals and close sales confidently.",
        "price": 8.99,
        "originalPrice": 22.99,
        "rating": 4.6,
        "no_reviews": 418,
        "duration": "1-3 Hours",
        "modules": 7,
        "level": "Intermediate",
        "image": "/Course_images/sales5.png",
        "category": "Sales & Customer Success",
        "intro_video": "https://www.youtube.com/watch?v=DhFZzGZg7VA",
        "long_description": "This course explores negotiation skills for sales professionals in detail, equipping learners with p",
        "instructor_id": 6,
        "learning": [
          "Build strong customer relationships",
          "Utilize CRM systems effectively",
          "Create sales funnels that convert",
          "Negotiate and close deals efficiently"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 26,
        "title": "Performance Management for HR Leaders",
        "description": "Manage employee performance effectively and fairly.",
        "price": 13.99,
        "originalPrice": 29.99,
        "rating": 4.4,
        "no_reviews": 354,
        "duration": "1-3 Hours",
        "modules": 9,
        "level": "Intermediate",
        "image": "/Course_images/hr4.png",
        "category": "HR",
        "intro_video": "https://www.youtube.com/watch?v=vG0tS7gMh_A",
        "long_description": "This course explores performance management for hr leaders in detail, equipping learners with practi",
        "instructor_id": 19,
        "learning": [
          "Understand modern HR practices",
          "Handle recruitment and selection",
          "Apply performance management techniques",
          "Navigate labor laws and compliance"
        ],
        "modules_list": [
          "HR Management Principles",
          "Recruitment and Selection",
          "Employee Engagement",
          "Compensation Strategies",
          "HR Analytics"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 27,
        "title": "Cloud Computing Basics for Developers",
        "description": "Learn the fundamentals of cloud services and deployment.",
        "price": 16.99,
        "originalPrice": 39.99,
        "rating": 4.7,
        "no_reviews": 563,
        "duration": "3-6 Hours",
        "modules": 14,
        "level": "Intermediate",
        "image": "/Course_images/dev5.png",
        "category": "Software Development",
        "intro_video": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        "long_description": "This course explores cloud computing basics for developers in detail, equipping learners with practi",
        "instructor_id": 16,
        "learning": [
          "Develop responsive web applications",
          "Understand full-stack architecture",
          "Manage REST APIs with Express",
          "Write maintainable code with JavaScript"
        ],
        "modules_list": [
          "HTML, CSS, and JS Fundamentals",
          "Building UIs with React",
          "Server-side with Node.js",
          "Connecting to Databases",
          "Deploying Web Apps"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 28,
        "title": "Personal Branding for Sales Success",
        "description": "Build a powerful personal brand to boost your sales career.",
        "price": "Free",
        "originalPrice": 12.99,
        "rating": 4.3,
        "no_reviews": 205,
        "duration": "0-1 Hour",
        "modules": 3,
        "level": "Beginner",
        "image": "/Course_images/sales6.png",
        "category": "Sales & Customer Success",
        "intro_video": "https://www.youtube.com/watch?v=sT6aap5aRvI",
        "long_description": "This course explores personal branding for sales success in detail, equipping learners with practica",
        "instructor_id": 4,
        "learning": [
          "Build strong customer relationships",
          "Utilize CRM systems effectively",
          "Create sales funnels that convert",
          "Negotiate and close deals efficiently"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Free"
      },
      {
        "id": 29,
        "title": "Intro to Data Mining",
        "description": "Explore the basics of extracting insights from large datasets.",
        "price": 11.99,
        "originalPrice": 27.99,
        "rating": 4.6,
        "no_reviews": 477,
        "duration": "3-6 Hours",
        "modules": 12,
        "level": "Intermediate",
        "image": "/Course_images/data6.png",
        "category": "Data Analytics",
        "intro_video": "https://www.youtube.com/watch?v=2zKjWnMtwvs",
        "long_description": "This course explores intro to data mining in detail, equipping learners with practical tools and con",
        "instructor_id": 15,
        "learning": [
          "Analyze datasets with SQL and Python",
          "Visualize data with charts and dashboards",
          "Interpret KPIs and business metrics",
          "Use data to drive business decisions"
        ],
        "modules_list": [
          "Course Introduction",
          "Core Concepts",
          "Practical Application",
          "Advanced Strategies",
          "Case Studies"
        ],
        "paymentType": "Paid"
      },
      {
        "id": 30,
        "title": "Financial Modeling with Excel",
        "description": "Build powerful financial models with Excel spreadsheets.",
        "price": 18.99,
        "originalPrice": 39.99,
        "rating": 4.8,
        "no_reviews": 671,
        "duration": "+6 Hours",
        "modules": 22,
        "level": "Advanced",
        "image": "/Course_images/finance5.png",
        "category": "Finance",
        "intro_video": "https://www.youtube.com/watch?v=vjVazr3xdns",
        "long_description": "This course explores financial modeling with excel in detail, equipping learners with practical tool",
        "instructor_id": 15,
        "learning": [
          "Read and interpret financial statements",
          "Build and manage budgets",
          "Understand investment fundamentals",
          "Perform cost-benefit analysis"
        ],
        "modules_list": [
          "Intro to Financial Accounting",
          "Budgeting Basics",
          "Understanding Balance Sheets",
          "Forecasting Techniques",
          "Using Excel for Finance",
          "Evaluating ROI"
        ],
        "paymentType": "Paid"
      }
      ];

const courses = rawCourses.map(course => ({
    ...course,
    paymentType: course.price == "Free" ? "Free" : "Paid",
    reviews: course.no_reviews
}))

export default courses;
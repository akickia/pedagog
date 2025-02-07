#Project: Fråga pedagogen

##Background
As a former preschool teacher with a passion for accessibility and democracy, I came up with this idea to answer everyday questions people might have about preschool.
###Purpose:
To make preschool easier to understand and, in doing so, perhaps reduce the workload for employees, as well as improve accessibility for those who feel alienated from the preschool system.
###Target audience:
Parents with questions about how preschool works and why certain methods are used.

##Techniques
###Techstack:
For this project, I've been using React with Vite and TypeScript. I wanted to practice my TypeScript skills, and React with Vite is the framework I'm most proficient in.

Other packages used:
*axios (for fetching data)
*react-router-dom (for routing)
\*jsonwebtoken (for authentication)
For the backend, I use AWS with Serverless Webpack, which is stored in a separate (non-public) repository for security reasons.

##Features/future improvements:
Users can se questions and answers, and send in their own question. There will be a feature to report a question if the user finds the answer to be incorrect. Teachers will be able to login and see unanswered/unverified questions and give an answer. The answer will need to be verified by a second teacher in order to show at the public page. The page is still very much a work in progress.

Note:
For authorization I will use cookies - will not work in development because of Secure and SameSite. Currently using localStorage

export default  [
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        "name": "Book Recommend",
        "desc": "An AI tool that suggests personalized book recommendations based on genre, mood, and previous reads.",
        "category": "Books / Literature",
        "icon": "https://cdn-icons-png.flaticon.com/128/3771/3771417.png",
        "slug": "book-recommendation-generator",
        "aiPrompt": "Generate a book recommendation based on the provided genre, mood, and previous books. Include a brief summary of the book.",
        "form": [
            {
                "label": "Select a genre",
                "field": "dropdown",
                "name": "genre",
                "options": ["Fiction", "Non-Fiction", "Self-Help", "Science Fiction", "Fantasy", "Thriller", "Biography"],
                "required": true
            },
            {
                "label": "What mood are you in?",
                "field": "dropdown",
                "name": "mood",
                "options": ["None","Adventurous", "Relaxed", "Thoughtful", "Romantic", "Mysterious"],
                "required": true
            },
            {
                "label": "What was the last book you enjoyed? (optional)",
                "field": "textarea",
                "name": "previousBook",
                "required": false
            }
        ]
    }
    ,
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9623/9623631.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate copyright free Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that sparks creativity by generating unique, relevant blog topic ideas for any niche, helping you get started with engaging content.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/16117/16117845.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },    
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that helps you craft high-ranking, SEO-optimized YouTube titles to boost visibility and attract more viewers to your videos.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/470/470699.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only based on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter YouTube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that generates concise, engaging YouTube descriptions with emojis, making your content more attractive and SEO-friendly.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2522/2522673.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate YouTube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that generates optimized YouTube tags to enhance video discoverability and improve search rankings.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 YouTube tags in bullet points based on title and outline in rich text editor format',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter YouTube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },    
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/10817/10817310.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/3242/3242257.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },

    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/868/868786.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user code description write a code and give output in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },


    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/3462/3462067.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/4129/4129528.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },

    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },

    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },

    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },


    {
        name: 'Rewrite Plagiarism Free',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
    name: 'Info Generator',
    desc: 'An AI tool that generates structured information or summaries on a given topic, making it easier to understand and use.',
    category: 'Productivity / Knowledge',
    icon: 'https://cdn-icons-png.flaticon.com/128/6592/6592963.png', 
    slug: 'info-generator',
    aiPrompt: 'Generate a structured summary or detailed overview on the given topic. Provide key points, important details, and relevant information in a clear and organized manner.',
    form: [
        {
            label: 'Enter the topic you need information on',
            field: 'input',
            name: 'topic',
            required: true
        },
        {
            label: 'Enter any additional details or context that should be included (optional)',
            field: 'textarea',
            name: 'details'
        },

    ]
},

{
    "name": "Workout Plan Generator",
    "desc": "An AI tool that generates a personalized workout plan based on user preferences such as goal, workout location, available equipment, and personal details.",
    "category": "Fitness",
    "icon": "https://cdn-icons-png.flaticon.com/128/2548/2548532.png",
    "aiPrompt": "Generate a personalized workout plan based on the user's age, height, weight, goal, preferred workout location (home or gym), available equipment, workout duration, workout intensity, and frequency. The result should include exercises, sets, reps, and a brief description tailored to the user's specific needs.",
    "slug": "generate-workout-plan",
    "form": [
        {
            "label": "Age",
            "field": "number",
            "name": "age",
            "placeholder": "Enter your age"
        },
        {
            "label": "Height (cm)",
            "field": "number",
            "name": "height",
            "placeholder": "Enter your height in cm"
        },
        {
            "label": "Weight (kg)",
            "field": "number",
            "name": "weight",
            "placeholder": "Enter your weight in kg"
        },
        {
            "label": "Select workout goal",
            "field": "dropdown",
            "name": "goal",
            "options": ["Weight Loss", "Muscle Gain", "Endurance", "Flexibility"]
        },
        {
            "label": "Select workout location",
            "field": "select",
            "name": "location",
            "options": ["Home", "Gym"]
        },
        {
            "label": "Select available equipment (for home workout)",
            "field": "checkbox",
            "name": "equipment",
            "options": ["None", "Dumbbells", "Resistance Bands", "Kettlebell", "Yoga Mat"]
        },
        {
            "label": "Workout duration (minutes)",
            "field": "number",
            "name": "duration",
            "placeholder": "Enter workout duration in minutes"
        },
        {
            "label": "Workout intensity",
            "field": "dropdown",
            "name": "intensity",
            "options": ["Low", "Moderate", "High"]
        },
        {
            "label": "Days per week",
            "field": "number",
            "name": "days",
            "placeholder": "Enter number of workout days per week"
        },
        {
            "label": "Describe your specific needs",
            "field": "textarea",
            "name": "description",
            "placeholder": "Enter any specific needs or preferences here"
        }
    ]
},
{
    name: 'Trend Report Generator',
    desc: 'An AI tool to generate comprehensive trend reports based on current market trends and industry insights.',
    category: 'Market Research',
    icon: 'https://cdn-icons-png.flaticon.com/128/3121/3121768.png',
    aiPrompt: 'Generate a detailed trend report based on current market trends and industry insights in a professional format.',
    slug: 'generate-trend-report',
    form: [
        {
            label: 'Enter industry or market',
            field: 'input',
            name: 'industry',
            required: true
        },
        {
            label: 'Enter report focus area',
            field: 'select',
            name: 'focusArea',
            options: ['Consumer Behavior', 'Technology Trends', 'Economic Factors', 'Competitive Analysis']
        }
    ]
},
{
    name: 'Resume Builder',
    desc: 'An AI tool to create professional resumes based on user details and career objectives.',
    category: 'Career Development',
    icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
    aiPrompt: 'Generate a professional resume based on the provided user details and career objectives in a structured format.',
    slug: 'generate-resume',
    form: [
        {
            label: 'Enter your name',
            field: 'input',
            name: 'name',
            required: true
        },
        {
            label: 'Enter your contact information',
            field: 'input',
            name: 'contactInfo',
            required: true
        },
        {
            label: 'Enter your career objective',
            field: 'textarea',
            name: 'objective',
            required: true
        },
        {
            label: 'Enter your work experience',
            field: 'textarea',
            name: 'experience'
        },
        {
            label: 'Enter your education details',
            field: 'textarea',
            name: 'education'
        }
    ]
},
{
    "name": "Movie Overview Generator",
    "desc": "An AI tool that generates detailed overviews or summaries of movies, including plot, characters, genre, and other relevant details.",
    "category": "Entertainment / Movies",
    "icon": "https://cdn-icons-png.flaticon.com/128/777/777242.png",
    "slug": "movie-overview-generator",
    "aiPrompt": "Generate a detailed overview of the given movie. Include the plot summary, key characters, genre, release date, and any additional interesting details.",
    "form": [
        {
            "label": "Enter the movie title",
            "field": "input",
            "name": "movieTitle",
            "required": true
        },
        {
            "label": "Select the genre of the movie",
            "field": "dropdown",
            "name": "genre",
            "options": ["None","Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Fantasy", "Thriller", "Documentary"],
            "required": true
        },
        {
            "label": "Enter any additional context or details (optional)",
            "field": "textarea",
            "name": "details"
        }
    ]
},
{
    "name": "Movie Review Generator",
    "desc": "An AI tool that helps generate a comprehensive movie review based on a user's experience or given feedback.",
    "category": "Entertainment / Reviews",
    "icon": "https://cdn-icons-png.flaticon.com/128/5641/5641570.png",
    "slug": "movie-review-generator",
    "aiPrompt": "Generate a detailed movie review based on the given inputs. Include feedback on the plot, acting, cinematography, and overall experience.",
    "form": [
        {
            "label": "Enter the movie title",
            "field": "input",
            "name": "movieTitle",
            "required": true
        },
        {
            "label": "Rate the movie out of 10",
            "field": "number",
            "name": "rating",
            "min": 1,
            "max": 10,
            "required": true
        },
        {
            "label": "Enter your review (thoughts, feedback, highlights)",
            "field": "textarea",
            "name": "reviewText",
            "required": true
        }
    ]
},
{
    "name": "Book Summary Generator",
    "desc": "An AI tool that generates concise and insightful summaries of books based on the provided title, author, and themes.",
    "category": "Books / Literature",
    "icon": "https://cdn-icons-png.flaticon.com/128/2436/2436702.png",
    "slug": "book-summary-generator",
    "aiPrompt": "Generate a concise summary of the book titled '{title}' by {author}. Include key themes, main characters, and important plot points. Emphasize any specific aspects mentioned.",
    "form": [
        {
            "label": "Enter the book title",
            "field": "input",
            "name": "title",
            "required": true
        },
        {
            "label": "Enter the author's name",
            "field": "input",
            "name": "author",
            "required": true
        },
        {
            "label": "Specify any themes or aspects you want to focus on (optional)",
            "field": "textarea",
            "name": "themes",
            "required": false
        }
    ]
},
{
    "name": "Travel Itinerary Generator",
    "desc": "An AI tool that creates custom travel itineraries based on your location, budget, and interests.",
    "category": "Travel / Planning",
    "icon": "https://cdn-icons-png.flaticon.com/128/826/826070.png",
    "slug": "travel-itinerary-generator",
    "aiPrompt": "Generate a detailed travel itinerary for the given location. Include recommendations for activities, places to visit, and travel tips based on the user's preferences.",
    "form": [
        {
            "label": "Enter the destination",
            "field": "input",
            "name": "destination",
            "required": true
        },
        {
            "label": "What is your budget for the trip?",
            "field": "input",
            "name": "budget",
            "required": true
        },
        {
            "label": "What are your interests? (e.g., sightseeing, adventure, relaxation)",
            "field": "textarea",
            "name": "interests",
            "required": true
        },
        {
            "label": "Enter your travel dates (optional)",
            "field": "input",
            "name": "travelDates",
            "required": false
        }
    ]
},
{
    "name": "Movie Sequel Idea Generator",
    "desc": "An AI tool that generates creative sequel ideas for a movie, based on its plot, characters, and themes.",
    "category": "Entertainment / Creativity",
    "icon": "https://cdn-icons-png.flaticon.com/128/3874/3874020.png",
    "slug": "sequel-idea-generator",
    "aiPrompt": "Generate a creative and engaging sequel idea for the given movie. Build on the characters, plot, and themes, while introducing new elements.",
    "form": [
        {
            "label": "Enter the movie title",
            "field": "input",
            "name": "movieTitle",
            "required": true
        },
        {
            "label": "Enter the plot summary of the original movie",
            "field": "textarea",
            "name": "originalPlot",
            "required": true
        },
        {
            "label": "What direction would you like the sequel to go in? (optional)",
            "field": "textarea",
            "name": "sequelDirection",
            "required": false
        }
    ]
},
{
    "name": "Movie/Series Suggestion Generator",
    "desc": "An AI tool that provides movie or TV series recommendations based on the user's preferences, mood, or previously liked content.",
    "category": "Entertainment / Recommendations",
    "icon": "https://cdn-icons-png.flaticon.com/128/2504/2504929.png",
    "slug": "movie-series-suggestion-generator",
    "aiPrompt": "Generate a list of movies or TV series that match the given preferences. Consider the genre, mood, and any favorite shows or films provided. Include a brief description of each recommendation.",
    "form": [
        {
            "label": "Enter your preferred genre(s)",
            "field": "dropdown",
            "name": "genres",
            "options": ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Fantasy", "Thriller", "Documentary"],
            "required": true
        },
        {
            "label": "What type of content are you looking for?",
            "field": "dropdown",
            "name": "contentType",
            "options": ["Movie", "Series", "Both"],
            "required": true
        },
        {
            "label": "Enter any specific movies or series you enjoyed (optional)",
            "field": "textarea",
            "name": "favoriteContent",
            "required": false
        },
        {
            "label": "What mood are you in? (optional)",
            "field": "dropdown",
            "name": "mood",
            "options": ["None","Excited", "Relaxed", "In the mood for something emotional", "Looking for a thrill", "Mind-bending", "Laughing out loud"],
            "required": false
        },
        {
            "label": "Would you like recommendations from a specific year or range? (optional)",
            "field": "input",
            "name": "yearRange",
            "required": false
        }
    ]
},
{
    "name": "Dream Interpretation Generator",
    "desc": "An AI tool that interprets your dreams based on the symbols, themes, and emotions you describe.",
    "category": "Mysticism / Psychology",
    "icon": "https://cdn-icons-png.flaticon.com/128/12321/12321106.png",
    "slug": "dream-interpretation-generator",
    "aiPrompt": "Interpret the dream based on the symbols, themes, and emotions provided. Offer insights and possible meanings.",
    "form": [
        {
            "label": "Describe your dream",
            "field": "textarea",
            "name": "dreamDescription",
            "required": true
        },
        {
            "label": "Select the primary emotion felt during the dream",
            "field": "dropdown",
            "name": "emotion",
            "options": ["None","Fear", "Happiness", "Confusion", "Sadness", "Excitement"],
            "required": true
        },
        {
            "label": "Were there any standout symbols or objects? (optional)",
            "field": "textarea",
            "name": "symbols",
            "required": false
        }
    ]
},
{
    "name": "Motivational Quote Generator",
    "desc": "An AI tool that generates inspirational quotes based on themes such as success, perseverance, or personal growth.",
    "category": "Inspiration / Motivation",
    "icon": "https://cdn-icons-png.flaticon.com/128/3989/3989573.png",
    "slug": "motivational-quote-generator",
    "aiPrompt": "Generate a motivational quote based on the provided theme. The quote should be inspiring and meaningful.",
    "form": [
        {
            "label": "Select the theme",
            "field": "dropdown",
            "name": "theme",
            "options": ["None","Success", "Perseverance", "Personal Growth", "Overcoming Challenges", "Happiness", "Positivity"],
            "required": true
        },
        {
            "label": "Add any additional context or message you'd like to include (optional)",
            "field": "textarea",
            "name": "additionalContext",
            "required": false
        }
    ]
},
{
    name: 'Creative Writing Prompts Generator',
    desc: 'An AI tool to generate creative writing prompts based on genre and theme preferences to spark inspiration for writing projects.',
    category: 'Creative Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/3749/3749896.png',
    aiPrompt: 'Generate creative writing prompts based on the provided genre and theme preferences to inspire and guide writing projects.',
    slug: 'generate-writing-prompts',
    form: [
        {
            label: 'Enter preferred genre',
            field: 'select',
            name: 'genre',
            options: ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Horror'],
            required: true
        },
        {
            label: 'Enter theme preferences',
            field: 'textarea',
            name: 'theme'
        },
        {
            label: 'Select prompt length',
            field: 'select',
            name: 'length',
            options: ['Short', 'Medium', 'Long']
        }
    ]
},
{
    name: 'Career Path Exploration Guide',
    desc: 'An AI tool to explore and plan career paths based on interests, skills, and long-term goals.',
    category: 'Career Development',
    icon: 'https://cdn-icons-png.flaticon.com/128/2452/2452163.png',
    aiPrompt: 'Generate a detailed career exploration guide based on the provided interests, skills, and long-term goals to help navigate career options and opportunities.',
    slug: 'generate-career-path-guide',
    form: [
        {
            label: 'Enter interests',
            field: 'textarea',
            name: 'interests',
            required: true
        },
        {
            label: 'Enter skills and qualifications',
            field: 'textarea',
            name: 'skills',
            required: true
        },
        {
            label: 'Enter long-term career goals',
            field: 'textarea',
            name: 'goals'
        },
        {
            label: 'Select preferred industries',
            field: 'checkbox',
            name: 'industries',
            options: ['Technology', 'Healthcare', 'Finance', 'Education', 'Creative Arts']
        }
    ]
},

{
    name: 'Virtual Event Host Script Generator',
    desc: 'An AI tool to create scripts for hosting virtual events based on event type, agenda, and audience engagement strategies.',
    category: 'Event Management',
    icon: 'https://cdn-icons-png.flaticon.com/128/1376/1376508.png',
    aiPrompt: 'Generate a detailed host script for a virtual event based on the provided event type, agenda, and audience engagement strategies to ensure a smooth and engaging event.',
    slug: 'generate-event-host-script',
    form: [
        {
            label: 'Enter event type',
            field: 'select',
            name: 'eventType',
            options: ['Webinar', 'Workshop', 'Panel Discussion', 'Networking Event'],
            required: true
        },
        {
            label: 'Enter event agenda',
            field: 'textarea',
            name: 'agenda',
            required: true
        },
        {
            label: 'Enter audience engagement strategies',
            field: 'textarea',
            name: 'engagementStrategies'
        },
        {
            label: 'Select key sections',
            field: 'checkbox',
            name: 'sections',
            options: ['Introduction', 'Agenda Overview', 'Main Content', 'Q&A Session', 'Closing Remarks']
        }
    ]
},
{
    "name": "Question Builder",
    "desc": "An AI tool to create customized question sets based on topic, difficulty level, and target audience, ideal for quizzes, surveys, and study material.",
    "category": "Education & Assessment",
    "icon": "https://cdn-icons-png.flaticon.com/128/4858/4858469.png",
    "aiPrompt": "Generate a set of questions based on the provided topic, difficulty level, and target audience to help create engaging quizzes, surveys, or study materials.",
    "slug": "generate-question-set",
    "form": [
        {
            "label": "Enter topic",
            "field": "input",
            "name": "topic",
            "required": true
        },
        {
            "label": "Select difficulty level",
            "field": "select",
            "name": "difficulty",
            "options": ["Easy", "Medium", "Hard"],
            "required": true
        },
        {
            "label": "Enter target audience",
            "field": "text",
            "name": "audience",
            "required": true
        },
        {
            "label": "Select question type",
            "field": "checkbox",
            "name": "questionType",
            "options": ["Multiple Choice", "True/False", "Short Answer", "Essay"]
        },
        {
            "label": "Enter number of questions",
            "field": "number",
            "name": "questionCount",
            "required": true
        }
    ]
}


]
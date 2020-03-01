# Virtusa_Training_Project: Online Information Protal

## TEAM 3:
 1. Sai Sampath Kumar Raigiri
 2. Amrutha Naidu
 3. Akhila Pericherla

## Project Responsibilities:
 1. Assessments Module
 2. Video Content Module

## Required Stuff:
 1. Reset.css
 2. Db.Json
 3. Scss files  
  
## Assessment Component

![Image of Assessment Page](https://github.com/saisampathkumar/Virtusa_Training_Project/blob/master/Assessment.png)

![Image of Assessment questions page](https://github.com/saisampathkumar/Virtusa_Training_Project/blob/master/Assessment%20questions%20sample.png)

## Video Component

![Image of Video Page](https://github.com/saisampathkumar/Virtusa_Training_Project/blob/master/Video.png)

![Image of Video playing page](https://github.com/saisampathkumar/Virtusa_Training_Project/blob/master/Video%20Page.png)

## DB.JSON File Samples:
 ```
 {
    "assessment": [{ }],
    "video": [{ }],
    "Articles":[{ }],
    "Links":[{ }],
    "Accounts":[{ }],
    "Flash Cards":[{ }]
}
```

## DB.JSON File including sample Assessment and Video Component Data:

```
{
    "assessment": [
        { "angular": [
            { "q1": "Question 1" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "q2": "Question 2" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]}, 
            { "q3": "Question 3" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "ans": ["ans1", "ans2", "ans3"] }
        ] },
        { "node": [
            { "q1": "Question 1" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "q2": "Question 2" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ] },
            { "q3": "Question 3" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "ans": ["ans1", "ans2", "ans3"] }
        ] },
        { "javascript": [
            { "q1": "Question 1" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "q2": "Question 2" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "q3": "Question 3" , "options" : [
                {"o1" : "option1"},
                {"o2" : "option2"},
                {"o3" : "option3"},
                {"o4" : "option4"}
                ]},
            { "ans": ["ans1", "ans2", "ans3"] }
        ] }
    ],
    "video": [
        { "angular": [
            { "id": 1, "title": "Introduction", "url": "https://youtu.be/0eWrpsCLMJQ" },
            { "id": 2, "title": "Components", "url": "https://youtu.be/16rQyEQtpyQ" },
            { "id": 3, "title": "Interpolation", "url": "https://youtu.be/2a6OfacW_-I" }
        ] },
        { "node": [
            { "id": 1, "title": "Introduction", "url": "https://youtu.be/w-7RQ46RgxU" },
            { "id": 2, "title": "Installing Node JS", "url": "https://youtu.be/1US-P13yKVs" },
            { "id": 3, "title": "The Global Object", "url": "https://youtu.be/PY-AycMkEAg" }
        ] },
        { "javascript": [
            { "id": 1, "title": "Introduction", "url": "https://youtu.be/uDwSnnhl1Ng" },
            { "id": 2, "title": "Variables & Data Types", "url": "https://youtu.be/Hrd3SfCCXZw" },
            { "id": 3, "title": "Operators", "url": "https://youtu.be/ULNJSTSJc7s" }
        ] }
    ]
}
```



## Need to be Decided:
- Template Form or Reactive Form

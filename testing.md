## **Testing**

### **Automated Testing**

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

* [W3C Markup Validator] (https://validator.w3.org/) 
* [W3C CSS Validator] (https://jigsaw.w3.org/css-validator/)


### Lighthouse score

The lighthouse score in google chrome developer tools was used for each section of the site. 



## **Testing User Stories from User Experience (UX) Section**


As a user of this site, I want:

1. An uncomplicated user interface which allows quick and intuitive interaction.
    * The design of the site allows for simple navigation from one section to the next all via clearly defined and contrasted buttons. 
    * The user can start the quiz through just one click.
    * Answers are chosen by click only, allowing the user to go through the questions as quickly as they like without worrying about typing, spelling etc.

2. Clear and easy to understand feedback.
    * The user receives instant feedback for each question by a green background on the correct answer and a red background on the selected incorrect answer.
    * The user also sees the score instantly update and flash green every time they get an answer correct.
    * Once the quiz has been completed the users score is prominently displayed along with any errors they have made.

3. The option to play a quiz that is suited to my knowledge level.
    * The user has the chance to choose from three levels, easy, medium and difficult and does not have to play them in any order and is free to choose between them.
    
4. Recognition of my positive achievements.
    * The user is given the opportunity to save their score along with their name to add to the high score table where they can compare with other users or their previous scores. 
    * The user is rewarded for choosing a harder difficulty by achieving higher points for correctly guessing less well-recognised flags. 

5. Encouragement to continue playing in order to get better. 
    * In game feedback is given when the user chooses an incorrect answer as well as a visual summary of all the flag the user di not guess correctly, allowing them to make a mental note of any new or unfamilar flags for them. 
    * Within a couple of clicks a user can restart a brand new game, and althought the flags stay the same for each difficulty level, they will never appear in same order or with the same answer options allowing a unique experince no matter how many times they play the game. 

### **Browser Compatibility**

The Website was tested on Google Chrome , Internet Explorer, Microsoft Edge and Safari browsers.

### **Devices**

The website was designed on a MacBook Pro Laptop using a thunderbolt display and was tested on the following devices
* iPhone X 
* iPhone
* iPad 3
 

## **Manual Testing Procedure**

All steps were taken on Google Chrome, Firefox, Safari and Internet Explorer on a Thunderbolt Display at two different desktop screen resolutions and subsequently an iPhone X screen, iPad 3, and iPhone 6.

## **Elements on each page**

### **Homepage**



1. Layout
    * Check button arrangment is horizontal on desktop / laptop and table screen size
    * Check button arrangment is vertical on mobile screen. 
    * Check all text is clear and easy to read on different screen sizes.
2. Buttons
    * Hover over each button to check effect works.
    * Click 'Easy' button to ensure it initialises a game with flags from the 'easy' category.
    * Click 'Medium' button to ensure it initialises a game with flags from the 'easy' category.
    * Click 'Difficult' button to ensure it initialises a game with flags from the 'easy' category.

### **Quiz Section**

**All testing steps were taken for 'easy', 'medium' and 'difficult' games**

1. Header
    * Check that question count starts at 1 and increases each time a question is selected
    * Check that score starts at 0 and increases each time a correct answer is selected. 
    * Check that score animation works each time a correct answer is selected.
    * Check that timer starts at 30 seconds and decreases as game is played.
    * Check that timer animation starts when it reaches 10 seconds.
    * Check that game finishes when timer reaches zero.
    * Click on the close game button to check that close game modal appears.
    * Check that timer is paused upon clicking the close game button.
    * Check that timer resumes at correct time when modal is closed or dismissed. 

2. Close Quiz Modal
    * Check text is clear and readable on multiple device sizes.
    * Click 'Yes button to check that the user is successfully brought back to the homepage.
    * Click 'No' button to check that user is successfully brought back to the quiz.
    * Click the 'X' close button on the modal to check that user is successfully brought back to the quiz.     

3. Flag 
    * Check that flag appears successfully for each question.
    * Check that each flag is unique and there are no repeated flags.
    * Check that flag is easy to see and stands out against the background. 
    * Check that flag is 80px max height for small devices.
    * Check that flag is 120px max height for medium devices.   
    * Check that flag is **320px max width** for large deivces.

4. Answer Buttons
    * Check buttons are always aligned and arranged in two horizontal pairs. 
    * Check that for each question there are four unique country names with no repeats. 
    * Hover over each button to check effect is working.
    * Click on correct answer to check button changes to green and next question appears after 1 second.
    * Click on an incorrect answer to check button changes to red and the correct answer changes colour to red and next question appears after 1 second.    
    
### **Score Page**   

5. User feedback   
    * Check that the correct score is displayed.
    * Check that the correct question count and correct answer count is displayed. 
    * Check that no error message is displayed when all questions have been answered correctly or when no questions have been answered.
    * Check that **the correct message** is displayed to the user with the score total and question total. 
    * CHeck that error message is displayed when mistakes are made.
    * Check that the error flags displayed match the mistakes made in the quiz.
    **insert screenshot**

6. Buttons
    * Hover over 'Save Score' button to check effect is working. 
    * Check that 'Save Score' button launches the save score modal.
    * Hover over 'Play Again' button to check effect is working. 
    * Check that 'Play Again' button takes user back to the homepage.
    * **Are you sure you want leave**

7. Save Score Modal
    * Check text is clear and readable on multiple device sizes.
    * Enter name and click 'Save' button to check that the modal closes, the highscore table is displayed showing the user's details are **highlighted** and the save score button is hidden. 
    * Leave name field blank and click 'Save' button to check that the modal closes, the highscore table is displayed and user's details are saved under the name 'Anonymous" and the save score button is hidden. 
    * **Check that user is unable to save a score of zero.**
    * Click 'Quit' button to check that user is successfully brought back to the scorepage.
    * Click the 'X' close button on the modal to check that user is successfully brought back to the scorepage.

8. **High Score Table**
    * Check that table is displayed once score has been saved and can be read clearly on all relevent device sizes. 
    * Check that the last user's score is **both present as well as highlighted** in the table. 
    * CHeck that table is arranged from highest score to lowest score after each update. 
    * Click on 'Play Again' button to check that it takes user back to the homepage. 


## **Bugs**

### Solved Issues


1. Flag Size Issues on different devices max heigh max-wdith    





2. Empty Answer Slot 


3. Issues with saving scores in local storage(Unsolved!!!)


4. Building bootstrap figures in JS -0 appendchild issue


5. 


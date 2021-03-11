# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Richard Nguyen**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/held-daffy-pen

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

None

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge for me was trying to figure out the game logic. At first, there were small cases I did not account for when I created the guess function.
Things like the colors playing twice when it wasn't supposed to or ending the game too early. I believe it had to do with how I initially set up
the if statements to go through the game. Somewhere in there, it would read one if statement and since I didn't properly set up successive if statements
it would go into another if statement it shouldn't have. I overcame this by slowly playing the game, and manually stepping through each line of code 
whenever I played my turn. After a couple of times, that's when the realization that the code goes into two if statements it shouldn't have came to me.

Other than that, I didn't have any big challenges. Most problems came from minor issues like a typo in the Javascript, or another specific one, was
forgetting to reset the mistakes counter on start of the game. I had the counter update properly when you made a mistake, but after the game ended and
you started another game, it stayed at 3. This was a mistake on updating the innerHTML. I needed to reupdate it on start so that it would show 0 again.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One specific question is how to effectivly organize things like the CSS file. I feel like it can get pretty messy fast, especially 
when you have a lot of individual IDs and classes. 
I'm extremely curious about React, Node, Heroku, and AWS. I've seen them a lot in web developement and 
even have tried my hand at React just a tiny bit. I think they're really cool, and important tools to know how to use to create wonderful websites.
If I were to have a specific question regarding these things, including all the other technologies I didnt list like MongoDB, it would be how to properly
utilize all of these things together. It always seemed a bit confusing on how to use everything together, and what EXACTLY does what. I could only get a
general understanding, but never anything too deep. I would be really excited to learn more all about this, especially hands on in a professional environment.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a lot more time, I would be interested in adding difficulty levels. More buttons to a different function that would vary the timers on the
clue wait times and pause times. Another thing would be trying to create a fancier win game or lose game notification. Instead of a small default pop up,
I would want a cleaner rectangle appear in the middle of the screen, with bigger font size and color. A more proper "You have lost/won". Along with that
I could just add in a total mistakes made in that playthrough at the bottom of that win/lose game notification. There could be other modes where you have to
memorize the sound only, with no colors. Of course in that, I would probably change the sounds so each button could be more distinct from the other so it's easy
to differientiate. Overall, adjustments like colors, images, headers, CSS changes in general is what I'd make if I had more time. 


## License

    Copyright Richard Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
# CS463 Final Project - Progress Journal

## Day one

Day one consisted largely of setting up the structural elements of the project and making an initial plan for which tasks to be begin first. I am using the "Projects" functionality on the GitHub website with a simple Kanban board for tracking progress and adding new to-do items for the project. The following structures were implemented on day one:

- Github repository directory structure
- index.html initialization
- color palatte selection
- global color styles css initialization
- styles.css intialization
- Navbar added with initial styling
- "About", "Projects", "Previous Work", and "Contact" sections added

### Github repository structure

I wanted use accepted standards to structure the repository, as well as use my own workflow conventions to build in modularity and organization. As this is my first time building a web project from scratch, I wanted to ensure that I was starting off on the right foot.

### Index.html initialization

I started with a barebones html structure, ensuring that all necessary metadata was included in the page head. This structure will obviously be expanded as the project progresses.

### Color palatte selection

As I don't have much experience in the way of design principles, I chose to use coolors.co to assist in choosing a color palatte. I chose to use 4 colors, where three of the colors were the main colors for the design with a fourth to add for contrast if needed.

### Global color style css initialization

I had seen this concept used in our lab notebooks, and I really appreciate using aliases for color names instead of raw hex values, and also wanted to have some modularity to easily change colors globally if needed.

### Styles.css intialization

best way to record a video with application in background discord
This was a barebones implementation of the css styling to begin the day, and was expanded as I added the navbar functionality and began work on the "About" section. I am still quite new to this, so I'm learning as I progress, and will have to clean up some code later for readibility, but at present my primary goal is functionality.

### Navbar initialization

This was the part of the project that took up the majority of my work time on day one. I wanted a strong base for the site that would give me some solid styles to reference as my work with this project continues. I used a YouTube tutorial for this section ([navbar tutorial](https://www.youtube.com/watch?v=Og-YEeCTE7A)). This particular navbar includes responsiveness and some minor animations, and I used it primarily as a confidence booster. Currently, the code is mostly from the tutorial, and I have add some of my own styling. My plan is to expand on this code and make it reflect more of my own coding style, as well as adjust some elements.

### "About", "Projects", "Previous Work", and "Contact" sections initialized

This portion was barebones to start: I mostly wanted to just get them on the page, but I did begin some more serious work on the "About" section. While the navbar was done mostly using a tutorial, I wanted this section to focus on using mostly MDN documnentation and small snippets of tutorials, rather than a tutorial for a full element of the page. I got some time working on using CSS grid. It took a lot of work and fiddling (scientific term) to get overlapping to work correctly, but so far I am happy with the result and the effort.

Overall, the first day, which amounted to about 5 hours of work, made a lot of good progress. I feel there will be a lot of adjustments for the overall project, but I am pleased with the beginning structure.

### Day two

Day two was spent fixing the "about" section. At this point I still had the idea that I wanted to do an image with and text with an accent box, so I switched to using a grid layout so I could overlay the accent box over the picture and around the text. I spent a fair amount of time trying to get this to look how I wanted it, and struggled a lot with how to adjust for responsiveness. Spoiler alert: I ended up taking it out a while later.

I also spent some time on this day updating the readme and journal entries.

### Day three

This was another big day of coding. I started out having to debug some problems with how the navbar looked. I had initially had it styled to that it had a "glass" appearance, and for some unknown reason that stopped working. I tried a number of different things, but eventually found that adding a semi-transparent background helped fix the problem. I also tried to add the image carousel from bootstrap, but had a ton of trouble trying to style it in a way that fit with the theme of the website, so I changed to an accordion instead, which worked much better.

After adding the accordion I again had trouble with the navbar styling, I think it was something in the bootstrap CSS that was potentially overriding styles I had, so I re-named the navbar classes to avoid that, and the problems disappeared. Overall, I found working with the accordion and styling it to be much easier than the image carousel. I felt like it melded well with my ideas for the skill section.

### Day four

This was, again, another big day of coding and finishing up the website. Most of the big style choices and responsiveness had been taken care of at this point. I did decide to get rid of the accent box in the About section, which made it much easier to adjust responsiveness. I also added the Contact form, and JavaScript functionality to go along with it.

I used a couple of sources for regex in the JavaScript, as listed below:

- email validation regex: https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/
- phone validation regex: https://www.geeksforgeeks.org/javascript/how-to-validate-phone-numbers-using-javascript/

### Final thoughts

I noticed after I had "finished" that there was a small problem with some overflow on the projects section, but honestly, at this point I have run out of time. I have other finals and projects that need my attention. If this was a work project, that would be my very next fix. Additionally, there may be some sections where my CSS could be more efficient, but I ran out of time to refactor. Overall, I am glad I opted to work on this project, and I feel I have a lot better understanding of Front End design as a whole.

## Link to Final Project Video

https://media.pdx.edu/media/t/1_xyuitbbf

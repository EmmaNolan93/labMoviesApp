# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: [Emma Nolan]

## Overview.

### New Pages.
+ List of Upcoming movies.
+ List of Tv shows
+ List of Popular Actors
+ (Modified) Movie Details page - added chips for Recommended Movies which are each links to the movies named in the chip. and added two natigation icons for Similar Movies (A drawer opens when clicked which will show five movies that are similar to it) and Reviews 
+ List of Cast and Crew of a movie.
+ Actors details (Has links to send you to tv shows/movies that they are in)
+ Tv details 
+ Top Rated shows
+ (Modified) Site header - When clicked on the favourite button in header it will drop down a menu that list all the favourites (Tv Shows, Movies and Poeple
+ Favourite Actors 
+Favourite People (Actors/Crew)
+ (Modified) Discovered Movie Page - So that the movie card now has a Link to its cast and crew (credits)
+(Modified) UpComing + Discover Movies - So that the playlist icon only stays on the Upcoming movie page. (Should not appear in the Discover Movie)

### New Features.

+ Sort Credits (Cast + Crew ) list by deparments (e.g. Popular poeple and cast + crew page)
+ Create a a favourite for Tv show and Actors (Can remove them as well)
+ See cast + Crew of a Movie
+ See movie and Tv show a actor/crew feature in 
+ Sort Credits (Cast + Crew) List by their name 
+ Sort Tv show by Genre and Name

## Setup requirements.

[None that I am aware of]

## TMDB endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.

+ /movies/{movie_id}/reviews - The user reviews or a movie.
+ /movie/{movie_id}/similar - A list of similar movies. 
+ /person/popular - A list of popular actors.
+ /tv/{tv_id}/videos - The videos for a TV show. 

## App Design.

### Component catalogue.

[ Insert a screenshot from the Storybook UI, and highlight the stories that relate to your __new/modified components__ - see the example screenshot below.] .......

e.g.

![](./images/stories.png)

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

![ ](./images/detail.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/review.png)

>Shows the full review for a movie.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

e.g. 

+ /actors - displays a list of popular actors.
+ /actors/:id - shows details about a particular actor.
+ /actors/:id/movies (protected) - an actor's movie credits.
+ etc.




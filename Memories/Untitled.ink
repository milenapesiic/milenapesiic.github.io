-> forest
=== forest ===
Walking through the woods one misty morning, the smell of wet dirt and redwood trees flows through the tall branches and fill the air. The scent is familiar and immeditely brings you back to a memory you had as a child.
{bullying: {last time you remembered being bulllied | shadows haunt you} }
{sciencecamp: {You remember what it was like in science camp all those years ago | the trees are beautiful}}
{bullying and sciencecamp and fishing: -> end}
{fishing: {The trees remind you of back home, the summers spent fishing with your dad | the smell of the lake leaks into the air}}

 + [The mist reminds you of going fishing early with your dad, it was always an experience] -> fishing
 + [Strangely, the smell of dirt reminds you of your childhood bully] -> bullying
 + [The redwoods bring you back to 5th grade science camp] -> sciencecamp
 -> forest
 === end ===
 The recollection of shock spins you back into reality, and you find yourself settling back into the presence of the forest. 
    -> END
 === fishing ===
       You close your eyes and indulge in the memory. Suddenly you open your eyes and find yourself staring at your bedroom cieling. You wipe the sleep
            off your face and hear your dad call your name from downstairs.
VAR hasRaincoat = false
VAR hasBucket = false
        Will you put on your Raincoat?
            ++[put on your raincoat, its a good idea in case it rains]
                ~ hasRaincoat = true
                Phew! As you step outside you realize that it is raining, good thing you grabbed your jacket. As you head over the mountain towards the lake, your dad looks behind you and tells you to reach in the trunk and grab the bucket.
                {fishing.grab_bucket: Ouch! You remember you hurt yourself last time you grabbed the bucket}
                {fishing.dont_grab: Phew! This was a pleasant avoidance of hitting your head!}
                    +++(grab_bucket)[grab the bucket]
                        ~ hasBucket = true
                        As you reach over to the back of the car, the car suddenly jolts and your body is thrown over the seats and into the trunk. You smack your head into the rear view window
                    +++(dont_grab)[don't grab the bucket]
                        ++++{hasBucket} choice 1
                        ++++{not hasBucket}
                        [You were right, grabbing the bucket would have been dangerous.Suddenly, you remember the last time you went fishing and you accidentally poked the hook into your finger. The pain is vivid... ]
                        ----
                    ---
            ++[ditch the raincoat, its more fun to get wet]
                +++ {hasRaincoat} choice 1
                +++ {not hasRaincoat} 
                [You run down the stairs without the coat and head into the car. Your dad loads the trunk with bait and the poles and you head towards the lake.]
                        ++++[As you approach the lake, a huge shadow looms over the side of the car. As you start to regret not bringing a raincoat, you realize that the shadow isn't a rain cloud, its moving too fast. You look out the window and a strange creature looks directly into your eyes.... its a monster, its Bigfoot!]
                        ----
                ---
            --
            transition out of memory
-> forest

=== bullying === 
{bullying.turn_around: back here again, you turned around before... and it ended with an interesting realization}
    You close your eyes and indulge in the memory. Suddenly you open your eyes and you back in 4th grade. But you are face down in the playground dirt. Charlie pushed you.
        ++ {bullying.turn_around} [No, it was something else] 
            hurt
        ++ (turn_around)[turn around and chase Charlie]
            This is the last time I'm letting you get away with this, you jerk!
                +++[catch up to Charlie and push him down]
                    You run towards Charlie with all your might, but the soft ground is slowing you down. You realize you aren't fast enough to get back at him. Next to you on the ground is a basketball.
                    VAR hasBasketball = false
                        Will you pick up the basketball?
                        {bullying.throw_it_anyways: wait a minute, you remember that the last time you threw the basketball your teacher got you in some trouble}
                        ++++[yes, I can throw it at him]
                        ~ hasBasketball = true
                        You grab the basketball and wind up a solid throw.Right as you are about to throw the basketball, you start to have some doubts.
                        +++++(throw_it_anyways)[throw it anyways]
                         You look at him in the eyes, and you feel no mercy. Before you start to hurt him even more, a teacher pulls you away from him. She tells you that you two are no different, that you should have just talked with him and found a solution.
                        +++++[put it down]
                        The look on his face makes you realize that if you were to hurt him even more, what would make the two of you different? To crush violence with violence is not the answer in this scenario.
                        ++++[no, that would get me in trouble]
                        +++++ {hasBasketball} choice 1
                        +++++{not hasBasketball}
                        You run past the basketball, and instead continue chasing Charlie. You remember what your dad taught you when you go fishing together; keep it slow and steady, then reel it in. You finally reach Charlie and tackle him to the ground.
                            ++++++[appoligize]
                            The look on his face makes you realize that if you were to hurt him even more, what would make the two of you different? To crush violence with violence is not the answer in this scenario.
                            ++++++[get the revenge you deserve]
                            You look at him in the eyes, and you feel no mercy. Before you start to hurt him even more, a teacher pulls you away from him. She tells you that you two are no different, that you should have just talked with him and found a solution.
                            ------
                        -----
                    ----
                +++[tell the teacher he pushed you]
                ---
        ++[stay on the ground and wait for help]
        --
    --transition out of memory
        
-> forest
    
===sciencecamp===
  You close your eyes and indulge in the memory. Suddenly you open your eyes and you are sitting around the campfire, singing along your favorite songs with your peers. The morning consisted of a hike to the river, pancakes for breakfast, a group nature walk, and finally swimming after lunch. All bundled up surrounded by redwoods, you feel safe.
  {sciencecamp.request_a_song: You remember the last time you requested a song, you were faced with a really challenging dillemma}
  ++(request_a_song)[request a song]
  Hey Nature Guide! Can you play a song I pick?
  VAR hasSong = false
    ++[the guide says yes]
    ~hasSong = true
    Sure! What song would you like?
    {sciencecamp.Hey_there_delilah: You remember that your teacher really loved this song!}
    {sciencecamp.WAP: You remember that your teacher did NOT like this song...}
        +++(WAP)[WAP by Cardi B]
        ... That song is very inappropriate. You get sent back to you rcabin all alone and early that night, leaving you with the punishment and your thoughts.
        +++(Hey_there_delilah)[Hey There Delilah by the Plain White T's]
        What a lovely song! Can you sing a part for us?
            ++++[yes]
            As you start to sing, this was the moment you realized that you have stage fright. the anxiety creeps over your body and you start to form a lump in your throat. The world squirm out of your mouth and tears flow into your eyes. 
            ++++[no]
            The nature guide lets you enjoy the song without having to sing it. You sit around the fire, enjoying your smore with good company. 
    ++[the guide says no]
    +++{hasSong} choice 1
    +++{not hasSong}
    No, you can't play a song, sit back down and talk with your friends. You wonder why you weren't able to request a song, when you remember the last time someone tried to share something with the class, they accidentally leaked the teacher's secret Tiktok account. 
  
  ++[roast a marshmellow]
  Your favorite snack. You always stood with the belief that smores had to be burnt to a crisp. Not golden brown, but burnt.
  +++[hold the marshmellow into the fire]
  Your best friend Iris calls your name and starts telling you about her favorite part of the day. 
  ++++[listen to her story]
  She continues to tell you about how her most favorite part of the day was when they found a banana slug on the ground and she got to kiss it. She says that it made her lips tingle, but her nature guide told her it was good luck.You are so invested in her story about the banana slug that you don't realize that your marshmellow has errupted into flames.
  +++++[blow it out]
  PFFFFFFFFFF! As you try to blow on it, the flames get larger and come near your face, causing you to yelp and drop the stick. The next morning you look into your cabin mirror and realize you have no eyerbrows. 
  +++++[put it on the ground and stomp on it]
  In a panic, you drop the stick with the burning marshmellow. Your nature guide comes over to you and gives you a stern lecture about how you need to be more responsible with fire. She suspends you from making any more smores for the rest of the night.
  ++++[tell her you are busy]
  Shh! I'm trying to get the perfect crispy marshmellow, Iris! But as you are turning to tell her this, you drop the marshmellow on your foot, and burn your foot. To this day the scar on your left foot remains, reminding you of science camp.
  

- The recollection of shock spins you back into reality, and you find yourself settling back into the presence of the forest. 
    -> END

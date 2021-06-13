// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: 'Welcome to the mental rotation experiment. Thank you for taking the time to partake.',
  buttonText: 'Proceed to experiment',
  title: 'The Mental Rotation experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `In the following experiment you will be shown two images of 3-dimensional objects that 
            differ in their spatial orientation. You are to determine whether the two objects are
            the same by pressing the f-key, or whether they are different by pressing the j-key. Do this by resting your two index fingers on the two keys before pressing. Try to be as fast and accurate as possible.`,
  buttonText: 'Got it!'
});



// 12 Practice runs
const practice_trials = magpieViews.view_generator("key_press", {
	trials: trial_info.practice.length,
	name: 'practice_trials',
	data: _.shuffle(trial_info.practice),
	pause: 250
});
	
	
	
// intermediate wrapping view
const intermediate_view = magpieViews.view_generator('begin', {
	trials: 1,
	name: 'intermediate_view',
	title: 'Main task',
	text: 'These were just some practice trials. Now the main tasks will begin.',
	buttonText: 'Begin'
});

	
	
// 48 main trials
const key_press_2A = magpieViews.view_generator('key_press', {
	trials: trial_info.key_press.length,
	name: 'key_press_2A',
	data: _.shuffle(trial_info.key_press),
	pause: 250
});
		
	
	
// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});


// Here, we thank the participant for participating
const thanks = magpieViews.view_generator('thanks', {
	trials: 1,
	name: 'thanks',
	title: 'Congratulations, you are done!',
	text: 'Thank you for taking part in this experiment!'
});


/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/



// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
	
	
	
	
Ext.define('TestApp.store.QuoteStore', {
	extend: 'Ext.data.Store',

	requires: ['TestApp.model.QuoteModel'],

    config: {
		model: 'TestApp.model.QuoteModel',
		data : [{
				"desc": '1.	 Attend at least one major sporting event: the Super Bowl, the Olympics, the U.S. Open.',
				},
				{
				"desc": '2.	 Throw a huge party and invite every one of your friends.',
				},
				{
				"desc": '3.	 Swim with a dolphin.',
				},
				{
				"desc": '4.	 Skydive.',
				},
				{
				"desc": '5.	 Have your portrait painted.',
				},
				{
				"desc": '6.	 Learn to speak a foreign language and make sure you use it.',
				},
				{
				"desc": '7.	 Go skinny-dipping at midnight in the South of France.',
				},
				{
				"desc": '8.	 Watch the launch of the space shuttle.',
				},
				{
				"desc": '9.	 Spend a whole day eating junk food without feeling guilty.',
				},
				{
				"desc": '10.	 Be an extra in a film.',
				},
				{
				"desc": '11.	 Tell someone the story of your life, sparing no details.',
				},
				{
				"desc": '12.	 Make love on a forest floor.',
				},
				{
				"desc": '13.	 Make love on a train.',
				},
				{
				"desc": '14.	 Learn to rollerblade.',
				},
				{
				"desc": '15.	 Own a room with a view.',
				},
				{
				"desc": '16.	 Brew your own beer.',
				},
				{
				"desc": '17.	 Learn how to take a compliment.',
				},
				{
				"desc": '18.	 Buy a round-the-world air ticket and a rucksack, and run away.',
				},
				{
				"desc": '19.	 Grow a beard and leave it for at least a month.',
				},
				{
				"desc": '20.	 Give your mother a dozen red roses and tell her you love her.',
				},
				{
				"desc": '21.	 Be a member of the audience in a TV show.',
				},
				{
				"desc": '22.	 Put your name down to be a passenger on the first tourist shuttle to the moon.',
				},
				{
				"desc": '23.	 Send a message in a bottle.',
				},
				{
				"desc": '24.	 Ride a camel into the desert.',
				},
				{
				"desc": '25.	 Get to know your neighbors.',
				},
				{
				"desc": '26.	 Plant a tree.',
				},
				{
				"desc": '27.	 Learn not to say yes when you really mean no.',
				},
				{
				"desc": '28.	 Write a fan letter to your all-time favorite hero or heroine.',
				},
				{
				"desc": '29.	 Visit the Senate and the House of Representatives to see how Congress really works.',
				},
				{
				"desc": '30.	 Learn to ballroom dance properly.',
				},
				{
				"desc": '31.	 Eat jellied eels from a stall in London.',
				},
				{
				"desc": '32.	 Be the boss.',
				},
				{
				"desc": '33.	 Fall deeply in love -- helplessly and unconditionally.',
				},
				{
				"desc": '34.	 Ride the Trans-Siberian Express across Asia.',
				},
				{
				"desc": '35.	 Sit on a jury.',
				},
				{
				"desc": '36.	 Write the novel you know you have inside you.',
				},
				{
				"desc": '37.	 Go to Walden Pond and read Thoreau while drifting in a canoe.',
				},
				{
				"desc": '38.	 Stay out all night dancing and go to work the next day without having gone home (just once).',
				},
				{
				"desc": '39.	 Drink beer at Oktoberfest in Munich.',
				},
				{
				"desc": '40.	 Be someones mentor.',
				},
				{
				"desc": '41.	 Shower in a waterfall.',
				},
				{
				"desc": '42.	 Ask for a raise.',
				},
				{
				"desc": '43.	 Learn to play a musical instrument with some degree of skill.',
				},
				{
				"desc": '44.	 Teach someone illiterate to read.',
				},
				{
				"desc": '45.	 Be one of the first to take a flight on the new Airbus A380.',
				},
				{
				"desc": '46.	 Spend a night in a haunted house -- by yourself.',
				},
				{
				"desc": '47.	 Write down your personal mission statement, follow it, and revise it from time to time.',
				},
				{
				"desc": '48.	 See a lunar eclipse.',
				},
				{
				"desc": '49.	 Spend New Years in an exotic location.',
				},
				{
				"desc": '50.	 Get passionate about a cause and spend time helping it, instead of just thinking about it.',
				},
				{
				"desc": '51.	 Experience weightlessness.',
				},
				{
				"desc": '52.	 Sing a great song in front of an audience.',
				},
				{
				"desc": '53.	 Ask someone youve only just met to go on a date.',
				},
				{
				"desc": '54.	 Drive across America from coast to coast.',
				},
				{
				"desc": '55.	 Make a complete and utter fool of yourself.',
				},
				{
				"desc": '56.	 Own one very expensive but absolutely wonderful business suit.',
				},
				{
				"desc": '57.	 Write your will.',
				},
				{
				"desc": '58.	 Sleep under the stars.',
				},
				{
				"desc": '59.	 Take a ride on the highest roller coaster in the country.',
				},
				{
				"desc": '60.	 Learn how to complain effectively -- and do it!',
				},
				{
				"desc": '61.	 Go wild in Rio during Carnival.',
				},
				{
				"desc": '62.	 Spend a whole day reading a great novel.',
				},
				{
				"desc": '63.	 Forgive your parents.',
				},
				{
				"desc": '64.	 Learn to juggle with three balls.',
				},
				{
				"desc": '65.	 Drive the Autobahn.',
				},
				{
				"desc": '66.	 Find a job you love.',
				},
				{
				"desc": '67.	 Spend Christmas on the beach drinking pina coladas.',
				},
				{
				"desc": '68.	 Overcome your fear of failure.',
				},
				{
				"desc": '69.	 Raft through the Grand Canyon.',
				},
				{
				"desc": '70.	 Donate money and put your name on something: a college scholarship, a bench in the park.',
				},
				{
				"desc": '71.	 Buy your own house and then spend time making it into exactly what you want.',
				},
				{
				"desc": '72.	 Grow a garden.',
				},
				{
				"desc": '73.	 Spend three months getting your body into optimum shape.',
				},
				{
				"desc": '74.	 Drive a convertible with the top down and music blaring.',
				},
				{
				"desc": '75.	 Accept yourself for who you are.',
				},
				{
				"desc": '76.	 Learn to use a microphone and give a speech in public.',
				},
				{
				"desc": '77.	 Scuba dive off Australias Great Barrier Reef.',
				},
				{
				"desc": '78.	 Go up in a hot-air balloon.',
				},
				{
				"desc": '79.	 Attend one really huge rock concert.',
				},
				{
				"desc": '80.	 Kiss someone youve just met on a blind date.',
				},
				{
				"desc": '81.	 Be able to handle: your tax forms, Jehovahs Witnesses, your banker, telephone solicitors.',
				},
				{
				"desc": '82.	 Give to a charity -- anonymously.',
				},
				{
				"desc": '83.	 Lose more money than you can afford at roulette in Vegas.',
				},
				{
				"desc": '84.	 Let someone feed you peeled, seedless grapes.',
				},
				{
				"desc": '85.	 Kiss the Blarney stone and develop the gift of gab.',
				},
				{
				"desc": '86.	 Fart in a crowded space.',
				},
				{
				"desc": '87.	 Make love on the kitchen floor.',
				},
				{
				"desc": '88.	 Go deep sea fishing and eat your catch.',
				},
				{
				"desc": '89.	 Create your own web site.',
				},
				{
				"desc": '90.	 Visit the Holy Land.',
				},
				{
				"desc": '91.	 Make yourself spend a half-day at a concentration camp and swear never to forget.',
				},
				{
				"desc": '92.	 Run to the top of the Statue of Liberty.',
				},
				{
				"desc": '93.	 Create your Family Tree.',
				},
				{
				"desc": '94.	 Catch a ball in the stands of a major league baseball stadium.',
				},
				{
				"desc": '95.	 Make a hole-in-one.',
				},
				{
				"desc": '96.	 Ski a double-black diamond run.',
				},
				{
				"desc": '97.	 Learn to bartend.',
				},
				{
				"desc": '98.	 Run a marathon.',
				},
				{
				"desc": '99.	 Look into your childs eyes, see yourself, and smile.',
				},
				{
				"desc": '100.	 Reflect on your greatest weakness, and realize how it is your greatest strength.',
				}]

		}
		
});

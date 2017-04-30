function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function pronoun( gender )
{
    if(gender == 'male')
    {
        return "he";
    }
    else
    {
        return "she";
    }
}

function pronounOwnership( gender )
{
    if(gender == 'male')
    {
        return "his";
    }
    else
    {
        return "her";
    }
}

function pronounThird( gender )
{
    if(gender == 'male')
    {
        return "man";
    }
    else
    {
        return "woman";
    }
}

//People attributes
var gender = ['male', 'female'];
var hairLength = ['long', 'short', 'medium'];
var hairColor = ['black', 'brown', 'blond', 'red', 'silver', 'green', 'blue'];
var eyeSize = ['small', 'large'];
var eyeColor = ['black', 'brown', 'blue', 'green'];
var body = ['chubby', 'skinny', 'medium'];
var height = ['short', 'medium', 'tall'];
var special = ['missing hand', 'limp', 'eye patch'];
var p_special = ['headphones', 'bathing suit', 'naked'];
var greetings = ['hey', "what's up'", 'hi'];

//temp vars that can be spliced in case game gets restarted
var t_height = height;
var t_body = body;
var t_eyeSize = eyeSize;
var t_eyeColor = eyeColor;
var t_hairLength = hairLength;
var t_hairColor = hairColor;
var t_special = special;

//Middle East
var Egypt  = {
    countryName: 'Egypt',
	intro: 'Welcome to Egypt, an ancient civilization dating back to 3200 BC. Egypt is part of the fertile crescent because of the Nile River. ',
    facts:  ['Where the world’s oldest dress was found over 5,000 years ago', 
'The nation of the steppe eagle', 
'Where the statue of liberty was originally intended at the suez canal lighting the way to asia', 
'Where the first sailing boats were invented',
'Where the tradition of exchanging wedding rings started',
'Known for the Great Pyramid of Giza',
'The country with the world’s largest arab population',
'Beer was once considered a national currency',
'Where the circumference of the Earth was calculated 2200 years ago',
'The land of Pharaohs'
],
    m_names: ['Aaheru', 'Abuskhau', 'Acheri', 'Aches', 'Am', 'Akhekh', 'Amenamen'],
    f_names: ['Cleopatra', 'Amisi', 'Bast', 'Ebio', 'Emu', 'Isis'],
    region: 'Middle East'
}
var Iran = {
    countryName: 'Iran',
	intro: 'Welcome to Iran, known as the Islamic Republic of Iran since 1979. Iran has the largest natural gas supply in the world. ',
    facts: ['Where the capital is Tehran, which means warm slope',
'Where their flag has three equal horizontal bands of green, white, and red',
'Known as Persia',
'Where the world’s oldest continuous civilizations dating back 4000 BC',
'The inventors of a water supply system called qanat, which collects underground water and moves it through tunnels',
'Known for the best rugs and tapestry',
'The world’s largest producers of caviar, pistachios, and saffron',
'Where Polo was played as early as 6th century B.C.',
'Where they speak farsi',
'Where Islam became the state religion in 637'
],
    m_names: ['Mohammad', 'Amir', 'Yosef', 'Mehran', 'Faraz', 'Hooman'],
    f_names: ['Ada', 'Saye', 'Nooshin', 'Sajedeh', 'Niyusha', 'Fatima'],
    region: 'Middle East'
}
var Algeria = {
    countryName: 'Algeria',
	intro: 'Welcome to Algeria, a nation with over 2 million square kilometers of land, only 12% of which is inhabited. 98% of Algeria’s exports consist of petroleum and gas. ',
    facts: ['Where the capital is Algiers',
'Where the Sahara Desert covers 80% of the country',
'Where they gained independance from France in 1962',
'Home to St Augusting of Hippo, an early christian theologian',
'The largest country in Africa',
'Where they love to eat couscous',
'Cheb Mami accompanied Sting on his song Desert Rose',
'The national animal is a fennec fox native to North Africa',
'Most of the population lives on the mediterranean sea leaving 80% of the country uninhabited',
'Known for delicious dates',
'A skip away from Italy and Spain'
],
    m_names: ['Mohammad', 'Amine', 'Anis', 'Brahim', 'Zaki', 'Mounir'],
    f_names: ['Meriem', 'Sabrina', 'Safia', 'Yasmine', 'Chiraz', 'Aya'],
    region: 'Middle East'
}
var Tunisia = {
    countryName: 'Tunisia',
	intro: 'Welcome to Tunisia, formerly part of the Ottoman Empire, and later a French protectorate. It achieved full independence in 1956. Arabic, French, and Italian are all commonly spoken in Tunisia. ',
    facts: ['Red flag with crescent moon in the middle',
'Shares borders with Algeria and libya',
'The capital is tunis',
'Smallest country in Africa',
'All but one Star Wars Movies were filmed here',
'Where you can find a 6,000 year old amphitheatre',
'Known for its fish souks or markets',
'The country playing pass with Italy',
'Once know as the center of power for the city of Carthage in 6th BC',
'Known for starting the Arab spring revolution via social media'
],
    m_names: ['Ahmed', 'Hazim', 'Slim', 'Aziz', 'Mehdi', 'Raouf'],
    f_names: ['Fatma', 'Eya', 'Hiba', 'Sarah', 'Farah', 'Rim'],
    region: 'Middle East'
}
var Oman = {
    countryName: 'Oman',
	intro: 'Welcome to Oman. Opened to tourism in the late 1980s, this coastal nation located on the tip of  the Arabian Peninsula now hosts several million foreign visitors a year. The soft drink Mountain Dew is jokingly referred to as Omani alcohol due to its high level of popularity among Omanis. ',
    facts: ['Located on the southeastern coast of the Arabian Peninsula',
'Humans have been living here for at least 107,000 years',
'Known for birdwatching during migration season',
'The national symbol has a pair of crossed Khanjars or daggers',
'Credited with being the greatest ship builders in the world',
'The finest breeders of the beautiful arabian horse',
'It is a tradition to greet visitors with dates, qahwa, and fruit',
'The capital is Muscat',
'They were occupied by the Portuguese for 150 years',
'The mutrah souk is one of the oldest marketplaces in the world'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
var Morocco = {
    countryName: 'Morocco',
	intro: 'Welcome to Morocco, the first country to recognize the United States as an independent nation, and home to the famous city of Casablanca. ',
    facts: ['The flag is maroon with a green star in the middle',
'Called Al-Magrib or the extreme west',
'The capital is Rabbat',
'Often called the Red City',
'Only 8-miles from Europe',
'Possible to see the Atlantic and Mediterranean at the same time',
'The Alaouites are the royal family',
'Home to the world’s first university',
'The liver is considered to be the symbol of love',
'Only country in Africa not part of the African union'
],
    m_names: ['Abdo', 'Ahmen', 'Karim', 'Ali', 'Rachid', 'Brahim'],
    f_names: ['Zineb', 'Ghita', 'Marwa', 'Aya', 'Lina', 'Rania'],
    region: 'Middle East'
}
var Syria = {
    countryName: 'Syria',
	intro: 'Welcome to Syria, whose largest lake is man made, created in 1968. New Years is traditionally celebrate on April first in Syria. ',
    facts: ['Formerly known as Ash-Sham and synonymous with the Levant',
'Where the capital is Damascus known as Jasmine City',
'The two green stars on the flag represent the previous union with Egypt',
'Suffering the worst humanitarian crisis since World War II impacting 13 million people',
'Home to the oldest continuously inhabited city in the world',
'Major point on the silk road from Asia',
'The biggest city is Haleb or Aleppo meaning iron due to its source of metals',
'Enjoy some toasted freekeh wheat with chicken and fatoush',
'Shares Northern Border with Turkey',
'The Euphrates river is the lifeline for this mostly arid country'
],
    m_names: ['Adnan', 'Elias', 'Nizar', 'Sayid', 'Yaman', 'Rifat'],
    f_names: ['Zeinah', 'Uri', 'Amena', 'Shayma', 'Nooda', 'Aisl'],
    region: 'Middle East'
}
var Iraq = {
    countryName: 'Iraq',
	intro: 'Welcome to Iraq, origin of the oldest known writing system, dating from 3200 B.C. ',
    facts: ['The land of the two rivers',
'Where civilization began in Mesopotamia',
'Known for its rich oil reserves',
'The name translates to deeply rooted, fertile',
'The flag contains green script of Allahu Akbar meaning God is the Great',
'The capital is Baghdad formerly known as the world center for math, science, and astronomy',
'Where the tower of babel happened representing the start of different languages',
'The capital city translates to God’s Gift.',
'Where poetry and literature thrived with tales such as A thousand and One Nights',
'Don’t forget to try the Tigris fish roasted over an open fire'
],
    m_names: ['Zamanlabib', 'Mustafa', 'Barhoomee', 'Baravan', 'Jahmir', 'Fadhil'],
    f_names: ['Zainab', 'Noora', 'Sham', 'Telenaz', 'Rukia', 'Kayoosh'],
    region: 'Middle East'
}
var SaudiArabia = {
    countryName: 'Saudi Arabia',
	intro: 'Welcome to Saudi Arabia, where around 100 camels are sold every day in its capital city. A very high 60% of Saudi Arabia’s workforce is foreign ',
    facts: ['Going to Mecca for hajj pilgrimage',
'Dont get caught in the empty quarter, the largest sand desert in the world',
'The capital city is Riyadh',
'Where Islam was founded by prophet Muhammad',
'The largest country in the world with no river',
'Borders the Red Sea and the Arabian gulf',
'Try to catch a glimpse of sidewalk skiing but I would advise against trying it',
'Home to the worlds tallest skyscraper',
'Where the camel market is thriving',
'The largest country in the Region and 13th largest in the world'
],
    m_names: ['Kahaled', 'Mahamat', 'Inam', 'Taha', 'Hossien', 'Zishan'],
    f_names: ['Faten', 'Habiba', 'Reema', 'Nadia', 'Bushra', 'Salsabyl'],
    region: 'Middle East'
}
var Lebanon = {
    countryName: 'Lebanon',
	intro: 'Welcome to Lebanon, home to 4.5 million Lebanese. Compared to 20-30 million who live outside of Lebanon. ',
    facts: ['Known as the paris of the middle east due to its renaissance after world war II',
'Capital City is Beirut',
'The only Arab country without a desert',
'Home to the first ever law school in the world',
'Where tourist flock to for skiing, night life, shopping, and swimming',
'The countrys name has been unchanged for over 4000 years',
'Where the first alphabet was created',
'Where the first sailors called phoenicians built the first ever boat from cedar trees',
'The country is know as God’s Country on Earth',
'The creators of Tom & Jerrry and directed other cartoons such as Scooby-Doo, The Jetsons, and The smurfs are lebanese'
],
    m_names: ['Mahmous', 'Nader', 'Ayman', 'Wehbe', 'Rami', 'Moukhtar'],
    f_names: ['Nour', 'Alaa', 'Souad', 'Sousou', 'Yasmine', 'Fatme'],
    region: 'Middle East'
}

//East Asia
var Japan = {
    countryName: 'Japan',
	intro: 'Welcome to Japan, with its 108 active volcanoes, as part of the Pacific Ocean’s ring of fire.Japan consists of 47 prefectures, each lead by an elected governor. ',
    facts: ['Nihon or Nippon which means the land of the rising sun',
'Consists of over 6,800 islands',
'Home to the largest populated metropolitan region in the world',
'The largest importers of seafood in the world',
'The originators of ramen noodles',
'Where you will find the best sushi in the world',
'Home to world-renowned Kobe beef, which comes from cows treated like royalty',
'Where you can find suicide forest at the base of Mount Fuji',
'The national flower is Cherry blossoms or sakura',
'Where Haiku poetry was invented'
],
    m_names: ['Dorobo', 'Naruto', 'Ren', 'Tatsuya', 'Daisuke', 'Kazuki'],
    f_names: ['Yuri', 'Ayumi', 'Minami', 'Nana', 'Risa', 'Hana'],
    region: 'East Asia'
}
var China = {
    countryName: 'China',
	intro: 'Welcome to China, home to the world’s entire giant panda population.  ',
    facts: ['Home to the largest population in the world',
'Capital is Beijing',
'Known for the great wall, which is the largest man made structure in the world soon to be trumped by President Trump haha',
'The worlds largest army',
'The worlds largest exporter of goods',
'The national sport is table tennis',
'Half of the world’s pigs live in china',
'Where it is common for rich people to hire a body double to serve their sentence',
'The worlds largest economy',
'The forbidden city is the largest palace in the world'
],
    m_names: ['Ching', 'Chong', 'Ting', 'Chow', 'Yang', 'Ming'],
    f_names: ['Ming Ming', 'Chi CHi', 'Jade', 'Ying', 'Fei Fei', 'Fai Di La'],
    region: 'East Asia'
}
var Mongolia = {
    countryName: 'Mongolia',
	intro: 'Welcome to Mongolia, with the world’s coldest national capital, Ulaanbaatar, averaging -1 degrees celsius. ',
    facts: ['Arguably the creators of ice cream',
'Home to 13 times more horses than humans',
'Known for its great ruler Genghis Khan stretching their empire from China to the Caspian Sea',
'Where you will find the Gobi desert, the largest in Asia',
'Referred to as the land of the blue sky',
'The meaning of the country comes from the word mong or brave',
'More than 17 million people living today descended from Genghis Khan',
'Where wrestling is a tradition that goes back before recorded history',
'The worlds second largest producer of Cashmere',
-'Ulan Baatar meaning red hero is the capital city'
],
    m_names: ['Dana', 'Ankhbaatar', 'Davaa', 'Zev'],
    f_names: ['Zaya', 'Sondor', 'Oyundelger', 'Aigerim', 'Delgermaa', 'Jabek'],
    region: 'East Asia'
}
var Nepal = {
    countryName: 'Nepal',
	intro: 'Welcome to Nepal, with a calendar 57.7 years ahead of the Gregorian calendar. It is currently 2075 based on the Nepalese calendar. ',
    facts: ['Home to the birthplace of buddha',
'Where you find Mt. Everest the highest mountain in the world',
'The cow is the national animal preventing them from eating any beef products',
'The only country that doesnt have a square or rectangle flag',
'Home to the worlds shortest person',
'Home to the dish momo',
'The largerst producers of mustard seed in the world',
'The left hand is forbidden from used when eating',
'The capital is Kathmandu',
'Landlocked country bordering China and india'
],
    m_names: ['Krishna', 'Bishal', 'Bibek', 'Kiran', 'Bikash', 'Yash'],
    f_names: ['Shirisha', 'Shristi', 'Swornima', 'Tsamchou', 'Simixya', 'Palisha'],
    region: 'East Asia'
}
// still need names below this point
var Taiwan = {
    countryName: 'Taiwan',
	intro: 'Welcome to Taiwan, a country whose aboriginal people are attributed to have spread their culture as far as Madagascar to the west and Hawaii to the east. Taiwan’s national father, Sun Yat Sen, was actually American. ',
    facts: ['Island nation off the coast of Mainland China',
'Walking in the rain goes against cultural norms',
'Where 7-11 convenience stores are everywhere offering more than snacks and drinks',
'The capital is taipei',
'Home to the bamboo-shaped skyscraper',
'The official language is mandarin',
'The flag has a white sun in the top left corner',
'Known for their famous night markets',
'Where you find a temple for worshipping the spirit of a dog',
'Called the gay capital of Asia'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Philippines = {
    countryName: 'the Philippines',
	intro: 'Welcome to the Philippines, comprised of over 7000 islands. 175 different languages are spoken in the Philippines. ',
    facts: ['The first country to gain independence after world war 2',
'The country is named after a spanish king',
'Known for large shopping malls',
'Where the largest pearl was discovered known as Pearl of Allah',
'The largest exporter of coconuts and tropical fruits',
'The only majority christian nation in asia',
'The national symbol is the monkey-eating eagle',
'Invented the modern yoyo meaning come back',
'Home to the longest Christmas season',
'The capital city is Manila'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Cambodia = {
    countryName: 'Cambodia',
	intro: 'Welcome to Cambodia, overcoming a tragic past that included the genocide of several million people, it is now one of Asia’s fastest growing economies, with a robust tourism industry revolving around its deep history and ancient architecture. ',
    facts: ['The land of a million mopeds',
'The only country flag with a building on it',
'Known for their textile industry',
'Where it is disrespectful to let your feet or soles point at people or things',
'Wedged between Thailand, Laos, and Vietnam',
'Home to Angkor Wat, a massive stone temple complex',
'The capital is Phnom Penh',
'Was a colony of France for 90 years',
'Occupied by japan during world war 2',
'Tarantulas are eaten as a snack'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Vietnam = {
    countryName: 'Vietnam',
	intro: 'Welcome to Vietnam, home of the world’s largest cave, and the region’s highest mountain, known as the roof of indochina. ',
    facts: ['The country with flag is red with a large yellow star in the middle',
'The capital city is Hanoi',
'It is an S shaped country',
'Gongs are used to call children to school',
'Known for the dish called ruou ran',
'The second largest coffee producer',
'Sometimes called cashew nut heaven',
'They have a kitchen god called Ong Tao',
'The local currency is dong',
'Legend has it that the people of this land originated from a union between an immoral chinese princess and the Dragon lord of the seas'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var NorthKorea = {
    countryName: 'North Korea',
	intro: 'Welcome to North Korea, founded in 1948 and officially name Democratic Peoples Republic of Korea. Despite its name, it is considered the most authoritarian regime in the world, with all elections having only one candidate. ',
    facts: ['Where the calendar is based on Kim II-Sung’s date of birth',
'Home to the world’s largest stadium',
'The national instrument is the accordion',
'Where godzilla is known as Pulgasari',
'Where you can score 4-points in a basketball game and lose points for missed free throws',
'The capital city is Pyongyang',
'They live off of the principle of juche or self reliance',
'Where they have their own time zone',
'Land of the morning Calm',
'Home to the DMZ, which is the most heavily guarded border in the world'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Malaysia = {
    countryName: 'Malaysia',
	intro: 'Welcome to Malaysia. As one of Asias predominately muslim nations, Islam is the official state religion. Over 60% of the population practices Islam. ',
    facts: ['The capital is Kuala Lumpur',
'The flag looks similar to the US flag except it has a crescent moon and sun in the top left',
'Historically called the peninsula of gold',
'The only country that includes territory both on mainland and in the islands',
'Home to the biggest roundabout in the world',
'The Japanese invaded this country the same day they bombed pearl harbor',
'The national dish is Nasi Lemak which is a rice dish cooked in coconut milk served in a banana leaf',
'Known for the largest and longest caves in the world',
'The state religion is Islam but they consider themselves very secular',
'Home to the Petronas Towers which are the tallest twin skyscrapers'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}

// intro still needed below this point
//Africa
var SouthAfrica = {
    countryName: 'South Africa',
	intro: 'Welcome to South Africa ',
    facts: ['Located at the cape of good hope',
'The capital is Pretoria',
'The only country to host world cup for soccer, rugby, and cricket',
'Where table mountain considered the oldest mountain and one of the 12 main energy centers.',
'Home to the largest brewing company in the world',
'Local currency is the rand',
'Where you can find two nobel peace prize winners that lived on the same street',
'Where Nelson Mandela led the anti-apartheid movement to end racial segregation',
'Home to the oldest remains of humans from over 160,000 years ago',
'They have three capital cities for each branch: executive, judicial, and legislative'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Uganda = {
    countryName: 'Uganda',
	intro: 'Welcome to Uganda ',
    facts: ['Located in eastern africa',
'Home of gorillas',
'Called the Pearl of Africa by Winston Churchill',
'The capital is Kampala',
'Where you can enjoy panfried grasshoppers',
'Landlocked country sharing borders with Sudan, Kenya, and Tanzania',
'Much of the population lives near Lake Victoria',
'The nile river starts here before flowing through 9 other countries and ending into the mediterranean sea in egypt',
'The national symbol is a grey crowned crane which is on its flag',
'Known as Africa’s Banana Republic'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Kenya = {
    countryName: 'Kenya',
	intro: 'Welcome to Kenya ',
    facts: ['East African country with coastline on the Indian Ocean',
'The capital is Nairobi',
'Flag has two crossed white spears behind a rea, white, and black Maasai shield',
'Country means God’s resting place',
'Where they make most of their money on exporting coffee but do not drink it themselves',
'Majority are christian protestant',
'Home to the fastest distance runners',
'Shares borders with 5 countries such as somalia and tanzania',
'The official language is English and Swahili',
'Take a safari at the stunning Maasai Mara savannah reserve'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Somalia = {
    countryName: 'Somalia',
	intro: 'Welcome to Somalia ',
    facts: ['The flag is all blue with a large white star in the middle',
'Located in the horn of Africa',
'Known for piracy off the coast',
'The capital is Mogadishu',
'The first African nation used for flying British warplanes',
'The only country in the world that does not possess a central form of government',
'Home to ancient rock paintings dating back 5000 years',
'Shebelle and Juba are their two main rivers',
'The majority follow islam',
'Lies along the gulf of Aden and the Indian Ocean'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Sudan = {
    countryName: 'Sudan',
	intro: 'Welcome to Sudan ',
    facts: ['The capital is Khartoum',
'The official language is Arabic and english with the country meaning The land of the Blacks',
'Used to be the largest country in Africa before being split into north and south in 2011',
'They border the red sea',
'Just a hop and skip away from Saudi Arabia',
'The capital means elephant trunk because the resemblance to the bend in the nile river there',
'The northern and western part of the country contain remnants of old volcanoes',
'There are more pyramids here than in egypt',
'Home to the first women movement in Africa and Middle East during the 60’s',
'They had the first female parliamentarian in 1965 and the first female minister of health in 1974'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Nigeria = {
    countryName: 'Nigeria',
	intro: 'Welcome to Nigeria ',
    facts: ['Located near the ivory coast',
'Where you can find the infamous prince that can make you rich over email',
'Known as the Giant of Africa due to its large population and economy',
'The capital is Abuja',
'It borders the Gulf of Guinea, which leads to the Atlantic ocean',
'Home to the Zuma Rock, the gateway to the capital',
'The flag is 3 vertical stripes with 2 green sandwhiching one white stripe',
'Most famous for petroleum',
'Home to the city of Lagos which is known as Africa’s big apple',
'Known for hollywood type scene called Nollywood'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Cameroon = {
    countryName: 'Cameroon',
	intro: 'Welcome to Cameroon ',
    facts: ['Central African country just north of Gabon',
'230 other languages are spoken with French and English as the official languages',
'Known as the hinge of africa and Africa in miniature',
'The first African country to reach the quarter-finals in the world cup',
'Famous for coffee, cocoa, and cotton',
'The name of the country means River of Pawn in portuguese',
'The capital is Yaounde',
'The flag has 3 vertical stripes green, red, and yellow with a gold star in the middle',
'Where Ginger beer is consumed frequently by kids and adults and is non-alcoholic ',
'Where you can find the only active volcano in western africa'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Senegal = {
    countryName: 'Senegal',
	intro: 'Welcome to Sénégal ',
    facts: ['The capital is Dakar',
'Named by Portuguese fisherman which means these are our boats',
'Used to be the hub for the international slave trade',
'Best known for ivory, fish, and gold',
'Home to the first ever movie made in Africa',
'Located on the western coast of Africa just south of the sahara desert',
'The national dish is chep-bu-jen or rice with fish',
'The economy is largely based on agriculture',
'Predominantly muslim country with large ties to French and Lebanese culture ',
'Where you can see The Senegambian Stone Circles'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Ghana = {
    countryName: 'Ghana',
	intro: 'Welcome to Ghana ',
    facts: ['Sandwhiched between Cote d’ivoire and Togo',
'The capital is Accra',
'The local currency is cedi meaning sea shells',
'The entire southern border sits on the Gulf of Guinea',
'Ranked as Africas most peaceful country',
'Home to Lake Volta, the largest man-made lake',
'The country name means warrior king',
'Known as the gold coast for its gold and salt trade',
'First sub-saharan nation to gain independance post-colonialism',
'Home to the largest market in West Africa called Kejetia Market'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
//SouthAmerica
var Brazil = {
    countryName: 'brazil',
	intro: 'Welcome to Brazil ',
    facts: ['The largest country in South America',
'The macaw is the national animal',
'Known as the worlds largest producer of coffee',
'The capital looks like an airplane from above',
'The official language is portuguese',
'Home to the Amazon River which is the 2nd largest in the world',
'Known for their soccer skills winning the World cup the most times',
'Home to the worlds best beach',
'The motto on their flag means order and progress',
'Where you see the statue of Christ the Redeemer looking down on you'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Argentina = {
    countryName: 'Argentina',
	intro: 'Welcome to Argentina ',
    facts: ['The name comes from the latin word for silver',
'Home to Pope Francis, the first non-european pontiff of the Roman Catholic Church',
'Where the first animated film was created in 1917',
'The first South American country to legalize same-sex marriage',
'Known for soccer greats diego maradona and lionel messi',
'Home to Mt. Aconcagua, the highest point in the Western Hemisphere',
'Known for tango dancing',
'The capital is Buenos Aires meaning good airs or fair winds in spanish',
'Try Yerba Mate there. It is the national drink',
'Home to the world’s widest avenue spanning 14 lanes and 4 lanes of parallel streets'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Venezuela = {
    countryName: 'Venezuela',
	intro: 'Welcome to Venezuela ',
    facts: ['The name means little venice named after by an Italian explorer',
'Home to the largest lake in South America and one of the oldest on earth',
'It is a magical sight to see lightning called Catatumbo which mean continuous high frequency in Spanish',
'Where you can find the world’s tallest waterfall about 15 times taller than Niagra Falls',
'Home to the highest statue of Virgin Mary, which is taller than the Statue of Liberty',
'Known for their large proven oil reserves',
'Their favorite sport is baseball',
'Won the most beauty pageant titles in the world',
'Home to the famous breakfast dish Arepas',
'The largest city and capital city is Caracas'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Colombia = {
    countryName: 'Colombia',
	intro: 'Welcome to Columbia ',
    facts: ['The only country in South America that has a coastline on both the pacific ocean and the Caribbean Sea',
'The capital is Bogota',
'Where drug lord Pablo Escobar offered to pay the country’s debt to improve his reputation and escape justice',
'Part of the ring of fire making it vulnerable to earthquakes and volcanic eruptions',
'Located on the equator so expect much heat and sun',
'Breakfast consists of Changua milk soup with undercooked egg and salty blocks of cheese in your coffee',
'Futbol or soccer is the national sport boasting the most unique goal dance',
'Home to Shakira',
'Home to the largest theater festival called the Iberoamericana',
'One out of every five butterfly species is found here'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Peru = {
    countryName: 'Peru',
	intro: 'Welcome to Peru ',
    facts: ['Home to Machu Picchu and the Incan Trail',
'Cuy or Guinea Pig is their traditional dish',
'The potato originated from here and corn is grown in almost any color you can think of',
'Home to the oldest university in the Western Hemisphere',
'Where you can find the world’s deepest canyon almost twice as deep as the grand canyon',
'It is a tradition to give friends and family yellow underpants to ring in the new year',
'Home to the highest sand dune in the world, Cerro Blanco',
'Lima is the capital and largest city',
'Third largest country in South America',
'Home to Pima and Tanguis cotton'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Ecuador = {
    countryName: 'Ecuador',
	intro: 'Welcome to Ecuador ',
    facts: ['Named after the equator that runs through the country',
'The closest country to space',
'Home to the #1 world heritage site Galapagos Islands',
'Charles Darwin studied here resulting in his theory on evolution',
'The world’s largest exporter of bananas',
'One of two countries that do not share a border with Brazil',
'Known as the most biodiverse country in the world',
'The capital is Quito',
'Shares a border with Peru, Colombia, and the pacific ocean',
'Fanesca, cerviche, and hornado are well known dishes there'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Uruguay = {
    countryName: 'Uruguay',
	intro: 'Welcome to Uruguay ',
    facts: ['Country name means river of the painted birds in the Guarani language',
'Considered the least corrupt country in South America',
'The smallest country in South America behind Suriname',
'Over half the population live in the capital city Montevideo',
'Where Crows known locally as Quebrada de los Cuervos outnumber people 4 to 1',
'Home to the world’s largest national anthem Orientales la Patria o la Tumba',
'Least religious country in South America leading to renaming of many catholic holidays',
'The first country in the world to legalize the production and sale of marijuana',
'Host of the first-ever FIFA world cup winning it twice so far',
'The only country whose name has the same three letters in its first five'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Paraguay = {
    countryName: 'Paraguay',
	intro: 'Welcome to Paraguay ',
    facts: ['One of the few countries in south america that still speak their native language called Guarani with Spanish as second',
'Often referred to as the heart of south America',
'Home to the first railway line in South America',
'One of two landlocked countries in South America',
'Has the largest navy of any landlocked country',
'Home to the second largest hydroelectric-power plant called Itaipu Dam on the Parana River',
'The capital is Asuncion referring to the ascension of mary',
'Name means crowned river after the Guarani words for water and palm crown',
'Home to South Americas second largest river after Amazon',
'The national drink is mahtay often served hot'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Bolivia = {
    countryName: 'Bolivia',
	intro: 'Welcome to Bolivia ',
    facts: ['One of two landlocked South American Countries',
'Named after the Venezuelan military and political leader who led 4 south american countries to independence from Spain',
'The capital is La Paz, the highest capital city in the world',
'Home to worlds most dangerous road the camino de las yungas',
'Where you offer dried llama to Pachamama or mother nature in return for blessings',
'Home to the largest mirror on Earth called Salar de Uyuni which is a large salt flat ',
'Main languages are Spanish, Quechua, Aymara and Guarani with an additional 33 other recognized languages',
'Has the largest butterfly sanctuary',
'Used to be called upper peru before gaining independence in 1825 from spain',
'Where you can find pink dolphins in the amazon'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Chile = {
    countryName: 'Chile',
	intro: ' ',
    facts: ['Home to the world’s largest swimming pool and it is filled with seawater from the pacific',
'Where you can find the driest place on earth called the Atacama Desert runnning between the Andes Mountains and the Pacific',
'Known for the statues on Easter island called Moai',
'The capital is Sanitago founded by a spanish explorer in 1541',
'Derives its name meaning where the land ends',
'The national flag is similar to the state flag of texas',
'The longest country in the world from north to south',
'Pisco is the national drink which is a clear liquid similar to brandy',
'Famous for the Alerce tree with some older than 4,000 years',
'Home to the largest reserve of cooper'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Columbia = {
    countryName: 'Bolivia',
	intro: ' ',
    facts: ['One of two landlocked South American Countries',
'Named after the Venezuelan military and political leader who led 4 south american countries to independence from Spain',
'The capital is La Paz, the highest capital city in the world',
'Home to worlds most dangerous road the camino de las yungas',
'Where you offer dried llama to Pachamama or mother nature in return for blessings',
'Home to the largest mirror on Earth called Salar de Uyuni which is a large salt flat ',
'Main languages are Spanish, Quechua, Aymara and Guarani with an additional 33 other recognized languages',
'Has the largest butterfly sanctuary',
'Used to be called upper peru before gaining independence in 1825 from spain',
'Where you can find pink dolphins in the amazon'
],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}

var MiddleEast = [Egypt, Iran, Algeria, Tunisia, Oman, Morocco, Syria, Iraq, SaudiArabia, Lebanon];
var EastAsia = [Japan, China, Mongolia, Nepal, Taiwan, Philippines, Cambodia, Vietnam, NorthKorea, Malaysia];
var Africa = [SouthAfrica, Uganda, Kenya, Somalia, Sudan, Nigeria, Cameroon, Senegal, Ghana];
var SouthAmerica = [Brazil, Argentina, Venezuela, Colombia, Peru, Ecuador, Uruguay, Paraguay, Bolivia, Chile, Columbia];
var Region = [MiddleEast, EastAsia, Africa, SouthAmerica];
//criminal and people methods

var crimes = ['crime type 1', 'crime type 2', 'crime type 3'];

function name(country, gender)
{
    if(gender == 'male')
    {
        return country.m_names[rand(0, country.m_names.length -1)];
    }
    else
    {
        return country.f_names[rand(0, country.f_names.length -1)];
    }
}

//randomly picks 3 attributes that for the response person to describe
function seenAttributes ()
{
    var crimAttArr = ["body", "height", "eye", "hair", "special", "nextCountry"];
    var crimSeenArr = [];

    for( var s = 0; s < 3; s++)
    {
        shuffleArray(crimAttArr);
        crimSeenArr.push(crimAttArr.pop());
    }
    return crimSeenArr;

}
function PopulateCriminal()  {
    this.gender =  gender[rand(0, gender.length -1)];
    this.region = Region[rand(0, Region.length -1)];
    this.country = this.region[rand(0, this.region.length -1)];
    this.nextCountry = null; //should exempt current country, write a new method for this.
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairLength.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length) -1];
    this.height = height[rand(0, height.length) -1];
    this.special = special[rand(0, special.length) -1];
    this.name = name(this.country, this.gender);
    this.crime = crimes[rand(0, crimes.length) -1];
}

function PopulateResponsePerson() {
    //may not need all these attributes, can pick what we want to output
    this.seenValue = rand(0, 4);
    this.gender =  gender[rand(0, gender.length -1)];
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairLength.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length) -1];
    this.p_special = p_special[rand(0, p_special.length) -1];
    this.seenArr = seenAttributes();
}

//flags and methods to handle number of people talked to and countries visited
var criminal = null;
var r_person = null;
var talkedToCount = 0;
var stage = 0;
var countryVisited = 0; //count of times tried
var crimCountryVisitedArr = []; //array of countries criminal has been to, used to match against
var countryOutputList = []; //TODO Need to fill with 1 correct country and rest random. Splice the wrong country chosen when picked in checkCountry
var countryChoice = null;
var criminalArr = [0, 1, 2];
var talkingFlag = 0;
var questionedCount = 0;

function generateCountryList()
{
    var tempArr = [];
    var tempCountryArr = [];
    //empty the output list
    countryOutputList = [];
    var i = 0;
    if(stage == 0)
    {
        //push correct country
        countryOutputList.push(criminal.country);
        tempArr = Region;
        //remove the region where country is
        tempArr.splice(tempArr.indexOf(criminal.region));
        //add 3 random country from ANY region (except criminal's region) since this is first stage. right?
        //if we're just sticking to it having to be in the same region then just remove this if block.
        for(i = 0; i < 3; i++)
        {
            //random region assigned to temp
            tempCountryArr = tempArr[rand(0, tempArr.length - 1)];
            //random country assigned to output
            countryOutputList.push(tempCountryArr[rand(0, tempCountryArr.length - 1)]);
        }

    }
    else
    {
        //one correct country
        countryOutputList.push(criminal.country);
        //Assigning all countries in region to tempArr
        tempArr = criminal.region;
        //removing criminal.country from that list
        tempArr.splice(tempArr.indexOf(criminal.country));
        //add 3 random country objects from criminal's region
        for(i = 0; i < 3; i++)
        {
            shuffleArray(tempArr);
            countryOutputList.push(tempArr.pop());
        }
    }
    //shuffles the array.
    shuffleArray(countryOutputList);
}

//function checkCountry(country)
function checkCountry()
{
    var country = this.event.request.intent.slots.country_item.value;
	//this.emit(":ask", "inside check country. ", country);
	
	//assign choice of country and count for validation checking in other methods
    countryVisited++;

    if(stage == 0)
    {
        console.log("in stage 0 for checkCountry");
        for (i = 0; i < Region.length; i++)
        {
            for(j = 0; j < Region[i].length; j++)
            {
                if (Region[i][j].countryName == country)
                {
                    //assign countryChoice if said country is a valid choice
                    countryChoice = Region[i][j];
                }
            }
        }

        try {
            //if country doesn't register then they gave a country name we don't have, error output
            if (countryChoice.countryName != country) {
                //error response, prompt for a valid country choice.
                console.log("given country string did not match");
                //fix counter
                countryVisited--;
            }

            //if correct country chosen then reset count, go to next stage, assign next country
            if (criminal.country.countryName == country) {
                console.log("correct country given");
                countryVisited = 0;
                stage++;
    
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
                this.emit(":ask", speechOutput);

            }
            else if (criminal.country.countryName != country && countryVisited >= 2) {
                //you lose.
                console.log("you lose");
                //TODO ask if they want to play again
                var speechOutput = this.t("LOSE");
                this.emit(":ask", speechOutput);
            }
            else
            {
                //picked wrong country but only on first try
                
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
                this.emit(":ask", speechOutput);
            }
        } catch (error) {
            console.log("CountryChoice incorrect handling");
        }
    }
    else
    {
        console.log("in else stage for checkCountry");
        for(i = 0; i < criminal.region.length; i++)
        {
            if(criminal.region[i].countryName == country)
            {
                countryChoice = criminal.region[i];
            }
        }

        try {
            //if country chosen doesn't exist
            if (countryChoice.countryName != country) {
                //error response, prompt for a valid country choice.
                console.log("given country string did not match");
                //fix counter
                countryVisited--;
            }

            //if correct country chosen then reset count, go to next stage, assign next country
            if (criminal.country.countryName == country) {
                console.log("correct country given");
                countryVisited = 0;
                stage++;
                crimCountryVisitedArr.push(countryChoice);
                //assignNextCountry();
                
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
                this.emit(":ask", speechOutput);
            }
            else if (criminal.country.countryName != country && countryVisited >= 1) {
                //you lose.
                console.log("you lose");
                //TODO ask if they want to play again
                var speechOutput = this.t("LOSE");
                this.emit(":ask", speechOutput);
            }
            else
            {
                //picked wrong country
                
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
                this.emit(":ask", speechOutput);
            }
        }catch(error) {console.log("error in countryChecked()");}
    }


}

//assign next country
function assignNextCountry()
{
    var found = 0;
    var temp = undefined;
    if(stage == 0)
    {
        console.log("in stage 0 of assign trying to push "+ criminal.country);
        console.log(criminal.country);
        crimCountryVisitedArr.push(criminal.country);
        found = 0;
        while(found == 0)
        {
            temp = criminal.region[rand(0, criminal.region.length -1)];
            if(crimCountryVisitedArr.indexOf(temp) == -1)
            {
                console.log("next countries before assigned:");
                console.log(criminal.nextCountry);
                criminal.nextCountry = temp;
                console.log("next countries after assigned:");
                console.log(criminal.nextCountry);

                //exit loop
                found++;
            }
        }
    }
    else
    {
        console.log("in stage else of assign");
        found = 0;
        while(found == 0)
        {
            temp = criminal.region[rand(0, criminal.region.length -1)];
            if(crimCountryVisitedArr.indexOf(temp) == -1)
            {
                console.log("next countries before assigned country:next:");
                console.log(criminal.country);
                criminal.country = criminal.nextCountry;
                console.log(temp);
                criminal.nextCountry = temp;
                console.log("next countries after assigned:");
                console.log(criminal.nextCountry);

                //exit loop
                found++;
            }
        }
    }
    generateCountryList();
}

function lastStage()
{
    var speechOutput;
    shuffleArray(criminalArr);
    var crimVar = criminalArr.pop();
    //removing criminal traits from attribute arrays so randomizer doesn't pick them
    t_height.splice(t_height.indexOf(criminal.height), 1);
    t_body.splice(t_body.indexOf(criminal.body), 1);
    t_eyeSize.splice(t_eyeSize.indexOf(criminal.eyeSize), 1);
    t_eyeColor.splice(t_eyeColor.indexOf(criminal.eyeColor), 1);
    t_hairLength.splice(t_hairLength.indexOf(criminal.hairLength), 1);
    t_hairColor.splice(t_hairColor.indexOf(criminal.hairColor), 1);
    //might keep special, idk.
    t_special.splice(t_special.indexOf(criminal.special), 1);

    if(crimVar == 2)
    {
        console.log( "A " +criminal.height + " " +criminal.body+ " " +pronounThird(criminal.gender)+" with "
            + criminal.eyeSize +" " +criminal.eyeColor + " eyes, "
            + criminal.hairLength+ " " + criminal.hairColor + " hair, and a"
            + criminal.special+" walks by. This is the Criminal.");

        //can we use emit like this?
        speechOutput = "A " +criminal.height + " " +criminal.body+ " " +pronounThird(criminal.gender)+" with "
            + criminal.eyeSize +" " +criminal.eyeColor + " eyes, "
            + criminal.hairLength+ " " + criminal.hairColor + " hair, and a"
            + criminal.special+" walks by. This is the Criminal.";
        this.emit(":tell", speechOutput);

        speechOutput = this.t("ACCUSE");
        this.emit(":ask", speechOutput);



    }
    else
    {
        //randomly picks 1 or 2 attributes to change
        var criminalAtt = [criminal.height, criminal.body, criminal.eyeSize, criminal.eyeColor, criminal.hairLength,
            criminal.hairColor, criminal.special];
        var attributeInd = [0 , 1, 2, 3, 4, 5, 6];
        var randNum = rand(1, 2);
        shuffleArray(attributeInd);

        for(r = 1; r <= randNum; r++)
        {
            switch(attributeInd[r])
            {
                case 0:
                    criminalAtt[attributeInd[r]] = t_height[rand(0, t_height.length) - 1];
                    break;
                case 1:
                    criminalAtt[attributeInd[r]] = t_body[rand(0, t_body.length) -1];
                    break;
                case 2:
                    criminalAtt[attributeInd[r]] = t_eyeSize[rand(0, t_eyeSize.length -1)];
                    break;
                case 3:
                    criminalAtt[attributeInd[r]] = t_eyeColor[rand(0, t_eyeColor.length -1)];
                    break;
                case 4:
                    criminalAtt[attributeInd[r]] = t_hairLength[rand(0, t_hairLength.length -1)];
                    break;
                case 5:
                    criminalAtt[attributeInd[r]] = t_hairColor[rand(0, t_hairLength.length -1)];
                    break;
                case 6:
                    //might remove case 6 as specials might be too easy
                    criminalAtt[attributeInd[r]] = t_special[rand(0, t_special.length) -1];
                    break;
                default:
                    console.log("error populating final stage random person");
                    break;
            }
        }
        console.log( "A " +criminalAtt[0] + " " +criminalAtt[1]+ " " +pronounThird(criminal.gender)+" with "
            + criminalAtt[2] +" " +criminalAtt[3] + " eyes, "
            + criminalAtt[4]+ " " + criminalAtt[5] + " hair, and a"
            + criminalAtt[6]+" walks by. This is not the Criminal.");

        speechOutput = "A " +criminalAtt[0] + " " +criminalAtt[1]+ " " +pronounThird(criminal.gender)+" with "
            + criminalAtt[2] +" " +criminalAtt[3] + " eyes, "
            + criminalAtt[4]+ " " + criminalAtt[5] + " hair, and a"
            + criminalAtt[6]+" walks by. This is not the Criminal.";
        this.emit(":tell", speechOutput);

        speechOutput = this.t("ACCUSE");
        this.emit(":ask", speechOutput);

    }
}

//called when 'TarryStopIntent is called. checks for number of people talked to is <= 5. If less,  then generates next person to talk to.
function talkedTo()
{
    // line below testing only
	//this.emit(":ask", "inside talked to");
	
	var speechOutput;
    //final stage prompt.
    if(stage >= 3)
    {
        //stuff for populating possible criminals for player to stop.
        lastStage();
        //console.log("third stage people walk by");
    }
    else {
        //non-final stages
        talkedToCount++;
        //wrong country
        if (countryChoice != criminal.country) {
            talkedToCount += 3;
            //persons just walk by or have nothing to say
            speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender))+ this.t("CONTINUE_PROMPT"); // added continue searching prompt. need to handle their response somewhere
            this.emit(":ask", speechOutput);
            //exit from country on 2nd talk in wrong country
            if (talkedToCount >= 6)
            {
                //talked to 2 people in the wrong country
                console.log("wrong country response");
                //TODO will need to relist the countries here
                speechOutput = this.t("WRONG_COUNTRY") + this.t("CHOOSE_AGAIN") + 
				this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
                this.emit(":ask", speechOutput);
            }
        }
        //right country
        else {
            //if the person has not seen anything or doesn't want to talk to you
            if (r_person.seenValue == 0) {
                console.log("r_person seen value = 0 reponses");
                //right country but person hasn't seen anything (20% chance)
                speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender)) + this.t("CONTINUE_PROMPT"); // added continue searching prompt. need to handle their response somewhere
                this.emit(":ask", speechOutput);

            }
            //if person has seen something
            else {
                console.log("r_person seen value NOT 0 responses");
                //TODO questioning responses here, just putting obvious country facts as clues here for testing
                //0.00032 chance you won't see clues after talking to 5 people lol. Might need to fix that.
                speechOutput = this.t("CORRECT_PERSON_RESPONSE", pronoun(criminal.gender));
                this.emit(":tell", speechOutput);
            }
        }
        //moved this block to doneQuestioning()

    }
}

function doneQuestioning ()
{
    var speechOutput;
    questionedCount = 0;
    if (talkedToCount == 5) {
        console.log("resetting counter, 5 people talked to, time to choose a country");
        talkedToCount = 0;
        //if they were in the correct country and finished talking to 5 people
        if (countryChoice == criminal.country) {
            assignNextCountry();
            console.log("reached final person to talk to in 0 response");

            speechOutput = this.t("LAST_PERSON");
            this.emit(":ask", speechOutput);
        }

    }
    else {
        console.log("populating new r_person from doneQuestioning");
        r_person = new PopulateResponsePerson();
        //build response for next person walking by.

        speechOutput = this.t("DONE_QUESTIONING", pronoun(r_person.gender));
        this.emit(":tell", speechOutput);
        speechOutput = this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, criminal.body);
        this.emit(":ask", speechOutput);
    }
}

//questionType:
//1 = background
//2 = looks
//3 = location
function generateQuestionResponse(questionType)
{
    questionedCount++;
    var responseString = pronoun(criminal.gender) + " ";
    if(questionedCount > 3)
    {
        doneQuestioning();
    }
    else if(questionType == 1)
    {
        if(r_person.seenArr.indexOf("height") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.height + "figure ";
            }
            else
            {
                responseString += "a " + criminal.height + " figure ";
            }
        }
        if(r_person.seenArr.indexOf("body") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.body + " build ";
            }
            else
            {
                responseString += "a " + criminal.body + " build ";
            }

        }
        if(r_person.seenArr.indexOf("eye") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
            else
            {
                responseString += "and, " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
        }
        if(r_person.seenArr.indexOf("hair") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.hairLength +", " +criminal.hairColor+ " hair ";
            }
            else
            {
                responseString += "and, " + criminal.hairLength +", " +criminal.hairColor+ " hair";
            }
        }
        if(r_person.seenArr.indexOf("special") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.special +" ";
            }
            else
            {
                responseString += "and, " + criminal.special +" ";
            }
        }

        //TODO Chad can I use this.emit like this? Just passing a string as responseString
        speechOutput = this.t(responseString);
        this.emit(":ask", speechOutput);
    }
    else if(questionType == 2)
    {
        if(r_person.seenArr.indexOf("height") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.height + "figure ";
            }
            else
            {
                responseString += "a " + criminal.height + " figure ";
            }
        }
        if(r_person.seenArr.indexOf("body") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.body + " build ";
            }
            else
            {
                responseString += "a " + criminal.body + " build ";
            }

        }
        if(r_person.seenArr.indexOf("eye") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
            else
            {
                responseString += "and, " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
        }
        if(r_person.seenArr.indexOf("hair") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.hairLength +", " +criminal.hairColor+ " hair ";
            }
            else
            {
                responseString += "and, " + criminal.hairLength +", " +criminal.hairColor+ " hair";
            }
        }
        if(r_person.seenArr.indexOf("special") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.special +" ";
            }
            else
            {
                responseString += "and, " + criminal.special +" ";
            }
        }

        //TODO Chad can I use this.emit like this? Just passing a string as responseString
        speechOutput = this.t(responseString);
        this.emit(":ask", speechOutput);
    }
    else if(questionType == 3)
    {
        //TODO can change this to >= 0 if you want to always have person give clues on next country.
        if(r_person.seenValue > 0)
        {

            speechOutput = this.t("COUNTRY_FACT", pronoun(criminal.gender), criminal.country.facts )
        }
    }
    else
    {
        console.log("error question type was incorrect, expecting 1, 2, or 3");
    }
}

//Chad TODO
//fill intents with whatever repsonses just to test if we are triggering them.
// test, added by Chad ***************************************************************************************************
var Alexa = require("alexa-sdk");
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
var countryString = undefined;

function Countries(number){
	return "Test Country Name";
}

// example of pause, TODO add where needed
/*
var speech = new Speech();

speech.say('This is a test response & works great!');
speech.pause('100ms');
speech.say('How can I help you?');    
var speechOutput = speech.ssml(true);        
this.emit(':ask', speechOutput , speechOutput); 
*/

// example of sound clip, TODO find and host clips, add where needed
/*var speechOutput = {
  speech: "<speak>Welcome to the sand box. "
    + "<audio src='https://s3.amazonaws.com/sounds226/boom.mp3'/>"
    + "</speak>",
  type: AlexaSkill.speechOutputType.SSML
  },
  repromptOutput = {
    speech: "This is the reprompt text. ",
    type: AlexaSkill.speechOutputType.PLAIN_TEXT
  };

response.ask(speechOutput, repromptOutput);
*/

var languageString = {
    "en": {
        "translation": {
            //"QUESTIONS" : questions["QUESTIONS"],
            "GAME_NAME" : "Seuth Hound", 
            "HELP_MESSAGE": "Need to add help message ", // add if needed
            "REPEAT_MESSAGE": "To repeat the last question, say, repeat. ", // use if needed
            "HELP_REPROMPT": "Need to add help reprompt", // add if needed
            "STOP_MESSAGE": "Would you like to keep playing?",
            "CANCEL_MESSAGE": "Ok, let\'s play again soon.", // if needed
            "NO_MESSAGE": "Ok, we\'ll play another time. Goodbye!", // if needed
            "HELP_UNHANDLED": "Say yes to continue, or no to end the game.",
            "START_UNHANDLED": "Say start to start a new game.",
			"GAME_UNHANDLED": "game unhandled error.",
			"PAUSE": " . . .",
            "NEW_GAME_MESSAGE": "Welcome to %s. ",
			"GAME_START_MESSAGE": "Are you ready for a mission? ",
            "INTRO_MESSAGE": "We are on the hunt for %s.  %s is wanted in connection with a recent string of %s crimes resulting in %s million in damages. We must help bring the criminal responsible for these crimes to justice before %s goes into hiding. It will not be an easy task to catch %s , so pay close attention to clues on %s looks and whereabouts. %s was last seen in %s. Enough talking, we need to go ",
			"LOCATION_TEST": "%s is in %s, %s. ", // testing only
			"CHOOSE_COUNTRY": "  Where should we start our search? ",
			"CHOOSE_AGAIN": "Where would you like to go now? ",
			"COUNTRY_LIST": "%s, %s, %s, or %s? ",
			"DEPARTURE_MESSAGE": "%s it is. Talk to you when you land. Get going sleuth! Insert Sound clip airplane taking off. ",
			"ARRIVAL_MESSAGE": "%s. Time to find info on %s. Get the attention of bystanders so you can ask them about the criminal, and where the criminal is going. ",
			"PERSON_APPROACHING": "%s %s %s approaching. ",
			"PERSON_RESPONSE": "%s walked by without acknowleding you . ",
            "CORRECT_PERSON_RESPONSE": "Looks like this person might know something, maybe ask about the criminals looks, where he's going, or who %s is",
			"CONTINUE_PROMPT": "Would you like to continue your search for clues? ",
            "LOSE": "You loser",
            "WIN": "You Win",
            "WRONG_COUNTRY": "This doesn't seem to be the correct Country, try a different one",
            "LAST_PERSON": "Looks like we've talked to everyone, it's time to pick the next country",
            "DONE_QUESTIONING": "Seems like that's all %s has to say, let's look for someone else.",
            "COUNTRY_FACTS": "I heard %s is going to %s",
            "ACCUSE": "Is this the Criminal? If so, say stop"
		}
    },
    "en-US": {
        "translation": {
            //"QUESTIONS" : questions["QUESTIONS"],
            "GAME_NAME" : "Sleuth Hound"
        }
    }
};

var GAME_STATES = {
    PLAY: "_PLAYMODE", // Playing the game.
    START: "_STARTMODE", // Entry point, start the game.
    HELP: "_HELPMODE" // The user is asking for help.
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageString;
    alexa.registerHandlers(newSessionHandlers, startStateHandlers, gameStateHandlers, helpStateHandlers);
    alexa.execute();
};

var newSessionHandlers = {
    "LaunchRequest": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", true);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", true);
    },
    "AMAZON.HelpIntent": function() {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState("helpTheUser", true);
    },
    "Unhandled": function () {
        var speechOutput = this.t("START_UNHANDLED");
        this.emit(":ask", speechOutput, speechOutput);
    }
};

var startStateHandlers = Alexa.CreateStateHandler(GAME_STATES.START, {
    "StartGame": function (newGame) {
		// welcomes play and asks if they want to play
		var speechOutput = newGame ? this.t("NEW_GAME_MESSAGE", this.t("GAME_NAME")) + this.t("GAME_START_MESSAGE") : "";
        // Set the current state to play mode. The skill will now use handlers defined in gameStateHandlers
        this.handler.state = GAME_STATES.PLAY;
        this.emit(":askWithCard", speechOutput);
    }
});

var gameStateHandlers = Alexa.CreateStateHandler(GAME_STATES.PLAY, {
    "GameStart": function () {
        criminal = new PopulateCriminal();
        r_person = new PopulateResponsePerson();
        //criminal name already populated with above code.
		//criminal.name = name(criminal.country, criminal.gender);
        //assigns the country the criminal will be headed to next so we can give clues regarding that.
		assignNextCountry();

		// introduces criminal and crime, asks which country the user would like to visit, TODO prompt with country choices
        //Grab country name like this: countryOutputList[i].countryName, where i = 0 to 3.
        //countryOutputList is already shuffled so you can use any order of index you like.
		var speechOutput = this.t("INTRO_MESSAGE", criminal.name, pronoun(criminal.gender), criminal.crime, rand(50, 800), criminal.name, criminal.name, pronounOwnership(criminal.gender), criminal.name, criminal.country.facts[0]) + 
		this.t("CHOOSE_COUNTRY") + 
		this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
		this.emit(":ask", speechOutput);
    },
    "CountryIntent": function () {
		// line below sets country to the one the user spoke, from the country_item slot list
        //changed variable name, countryChoice needs to store an country Object which contains name, clues, etc.
		//countryString = this.event.request.intent.slots.country_item.value;
		//this.emit(":ask", countryString);
		//checkCountry(countryString);
		checkCountry.call(this);
		//moved this emit to checkCountry Method
		//var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.countryName, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
        //this.emit(":ask", speechOutput);
    },
	"TarryStopIntent": function () {      
		//r_person = new PopulateResponsePerson();
		talkedTo.call(this);
		//var speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender));
		//this.emit(":ask", speechOutput);
    },
    "CrimeBackgroundQuestionIntent": function () {
        generateQuestionResponse(1);
    },
    "CriminalLooksQuestionIntent": function () {
        generateQuestionResponse(2);
    },
    "CriminalLocationQuestionIntent": function () {
        generateQuestionResponse(3);
    },
    "DoneQuestioningIntent": function () {
        doneQuestioning();

    },
    "NabThiefIntent": function () {

    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", false);
    },
    "AMAZON.RepeatIntent": function () {
        this.emit(":ask", this.attributes["speechOutput"], this.attributes["repromptText"]);
    },
    "AMAZON.HelpIntent": function () {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState("helpTheUser", false);
    },
    "AMAZON.StopIntent": function () {
        this.handler.state = GAME_STATES.HELP;
        var speechOutput = this.t("STOP_MESSAGE");
        this.emit(":ask", speechOutput, speechOutput);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("CANCEL_MESSAGE"));
    },
    "Unhandled": function () {
        var speechOutput = this.t("GAME_UNHANDLED");
        this.emit(":ask", speechOutput, speechOutput);
    }, 
    "SessionEndedRequest": function () {
        console.log("Session ended in trivia state: " + this.event.request.reason);
    }
});

// TODO, these copied from example. Still need to be adapted
var helpStateHandlers = Alexa.CreateStateHandler(GAME_STATES.HELP, {
    "helpTheUser": function (newGame) {
        var askMessage = newGame ? this.t("ASK_MESSAGE_START") : this.t("REPEAT_QUESTION_MESSAGE") + this.t("STOP_MESSAGE");
        var speechOutput = this.t("HELP_MESSAGE", GAME_LENGTH) + askMessage;
        var repromptText = this.t("HELP_REPROMPT") + askMessage;
        this.emit(":ask", speechOutput, repromptText);
    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", false);
    },
    "AMAZON.RepeatIntent": function () {
        var newGame = (this.attributes["speechOutput"] && this.attributes["repromptText"]) ? false : true;
        this.emitWithState("helpTheUser", newGame);
    },
    "AMAZON.HelpIntent": function() {
        var newGame = (this.attributes["speechOutput"] && this.attributes["repromptText"]) ? false : true;
        this.emitWithState("helpTheUser", newGame);
    },
    "AMAZON.YesIntent": function() {
        if (this.attributes["speechOutput"] && this.attributes["repromptText"]) {
            this.handler.state = GAME_STATES.TRIVIA;
            this.emitWithState("AMAZON.RepeatIntent");
        } else {
            this.handler.state = GAME_STATES.START;
            this.emitWithState("StartGame", false);
        }
    },
    "AMAZON.NoIntent": function() {
        var speechOutput = this.t("NO_MESSAGE");
        this.emit(":tell", speechOutput);
    },
    "AMAZON.StopIntent": function () {
        var speechOutput = this.t("STOP_MESSAGE");
        this.emit(":ask", speechOutput, speechOutput);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("CANCEL_MESSAGE"));
    },
    "Unhandled": function () {
        var speechOutput = this.t("HELP_UNHANDLED");
        this.emit(":ask", speechOutput, speechOutput);
    },
    "SessionEndedRequest": function () {
        console.log("Session ended in help state: " + this.event.request.reason);
    }
});

// end test ******************************************************************************************

/*
exports.handler = (event, context) => {
    // New session
    try{
        if(event.session.new)
        {
            console.log("NEW SESSION")

        }

        switch (event.request.type)
        {
            case "LaunchRequest":
                //var output = "Welcome to sleuth hound"
                context.succeed(generateResponse({}, buildSpeechletResponse("Welcome to sleuth hound Alan", false)));
                break;

            case "IntentRequest":
                //intent request
                //main stuff here
                switch(event.request.intent.name)
                {
                    case "GameStart":
                        //false start check. If games already in place ask if they want to start a new one.
                        //populate criminal
                        criminal = new PopulateCriminal();
                        assignNextCountry();
                        r_person = new PopulateResponsePerson();
                        break;

                        //build a response using criminal.country.facts, criminal.name, criminal.gender
                    case "CountryIntent":
                        //false country pick check. If TalkedToCount < 5 then tell the user they haven't finished talking to all NPC yet.
                        //Chad TODO
                        //Figure out how to grab the country slot value when this Country intent is triggered so it can be used in checkCountry(country)
                        //grab country from intent first then call checkCountry(country) method
                        checkCountry(country);
                        //arrival jingle response

                        //response from countryChoice.facts[rand(0, countryChoice.facts.length -1]

                        //build-person walking-by response using r_person.gender, r_person.p_special

                        break;

                    case "TarryStopIntent":
                        //false stop check. If not currently
                        talkedTo();
                        break;

                    //case "CrimeBackgroundQuestionIntent":
                    //    break;
                    default:
						console.log("default")
                }
                console.log("INTENT REQUEST")
                break;

            case "SessionEndedRequest":
                console.log('SESSION ENDED REQUEST')
                break;

            default:
                context.fail('INVALID REQUEST TYPE: ${event.request.type}')
        }

    } catch(error) {context.fail("Exception: " + error);}

} */

function printStuff()
{
    console.log(criminal)
    console.log(r_person)
    console.log(talkedToCount);
    console.log(stage);
    console.log(countryVisited);//count of times tried
    console.log(crimCountryVisitedArr);//array of countries criminal has been to, used to match against
    console.log(countryChoice);
}


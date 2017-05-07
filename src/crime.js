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

function contPronoun( gender )
{
    if(gender == 'male')
    {
        return "he's";
    }
    else
    {
        return "she's";
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
var gender = ['male', 'female', 'drag queen', 'transgender'];
var hairLength = ['long', 'short', 'medium', 'bald', 'curly'];
var hairColor = ['black', 'brown', 'blond', 'red', 'silver', 'gray', 'dark', 'light'];
var eyeSize = ['small', 'large'];
var eyeColor = ['black', 'brown', 'blue', 'green', 'hazel'];
var body = ['heavy-set', 'thin', 'average'];
var height = ['petite', 'average', 'tall'];
var special = ['missing hand', 'cane', 'eye patch', 'glasses', 'shades', 'beanie'];
var p_special = ['headphones', 'bathing suit', 'bag', 'satchel'];
var greetings = ['hey', "what's up'", 'hi'];

//temp vars that can be spliced in case game gets restarted
//temp vars that can be spliced in case game gets restarted
//var t_height = height.slice(0);
//var t_body = body.slice(0);
//var t_eyeSize = eyeSize.slice(0);
//var t_eyeColor = eyeColor.slice(0);
//var t_hairLength = hairLength.slice(0);
//var t_hairColor = hairColor.slice(0);
//var t_special = p_special.slice(0);

//Middle East
var Egypt  = {
    countryName: 'Egypt',

	intro: 'Welcome to Egypt, an ancient civilization dating back to 3200 BC. Egypt is part of the fertile crescent because of the Nile River. ',
    facts:  ['Where the worlds oldest dress was found over 5,000 years ago', 
'The nation of the steppe eagle', 
'Where the statue of liberty was originally intended at the suez canal lighting the way to asia', 
'Where the first sailing boats were invented',
'Where the tradition of exchanging wedding rings started',
'Known for the Great Pyramid of Giza',
'The country with the worlds largest arab population',
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
'Where the worlds oldest continuous civilizations dating back 4000 BC',
'The inventors of a water supply system called qanat, which collects underground water and moves it through tunnels',
'Known for the best rugs and tapestry',
'The worlds largest producers of caviar, pistachios, and saffron',
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

	intro: 'Welcome to Algeria, a nation with over 2 million square kilometers of land, only 12% of which is inhabited. 98% of Algerias exports consist of petroleum and gas. ',

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
    m_names: ['Abdou', 'Ahmen', 'Karim', 'Ali', 'Rasheed', 'Braheem'],
    f_names: ['Zayneb', 'Ghita', 'Marwa', 'Alia', 'Lina', 'Raniya'],
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
'The capital city translates to Gods Gift.',
'Where poetry and literature thrived with tales such as A thousand and One Nights',
'Dont forget to try the Tigris fish roasted over an open fire'
],

    m_names: ['Zamanlabib', 'Mustafa', 'Barhoomee', 'Baravan', 'Jahmir', 'Fadhil'],
    f_names: ['Zainab', 'Noora', 'Sham', 'Telenaz', 'Rukia', 'Kayoosh'],
    region: 'Middle East'
}
var SaudiArabia = {
    countryName: 'Saudi Arabia',

	intro: 'Welcome to Saudi Arabia, where around 100 camels are sold every day in its capital city. A very high 60% of Saudi Arabias workforce is foreign ',

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
'The country is know as Gods Country on Earth',
'The creators of Tom & Jerrry and directed other cartoons such as Scooby-Doo, The Jetsons, and The smurfs are lebanese'
],

    m_names: ['Mahmous', 'Nader', 'Ayman', 'Wehbe', 'Rami', 'Moukhtar'],
    f_names: ['Nour', 'Alaa', 'Souad', 'Sousou', 'Yasmine', 'Fatme'],
    region: 'Middle East'
}

//East Asia
var Japan = {
    countryName: 'Japan',

	intro: 'Welcome to Japan, with its 108 active volcanoes, as part of the Pacific Oceans ring of fire.Japan consists of 47 prefectures, each lead by an elected governor. ',

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

	intro: 'Welcome to China, home to the worlds entire giant panda population.  ',
    facts: ['Home to the largest population in the world',
'Capital is Beijing',
'Known for the great wall, which is the largest man made structure in the world soon to be trumped by President Trump haha',
'The worlds largest army',
'The worlds largest exporter of goods',
'The national sport is table tennis',
'Half of the worlds pigs live in china',
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

	intro: 'Welcome to Mongolia, with the worlds coldest national capital, Ulaanbaatar, averaging -1 degrees celsius. ',

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
    m_names: ['Dana', 'Ankhbaatar', 'Davaa', 'Zev', 'Bat-Erdene', 'Altantsetseg'],
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

var Taiwan = {
    countryName: 'Taiwan',

	intro: 'Welcome to Taiwan, a country whose aboriginal people are attributed to have spread their culture as far as Madagascar to the west and Hawaii to the east. Taiwans national father, Sun Yat Sen, was actually American. ',

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
    m_names: ['Pai-han', 'Cheng-han', 'Kuan-ting', 'Kuan-yu', 'Chun-chieh', 'Yu-hsuan'],
    f_names: ['Hui-ju', 'Chia-hua', 'Shu-fen', 'Wei-ting', 'Ya-fand', 'Hsin-yi'],
    region: 'East Asia'
}
var Philippines = {
    countryName: 'Philippines',
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
    m_names: ['Ian', 'Mark', 'Kyle', 'Jeff', 'Francis', 'Louis'],
    f_names: ['Nicole', 'Alyssa', 'Karen', 'Valerie', 'Mary', 'Trisha'],
    region: 'East Asia'
}
var Cambodia = {
    countryName: 'Cambodia',

	intro: 'Welcome to Cambodia, overcoming a tragic past that included the genocide of several million people, it is now one of Asias fastest growing economies, with a robust tourism industry revolving around its deep history and ancient architecture. ',

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
    m_names: ['Bora', 'Chakara', 'Chann', 'Borey', 'Mao', 'Meaker'],
    f_names: ['Akara', 'Chariya', 'Jorani', 'Davi', 'Kiri', 'Kesor'],
    region: 'East Asia'
}
var Vietnam = {
    countryName: 'Vietnam',

	intro: 'Welcome to Vietnam, home of the worlds largest cave, and the regions highest mountain, known as the roof of indochina. ',

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
    m_names: ['Dinh', 'Thuan', 'Trai', 'Trang', 'Khan', 'Hung'],
    f_names: ['Chau', 'Bian', 'Tien', 'Hue', 'Mai', 'Huong'],
    region: 'East Asia'
}
var NorthKorea = {
    countryName: 'North Korea',

	intro: 'Welcome to North Korea, founded in 1948 and officially name Democratic Peoples Republic of Korea. Despite its name, it is considered the most authoritarian regime in the world, with all elections having only one candidate. ',
    facts: ['Where the calendar is based on Kim II-Sungs date of birth',
'Home to the worlds largest stadium',
'The national instrument is the accordion',
'Where godzilla is known as Pulgasari',
'Where you can score 4-points in a basketball game and lose points for missed free throws',
'The capital city is Pyongyang',
'They live off of the principle of juche or self reliance',
'Where they have their own time zone',
'Land of the morning Calm',
'Home to the DMZ, which is the most heavily guarded border in the world'
],

    m_names: ['Kim', 'Ban Ki-Moon', 'Chul', 'Hwan', 'Haneul', 'Suk'],
    f_names: ['Areum', 'Eun', 'Sung', 'Yeong', 'Wook', 'Uk'],
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
    m_names: ['Ahmad', 'Ryan', 'Jack', 'Adam', 'Richard', 'Harris'],
    f_names: ['Mira', 'Sarah', 'Lisa', 'Wani', 'Irdina', 'Nisa'],
    region: 'East Asia'
}

//Africa
var SouthAfrica = {
    countryName: 'South Africa',
    intro: 'Welcome to South Africa, most famous for Nelson Mandela, Kruger National Park, and a variety of gem stones and minerals',
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
    m_names: ['Junior', 'Bandile', 'Thato', 'Siyabonga', 'Lethabo', 'Kungawo'],
    f_names: ['Minenhle', 'Amahle', 'Karabou', 'Iminathi', 'Lesedi', 'Amogelang'],
    region: 'Africa'
}
var Uganda = {
    countryName: 'Uganda',
    intro: 'Welcome to Uganda refered to as the Pearl of Africa. Most famous for being the source of the Nile River',
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
    m_names: ['Dembe', 'Majani', 'Amare', 'Mukisa', 'Ebo', 'Kojo'],
    f_names: ['Amaka', 'Kia', 'Kamali', 'ife', 'Asha', 'Eshe'],
    region: 'Africa'
}
var Kenya = {
    countryName: 'Kenya',
    intro: 'Welcome to Kenya known as the cradel of mankind and home to the Big 5; Lions, Elephants, Buffalo, Rhinos and Leopards',
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
    m_names: ['Abdullah', 'Hanif', 'Muraty', 'Musa', 'Safiri', 'Shani'],
    f_names: ['Abbo', 'Asya', 'Himaya', 'Hasanati', 'Sanura', 'Aisha'],
    region: 'Africa'
}
var Somalia = {
    countryName: 'Somalia',
    intro: 'Welcome to Somalia known as the Land of Punt. Punt was famous for frankincense and myrrh.',
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
    m_names: ['Aynab', 'Muhammad', 'Jawahir', 'Ladan', 'Braheem', 'Nadeem'],
    f_names: ['Jameelah', 'Aamina', 'Khadija', 'Uba', 'Ugbad', 'Filsan'],
    region: 'Africa'
}
var Sudan = {
    countryName: 'Sudan',
    intro: 'Welcome to Sudan, the biggest country in Africa, but it receives the least number of international visitors among African countries due to the ongoing conflict in several parts of Sudan.',
    facts: ['The capital is Khartoum',
        'The official language is Arabic and english with the country meaning The land of the Blacks',
        'Used to be the largest country in Africa before being split into north and south in 2011',
        'They border the red sea',
        'Just a hop and skip away from Saudi Arabia',
        'The capital means elephant trunk because the resemblance to the bend in the nile river there',
        'The northern and western part of the country contain remnants of old volcanoes',
        'There are more pyramids here than in egypt',
        'Home to the first women movement in Africa and Middle East during the 60s',
        'They had the first female parliamentarian in 1965 and the first female minister of health in 1974'
    ],
    m_names: ['Suleyman', 'malce', 'Ibraheem', 'Shakir', 'Kareem', 'Patrick'],
    f_names: ['Yaya', 'Nadia', 'Anita', 'Hiba', 'joyce', 'Racehl'],
    region: 'Africa'
}
var Nigeria = {
    countryName: 'Nigeria',
    intro: 'Welcome to Nigeria. When you think oil, you think Nigeria. Nigeria remains Africas largest oil producer ',
    facts: ['Located near the ivory coast',
        'Where you can find the infamous prince that can make you rich over email',
        'Known as the Giant of Africa due to its large population and economy',
        'The capital is Abuja',
        'It borders the Gulf of Guinea, which leads to the Atlantic ocean',
        'Home to the Zuma Rock, the gateway to the capital',
        'The flag is 3 vertical stripes with 2 green sandwhiching one white stripe',
        'Most famous for petroleum',
        'Home to the city of Lagos which is known as Africas big apple',
        'Known for hollywood type scene called Nollywood'
    ],
    m_names: ['Simon', 'Akoni', 'Kalu', 'Kelechi', 'Kwento', 'Oba'],
    f_names: ['Alkana', 'Iyawa', 'Juba', 'Kokumu', 'Lewa', 'Obi'],
    region: 'Africa'
}
var Cameroon = {
    countryName: 'Cameroon',
    intro: 'Welcome to Cameroon known as All of Africa in one country due to its geography and lively culture of music, particularly makossa and bikutsi, and for its successful national football team. ',
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
    m_names: ['Mamado', 'Alfa', 'Joseph', 'Demba', 'Samba', 'Alex'],
    f_names: ['Amy', 'Ouria', 'Seynabou', 'Pauline', 'Angel', 'Cynthia'],
    region: 'Africa'
}
var Senegal = {
    countryName: 'Senegal',
    intro: 'Welcome to Senegal known as the vibrant pulse of West Africa due to its tradition of storytelling, which is done by griots, who have kept West African history alive for thousands of years through words and music',
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
    m_names: ['Yves', 'Romeo', 'Frank', 'Oliver', 'Nelson', 'Wilson'],
    f_names: ['Cynthia', 'Stephanie', ' Marie', 'Laura', 'Hillary', 'Diana'],
    region: 'Africa'
}
var Ghana = {
    countryName: 'Ghana',
    intro: 'Welcome to Ghana historically famous for its gold. It was previously called the Gold Coast. Now, Chocolate has probably taken over, with it being one of the key suppliers of Cocoa to the likes of Cadburys',
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
    m_names: ['Abdul-Samad', 'Atsu', 'Muhsin', 'Nsoah', 'Qamar', 'Sabir'],
    f_names: ['Mawusi', 'Najla', 'Nana', 'Rihana', 'Tawbah', 'Thema'],
    region: 'Africa'
}
//SouthAmerica
var Brazil = {
    countryName: 'Brazil',
    intro: 'Welcome to Brazil, the only country in South America that speaks Portuguese. Known for soccer and coffee',
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
    m_names: ['Gabriel', 'Arthur', 'Luis', 'Lucas', 'Pedro', 'Bruno'],
    f_names: ['Gabriella', 'Amanda', 'Beatriz', 'Victoria', 'Raquel', 'Sabrina'],
    region: 'South America'
}
var Argentina = {
    countryName: 'Argentina',
    intro: 'Welcome to Argentina known for its elite national soccer team, the famed revolutionary Che Guevara and such beautiful landforms as the Iguazu Falls. One of the most striking countries in South America, Argentina is a popular tourist destination and features a dense heritage.',
    facts: ['The name comes from the latin word for silver',

'Home to Pope Francis, the first non-european pontiff of the Roman Catholic Church',
'Where the first animated film was created in 1917',
'The first South American country to legalize same-sex marriage',
'Known for soccer greats diego maradona and lionel messi',
'Home to Mt. Aconcagua, the highest point in the Western Hemisphere',
'Known for tango dancing',
'The capital is Buenos Aires meaning good airs or fair winds in spanish',
'Try Yerba Mate there. It is the national drink',
'Home to the worlds widest avenue spanning 14 lanes and 4 lanes of parallel streets'
],

    m_names: ['Marcos', 'Juan', 'Agustine', 'Pablo', 'Fernando', 'Armando'],
    f_names: ['Agustina', 'Camila', 'Paula', 'Sara', 'Julia', ''],
    region: 'South America'
}
var Venezuela = {
    countryName: 'Venezuela',
    intro: 'Welcome to Venezuela known widely for its petroleum industry, the environmental diversity of its territory, and its natural features. Home to a huge diversity of wildlife in a variety of protected habitats, Venezuela is considered to be among the 17 most megadiverse countries in the world',
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
    m_names: ['Sebastian', 'Mateo', 'Nicholas', 'Alehandro', 'Diego', 'Tomas'],
    f_names: ['Alehandra', 'Marian', 'Lucero', 'Michele', 'Diyan', 'Juliana'],
    region: 'South America'
}
var Colombia = {
    countryName: 'Colombia',
    intro: 'Welcome to Colombia known for its emeralds, the myth of El dorado, and its tropical landscapes nettled in the Andean peaks',
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
    m_names: ['Andres', 'Camillo', 'Diego', 'Ricardo', 'Luis', 'Juan Diego'],
    f_names: ['Diana', 'Paula', 'Erica', 'Susana', 'Leidi', 'Vanessa'],
    region: 'South America'
}
var Peru = {
    countryName: 'Peru',
    intro: 'Welcome to Peru most famous for Machu Picchu and the Incan Trail. Amongst certain people it is famous for its Ayahuasca ceremonies and Shamans in the Amazon',
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
    m_names: ['Stefano', 'John', 'Carlos', 'Hayzus', 'Victor', 'paulo'],
    f_names: ['Andrea', 'Daniella', 'Carlita', 'Marissa', 'Myra', 'Ruth'],
    region: 'South America'
}
var Ecuador = {
    countryName: 'Ecuador',
    intro: 'Welcome to Ecuador named after the equator that runs through the country. Also known as the closest country to space because of the earths rotation and shape',
    facts: ['Named after the equator that runs through the country',

'The closest country to space',
'Home to the #1 world heritage site Galapagos Islands',
'Charles Darwin studied here resulting in his theory on evolution',
'The worlds largest exporter of bananas',
'One of two countries that do not share a border with Brazil',
'Known as the most biodiverse country in the world',
'The capital is Quito',
'Shares a border with Peru, Colombia, and the pacific ocean',
'Fanesca, cerviche, and hornado are well known dishes there'],

    m_names: ['Ivan', 'Danny', 'Anthony', 'Jeremy', 'Evelyn', 'Santiago'],
    f_names: ['Grace', 'Ariana', 'Ginger', 'Mishel', 'Maylin', 'Magaly'],
    region: 'South America'
}
var Uruguay = {
    countryName: 'Uruguay',
    intro: 'Welcome to Uruguay meaning the river of birds also known as the Eastern side of that river.',
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
    m_names: ['Juan', 'Santiago', 'Kevin', 'Felipe', 'Bruno', 'Mateo'],
    f_names: ['Maria', 'Sofia', 'Lara', 'Pricila', 'Camila', 'Luana'],
    region: 'South America'
}
var Paraguay = {
    countryName: 'Paraguay',
    intro: 'Welcome to Paraguay. Paraguay is famous for being the first south american country to gain independance from Spain rule in 1811.',
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
    m_names: ['Daveed', 'Alba', 'Alin', 'Carlos', 'Elian', 'Enrique'],
    f_names: ['Liz', 'Larisa', 'Saskia', 'Dara', 'Judith', 'Lilian'],
    region: 'South America'
}
var Bolivia = {
    countryName: 'Bolivia',
    intro: 'Welcome to Bolivia named after independance fighter Simon Bolivar. He helped them gain independence from spain in 1825',
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
    m_names: ['Eric', 'Flore', 'Rolando', 'Ricky', 'Luis', 'Arturo'],
    f_names: ['Camilia', 'Monica', 'Jennifer', 'Adriana', 'Olive', 'Belen'],
    region: 'South America'
}
var Chile = {
    countryName: 'Chile',
    intro: 'Welcome to Chile known for Easter Island. Easter Island is home to the large statues of heads called moai',
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
    m_names: ['Agustin', 'Vicente', 'Matias', 'Mateo', 'Tomas', 'Alonzo'],
    f_names: ['Josefa', 'Amanda', 'Martina', 'Sofia', 'Emilia', 'Florencia'],
    region: 'South America'
}

var MiddleEast = [Egypt, Iran, Algeria, Tunisia, Oman, Morocco, Syria, Iraq, SaudiArabia, Lebanon];
var EastAsia = [Japan, China, Mongolia, Nepal, Taiwan, Philippines, Cambodia, Vietnam, NorthKorea, Malaysia];
var Africa = [SouthAfrica, Uganda, Kenya, Somalia, Sudan, Nigeria, Cameroon, Senegal, Ghana];
var SouthAmerica = [Brazil, Argentina, Venezuela, Colombia, Peru, Ecuador, Uruguay, Paraguay, Bolivia, Chile];
var Region = [MiddleEast, Africa, EastAsia, SouthAmerica];
//criminal and people methods

var crimes = ["arson", "property", "human trafficking", "burglary", "drug-related", "robbery", "embezzlement", "grand-larceny", "forgery", "fraud", "white-collar"];


var crimeBackground = ['Saw it on snapchat. crazy man', 
'I heard about it, but didnt see it', 
'Ya dude. It was live on facebook', 
'I saw some photos on whatsapp', 
'I wouldnt mess with them. They are crazy',
' They went wild on twitter', 
 'Good luck stopping them. i saw it on the news last night', 
 'My friend was there and saw the whole thing', 
 'Social media is ruining our world. theyre all over instagram',
 'Did you see the photos on Instagram? They were taken down but are replicated all over the internet', 
 'Heard there were millions in damages. What is wrong with people?', 
 'What is this world coming to? Please bring that criminal to justice', 
 'Read about this on my newsfeed. Great thing I wasnt there and no one got hurt', 
 'Checkout twitter. The criminal is trending', 
 'Wish I was there to do something about it. Just disgusting what people are doing today', 
 'I was there that night. I saw everything and let authorities know what he looked like and where he was headed', 
 'Whatsapp is becoming the go to choice for communication between these criminals. I saw a couple messages shared on my group and it looked crazy', 
 'Dude is out of control and must be stopped'];


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
    this.body = body[rand(0, body.length -1)];
    this.height = height[rand(0, height.length -1)];
    this.special = special[rand(0, special.length -1)];
    this.name = name(this.country, this.gender);
    this.crime = crimes[rand(0, crimes.length -1)];
}

function PopulateResponsePerson() {
    //may not need all these attributes, can pick what we want to output
    this.seenValue = rand(0, 3);
    this.gender =  gender[rand(0, gender.length -1)];
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairLength.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length -1)];
    this.p_special = p_special[rand(0, p_special.length -1)];
    this.seenArr = seenAttributes();
}

//flags and methods to handle number of people talked to and countries visited
var criminal = null;
var r_person = null;
var talkedToCount = 0;
var stage = 0;
var countryVisited = 0; //count of times try
var crimCountryVisitedArr = []; //array of countries criminal has been to, used to match against
var countryOutputList = []; //TODO Need to fill with 1 correct country and rest random. Splice the wrong country chosen when picked in checkCountry
var countryChoice = null;
var criminalArr = [0, 1, 2];
var talkingFlag = 0;
var criminalFlag = 0;
var questionedCount = 0;

// TODO, seeing duplicate countries sometimes
function generateCountryList()
{
    var tempArr = [];
    var tempCountryArr = [];
    //empty the output list
    countryOutputList = [];
    if(stage == 0)
    {
        //push correct country
        countryOutputList.push(criminal.country);
        tempArr = [MiddleEast, EastAsia, Africa, SouthAmerica];
        //remove the region where country is
        tempArr.splice(tempArr.indexOf(criminal.region), 1);
        //add 3 random country from ANY region (except criminal's region) since this is first stage. right?
        //if we're just sticking to it having to be in the same region then just remove this if block.
        for(var i = 0; i < 3; i++)
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
        var tempArr = [];
        for(var i = 0; i < criminal.region.length; i++)
        {
            tempArr[i] = criminal.region[i];
        }

        console.log("temp array from generateCountryList else: ");
        console.log(tempArr);
        //removing criminal.country from that list
        tempArr.splice(tempArr.indexOf(criminal.country), 1);
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


var country; // trying this as global since it keeps repeating the intitial country choice when using an echo.
//function checkCountry(country)
function checkCountry()
{
    if(talkedToCount != 0 || questionedCount != 0 || stage >= 3)
    {
        var speechOutput = this.t("NOT_COUNTRY_PICK");
        this.emit(":ask", speechOutput);
    }
    {
        country = this.event.request.intent.slots.country_item.value;

        console.log(country);

        //assign choice of country and count for validation checking in other methods
        countryVisited++;

        if (stage == 0) {
            console.log("in stage 0 for checkCountry");
            for (i = 0; i < Region.length; i++) {
                for (j = 0; j < Region[i].length; j++) {
                    if (Region[i][j].countryName == country) {
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
					if(stage < 3)
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.body, r_person.hair);
						var repromptOutput = this.t("PLEASE_GREET");

						//var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
						this.emit(":ask", speechOutput, repromptOutput);
					}
					else
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						
						speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name)
							+ this.t("LAST_STAGE_READY");
							this.emit(":ask", speechOutput);
							
							//lastStage();
					}
					

                }
                else if ((criminal.country.countryName != country) && countryVisited >= 2) {
                    //you lose.
                    console.log("you lose");
                    //TODO ask if they want to play again
                    var speechOutput = this.t("LOSE");
                    this.emit(":ask", speechOutput);
                }
                else {
                    //picked wrong country but only on first try

                    var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
                        + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.body, r_person.hair);
                    var repromptOutput = this.t("PLEASE_GREET");
                    this.emit(":ask", speechOutput, repromptOutput);
                }
            } catch (error) {
                console.log("CountryChoice incorrect handling");
            }
        }
        else {
            console.log("in else stage for checkCountry");
            for (i = 0; i < criminal.region.length; i++) {
                if (criminal.region[i].countryName == country) {
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

                   if(stage < 3)
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.body, r_person.hair);
						var repromptOutput = this.t("PLEASE_GREET");

						//var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
						this.emit(":ask", speechOutput, repromptOutput);
					}
					else
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						
						speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name)
							+ this.t("LAST_STAGE_READY");
							this.emit(":ask", speechOutput);
							
							//lastStage();
					}
                }
                else if (criminal.country.countryName != country && countryVisited >= 1) {
                    //you lose.
                    console.log("you lose");
                    //TODO ask if they want to play again
                    var speechOutput = this.t("LOSE");
                    this.emit(":ask", speechOutput);
                }
                else {
                    //picked wrong country

                    var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
                        + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.body, r_person.hair);
                    var repromptOutput = this.t("PLEASE_GREET");
                    this.emit(":ask", speechOutput, repromptOutput);
                }
            } catch (error) {
                console.log("error in countryChecked()");
            }
        }

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
    if(stage < 3 )
    {
        var speechOutput = this.t("NOT_LAST_STAGE");
        this.emit(":ask", speechOutput);

    }
    else {
        var speechOutput;
        shuffleArray(criminalArr);
        //removes index 0 form criminalArr
        var crimVar = criminalArr.splice(0, 1);
        criminalFlag = crimVar;

        var l_height = height.slice(0);
        var l_body = body.slice(0);
        var l_eyeSize = eyeSize.slice(0);
        var l_eyeColor = eyeColor.slice(0);
        var l_hairLength = hairLength.slice(0);
        var l_hairColor = hairColor.slice(0);
        var l_special = p_special.slice(0);
        //removing criminal traits from attribute arrays so randomizer doesn't pick them
        console.log("before splice t_heght size: " + l_height);
        console.log("before splice heght size: " + height);
        l_height.splice(l_height.indexOf(criminal.height), 1);
        l_body.splice(l_body.indexOf(criminal.body), 1);
        l_eyeSize.splice(l_eyeSize.indexOf(criminal.eyeSize), 1);
        l_eyeColor.splice(l_eyeColor.indexOf(criminal.eyeColor), 1);
        l_hairLength.splice(l_hairLength.indexOf(criminal.hairLength), 1);
        l_hairColor.splice(l_hairColor.indexOf(criminal.hairColor), 1);
        //might keep special, idk.
        l_special.splice(l_special.indexOf(criminal.special), 1);
        console.log("After splice t_heght size: " + l_height);
        console.log("After splice heght size: " + height);

        if (crimVar == 2) {
            console.log("A " + criminal.height + " " + criminal.body + " " + pronounThird(criminal.gender) + " with "
                + criminal.eyeSize + " " + criminal.eyeColor + " eyes, "
                + criminal.hairLength + " " + criminal.hairColor + " hair, and a"
                + criminal.special + " walks by. This is the Criminal.");

            //this.emit(":tell", speechOutput);

            speechOutput = this.t("ACCUSE", criminal.height, criminal.body, pronounThird(criminal.gender), criminal.eyeSize,
                criminal.eyeColor, criminal.hairLength, criminal.hairColor, criminal.special);
            this.emit(":ask", speechOutput);


        }
        else {
            //randomly picks 1 or 2 attributes to change
            var criminalAtt = [criminal.height, criminal.body, criminal.eyeSize, criminal.eyeColor, criminal.hairLength,
                criminal.hairColor, criminal.special];
            var attributeInd = [0, 1, 2, 3, 4, 5, 6];
            var randNum = rand(1, 2);
            shuffleArray(attributeInd);

            for (var r = 1; r <= randNum; r++) {
                switch (attributeInd[r]) {
                    case 0:
                        criminalAtt[attributeInd[r]] = l_height[rand(0, l_height.length) - 1];
                        break;
                    case 1:
                        criminalAtt[attributeInd[r]] = l_body[rand(0, l_body.length) - 1];
                        break;
                    case 2:
                        criminalAtt[attributeInd[r]] = l_eyeSize[rand(0, l_eyeSize.length - 1)];
                        break;
                    case 3:
                        criminalAtt[attributeInd[r]] = l_eyeColor[rand(0, l_eyeColor.length - 1)];
                        break;
                    case 4:
                        criminalAtt[attributeInd[r]] = l_hairLength[rand(0, l_hairLength.length - 1)];
                        break;
                    case 5:
                        criminalAtt[attributeInd[r]] = l_hairColor[rand(0, l_hairLength.length - 1)];
                        break;
                    case 6:
                        //might remove case 6 as specials might be too easy
                        criminalAtt[attributeInd[r]] = l_special[rand(0, l_special.length) - 1];
                        break;
                    default:
                        console.log("error populating final stage random person");
                        break;
                }
            }
            console.log("A " + criminalAtt[0] + " " + criminalAtt[1] + " " + pronounThird(criminal.gender) + " with "
                + criminalAtt[2] + " " + criminalAtt[3] + " eyes, "
                + criminalAtt[4] + " " + criminalAtt[5] + " hair, and a"
                + criminalAtt[6] + " walks by. This is not the Criminal.");

						
            speechOutput = this.t("ACCUSE", criminalAtt[0], criminalAtt[1], pronounThird(criminal.gender), criminalAtt[2], criminalAtt[3],
                criminalAtt[4], criminalAtt[5], criminalAtt[6]);
            this.emit(":ask", speechOutput);

        }
    }
}

function innocentFunction()
{
	if(criminalFlag == 2)
	{
		this.emit(":tell", this.t("LOSE_GOT_AWAY"));
	}
	else
	{
		lastStage();
	}
}

function nabThiefFunction()
{
	if(criminalFlag != 2)
	{
		this.emit(":tell", this.t("LOSE_WRONG"));
	}
	else
	{
		this.emit(":tell", this.t("WIN"));
	}
}

//called when 'TarryStopIntent is called. checks for number of people talked to is <= 5. If less,  then generates next person to talk to.
function talkedTo()
{
    if(questionedCount != 0)
    {
        var speechOutput = this.t("NOT_DONE_QUESTIONING");
        this.emit(":ask", speechOutput);
    }
    else if (stage >= 3)
    {

    }
    else
    {
        // line below seemed to be needed to clear user spoken country for next round. Otherwise kept repeating first country choice regardless of what they said.
        country = null;

        var speechOutput;
        //final stage prompt.
        if (stage >= 3) {
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
                //exit from country on 2nd talk in wrong country
                if (talkedToCount >= 6) {
                    talkedToCount = 0;

                    //talked to 2 people in the wrong country
                    console.log("wrong country response");
                    //TODO will need to relist the countries here
                    speechOutput = this.t("WRONG_COUNTRY") + this.t("CHOOSE_AGAIN") +
                        this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
                    repromptOutput = this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
                    this.emit(":ask", speechOutput, repromptOutput);
                }
                //persons just walk by or have nothing to say
                speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender)) + this.t("PASSEDBY_PROMPT"); // added continue searching prompt. need to handle their response somewhere
                this.emit(":ask", speechOutput);
            }
            //right country
            else {

                //if the person has not seen anything or doesn't want to talk to you
                if (r_person.seenValue == 0) {

                    console.log("r_person seen value = 0 reponses");
                    //right country but person hasn't seen anything (20% chance)
                    speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender)) + this.t("PASSEDBY_PROMPT"); // added continue searching prompt. need to handle their response somewhere
                    this.emit(":ask", speechOutput);
                }
                //if person has seen something
                else {

                    console.log("r_person seen value NOT 0 responses");
                    //TODO questioning responses here, just putting obvious country facts as clues here for testing
                    //0.00032 chance you won't see clues after talking to 5 people lol. Might need to fix that.
                    speechOutput = this.t("CORRECT_PERSON_RESPONSE", contPronoun(criminal.gender), pronoun(criminal.gender));
                    this.emit(":ask", speechOutput);
                }
            }
            //moved this block to doneQuestioning()

        }
    }
}

function doneQuestioning()
{
    var speechOutput;
    questionedCount = 0;
    if (talkedToCount >= 5) {
        console.log("resetting counter, 5 people talked to, time to choose a country");
        talkedToCount = 0;
        //if they were in the correct country and finished talking to 5 people
        if (countryChoice == criminal.country) {
            assignNextCountry();
            console.log("reached final person to talk to in 0 response");

            // TODO not sure if there is supposed to be a country choice list here
            speechOutput = this.t("LAST_PERSON") + this.t("CHOOSE_AGAIN") +
                this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
            this.emit(":ask", speechOutput);
        }

        // TODO need something here?
        //nope, don't think so since we can't question while in the wrong country.

    }
    else {
        console.log("populating new r_person from doneQuestioning");
        r_person = new PopulateResponsePerson();
        //build response for next person walking by.
        speechOutput = this.t("DONE_QUESTIONING", pronoun(r_person.gender), r_person.body, r_person.hairColor, r_person.gender);

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
    var speechOutput;
    if(questionedCount > 3)
    {
        doneQuestioning.call(this);
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

        //These emits confirmed to work when .call is used, and "this" is explicitly passed
        var crimeF = crimeBackground[rand(0, crimeBackground.length -1)];
        speechOutput = this.t("CRIME_FACTS", crimeF) + this.t("CONTINUE_PROMPT"); // need prompt for user input to trigger next intent
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

        speechOutput = this.t(responseString) + this.t("CONTINUE_PROMPT"); // need prompt for user input to trigger next intent
        this.emit(":ask", speechOutput);
    }
    else if(questionType == 3)
    {
        //TODO can change this to >= 0 if you want to always have person give clues on next country.
        if(r_person.seenValue > 0)
        {

            speechOutput = this.t("COUNTRY_FACTS", pronoun(criminal.gender), criminal.nextCountry.facts[rand(0, criminal.nextCountry.facts.length -1)] ) + this.t("CONTINUE_PROMPT"); // need prompt for user input to trigger next intent
            this.emit(":ask", speechOutput);
        }
    }
    else
    {
        console.log("error question type was incorrect, expecting 1, 2, or 3");
    }
}


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


var languageString = {
    "en": {
        "translation": {
            //"QUESTIONS" : questions["QUESTIONS"],

            "GAME_NAME" : "Seuth Hound", 
            "HELP_MESSAGE": "Please ask questions like how do I play, what is the concept of the game, what am I supposed to do? ",
			"REPEAT_MESSAGE": "Sorry I could not hear you. What did you say?. ",
			"HELP_RESPONSE": "You, with the guidance of Chief Alexa, track down criminals as they try to elude you. Collect clues from bystanders by asking them if they heard about the crime, where the criminal went, and what the criminal looked like. ",
            "HELP_REPROMPT": "Are you listening to me? ", 
            "STOP_MESSAGE": "Would you like to continue our search?",
            "CANCEL_MESSAGE": "Ok, see you next time Sleuth.", // if needed
            "NO_MESSAGE": "Ok, we\'ll resume our hunt for criminals when you get back from leave. Until next time Sleuth!", // if needed
            "HELP_UNHANDLED": "Say yes to continue our mission, or no to end the game. ",
            "START_UNHANDLED": "Say start to start a new mission. ",
			"GAME_UNHANDLED": "game unhandled error. ",
			"QUESTION_UNHANDLED": "I'm sorry. I didn't understand your choice. ",
			"TEST_OUTPUT": "Testing output only. ", // testing only
            "NEW_GAME_MESSAGE": "Welcome to %s. ",
			"GAME_START_MESSAGE": "Are you ready for a mission? ",
            "INTRO_MESSAGE": "Let's do it Sleuth! We are on the hunt for %s.  %s is wanted in connection with a recent string of %s crimes resulting in %s million in damages. We must help bring the criminal responsible for these crimes to justice before %s goes into hiding. It will not be an easy task to catch %s , so pay close attention to clues that we get from bystanders on %s looks and whereabouts. %s was last seen in %s. Enough talking, let's do it! ",
			"LOCATION_TEST": "%s is in %s, %s. ", // testing only
			"CHOOSE_COUNTRY": "  Where do you think the crime happened? ",
			"CHOOSE_AGAIN": "Where did the criminal go? ",
			"COUNTRY_LIST": "%s, %s, %s, or %s? ",
			"DEPARTURE_MESSAGE": "%s it is. Talk to you when you land. Get going sleuth! ",
			"ARRIVAL_MESSAGE": "%s. Time to find info on %s. Get the attention of bystanders so you can ask them for clues on what happened, what the criminal looks like, and where the criminal went. ",
			"PERSON_APPROACHING": "%s with %s build and %s hair is approaching us. ",
			"PERSON_RESPONSE": "%s kept on walking by. ",
            "CORRECT_PERSON_RESPONSE": "You got the persons attention, try to get some clues on the criminal. ",
			"PLEASE_GREET": "Get bystanders attention by saying something like hello or excuse me. ",
			"PASSEDBY_PROMPT": "Say Continue to look for others. ", 
			"CONTINUE_PROMPT": ". Get more clues, or say bye to talk to someone else. ", // can't figure out how to keep "yes" from triggering wrong intents
            "LOSE_WRONG": "Oh no! this is not the criminal. We have to step up our game.",
			"CRIME_FACTS": "%s .",
            "LOSE_GOT_AWAY": "Oh no! we were so close but the criminal has slipped into hiding.",
            "WIN": "Great work Sleuth. You caught the criminal!",
            "WRONG_COUNTRY": "This doesn't seem to be the correct Country, try a different one. ",
            "LAST_PERSON": "Looks like we've talked to everyone, it's time to pick the next country. ",
            "DONE_QUESTIONING": "Alright, let's look for someone else. %s with %s build and %s hair is approaching us. ",
            "COUNTRY_FACTS": "I heard %s is going to %s. ",
            "NOT_LAST_STAGE": "We aren't ready to capture the criminal yet, to finish talking, say I'm done questioning",
            "LAST_STAGE": "The Criminal is close, we should try to capture the criminal.",
            "NOT_COUNTRY_PICK": "We aren't done talking to people yet. To finish talking, say I'm done questioning",
            "NOT_DONE_QUESTIONING": "If you're finished questioning and ready to move on , say I'm done questioning",
			"LAST_STAGE_READY": "Say Ready to be a Sleuth when youre ready to catch the criminal",
            "ACCUSE": "A %s %s %s with %s %s eyes, %s %s hair, and a %s walks by. Is this the criminal? If so, say stop criminal or say innocent to keep looking. "
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
        var repromptOutput = this.t("REPEAT_MESSAGE");
        // Set the current state to play mode. The skill will now use handlers defined in gameStateHandlers
        this.handler.state = GAME_STATES.PLAY;
        this.emit(":askWithCard", speechOutput, repromptOutput);
    }
});

var gameStateHandlers = Alexa.CreateStateHandler(GAME_STATES.PLAY, {
    "GameStart": function () {
        shuffleArray(Region);
        talkedToCount = 0;
        countryVisited = 0;
        questionedCount = 0;
        criminalFlag = 0;
        questionedCount = 0;

        criminal = new PopulateCriminal();
        r_person = new PopulateResponsePerson();
        //criminal name already populated with above code.
        //criminal.name = name(criminal.country, criminal.gender);
        //assigns the country the criminal will be headed to next so we can give clues regarding that.
        assignNextCountry();
        //reassigns array since this is spliced in last stage.
        criminalArr = [0, 1, 2];

        // introduces criminal and crime, asks which country the user would like to visit, TODO prompt with country choices
        //Grab country name like this: countryOutputList[i].countryName, where i = 0 to 3.
        //countryOutputList is already shuffled so you can use any order of index you like.
        var speechOutput = this.t("INTRO_MESSAGE", criminal.name, pronoun(criminal.gender), criminal.crime, rand(50, 800), criminal.name, criminal.name, pronounOwnership(criminal.gender), criminal.name, criminal.country.facts[0]) +
            this.t("CHOOSE_COUNTRY") +
            this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
        var repromptOutput = this.t("REPEAT_MESSAGE") + this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
        this.emit(":ask", speechOutput, repromptOutput);
    },
    "CountryIntent": function () {
        checkCountry.call(this);
    },
    "TarryStopIntent": function () {
        //r_person = new PopulateResponsePerson();
        //this.handler.state = GAME_STATES.QUESTIONING;
        talkedTo.call(this);
    },
    "ContinueSearchIntent": function () {
        doneQuestioning.call(this);
        //Is this the same as DoneQuestioningIntent?
        //doneQuestioning intent is meant to be called when you no longer want to talk to someone and
        // would like to generate the next person or next stage if already talked to 5 people

        // could be treated the same maybe. This is more for when you need to prompt the user in cases like when the person walked by without taking, or finished and left.
        // could make an interupt version for breaking out of a current conversation.
        /**
         r_person = new PopulateResponsePerson();
         var speechOutput = this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
         var repromptOutput = this.t("REPEAT_MESSAGE");
         this.emit(":ask", speechOutput, repromptOutput);
         //this.handler.state = GAME_STATES.PLAY;
         talkedTo.call(this);
         **/
    },
    "CrimeBackgroundQuestionIntent": function () {
        generateQuestionResponse.call(this, 1);
    },
    "CriminalLooksQuestionIntent": function () {
        generateQuestionResponse.call(this, 2);
    },
    "CriminalLocationQuestionIntent": function () {
        generateQuestionResponse.call(this, 3);
    },
    "DoneQuestioningIntent": function () {
        doneQuestioning.call(this);

    },
	"LastStageIntent": function () {
        lastStage.call(this);

    },
    "NabThiefIntent": function () {
        nabThiefFunction.call(this);
    },
    "innocentIntent": function () {
		innocentFunction.call(this);
    },
    "Unhandled": function () {
        var speechOutput = this.t("QUESTION_UNHANDLED");
        this.emit(":ask", speechOutput);
    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", false);
    },
	"AMAZON.NoIntent": function() {
        var speechOutput = this.t("NO_MESSAGE");
        this.emit(":tell", speechOutput);
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
    "SessionEndedRequest": function () {
        console.log("Session ended in trivia state: " + this.event.request.reason);
    }
});

// TODO, these copied from example. Still need to be adapted
var helpStateHandlers = Alexa.CreateStateHandler(GAME_STATES.HELP, {
    "helpTheUser": function (newGame) {
        //var askMessage = newGame ? this.t("ASK_MESSAGE_START") : this.t("REPEAT_MESSAGE") + this.t("STOP_MESSAGE");
        var speechOutput = this.t("HELP_RESPONSE");

		this.emitWithState("StartGame", true);

        //var repromptText = this.t("HELP_RESPONSE");
        this.emit(":ask", speechOutput);
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
            this.handler.state = GAME_STATES.PLAY;
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

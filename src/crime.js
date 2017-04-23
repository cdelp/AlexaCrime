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

//countries
//Middle East
var Egypt  = {
    countryName: 'Egypt',
    facts:  ['egypt fact 1', 'egypt fact 2', 'egypt fact 3'],
    m_names: ['Aaheru', 'Abuskhau', 'Acheri', 'Aches', 'Am', 'Akhekh', 'Amenamen'],
    f_names: ['Cleopatra', 'Amisi', 'Bast', 'Ebio', 'Emu', 'Isis'],
    region: 'Middle East'
};
var Iran = {
    countryName: 'Iran',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Mohammad', 'Amir', 'Yosef', 'Mehran', 'Faraz', 'Hooman'],
    f_names: ['Ada', 'Saye', 'Nooshin', 'Sajedeh', 'Niyusha', 'Fatima'],
    region: 'Middle East'
};
var Algeria = {
    countryName: 'Algeria',
    facts: ['Algeria fact 1', 'Algeria fact 2', 'Algeria fact 3'],
    m_names: ['Mohammad', 'Amine', 'Anis', 'Brahim', 'Zaki', 'Mounir'],
    f_names: ['Meriem', 'Sabrina', 'Safia', 'Yasmine', 'Chiraz', 'Aya'],
    region: 'Middle East'
};
var Tunisia = {
    countryName: 'Tunisia',
    facts: ['Tunisia fact 1', 'Tunisia fact 2', 'Tunisia fact 3'],
    m_names: ['Ahmed', 'Hazim', 'Slim', 'Aziz', 'Mehdi', 'Raouf'],
    f_names: ['Fatma', 'Eya', 'Hiba', 'Sarah', 'Farah', 'Rim'],
    region: 'Middle East'
};
var Oman = {
    countryName: 'Oman',
    facts: ['Oman fact 1', 'Oman fact 2', 'Oman fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
};
//countries below this line aren't filled with real data
var Morocco = {
    countryName: 'Morocco',
    facts: ['Morocco fact 1', 'Morocco fact 2', 'Morocco fact 3'],
    m_names: ['Abdo', 'Ahmen', 'Karim', 'Ali', 'Rachid', 'Brahim'],
    f_names: ['Zineb', 'Ghita', 'Marwa', 'Aya', 'Lina', 'Rania'],
    region: 'Middle East'
};
var Syria = {
    countryName: 'Syria',
    facts: ['Syria fact 1', 'Syria fact 2', 'Syria fact 3'],
    m_names: ['Adnan', 'Elias', 'Nizar', 'Sayid', 'Yaman', 'Rifat'],
    f_names: ['Zeinah', 'Uri', 'Amena', 'Shayma', 'Nooda', 'Aisl'],
    region: 'Middle East'
};
var Iraq = {
    countryName: 'Iraq',
    facts: ['Iraq fact 1', 'Iraq fact 2', 'Iraq fact 3'],
    m_names: ['Zamanlabib', 'Mustafa', 'Barhoomee', 'Baravan', 'Jahmir', 'Fadhil'],
    f_names: ['Zainab', 'Noora', 'Sham', 'Telenaz', 'Rukia', 'Kayoosh'],
    region: 'Middle East'
};
var SaudiArabia = {
    countryName: 'Saudi Arabia',
    facts: ['Saudi Arabia fact 1', 'Saudi Arabia fact 2', 'Saudi Arabia fact 3'],
    m_names: ['Kahaled', 'Mahamat', 'Inam', 'Taha', 'Hossien', 'Zishan'],
    f_names: ['Faten', 'Habiba', 'Reema', 'Nadia', 'Bushra', 'Salsabyl'],
    region: 'Middle East'
};
var Lebanon = {
    countryName: 'Lebanon',
    facts: ['Lebanon fact 1', 'Lebanon fact 2', 'Lebanon fact 3'],
    m_names: ['Mahmous', 'Nader', 'Ayman', 'Wehbe', 'Rami', 'Moukhtar'],
    f_names: ['Nour', 'Alaa', 'Souad', 'Sousou', 'Yasmine', 'Fatme'],
    region: 'Middle East'
};

//East Asia
var Japan = {
    countryName: 'Japan',
    facts: ['Japan fact 1', 'Japan fact 2', 'Japan fact 3'],
    m_names: ['Dorobo', 'Naruto', 'Ren', 'Tatsuya', 'Daisuke', 'Kazuki'],
    f_names: ['Yuri', 'Ayumi', 'Minami', 'Nana', 'Risa', 'Hana'],
    region: 'East Asia'
};
var China = {
    countryName: 'China',
    facts: ['China fact 1', 'China fact 2', 'China fact 3'],
    m_names: ['Ching', 'Chong', 'Ting', 'Chow', 'Yang', 'Ming'],
    f_names: ['Ming Ming', 'Chi CHi', 'Jade', 'Ying', 'Fei Fei', 'Fai Di La'],
    region: 'East Asia'
};
var Mongolia = {
    countryName: 'Mongolia',
    facts: ['Mongolia fact 1', 'Mongolia fact 2', 'Mongolia fact 3'],
    m_names: ['Dana', 'Ankhbaatar', 'Davaa', 'Zev'],
    f_names: ['Zaya', 'Sondor', 'Oyundelger', 'Aigerim', 'Delgermaa', 'Jabek'],
    region: 'East Asia'
};
var Nepal = {
    countryName: 'Nepal',
    facts: ['Nepal fact 1', 'Nepal fact 2', 'Nepal fact 3'],
    m_names: ['Krishna', 'Bishal', 'Bibek', 'Kiran', 'Bikash', 'Yash'],
    f_names: ['Shirisha', 'Shristi', 'Swornima', 'Tsamchou', 'Simixya', 'Palisha'],
    region: 'East Asia'
};
var Taiwan = {
    countryName: 'Taiwan',
    facts: ['Taiwan fact 1', 'Taiwan fact 2', 'Taiwan fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
};
var Philippines = {
    countryName: 'Philippines',
    facts: ['Philippines fact 1', 'Philippines fact 2', 'Philippines fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
};
var Cambodia = {
    countryName: 'Cambodia',
    facts: ['Cambodia fact 1', 'Cambodia fact 2', 'Cambodia fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
};
var Vietnam = {
    countryName: 'Vietnam',
    facts: ['Vietnam fact 1', 'Vietnam fact 2', 'Vietnam fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
};
var NorthKorea = {
    countryName: 'North Korea',
    facts: ['North Korea fact 1', 'North Korea fact 2', 'North Korea fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
};
var Malaysia = {
    countryName: 'Malaysia',
    facts: ['Malaysia fact 1', 'Malaysia fact 2', 'Malaysia fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
};
//Africa
var SouthAfrica = {
    countryName: 'South Africa',
    facts: ['South Africa fact 1', 'South Africa fact 2', 'South Africa fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Uganda = {
    countryName: 'Uganda',
    facts: ['Uganda fact 1', 'Uganda fact 2', 'Uganda fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Kenya = {
    countryName: 'Kenya',
    facts: ['Kenya fact 1', 'Kenya fact 2', 'Kenya fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Somalia = {
    countryName: 'Somalia',
    facts: ['Somalia fact 1', 'Somalia fact 2', 'Somalia fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Sudan = {
    countryName: 'Sudan',
    facts: ['Sudan fact 1', 'Sudan fact 2', 'Sudan fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Nigeria = {
    countryName: 'Nigeria',
    facts: ['Nigeria fact 1', 'Nigeria fact 2', 'Nigeria fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Cameroon = {
    countryName: 'Cameroon',
    facts: ['Cameroon fact 1', 'Cameroon fact 2', 'Cameroon fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Senegal = {
    countryName: 'Senegal',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
var Ghana = {
    countryName: 'Ghana',
    facts: ['Ghana fact 1', 'Ghana fact 2', 'Ghana fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
};
//SouthAmerica
var Brazil = {
    countryName: 'brazil',
    facts: ['Brazil fact 1', 'Brazil fact 2', 'Brazil fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Argentina = {
    countryName: 'Argentina',
    facts: ['Argentina fact 1', 'Argentina fact 2', 'Argentina fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Venezuela = {
    countryName: 'Venezuela',
    facts: ['Venezuela fact 1', 'Venezuela fact 2', 'Venezuela fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Colombia = {
    countryName: 'Colombia',
    facts: ['Colombia fact 1', 'Colombia fact 2', 'Colombia fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Peru = {
    countryName: 'Peru',
    facts: ['Peru fact 1', 'Peru fact 2', 'Peru fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Ecuador = {
    countryName: 'Ecuador',
    facts: ['Ecuador fact 1', 'Ecuador fact 2', 'Ecuador fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Uruguay = {
    countryName: 'Uruguay',
    facts: ['Uruguay fact 1', 'Uruguay fact 2', 'Uruguay fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Paraguay = {
    countryName: 'Paraguay',
    facts: ['Paraguay fact 1', 'Paraguay fact 2', 'Paraguay fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Aruba = {
    countryName: 'Aruba',
    facts: ['Aruba fact 1', 'Aruba fact 2', 'Aruba fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Chile = {
    countryName: 'Chile',
    facts: ['Chile fact 1', 'Chile fact 2', 'Chile fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};
var Columbia = {
    countryName: 'Columbia',
    facts: ['Columbia fact 1', 'Columbia fact 2', 'Columbia fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
};


var MiddleEast = [Egypt, Iran, Algeria, Tunisia, Oman, Morocco, Syria, Iraq, SaudiArabia, Lebanon];
var EastAsia = [Japan, China, Mongolia, Nepal, Taiwan, Philippines, Cambodia, Vietnam, NorthKorea, Malaysia];
var Africa = [SouthAfrica, Uganda, Kenya, Somalia, Sudan, Nigeria, Cameroon, Senegal, Ghana];
var SouthAmerica = [Brazil, Argentina, Venezuela, Colombia, Peru, Ecuador, Uruguay, Paraguay, Aruba, Chile, Columbia];
var Region = [MiddleEast, EastAsia, Africa, SouthAmerica];
//criminal and people methods

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
    this.crime = "default test crime";
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
}

//flags and methods to handle number of people talked to and countries visited
var criminal = null;
var r_person = null;
var talkedToCount = 0;
var stage = 0;
var countryVisited = 0; //count of times tried
var crimCountryVisitedArr = []; //array of countries criminal has been to, used to match against
var CountryOutputList = []; //TODO Need to fill with 1 correct country and rest random. Splice the wrong country chosen when picked in checkCountry
var countryChoice = null;
var criminalArr = [0, 1, 2];
var talkingFlag = 0;
function checkCountry(country)
{
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
                //TODO will need to add countryChoice.intro as a parameter to output when we add the intro to countries.
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.countryName, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
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
                //TODO will need to add countryChoice.intro as a parameter to output when we add the intro to countries.
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.countryName, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
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
                //TODO will need to add countryChoice.intro as a parameter to output when we add the intro to countries.
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.countryName, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
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
                //TODO will need to add countryChoice.intro as a parameter to output when we add the intro to countries.
                var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.countryName, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
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
}

function lastStage()
{
    var speechOutput;
    shuffleArray(criminalArr);
    var crimVar = criminalArr.pop();
    //removing criminal traits from attribute arrays so randomizer doesn't pick them
    height.splice(t_height.indexOf(criminal.height), 1);
    height.splice(t_body.indexOf(criminal.body), 1);
    height.splice(t_eyeSize.indexOf(criminal.eyeSize), 1);
    height.splice(t_eyeColor.indexOf(criminal.eyeColor), 1);
    height.splice(t_hairLength.indexOf(criminal.hairLength), 1);
    height.splice(t_hairColor.indexOf(criminal.hairColor), 1);
    //might keep special, idk.
    height.splice(t_special.indexOf(criminal.special), 1);

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
            speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender));
            this.emit(":tell", speechOutput);
            //exit from country on 2nd talk in wrong country
            if (talkedToCount >= 6)
            {
                //talked to 2 people in the wrong country
                console.log("wrong country response");
                //TODO will need to relist the countries here
                speechOutput = this.t("WRONG_COUNTRY");
                this.emit(":ask", speechOutput);
            }
        }
        //right country
        else {
            //if the person has not seen anything or doesn't want to talk to you
            if (r_person.seenValue == 0) {
                console.log("r_person seen value = 0 reponses");
                //right country but person hasn't seen anything (20% chance)
                speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender));
                this.emit(":tell", speechOutput);

            }
            //if person has seen something
            else {
                console.log("r_person seen value NOT 0 responses");
                //TODO questioning responses here, just putting obvious country facts as clues here for testing
                //0.00032 chance you won't see clues after talking to 5 people lol. Might need to fix that.
                speechOutput = this.t("CORRECT_PERSON_RESPONSE", criminal.country.facts);
                this.emit(":tell", speechOutput);
            }
        }
        //reset counter after 5 people
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
            console.log("populating new r_person form talkedto()");
            r_person = new PopulateResponsePerson();
            //build response for next person walking by.

            speechOutput = this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, criminal.body);
            this.emit(":ask", speechOutput);
        }
    }
}


//Chad TODO
//Methods to create a complete sentence that we can return for Alexa output. Structure is from Anees and pathing will usually reference Criminal.
//Example:
/* function introResponse()
{
    return "We are on the hunt for "+criminal.name+". "+pronoun(criminal.gender)+" is wanted in connection with a recent string of "+criminal.crime+" crimes resulting in " +
        "$"+rand(50, 800)+" million in damages. We must help bring  the criminal responsible for these crimes to justice before "+criminal.name+" goes into hiding. " +
        "It will not be an easy task to catch "+criminal.name+" so pay close attention to clues on "+pronounOwnership(criminal.gender)+" looks and whereabouts. " +
        ""+criminal.name+" was last seen {country_clue}. Enough talking, we need to go. Where should we start our search"
} */

//Chad TODO
//fill intents with whatever repsonses just to test if we are triggering them.
// test, added by Chad ***************************************************************************************************
var Alexa = require("alexa-sdk");
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
var countryString = undefined;

function Countries(number){
	return "Test Country Name";
}

function introResponseTest()
{
	return "We are on the hunt for blah blah";
}
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
            "INTRO_MESSAGE": "We are on the hunt for %s.  %s is wanted in connection with a recent string of %s crimes resulting in %s million in damages. We must help bring the criminal responsible for these crimes to justice before %s goes into hiding. It will not be an easy task to catch %s , so pay close attention to clues on %s looks and whereabouts. %s was last seen in insert counrty clue. Enough talking, we need to go ",
			"CHOOSE_COUNTRY": "  Where should we start our search. ",
			"DEPARTURE_MESSAGE": "%s it is. Talk to you when you land. Get going sleuth! Insert Sound clip airplane taking off. ",
			"ARRIVAL_MESSAGE": "Welcome to %s, also known as Insert country intro. Time to find info on %s. Get the attention of bystanders so you can ask them about the criminal, and where the criminal is going. ",
			"PERSON_APPROACHING": "%s %s %s approaching. ",
			"PERSON_RESPONSE": "%s said to step back sucker. ",
            "CORRECT_PERSON_RESPONSE": "%s.",
            "LOSE": "You loser",
            "WIN": "You Win",
            "WRONG_COUNTRY": "This doesn't seem to be the correct Country, try a different one",
            "LAST_PERSON": "Looks like we've talked to everyone, it's time to pick the next country",
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
		var speechOutput = this.t("INTRO_MESSAGE", criminal.name, pronoun(criminal.gender), criminal.crime, rand(50, 800), criminal.name, criminal.name, pronounOwnership(criminal.gender), criminal.name) + this.t("CHOOSE_COUNTRY");
		this.emit(":ask", speechOutput);
    },
    "CountryIntent": function () {
		// line below sets country to the one the user spoke, from the country_item slot list
        //changed variable name, countryChoice needs to store an country Object which contains name, clues, etc.
		countryString = this.event.request.intent.slots.country_item.value;
		checkCountry(countryString);
		//moved this emit to checkCountry Method
		//var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.countryName, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
        //this.emit(":ask", speechOutput);
    },
	"TarryStopIntent": function () {      
		//r_person = new PopulateResponsePerson();
		talkedTo();
		//var speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender));
		//this.emit(":ask", speechOutput);
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


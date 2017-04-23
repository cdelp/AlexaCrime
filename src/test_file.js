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
}
var Iran = {
    countryName: 'Iran',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Mohammad', 'Amir', 'Yosef', 'Mehran', 'Faraz', 'Hooman'],
    f_names: ['Ada', 'Saye', 'Nooshin', 'Sajedeh', 'Niyusha', 'Fatima'],
    region: 'Middle East'
}
var Algeria = {
    countryName: 'Algeria',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Mohammad', 'Amine', 'Anis', 'Brahim', 'Zaki', 'Mounir'],
    f_names: ['Meriem', 'Sabrina', 'Safia', 'Yasmine', 'Chiraz', 'Aya'],
    region: 'Middle East'
}
var Tunisia = {
    countryName: 'Tunisia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Ahmed', 'Hazim', 'Slim', 'Aziz', 'Mehdi', 'Raouf'],
    f_names: ['Fatma', 'Eya', 'Hiba', 'Sarah', 'Farah', 'Rim'],
    region: 'Middle East'
}
var Oman = {
    countryName: 'Oman',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
//countries below this line aren't filled with real data
var Morocco = {
    countryName: 'Morocco',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Abdo', 'Ahmen', 'Karim', 'Ali', 'Rachid', 'Brahim'],
    f_names: ['Zineb', 'Ghita', 'Marwa', 'Aya', 'Lina', 'Rania'],
    region: 'Middle East'
}
var Syria = {
    countryName: 'Syria',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Adnan', 'Elias', 'Nizar', 'Sayid', 'Yaman', 'Rifat'],
    f_names: ['Zeinah', 'Uri', 'Amena', 'Shayma', 'Nooda', 'Aisl'],
    region: 'Middle East'
}
var Iraq = {
    countryName: 'Iraq',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Zamanlabib', 'Mustafa', 'Barhoomee', 'Baravan', 'Jahmir', 'Fadhil'],
    f_names: ['Zainab', 'Noora', 'Sham', 'Telenaz', 'Rukia', 'Kayoosh'],
    region: 'Middle East'
}
var SaudiArabia = {
    countryName: 'Saudi Arabia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Kahaled', 'Mahamat', 'Inam', 'Taha', 'Hossien', 'Zishan'],
    f_names: ['Faten', 'Habiba', 'Reema', 'Nadia', 'Bushra', 'Salsabyl'],
    region: 'Middle East'
}
var Lebanon = {
    countryName: 'Lebanon',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Mahmous', 'Nader', 'Ayman', 'Wehbe', 'Rami', 'Moukhtar'],
    f_names: ['Nour', 'Alaa', 'Souad', 'Sousou', 'Yasmine', 'Fatme'],
    region: 'Middle East'
}

//East Asia
var Japan = {
    countryName: 'Japan',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var China = {
    countryName: 'China',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Dorobo', 'Naruto', 'Ren', 'Tatsuya', 'Daisuke', 'Kazuki'],
    f_names: ['Yuri', 'Ayumi', 'Minami', 'Nana', 'Risa', 'Hana'],
    region: 'East Asia'
}
var Mongolia = {
    countryName: 'Mongolia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Dana', 'Ankhbaatar', 'Davaa', 'Zev'],
    f_names: ['Zaya', 'Sondor', 'Oyundelger', 'Aigerim', 'Delgermaa', 'Jabek'],
    region: 'East Asia'
}
var Nepal = {
    countryName: 'Nepal',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Krishna', 'Bishal', 'Bibek', 'Kiran', 'Bikash', 'Yash'],
    f_names: ['Shirisha', 'Shristi', 'Swornima', 'Tsamchou', 'Simixya', 'Palisha'],
    region: 'East Asia'
}
var Taiwan = {
    countryName: 'Taiwan',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Philippines = {
    countryName: 'Philippines',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Cambodia = {
    countryName: 'Cambodia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Vietnam = {
    countryName: 'Vietnam',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var NorthKorea = {
    countryName: 'North Korea',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Malaysia = {
    countryName: 'Malaysia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
//Africa
var SouthAfrica = {
    countryName: 'South Africa',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Uganda = {
    countryName: 'Uganda',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Kenya = {
    countryName: 'Kenya',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Somalia = {
    countryName: 'Somalia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Sudan = {
    countryName: 'Sudan',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Nigeria = {
    countryName: 'Nigeria',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Cameroon = {
    countryName: 'Cameroon',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Senegal = {
    countryName: 'Senegal',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
var Ghana = {
    countryName: 'Ghana',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Africa'
}
//SouthAmerica
var Brazil = {
    countryName: 'brazil',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Argentina = {
    countryName: 'Argentina',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Venezuela = {
    countryName: 'Venezuela',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Colombia = {
    countryName: 'Colombia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Peru = {
    countryName: 'Peru',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Ecuador = {
    countryName: 'Ecuador',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Uruguay = {
    countryName: 'Uruguay',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Paraguay = {
    countryName: 'Paraguay',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Aruba = {
    countryName: 'Aruba',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Chile = {
    countryName: 'Chile',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}
var Columbia = {
    countryName: 'Columbia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'South America'
}


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
}

function PopulateResponsePerson() {
    //may not need all these attributes, can pick what we want to output
    this.seenValue = rand(0, 2);
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
var countryChoice = null;
var criminalArr = [0, 1, 2];
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
                //assignNextCountry();
            }
            else if (criminal.country.countryName != country && countryVisited >= 2) {
                //you lose.
                console.log("you lose");
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
            }
            else if (criminal.country.countryName != country && countryVisited >= 1) {
                //you lose.
                console.log("you lose");
            }
        }catch(error) {console.log("error in countryChecked()");}
    }


}

//assign next country
function assignNextCountry()
{
    if(stage == 0)
    {
        console.log("in stage 0 of assign trying to push "+ criminal.country);
        console.log(criminal.country);
        crimCountryVisitedArr.push(criminal.country);
        var found = 0;
        while(found == 0)
        {
            var temp = criminal.region[rand(0, criminal.region.length -1)];
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
        var found = 0;
        while(found == 0)
        {
            var temp = criminal.region[rand(0, criminal.region.length -1)];
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
                                + criminal.special+" walks by");
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
            + criminalAtt[6]+" walks by");

    }


}

//called when 'TarryStopIntent is called. checks for number of people talked to is <= 5. If less,  then generates next person to talk to.
function talkedTo()
{
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
        if (countryChoice != criminal.country) {
            talkedToCount += 3;
            //exit from country on 2nd talk in wrong country
            if (talkedToCount >= 6) //2nd time should evaluate to 7
            {
                //response that you're in the wrong country
                console.log("wrong country reponse");
            }
        }
        else {
            if (r_person.seenValue == 0) {
                console.log("r_person seen value = 0 reponses");
                if (talkedToCount >= 5) {
                    console.log("reached final person to talk to in 0 response");
                }

            }
            else {
                console.log("r_person seen value NOT 0 reponses");
                //not sure if this is how to capture subsequent questioning
                if (talkedToCount >= 5) {
                    console.log("reached final person to talk to in NOT 0");
                    //closing response for the country and request next country intent
                }
            }
        }
        //reset counter after 5 people
        if (talkedToCount >= 5) {
            console.log("resetting counter, 5 people talked to, time to choose a country");
            talkedToCount = 0;
            if (countryChoice == criminal.country) {
                assignNextCountry();
            }
            //reassign criminal country values, create a new method for that.
        }
        else {
            console.log("poulating new r_person form talkedto()");
            r_person = new PopulateResponsePerson();
            //build response for next person walking by.
        }
    }
}


function printStuff()
{
    console.log("criminal: ");
    console.log(criminal);
    console.log("person: ");
    console.log(r_person);
    console.log("Talked to Count: ");
    console.log(talkedToCount);
    console.log("stage: ");
    console.log(stage);
    console.log("Country Visited: ");
    console.log(countryVisited);
    console.log("crimCountryVisited Array: ");
    console.log(crimCountryVisitedArr);
    console.log("Country Choice: ");
    console.log(countryChoice);
}

//winning scenario
criminal = new PopulateCriminal();
assignNextCountry();
r_person = new PopulateResponsePerson();
//visit correct country move to stage 1
checkCountry(criminal.country.countryName);
talkedTo();
talkedTo();
talkedTo();
talkedTo();
printStuff();
talkedTo();
//visit correct country move to stage 2
checkCountry(criminal.country.countryName);
talkedTo();
talkedTo();
talkedTo();
talkedTo();
printStuff();
talkedTo();
//pick th correct guy

//losing scenario
criminal = new PopulateCriminal();
assignNextCountry();
r_person = new PopulateResponsePerson();
var temp1 = criminal.region[rand(0, criminal.region.length - 1)].countryName;
console.log("testing temp");
console.log(temp1);
//visit 1st wrong country
checkCountry(temp1);
talkedTo();
talkedTo();
//printStuff();
//visit 2nd wrong country
checkCountry(criminal.region[rand(0, criminal.region.length - 1)].countryName);
talkedTo();
talkedTo();
//printStuff();
/**
criminal = new PopulateCriminal();
assignNextCountry();
r_person = new PopulateResponsePerson();
printStuff();
//stage 0 pick wrong country (very likely)
checkCountry("Uganda");
printStuff();
//talking to 2 new people in wrong country
talkedTo();
talkedTo();
printStuff();
//stage 0, will pick correct country on try 2
checkCountry(criminal.country.countryName);
printStuff();
//talked to 5 correct people
talkedTo();
talkedTo();
talkedTo();
talkedTo();
talkedTo();
printStuff();
 **/
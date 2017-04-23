//helper
function buildSpeechletResponse (outputText, shouldEndSession) {

    return {
        outputSpeech: {
            type: "PlainText",
            text: outputText
        },
        shouldEndSession: shouldEndSession
    };
}

function generateResponse (sessionAttributes, speechletResponse) {
    return {
        version:"1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
var Syria = {
    countryName: 'Syria',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
var Iraq = {
    countryName: 'Iraq',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
var SaudiArabia = {
    countryName: 'Saudi Arabia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
var Lebanon = {
    countryName: 'Lebanon',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
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
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Mongolia = {
    countryName: 'Mongolia',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'East Asia'
}
var Nepal = {
    countryName: 'Nepal',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
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
    this.crime = Countries[rand(0, Countries.length -1)]; //need to fill with actual crimes.
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairLength.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length) -1];
    this.height = height[rand(0, height.length) -1];
    this.special = special[rand(0, special.length) -1];
    this.name = name(this.country, this.gender);
}
//will use below assignment if above one doesn't work, getting element not exported error
//criminal.name = name(criminal.country, criminal.gender);

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
function checkCountry(country)
{
    //assign choice of country and count for validation checking in other methods
    countryVisited++;

    if(stage == 0)
    {
        for (i = 0; i < Region.length; i++)
        {
            for(j = 0; j < Region[i].length; j++)
            {
                if (Region[i][j].countryName == country)
                {
                    //assign countryChoice if said country is a valid choice
                    countryChoice = criminal.region[i];
                }
            }
        }

        try {
            //if country doesn't register then they gave a country naem we don't have, error output
            if (countryChoice.countryName != country) {
                //error response, prompt for a valid country choice.

                //fix counter
                countryVisited--;
            }

            //if correct country chosen then reset count, go to next stage, assign next country
            if (criminal.country.countryName == country) {
                countryVisited = 0;
                stage++;
                assignNextCountry();
            }
            else if (criminal.country.countryName != country && countryVisited >= 2) {
                //you lose.
            }
        } catch (error) {
            context.fail("CountryChoice incorrect handling");
        }
    }
    else
    {
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

                //fix counter
                countryVisited--;
            }

            //if correct country chosen then reset count, go to next stage, assign next country
            if (criminal.country.countryName == country) {
                countryVisited = 0;
                stage++;
                crimCountryVisitedArr.push(countryChoice);
                assignNextCountry();
            }
            else if (criminal.country.countryName != country && countryVisited >= 1) {
                //you lose.
            }
        }catch(error) {context.fail("CountryChoice incorrect handling");}
    }


}

//assign next country
function assignNextCountry()
{
    if(stage == 0)
    {
        crimCountryVisitedArr.push(criminal.country);
        var found = 0;
        while(found == 0)
        {
            var temp = criminal.region[rand(0, criminal.region.length -1)];
            if(crimCountryVisitedArr.indexOf(temp) == -1)
            {
                criminal.nextCountry = temp;
                //exit loop
                found++;
            }
        }
    }
    else
    {
        var found = 0;
        while(found == 0)
        {
            var temp = criminal.region[rand(0, criminal.region.length -1)];
            if(crimCountryVisitedArr.indexOf(temp) == -1)
            {

                criminal.country = criminal.nextCountry;
                criminal.nextCountry = temp;
                //exit loop
                found++;
            }
        }
    }
}

//called when 'TarryStopIntent is called. checks for number of people talked to is <= 5. If less,  then generates next person to talk to.
function talkedTo()
{
    //final stage prompt.
    if(stage >= 3)
    {
        //stuff for populating possible criminals for player to stop.
    }
    //non-final stages
    talkedToCount++;
    if(countryChoice != criminal.country)
    {
        talkedToCount += 3;
        buildSpeechletResponse("They keep walking by", false),
            {}
        //exit from country on 2nd talk in wrong country
        if(talkedToCount >= 6) //2nd time should evaluate to 7
        {
            //response that you're in the wrong country
        }
    }
    else {
        if (r_person.seenValue == 0) {
            generateResponse
            (
                buildSpeechletResponse("They keep walking by", false),
                {}
            )
            if (talkedToCount >= 5) {
                //closing response for countryChoice then choice for next countries
            }

        }
        else
        {
            generateResponse
            (
                {},buildSpeechletResponse(greetings[rand(0, greetings.length - 1)], false)
            )
            //not sure if this is how to capture subsequent questioning intents so this will just be here for concept sake
            //Chad TODO
            //Could you help me check to see if this actually listens for next prompt? I'm hoping it does haha.
            //it SHOULD allow the user to ask questions about the crime, looks, where criminal is heading, etc.
            //Alan TODO
            //set flags to indicatte you're in questioning state so no other intents except stop, help, restart should register.
            //May need to include similar state checks on all intents.
            switch (event.request.type.name) {
                case "CrimeBackgroundQuestionIntent":
                    generateResponse
                    (
                        {},buildSpeechletResponse("You're in crime background question intent", false)
                    )
                    //random info about criminal given --still thinking about how to randomize this atm
                    break;
                case "CriminalLooksQuestionIntent":
                    generateResponse
                    (
                        {},buildSpeechletResponse("You're in criminal look question intent", false)
                    )
                    //random info about criminal looks given -- also still thinking about how to for this.
                    break;
                case "FinishTalkingIntent":
                    generateResponse
                    (
                        {},buildSpeechletResponse("You're in finished talking intent", false)
                    )
                    //break convo
                    break;
            }
            if (talkedToCount >= 5) {
                //closing response for the country and request next country intent
            }
        }
    }
    //reset counter after 5 people
    if(talkedToCount >= 5)
    {
        talkedToCount = 0;
        //reassign criminal country values, create a new method for that.
    }
    else
    {
        r_person = new PopulateResponsePerson();
        //build response for next person walking by.
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
		criminal.name = name(criminal.country, criminal.gender);
		assignNextCountry();
		// introduces criminal and crime, asks which country the user would like to visit, TODO prompt with country choices
		var speechOutput = this.t("INTRO_MESSAGE", criminal.name, pronoun(criminal.gender), criminal.crime, rand(50, 800), criminal.name, criminal.name, pronounOwnership(criminal.gender), criminal.name) + this.t("CHOOSE_COUNTRY");
		this.emit(":ask", speechOutput);
    },
    "CountryIntent": function () {
		// line below sets country to the one the user spoke, from the country_item slot list
		countryChoice = this.event.request.intent.slots.country_item.value;
		r_person = new PopulateResponsePerson();
		var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice) + this.t("ARRIVAL_MESSAGE", countryChoice, criminal.name) + this.t("PERSON_APPROACHING", r_person.gender, r_person.hairColor, r_person.body);
        this.emit(":ask", speechOutput);		
    },
	"TarryStopIntent": function () {      
		//r_person = new PopulateResponsePerson();
		talkedTo();
		var speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender));
		this.emit(":ask", speechOutput);		
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


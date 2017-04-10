

//helper
buildSpeechletResponse = (outputText, shouldEndSession) => {

    return {
        outputSpeech: {
            type: "PlainText",
            text: outputText
        },
        shouldEndSession: shouldEndSession
    }
}

generateResponse = (sessionAttributes, speechletResponse) => {
    return {
        version:"1.0",
        sessionAttributes: sessionAttributes,
        reponse: speechletReponse
    }
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


//People attributes
var gender = ['male', 'female'];
var hairLength = ['long', 'short', 'medium'];
var hairColor = ['black', 'brown', 'blond'];
var eyeSize = ['small', 'large', 'no'];
var eyeColor = ['black', 'brown', 'blue', 'green', 'red'];
var body = ['fat', 'skinny'];
var special = ['missing hand', 'limp'];
var p_special = ['headphones', 'bathing suit', 'naked'];
var greetings = ['hey', 'whats up', 'hi'];

//countries
var Egypt  = {
    countryName: 'Egypt',
    facts:  ['egypt fact 1', 'egypt fact 2', 'egypt fact 3'],
    m_names: ['m1', 'm2', 'm3'],
    f_names: ['f1', 'f2', 'f3']
}
var Iran = {
    countryName: 'Iran',
    facts: ['Iran fact 1', 'Iran fact 2', 'Iran fact 3'],
    m_names: ['m1', 'm2', 'm3'],
    f_names: ['f1', 'f2', 'f3']
}
var Countries = [Egypt, Iran];

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
    this.country = Countries[rand(0, Countries.length -1)];
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairLength.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length) -1];
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
var criminal = null;//new populateCriminal();
var r_person = null;
var talkedToCount = 0;
var countryVisited = 0;
var countryChoice = null;
function checkCountry(country)
{
    countryVisited++;
    for(i = 0; i < Countries.length; i++)
    {
        if(Countries[i].countryName == country)
        {
            countryChoice = Countries[i];
        }
    }

    if(criminal.country.countryName == country)
    {
        countryVisited = 0;
    }
}
function talkedTo()
{
    if(r_person.seenValue == 0)
    {
        generateResponse
        (
            buildSpeechletResponse("They keep walking by", false),
            {}
        )
        if(talkedToCount >= 5)
        {
            //closing response for countryChoice then choice for next countries
        }

    }
    else
    {
        generateResponse
        (
            buildSpeechletResponse(greetings[rand(0, greetings.length - 1)], false),
            {}
        )
        //not sure if this is how to capture subsequent questioning intents so this will just be here for concept sake
        switch(event.request.type.name)
        {
            case "CrimeBackgroundQuestionIntent":
                //random info about criminal given --still thinking about how to randomize this atm
                break;
            case "CriminalLooksQuestionIntent":
                //random info about criminal looks given -- also still thinking about how to for this.
                break;
        }
        if(talkedToCount >= 5)
        {
            //closing response for the country and request next country
        }
    }
    talkedToCount++;
    r_person = new PopulateResponsePerson();
}

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
                console.log('LAUNCH REQUEST')
                context.succeed
                (
                    generateResponse
                    (
                        buildSpeechletResponse("Welcome to Sleuth Hound", false),
                        {}
                    )
                )
                break;

            case "IntentRequest":
                //intent request
                //main stuff here
                switch(event.request.intent.name)
                {
                    case "GameStart":
                        //populate criminal
                        criminal = new PopulateCriminal();
                        r_person = new PopulateResponsePerson();

                        //build a response using criminal.country.facts, criminal.name, criminal.gender
                    case "CountryIntent":
                        //grab country from intent first then call checkCountry(country) method
                        checkCountry(country);
                        //arrival jingle response

                        //response from countryChoice.facts[rand(0, countryChoice.facts.length -1]

                        //build-person walking-by response using r_person.gender, r_person.p_special

                        break;

                    case "TarryStopIntent":
                        talkedTo();
                        break;

                    //case "CrimeBackgroundQuestionIntent":
                    //    break;
                    default:
                        break;

                }
                console.log("INTENT REQUEST")
                break;

            case "SessionEndedRequest":
                console.log('SESSION ENDEDD REQUEST')
                break;

            default:
                context.fail('INVALID REQUEST TYPE: ${event.request.type}')
        }

    } catch(error) {context.fail('Exception: ${error}')}




}
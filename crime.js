
class facialhair() {

}
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hairLength = ['long', 'short', 'medium'];
var hairColor = ['black', 'brown', 'blond'];
var eyeSize = ['small', 'large', 'no'];
var eyeColor = ['black', 'brown', 'blue', 'green', 'red'];
var body = ['fat', 'skinny']

var criminal =  {
    country: "Egypt",
    hairLength: hairLength[rand(0, hairLength.length -1)],
    hairColor: hairColor[rand(0, hairLength.length -1)],
    eyeSize: eyeSize[rand(0, eyeSize.length -1)],
    eyeColor: eyeColor[rand(0, eyeColor.length -1)],
    body: body[rand(0, eyeColor.length) -1]
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
                        generateResponse(
                            buildSpeechletResponse()
                        )
                    case "CountryIntent":
                        //get country from intent

                        break;

                    case "TarryStopIntent":
                        break;

                    case "CrimeBackgroundQuestionIntent:":
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
};  
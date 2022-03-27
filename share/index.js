// noinspection JSCheckFunctionSignatures
let url;

/**
 * Assign a URL to redirect to
 */
try {
    switch ((new Proxy(new URLSearchParams(window.location.search), {get: (searchParams, prop) => searchParams.get(prop)}))["share"]) {

        case ("twitter"): {
            url = "https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwciyrdsb.github.io%2Fua-redirect%2F/&text=%0Ahttps%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Foriginal_referer%3Dhttps%3A%2F%2Fwciyrdsb.github.io%2Fua-redirect%2F%2F%26text%3DThe%20%23WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20democracy.%20Donate%20now.%20https%3A%2F%2Fwciyrdsb.github.io%2Fua-redirect%2Fshare%2F";
            break;
        }
    
        default: {
            url = "https://wciyrdsb.github.io/ua-redirect/"
            break;
        }

    }
} catch (ex) {
    url = "https://wciyrdsb.github.io/ua-redirect/";
}




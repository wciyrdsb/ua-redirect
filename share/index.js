const share = (
    new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    })
)["share"];


switch (share) {

    case ("twitter"): {
        break;
    }

    default: {
        window.location.href = "/"
        break;
    }

}

